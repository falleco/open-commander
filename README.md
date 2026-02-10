```

     ██████╗ ██████╗ ███████╗███╗   ██╗
    ██╔═══██╗██╔══██╗██╔════╝████╗  ██║
    ██║   ██║██████╔╝█████╗  ██╔██╗ ██║
    ██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║
    ╚██████╔╝██║     ███████╗██║ ╚████║
     ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝

     ██████╗ ██████╗ ███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██████╗ ███████╗██████╗
    ██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔══██╗
    ██║     ██║   ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║  ██║█████╗  ██████╔╝
    ██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗
    ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██████╔╝███████╗██║  ██║
     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝

        ┌─────────────────────────────────────────────────────────────┐
        │  🤖 Delegate tasks to AI agents in isolated containers 🐳  │
        └─────────────────────────────────────────────────────────────┘

```

# Open Commander

**Delegate tasks to AI coding agents with full isolation and control.**

Open Commander is a self-hosted platform that lets you delegate coding tasks to AI agents (Claude, OpenAI Codex, Cursor, and more) running in isolated Docker containers. Each agent gets its own secure environment with controlled internet access, making it safe to let AI work on your codebase autonomously.

---

## Why Open Commander?

### Secure by Design
- **Isolated Execution**: Each agent runs in its own Docker container with no direct access to your host system
- **Controlled Egress**: Outbound internet access goes through a proxy with configurable allowlists
- **No Credential Leaks**: API keys and tokens stay on the server, never exposed to agents

### Autonomous Task Execution
- **Fire and Forget**: Submit a task via API and let the agent work independently
- **Automatic Repository Cloning**: Just provide `owner/repo` — the system clones it automatically
- **Progress Tracking**: Monitor task status, view logs, and get results via API or web UI

### Multi-Agent Support
- **Choose Your Agent**: Claude, OpenAI Codex, Cursor, or custom agents
- **Consistent Interface**: Same API for all agents
- **Agent-Specific Configurations**: Customize settings per agent type

### Developer-Friendly API
- **REST API**: Create tasks, check status, and retrieve results programmatically
- **GitHub Integration**: Verify repository access before delegating tasks
- **Webhooks Ready**: Integrate with CI/CD pipelines and automation tools

### Self-Hosted & Private
- **Your Infrastructure**: Run on your own servers or cloud
- **Your Data**: Code never leaves your environment
- **Your Rules**: Full control over access, quotas, and permissions

---

