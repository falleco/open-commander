import { createHash } from "node:crypto";
import { type NextRequest, NextResponse } from "next/server";
import type { AgentProvider, TaskStatus } from "@/generated/prisma";
import { db } from "@/server/db";
import { enqueueTaskExecution } from "@/server/jobs/queues/command.queue";

// Type for database operations until Prisma regenerates
type DbAny = typeof db & {
  apiSecret: {
    findFirst: (args: unknown) => Promise<unknown>;
    update: (args: unknown) => Promise<unknown>;
  };
  apiCallLog: {
    create: (args: unknown) => Promise<unknown>;
  };
};

/**
 * Hash a secret key using SHA-256.
 */
function hashSecretKey(key: string): string {
  return createHash("sha256").update(key).digest("hex");
}

/**
 * Extract API key from Authorization header.
 */
function extractApiKey(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return null;

  // Support "Bearer <key>" format
  if (authHeader.startsWith("Bearer ")) {
    return authHeader.slice(7);
  }

  return null;
}

/**
 * Validate API key and return associated client and user.
 */
async function validateApiKey(apiKey: string) {
  const keyHash = hashSecretKey(apiKey);
  const dbAny = db as DbAny;

  const secret = (await dbAny.apiSecret.findFirst({
    where: { keyHash },
    include: {
      client: {
        include: {
          user: {
            select: { id: true, name: true, email: true },
          },
        },
      },
    },
  })) as {
    id: string;
    client: {
      id: string;
      user: { id: string; name: string; email: string };
    };
  } | null;

  if (!secret) return null;

  // Update last used timestamp
  await dbAny.apiSecret.update({
    where: { id: secret.id },
    data: { lastUsedAt: new Date() },
  });

  return {
    secret,
    client: secret.client,
    user: secret.client.user,
  };
}

/**
 * Log API call.
 */
async function logApiCall(
  clientId: string,
  request: NextRequest,
  statusCode: number,
  startTime: number,
  errorMessage?: string,
) {
  const responseMs = Date.now() - startTime;
  const dbAny = db as DbAny;

  await dbAny.apiCallLog.create({
    data: {
      clientId,
      endpoint: "/api/tasks",
      method: request.method,
      statusCode,
      ipAddress:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip"),
      userAgent: request.headers.get("user-agent"),
      responseMs,
      errorMessage,
    },
  });
}

/**
 * GET /api/tasks - List tasks for the authenticated user.
 */
