import { promises as fs } from "node:fs";
import path from "node:path";
import { env } from "@/env";
import type { DockerMount } from "./docker.types";
import { DockerMountMode } from "./docker.types";

const DIND_CERTS_VOLUME =
  env.DIND_CERTS_VOLUME ?? "open-commander_open-commander-dind-certs";

/**
 * Ensures Claude state directories exist for a given user.
 */
export async function ensureClaudeState(basePath: string, userId: string) {
  const claudeBase = path.resolve(basePath, userId, "claude");
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
 * Ensures agents config directory exists (shared across users).
 */
export async function ensureAgentsConfig(basePath: string) {
  await fs.mkdir(basePath, { recursive: true });
  return { agentsConfig: basePath };
}

/**
 * Builds the standard agent mounts for a given user.
 */
export async function buildAgentMounts(userId: string): Promise<DockerMount[]> {
  const statePath = `${env.COMMANDER_BASE_PATH}/.state`;
  const { claudeJson, claudeDir } = await ensureClaudeState(statePath, userId);
  const { agentsConfig } = await ensureAgentsConfig(
    `${env.COMMANDER_BASE_PATH}/agents`,
  );

  return [
    { source: claudeJson, target: "/home/commander/.claude.json" },
    { source: claudeDir, target: "/home/commander/.claude" },
    {
      source: `${statePath}/${userId}/codex`,
      target: "/home/commander/.codex",
    },
    {
      source: `${statePath}/${userId}/cursor`,
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
}
