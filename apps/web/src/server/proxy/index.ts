import { spawn } from "node:child_process";
import net from "node:net";
import websocketPlugin from "@fastify/websocket";
import Fastify from "fastify";
import { WebSocket } from "ws";
import { env } from "@/env";
import { normalizeContainerName } from "@/lib/utils";
import { db } from "@/server/db";
import { auth } from "@/server/auth";

const PORT = Number(process.env.PROXY_PORT ?? 7682);
const DISABLE_AUTH = process.env.NEXT_PUBLIC_DISABLE_AUTH === "true";

/**
 * Resolves the userId from the better-auth session cookie by delegating to
 * auth.api.getSession(), which handles signed-cookie verification correctly.
 * Returns null if the session is missing or expired.
 */
async function getUserIdFromCookies(
  cookieHeader: string | undefined,
): Promise<string | null> {
  if (!cookieHeader) return null;
  const headers = new Headers({ cookie: cookieHeader });
  const session = await auth.api.getSession({ headers });
  return session?.user?.id ?? null;
}

/**
 * Returns the containerName if the user has access to the given terminal session.
 * Access is granted when the user owns the session OR when the session belongs
 * to a shared project.
 */
async function resolveTerminalAccess(
  sessionId: string,
  userId: string,
): Promise<string | null> {
  const session = await db.terminalSession.findFirst({
    where: {
      id: sessionId,
      status: "running",
      OR: [{ userId }, { project: { shared: true } }],
    },
    select: { containerName: true },
  });
  return session?.containerName ?? null;
}

/**
 * Returns the first admin user's ID.
 * Used when NEXT_PUBLIC_DISABLE_AUTH=true to bypass token validation.
 */
async function getAdminUserId(): Promise<string | null> {
  const admin = await db.user.findFirst({
    where: { role: "admin" },
    select: { id: true },
  });
  return admin?.id ?? null;
}

/**
 * Creates a local loopback TCP server that tunnels to the target container
 * port via `docker exec nc`.
 *
 * This is the fallback path for when the container's Docker network is not
 * directly reachable from the host (e.g., macOS Docker Desktop). It uses
 * the Docker daemon (accessible via socket) to exec `nc` inside the
 * container, bridging the TCP stream through the daemon instead of the
 * network.
 *
 * Returns the local port that accepts exactly one proxied connection.
 */
function createDockerExecBridge(
  containerName: string,
  containerPort: number,
): Promise<{ port: number; cleanup: () => void }> {
  return new Promise((resolve, reject) => {
    const server = net.createServer((bridgeSocket) => {
      server.close(); // one-shot: accept a single connection

      const proc = spawn("docker", [
        "exec",
        "-i",
        normalizeContainerName(containerName),
        "nc",
        "localhost",
        String(containerPort),
      ]);

      proc.stdout.pipe(bridgeSocket);
      bridgeSocket.pipe(proc.stdin);

      bridgeSocket.on("close", () => proc.kill());
      proc.on("close", () => bridgeSocket.destroy());
    });

    server.listen(0, "127.0.0.1", () => {
      const addr = server.address() as net.AddressInfo;
      resolve({
        port: addr.port,
        cleanup: () => server.close(),
      });
    });

    server.on("error", reject);
  });
}

/**
 * Connects to the ttyd WebSocket inside a container.
 *
 * Strategy:
 * 1. Try a direct WebSocket connection to `ws://<containerName>:<port>/ws`.
 *    This succeeds immediately in Docker environments where the proxy is on
 *    the same internal network as the agent containers.
 * 2. If direct connection fails (DNS resolution failure on macOS host, or
 *    any other network error), fall back to a `docker exec nc` bridge that
 *    tunnels through the Docker daemon socket.
 *
 * The returned WebSocket is already in OPEN state.
 */
async function connectToContainerWs(
  containerName: string,
  ttydPort: number,
  protocols: string[],
  maxAttempts = 10,
  retryDelayMs = 500,
): Promise<WebSocket> {
  const tryOnce = async (): Promise<WebSocket | null> => {
    // --- Attempt 1: direct connection ---
    const direct = await new Promise<WebSocket | null>((resolve) => {
      const ws = new WebSocket(
        `ws://${containerName}:${ttydPort}/ws`,
        protocols,
      );
      ws.binaryType = "nodebuffer";

      const timer = setTimeout(() => {
        ws.terminate();
        resolve(null);
      }, 1500);

      ws.once("open", () => {
        clearTimeout(timer);
        resolve(ws);
      });
      ws.once("error", () => {
        clearTimeout(timer);
        resolve(null);
      });
    });

    if (direct) return direct;

    // --- Attempt 2: docker exec nc bridge ---
    const bridge = await createDockerExecBridge(containerName, ttydPort);

    return new Promise<WebSocket | null>((resolve) => {
      const ws = new WebSocket(`ws://127.0.0.1:${bridge.port}/ws`, protocols);
      ws.binaryType = "nodebuffer";

      ws.once("open", () => resolve(ws));
      ws.once("error", () => {
        bridge.cleanup();
        resolve(null);
      });
    });
  };

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const ws = await tryOnce();
    if (ws) return ws;
    if (attempt < maxAttempts) {
      await new Promise((r) => setTimeout(r, retryDelayMs));
    }
  }

  throw new Error(
    `Could not connect to ${containerName}:${ttydPort} after ${maxAttempts} attempts`,
  );
}

