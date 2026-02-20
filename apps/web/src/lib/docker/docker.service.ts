import { execFile } from "node:child_process";
import { env } from "node:process";
import { promisify } from "node:util";
import { normalizeContainerName } from "@/lib/utils";
import type { DockerRunOptions } from "./docker.types";
import { DockerMountMode } from "./docker.types";

const DOCKER_TIMEOUT = 20000;
const execFileAsync = promisify(execFile);

async function runDocker(args: string[]) {
  console.log("Running Docker command: docker", args.join(" "));
  return execFileAsync("docker", args, { timeout: DOCKER_TIMEOUT });
}

/**
 * Thin, typed wrapper around the Docker CLI.
 * Exposes common container lifecycle operations used by the API routes.
 */
export const dockerService = {
  /**
   * Run a container with a typed, high-level payload.
   *
   * @param options - Container settings including image, ports, env, mounts, and args.
   */
  async run(options: DockerRunOptions) {
    const args: string[] = ["run"];
    if (options.detach ?? true) {
      args.push("-d");
    }
    args.push("--name", normalizeContainerName(options.name));
    if (options.network) {
      args.push("--network", options.network);
    }
    if (options.networkAliases?.length) {
      options.networkAliases.forEach((alias) => {
        args.push("--network-alias", alias);
      });
    }
    if (options.ports) {
      options.ports.forEach((port) => {
        const host = port.host === "auto" ? 0 : port.host;
        args.push("-p", `${host}:${port.container}`);
      });
    }
    if (options.labels) {
      Object.entries(options.labels).forEach(([key, value]) => {
        args.push("--label", `${key}=${value}`);
      });
    }
    if (options.env) {
      Object.entries(options.env).forEach(([key, value]) => {
        args.push("-e", `${key}=${value}`);
      });
    }
    if (options.mounts) {
      options.mounts.forEach((mount) => {
        const mode = mount.mode ?? DockerMountMode.ReadWrite;
        args.push("-v", `${mount.source}:${mount.target}:${mode}`);
      });
    }
    if (options.extraHosts?.length) {
      options.extraHosts.forEach((host) => {
        args.push("--add-host", host);
      });
    }
    args.push(options.image);
    if (options.args?.length) {
      args.push(...options.args);
    }
    return runDocker(args);
  },

  /**
   * Restart an existing container by name.
   *
   * @param name - Container name.
   */
  async restart(name: string) {
    return runDocker(["restart", normalizeContainerName(name)]);
  },

  /**
   * Start an existing container by name.
   *
   * @param name - Container name.
   */
  async start(name: string) {
    return runDocker(["start", normalizeContainerName(name)]);
  },

  /**
   * Remove a container by name (forced).
   *
   * @param name - Container name.
   */
  async remove(name: string) {
    return runDocker(["rm", "-f", normalizeContainerName(name)]);
  },

  /**
   * Returns whether a container is running. `null` means not found.
   *
   * @param name - Container name.
   */
  async isRunning(name: string) {
    try {
      const { stdout } = await runDocker([
        "inspect",
        "-f",
        "{{.State.Running}}",
        normalizeContainerName(name),
      ]);
      return stdout.trim() === "true";
    } catch {
      return null;
    }
  },

  /**
   * Resolve the host port bound to a container port.
   *
   * @param name - Container name.
   * @param containerPort - Port exposed inside the container.
   */
  async getPort(name: string, containerPort: number) {
    try {
      const { stdout } = await runDocker([
        "inspect",
        "-f",
        `{{(index (index .NetworkSettings.Ports "${containerPort}/tcp") 0).HostPort}}`,
        normalizeContainerName(name),
      ]);
      const port = Number(stdout.trim());
      return Number.isFinite(port) ? port : null;
    } catch {
      return null;
    }
  },

  async getPortWithRetries(
    containerName: string,
    containerPort: number,
    maxAttempts: number = 20,
    delay: number = 500,
  ) {
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      const port = await dockerService.getPort(containerName, containerPort);
      if (port) return port;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  },

  /**
   * Resolve a container IP address for a given network.
   *
   * @param name - Container name.
   * @param network - Network name.
   */
  async getNetworkIp(name: string, network: string) {
    try {
      const { stdout } = await runDocker([
        "inspect",
        "-f",
        `{{(index .NetworkSettings.Networks "${network}").IPAddress}}`,
        normalizeContainerName(name),
      ]);
      const ip = stdout.trim();
      return ip.length > 0 ? ip : null;
    } catch {
      return null;
    }
  },

  /**
   * Resolve all containers attached to a network.
   *
   * @param network - Network name.
   */
  async getNetworkContainers(network: string) {
    try {
      const { stdout } = await runDocker([
        "network",
        "inspect",
        network,
        "--format",
        "{{json .Containers}}",
      ]);
      const trimmed = stdout.trim();
      return trimmed ? (JSON.parse(trimmed) as Record<string, unknown>) : {};
    } catch {
      return {};
    }
  },

  /**
   * Ensure a docker network exists, creating it if missing.
   *
   * @param name - Network name.
   */
  async ensureNetwork(name: string, options?: { internal?: boolean }) {
    try {
      await runDocker(["network", "inspect", name]);
    } catch {
      const args = ["network", "create"];
      if (options?.internal) {
        args.push("--internal");
      }
      args.push(name);
      await runDocker(args);
    }
  },

  /**
   * Connect an existing container to an additional network.
   *
   * @param name - Container name.
   * @param network - Network name.
   */
  async connectNetwork(name: string, network: string, alias?: string) {
    const args = ["network", "connect"];
    if (alias) {
      args.push("--alias", alias);
    }
    args.push(network, normalizeContainerName(name));
    return runDocker(args);
  },

  /**
   * Fetch container logs.
   *
   * @param name - Container name.
   * @param options - Log options.
   */
  async logs(
    name: string,
    options?: { tail?: number; since?: string | number },
  ) {
    const args = ["logs"];
    if (options?.tail) {
      args.push("--tail", `${options.tail}`);
    }
    if (options?.since) {
      args.push("--since", `${options.since}`);
    }
    args.push(normalizeContainerName(name));
    const { stdout } = await runDocker(args);
    return stdout;
  },

  /**
   * List running container names that match all label filters.
   *
   * @param labels - Map of label keys/values to match.
   */
  async listContainersByLabels(labels: Record<string, string>) {
    const args = ["ps"];
    Object.entries(labels).forEach(([key, value]) => {
      args.push("--filter", `label=${key}=${value}`);
    });
    args.push("--format", "{{.Names}}");
    const { stdout } = await runDocker(args);
    return stdout
      .trim()
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  },

  /**
   * Read container labels as a plain object.
   *
   * @param name - Container name.
   */
  async inspectLabels(name: string) {
    const { stdout } = await runDocker([
      "inspect",
      "-f",
      "{{json .Config.Labels}}",
      normalizeContainerName(name),
    ]);
    const trimmed = stdout.trim();
    if (!trimmed) return {};
    return JSON.parse(trimmed) as Record<string, string>;
  },

  /**
   * Execute a command inside a running container.
   *
   * @param name - Container name.
   * @param command - Command and arguments to run.
   */
  async exec(name: string, command: string[]) {
    return runDocker(["exec", normalizeContainerName(name), ...command]);
  },

  /**
   * Pull an image from the registry. Resolves when the pull completes.
   *
   * @param image - Full image reference (e.g. "opencommander/agent:latest").
   */
  async pull(image: string) {
    return execFileAsync("docker", ["pull", image], {
      timeout: 10 * 60 * 1000, // 10 min — large images can take a while
    });
  },

  async safeRemove(name: string, maxAttempts: number = 5) {
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      try {
        await dockerService.remove(name);
        return;
      } catch (error) {
        const message = error instanceof Error ? error.message : "";
        const stderr =
          typeof error === "object" && error !== null && "stderr" in error
            ? String((error as { stderr?: unknown }).stderr ?? "")
            : "";
        const detail = `${message}\n${stderr}`;
        if (detail.includes("No such container")) {
          return;
        }
        if (
          detail.includes("removal of container") &&
          detail.includes("in progress")
        ) {
          await new Promise((resolve) =>
            setTimeout(resolve, 300 + attempt * 200),
          );
          continue;
        }
        throw error;
      }
    }
  },
};
