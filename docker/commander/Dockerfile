# syntax=docker/dockerfile:1.7

# docker:27-dind provides dockerd-entrypoint.sh (TLS setup + kernel tweaks).
FROM docker:27-dind AS docker-dind

FROM oven/bun:1.3.3 AS base
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH

FROM base AS deps
COPY package.json bun.lock ./
COPY apps/web/package.json apps/web/package.json
COPY apps/web/prisma apps/web/prisma
COPY packages packages
RUN bun install --frozen-lockfile

FROM deps AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 3000
CMD ["bun", "run", "--cwd", "/app/apps/web", "dev"]

FROM deps AS build
COPY . .
RUN bun run --cwd /app/apps/web build
# Preserve agents directory for the runner stage
COPY agents /app/agents

FROM base AS runner
ENV NODE_ENV=production
WORKDIR /app

# Install Docker Engine (dockerd) and networking tools needed for DinD.
# The Docker CE apt repo is used because oven/bun is Debian-based (glibc),
# so the Alpine binaries from docker:27-dind cannot be used at runtime.
RUN apt-get update && apt-get install -y --no-install-recommends \
        ca-certificates curl gnupg iptables iproute2 \
    && install -m 0755 -d /etc/apt/keyrings \
    && curl -fsSL https://download.docker.com/linux/debian/gpg \
       -o /etc/apt/keyrings/docker.asc \
    && chmod a+r /etc/apt/keyrings/docker.asc \
    && . /etc/os-release \
    && printf 'deb [arch=%s signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian %s stable\n' \
       "$(dpkg --print-architecture)" "$VERSION_CODENAME" \
       > /etc/apt/sources.list.d/docker.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
       docker-ce docker-ce-cli containerd.io \
    && rm -rf /var/lib/apt/lists/*

# Binaries from docker:27-dind (statically linked — safe to copy to Debian):
#   dockerd-entrypoint.sh  generates TLS certs, applies kernel tweaks, execs dockerd.
#   docker-init (tini)     used by dockerd-entrypoint.sh as PID-1 init shim.
#   modprobe               wrapper that silences harmless module-load failures.
COPY --from=docker-dind /usr/local/bin/dockerd-entrypoint.sh /usr/local/bin/dockerd-entrypoint.sh
COPY --from=docker-dind /usr/local/bin/docker-init /usr/local/bin/docker-init
COPY --from=docker-dind /usr/local/bin/modprobe /usr/local/bin/modprobe

# Next.js standalone output for a lean runtime image.
COPY --from=build /app/apps/web/.next/standalone ./
COPY --from=build /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=build /app/apps/web/public ./apps/web/public
COPY --from=build /app/apps/web/prisma ./apps/web/prisma
# Bake agent definitions so the image is self-contained.
# Operators can shadow /app/agents with a Docker volume for customization.
COPY --from=build /app/agents ./agents

COPY docker/commander/server.js /app/server.js
COPY docker/commander/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/entrypoint.sh"]
CMD ["sh", "-c", "if [ -f /app/server.js ]; then bun /app/server.js; else bun /app/apps/web/server.js; fi"]
