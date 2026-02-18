import { TRPCError } from "@trpc/server";
import { z } from "zod";
import type { AgentProvider } from "@/generated/prisma";
import { AGENT_IDS, type AgentId } from "@/lib/agent-preferences";
import { taskExecutionService } from "@/lib/docker/task-execution.service";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { enqueueTaskExecution } from "@/server/jobs/queues/command.queue";

const taskStatusSchema = z.enum(["todo", "doing", "done", "canceled"]);
const taskSourceSchema = z.enum(["web", "api"]);
const agentIdSchema = z.enum(AGENT_IDS as unknown as [string, ...string[]]);

const attachmentSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  type: z.string(),
  size: z.number(),
});

export type TaskAttachment = z.infer<typeof attachmentSchema>;

const createTaskSchema = z.object({
  body: z.string().min(1),
  agentId: agentIdSchema.nullable().optional(),
  mountPoint: z.string().optional(), // Relative path within workspace
  attachments: z.array(attachmentSchema).optional(),
});

const updateTaskSchema = z.object({
  id: z.string(),
  body: z.string().min(1).optional(),
  status: taskStatusSchema.optional(),
  agentId: agentIdSchema.nullable().optional(),
  mountPoint: z.string().nullable().optional(), // Relative path within workspace
  attachments: z.array(attachmentSchema).optional(),
});

