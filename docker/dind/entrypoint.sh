#!/bin/sh
set -eu

# Clean stale containerd state that can be left after hard kills
rm -f /run/containerd/containerd.pid /run/containerd/containerd.sock

exec /usr/local/bin/dockerd-entrypoint.sh "$@"
