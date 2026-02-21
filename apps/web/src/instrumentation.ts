import { logEnvConfigStatus } from "@/lib/env-logger";

const BANNER = `
 ██████╗ ██████╗ ███████╗███╗   ██╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║
██║   ██║██████╔╝█████╗  ██╔██╗ ██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║
╚██████╔╝██║     ███████╗██║ ╚████║
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝

 ██████╗ ██████╗ ███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██████╗ ███████╗██████╗
██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔══██╗
██║     ██║   ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║  ██║█████╗  ██████╔╝
██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██████╔╝███████╗██║  ██║
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝
`;

/**
 * This won't work unless you host this as an actual server,
 * which is highly recommended.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log(BANNER);
    const serverTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("🗓️  Date:", new Date());
    console.log("🕛 Server Timezone:", serverTimezone);

    logEnvConfigStatus();
    const { start } = await import("@/server/proxy");
    start().catch((err) => console.error("[proxy] failed to start:", err));
    console.log("🟢 Proxy started");

    // Pre-pull agent images in the background so the first session start
    // doesn't block on a cold DinD cache.
    // prefetchAgentImages().catch(() => {/* best-effort */});
  }
}

// /**
//  * Pulls all configured agent images in the background so the first session
//  * start is faster. Failures are intentionally swallowed — the pull will
//  * simply happen on-demand when the first container is launched instead.
//  */
// async function prefetchAgentImages(): Promise<void> {
//   const { env } = await import("@/env");
//   const { dockerService } = await import("@/lib/docker/docker.service");

//   const images = [
//     env.TTYD_IMAGE,
//   ].filter(Boolean) as string[];

//   console.log('PRE-PULLING AGENT IMAGES', images);
//   await Promise.allSettled(
//     images.map((image) =>
//       dockerService.pull(image).then(() =>
//         console.log(`[prefetch] pulled ${image}`),
//       ).catch((err: unknown) =>
//         console.warn(`[prefetch] could not pull ${image}:`, err instanceof Error ? err.message : err),
//       ),
//     ),
//   );
//   console.log('PRE-PULLING AGENT IMAGES COMPLETED');
// }
