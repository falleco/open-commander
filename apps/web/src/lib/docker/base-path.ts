import path from "node:path";
import { env } from "@/env";

function inferFromCwd(cwd: string) {
  const resolved = path.resolve(cwd);
  const normalized = resolved.replace(/\\/g, "/");
  const marker = "/apps/web";
  const idx = normalized.indexOf(marker);

  if (idx > 0) {
    return path.resolve(normalized.slice(0, idx));
  }

  const parent = path.dirname(resolved);
  if (
    path.basename(resolved) === "web" &&
    path.basename(parent) === "apps"
  ) {
    return path.dirname(parent);
  }

  return resolved;
}

export const commanderBasePath = (() => {
  const configured = env.COMMANDER_BASE_PATH?.trim();
  if (configured) {
    return path.resolve(configured);
  }
  return inferFromCwd(process.cwd());
})();
