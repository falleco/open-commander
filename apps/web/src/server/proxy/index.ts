import { execFile, spawn } from "node:child_process";
import net from "node:net";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
import websocketPlugin from "@fastify/websocket";
import Fastify from "fastify";
import { WebSocket } from "ws";
import { env } from "@/env";
import { normalizeContainerName } from "@/lib/utils";
import { db } from "@/server/db";
import { auth } from "@/server/auth";
import type { TerminalSessionStatus } from "@/generated/prisma";
import { onPresenceChange } from "@/server/presence-broadcaster";
import { onSessionChange } from "@/server/session-broadcaster";

/**
 * Bun's `http.request` fires a `response` event (not `upgrade`) for 101
 * responses, so the `ws` npm package's WebSocket client does not work for
 * outgoing connections on Bun.  We use Bun's native global `WebSocket`
 * instead and wrap it in a thin EventEmitter-compatible shim so the rest of
 * the proxy code can stay unchanged.
 */
class UpstreamWs {
  private _ws: globalThis.WebSocket;

  // Mirror the constants the bridging code references.
  static readonly OPEN = 1;
  static readonly CLOSING = 2;
  static readonly CLOSED = 3;

  constructor(url: string) {
    // Do NOT request a subprotocol – ttyd doesn't echo it back, and Bun's
    // native WS (unlike the ws package) would reject the non-echoed protocol.
    this._ws = new globalThis.WebSocket(url);
    this._ws.binaryType = "arraybuffer";
  }

