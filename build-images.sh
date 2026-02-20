#!/usr/bin/env bash
set -euo pipefail

docker build -f docker/commander/Dockerfile --target runner -t ghcr.io/open-commander/open-commander-web:latest .
docker build -f docker/egress/Dockerfile -t ghcr.io/open-commander/open-commander-egress:latest docker/egress