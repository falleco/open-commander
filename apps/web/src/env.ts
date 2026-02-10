import path from "node:path";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    TTYD_CONTAINER_NAME: z.string().default("open-commander-ttyd"),
    TTYD_IMAGE: z.string().default("opencommander/agent:latest"),
    TTYD_PORT: z.coerce.number().default(7681),
    TTYD_SCREEN_NAME: z.string().default("open-commander-session"),
    TTYD_CMD: z.string().optional(),
    TTYD_INTERNAL_NETWORK: z
      .string()
      .default("open-commander_open-commander-internal"),
    TTYD_INGRESS_NETWORK: z
      .string()
      .default("open-commander_open-commander-ingress"),
    TTYD_EGRESS_PROXY_HOST: z.string().default("egress-proxy"),
    TTYD_EGRESS_PROXY_PORT: z.coerce.number().default(3128),
    EGRESS_PROXY_CONTAINER_NAME: z
      .string()
      .default("open-commander-egress-proxy"),
    GITHUB_CLIENT_ID: z.string().optional(),
    GITHUB_CLIENT_SECRET: z.string().optional(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    APPLE_CLIENT_ID: z.string().optional(),
    APPLE_CLIENT_SECRET: z.string().optional(),
    ENABLE_ARTIFICIAL_TRPC_DELAY: z.coerce.boolean().default(false),
    DATABASE_URL: z
      .string()
      .url()
      .default("postgresql://postgres:postgres@localhost:5432/commander_dev"),
    AGENT_WORKSPACE: z.string().optional(),
    DIND_CERTS_VOLUME: z.string().optional(),
    COMMANDER_BASE_PATH: z.string().default(path.resolve(process.cwd())),
    REDIS_HOSTNAME: z.string().default("localhost"),
    REDIS_PORT: z.coerce.number().default(6379),
    REDIS_PASSWORD: z.string().optional(),
    REDIS_TLS: z.coerce.boolean().default(false),
    GITHUB_TOKEN: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
    NEXT_PUBLIC_UPLOADTHING_URL_ROOT: z.string().url().optional(),
    NEXT_PUBLIC_GITHUB_AUTH_ENABLED: z
      .string()
      .default("false")
      .transform((input) => input === "true"),
    NEXT_PUBLIC_GOOGLE_AUTH_ENABLED: z
      .string()
      .default("false")
      .transform((input) => input === "true"),
    NEXT_PUBLIC_APPLE_AUTH_ENABLED: z
      .string()
      .default("false")
      .transform((input) => input === "true"),
    NEXT_PUBLIC_DISABLE_AUTH: z.coerce.boolean().default(false),
  },
  runtimeEnv: {
    TTYD_CONTAINER_NAME: process.env.TTYD_CONTAINER_NAME,
    TTYD_IMAGE: process.env.TTYD_IMAGE,
    TTYD_PORT: process.env.TTYD_PORT,
    TTYD_SCREEN_NAME: process.env.TTYD_SCREEN_NAME,
    TTYD_CMD: process.env.TTYD_CMD,
    TTYD_INTERNAL_NETWORK: process.env.TTYD_INTERNAL_NETWORK,
    TTYD_INGRESS_NETWORK: process.env.TTYD_INGRESS_NETWORK,
    TTYD_EGRESS_PROXY_HOST: process.env.TTYD_EGRESS_PROXY_HOST,
    TTYD_EGRESS_PROXY_PORT: process.env.TTYD_EGRESS_PROXY_PORT,
    EGRESS_PROXY_CONTAINER_NAME: process.env.EGRESS_PROXY_CONTAINER_NAME,
    AGENT_WORKSPACE: process.env.AGENT_WORKSPACE,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_UPLOADTHING_URL_ROOT:
      process.env.NEXT_PUBLIC_UPLOADTHING_URL_ROOT,
    NEXT_PUBLIC_GITHUB_AUTH_ENABLED:
      process.env.NEXT_PUBLIC_GITHUB_AUTH_ENABLED,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    NEXT_PUBLIC_GOOGLE_AUTH_ENABLED:
      process.env.NEXT_PUBLIC_GOOGLE_AUTH_ENABLED,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXT_PUBLIC_APPLE_AUTH_ENABLED: process.env.NEXT_PUBLIC_APPLE_AUTH_ENABLED,
    NEXT_PUBLIC_DISABLE_AUTH: process.env.NEXT_PUBLIC_DISABLE_AUTH,
    APPLE_CLIENT_ID: process.env.APPLE_CLIENT_ID,
    APPLE_CLIENT_SECRET: process.env.APPLE_CLIENT_SECRET,
    ENABLE_ARTIFICIAL_TRPC_DELAY: process.env.ENABLE_ARTIFICIAL_TRPC_DELAY,
    DATABASE_URL: process.env.DATABASE_URL,
    DIND_CERTS_VOLUME: process.env.DIND_CERTS_VOLUME,
    COMMANDER_BASE_PATH: process.env.COMMANDER_BASE_PATH,
    REDIS_HOSTNAME: process.env.REDIS_HOSTNAME,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    REDIS_TLS: process.env.REDIS_TLS,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
});
