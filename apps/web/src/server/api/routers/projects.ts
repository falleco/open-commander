import { TRPCError } from "@trpc/server";
import { z } from "zod";
import type { AgentProvider } from "@/generated/prisma";
import { AGENT_IDS } from "@/lib/agent-preferences";
import { portProxyService } from "@/lib/docker/port-proxy.service";
import { sessionService } from "@/lib/docker/session.service";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import type { db as dbClient } from "@/server/db";

const projectIdSchema = z.string().min(1);
const projectNameSchema = z.string().trim().min(1).max(80);
const folderSchema = z.string().trim().min(1).max(120);
const sessionNameSchema = z.string().trim().min(1).max(120);
const agentIdSchema = z.enum(AGENT_IDS as unknown as [string, ...string[]]);

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

export const projectRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.project.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { createdAt: "asc" },
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: projectNameSchema,
        folder: folderSchema,
        defaultCliId: agentIdSchema.nullable().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.create({
        data: {
          name: input.name,
          folder: input.folder,
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

      // Stop and remove every session belonging to this project
      const sessions = await ctx.db.terminalSession.findMany({
        where: { projectId: input.id, userId: ctx.session.user.id },
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
      await ensureMyProject(ctx.db, input.projectId, ctx.session.user.id);
      return ctx.db.terminalSession.findMany({
        where: {
          projectId: input.projectId,
          userId: ctx.session.user.id,
          status: { in: ["running", "pending", "starting"] },
        },
        orderBy: { createdAt: "asc" },
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
      const project = await ensureMyProject(
        ctx.db,
        input.projectId,
        ctx.session.user.id,
      );
      return ctx.db.terminalSession.create({
        data: {
          name: input.name,
          user: { connect: { id: ctx.session.user.id } },
          project: { connect: { id: project.id } },
          status: "pending",
        },
      });
    }),
});