export async function start() {
  const server = Fastify({ logger: { level: "info" } });

  await server.register(websocketPlugin);

  /**
   * WebSocket proxy for a running terminal session.
   *
   * Auth: expects ?token=<session-token> in the query string.
   * The token is issued by the tRPC terminal.getWsToken endpoint, which
   * validates the user's better-auth session server-side before returning it.
   *
   * Access: owner of the terminal session, or any authenticated user when
   * the session belongs to a shared project.
   *
   * URL: /terminal/:sessionId?token=<session-token>
   */
  server.get(
    "/terminal/:sessionId",
    { websocket: true },
    async (socket, request) => {
      const { sessionId } = request.params as { sessionId: string };
      server.log.info({ sessionId }, "[proxy] ws handler entered");
      server.log.info({ sessionId, cookie: request.headers.cookie }, "[proxy] raw cookie header");

      // --- Auth ---
      let userId: string | null;
      if (DISABLE_AUTH) {
        userId = await getAdminUserId();
      } else {
        userId = await getUserIdFromCookies(request.headers.cookie);
      }

      server.log.info({ sessionId, userId, disableAuth: DISABLE_AUTH }, "[proxy] auth result");

      if (!userId) {
        server.log.warn({ sessionId }, "[proxy] closing: unauthorized");
        socket.close(1008, "Unauthorized");
        return;
      }

      // --- Access + container resolution ---
      const containerName = await resolveTerminalAccess(sessionId, userId);
      server.log.info({ sessionId, userId, containerName }, "[proxy] access result");

      if (!containerName) {
        server.log.warn({ sessionId, userId }, "[proxy] closing: session not found or access denied");
        socket.close(1008, "Session not found, not running, or access denied");
        return;
      }

      // Forward the WebSocket subprotocol header. ttyd uses the "tty" subprotocol.
      const protocols = (
        request.headers["sec-websocket-protocol"] as string | undefined
      )
        ?.split(",")
        .map((p) => p.trim()) ?? ["tty"];

      server.log.info({ sessionId, containerName, protocols }, "[proxy] connecting to upstream");

      // Buffer messages that arrive from the client while the upstream is
      // still being established (auth + retry loop). Without this, the ttyd
      // handshake sent by the browser right after the WS opens would be lost.
      const clientMessageBuffer: Array<{ data: Buffer; isBinary: boolean }> =
        [];
      const bufferClientMessage = (data: Buffer, isBinary: boolean) => {
        clientMessageBuffer.push({ data, isBinary });
      };
      socket.on("message", bufferClientMessage);

      // --- Upstream connection (direct or via docker exec bridge) ---
      let upstream: WebSocket;
      try {
        upstream = await connectToContainerWs(
          containerName,
          env.TTYD_PORT,
          protocols,
        );
        server.log.info({ sessionId, containerName }, "[proxy] upstream connected");
      } catch (err) {
        server.log.error(
          { err, containerName, sessionId },
          "[proxy] failed to connect to container",
        );
        socket.close(1011, "Could not connect to terminal");
        return;
      }

      // --- Bidirectional bridge (upstream is already OPEN here) ---

      // Swap out the buffer listener and flush any queued messages.
      socket.off("message", bufferClientMessage);
      for (const { data, isBinary } of clientMessageBuffer) {
        if (upstream.readyState === WebSocket.OPEN) {
          upstream.send(data, { binary: isBinary });
        }
      }

      socket.on("message", (data: Buffer, isBinary: boolean) => {
        if (upstream.readyState === WebSocket.OPEN) {
          upstream.send(data, { binary: isBinary });
        }
      });

      upstream.on("message", (data: Buffer, isBinary: boolean) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(data, { binary: isBinary });
        }
      });

      upstream.on("close", (code, reason) => {
        server.log.info({ sessionId, code, reason: reason.toString() }, "[proxy] upstream closed");
        if (socket.readyState === WebSocket.OPEN) {
          socket.close(code, reason);
        }
      });

      upstream.on("error", (err) => {
        server.log.error({ err, sessionId }, "[proxy] upstream error");
        if (socket.readyState === WebSocket.OPEN) {
          socket.close(1011, "Upstream error");
        }
      });

      socket.on("close", (code, reason) => {
        server.log.info({ sessionId, code, reason: reason?.toString() }, "[proxy] client closed");
        if (
          upstream.readyState !== WebSocket.CLOSED &&
          upstream.readyState !== WebSocket.CLOSING
        ) {
          upstream.terminate();
        }
      });

      socket.on("error", (err) => {
        server.log.error({ err, sessionId }, "[proxy] client socket error");
        upstream.terminate();
      });
    },
  );

  const gracefulShutdown = async (signal: string) => {
    server.log.info(`Received ${signal}, shutting down proxy...`);
    await server.close();
    process.exit(0);
  };

  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));

  await server.listen({ port: PORT, host: "0.0.0.0" });
  server.log.info(`[proxy] WS proxy listening on :${PORT}`);
}