## Quick Start

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose
- [Bun](https://bun.sh/) (for local development)
- A GitHub Personal Access Token (for cloning private repositories)

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/open-commander.git
cd open-commander
```

### 2. Start Infrastructure Services

Start the required services (PostgreSQL, Redis, Docker-in-Docker, Egress Proxy):

```bash
docker compose up -d
```

This starts:
- **PostgreSQL** (port 5432) — Database for tasks, users, and settings
- **Redis** (port 6379) — Job queue for task execution
- **Docker-in-Docker** — Isolated Docker daemon for running agent containers
- **Egress Proxy** (port 3128) — Controlled outbound internet access
- **Worker Jobs** — Background worker for processing task executions
- **Worker Board** (port 4000) — Bull Board UI for monitoring job queues

### 3. Configure Environment

```bash
# Copy the example environment file
cp apps/web/.env.example apps/web/.env
```

Edit `apps/web/.env` and configure the required variables:

```bash
# Required: Path to your Open Commander installation
COMMANDER_BASE_PATH=/path/to/open-commander

# Required: Directory where repositories will be cloned
# Agent containers will have access to this directory
AGENT_WORKSPACE=/path/to/your/projects

# Required: Your GitHub token for cloning repositories
# Create at: https://github.com/settings/tokens
# Recommended scopes: repo (for private repos)
GITHUB_TOKEN=ghp_your_token_here

# Database (matches docker-compose defaults)
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/commander_dev

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Disable auth for local development (never in production!)
NEXT_PUBLIC_DISABLE_AUTH=true
```

### 4. Install Dependencies & Setup Database

```bash
# Install dependencies
bun install

# Generate Prisma client and run migrations
cd apps/web
bunx prisma generate
bunx prisma migrate deploy
```

### 5. Start the Application

```bash
# From the apps/web directory
bun run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Environment Configuration

### Required Variables

| Variable | Description |
|----------|-------------|
| `COMMANDER_BASE_PATH` | Absolute path to the Open Commander installation |
| `AGENT_WORKSPACE` | Directory where repositories are cloned and mounted into containers |
| `DATABASE_URL` | PostgreSQL connection string |
| `GITHUB_TOKEN` | GitHub PAT for cloning repositories and API access |

### Authentication (Optional)

For production, configure at least one OAuth provider:

```bash
# GitHub OAuth
NEXT_PUBLIC_GITHUB_AUTH_ENABLED=true
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret

# Google OAuth
NEXT_PUBLIC_GOOGLE_AUTH_ENABLED=true
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

### Docker Configuration (Advanced)

These have sensible defaults but can be customized:

```bash
# Agent container image
TTYD_IMAGE=opencommander/agent:latest

# Docker networks (must match docker-compose.yml)
TTYD_INTERNAL_NETWORK=open-commander_open-commander-internal
TTYD_INGRESS_NETWORK=open-commander_open-commander-ingress

# Egress proxy settings
TTYD_EGRESS_PROXY_HOST=egress-proxy
TTYD_EGRESS_PROXY_PORT=3128
```

See `apps/web/.env.example` for the complete list of configuration options.

---

## Usage

### Creating an API Key

1. Open the web UI at [http://localhost:3000](http://localhost:3000)
2. Go to **Settings** → **API Clients**
3. Create a new API client and generate a secret key
4. Save the key securely — it's only shown once!

### Monitoring Job Queues

The Bull Board UI is available at [http://localhost:4000/admin/queues](http://localhost:4000/admin/queues) for monitoring and managing background jobs.

### Delegating a Task via API

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Authorization: Bearer oc_sk_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "body": "Fix the bug in src/utils/auth.ts where tokens expire too early",
    "agentId": "claude",
    "repository": "your-org/your-repo"
  }'
```

The repository is **automatically cloned** — the agent starts with it as the working directory. No need to include clone instructions in the task.

### Checking Task Status

```bash
# Get task by ID
curl http://localhost:3000/api/tasks/clx789abc123 \
  -H "Authorization: Bearer oc_sk_your_api_key"

# List all tasks
curl http://localhost:3000/api/tasks \
  -H "Authorization: Bearer oc_sk_your_api_key"
```

### Verifying Repository Access

Before delegating a task, you can verify the server has access to the repository:

```bash
curl -X POST http://localhost:3000/api/github/verify-access \
  -H "Content-Type: application/json" \
  -d '{"repository": "your-org/your-repo"}'
```

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Open Commander                            │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │   Web UI    │  │  REST API   │  │  Job Queue  │              │
│  │  (Next.js)  │  │   (tRPC)    │  │  (BullMQ)   │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
│         │                │                │                      │
│         └────────────────┼────────────────┘                      │
│                          │                                       │
│                    ┌─────▼─────┐                                 │
│                    │ PostgreSQL │                                │
│                    └───────────┘                                 │
├─────────────────────────────────────────────────────────────────┤
│                     Docker-in-Docker                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │   Agent 1   │  │   Agent 2   │  │   Agent N   │              │
│  │  (Claude)   │  │   (Codex)   │  │    (...)    │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
│         │                │                │                      │
│         └────────────────┼────────────────┘                      │
│                          │                                       │
│                    ┌─────▼─────┐                                 │
│                    │Egress Proxy│───────► Internet (filtered)    │
│                    └───────────┘                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## API Documentation

Full API documentation is available at `apps/web/public/skill.md` or via the web UI.

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | List tasks |
| `POST` | `/api/tasks` | Create a new task |
| `GET` | `/api/tasks/:id` | Get task details |
| `POST` | `/api/github/verify-access` | Verify repository access |

---

## Development

### Project Structure

```
open-commander/
├── apps/
│   └── web/                 # Next.js application
│       ├── src/
│       │   ├── app/         # Next.js app router
│       │   ├── components/  # React components
│       │   ├── lib/         # Core services (docker, git)
│       │   └── server/      # tRPC routers & job workers
│       └── prisma/          # Database schema
├── docker/
│   ├── agent/               # Agent container Dockerfile
│   └── egress/              # Egress proxy configuration
└── docker-compose.yml       # Infrastructure services
```

### Running Tests

```bash
bun test
```

### Building for Production

```bash
cd apps/web
bun run build
```

---

## Security Considerations

- **Never expose the API without authentication** in production
- **Review egress allowlists** in `docker/egress/allowed-domains.txt`
- **Rotate GitHub tokens** regularly
- **Use environment-specific secrets** — don't commit `.env` files
- **Monitor agent activities** through logs and the web UI

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.
