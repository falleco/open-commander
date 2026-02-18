import { env } from "@/env";

const getEnabledDisabledStatus = (isEnabled: boolean) =>
  isEnabled ? "enabled" : "disabled";

const logVariable = (envFlag: boolean, description: string, indent = "") => {
  const statusIcon = envFlag ? "🟢" : "⚪️";
  const statusText = getEnabledDisabledStatus(envFlag);
  console.log(`${indent}${statusIcon} ${description} ${statusText}`);
};

const logBooleanSetting = (
  envFlag: boolean,
  description: string,
  indent = "|   ",
) => {
  const statusIcon = envFlag ? "✅" : "❌";
  console.log(`${indent}${statusIcon} ${description}`);
};

const logSetting = (
  value: string | undefined,
  description: string,
  indent = "|   ",
  icon = "➡️",
) => {
  console.log(`${indent}${icon} ${description}: ${value ?? "N/A"}`);
};

export function logEnvConfigStatus() {
  console.log("\n🔧 Environment Configuration Status:");

  // --- General ---
  console.log("\n⚙️ General");
  logBooleanSetting(
    env.ENABLE_ARTIFICIAL_TRPC_DELAY,
    "Artificial tRPC delay",
    "|_  ",
  );
  logSetting(env.AGENT_STATE_PATH, "Agent state path", "|_  ");
  logSetting(env.AGENT_WORKSPACE, "Agent workspace", "|_  ");

  // --- Auth ---
  console.log("\n🔑 Auth");
  logBooleanSetting(env.NEXT_PUBLIC_DISABLE_AUTH, "Disable auth", "|_  ");
  if (!env.NEXT_PUBLIC_DISABLE_AUTH) {
    logBooleanSetting(
      env.NEXT_PUBLIC_GITHUB_AUTH_ENABLED,
      "GitHub auth enabled",
      "|_  ",
    );
    logBooleanSetting(
      env.NEXT_PUBLIC_GOOGLE_AUTH_ENABLED,
      "Google auth enabled",
      "|_  ",
    );
  }

  // --- Integrations ---
  console.log("\n🔌 Integrations");
  const integrationIndent = "  ";
  logVariable(!!env.GITHUB_TOKEN, "GitHub", integrationIndent);
  // logVariable(
  //   serverEnv.NEXT_PUBLIC_ENABLE_BACKGROUND_JOBS,
  //   "Background jobs",
  //   integrationIndent,
  // );
  // logVariable(
  //   serverEnv.NEXT_PUBLIC_ENABLE_CRON,
  //   "Cron jobs",
  //   integrationIndent,
  // );
}
