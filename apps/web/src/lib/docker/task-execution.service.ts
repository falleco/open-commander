import { promises as fs } from "node:fs";
import path from "node:path";
import { env } from "@/env";
import type { AgentProvider } from "@/generated/prisma";
import { dockerService } from "./docker.service";
import { DockerMountMode } from "./docker.types";

const IMAGE = env.TTYD_IMAGE;
const INTERNAL_NETWORK = env.TTYD_INTERNAL_NETWORK;
const EGRESS_PROXY_HOST = env.TTYD_EGRESS_PROXY_HOST;
const EGRESS_PROXY_PORT = env.TTYD_EGRESS_PROXY_PORT;
const DIND_HOST = "docker";
const DIND_PORT = 2376;
const DIND_CERTS_VOLUME =
  env.DIND_CERTS_VOLUME ?? "open-commander_open-commander-dind-certs";

const AGENT_WORKSPACE = env.AGENT_WORKSPACE
  ? path.resolve(env.AGENT_WORKSPACE)
  : null;

export type TaskInput = {
  taskId: string;
  body: string;
  agentId: AgentProvider;
  mountPoint?: string; // Relative path within workspace to mount as /workspace
};

export type TaskExecutionResult = {
  completed: boolean;
  needsInput: boolean;
  inputRequest: string;
  result: string;
  errorMessage: string;
  timestamp: string;
};

/**
 * Generates a unique container name for task execution.
 */
function taskContainerName(executionId: string): string {
  return `oc-task-${executionId}`;
}

/**
 * Ensures Claude state directories exist.
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

/**
 * Ensures agents config directory exists.
 */
async function ensureAgentsConfig(basePath: string) {
  await fs.mkdir(basePath, { recursive: true });
  return { agentsConfig: basePath };
}

export const taskExecutionService = {
  /**
   * Execute a task in a container.
   * The container runs the task and exits when done.
   */
  async execute(
    executionId: string,
    input: TaskInput,
  ): Promise<{ containerName: string }> {
    const containerName = taskContainerName(executionId);

    // Prepare state directories
    const { claudeJson, claudeDir } = await ensureClaudeState(
      `${env.COMMANDER_BASE_PATH}/.state`,
    );
    const { agentsConfig } = await ensureAgentsConfig(
      `${env.COMMANDER_BASE_PATH}/agents`,
    );

    // Ensure network exists
    await dockerService.ensureNetwork(INTERNAL_NETWORK, { internal: true });

    // Calculate the actual workspace path to mount
    // If mountPoint is provided, it's a relative path within AGENT_WORKSPACE
    let workspacePath = AGENT_WORKSPACE;
    let workspaceSubdir = ""; // Subdirectory within the mounted workspace

    if (AGENT_WORKSPACE && input.mountPoint) {
      // Clean the mount point path (remove leading/trailing slashes, prevent directory traversal)
      const cleanMountPoint = input.mountPoint
        .replace(/^\/+|\/+$/g, "") // Remove leading/trailing slashes
        .replace(/\.\./g, ""); // Remove any .. to prevent directory traversal

      if (cleanMountPoint) {
        workspacePath = path.join(AGENT_WORKSPACE, cleanMountPoint);
        workspaceSubdir = cleanMountPoint;
      }
    }

    // Build task input JSON
    const taskInputJson = JSON.stringify({
      taskId: input.taskId,
      body: input.body,
      agentId: input.agentId,
      workspace: "/workspace",
      mountPoint: workspaceSubdir || null, // Include mount point info for the agent
    });

    // Build mounts
    const mounts = [
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
      {
        source: agentsConfig,
        target: "/home/commander/.commander",
      },
      {
        source: DIND_CERTS_VOLUME,
        target: "/certs",
        mode: DockerMountMode.ReadOnly,
      },
    ];

    // Add workspace mount if configured
    if (workspacePath) {
      mounts.push({ source: workspacePath, target: "/workspace" });
    }

    // Run container with task entrypoint
    await dockerService.run({
      name: containerName,
      image: IMAGE,
      network: INTERNAL_NETWORK,
      detach: true,
      labels: {
        "open-commander.type": "task-execution",
        "open-commander.execution-id": executionId,
        "open-commander.task-id": input.taskId,
      },
      env: {
        TASK_INPUT: taskInputJson,
        COMMANDER_ENV_NODE_VERSION: "20",
        POWERLEVEL9K_DISABLE_GITSTATUS: "true",
        TERM: "xterm-256color",
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
      mounts,
      args: ["/opt/commander/scripts/task-entrypoint.sh"],
    });

    return { containerName };
  },

  /**
   * Wait for a task container to complete and collect results.
   */
  async waitForCompletion(
    executionId: string,
    timeoutMs: number = 3600000, // 1 hour default
  ): Promise<TaskExecutionResult> {
    const containerName = taskContainerName(executionId);
    const startTime = Date.now();

    // Poll container status
    while (Date.now() - startTime < timeoutMs) {
      const running = await dockerService.isRunning(containerName);

      if (running === null) {
        // Container doesn't exist anymore
        throw new Error("Container was removed unexpectedly");
      }

      if (!running) {
        // Container has stopped, collect results
        break;
      }

      // Wait before next check
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    // Check if we timed out
    const running = await dockerService.isRunning(containerName);
    if (running) {
      // Kill the container
      await dockerService.remove(containerName);
      return {
        completed: false,
        needsInput: false,
        inputRequest: "",
        result: "",
        errorMessage: "Task execution timed out",
        timestamp: new Date().toISOString(),
      };
    }

    // Get container logs
    const logs = await dockerService.logs(containerName);

    // Try to extract result JSON from logs
    const resultMatch = logs.match(
      /\{[\s\S]*"completed"[\s\S]*"needsInput"[\s\S]*\}/,
    );

    let result: TaskExecutionResult;
    if (resultMatch) {
      try {
        result = JSON.parse(resultMatch[0]);
      } catch {
        result = {
          completed: true,
          needsInput: false,
          inputRequest: "",
          result: "Task completed but result parsing failed",
          errorMessage: "",
          timestamp: new Date().toISOString(),
        };
      }
    } else {
      // No JSON result found, assume success based on container exit
      result = {
        completed: true,
        needsInput: false,
        inputRequest: "",
        result: "Task executed",
        errorMessage: "",
        timestamp: new Date().toISOString(),
      };
    }

    return result;
  },

  /**
   * Get execution logs from container.
   */
  async getLogs(executionId: string): Promise<string> {
    const containerName = taskContainerName(executionId);
    try {
      return await dockerService.logs(containerName);
    } catch {
      return "";
    }
  },

  /**
   * Check if execution container is still running.
   */
  async isRunning(executionId: string): Promise<boolean> {
    const containerName = taskContainerName(executionId);
    const running = await dockerService.isRunning(containerName);
    return running === true;
  },

  /**
   * Stop and remove execution container.
   */
  async stop(executionId: string): Promise<void> {
    const containerName = taskContainerName(executionId);
    await dockerService.safeRemove(containerName);
  },
};
