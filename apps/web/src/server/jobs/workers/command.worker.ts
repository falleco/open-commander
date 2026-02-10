import { type Job, Worker } from "bullmq";
import { taskExecutionService } from "@/lib/docker/task-execution.service";
import { gitService } from "@/lib/git/git.service";
import { db } from "@/server/db";
import {
  type CommandQueueParams,
  commandQueueName,
} from "@/server/jobs/queues/command.queue";
import { redisConnection } from "@/server/jobs/redis";

/**
 * Process a command job (task execution).
 */
async function processCommandJob(job: Job<CommandQueueParams>): Promise<void> {
  const { executionId, taskId, body, agentId, repository, mountPoint } =
    job.data;

  job.log(
    `[command.worker] Starting job: jobId=${job.id}, executionId=${executionId}, taskId=${taskId}`,
  );
  job.log(
    `[command.worker] Job details: agentId=${agentId}, repository=${repository ?? "none"}, mountPoint=${mountPoint ?? "none"}`,
  );

  // Update job progress
  await job.updateProgress(10);

  try {
    // Update execution status to running
    job.log(
      `[command.worker] Updating execution status to running: executionId=${executionId}`,
    );
    await db.taskExecution.update({
      where: { id: executionId },
      data: {
        status: "running",
        startedAt: new Date(),
      },
    });

    await job.updateProgress(15);

    // If repository is provided, clone it first
    let effectiveMountPoint = mountPoint;
    if (repository) {
      job.log(`[command.worker] Cloning repository: ${repository}`);

      if (!gitService.isWorkspaceConfigured()) {
        throw new Error(
          "AGENT_WORKSPACE is not configured. Cannot clone repository.",
        );
      }

      const repoPath = await gitService.cloneOrPull(repository);
      effectiveMountPoint = repoPath;
      job.log(`[command.worker] Repository cloned to: ${repoPath}`);

      // Update task with the mount point
      await db.task.update({
        where: { id: taskId },
        data: { mountPoint: repoPath },
      });
    }

    await job.updateProgress(25);

    // Start the container
    job.log(
      `[command.worker] Starting container for execution: executionId=${executionId}`,
    );
    const { containerName } = await taskExecutionService.execute(executionId, {
      taskId,
      body,
      agentId,
      mountPoint: effectiveMountPoint,
    });

    job.log(
      `[command.worker] Container started: containerName=${containerName}, executionId=${executionId}`,
    );

    await job.updateProgress(30);

    // Wait for completion
    job.log(
      `[command.worker] Waiting for container completion: executionId=${executionId}`,
    );
    const result = await taskExecutionService.waitForCompletion(executionId);

    job.log(
      `[command.worker] Container completed: executionId=${executionId}, completed=${result.completed}, needsInput=${result.needsInput}`,
    );

    await job.updateProgress(80);

    // Get logs
    job.log(
      `[command.worker] Fetching container logs: executionId=${executionId}`,
    );
    const logs = await taskExecutionService.getLogs(executionId);

    // Cleanup container
    job.log(
      `[command.worker] Cleaning up container: executionId=${executionId}`,
    );
    await taskExecutionService.stop(executionId);

    await job.updateProgress(90);

    // Update execution record
    const finalStatus = result.completed
      ? "completed"
      : result.needsInput
        ? "needs_input"
        : "failed";

    job.log(
      `[command.worker] Updating execution record: executionId=${executionId}, status=${finalStatus}`,
    );

    await db.taskExecution.update({
      where: { id: executionId },
      data: {
        status: finalStatus,
        completed: result.completed,
        needsInput: result.needsInput,
        inputRequest: result.inputRequest || null,
        result: result.result || null,
        errorMessage: result.errorMessage || null,
        logs,
        finishedAt: new Date(),
        containerName,
      },
    });

    // Update task status
    if (result.completed) {
      job.log(`[command.worker] Marking task as done: taskId=${taskId}`);
      await db.task.update({
        where: { id: taskId },
        data: { status: "done" },
      });
    } else if (result.needsInput) {
      job.log(
        `[command.worker] Task needs input, resetting to todo: taskId=${taskId}`,
      );
      await db.task.update({
        where: { id: taskId },
        data: { status: "todo" },
      });
    }

    await job.updateProgress(100);

    job.log(
      `[command.worker] Job completed successfully: jobId=${job.id}, executionId=${executionId}`,
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error(
      `[command.worker] Job failed: jobId=${job.id}, executionId=${executionId}, error=${errorMessage}`,
    );

    // Update execution as failed
    await db.taskExecution.update({
      where: { id: executionId },
      data: {
        status: "failed",
        completed: false,
        errorMessage,
        finishedAt: new Date(),
      },
    });

    // Reset task status to todo
    await db.task.update({
      where: { id: taskId },
      data: { status: "todo" },
    });

    throw error;
  }
}

const commandWorker = new Worker<CommandQueueParams>(
  commandQueueName,
  processCommandJob,
  {
    connection: redisConnection,
    concurrency: 10, // Max 10 concurrent task executions
    removeOnComplete: { count: 1000 },
    removeOnFail: { count: 5000 },
  },
);

commandWorker.on("error", (err) => {
  console.error("[command.worker] Worker error:", err);
});

commandWorker.on("failed", (job, error) => {
  console.error(
    `[command.worker] Job failed: jobId=${job?.id}, error=${error.message}`,
  );
});

commandWorker.on("completed", (job) => {
  console.log(
    `[command.worker] Job completed: jobId=${job.id}, executionId=${job.data.executionId}`,
  );
});

commandWorker.on("active", (job) => {
  console.log(
    `[command.worker] Job active: jobId=${job.id}, executionId=${job.data.executionId}`,
  );
});

commandWorker.on("stalled", (jobId) => {
  console.warn(`[command.worker] Job stalled: jobId=${jobId}`);
});

export default commandWorker;
