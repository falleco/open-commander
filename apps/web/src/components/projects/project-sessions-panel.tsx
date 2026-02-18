"use client";

import {
  AlertTriangle,
  GitFork,
  Layers,
  Loader2,
  MoreVertical,
  Pencil,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { modKey, useShortcuts } from "@/components/shortcuts/shortcuts-context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { env } from "@/env";
import { randomSessionName } from "@/lib/random-session-name";
import { buildSessionTree } from "@/lib/session-tree";
import { api } from "@/trpc/react";
import { BranchSelectorModal } from "./branch-selector-modal";
import { ConfirmDeleteProjectModal } from "./confirm-delete-project-modal";
import { ConfirmRemoveSessionModal } from "./confirm-remove-session-modal";
import { useProject } from "./project-context";
import { SessionPresenceAvatars } from "./session-presence-avatars";

type PendingSessionAction =
  | { type: "create" }
  | { type: "fork"; parentSessionId: string }
  | { type: "stack"; parentSessionId: string };

type MenuState = {
  id: string;
  x: number;
  y: number;
} | null;

/**
 * Secondary sidebar panel listing sessions for the selected project.
 * Desktop only — mobile uses the inline accordion in AppSidebar.
 */
export function ProjectSessionsPanel() {
  const {
    selectedProjectId,
    selectedSessionId,
    setSelectedSessionId,
    setSelectedProjectId,
    isPanelOpen,
    markSessionCreated,
    setSessionGitBranch,
  } = useProject();
  const utils = api.useUtils();

  const projectQuery = api.project.list.useQuery(undefined, {
    enabled: isPanelOpen,
  });
  const project = projectQuery.data?.find(
    (p: { id: string }) => p.id === selectedProjectId,
  );

  const sessionsQuery = api.project.listSessions.useQuery(
    { projectId: selectedProjectId ?? "" },
    {
      enabled: Boolean(selectedProjectId),
      refetchInterval: 5000,
    },
  );
  const sessions = sessionsQuery.data ?? [];

  const presenceEnabled =
    !env.NEXT_PUBLIC_DISABLE_AUTH && Boolean(selectedProjectId) && isPanelOpen;
  const presenceQuery = api.presence.listByProject.useQuery(
    { projectId: selectedProjectId ?? "" },
    { enabled: presenceEnabled, refetchInterval: 5000 },
  );
  const presences = presenceQuery.data ?? [];

  const createSessionMutation = api.project.createSession.useMutation({
    onSuccess: (session) => {
      void utils.project.listSessions.invalidate({
        projectId: selectedProjectId ?? "",
      });
      void utils.terminal.ingressStatus.invalidate();
      markSessionCreated(session.id);
      setSelectedSessionId(session.id);
    },
  });

  const forkSessionMutation = api.project.forkSession.useMutation({
    onSuccess: (session) => {
      void utils.project.listSessions.invalidate({
        projectId: selectedProjectId ?? "",
      });
      void utils.terminal.ingressStatus.invalidate();
      markSessionCreated(session.id);
      setSelectedSessionId(session.id);
    },
  });

  const stackSessionMutation = api.project.stackSession.useMutation({
    onSuccess: (session) => {
      void utils.project.listSessions.invalidate({
        projectId: selectedProjectId ?? "",
      });
      void utils.terminal.ingressStatus.invalidate();
      markSessionCreated(session.id);
      setSelectedSessionId(session.id);
    },
  });

  const removeSessionMutation = api.terminal.removeSession.useMutation({
    onSuccess: (_result, variables) => {
      void utils.project.listSessions.invalidate({
        projectId: selectedProjectId ?? "",
      });
      void utils.terminal.ingressStatus.invalidate();
      if (selectedSessionId === variables.id) {
        setSelectedSessionId(null);
      }
    },
  });

  const updateNameMutation = api.terminal.updateSessionName.useMutation({
    onSuccess: () => {
      void utils.project.listSessions.invalidate({
        projectId: selectedProjectId ?? "",
      });
    },
  });

  const updateProjectMutation = api.project.update.useMutation({
    onSuccess: () => {
      void utils.project.list.invalidate();
    },
  });

  const deleteProjectMutation = api.project.delete.useMutation({
    onSuccess: () => {
      void utils.project.list.invalidate();
      setSelectedProjectId(null);
    },
  });

  const [pendingAction, setPendingAction] =
    useState<PendingSessionAction | null>(null);
  const [sessionMenu, setSessionMenu] = useState<MenuState>(null);
  const [projectMenu, setProjectMenu] = useState<MenuState>(null);
  const [removeConfirm, setRemoveConfirm] = useState<{
    id: string;
    name: string;
    childCount: number;
  } | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const sessionMenuRef = useRef<HTMLDivElement>(null);
  const projectMenuRef = useRef<HTMLDivElement>(null);

  // Close session menu on outside click
  useEffect(() => {
    if (!sessionMenu) return;
    const handleClick = (e: MouseEvent) => {
      if (
        sessionMenuRef.current &&
        !sessionMenuRef.current.contains(e.target as Node)
      ) {
        setSessionMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [sessionMenu]);

  // Close project menu on outside click
  useEffect(() => {
    if (!projectMenu) return;
    const handleClick = (e: MouseEvent) => {
      if (
        projectMenuRef.current &&
        !projectMenuRef.current.contains(e.target as Node)
      ) {
        setProjectMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [projectMenu]);

  const handleCreateSession = useCallback(() => {
    if (!selectedProjectId) return;
    setPendingAction({ type: "create" });
  }, [selectedProjectId]);

  const handleRename = useCallback(
    (sessionId: string, currentName: string) => {
      setSessionMenu(null);
      const newName = window.prompt("Rename session", currentName);
      if (newName?.trim()) {
        updateNameMutation.mutate({ id: sessionId, name: newName.trim() });
      }
    },
    [updateNameMutation],
  );

  const countDescendants = useCallback(
    (sessionId: string): number => {
      let count = 0;
      const walk = (parentId: string) => {
        for (const s of sessions) {
          if (s.parentId === parentId) {
            count++;
            walk(s.id);
          }
        }
      };
      walk(sessionId);
      return count;
    },
    [sessions],
  );

  const handleRemove = useCallback(
    (sessionId: string) => {
      setSessionMenu(null);
      const childCount = countDescendants(sessionId);
      if (childCount > 0) {
        const session = sessions.find((s) => s.id === sessionId);
        setRemoveConfirm({
          id: sessionId,
          name: session?.name ?? "Session",
          childCount,
        });
      } else {
        removeSessionMutation.mutate({ id: sessionId });
      }
    },
    [sessions, countDescendants, removeSessionMutation],
  );

  const confirmRemoveSession = useCallback(() => {
    if (!removeConfirm) return;
    removeSessionMutation.mutate({ id: removeConfirm.id });
    setRemoveConfirm(null);
  }, [removeConfirm, removeSessionMutation]);

  const handleFork = useCallback(
    (sessionId: string) => {
      setSessionMenu(null);
      if (!selectedProjectId) return;
      setPendingAction({ type: "fork", parentSessionId: sessionId });
    },
    [selectedProjectId],
  );

  const handleStack = useCallback(
    (sessionId: string) => {
      setSessionMenu(null);
      if (!selectedProjectId) return;
      setPendingAction({ type: "stack", parentSessionId: sessionId });
    },
    [selectedProjectId],
  );

  const [pendingDefaultName, setPendingDefaultName] = useState("");

  useEffect(() => {
    if (!pendingAction) return;
    setPendingDefaultName(randomSessionName());
  }, [pendingAction]);

  const handleBranchConfirm = useCallback(
    (sessionName: string, gitBranch: string) => {
      if (!selectedProjectId || !pendingAction) return;
      const storeBranch = (sessionId: string) => {
        if (gitBranch) setSessionGitBranch(sessionId, gitBranch);
      };
      if (pendingAction.type === "create") {
        createSessionMutation.mutate(
          { projectId: selectedProjectId, name: sessionName },
          { onSuccess: (session) => storeBranch(session.id) },
        );
      } else if (pendingAction.type === "fork") {
        forkSessionMutation.mutate(
          {
            projectId: selectedProjectId,
            parentSessionId: pendingAction.parentSessionId,
            name: sessionName,
          },
          { onSuccess: (session) => storeBranch(session.id) },
        );
      } else if (pendingAction.type === "stack") {
        stackSessionMutation.mutate(
          {
            projectId: selectedProjectId,
            parentSessionId: pendingAction.parentSessionId,
            name: sessionName,
          },
          { onSuccess: (session) => storeBranch(session.id) },
        );
      }
      setPendingAction(null);
    },
    [
      selectedProjectId,
      pendingAction,
      createSessionMutation,
      forkSessionMutation,
      stackSessionMutation,
      setSessionGitBranch,
    ],
  );

  const handleRenameProject = useCallback(() => {
    setProjectMenu(null);
    if (!selectedProjectId || !project) return;
    const newName = window.prompt("Rename project", project.name);
    if (newName?.trim()) {
      updateProjectMutation.mutate({
        id: selectedProjectId,
        name: newName.trim(),
      });
    }
  }, [selectedProjectId, project, updateProjectMutation]);

  const handleDeleteProject = useCallback(() => {
    setProjectMenu(null);
    setDeleteConfirmOpen(true);
  }, []);

  const confirmDeleteProject = useCallback(() => {
    if (!selectedProjectId) return;
    setDeleteConfirmOpen(false);
    deleteProjectMutation.mutate({ id: selectedProjectId });
  }, [selectedProjectId, deleteProjectMutation]);

  const dismissCreateError = useCallback(() => {
    createSessionMutation.reset();
  }, [createSessionMutation]);

  const dismissRemoveError = useCallback(() => {
    removeSessionMutation.reset();
  }, [removeSessionMutation]);

  const { shortcutsOpen, registerShortcuts, unregisterShortcuts } =
    useShortcuts();

  // Register project-session shortcuts for the shortcuts modal.
  useEffect(() => {
    if (!isPanelOpen) return;
    registerShortcuts("project", [
      {
        id: "new-project-session",
        keys: [modKey, "Shift", "A"],
        description: "New session in project",
        category: "Project",
      },
    ]);
    return () => unregisterShortcuts("project");
  }, [isPanelOpen, registerShortcuts, unregisterShortcuts]);

  // Handle Cmd/Ctrl+Shift+A to create a new session in the project.
  useEffect(() => {
    if (!isPanelOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (shortcutsOpen) return;
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        handleCreateSession();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPanelOpen, shortcutsOpen, handleCreateSession]);

  if (!isPanelOpen) return null;

  const statusColor = (status: string) => {
    if (status === "running") return "bg-emerald-400";
    if (status === "starting" || status === "pending") return "bg-yellow-400";
    return "bg-slate-500";
  };

  const panelContent = (
    <>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <span className="truncate text-xs font-semibold uppercase tracking-widest text-slate-400">
          {project?.name ?? "Project"}
        </span>
        <div className="flex items-center gap-1">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-200"
                  aria-label="Project options"
                  onClick={(e) => {
                    if (!selectedProjectId) return;
                    setProjectMenu({
                      id: selectedProjectId,
                      x: e.clientX,
                      y: e.clientY,
                    });
                  }}
                >
                  <MoreVertical
                    className="h-3.5 w-3.5"
                    strokeWidth={2}
                    aria-hidden
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">Project Options</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Inline error: create session */}
      {createSessionMutation.isError && (
        <div className="mx-2 mt-2 flex items-start gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2">
          <AlertTriangle
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-400"
            aria-hidden
          />
          <div className="flex-1">
            <p className="text-xs font-medium text-rose-200">
              Failed to create session
            </p>
            <p className="mt-0.5 text-xs text-rose-300/80">
              {createSessionMutation.error?.message ?? "Unknown error."}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 text-rose-400 hover:text-rose-200"
            onClick={dismissCreateError}
            aria-label="Dismiss"
          >
            <X className="h-3 w-3" strokeWidth={2} aria-hidden />
          </button>
        </div>
      )}

      {/* Inline error: remove session */}
      {removeSessionMutation.isError && (
        <div className="mx-2 mt-2 flex items-start gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2">
          <AlertTriangle
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-400"
            aria-hidden
          />
          <div className="flex-1">
            <p className="text-xs font-medium text-rose-200">
              Failed to remove session
            </p>
            <p className="mt-0.5 text-xs text-rose-300/80">
              {removeSessionMutation.error?.message ?? "Unknown error."}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 text-rose-400 hover:text-rose-200"
            onClick={dismissRemoveError}
            aria-label="Dismiss"
          >
            <X className="h-3 w-3" strokeWidth={2} aria-hidden />
          </button>
        </div>
      )}

      {/* Inline error: delete project */}
      {deleteProjectMutation.isError && (
        <div className="mx-2 mt-2 flex items-start gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2">
          <AlertTriangle
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-400"
            aria-hidden
          />
          <div className="flex-1">
            <p className="text-xs font-medium text-rose-200">
              Failed to delete project
            </p>
            <p className="mt-0.5 text-xs text-rose-300/80">
              {deleteProjectMutation.error?.message ?? "Unknown error."}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 text-rose-400 hover:text-rose-200"
            onClick={() => deleteProjectMutation.reset()}
            aria-label="Dismiss"
          >
            <X className="h-3 w-3" strokeWidth={2} aria-hidden />
          </button>
        </div>
      )}

      {/* Sessions list */}
      <div className="flex flex-1 flex-col overflow-y-auto px-2 py-2">
        <div className="flex flex-col gap-0.5">
          {/* Create session — always first */}
          <button
            type="button"
            className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-emerald-400 transition-colors hover:bg-emerald-400/10 hover:text-emerald-300"
            onClick={handleCreateSession}
            disabled={createSessionMutation.isPending}
          >
            {createSessionMutation.isPending ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
            ) : (
              <Plus className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            )}
            Create Session
          </button>

          {sessionsQuery.isLoading ? (
            <div className="flex items-center gap-2 px-2 py-4 text-xs text-slate-500">
              <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
              Loading...
            </div>
          ) : (
            buildSessionTree(sessions).map((node) => {
              const {
                session,
                depth,
                relationType,
                isLastChild,
                connectorColumns,
              } = node;
              const isActive = session.id === selectedSessionId;
              return (
                <div
                  key={session.id}
                  className={`group cursor-pointer relative flex items-center gap-0 rounded-lg px-2.5 text-sm transition ${
                    isActive
                      ? "bg-emerald-400/15 text-emerald-200"
                      : "text-slate-300 hover:bg-white/5 hover:text-slate-100"
                  }`}
                  style={{ paddingLeft: `${depth * 20 + 10}px` }}
                >
                  {/* Downward line from parent dot to children */}
                  {node.hasChildren && (
                    <span
                      className="pointer-events-none absolute"
                      style={{
                        left: `${depth * 20 + 14}px`,
                        top: "50%",
                        bottom: "-4px",
                      }}
                      aria-hidden
                    >
                      <span className="absolute left-0 top-0 h-full w-px bg-slate-600" />
                    </span>
                  )}
                  {/* Ancestor continuation lines */}
                  {connectorColumns.map((col) => (
                    <span
                      key={col}
                      className="pointer-events-none absolute"
                      style={{
                        left: `${col * 20 + 14}px`,
                        top: "-4px",
                        bottom: "-4px",
                      }}
                      aria-hidden
                    >
                      <span className="absolute left-0 top-0 h-full w-px bg-slate-600" />
                    </span>
                  ))}
                  {/* Fork connector — vertical bar through the dot */}
                  {relationType === "fork" && (
                    <span
                      className="pointer-events-none absolute bottom-0"
                      style={{ left: `${depth * 20 + 14}px`, top: "-4px" }}
                      aria-hidden
                    >
                      <span
                        className="absolute left-0 top-0 w-px bg-slate-600"
                        style={{
                          height: isLastChild ? "calc(50% + 2px)" : "100%",
                        }}
                      />
                    </span>
                  )}
                  {/* Stack connector — L-shape from parent column */}
                  {relationType === "stack" && (
                    <span
                      className="pointer-events-none absolute bottom-0"
                      style={{
                        left: `${(depth - 1) * 20 + 14}px`,
                        top: "-4px",
                      }}
                      aria-hidden
                    >
                      <span
                        className="absolute left-0 top-0 w-px bg-slate-600"
                        style={{
                          height: isLastChild ? "calc(50% + 2px)" : "100%",
                        }}
                      />
                      <span
                        className="absolute left-0 h-px w-4 bg-slate-600"
                        style={{ top: "calc(50% + 2px)" }}
                      />
                    </span>
                  )}
                  <button
                    type="button"
                    className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 text-left py-3"
                    onClick={() => {
                      setSelectedSessionId(session.id);
                    }}
                  >
                    <span
                      className={`relative z-10 h-2 w-2 shrink-0 rounded-full ${statusColor(session.status)}`}
                      aria-hidden
                    />
                    <span className="truncate">{session.name}</span>
                    <span className="ml-auto group-hover:hidden">
                      <SessionPresenceAvatars
                        sessionId={session.id}
                        presences={presences}
                      />
                    </span>
                  </button>
                  <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition group-hover:opacity-100">
                    {env.NEXT_PUBLIC_GIT_BUTLER_ENABLED && (
                      <button
                        type="button"
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-slate-500 hover:bg-white/10 hover:text-slate-300"
                        aria-label="Stack session"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStack(session.id);
                        }}
                      >
                        <Layers
                          className="h-3 w-3"
                          strokeWidth={1.6}
                          aria-hidden
                        />
                      </button>
                    )}
                    <button
                      type="button"
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-slate-500 hover:bg-white/10 hover:text-slate-300"
                      aria-label="Fork session"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFork(session.id);
                      }}
                    >
                      <GitFork
                        className="h-3 w-3"
                        strokeWidth={1.6}
                        aria-hidden
                      />
                    </button>
                    <button
                      type="button"
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-slate-500 hover:bg-white/10 hover:text-slate-300"
                      aria-label="Session options"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSessionMenu({
                          id: session.id,
                          x: e.clientX,
                          y: e.clientY,
                        });
                      }}
                    >
                      <MoreVertical
                        className="h-3.5 w-3.5"
                        strokeWidth={1.6}
                        aria-hidden
                      />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop: permanent aside */}
      <aside className="hidden w-56 flex-col border-r border-purple-500/25 bg-(--oc-panel) md:flex">
        {panelContent}
      </aside>

      {/* Session context menu */}
      {sessionMenu && (
        <div
          ref={sessionMenuRef}
          className="fixed z-[100] min-w-[140px] rounded-lg border border-white/10 bg-(--oc-panel-strong) py-1 shadow-xl"
          style={{ left: sessionMenu.x, top: sessionMenu.y }}
        >
          <button
            type="button"
            className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-slate-200 transition hover:bg-white/10"
            onClick={() => {
              const s = sessions.find((s) => s.id === sessionMenu.id);
              if (s) handleRename(s.id, s.name);
            }}
          >
            <Pencil className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
            Rename
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-slate-200 transition hover:bg-white/10"
            onClick={() => handleFork(sessionMenu.id)}
          >
            <GitFork className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
            Fork
          </button>
          {env.NEXT_PUBLIC_GIT_BUTLER_ENABLED && (
            <button
              type="button"
              className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-slate-200 transition hover:bg-white/10"
              onClick={() => handleStack(sessionMenu.id)}
            >
              <Layers className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
              Stack
            </button>
          )}
          <button
            type="button"
            className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-rose-300 transition hover:bg-rose-500/10"
            onClick={() => handleRemove(sessionMenu.id)}
          >
            <Trash2 className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
            Remove
          </button>
        </div>
      )}

      {/* Project context menu */}
      {projectMenu && (
        <div
          ref={projectMenuRef}
          className="fixed z-[100] min-w-[140px] rounded-lg border border-white/10 bg-(--oc-panel-strong) py-1 shadow-xl"
          style={{ left: projectMenu.x, top: projectMenu.y }}
        >
          <button
            type="button"
            className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-slate-200 transition hover:bg-white/10"
            onClick={handleRenameProject}
          >
            <Pencil className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
            Rename
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-rose-300 transition hover:bg-rose-500/10"
            onClick={handleDeleteProject}
          >
            <Trash2 className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
            Delete
          </button>
        </div>
      )}

      {/* Delete project confirmation modal */}
      <ConfirmDeleteProjectModal
        open={deleteConfirmOpen}
        projectName={project?.name ?? ""}
        onClose={() => setDeleteConfirmOpen(false)}
        onConfirm={confirmDeleteProject}
      />

      <ConfirmRemoveSessionModal
        open={removeConfirm !== null}
        sessionName={removeConfirm?.name ?? ""}
        childCount={removeConfirm?.childCount ?? 0}
        onClose={() => setRemoveConfirm(null)}
        onConfirm={confirmRemoveSession}
      />

      <BranchSelectorModal
        open={pendingAction !== null}
        workspaceSuffix={
          (project as { folder?: string } | undefined)?.folder ?? ""
        }
        title={
          pendingAction?.type === "fork"
            ? "Fork session"
            : pendingAction?.type === "stack"
              ? "Stack session"
              : "Create session"
        }
        defaultName={pendingDefaultName}
        onClose={() => setPendingAction(null)}
        onConfirm={handleBranchConfirm}
      />
    </>
  );
}
