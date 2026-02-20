import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import { createServer } from "node:net";
import path from "node:path";
import { promisify } from "node:util";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "@/env";
import { dockerService } from "@/lib/docker/docker.service";
import { portProxyService } from "@/lib/docker/port-proxy.service";
import { sessionService } from "@/lib/docker/session.service";
import { sessionContainerNames } from "@/lib/utils";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { notifySessionChange } from "@/server/session-broadcaster";

const execAsync = promisify(execFile);

const sessionIdSchema = z.string().min(1);
const sessionNameSchema = z.string().trim().min(1).max(120);
const portSchema = z.coerce.number().int().min(1).max(65535);
const workspaceSuffixSchema = z.string().trim().max(120).optional();
const workspaceRoot = env.AGENT_WORKSPACE
  ? path.resolve(env.AGENT_WORKSPACE)
  : null;

/**
 * Checks if a host port is available for binding.
 */
const isPortAvailable = async (port: number) =>
  new Promise<boolean>((resolve) => {
    const server = createServer();
    server.unref();
    server.once("error", () => resolve(false));
    server.listen(port, "0.0.0.0", () => {
      server.close(() => resolve(true));
    });
  });

const ensureMySession = async (id: string, userId: string) => {
  const count = await db.terminalSession.count({
    where: { id, userId },
  });
  if (count === 0) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Session not found or not owned by the user.",
    });
  }
};

/** Allows access if the session is owned by the user OR belongs to a shared project. */
const ensureSessionAccess = async (id: string, userId: string) => {
  const session = await db.terminalSession.findFirst({
    where: {
      id,
      OR: [{ userId }, { project: { shared: true } }],
    },
  });
  if (!session) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Session not found or not owned by the user.",
    });
  }
  return session;
};

