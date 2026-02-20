# Docker Deploy — Deployment Plan

## Goal

Enable Open Commander to be deployed as a self-contained Docker Compose stack,
where the only inputs from the operator are environment variables (secrets, URLs).
No local filesystem mounts, no build step, no cloned repo required.

```
docker compose -f docker-compose.deploy.yml up -d
```

---

## Current State vs Target State

| Concern | Local dev today | Deploy target |
|---|---|---|
| Commander image | `build:` from local context | `opencommander/web:latest` from registry |
| Egress image | `build:` from local context + volume mounts for config files | `opencommander/egress:latest` from registry (configs baked in) |
| Docker access | Host socket `unix:///var/run/docker.sock` | DinD `tcp://docker:2376` with TLS |
| State storage | Host paths (`${DOCKER_AGENT_STATE_PATH}`) | Named Docker volumes |
| Workspace storage | Host paths (`${DOCKER_AGENT_WORKSPACE}`) | Named Docker volumes |
| Agent definitions | `./agents` local mount | Baked into commander image at build |
| DB migration | Manual / developer managed | Auto-runs `prisma migrate deploy` on startup |

---

## Components

The deploy stack keeps the same service topology as today — nothing new is introduced.

```
┌──────────────────────────────────────────────────────┐
│                  open-commander-network               │
│                                                      │
│  ┌─────────────┐          ┌──────────────────────┐   │
│  │  commander  │◄────────►│     docker-dind      │   │
│  │ (web + proxy│          │  (privileged, TLS)   │   │
│  │    server)  │          └──────────┬───────────┘   │
│  └──────┬──────┘                     │               │
│         │ certs volume               │               │
│         └───────────────────────────►│               │
│                                      │               │
│  ┌─────────────┐          ┌──────────▼───────────┐   │
│  │ egress-proxy│◄─────────│     dind-proxy       │   │
│  │  (squid)    │          │  (socat tunnel)      │   │
│  └─────────────┘          └──────────────────────┘   │
│                                                      │
│  ┌─────────────┐   ┌──────────────────────────────┐  │
│  │  postgres   │   │          redis               │  │
│  └─────────────┘   └──────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

All services communicate over a single internal Docker network.
Only commander's port 3000 is published to the host.

---

## Changes Required

### 1. `docker/commander/Dockerfile` — add migration entrypoint

The current `CMD` just starts the server. We need to run
`prisma migrate deploy` before the app starts, then execute the original command.

Create `docker/commander/entrypoint.sh`:

```sh
#!/bin/sh
set -e
echo "[commander] running prisma migrate deploy..."
cd /app/apps/web && bunx prisma migrate deploy
echo "[commander] starting server..."
exec "$@"
```

Update the `runner` stage in the Dockerfile:

```dockerfile
COPY docker/commander/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["sh", "-c", "if [ -f /app/server.js ]; then bun /app/server.js; else bun /app/apps/web/server.js; fi"]
```

### 2. `docker/commander/Dockerfile` — bake agents into image

The dev compose mounts `./agents` from the local repo. In the deploy image, agents
should be embedded so the image is self-contained.

Add to the `build` stage before the standalone copy:

```dockerfile
COPY agents /app/agents
```

And to the `runner` stage, copy agents from the build stage:

```dockerfile
COPY --from=build /app/agents /app/agents
```

The path inside the container must match `AGENT_DEFINITIONS_PATH` (or the
current default that `mounts.ts` resolves from).

> **Open question:** Should agents be user-overridable via a volume at
> `/app/agents`? A mounted volume would shadow the baked-in defaults,
> giving operators a customization escape hatch without a rebuild.

### 3. `docker-compose.deploy.yml` — new file (no build directives)

```yaml
services:
  commander:
    image: opencommander/web:latest
    container_name: open-commander
    ports:
      - "${PORT:-3000}:3000"
    environment:
      HOST: 0.0.0.0
      NODE_ENV: production
      NEXT_PUBLIC_APP_URL: ${PUBLIC_URL}
      DATABASE_URL: ${DATABASE_URL}
      REDIS_HOSTNAME: ${REDIS_HOSTNAME:-redis}
      BETTER_AUTH_SECRET: ${BETTER_AUTH_SECRET}
      BETTER_AUTH_URL: ${PUBLIC_URL}
      # Docker access via DinD
      DOCKER_HOST: tcp://docker:2376
      DOCKER_TLS_VERIFY: "1"
      DOCKER_CERT_PATH: /certs/client
      DIND_CERTS_VOLUME: open-commander_dind-certs
      # Egress proxy for agent containers
      TTYD_EGRESS_PROXY_HOST: egress-proxy
      TTYD_EGRESS_PROXY_PORT: "3128"
      TTYD_INTERNAL_NETWORK: open-commander_internal
      # Volumes used by agent containers (resolved at runtime by the commander
      # process; must be named volumes that DinD can also access)
      AGENT_STATE_PATH: /home/commander/.state
      AGENT_WORKSPACE: /workspace
    volumes:
      - /certs/client:/certs/client:ro
      - agent-state:/home/commander/.state
      - agent-workspace:/workspace
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
      docker-dind:
        condition: service_started
      egress-proxy:
        condition: service_started
    networks:
      - internal
      - default
    restart: unless-stopped

  egress-proxy:
    image: opencommander/egress:latest
    container_name: open-commander-egress-proxy
    expose:
      - "3128"
    networks:
      - internal
      - egress
    dns:
      - 1.1.1.1
      - 8.8.8.8
    read_only: true
    tmpfs:
      - /tmp
      - /var/cache/squid
      - /var/log/squid
    security_opt:
      - no-new-privileges:true
    restart: unless-stopped

  docker-dind:
    image: docker:27-dind
    container_name: open-commander-dind
    privileged: true
    command:
      - --host=tcp://0.0.0.0:2376
      - --host=unix:///var/run/docker.sock
    environment:
      - DOCKER_TLS_CERTDIR=/certs
      - HTTP_PROXY=http://egress-proxy:3128
      - HTTPS_PROXY=http://egress-proxy:3128
      - NO_PROXY=localhost,127.0.0.1,::1,egress-proxy,docker
    networks:
      internal:
        aliases:
          - docker
      egress:
        aliases:
          - docker
    volumes:
      - dind-data:/var/lib/docker
      - dind-certs:/certs
      - agent-state:/root/.state
      - agent-workspace:/workspace
    init: true
    stop_grace_period: 30s
    restart: unless-stopped

  dind-proxy:
    image: alpine/socat
    container_name: open-commander-dind-proxy
    network_mode: service:docker-dind
    depends_on:
      - docker-dind
      - egress-proxy
    command:
      - -d -d
      - TCP-LISTEN:3128,fork,reuseaddr
      - TCP:egress-proxy:3128
    restart: unless-stopped

  postgres:
    image: postgres:16-alpine
    container_name: open-commander-postgres
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-postgres}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB:-commander}
    volumes:
      - postgres-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER:-postgres}"]
      interval: 5s
      timeout: 5s
      retries: 5
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    container_name: open-commander-redis
    volumes:
      - redis-data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 5s
      retries: 5
    restart: unless-stopped

