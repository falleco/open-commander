import { Queue } from "bullmq";
import type { AgentProvider } from "@/generated/prisma";
import { redisConnection } from "@/server/jobs/redis";

export const commandQueueName = "command";

/**
 * Parameters for command queue job.
 */
export interface CommandQueueParams {
  executionId: string;
  taskId: string;
  body: string;
  agentId: AgentProvider;
  userId: string;
  repository?: string; // GitHub repository in owner/repo format
  mountPoint?: string; // Deprecated: use repository instead
}

export const commandQueue = new Queue<CommandQueueParams>(commandQueueName, {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 1, // Tasks should not be retried automatically
    removeOnComplete: {
      age: 86400, // Keep completed jobs for 24 hours
      count: 1000,
    },
    removeOnFail: {
      age: 604800, // Keep failed jobs for 7 days
      count: 5000,
    },
  },
});

commandQueue.on("error", (err) => {
  console.error("[command.queue] Queue error:", err);
});

/**
 * Add a task execution job to the command queue.
 */
export async function enqueueTaskExecution(
  params: CommandQueueParams,
): Promise<string> {
  console.log(
    `[command.queue] Enqueueing task execution: executionId=${params.executionId}, taskId=${params.taskId}, agentId=${params.agentId}`,
  );

  const job = await commandQueue.add(`task-${params.taskId}`, params, {
    jobId: params.executionId, // Use executionId as jobId for easy tracking
  });

  console.log(
    `[command.queue] Job enqueued successfully: jobId=${job.id}, executionId=${params.executionId}`,
  );

  return job.id ?? params.executionId;
}
