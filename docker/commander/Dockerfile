# syntax=docker/dockerfile:1.7
FROM oven/bun:1.3.3 AS base

WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH

RUN set -eux; \
  apt-get update; \
  apt-get install -y ca-certificates curl gnupg git; \
  install -m 0755 -d /etc/apt/keyrings; \
  curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc; \
  chmod a+r /etc/apt/keyrings/docker.asc; \
  codename="$(. /etc/os-release && echo "${VERSION_CODENAME}")"; \
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian ${codename} stable" \
  > /etc/apt/sources.list.d/docker.list; \
  apt-get update; \
  apt-get install -y docker-ce-cli docker-buildx-plugin docker-compose-plugin; \
  rm -rf /var/lib/apt/lists/*

FROM base AS deps

COPY package.json bun.lock ./
COPY apps/web/package.json apps/web/package.json
COPY packages packages
RUN bun install --frozen-lockfile \
  && mkdir -p /app/apps/web/node_modules

FROM base AS dev

ENV NODE_ENV=development
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/apps/web/node_modules /app/apps/web/node_modules
COPY . .

EXPOSE 3000
CMD ["bun", "run", "--cwd", "/app/apps/web", "dev"]

FROM base AS build

WORKDIR /app

ARG NEXT_PUBLIC_APP_URL=http://localhost:3000
ARG NEXT_PUBLIC_UPLOADTHING_URL_ROOT=http://localhost:3000
ARG NEXT_PUBLIC_GITHUB_AUTH_ENABLED=false
ARG NEXT_PUBLIC_GOOGLE_AUTH_ENABLED=false
ARG NEXT_PUBLIC_APPLE_AUTH_ENABLED=false
ARG NEXT_PUBLIC_DISABLE_AUTH=true
ARG GITHUB_CLIENT_ID=dummy
ARG GITHUB_CLIENT_SECRET=dummy
ARG GOOGLE_CLIENT_ID=dummy
ARG GOOGLE_CLIENT_SECRET=dummy
ARG APPLE_CLIENT_ID=dummy
ARG APPLE_CLIENT_SECRET=dummy
ARG DATABASE_URL=postgresql://postgres:postgres@postgres:5432/commander_dev
ARG COMMANDER_BASE_PATH=/app
ARG AGENT_WORKSPACE=/workspace
ARG TTYD_CONTAINER_NAME=open-commander-ttyd
ARG TTYD_IMAGE=opencommander/agent:latest
ARG TTYD_PORT=7681
ARG TTYD_SCREEN_NAME=open-commander-session
ARG TTYD_INTERNAL_NETWORK=open-commander_open-commander-internal
ARG TTYD_INGRESS_NETWORK=open-commander_open-commander-ingress
ARG TTYD_EGRESS_PROXY_HOST=egress-proxy
ARG TTYD_EGRESS_PROXY_PORT=3128
ARG EGRESS_PROXY_CONTAINER_NAME=open-commander-egress-proxy
ARG DIND_CERTS_VOLUME=open-commander_open-commander-dind-certs
ARG ENABLE_ARTIFICIAL_TRPC_DELAY=false

ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL \
  NEXT_PUBLIC_UPLOADTHING_URL_ROOT=$NEXT_PUBLIC_UPLOADTHING_URL_ROOT \
  NEXT_PUBLIC_GITHUB_AUTH_ENABLED=$NEXT_PUBLIC_GITHUB_AUTH_ENABLED \
  NEXT_PUBLIC_GOOGLE_AUTH_ENABLED=$NEXT_PUBLIC_GOOGLE_AUTH_ENABLED \
  NEXT_PUBLIC_APPLE_AUTH_ENABLED=$NEXT_PUBLIC_APPLE_AUTH_ENABLED \
  NEXT_PUBLIC_DISABLE_AUTH=$NEXT_PUBLIC_DISABLE_AUTH \
  GITHUB_CLIENT_ID=$GITHUB_CLIENT_ID \
  GITHUB_CLIENT_SECRET=$GITHUB_CLIENT_SECRET \
  GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID \
  GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET \
  APPLE_CLIENT_ID=$APPLE_CLIENT_ID \
  APPLE_CLIENT_SECRET=$APPLE_CLIENT_SECRET \
  DATABASE_URL=$DATABASE_URL \
  COMMANDER_BASE_PATH=$COMMANDER_BASE_PATH \
  AGENT_WORKSPACE=$AGENT_WORKSPACE \
  TTYD_CONTAINER_NAME=$TTYD_CONTAINER_NAME \
  TTYD_IMAGE=$TTYD_IMAGE \
  TTYD_PORT=$TTYD_PORT \
  TTYD_SCREEN_NAME=$TTYD_SCREEN_NAME \
  TTYD_INTERNAL_NETWORK=$TTYD_INTERNAL_NETWORK \
  TTYD_INGRESS_NETWORK=$TTYD_INGRESS_NETWORK \
  TTYD_EGRESS_PROXY_HOST=$TTYD_EGRESS_PROXY_HOST \
  TTYD_EGRESS_PROXY_PORT=$TTYD_EGRESS_PROXY_PORT \
  EGRESS_PROXY_CONTAINER_NAME=$EGRESS_PROXY_CONTAINER_NAME \
  DIND_CERTS_VOLUME=$DIND_CERTS_VOLUME \
  ENABLE_ARTIFICIAL_TRPC_DELAY=$ENABLE_ARTIFICIAL_TRPC_DELAY

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/apps/web/node_modules /app/apps/web/node_modules
COPY . .

RUN bun run --cwd /app/apps/web build

FROM base AS runner

ENV NODE_ENV=production
WORKDIR /app/apps/web

COPY --from=build /app/apps/web/.next /app/apps/web/.next
COPY --from=build /app/apps/web/public /app/apps/web/public
COPY --from=build /app/apps/web/package.json /app/apps/web/package.json
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/apps/web/node_modules /app/apps/web/node_modules

EXPOSE 3000
CMD ["bun", "run", "start"]
