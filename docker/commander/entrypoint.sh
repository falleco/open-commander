#!/bin/sh
set -e

# ─── Docker daemon ────────────────────────────────────────────────────────────
echo "[commander] Starting Docker daemon..."
# dockerd-entrypoint.sh (from docker:27-dind) generates TLS certs under
# DOCKER_TLS_CERTDIR and applies kernel tweaks before exec-ing its arguments.
DOCKER_TLS_CERTDIR=/certs \
  /usr/local/bin/dockerd-entrypoint.sh \
    dockerd \
    --host=tcp://0.0.0.0:2376 \
    --host=unix:///var/run/docker.sock \
    &

# Wait up to 30 s for the socket to become ready.
echo "[commander] Waiting for Docker daemon..."
i=0
while [ "$i" -lt 30 ]; do
  docker info >/dev/null 2>&1 && break
  sleep 1
  i=$((i + 1))
done
docker info >/dev/null 2>&1 || { echo "[commander] Docker daemon did not start."; exit 1; }
echo "[commander] Docker daemon ready."

# ─── Networks ─────────────────────────────────────────────────────────────────
# Isolated network for agent containers — no direct internet access.
docker network create --internal open-commander-internal 2>/dev/null || true
# Egress network — only the proxy lives here; gives it internet access.
docker network create open-commander-egress 2>/dev/null || true

# ─── Egress proxy ─────────────────────────────────────────────────────────────
EGRESS_IMAGE="${EGRESS_IMAGE:-ghcr.io/falleco/open-commander-egress:latest}"
echo "[commander] Starting egress proxy (${EGRESS_IMAGE})..."
# Remove a stale container from a previous run before recreating it.
docker rm -f open-commander-egress-proxy 2>/dev/null || true
docker run -d \
  --name open-commander-egress-proxy \
  --network open-commander-internal \
  --network-alias egress-proxy \
  --dns 1.1.1.1 --dns 8.8.8.8 \
  --read-only \
  --tmpfs /tmp \
  --tmpfs /var/cache/squid \
  --tmpfs /var/log/squid \
  --security-opt no-new-privileges:true \
  "$EGRESS_IMAGE"
# Also attach to the egress network so the proxy can reach the internet.
docker network connect --alias egress-proxy open-commander-egress open-commander-egress-proxy

echo "[commander] Starting server..."
exec "$@"
