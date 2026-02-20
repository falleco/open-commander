import Redis from "ioredis";
import { env } from "@/env";

export const redisConnection = new Redis({
  host: env.REDIS_HOSTNAME ?? "localhost",
  port: env.REDIS_PORT ?? 6379,
  ...(env.REDIS_PASSWORD && { password: env.REDIS_PASSWORD }),
  ...(env.REDIS_TLS && { tls: {} }),
  maxRetriesPerRequest: null,
  enableOfflineQueue: false,
});
