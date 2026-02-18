#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOCKER_DIR="$ROOT_DIR/docker"
IMAGE_PREFIX="${IMAGE_PREFIX:-opencommander/agent}"
IMAGE_TAG="${IMAGE_TAG:-latest}"

echo "Open Commander Docker build"
echo "Root: $ROOT_DIR"
echo "Docker dir: $DOCKER_DIR"
echo "Image prefix: $IMAGE_PREFIX"
echo "Tag: $IMAGE_TAG"
echo

mapfile -t DOCKERFILES < <(find "$DOCKER_DIR" -mindepth 2 -maxdepth 2 -type f -name Dockerfile | sort)

if [ "${#DOCKERFILES[@]}" -eq 0 ]; then
  echo "No Dockerfiles found under $DOCKER_DIR"
  exit 1
fi

for dockerfile in "${DOCKERFILES[@]}"; do
  context_dir="$(dirname "$dockerfile")"
  name="$(basename "$context_dir")"
  image="${IMAGE_PREFIX}-${name}:${IMAGE_TAG}"
  echo "→ Building $image"
  docker build -t "$image" "$context_dir"
  echo "✓ Done $image"
  echo
done

echo "All images built."
