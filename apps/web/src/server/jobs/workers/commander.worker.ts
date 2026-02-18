import { type Job, Worker } from "bullmq";
import { db } from "@/server/db";
import {
  commandQueue,
  enqueueTaskExecution,
} from "@/server/jobs/queues/command.queue";
import { commanderQueueName } from "@/server/jobs/queues/commander.queue";
import { redisConnection } from "@/server/jobs/redis";

const MAX_CONCURRENT_TASKS = 10;

/**
 * Process the commander job - enqueue pending tasks for execution.
 */
async function processCommander(job: Job): Promise<void> {
  console.log(
    `[commander.worker] Starting job: jobId=${job.id}, timestamp=${new Date().toISOString()}`,
  );

  try {
    // Get count of currently active/waiting jobs in command queue
    const [waitingCount, activeCount] = await Promise.all([
      commandQueue.getWaitingCount(),
      commandQueue.getActiveCount(),
    ]);

    const currentLoad = waitingCount + activeCount;
    console.log(
      `[commander.worker] Current queue load: waiting=${waitingCount}, active=${activeCount}, total=${currentLoad}`,
    );

    if (currentLoad >= MAX_CONCURRENT_TASKS) {
      console.log(
        `[commander.worker] Queue at capacity (${currentLoad}/${MAX_CONCURRENT_TASKS}), skipping`,
      );
      return;
    }

    const availableSlots = MAX_CONCURRENT_TASKS - currentLoad;
    console.log(`[commander.worker] Available slots: ${availableSlots}`);

    // Find tasks that are ready to execute:
    // - status is "todo"
    // - has an agentId assigned
    // - does not have a pending/running execution
    const pendingTasks = await db.task.findMany({
      where: {
        status: "todo",
        agentId: { not: null },
        executions: {
          none: {
            status: { in: ["pending", "running"] },
          },
        },
      },
      take: availableSlots,
      orderBy: { createdAt: "asc" }, // FIFO
    });

    console.log(
      `[commander.worker] Found ${pendingTasks.length} tasks ready for execution`,
    );

    if (pendingTasks.length === 0) {
      console.log("[commander.worker] No pending tasks to process");
      return;
    }

    // Get list of execution IDs already in the queue to avoid duplicates
    const waitingJobs = await commandQueue.getJobs([
      "waiting",
      "active",
      "delayed",
    ]);
    const queuedExecutionIds = new Set(
      waitingJobs.map((j) => j.data?.executionId).filter(Boolean),
    );

    console.log(
      `[commander.worker] Already queued execution IDs: ${queuedExecutionIds.size}`,
    );

    let enqueuedCount = 0;

    for (const task of pendingTasks) {
      if (!task.agentId) continue;

      // Double-check: ensure no pending/running execution exists
      const existingExecution = await db.taskExecution.findFirst({
        where: {
          taskId: task.id,
          status: { in: ["pending", "running"] },
        },
      });

      if (existingExecution) {
        // Check if it's already in the queue
        if (queuedExecutionIds.has(existingExecution.id)) {
          console.log(
            `[commander.worker] Task ${task.id} already has execution ${existingExecution.id} in queue, skipping`,
          );
          continue;
        }

        // Execution exists but not in queue - re-enqueue it
        console.log(
          `[commander.worker] Re-enqueueing existing execution ${existingExecution.id} for task ${task.id}`,
        );

        const jobId = await enqueueTaskExecution({
          executionId: existingExecution.id,
          taskId: task.id,
          body: task.body,
          agentId: task.agentId,
          userId: task.userId,
          mountPoint: task.mountPoint ?? undefined,
        });

        await db.taskExecution.update({
          where: { id: existingExecution.id },
          data: { jobId },
        });

        enqueuedCount++;
        continue;
      }

      // Create new execution record
      console.log(`[commander.worker] Creating execution for task ${task.id}`);

      const execution = await db.taskExecution.create({
        data: {
          taskId: task.id,
          agentId: task.agentId,
          status: "pending",
        },
      });

      // Update task status to doing
      await db.task.update({
        where: { id: task.id },
        data: { status: "doing" },
      });

      // Enqueue the execution
      const jobId = await enqueueTaskExecution({
        executionId: execution.id,
        taskId: task.id,
        body: task.body,
        agentId: task.agentId,
        userId: task.userId,
        mountPoint: task.mountPoint ?? undefined,
      });

      // Update execution with jobId
      await db.taskExecution.update({
        where: { id: execution.id },
        data: { jobId },
      });

      console.log(
        `[commander.worker] Enqueued task ${task.id} with execution ${execution.id}, jobId=${jobId}`,
      );

      enqueuedCount++;
    }

    console.log(
      `[commander.worker] Job completed: enqueued ${enqueuedCount} tasks`,
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error(`[commander.worker] Job failed: ${errorMessage}`);
    throw error;
  }
}

const commanderWorker = new Worker(commanderQueueName, processCommander, {
  connection: redisConnection,
  concurrency: 1, // Only one commander job at a time
  removeOnComplete: { count: 100 },
  removeOnFail: { count: 100 },
});

commanderWorker.on("error", (err) => {
  console.error("[commander.worker] Worker error:", err);
});

commanderWorker.on("failed", (job, error) => {
  console.error(
    `[commander.worker] Job failed: jobId=${job?.id}, error=${error.message}`,
  );
});

commanderWorker.on("completed", (job) => {
  console.log(`[commander.worker] Job completed: jobId=${job.id}`);
});

export default commanderWorker;
