import { TRPCError } from "@trpc/server";
import { z } from "zod";
import type { AgentProvider } from "@/generated/prisma";
import { AGENT_IDS } from "@/lib/agent-preferences";
import { portProxyService } from "@/lib/docker/port-proxy.service";
import { sessionService } from "@/lib/docker/session.service";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import type { db as dbClient } from "@/server/db";
import { notifySessionChange } from "@/server/session-broadcaster";

const projectIdSchema = z.string().min(1);
const projectNameSchema = z.string().trim().min(1).max(80);
const folderSchema = z.string().trim().min(1).max(120);
const sessionNameSchema = z.string().trim().min(1).max(120);
const agentIdSchema = z.enum(AGENT_IDS as unknown as [string, ...string[]]);

/** Owner-only check. */
const ensureMyProject = async (
  db: typeof dbClient,
  id: string,
  userId: string,
) => {
  const project = await db.project.findFirst({
    where: { id, userId },
  });
  if (!project) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Project not found.",
    });
  }
  return project;
};

/** Owner OR shared project access. */
const ensureProjectAccess = async (
  db: typeof dbClient,
  id: string,
  userId: string,
) => {
  const project = await db.project.findFirst({
    where: { id, OR: [{ userId }, { shared: true }] },
  });
  if (!project) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Project not found.",
    });
  }
  return project;
};

export const projectRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.project.findMany({
      where: { OR: [{ userId: ctx.session.user.id }, { shared: true }] },
      orderBy: { createdAt: "asc" },
      include: { user: { select: { id: true, name: true } } },
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: projectNameSchema,
        folder: folderSchema,
        defaultCliId: agentIdSchema.nullable().optional(),
        shared: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.create({
        data: {
          name: input.name,
          folder: input.folder,
          shared: input.shared ?? false,
          defaultCliId: (input.defaultCliId as AgentProvider) ?? null,
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: projectIdSchema,
        name: projectNameSchema,
        defaultCliId: agentIdSchema.nullable().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ensureMyProject(ctx.db, input.id, ctx.session.user.id);
      return ctx.db.project.update({
        where: { id: input.id },
        data: {
          name: input.name,
          ...(input.defaultCliId !== undefined
            ? { defaultCliId: (input.defaultCliId as AgentProvider) ?? null }
            : {}),
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: projectIdSchema }))
    .mutation(async ({ ctx, input }) => {
      await ensureMyProject(ctx.db, input.id, ctx.session.user.id);

      // Stop ALL sessions for this project (shared projects may have other users')
      const sessions = await ctx.db.terminalSession.findMany({
        where: { projectId: input.id },
        select: { id: true },
      });
      await Promise.allSettled(
        sessions.map(async (s) => {
          await sessionService.stop(s.id).catch(() => {});
          await portProxyService.removeAll(s.id).catch(() => {});
        }),
      );
      await ctx.db.terminalSession.updateMany({
        where: { projectId: input.id },
        data: { status: "stopped", projectId: null },
      });

      await ctx.db.project.delete({ where: { id: input.id } });
      return { deleted: true };
    }),

  listSessions: protectedProcedure
    .input(z.object({ projectId: projectIdSchema }))
    .query(async ({ ctx, input }) => {
      const project = await ensureProjectAccess(
        ctx.db,
        input.projectId,
        ctx.session.user.id,
      );
      return ctx.db.terminalSession.findMany({
        where: {
          projectId: input.projectId,
          ...(project.shared ? {} : { userId: ctx.session.user.id }),
          status: { in: ["running", "pending", "starting"] },
        },
        orderBy: { createdAt: "asc" },
        include: { user: { select: { id: true, name: true } } },
      });
    }),

  createSession: protectedProcedure
    .input(
      z.object({
        projectId: projectIdSchema,
        name: sessionNameSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const project = await ensureProjectAccess(
        ctx.db,
        input.projectId,
        ctx.session.user.id,
      );
      const session = await ctx.db.terminalSession.create({
        data: {
          name: input.name,
          user: { connect: { id: ctx.session.user.id } },
          project: { connect: { id: project.id } },
          status: "pending",
        },
      });
      notifySessionChange(input.projectId);
      return session;
    }),

  forkSession: protectedProcedure
    .input(
      z.object({
        projectId: projectIdSchema,
        parentSessionId: z.string().min(1),
        name: sessionNameSchema.optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const project = await ensureProjectAccess(
        ctx.db,
        input.projectId,
        ctx.session.user.id,
      );
      const parent = await ctx.db.terminalSession.findFirst({
        where: {
          id: input.parentSessionId,
          projectId: project.id,
          ...(project.shared ? {} : { userId: ctx.session.user.id }),
        },
      });
      if (!parent) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Parent session not found.",
        });
      }
      const session = await ctx.db.terminalSession.create({
        data: {
          name: input.name ?? `${parent.name} (fork)`,
          user: { connect: { id: ctx.session.user.id } },
          project: { connect: { id: project.id } },
          parent: { connect: { id: parent.id } },
          relationType: "fork",
          status: "pending",
        },
      });
      notifySessionChange(input.projectId);
      return session;
    }),

  stackSession: protectedProcedure
    .input(
      z.object({
        projectId: projectIdSchema,
        parentSessionId: z.string().min(1),
        name: sessionNameSchema.optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const project = await ensureProjectAccess(
        ctx.db,
        input.projectId,
        ctx.session.user.id,
      );
      const parent = await ctx.db.terminalSession.findFirst({
        where: {
          id: input.parentSessionId,
          projectId: project.id,
          ...(project.shared ? {} : { userId: ctx.session.user.id }),
        },
      });
      if (!parent) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Parent session not found.",
        });
      }
      const session = await ctx.db.terminalSession.create({
        data: {
          name: input.name ?? `${parent.name} (stack)`,
          user: { connect: { id: ctx.session.user.id } },
          project: { connect: { id: project.id } },
          parent: { connect: { id: parent.id } },
          relationType: "stack",
          status: "pending",
        },
      });
      notifySessionChange(input.projectId);
      return session;
    }),

  toggleShare: protectedProcedure
    .input(z.object({ id: projectIdSchema, shared: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const project = await ensureMyProject(
        ctx.db,
        input.id,
        ctx.session.user.id,
      );

      // When unsharing, clean up non-owner sessions
      if (!input.shared) {
        const activeSessions = await ctx.db.terminalSession.findMany({
          where: {
            projectId: project.id,
            userId: { not: project.userId },
            status: { in: ["running", "pending", "starting"] },
          },
          select: { id: true },
        });
        await Promise.allSettled(
          activeSessions.map(async (s) => {
            await sessionService.stop(s.id).catch(() => {});
            await portProxyService.removeAll(s.id).catch(() => {});
          }),
        );
        await ctx.db.terminalSession.updateMany({
          where: {
            projectId: project.id,
            userId: { not: project.userId },
            status: { in: ["running", "pending", "starting"] },
          },
          data: { status: "stopped", projectId: null },
        });
      }

      const updated = await ctx.db.project.update({
        where: { id: input.id },
        data: { shared: input.shared },
      });
      notifySessionChange(input.id);
      return updated;
    }),
});
