# syntax=docker/dockerfile:1.7
FROM docker:27-cli AS docker-cli

FROM oven/bun:1.3.3 AS base
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH

# Keep Docker CLI available for runtime commands.
COPY --from=docker-cli /usr/local/bin/docker /usr/local/bin/docker
COPY --from=docker-cli /usr/local/libexec/docker/cli-plugins /usr/local/libexec/docker/cli-plugins

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

FROM base AS runner
ENV NODE_ENV=production
WORKDIR /app

# Next.js standalone output for a lean runtime image.
COPY --from=build /app/apps/web/.next/standalone ./
COPY --from=build /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=build /app/apps/web/public ./apps/web/public
COPY --from=build /app/apps/web/prisma ./apps/web/prisma

EXPOSE 3000
CMD ["sh", "-c", "if [ -f /app/server.js ]; then bun /app/server.js; else bun /app/apps/web/server.js; fi"]
