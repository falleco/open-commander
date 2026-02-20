/**
 * Port mapping for a Docker container.
 * `host: "auto"` lets Docker pick an ephemeral host port.
 */
export type DockerPort = { host: number | "auto"; container: number };

/**
 * Volume mount specification.
 */
export enum DockerMountMode {
  ReadOnly = "ro",
  ReadWrite = "rw",
}

export type DockerMount = {
  /** Absolute path on the host machine. */
  source: string;
  /** Absolute path inside the container. */
  target: string;
  /** Mount mode (read-only or read-write). */
  mode?: DockerMountMode;
};

/**
 * High-level payload for `docker run`.
 */
export type DockerRunOptions = {
  /** Name assigned to the container. */
  name: string;
  /** Docker image reference (e.g. repo:tag). */
  image: string;
  /** Docker network to connect the container to. */
  network?: string;
  /** Network aliases (paired as alias:target) */
  networkAliases?: string[];
  /** Whether to run the container in detached mode (default: true). */
  detach?: boolean;
  /** Port mappings between host and container. */
  ports?: DockerPort[];
  /** Labels attached to the container. */
  labels?: Record<string, string>;
  /** Environment variables passed to the container. */
  env?: Record<string, string>;
  /** Volume mounts to attach. */
  mounts?: DockerMount[];
  /** Arguments appended after the image name. */
  args?: string[];
  /** Extra host-to-IP mappings added via --add-host (e.g. "docker:host-gateway"). */
  extraHosts?: string[];
};
