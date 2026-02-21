import { promises as fs } from "node:fs";
import path from "node:path";
import { TRPCError } from "@trpc/server";
import { env } from "@/env";
import { normalizeContainerName } from "@/lib/utils";
import { agentStatePath } from "./state-path";
import { dockerService } from "./docker.service";
import { DockerMountMode } from "./docker.types";

const BASE_INGRESS_IMAGE = "nginx:alpine";
const ingressStateDir = () => path.join(agentStatePath, "ingress");

const ingressConfigPath = (sessionId: string) => {
  const safeSessionId = normalizeContainerName(sessionId);
  return path.join(ingressStateDir(), `${safeSessionId}.conf`);
};

async function prepareIngressConfigFile(
  sessionId: string,
  targetContainer: string,
) {
  const ingressDir = ingressStateDir();
  await fs.mkdir(ingressDir, { recursive: true });
  const targetIp = await dockerService.getNetworkIp(
    targetContainer,
    env.TTYD_INTERNAL_NETWORK,
  );
  if (!targetIp) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Nao foi possivel resolver o IP do container da sessao.",
    });
  }
  const config = [
    "map $http_upgrade $connection_upgrade {",
    "  default upgrade;",
    "  '' close;",
    "}",
    "server {",
    `  listen ${env.TTYD_PORT};`,
    "  server_name _;",
    "  location /echo {",
    "    default_type text/plain;",
    `    return 200 "ingress ok target=${targetIp}:${env.TTYD_PORT}\\n";`,
    "  }",
    "  location / {",
    `    proxy_pass http://${targetIp}:${env.TTYD_PORT};`,
    "    proxy_http_version 1.1;",
    "    proxy_set_header Host $host;",
    "    proxy_set_header X-Real-IP $remote_addr;",
    "    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;",
    "    proxy_set_header X-Forwarded-Proto $scheme;",
    "    proxy_set_header Upgrade $http_upgrade;",
    "    proxy_set_header Connection $connection_upgrade;",
    "    proxy_set_header Sec-WebSocket-Protocol $http_sec_websocket_protocol;",
    "    proxy_set_header Sec-WebSocket-Key $http_sec_websocket_key;",
    "    proxy_set_header Sec-WebSocket-Version $http_sec_websocket_version;",
    "    proxy_buffering off;",
    "    proxy_read_timeout 1d;",
    "    proxy_send_timeout 1d;",
    "  }",
    "}",
    "",
  ].join("\n");
  const configPath = ingressConfigPath(sessionId);
  await fs.writeFile(configPath, config, { encoding: "utf8" });
  return configPath;
}

export const ingressService = {
  async create(containerName: string, configPath: string) {
    try {
      await dockerService.run({
        name: containerName,
        image: BASE_INGRESS_IMAGE,
        network: env.TTYD_INGRESS_NETWORK,
        ports: [
          {
            host: "auto",
            container: env.TTYD_PORT,
          },
        ],
        mounts: [
          {
            source: configPath,
            target: "/etc/nginx/conf.d/default.conf",
            mode: DockerMountMode.ReadOnly,
          },
        ],
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      if (message.includes("Conflict")) {
        try {
          await dockerService.start(containerName);
        } catch {
          await dockerService.safeRemove(containerName);
          await dockerService.run({
            name: containerName,
            image: BASE_INGRESS_IMAGE,
            network: env.TTYD_INGRESS_NETWORK,
            ports: [
              {
                host: "auto",
                container: env.TTYD_PORT,
              },
            ],
            mounts: [
              {
                source: configPath,
                target: "/etc/nginx/conf.d/default.conf",
                mode: DockerMountMode.ReadOnly,
              },
            ],
          });
        }
      } else {
        throw error;
      }
    }
  },

  async setup(sessionId: string, targetContainer: string) {
    const configPath = await prepareIngressConfigFile(
      sessionId,
      targetContainer,
    );
    await dockerService.ensureNetwork(env.TTYD_INTERNAL_NETWORK, {
      internal: true,
    });
    await dockerService.ensureNetwork(env.TTYD_INGRESS_NETWORK);
    return configPath;
  },

  async connect(containerName: string) {
    try {
      await dockerService.connectNetwork(
        containerName,
        env.TTYD_INTERNAL_NETWORK,
      );
    } catch {}

    try {
      await dockerService.connectNetwork(
        containerName,
        env.TTYD_INGRESS_NETWORK,
      );
    } catch {}
  },

  async run(containerName: string, configPath: string) {
    const running = await dockerService.isRunning(containerName);

    if (!running) {
      await dockerService.safeRemove(containerName);
      await ingressService.create(containerName, configPath);
    } else {
      const mappedPort = await dockerService.getPort(
        containerName,
        env.TTYD_PORT,
      );
      if (!mappedPort) {
        await dockerService.safeRemove(containerName);
        await ingressService.create(containerName, configPath);
      }
    }
  },

  async cleanup(sessionId: string) {
    const configPath = ingressConfigPath(sessionId);
    try {
      await fs.unlink(configPath);
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error as { code?: string }).code === "ENOENT"
      ) {
        return;
      }
      throw error;
    }
  },
};
