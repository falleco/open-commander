import { promises as fs } from "node:fs";
import path from "node:path";
import { TRPCError } from "@trpc/server";
import { env } from "@/env";
import { escapeShellArg, sessionContainerNames } from "@/lib/utils";
import { db } from "@/server/db";
import { notifySessionChange } from "@/server/session-broadcaster";
import { dockerService } from "./docker.service";
import { ingressService } from "./ingress.service";
import { buildAgentMounts } from "./mounts";

const IMAGE = env.TTYD_IMAGE;
const PORT = env.TTYD_PORT;
const SCREEN_NAME = env.TTYD_SCREEN_NAME;
const DEFAULT_TTYD_CMD = [
  "tmux",
  "new-session",
  "-A",
  "-s",
  SCREEN_NAME,
  "zsh",
];
const BASE_TTYD_CMD = env.TTYD_CMD ? env.TTYD_CMD.split(" ") : DEFAULT_TTYD_CMD;

const TTYD_CMD = [
  "/bin/sh",
  "-c",
  `ln -sfn /home/commander/.commander /home/commander/.agents && exec ${BASE_TTYD_CMD.map(
    escapeShellArg,
  ).join(" ")}`,
];

const AGENT_WORKSPACE = env.AGENT_WORKSPACE
  ? path.resolve(env.AGENT_WORKSPACE)
  : null;

const EGRESS_PROXY_HOST = env.TTYD_EGRESS_PROXY_HOST;
const EGRESS_PROXY_PORT = env.TTYD_EGRESS_PROXY_PORT;
const DIND_HOST = "docker";
const DIND_PORT = 2376;

// When commander uses a unix socket, the internal dockerd runs inside this
// container. Agent containers need --add-host so "docker" resolves to the
// host-gateway IP where the internal dockerd listens on TCP 2376.
const EXTRA_HOSTS = (process.env.DOCKER_HOST ?? "").startsWith("unix://")
  ? ["docker:host-gateway"]
  : [];

const resolveWorkspaceMount = async (workspaceSuffix?: string | null) => {
  if (!AGENT_WORKSPACE) return null;
  const trimmed = (workspaceSuffix ?? "").trim();
  if (!trimmed) return AGENT_WORKSPACE;
  if (
    trimmed.includes("..") ||
    trimmed.includes("/") ||
    trimmed.includes("\\")
  ) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Invalid workspace selection.",
    });
  }
  const candidate = path.resolve(AGENT_WORKSPACE, trimmed);
  const relative = path.relative(AGENT_WORKSPACE, candidate);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Invalid workspace selection.",
    });
  }
  try {
    const stats = await fs.stat(candidate);
    if (!stats.isDirectory()) {
      throw new Error("Not a directory");
    }
  } catch {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Workspace folder not found.",
    });
  }
  return candidate;
};

export type StopSessionResult = {
  removed: boolean;
  containerName: string;
  error?: string;
};

export type StartSessionResult = {
  containerName: string;
};