volumes:
  dind-data:
  dind-certs:
  agent-state:
  agent-workspace:
  postgres-data:
  redis-data:

networks:
  internal:
    internal: true
  egress:
  default:
    name: open-commander_internal
```

### 4. `.env.deploy.example` — minimal env file for operators

```env
# Required
PUBLIC_URL=https://commander.example.com
DATABASE_URL=postgresql://postgres:secret@postgres:5432/commander
BETTER_AUTH_SECRET=change-me-to-a-random-64-char-string

# Postgres (only if using the bundled postgres service)
POSTGRES_PASSWORD=secret

# Optional
PORT=3000
REDIS_HOSTNAME=redis
GITHUB_TOKEN=             # for gh CLI inside sessions
```

### 5. CI/CD — GitHub Actions image publish

Add `.github/workflows/docker-publish.yml`:

```yaml
on:
  push:
    branches: [main]
    tags: ['v*']

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      packages: write
    strategy:
      matrix:
        include:
          - dockerfile: docker/commander/Dockerfile
            image: opencommander/web
            target: runner
          - dockerfile: docker/egress/Dockerfile
            image: opencommander/egress
            target: ""
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
      - uses: docker/build-push-action@v5
        with:
          context: .
          file: ${{ matrix.dockerfile }}
          target: ${{ matrix.target }}
          push: true
          tags: ${{ matrix.image }}:latest,${{ matrix.image }}:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

