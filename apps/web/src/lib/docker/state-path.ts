import path from "node:path";
import { env } from "@/env";
import { commanderBasePath } from "./base-path";

export const agentStatePath = (() => {
  const configured = env.AGENT_STATE_PATH?.trim();
  if (configured) {
    return path.resolve(configured);
  }
  return path.join(commanderBasePath, ".state");
})();
