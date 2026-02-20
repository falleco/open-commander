import { EventEmitter } from "node:events";

/**
 * In-process event emitter that bridges the tRPC presence mutations and the
 * Fastify WebSocket proxy. Both run in the same Node.js process (started via
 * instrumentation.ts), so this singleton is shared between them.
 *
 * The proxy subscribes once per active projectId; tRPC mutations call
 * notifyPresenceChange() after any write so the proxy can push fresh data
 * to all connected clients in a single DB round-trip.
 *
 * Pinned to globalThis so Next.js HMR module re-evaluation in dev mode does
 * not create a second emitter instance that the proxy never hears from.
 */
declare global {
  // eslint-disable-next-line no-var
  var __ocPresenceEmitter: EventEmitter | undefined;
}

const emitter: EventEmitter =
  globalThis.__ocPresenceEmitter ?? new EventEmitter();
if (!globalThis.__ocPresenceEmitter) {
  globalThis.__ocPresenceEmitter = emitter;
  emitter.setMaxListeners(0); // unlimited subscribers
}

export function notifyPresenceChange(projectId: string): void {
  emitter.emit(`presence:${projectId}`);
}

export function onPresenceChange(
  projectId: string,
  handler: () => void,
): () => void {
  emitter.on(`presence:${projectId}`, handler);
  return () => emitter.off(`presence:${projectId}`, handler);
}