export const tasksRouter = createTRPCRouter({
  /**
   * List all tasks for the current user
   */
  list: protectedProcedure
    .input(
      z
        .object({
          status: taskStatusSchema.optional(),
          source: taskSourceSchema.optional(),
          includeApiTasks: z.boolean().optional().default(false),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      // Build source filter: by default exclude API tasks unless explicitly included
      let sourceFilter: { source?: "web" | "api" } = {};
      if (input?.source) {
        // Explicit source filter
        sourceFilter = { source: input.source };
      } else if (!input?.includeApiTasks) {
        // Default: only show web tasks
        sourceFilter = { source: "web" };
      }

      const where = {
        userId,
        ...(input?.status ? { status: input.status } : {}),
        ...sourceFilter,
      };

      const tasks = await ctx.db.task.findMany({
        where,
        orderBy: [{ status: "asc" }, { updatedAt: "desc" }],
      });

      return tasks.map((task) => ({
        ...task,
        agentId: task.agentId as AgentId | null,
        mountPoint: (task as { mountPoint?: string | null }).mountPoint ?? null,
        attachments: (task.attachments ?? []) as TaskAttachment[],
      }));
    }),

  /**
   * Get a single task by ID
   */
  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const task = await ctx.db.task.findFirst({
        where: { id: input.id, userId },
      });

      if (!task) {
        return null;
      }

      return {
        ...task,
        agentId: task.agentId as AgentId | null,
        mountPoint: (task as { mountPoint?: string | null }).mountPoint ?? null,
        attachments: (task.attachments ?? []) as TaskAttachment[],
      };
    }),

  /**
   * Create a new task
   */
  create: protectedProcedure
    .input(createTaskSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const task = await ctx.db.task.create({
        data: {
          body: input.body,
          agentId: (input.agentId as AgentProvider) ?? null,
          mountPoint: input.mountPoint ?? null,
          attachments: input.attachments ?? [],
          userId,
        } as Parameters<typeof ctx.db.task.create>[0]["data"],
      });

      return {
        ...task,
        agentId: task.agentId as AgentId | null,
        mountPoint: (task as { mountPoint?: string | null }).mountPoint ?? null,
        attachments: (task.attachments ?? []) as TaskAttachment[],
      };
    }),

  /**
   * Update an existing task
   */
  update: protectedProcedure
    .input(updateTaskSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const { id, ...data } = input;

      // Verify ownership
      const existing = await ctx.db.task.findFirst({
        where: { id, userId },
      });

      if (!existing) {
        throw new Error("Task not found");
      }

      const task = await ctx.db.task.update({
        where: { id },
        data: {
          ...(data.body !== undefined ? { body: data.body } : {}),
          ...(data.status !== undefined ? { status: data.status } : {}),
          ...(data.agentId !== undefined
            ? { agentId: (data.agentId as AgentProvider) ?? null }
            : {}),
          ...(data.mountPoint !== undefined
            ? { mountPoint: data.mountPoint ?? null }
            : {}),
          ...(data.attachments !== undefined
            ? { attachments: data.attachments }
            : {}),
        } as Parameters<typeof ctx.db.task.update>[0]["data"],
      });

      return {
        ...task,
        agentId: task.agentId as AgentId | null,
        mountPoint: (task as { mountPoint?: string | null }).mountPoint ?? null,
        attachments: (task.attachments ?? []) as TaskAttachment[],
      };
    }),

  /**
   * Delete a task
   */
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      // Verify ownership
      const existing = await ctx.db.task.findFirst({
        where: { id: input.id, userId },
      });

      if (!existing) {
        throw new Error("Task not found");
      }

      await ctx.db.task.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  /**
   * Update task status (quick action)
   */
  updateStatus: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        status: taskStatusSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      // Verify ownership
      const existing = await ctx.db.task.findFirst({
        where: { id: input.id, userId },
      });

      if (!existing) {
        throw new Error("Task not found");
      }

      const task = await ctx.db.task.update({
        where: { id: input.id },
        data: { status: input.status },
      });

      return {
        ...task,
        agentId: task.agentId as AgentId | null,
        mountPoint: (task as { mountPoint?: string | null }).mountPoint ?? null,
        attachments: (task.attachments ?? []) as TaskAttachment[],
      };
    }),

  /**
   * Run a task with an agent
   */
  run: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      // Get task
      const task = await ctx.db.task.findFirst({
        where: { id: input.id, userId },
      });

      if (!task) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Task not found",
        });
      }

      if (!task.agentId) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Task has no agent assigned",
        });
      }

      // Check if there's already a running execution
      const runningExecution = await ctx.db.taskExecution.findFirst({
        where: {
          taskId: task.id,
          status: { in: ["pending", "running"] },
        },
      });

      if (runningExecution) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Task is already running",
        });
      }

      // Create execution record
      const execution = await ctx.db.taskExecution.create({
        data: {
          taskId: task.id,
          agentId: task.agentId,
          status: "pending",
        },
      });

      console.log(
        `[tasks.run] Created execution record: executionId=${execution.id}, taskId=${task.id}`,
      );

      // Update task status to doing
      await ctx.db.task.update({
        where: { id: task.id },
        data: { status: "doing" },
      });

      // Enqueue task execution job
      const jobId = await enqueueTaskExecution({
        executionId: execution.id,
        taskId: task.id,
        body: task.body ?? "",
        agentId: task.agentId,
        userId,
        mountPoint:
          (task as { mountPoint?: string | null }).mountPoint ?? undefined,
      });

      console.log(
        `[tasks.run] Task enqueued: executionId=${execution.id}, jobId=${jobId}`,
      );

      // Update execution with jobId
      await ctx.db.taskExecution.update({
        where: { id: execution.id },
        data: { jobId },
      });

      return {
        executionId: execution.id,
        jobId,
        status: "queued",
      };
    }),

  /**
   * Get task executions
   */
  getExecutions: protectedProcedure
    .input(z.object({ taskId: z.string() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      // Verify task ownership
      const task = await ctx.db.task.findFirst({
        where: { id: input.taskId, userId },
      });

      if (!task) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Task not found",
        });
      }

      const executions = await ctx.db.taskExecution.findMany({
        where: { taskId: input.taskId },
        orderBy: { createdAt: "desc" },
      });

      return executions;
    }),

  /**
   * Get execution details
   */
  getExecution: protectedProcedure
    .input(z.object({ executionId: z.string() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const execution = await ctx.db.taskExecution.findFirst({
        where: { id: input.executionId },
        include: { task: true },
      });

      if (!execution || execution.task.userId !== userId) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Execution not found",
        });
      }

      return execution;
    }),

  /**
   * Get execution logs (live)
   */
  getExecutionLogs: protectedProcedure
    .input(z.object({ executionId: z.string() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const execution = await ctx.db.taskExecution.findFirst({
        where: { id: input.executionId },
        include: { task: true },
      });

      if (!execution || execution.task.userId !== userId) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Execution not found",
        });
      }

      // If still running, get live logs
      if (execution.status === "running") {
        const logs = await taskExecutionService.getLogs(execution.id);
        return { logs, isLive: true };
      }

      // Return stored logs
      return { logs: execution.logs ?? "", isLive: false };
    }),

  /**
   * Stop a running execution
   */
  stopExecution: protectedProcedure
    .input(z.object({ executionId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const execution = await ctx.db.taskExecution.findFirst({
        where: { id: input.executionId },
        include: { task: true },
      });

      if (!execution || execution.task.userId !== userId) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Execution not found",
        });
      }

      if (execution.status !== "running") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Execution is not running",
        });
      }

      // Stop the container
      await taskExecutionService.stop(execution.id);

      // Update execution record
      await ctx.db.taskExecution.update({
        where: { id: execution.id },
        data: {
          status: "failed",
          errorMessage: "Stopped by user",
          finishedAt: new Date(),
        },
      });

      // Reset task status
      await ctx.db.task.update({
        where: { id: execution.taskId },
        data: { status: "todo" },
      });

      return { success: true };
    }),
});
