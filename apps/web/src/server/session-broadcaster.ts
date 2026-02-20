import { EventEmitter } from "node:events";

/**
 * In-process event emitter that bridges tRPC session mutations and the
 * Fastify WebSocket proxy. Both run in the same Node.js process (started via
 * instrumentation.ts), so this singleton is shared between them.
 *
 * The proxy subscribes once per active projectId; tRPC mutations call
 * notifySessionChange() after any write so the proxy can push fresh data
 * to all connected clients without per-client polling.
 *
 * Pinned to globalThis so Next.js HMR module re-evaluation in dev mode does
 * not create a second emitter instance that the proxy never hears from.
 */
declare global {
  // eslint-disable-next-line no-var
  var __ocSessionEmitter: EventEmitter | undefined;
}

const emitter: EventEmitter =
  globalThis.__ocSessionEmitter ?? new EventEmitter();
if (!globalThis.__ocSessionEmitter) {
  globalThis.__ocSessionEmitter = emitter;
  emitter.setMaxListeners(0); // unlimited subscribers
}

export function notifySessionChange(projectId: string): void {
  emitter.emit(`sessions:${projectId}`);
}

export function onSessionChange(
  projectId: string,
  handler: () => void,
): () => void {
  emitter.on(`sessions:${projectId}`, handler);
  return () => emitter.off(`sessions:${projectId}`, handler);
}
