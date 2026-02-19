# Docker Image Modularization Proposal

## Context

Current state:

- `/docker/core/Dockerfile` is a single large polyglot image (many languages + multiple versions each).
- `/docker/agent/Dockerfile` extends `opencommander/core:latest` and adds all agent CLIs/tools.
- Interactive sessions and task execution both currently use one image via `TTYD_IMAGE`.

Relevant usage points:

- `/apps/web/src/env.ts` (`TTYD_IMAGE` default)
- `/apps/web/src/lib/docker/session.service.ts`
- `/apps/web/src/lib/docker/task-execution.service.ts`

## Goals

1. Reduce image size pulled for common task execution.
2. Keep flexibility for power-user interactive sessions.
3. Avoid breaking current behavior during migration.
4. Improve cache reuse and CI build/push performance.

## Target Architecture

Use layered images with clear responsibilities:

1. `core-base`: common Linux tooling only.
2. `core-devkits`: optional capability layers (stack-focused).
3. `agent-provider`: final images per provider and mode (`task` vs `session`).

### Proposed catalog

- `opencommander/core-base`
  - shell + git + jq + tmux + ttyd + docker-cli + essential utils
- `opencommander/core-nodepy`
  - `core-base` + Node + Python (limited versions)
- `opencommander/core-polyglot`
  - richer/full tooling (similar to current all-in-one)
- `opencommander/agent-claude-task`
  - `core-nodepy` + Claude CLI
- `opencommander/agent-codex-task`
  - `core-nodepy` + Codex CLI
- `opencommander/agent-opencode-task`
  - `core-nodepy` + OpenCode CLI
- `opencommander/agent-cursor-task`
  - `core-nodepy` + Cursor CLI
- `opencommander/agent-session-full`
  - `core-polyglot` + full interactive tooling

## Runtime Selection Contract

Keep backward compatibility with `TTYD_IMAGE` and add task-specific image env vars:

```env
# Interactive session image
TTYD_IMAGE=opencommander/agent-session-full:latest

# Task execution image routing
TASK_IMAGE_DEFAULT=opencommander/agent-codex-task:latest
TASK_IMAGE_CLAUDE=opencommander/agent-claude-task:latest
TASK_IMAGE_CODEX=opencommander/agent-codex-task:latest
TASK_IMAGE_OPENCODE=opencommander/agent-opencode-task:latest
TASK_IMAGE_CURSOR=opencommander/agent-cursor-task:latest
```

Resolution rule:

1. For interactive session: always use `TTYD_IMAGE`.
2. For task execution:
   - Use `TASK_IMAGE_<AGENT_PROVIDER>` if present.
   - Else use `TASK_IMAGE_DEFAULT` if present.
   - Else fallback to `TTYD_IMAGE`.

## Build/Release Strategy

1. Use multi-target Dockerfiles and publish multiple tags.
2. Build with `docker buildx bake` (or equivalent matrix strategy).
3. Push immutable tags (commit SHA) + moving aliases (`latest`).
4. Use remote layer cache (`cache-from/cache-to`) to reduce CI time.

## Migration Plan

### Phase 1 (Low risk, high impact)

Split usage path only:

- Session keeps full image.
- Task execution switches to a smaller default image.

No provider-specific split yet.

### Phase 2

Introduce provider-specific task images (`TASK_IMAGE_*`).

### Phase 3

Refactor `core` into `core-base` + stack devkits (nodepy/jvm/systems/mobile).

### Phase 4

Optimize and harden:

- Remove rare/heavy toolchains from default task paths.
- Keep optional full/fallback image for compatibility.

## Expected Benefits

1. Faster task startup and pull times.
2. Lower registry storage and network egress.
3. Smaller attack surface in task containers.
4. Better cache locality (changes in one provider do not invalidate all images).

## Risks and Mitigations

1. **Feature mismatch between images**
   - Mitigate with explicit image capability matrix and fallback chain.
2. **Operational complexity (more images/tags)**
   - Mitigate with standard naming, automated build matrix, and tagging policy.
3. **Unexpected user workflows requiring full toolchain**
   - Mitigate with `agent-session-full` and fallback to `TTYD_IMAGE`.

## Decision Checklist

Before implementation, confirm:

1. Minimum toolchains needed for task mode.
2. Whether any provider must always run on full image.
3. Image retention/tagging policy in registry.
4. CI budget constraints for multi-image builds.