export const terminalRouter = createTRPCRouter({
  listSessions: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.terminalSession.findMany({
      where: {
        userId: ctx.session.user.id,
        status: { in: ["running", "pending", "starting"] },
      },
      orderBy: { createdAt: "asc" },
    });
  }),

  sessionStats: protectedProcedure.query(async ({ ctx }) => {
    const [activeSessions, totalSessions] = await Promise.all([
      ctx.db.terminalSession.count({
        where: {
          status: { in: ["running", "pending", "starting"] },
          userId: ctx.session.user.id,
        },
      }),
      ctx.db.terminalSession.count({
        where: { userId: ctx.session.user.id },
      }),
    ]);

    return { activeSessions, totalSessions };
  }),

  egressStatus: protectedProcedure.query(async () => {
    const running =
      (await dockerService.isRunning(env.EGRESS_PROXY_CONTAINER_NAME)) === true;
    return {
      containers: [{ name: env.EGRESS_PROXY_CONTAINER_NAME, running }],
    };
  }),

  ingressStatus: protectedProcedure.query(async ({ ctx }) => {
    const sessions = await ctx.db.terminalSession.findMany({
      where: {
        userId: ctx.session.user.id,
        status: { in: ["running", "starting", "pending"] },
      },
      orderBy: { createdAt: "desc" },
    });
    const entries = await Promise.all(
      sessions.map(async (s) => {
        const { agentContainer, ingressContainer } = sessionContainerNames(
          s.id,
        );
        const [sessionRunning, ingressRunning] = await Promise.all([
          dockerService.isRunning(agentContainer),
          dockerService.isRunning(ingressContainer),
        ]);
        return {
          sessionId: s.id,
          sessionName: s.name,
          status: s.status,
          sessionContainer: {
            name: agentContainer,
            running: sessionRunning === true,
          },
          ingressContainer: {
            name: ingressContainer,
            running: ingressRunning === true,
          },
        };
      }),
    );
    return { sessions: entries };
  }),
  workspaceOptions: protectedProcedure.query(async () => {
    if (!workspaceRoot) {
      return {
        enabled: false,
        options: [] as Array<{ label: string; value: string }>,
      };
    }
    try {
      const stat = await fs.stat(workspaceRoot);
      if (!stat.isDirectory()) {
        return {
          enabled: false,
          options: [] as Array<{ label: string; value: string }>,
        };
      }
      const entries = await fs.readdir(workspaceRoot, { withFileTypes: true });
      const folders = entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .filter((name) => !name.startsWith("."))
        .sort((a, b) => a.localeCompare(b));
      const options = [
        { label: "Workspace root", value: "" },
        ...folders.map((name) => ({ label: name, value: name })),
      ];
      return { enabled: true, options };
    } catch {
      return {
        enabled: true,
        options: [{ label: "Workspace root", value: "" }],
      };
    }
  }),

  listBranches: protectedProcedure
    .input(z.object({ workspaceSuffix: workspaceSuffixSchema }))
    .query(async ({ input }) => {
      if (!workspaceRoot) {
        return {
          isGitRepo: false,
          branches: [] as string[],
          current: null as string | null,
        };
      }
      const trimmed = (input.workspaceSuffix ?? "").trim();
      const dir = trimmed
        ? path.resolve(workspaceRoot, trimmed)
        : workspaceRoot;
      try {
        const gitDir = path.join(dir, ".git");
        const stat = await fs.stat(gitDir);
        if (!stat.isDirectory()) {
          return {
            isGitRepo: false,
            branches: [] as string[],
            current: null as string | null,
          };
        }
      } catch {
        return {
          isGitRepo: false,
          branches: [] as string[],
          current: null as string | null,
        };
      }
      try {
        const { stdout } = await execAsync(
          "git",
          ["branch", "-a", "--no-color"],
          {
            cwd: dir,
            timeout: 5000,
          },
        );
        const lines = stdout.split("\n").filter(Boolean);
        let current: string | null = null;
        const branches: string[] = [];
        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.includes("->")) continue;
          const isCurrent = trimmedLine.startsWith("* ");
          const name = isCurrent ? trimmedLine.slice(2).trim() : trimmedLine;
          if (!name) continue;
          branches.push(name);
          if (isCurrent) current = name;
        }
        return { isGitRepo: true, branches, current };
      } catch {
        return {
          isGitRepo: false,
          branches: [] as string[],
          current: null as string | null,
        };
      }
    }),

  createSession: protectedProcedure
    .input(
      z.object({
        name: sessionNameSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.terminalSession.create({
        data: {
          name: input.name ?? "New session",
          user: { connect: { id: ctx.session.user.id } },
          status: "pending",
        },
      });
    }),
  updateSessionName: protectedProcedure
    .input(
      z.object({
        id: sessionIdSchema,
        name: sessionNameSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ensureMySession(input.id, ctx.session.user.id);
      const updated = await ctx.db.terminalSession.update({
        where: { id: input.id, userId: ctx.session.user.id },
        data: { name: input.name },
      });
      if (updated.projectId) notifySessionChange(updated.projectId);
      return updated;
    }),
  startSession: protectedProcedure
    .input(
      z.object({
        sessionId: sessionIdSchema,
        reset: z.boolean().optional(),
        workspaceSuffix: workspaceSuffixSchema,
        gitBranch: z.string().trim().max(250).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const session = await ensureSessionAccess(
        input.sessionId,
        ctx.session.user.id,
      );

      return sessionService.start(session.userId, input.sessionId, {
        reset: input.reset,
        workspaceSuffix: input.workspaceSuffix,
        gitBranch: input.gitBranch,
      });
    }),
  removeSession: protectedProcedure
    .input(
      z.object({
        id: sessionIdSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ensureMySession(input.id, ctx.session.user.id);
      const sessionInfo = await ctx.db.terminalSession.findUnique({
        where: { id: input.id },
        select: { projectId: true },
      });

      // Collect all descendant sessions recursively
      const descendants: string[] = [];
      const collectDescendants = async (parentId: string) => {
        const children = await ctx.db.terminalSession.findMany({
          where: { parentId, userId: ctx.session.user.id },
          select: { id: true },
        });
        for (const child of children) {
          descendants.push(child.id);
          await collectDescendants(child.id);
        }
      };
      await collectDescendants(input.id);

      // Stop and clean up all descendants
      await Promise.allSettled(
        descendants.map(async (id) => {
          await sessionService.stop(id).catch(() => {});
          await portProxyService.removeAll(id).catch(() => {});
        }),
      );
      if (descendants.length > 0) {
        await ctx.db.terminalSession.updateMany({
          where: { id: { in: descendants }, userId: ctx.session.user.id },
          data: { status: "stopped" },
        });
      }

      // Stop and clean up the target session
      const stopResult = await sessionService.stop(input.id);
      await ctx.db.terminalSession.update({
        where: { id: input.id, userId: ctx.session.user.id },
        data: { status: "stopped" },
      });
      await portProxyService.removeAll(input.id);
      if (sessionInfo?.projectId) notifySessionChange(sessionInfo.projectId);
      return stopResult;
    }),

  listPortMappings: protectedProcedure
    .input(z.object({ sessionId: sessionIdSchema }))
    .query(async ({ ctx, input }) => {
      await ensureSessionAccess(input.sessionId, ctx.session.user.id);
      const mappings = await portProxyService.list(input.sessionId);
      return { mappings };
    }),
  addPortMapping: protectedProcedure
    .input(
      z.object({
        sessionId: sessionIdSchema,
        hostPort: portSchema,
        containerPort: portSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ensureSessionAccess(input.sessionId, ctx.session.user.id);
      const available = await isPortAvailable(input.hostPort);
      if (!available) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Host port ${input.hostPort} is already in use.`,
        });
      }
      const { agentContainer } = sessionContainerNames(input.sessionId);
      const running = await dockerService.isRunning(agentContainer);
      if (!running) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Session container is not running.",
        });
      }
      return portProxyService.add(
        input.sessionId,
        agentContainer,
        input.hostPort,
        input.containerPort,
      );
    }),
  removePortMapping: protectedProcedure
    .input(
      z.object({
        sessionId: sessionIdSchema,
        hostPort: portSchema,
        containerPort: portSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ensureSessionAccess(input.sessionId, ctx.session.user.id);
      return portProxyService.remove(
        input.sessionId,
        input.hostPort,
        input.containerPort,
      );
    }),
  portMappingSummary: protectedProcedure.query(async ({ ctx }) => {
    const summaries = await portProxyService.listAll();
    const userSessions = await ctx.db.terminalSession.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      select: {
        id: true,
      },
    });
    const allowed = new Set(userSessions.map((session) => session.id));
    const sessionIds = Array.from(
      new Set(
        summaries
          .map((summary) => summary.sessionId)
          .filter((sessionId) => allowed.has(sessionId)),
      ),
    );
    return { sessionIds };
  }),
});
