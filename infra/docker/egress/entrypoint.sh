#!/bin/sh
set -eu

mkdir -p /tmp/squid

# Initialize swap dirs on tmpfs if missing
if [ ! -d /tmp/squid/00 ]; then
  squid -z -f /etc/squid/squid.conf
  rm -f /tmp/squid.pid
fi

# Start squid in background so we can watch allowlists and reconfigure
squid -N -f /etc/squid/squid.conf &
SQUID_PID=$!

# Wait for Squid to create pid file (needed for SIGHUP reconfigure)
for _ in 1 2 3 4 5 6 7 8 9 10; do
  [ -f /tmp/squid.pid ] && break
  sleep 1
done

WAITER_PID=""
cleanup() {
  kill "$SQUID_PID" 2>/dev/null || true
  [ -n "$WAITER_PID" ] && kill "$WAITER_PID" 2>/dev/null || true
  exit 0
}
trap cleanup TERM INT

# Poll allowlists; reconfigure when content changes (bind mounts often don't propagate inotify)
(
  DOMAINS_HASH=""; IPS_HASH=""
  while true; do
    sleep 5
    [ -z "${SQUID_PID:-}" ] && continue
    D=$(md5sum /etc/squid/allowed-domains.txt 2>/dev/null | cut -d' ' -f1)
    I=$(md5sum /etc/squid/allowed-ips.txt 2>/dev/null | cut -d' ' -f1)
    if [ -n "$DOMAINS_HASH" ] && [ "$D" != "$DOMAINS_HASH" ]; then
      kill -HUP "$SQUID_PID" 2>/dev/null || true
    fi
    if [ -n "$IPS_HASH" ] && [ "$I" != "$IPS_HASH" ]; then
      kill -HUP "$SQUID_PID" 2>/dev/null || true
    fi
    DOMAINS_HASH=$D; IPS_HASH=$I
  done
) &
WAITER_PID=$!

wait "$SQUID_PID"