---

## Volume Architecture

| Volume | Purpose | Shared between |
|---|---|---|
| `dind-certs` | TLS certs generated by DinD | DinD (write), commander (read) |
| `dind-data` | Docker layer cache inside DinD | DinD only |
| `agent-state` | Agent `.state` directories | DinD (runs containers that write), commander |
| `agent-workspace` | Workspace files for sessions | DinD (runs containers that read/write), commander |
| `postgres-data` | Postgres database files | postgres only |
| `redis-data` | Redis persistence | redis only |

The `agent-state` and `agent-workspace` volumes are mounted into both
`commander` and `docker-dind`. Commander writes to them directly (e.g., copying
agent configs); DinD mounts them into the agent containers it spawns.

---

## Open Questions

1. **Agents customization at runtime**
   Baking agents into the image is simpler but requires a rebuild to change agent
   definitions. Should we also support a user-mounted `/app/agents` volume that
   shadows the defaults?
   >> for now, yes, it should be an option to override it as well, add a DOCKER_ var to allow this behavior

2. **External DB/Redis**
   Operators on Coolify or Railway will likely bring their own managed Postgres
   and Redis. The compose file should document how to remove the bundled services
   and replace `DATABASE_URL`/`REDIS_HOSTNAME` with external endpoints.
   >> no need to worry about databases on docker, the user will handle it. Just create a docker-compose.dbs.yml with the dbs definition for the sake of QOL

3. **Workspace and state persistence on multi-host**
   Named Docker volumes work for single-node deploys. For multi-node (Swarm,
   K8s), the volumes need to be network-attached (NFS, S3-backed, etc.).
   Out of scope for the initial deploy, worth noting in docs.
  >> out of scope for now 

4. **`DIND_CERTS_VOLUME` naming**
   The value must match the fully-qualified Docker volume name
   (`<compose-project-name>_dind-certs`). In deploy compose the project name
   defaults to the directory name. Operators who rename the directory or use
   `--project-name` must update this env var. Consider resolving this by having
   the commander auto-detect the volume by inspecting its own container instead.
   >> ok, it makes sense, lets go this way

5. **DinD image pull performance**
   Agent containers are pulled inside DinD. Cold starts will be slow until the
   DinD layer cache (`dind-data` volume) is warm. This is unavoidable on first
   deploy but improves on restart.
   >> make it download the images in background when the system starts

---

## Platform Compatibility

| Platform | Status | Notes |
|---|---|---|
| Coolify | ✅ Full support | Supports docker-compose with privileged containers |
| Self-hosted VPS (Hetzner, DO, etc.) | ✅ Full support | Plain `docker compose up` |
| Fly.io | ⚠️ Possible | Fly supports privileged via `[processes]` config; multi-service needs careful setup |
| Railway | ❌ Not supported | Railway does not allow `privileged: true`; DinD cannot run |
| Render | ❌ Not supported | No privileged containers |
| Heroku | ❌ Not supported | No Docker Compose, no privileged |

> For Railway/Render: a future "host socket mode" would let the commander connect
> to a pre-existing Docker daemon on the host (if the platform exposes it), but
> this requires platform-specific investigation.

---

## Rollout Phases

### Phase 1 — Image publish pipeline
- Add GitHub Actions workflow to build and push `opencommander/web` and
  `opencommander/egress` on every push to `main`.
- Add version tags on git tags.

### Phase 2 — Commander Dockerfile changes
- Add migration entrypoint (`prisma migrate deploy` before server start).
- Bake `agents/` into the image.
- Verify the `DOCKER_HOST=tcp://docker:2376` path works end-to-end.

### Phase 3 — Deploy compose file + example env
- Add `docker-compose.deploy.yml` and `.env.deploy.example`.
- Validate locally by running the deploy compose with no host mounts.

### Phase 4 — Documentation
- Add a `docs/deploy.md` operator guide with step-by-step instructions for
  Coolify and plain VPS.
- Document env vars, volume semantics, and how to bring external DB/Redis.

### Phase 5 — Optional: local dev mode stays unchanged
- Confirm `docker-compose.yml` (build mode, host socket) still works for
  contributors.
- Keep the two compose files separate (`docker-compose.yml` for dev,
  `docker-compose.deploy.yml` for production).
