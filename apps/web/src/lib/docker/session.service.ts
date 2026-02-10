import { promises as fs } from "node:fs";
import path from "node:path";
import { TRPCError } from "@trpc/server";
import { env } from "@/env";
import { escapeShellArg, sessionContainerNames } from "@/lib/utils";
import { db } from "@/server/db";
import { dockerService } from "./docker.service";
import { DockerMountMode } from "./docker.types";
import { ingressService } from "./ingress.service";

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
const DIND_CERTS_VOLUME =
  env.DIND_CERTS_VOLUME ?? "open-commander_open-commander-dind-certs";

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
  port: number;
  wsPath: string;
  containerName: string;
};

/**
 * Ensures that Claude state directories exist before starting ttyd.
 */
async function ensureClaudeState(basePath: string) {
  const claudeBase = path.resolve(basePath, "claude");
  const claudeJson = path.join(claudeBase, ".claude.json");
  const claudeDir = path.join(claudeBase, ".claude");
  await fs.mkdir(claudeDir, { recursive: true });
  try {
    await fs.access(claudeJson);
  } catch {
    await fs.writeFile(claudeJson, "{}\n", { encoding: "utf8" });
  }
  return { claudeJson, claudeDir };
}

async function ensureAgentsConfig(basePath: string) {
  await fs.mkdir(basePath, { recursive: true });
  return { agentsConfig: basePath };
}

async function prepareIngressContainer(
  sessionId: string,
  targetContainer: string,
) {
  const { ingressContainer } = sessionContainerNames(sessionId);
  const configPath = await ingressService.setup(sessionId, targetContainer);
  await ingressService.run(ingressContainer, configPath);
  await ingressService.connect(ingressContainer);
  return ingressContainer;
}

export const sessionService = {
  async start(
    userId: string,
    sessionId: string,
    options?: { reset?: boolean; workspaceSuffix?: string | null },
  ): Promise<StartSessionResult> {
    const reset = options?.reset ?? false;
    const existingSession = await db.terminalSession.findUnique({
      where: { id: sessionId, userId, status: { in: ["starting", "running"] } },
    });
    if (existingSession) {
      return {
        port: existingSession.port as number,
        wsPath: existingSession.wsPath as string,
        containerName: existingSession.containerName as string,
      };
    }

    const session = await db.terminalSession.findUnique({
      where: { id: sessionId, userId },
    });
    if (!session) {
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
      const { claudeJson, claudeDir } = await ensureClaudeState(
        `${env.COMMANDER_BASE_PATH}/.state`,
      );
      const { agentsConfig } = await ensureAgentsConfig(
        `${env.COMMANDER_BASE_PATH}/agents`,
      );
      await dockerService.ensureNetwork(env.TTYD_INTERNAL_NETWORK, {
        internal: true,
      });
      try {
        await dockerService.run({
          name: agentContainer,
          image: IMAGE,
          network: env.TTYD_INTERNAL_NETWORK,
          env: {
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
            // GitHub CLI authentication (optional)
            ...(env.GITHUB_TOKEN
              ? { GITHUB_TOKEN: env.GITHUB_TOKEN, GH_TOKEN: env.GITHUB_TOKEN }
              : {}),
          },
          mounts: [
            { source: claudeJson, target: "/home/commander/.claude.json" },
            { source: claudeDir, target: "/home/commander/.claude" },
            {
              source: `${env.COMMANDER_BASE_PATH}/.state/codex`,
              target: "/home/commander/.codex",
            },
            {
              source: `${env.COMMANDER_BASE_PATH}/.state/cursor`,
              target: "/home/commander/.cursor",
            },
            // { source: `${env.COMMANDER_BASE_PATH}/.state/opencode`, target: "/home/commander/.opencode" },
            {
              source: agentsConfig,
              target: "/home/commander/.commander",
            },
            {
              source: DIND_CERTS_VOLUME,
              target: "/certs",
              mode: DockerMountMode.ReadOnly,
            },
            ...(workspaceMount
              ? [{ source: workspaceMount, target: "/workspace" }]
              : []),
          ],
          args: ["ttyd", "-W", "-p", `${PORT}`, "-i", "0.0.0.0", ...TTYD_CMD],
        });
      } catch (error) {
        let stderr = "";
        if (typeof error === "object" && error !== null && "stderr" in error) {
          const maybe = (error as { stderr?: unknown }).stderr;
          if (typeof maybe === "string") {
            stderr = maybe;
          }
        }
        if (stderr.includes("already in use") || stderr.includes("Conflict")) {
          try {
            await dockerService.start(agentContainer);
          } catch {
            await dockerService.safeRemove(agentContainer);
            await dockerService.ensureNetwork(env.TTYD_INTERNAL_NETWORK, {
              internal: true,
            });
            await dockerService.run({
              name: agentContainer,
              image: IMAGE,
              network: env.TTYD_INTERNAL_NETWORK,
              env: {
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
                // GitHub CLI authentication (optional)
                ...(env.GITHUB_TOKEN
                  ? {
                      GITHUB_TOKEN: env.GITHUB_TOKEN,
                      GH_TOKEN: env.GITHUB_TOKEN,
                    }
                  : {}),
              },
              mounts: [
                {
                  source: claudeJson,
                  target: "/home/commander/.claude.json",
                },
                { source: claudeDir, target: "/home/commander/.claude" },
                {
                  source: agentsConfig,
                  target: "/home/commander/.commander",
                },
                {
                  source: DIND_CERTS_VOLUME,
                  target: "/certs",
                  mode: DockerMountMode.ReadOnly,
                },
                ...(workspaceMount
                  ? [{ source: workspaceMount, target: "/workspace" }]
                  : []),
              ],
              args: [
                "ttyd",
                "-W",
                "-p",
                `${PORT}`,
                "-i",
                "0.0.0.0",
                ...TTYD_CMD,
              ],
            });
          }
        } else {
          throw error;
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

    const ingressContainerName = await prepareIngressContainer(
      sessionId,
      agentContainer,
    );
    let resolvedPort = await dockerService.getPortWithRetries(
      ingressContainerName,
      PORT,
    );
    if (!resolvedPort) {
      await dockerService.safeRemove(ingressContainerName);
      const rebuiltIngressName = await prepareIngressContainer(
        sessionId,
        agentContainer,
      );
      resolvedPort = await dockerService.getPortWithRetries(
        rebuiltIngressName,
        PORT,
      );
    }
    if (!resolvedPort) {
      const ingressRunning =
        await dockerService.isRunning(ingressContainerName);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Porta do container não encontrada (ingress=${ingressContainerName}, running=${ingressRunning ?? "null"}).`,
      });
    }

    await db.terminalSession.update({
      where: { id: sessionId, userId },
      data: {
        port: resolvedPort,
        wsPath: "/ws",
        containerName: agentContainer,
        status: "running",
      },
    });

    return {
      port: resolvedPort,
      wsPath: "/ws",
      containerName: agentContainer,
    };
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