  get readyState() {
    return this._ws.readyState;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  once(event: "open" | "error" | "close", cb: (...args: any[]) => void) {
    if (event === "open") {
      this._ws.addEventListener("open", () => cb(), { once: true });
    } else if (event === "error") {
      this._ws.addEventListener(
        "error",
        (e) => cb(new Error((e as ErrorEvent).message ?? "WebSocket error")),
        { once: true },
      );
    } else if (event === "close") {
      this._ws.addEventListener(
        "close",
        (e) => cb((e as CloseEvent).code),
        { once: true },
      );
    }
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event: string, cb: (...args: any[]) => void) {
    if (event === "message") {
      this._ws.addEventListener("message", (e) => {
        const raw = (e as MessageEvent).data;
        const buf =
          raw instanceof ArrayBuffer
            ? Buffer.from(raw)
            : typeof raw === "string"
              ? Buffer.from(raw)
              : Buffer.from(raw as ArrayBuffer);
        cb(buf, true);
      });
    } else if (event === "close") {
      this._ws.addEventListener("close", (e) => cb((e as CloseEvent).code));
    } else if (event === "error") {
      this._ws.addEventListener("error", (e) => cb(e));
    }
    return this;
  }

  send(data: Buffer | string, _opts?: { binary?: boolean }) {
    if (this._ws.readyState === 1 /* OPEN */) {
      this._ws.send(data);
    }
  }

  terminate() {
    this._ws.close();
  }
}

const PORT = Number(process.env.PROXY_PORT ?? 7682);
const DISABLE_AUTH = process.env.NEXT_PUBLIC_DISABLE_AUTH === "true";

/** Maximum allowed length for sessionId / projectId path parameters. */
const MAX_ID_LEN = 128;
/** Maximum number of messages buffered from the client before upstream is ready. */
const MAX_CLIENT_BUFFER = 64;

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
 * Returns true if the user owns the project or the project is shared.
 * Used to gate presence and sessions WebSocket subscriptions.
 */
async function resolveProjectAccess(
  projectId: string,
  userId: string,
): Promise<boolean> {
  const project = await db.project.findFirst({
    where: { id: projectId, OR: [{ userId }, { shared: true }] },
    select: { id: true },
  });
  return project !== null;
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
 * Connects to the ttyd WebSocket inside a container using Bun's native
 * WebSocket (via UpstreamWs shim).
 *
 * Strategy:
 * 1. Try a direct WebSocket connection to `ws://<containerName>:<port>/ws`.
 *    Works in environments where the proxy is on the same Docker network.
 * 2. If direct fails (DNS not resolvable in DinD mode), resolve the container
 *    IP via `docker inspect` and connect directly by IP.
 * 3. Fall back to a `docker exec nc` TCP bridge that tunnels through the
 *    Docker daemon socket.
 *
 * The returned UpstreamWs is already in OPEN state.
 */
async function connectToContainerWs(
  containerName: string,
  ttydPort: number,
  maxAttempts = 10,
  retryDelayMs = 500,
): Promise<UpstreamWs> {
  const tryUrl = (url: string): Promise<UpstreamWs | null> =>
    new Promise((resolve) => {
      const ws = new UpstreamWs(url);
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

  const tryOnce = async (): Promise<UpstreamWs | null> => {
    // --- Attempt 1: direct hostname ---
    const direct = await tryUrl(`ws://${containerName}:${ttydPort}/ws`);
    if (direct) return direct;

    // --- Attempt 1.5: direct connection by container IP ---
    // Hostname resolution fails in DinD mode because the commander process
    // uses the outer Docker DNS, which doesn't know about containers inside
    // the internal dockerd. Bridge network IPs ARE directly reachable.
    try {
      const { stdout } = await execFileAsync("docker", [
        "inspect",
        "-f",
        "{{range .NetworkSettings.Networks}}{{.IPAddress}}\n{{end}}",
        containerName,
      ]);
      const containerIp = stdout
        .split("\n")
        .map((l) => l.trim())
        .find((l) => l.length > 0);
      if (containerIp) {
        const byIp = await tryUrl(`ws://${containerIp}:${ttydPort}/ws`);
        if (byIp) return byIp;
      }
    } catch {
      // docker inspect failed — fall through to exec bridge
    }

    // --- Attempt 2: docker exec nc bridge ---
    // Creates a loopback TCP tunnel through the Docker daemon so the native
    // WebSocket client can reach ttyd even when direct IP routing fails.
    const bridge = await createDockerExecBridge(containerName, ttydPort);
    const byBridge = await tryUrl(`ws://127.0.0.1:${bridge.port}/ws`);
    if (!byBridge) bridge.cleanup();
    return byBridge;
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

function log(level: "info" | "warn" | "error", msg: string) {
  const mark = level === "error" ? "✗" : level === "warn" ? "⚠" : "○";
  const out = level === "error" ? console.error : level === "warn" ? console.warn : console.log;
  out(` ${mark} proxy  ${msg}`);
}

export async function start() {
  const server = Fastify({ logger: false });

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

      // --- Input validation ---
      if (!sessionId || sessionId.length > MAX_ID_LEN) {
        socket.close(1008, "Invalid request");
        return;
      }

      // --- Auth ---
      let userId: string | null;
      if (DISABLE_AUTH) {
        userId = await getAdminUserId();
      } else {
        userId = await getUserIdFromCookies(request.headers.cookie);
      }

      if (!userId) {
        log("warn", `WS /terminal/${sessionId} 401 unauthorized`);
        socket.close(1008, "Unauthorized");
        return;
      }

      // --- Access + container resolution ---
      const containerName = await resolveTerminalAccess(sessionId, userId);

      if (!containerName) {
        log("warn", `WS /terminal/${sessionId} 403 session not found or denied uid=${userId}`);
        socket.close(1008, "Session not found, not running, or access denied");
        return;
      }

      log("info", `WS /terminal/${sessionId} open uid=${userId} → ${containerName}`);

      // Buffer messages that arrive from the client while the upstream is
      // still being established (auth + retry loop). Without this, the ttyd
      // handshake sent by the browser right after the WS opens would be lost.
      const clientMessageBuffer: Array<{ data: Buffer; isBinary: boolean }> =
        [];
      const bufferClientMessage = (data: Buffer, isBinary: boolean) => {
        if (clientMessageBuffer.length < MAX_CLIENT_BUFFER) {
          clientMessageBuffer.push({ data, isBinary });
        }
      };
      socket.on("message", bufferClientMessage);

      // --- Upstream connection (direct or via docker exec bridge) ---
      let upstream: UpstreamWs;
      try {
        upstream = await connectToContainerWs(
          containerName,
          env.TTYD_PORT,
        );
        log("info", `WS /terminal/${sessionId} → ${containerName} ready`);
      } catch (err) {
        log("error", `WS /terminal/${sessionId} → ${containerName} failed: ${err instanceof Error ? err.message : String(err)}`);
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

      upstream.on("close", (code: number) => {
        log("info", `WS /terminal/${sessionId} upstream closed ${code}`);
        if (socket.readyState === WebSocket.OPEN) {
          socket.close(code);
        }
      });

      upstream.on("error", (err: unknown) => {
        log("error", `WS /terminal/${sessionId} upstream error: ${err instanceof Error ? err.message : String(err)}`);
        if (socket.readyState === WebSocket.OPEN) {
          socket.close(1011, "Upstream error");
        }
      });

      socket.on("close", (code) => {
        log("info", `WS /terminal/${sessionId} closed ${code}`);
        if (
          upstream.readyState !== WebSocket.CLOSED &&
          upstream.readyState !== WebSocket.CLOSING
        ) {
          upstream.terminate();
        }
      });

      socket.on("error", (err) => {
        log("error", `WS /terminal/${sessionId} client error: ${err.message}`);
        upstream.terminate();
      });
    },
  );

  // ---------------------------------------------------------------------------
  // Presence WebSocket — pushes SessionPresence updates to subscribed clients.
  //
  // One DB query per change event, result broadcast to ALL clients watching
  // the same projectId (no per-client polling).
  // ---------------------------------------------------------------------------

  const PRESENCE_STALE_MS = 5 * 60 * 1000;

  /** Fetch the current non-stale presences for a project. */
  async function fetchProjectPresence(projectId: string) {
    const staleThreshold = new Date(Date.now() - PRESENCE_STALE_MS);
    return db.sessionPresence.findMany({
      where: {
        lastSeen: { gte: staleThreshold },
        session: { projectId },
      },
      select: {
        userId: true,
        sessionId: true,
        status: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            avatarImageUrl: true,
          },
        },
      },
    });
  }

  /** projectId → set of open client sockets */
  const presenceClients = new Map<string, Set<WebSocket>>();
  /** projectId → broadcaster unsubscribe fn (one per active project) */
  const presenceUnsubs = new Map<string, () => void>();

  function broadcastPresence(projectId: string) {
    const clients = presenceClients.get(projectId);
    if (!clients?.size) return;
    fetchProjectPresence(projectId)
      .then((data) => {
        const json = JSON.stringify(data);
        for (const ws of clients) {
          if (ws.readyState === WebSocket.OPEN) ws.send(json);
        }
      })
      .catch(() => {/* best-effort */});
  }

  /**
   * WebSocket endpoint for real-time presence updates.
   * URL: /presence/:projectId
   */
  server.get(
    "/presence/:projectId",
    { websocket: true },
    async (socket, request) => {
      const { projectId } = request.params as { projectId: string };

      // --- Input validation ---
      if (!projectId || projectId.length > MAX_ID_LEN) {
        socket.close(1008, "Invalid request");
        return;
      }

      // --- Auth ---
      let userId: string | null;
      if (DISABLE_AUTH) {
        userId = await getAdminUserId();
      } else {
        userId = await getUserIdFromCookies(request.headers.cookie);
      }

      if (!userId) {
        socket.close(1008, "Unauthorized");
        return;
      }

      const uid = userId;

      // --- Project access check ---
      const hasProjectAccess = await resolveProjectAccess(projectId, uid);
      if (!hasProjectAccess) {
        log("warn", `WS /presence/${projectId} 403 denied uid=${uid}`);
        socket.close(1008, "Project not found or access denied");
        return;
      }

      // --- Register subscriber ---
      if (!presenceClients.has(projectId)) {
        presenceClients.set(projectId, new Set());
      }
      presenceClients.get(projectId)!.add(socket);

      // Subscribe to broadcaster once per active projectId
      if (!presenceUnsubs.has(projectId)) {
        const unsub = onPresenceChange(projectId, () =>
          broadcastPresence(projectId),
        );
        presenceUnsubs.set(projectId, unsub);
      }

      const sendCurrentState = () =>
        fetchProjectPresence(projectId)
          .then((data) => {
            if (socket.readyState === WebSocket.OPEN) {
              socket.send(JSON.stringify(data));
            }
          })
          .catch(() => {/* best-effort */});

      // Send current state immediately on connect.
      sendCurrentState();

      // Re-send after a short delay to catch heartbeats that raced ahead of
      // this WS connection being established (common on page load / refresh).
      const warmupTimer = setTimeout(sendCurrentState, 600);
      socket.on("close", () => clearTimeout(warmupTimer));

      // Handle heartbeat and leave messages sent by the client over this WS.
      socket.on("message", async (raw: Buffer) => {
        let msg: Record<string, unknown>;
        try {
          msg = JSON.parse(raw.toString()) as Record<string, unknown>;
        } catch {
          return; // malformed — ignore
        }
        const { type } = msg;
        const now = new Date();
        const staleThreshold = new Date(now.getTime() - PRESENCE_STALE_MS);

        if (type === "heartbeat") {
          const { sessionId, status } = msg as { sessionId: unknown; status: unknown };
          if (typeof sessionId !== "string" || !sessionId || sessionId.length > MAX_ID_LEN) return;
          // Validate the session belongs to this project to prevent cross-project presence claims.
          const sessionBelongs = await db.terminalSession.findFirst({
            where: { id: sessionId, projectId },
            select: { id: true },
          });
          if (!sessionBelongs) return;
          const validStatus = (["active", "viewing", "inactive"] as const).includes(
            status as "active" | "viewing" | "inactive",
          )
            ? (status as "active" | "viewing" | "inactive")
            : "inactive";
          await Promise.all([
            db.sessionPresence.deleteMany({ where: { lastSeen: { lt: staleThreshold } } }),
            db.sessionPresence.upsert({
              where: { userId: uid },
              create: { userId: uid, sessionId, status: validStatus, lastSeen: now },
              update: { sessionId, status: validStatus, lastSeen: now },
            }),
          ]);
          broadcastPresence(projectId);
        } else if (type === "leave") {
          await db.sessionPresence.delete({ where: { userId: uid } }).catch(() => {});
          broadcastPresence(projectId);
        }
      });

      socket.on("close", () => {
        const clients = presenceClients.get(projectId);
        if (clients) {
          clients.delete(socket);
          // Clean up broadcaster subscription when no clients remain
          if (clients.size === 0) {
            presenceClients.delete(projectId);
            presenceUnsubs.get(projectId)?.();
            presenceUnsubs.delete(projectId);
          }
        }
      });

      socket.on("error", () => socket.terminate());
    },
  );

  // ---------------------------------------------------------------------------
  // Sessions WebSocket — pushes TerminalSession list updates to subscribed
  // clients, eliminating the 5-second polling interval.
  //
  // Private projects: each subscriber gets only their own sessions.
  // Shared projects: all subscribers see all sessions (one query serves all).
  // ---------------------------------------------------------------------------

  const SESSION_STATUSES: TerminalSessionStatus[] = ["running", "pending", "starting"];

  /** Fetch sessions for a project visible to the given user. */
  async function fetchProjectSessions(projectId: string, userId: string) {
    const project = await db.project.findFirst({
      where: { id: projectId, OR: [{ userId }, { shared: true }] },
      select: { shared: true },
    });
    if (!project) return [];
    return db.terminalSession.findMany({
      where: {
        projectId,
        ...(project.shared ? {} : { userId }),
        status: { in: SESSION_STATUSES },
      },
      orderBy: { createdAt: "asc" },
      include: { user: { select: { id: true, name: true } } },
    });
  }

  /** projectId → Map<socket, userId> */
  const sessionClients = new Map<string, Map<WebSocket, string>>();
  /** projectId → broadcaster unsubscribe fn */
  const sessionUnsubs = new Map<string, () => void>();

  function broadcastSessions(projectId: string) {
    const clients = sessionClients.get(projectId);
    if (!clients?.size) return;
    // Group sockets by userId to deduplicate queries
    const byUser = new Map<string, Set<WebSocket>>();
    for (const [ws, uid] of clients) {
      if (!byUser.has(uid)) byUser.set(uid, new Set());
      byUser.get(uid)!.add(ws);
    }
    for (const [uid, sockets] of byUser) {
      fetchProjectSessions(projectId, uid)
        .then((data) => {
          const json = JSON.stringify(data);
          for (const ws of sockets) {
            if (ws.readyState === WebSocket.OPEN) ws.send(json);
          }
        })
        .catch(() => {/* best-effort */});
    }
  }

  /**
   * WebSocket endpoint for real-time session list updates.
   * URL: /sessions/:projectId
   */
  server.get(
    "/sessions/:projectId",
    { websocket: true },
    async (socket, request) => {
      const { projectId } = request.params as { projectId: string };

      // --- Input validation ---
      if (!projectId || projectId.length > MAX_ID_LEN) {
        socket.close(1008, "Invalid request");
        return;
      }

      // --- Auth ---
      let userId: string | null;
      if (DISABLE_AUTH) {
        userId = await getAdminUserId();
      } else {
        userId = await getUserIdFromCookies(request.headers.cookie);
      }

      if (!userId) {
        socket.close(1008, "Unauthorized");
        return;
      }

      const uid = userId;

      // --- Project access check ---
      const hasProjectAccess = await resolveProjectAccess(projectId, uid);
      if (!hasProjectAccess) {
        log("warn", `WS /sessions/${projectId} 403 denied uid=${uid}`);
        socket.close(1008, "Project not found or access denied");
        return;
      }

      // --- Register subscriber ---
      if (!sessionClients.has(projectId)) {
        sessionClients.set(projectId, new Map());
      }
      sessionClients.get(projectId)!.set(socket, uid);

      if (!sessionUnsubs.has(projectId)) {
        const unsub = onSessionChange(projectId, () =>
          broadcastSessions(projectId),
        );
        sessionUnsubs.set(projectId, unsub);
      }

      const sendCurrentSessions = () =>
        fetchProjectSessions(projectId, uid)
          .then((data) => {
            if (socket.readyState === WebSocket.OPEN) {
              socket.send(JSON.stringify(data));
            }
          })
          .catch(() => {/* best-effort */});

      // Send current state immediately on connect.
      sendCurrentSessions();

      // Re-send after a short delay to catch broadcasts that raced ahead of
      // this WS connection being established (common on page load / reconnect).
      const warmupTimer = setTimeout(sendCurrentSessions, 600);
      socket.on("close", () => clearTimeout(warmupTimer));

      socket.on("close", () => {
        const clients = sessionClients.get(projectId);
        if (clients) {
          clients.delete(socket);
          if (clients.size === 0) {
            sessionClients.delete(projectId);
            sessionUnsubs.get(projectId)?.();
            sessionUnsubs.delete(projectId);
          }
        }
      });

      socket.on("error", () => socket.terminate());
    },
  );

  const gracefulShutdown = async (signal: string) => {
    log("info", `${signal} received, shutting down`);
    await server.close();
    process.exit(0);
  };

  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));

  await server.listen({ port: PORT, host: "127.0.0.1" });
  log("info", `WS proxy listening on 127.0.0.1:${PORT}`);
}

