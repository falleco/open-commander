'use strict';
/**
 * TCP-level WebSocket forwarder for the commander container.
 *
 * Bun's Node.js-compat http.Server does not fire `upgrade` events reliably,
 * which breaks Next.js's built-in rewrite-based WebSocket proxying. All
 * WebSocket connections silently close before the handshake completes.
 *
 * This thin server inspects the first bytes of every incoming TCP connection:
 *   - WebSocket upgrade to a proxy path (/terminal/, /presence/, /sessions/)
 *     → forwarded directly to the Fastify WS proxy (WS_PORT, default 7682)
 *   - Everything else → forwarded to the Next.js standalone server (NEXT_PORT)
 *
 * Both targets are on 127.0.0.1 inside the same container process space.
 * Using raw net sockets avoids all http-proxy / http.request issues in Bun.
 */

const net  = require('node:net');
const path = require('node:path');

const MAIN_PORT = Number(process.env.PORT          ?? 3000);
const NEXT_PORT = Number(process.env.NEXT_INT_PORT  ?? 3001);
const WS_PORT   = Number(process.env.PROXY_PORT     ?? 7682);

// Proxy paths that carry WebSocket traffic.
const WS_PREFIXES = ['/terminal/', '/presence/', '/sessions/'];

/**
 * Pipe two sockets bidirectionally, forwarding `firstChunk` to target first.
 * Destroys both sockets on any error or close.
 */
function tunnel(client, firstChunk, targetPort) {
  const target = net.createConnection(targetPort, '127.0.0.1');

  target.once('connect', () => {
    target.write(firstChunk);
    client.pipe(target);
    target.pipe(client);
  });

  const destroy = () => { client.destroy(); target.destroy(); };
  client.on('error', destroy);
  target.on('error', destroy);
  client.on('close', () => target.destroy());
  target.on('close', () => client.destroy());
}

net.createServer((client) => {
  // Read the first chunk — always contains the full HTTP request line +
  // headers for browser-initiated connections in a single TCP segment.
  client.once('data', (chunk) => {
    const head      = chunk.toString('ascii', 0, 512);
    const isUpgrade = /upgrade:\s*websocket/i.test(head);
    const isWsPath  = WS_PREFIXES.some((p) => head.includes(`GET ${p}`));
    const port      = (isUpgrade && isWsPath) ? WS_PORT : NEXT_PORT;
    tunnel(client, chunk, port);
  });

  client.on('error', () => {});
}).listen(MAIN_PORT, '0.0.0.0', () => {
  console.log(`[forwarder] :${MAIN_PORT} → HTTP:${NEXT_PORT} ws:${WS_PORT}`);

  // Start Next.js on the internal port so it doesn't conflict with ours.
  process.env.PORT     = String(NEXT_PORT);
  process.env.HOSTNAME = '127.0.0.1';

  require(path.join(__dirname, 'apps/web/server.js'));
});