export async function GET(request: NextRequest) {
  const startTime = Date.now();
  let clientId: string | null = null;

  try {
    // Extract and validate API key
    const apiKey = extractApiKey(request);
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing or invalid Authorization header" },
        { status: 401 },
      );
    }

    const auth = await validateApiKey(apiKey);
    if (!auth) {
      return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
    }

    clientId = auth.client.id;

    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const limit = Math.min(
      parseInt(searchParams.get("limit") || "50", 10),
      100,
    );
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    // Build where clause
    const where: { userId: string; status?: TaskStatus } = {
      userId: auth.user.id,
    };

    if (status && ["todo", "doing", "done", "canceled"].includes(status)) {
      where.status = status as TaskStatus;
    }

    // Fetch tasks with executions
    type TaskWithExecutions = {
      id: string;
      body: string;
      status: TaskStatus;
      agentId: AgentProvider | null;
      repository: string | null;
      mountPoint: string | null;
      attachments: unknown;
      createdAt: Date;
      updatedAt: Date;
      executions: {
        id: string;
        status: string;
        result: string | null;
        errorMessage: string | null;
        createdAt: Date;
        finishedAt: Date | null;
      }[];
    };

    const [tasks, total] = await Promise.all([
      db.task.findMany({
        where,
        select: {
          id: true,
          body: true,
          status: true,
          agentId: true,
          repository: true,
          mountPoint: true,
          attachments: true,
          createdAt: true,
          updatedAt: true,
          executions: {
            select: {
              id: true,
              status: true,
              result: true,
              errorMessage: true,
              createdAt: true,
              finishedAt: true,
            },
            orderBy: { createdAt: "desc" },
            take: 1,
          },
        },
        orderBy: [{ status: "asc" }, { updatedAt: "desc" }],
        take: limit,
        skip: offset,
      }) as unknown as TaskWithExecutions[],
      db.task.count({ where }),
    ]);

    // Log successful call
    await logApiCall(clientId, request, 200, startTime);

    return NextResponse.json({
      tasks: tasks.map((task: TaskWithExecutions) => ({
        ...task,
        latestExecution: task.executions[0] || null,
        executions: undefined,
      })),
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + tasks.length < total,
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    // Log error
    if (clientId) {
      await logApiCall(clientId, request, 500, startTime, errorMessage);
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

/**
 * POST /api/tasks - Create a new task.
 */
export async function POST(request: NextRequest) {
  const startTime = Date.now();
  let clientId: string | null = null;

  try {
    // Extract and validate API key
    const apiKey = extractApiKey(request);
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing or invalid Authorization header" },
        { status: 401 },
      );
    }

    const auth = await validateApiKey(apiKey);
    if (!auth) {
      return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
    }

    clientId = auth.client.id;

    // Parse request body
    const body = (await request.json()) as {
      body?: unknown;
      agentId?: unknown;
      repository?: unknown;
      mountPoint?: unknown; // Deprecated: use repository instead
    };
    const { body: taskBody, agentId, repository, mountPoint } = body;

    if (!taskBody || typeof taskBody !== "string" || taskBody.trim() === "") {
      await logApiCall(clientId, request, 400, startTime, "Missing task body");
      return NextResponse.json(
        { error: "Task body is required" },
        { status: 400 },
      );
    }

    // Validate agentId if provided
    const validAgents = ["opencode", "claude", "codex", "cursor"] as const;
    const validAgentId =
      typeof agentId === "string" &&
      validAgents.includes(agentId as (typeof validAgents)[number])
        ? (agentId as (typeof validAgents)[number])
        : null;

    if (agentId && !validAgentId) {
      await logApiCall(clientId, request, 400, startTime, "Invalid agentId");
      return NextResponse.json(
        { error: `Invalid agentId. Must be one of: ${validAgents.join(", ")}` },
        { status: 400 },
      );
    }

    // Validate repository if provided (format: owner/repo)
    let validRepository: string | null = null;
    if (repository && typeof repository === "string" && repository.trim()) {
      const repoPattern = /^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/;
      if (!repoPattern.test(repository.trim())) {
        await logApiCall(
          clientId,
          request,
          400,
          startTime,
          "Invalid repository format",
        );
        return NextResponse.json(
          {
            error:
              "Invalid repository format. Use 'owner/repo' format (e.g., 'octocat/hello-world')",
          },
          { status: 400 },
        );
      }
      validRepository = repository.trim();
    }

    // Validate mountPoint if provided (deprecated, use repository instead)
    const validMountPoint =
      typeof mountPoint === "string" && mountPoint.trim() !== ""
        ? mountPoint.trim()
        : null;

    // Create task
    const task = await db.task.create({
      data: {
        body: taskBody.trim(),
        agentId: validAgentId,
        repository: validRepository,
        mountPoint: validMountPoint, // Will be set by worker if repository is used
        userId: auth.user.id,
        source: "api",
        // If agentId is provided, start as "doing" since we'll enqueue immediately
        status: validAgentId ? "doing" : "todo",
      } as Parameters<typeof db.task.create>[0]["data"],
    });

    console.log(
      `[api/tasks] Task created: taskId=${task.id}, agentId=${validAgentId}, repository=${validRepository}`,
    );

    // If agentId is provided, create execution and enqueue immediately
    let execution = null;
    if (validAgentId) {
      execution = await db.taskExecution.create({
        data: {
          taskId: task.id,
          agentId: validAgentId,
          status: "pending",
        },
      });

      console.log(
        `[api/tasks] Execution created: executionId=${execution.id}, taskId=${task.id}`,
      );

      const jobId = await enqueueTaskExecution({
        executionId: execution.id,
        taskId: task.id,
        body: task.body,
        agentId: validAgentId,
        repository: validRepository ?? undefined,
        mountPoint: validMountPoint ?? undefined,
      });

      // Update execution with jobId
      await db.taskExecution.update({
        where: { id: execution.id },
        data: { jobId },
      });

      console.log(
        `[api/tasks] Task enqueued: taskId=${task.id}, executionId=${execution.id}, jobId=${jobId}`,
      );
    }

    // Log successful call
    await logApiCall(clientId, request, 201, startTime);

    return NextResponse.json(
      {
        task,
        execution: execution
          ? { id: execution.id, status: execution.status }
          : null,
      },
      { status: 201 },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    // Log error
    if (clientId) {
      await logApiCall(clientId, request, 500, startTime, errorMessage);
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
