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
RUN rm -rf /app/apps/web/.next

EXPOSE 3000
CMD ["bun", "run", "--cwd", "/app/apps/web", "dev"]

FROM base AS build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/apps/web/node_modules /app/apps/web/node_modules
COPY . .

RUN rm -rf /app/apps/web/.next \
  && bun run --cwd /app/apps/web build

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