export const sessionService = {
  async start(
    userId: string,
    sessionId: string,
    options?: {
      reset?: boolean;
      workspaceSuffix?: string | null;
      gitBranch?: string | null;
    },
  ): Promise<StartSessionResult> {
    const reset = options?.reset ?? false;
    // Short-circuit only when the session is already running and no reset was
    // requested. When reset=true we fall through so dockerService.restart runs.
    if (!reset) {
      const existingSession = await db.terminalSession.findUnique({
        where: { id: sessionId, userId, status: { in: ["starting", "running"] } },
      });
      if (existingSession) {
        return {
          containerName: existingSession.containerName as string,
        };
      }
    }

    const session = await db.terminalSession.findUnique({
      where: { id: sessionId, userId },
    });
    if (!session || session.status === "stopped") {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Session not found.",
      });
    }

    const { agentContainer } = sessionContainerNames(sessionId);
    const running = await dockerService.isRunning(agentContainer);

    if (running === null) {
      const workspaceMount = await resolveWorkspaceMount(
        options?.workspaceSuffix,
      );
      const agentMounts = await buildAgentMounts(userId);
      const mounts = [
        ...agentMounts,
        ...(workspaceMount
          ? [{ source: workspaceMount, target: "/workspace" }]
          : []),
      ];
      await dockerService.ensureNetwork(env.TTYD_INTERNAL_NETWORK, {
        internal: true,
      });
      const containerEnv = {
        COMMANDER_ENV_NODE_VERSION: "20",
        POWERLEVEL9K_DISABLE_GITSTATUS: "true",
        TERM: "xterm-256color",
        COLORTERM: "truecolor",
        DOCKER_HOST: `tcp://${DIND_HOST}:${DIND_PORT}`,
        DOCKER_TLS_VERIFY: "1",
        DOCKER_CERT_PATH: "/certs/client",
        HTTP_PROXY: `http://${EGRESS_PROXY_HOST}:${EGRESS_PROXY_PORT}`,
        HTTPS_PROXY: `http://${EGRESS_PROXY_HOST}:${EGRESS_PROXY_PORT}`,
        NO_PROXY: `localhost,127.0.0.1,::1,${EGRESS_PROXY_HOST},${DIND_HOST}`,
        http_proxy: `http://${EGRESS_PROXY_HOST}:${EGRESS_PROXY_PORT}`,
        https_proxy: `http://${EGRESS_PROXY_HOST}:${EGRESS_PROXY_PORT}`,
        no_proxy: `localhost,127.0.0.1,::1,${EGRESS_PROXY_HOST},${DIND_HOST}`,
        ...(env.GITHUB_TOKEN
          ? { GITHUB_TOKEN: env.GITHUB_TOKEN, GH_TOKEN: env.GITHUB_TOKEN }
          : {}),
      };
      const containerArgs = [
        "ttyd",
        "-W",
        "-p",
        `${PORT}`,
        "-i",
        "0.0.0.0",
        ...TTYD_CMD,
      ];
      // Ensure the image is locally available before running. Docker daemon
      // deduplicates concurrent pulls, so if the background prefetch is still
      // pulling this image, this call will wait for it to finish rather than
      // racing — eliminating layer lock contention entirely.
      await dockerService.pull(IMAGE);

      const runOptions = {
        name: agentContainer,
        image: IMAGE,
        network: env.TTYD_INTERNAL_NETWORK,
        env: containerEnv,
        mounts,
        extraHosts: EXTRA_HOSTS,
        args: containerArgs,
      };

      // Retry on layer lock contention — safety net in case a concurrent pull
      // starts between the pull above and the run below.
      const MAX_LAYER_RETRIES = 5;
      let launched = false;
      for (let attempt = 0; attempt <= MAX_LAYER_RETRIES && !launched; attempt++) {
        try {
          await dockerService.run(runOptions);
          launched = true;
        } catch (error) {
          let stderr = "";
          if (typeof error === "object" && error !== null && "stderr" in error) {
            const maybe = (error as { stderr?: unknown }).stderr;
            if (typeof maybe === "string") stderr = maybe;
          }
          const detail = stderr + (error instanceof Error ? error.message : "");
          if (stderr.includes("already in use") || stderr.includes("Conflict")) {
            try {
              await dockerService.start(agentContainer);
            } catch {
              await dockerService.safeRemove(agentContainer);
              await dockerService.ensureNetwork(env.TTYD_INTERNAL_NETWORK, {
                internal: true,
              });
              await dockerService.run(runOptions);
            }
            launched = true;
          } else if (detail.includes("locked") && attempt < MAX_LAYER_RETRIES) {
            await new Promise((r) => setTimeout(r, 5000));
          } else {
            throw error;
          }
        }
      }
    } else if (reset) {
      await dockerService.restart(agentContainer);
    } else if (!running) {
      await dockerService.start(agentContainer);
    }

    const sessionRunning = await dockerService.isRunning(agentContainer);
    if (!sessionRunning) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Session container is not running.",
      });
    }

    if (options?.gitBranch) {
      try {
        await dockerService.exec(agentContainer, [
          "git",
          "-C",
          "/workspace",
          "checkout",
          options.gitBranch,
        ]);
      } catch (error) {
        console.warn(
          `[session] git checkout "${options.gitBranch}" failed:`,
          error instanceof Error ? error.message : error,
        );
      }
    }

    const updated = await db.terminalSession.update({
      where: { id: sessionId, userId },
      data: {
        containerName: agentContainer,
        status: "running",
      },
    });
    if (updated.projectId) notifySessionChange(updated.projectId);

    return { containerName: agentContainer };
  },

  async stop(sessionId: string): Promise<StopSessionResult> {
    const { agentContainer, ingressContainer } =
      sessionContainerNames(sessionId);
    await dockerService.safeRemove(ingressContainer);
    try {
      await ingressService.cleanup(sessionId);
    } catch {
      // Best-effort cleanup of ingress config file.
    }
    try {
      await dockerService.remove(agentContainer);
      const stillRunning = await dockerService.isRunning(agentContainer);
      if (stillRunning !== null) {
        return {
          removed: false,
          containerName: agentContainer,
          error: "Container still exists after removal attempt.",
        };
      }
      return { removed: true, containerName: agentContainer };
    } catch (error) {
      let stderr = "";
      if (typeof error === "object" && error !== null && "stderr" in error) {
        const maybe = (error as { stderr?: unknown }).stderr;
        if (typeof maybe === "string") {
          stderr = maybe;
        }
      }
      if (stderr.includes("No such container")) {
        return { removed: false, containerName: agentContainer };
      }
      const message =
        error instanceof Error ? error.message : "Unexpected error.";
      return { removed: false, containerName: agentContainer, error: message };
    }
  },
};
