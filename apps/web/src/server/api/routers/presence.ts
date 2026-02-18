import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

const STALE_THRESHOLD_MS = 5 * 60 * 1000; // 5 minutes

const presenceStatusSchema = z.enum(["active", "viewing", "inactive"]);

/**
 * TRPC router for session presence tracking.
 * Tracks which users are viewing which terminal sessions.
 */
export const presenceRouter = createTRPCRouter({
  /** Upsert the caller's presence record and clean stale entries. */
  heartbeat: protectedProcedure
    .input(
      z.object({
        sessionId: z.string().min(1),
        status: presenceStatusSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const now = new Date();
      const staleThreshold = new Date(now.getTime() - STALE_THRESHOLD_MS);

      // Clean stale records, then upsert in parallel
      await Promise.all([
        ctx.db.sessionPresence.deleteMany({
          where: { lastSeen: { lt: staleThreshold } },
        }),
        ctx.db.sessionPresence.upsert({
          where: { userId: ctx.session.user.id },
          create: {
            userId: ctx.session.user.id,
            sessionId: input.sessionId,
            status: input.status,
            lastSeen: now,
          },
          update: {
            sessionId: input.sessionId,
            status: input.status,
            lastSeen: now,
          },
        }),
      ]);

      return { ok: true };
    }),

  /** List all active presences for sessions belonging to a project. */
  listByProject: protectedProcedure
    .input(z.object({ projectId: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const staleThreshold = new Date(Date.now() - STALE_THRESHOLD_MS);

      const presences = await ctx.db.sessionPresence.findMany({
        where: {
          lastSeen: { gte: staleThreshold },
          session: { projectId: input.projectId },
        },
        select: {
          userId: true,
          sessionId: true,
          status: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
              avatarImageUrl: true,
            },
          },
        },
      });

      return presences;
    }),

  /** Delete the caller's presence record (best-effort cleanup). */
  leave: protectedProcedure.mutation(async ({ ctx }) => {
    await ctx.db.sessionPresence
      .delete({ where: { userId: ctx.session.user.id } })
      .catch(() => {
        // Record may not exist — that's fine
      });

    return { ok: true };
  }),
});
