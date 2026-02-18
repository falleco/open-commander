"use client";

import {
  AlertTriangle,
  Cog,
  Loader2,
  Maximize2,
  Minimize2,
  MoreVertical,
  Plug,
  Trash2,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { TerminalPane } from "@/components/terminal";
import type { TerminalStatus } from "@/components/terminal/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buildCliCommand } from "@/lib/agent-cli-flags";
import type { AgentId } from "@/lib/agent-preferences";
import { api } from "@/trpc/react";
import { ConfirmRemoveSessionModal } from "./confirm-remove-session-modal";
import { useProject } from "./project-context";

const EMPTY_STATE = {
  status: "idle" as TerminalStatus,
  errorMessage: null as string | null,
  containerName: null as string | null,
  wsUrl: null as string | null,
  sessionEnded: false,
  sessionEndedMessage: null as string | null,
  resetToken: 0,
};

/**
 * Renders an inline TerminalPane for the currently selected project session.
 * All status overlays (error, ended, connecting) render inside this container.
 */
export function ProjectTerminalView() {
  const {
    selectedProjectId,
    selectedSessionId,
    setSelectedSessionId,
    isNewSession,
    clearNewSession,
    getSessionGitBranch,
  } = useProject();
  const utils = api.useUtils();
  const projectsQuery = api.project.list.useQuery();
  const selectedProject = projectsQuery.data?.find(
    (p: { id: string }) => p.id === selectedProjectId,
  ) as { id: string; folder: string; defaultCliId: string | null } | undefined;
  const [sessionStates, setSessionStates] = useState<
    Record<string, typeof EMPTY_STATE>
  >({});
  const handlersRef = useRef(
    new Map<
      string,
      {
        onStatusChange: (s: TerminalStatus) => void;
        onErrorMessage: (m: string | null) => void;
        onContainerName: (n: string | null) => void;
        onWsUrl: (u: string | null) => void;
        onSessionEnded: (ended: boolean, msg: string | null) => void;
        onConnected: () => void;
      }
    >(),
  );

  // Toolbar state
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreenTransitioning, setIsFullscreenTransitioning] =
    useState(false);
  const [isToolbarHovered, setIsToolbarHovered] = useState(false);
  const [isToolbarOpenByClick, setIsToolbarOpenByClick] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const toolbarHoverTimeoutRef = useRef<number | null>(null);

  // Ports modal state
  const [portsModalOpen, setPortsModalOpen] = useState(false);
  const [hostPortValue, setHostPortValue] = useState("");
  const [containerPortValue, setContainerPortValue] = useState("");
  const [portFormError, setPortFormError] = useState<string | null>(null);

  // Port mapping tRPC queries/mutations
  const portsQuery = api.terminal.listPortMappings.useQuery(
    { sessionId: selectedSessionId ?? "" },
    { enabled: portsModalOpen && Boolean(selectedSessionId) },
  );
  const addPortMutation = api.terminal.addPortMapping.useMutation({
    onSuccess: () => {
      setHostPortValue("");
      setContainerPortValue("");
      void portsQuery.refetch();
    },
  });
  const removePortMutation = api.terminal.removePortMapping.useMutation({
    onSuccess: () => {
      void portsQuery.refetch();
    },
  });

  const portMappings = portsQuery.data?.mappings ?? [];
  const portMutationError = addPortMutation.error?.message ?? null;

  // Session removal
  const sessionsQuery = api.project.listSessions.useQuery(
    { projectId: selectedProjectId ?? "" },
    { enabled: Boolean(selectedProjectId) },
  );
  const sessions = sessionsQuery.data ?? [];
  const removeSessionMutation = api.terminal.removeSession.useMutation({
    onSuccess: (_result, variables) => {
      void utils.project.listSessions.invalidate({
        projectId: selectedProjectId ?? "",
      });
      if (selectedSessionId === variables.id) {
        setSelectedSessionId(null);
      }
    },
  });
  const [removeConfirm, setRemoveConfirm] = useState<{
    id: string;
    name: string;
    childCount: number;
  } | null>(null);

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

  const handleRemoveSession = useCallback(
    (sessionId: string) => {
      setIsToolbarOpenByClick(false);
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

  const patchState = useCallback(
    (sessionId: string, patch: Partial<typeof EMPTY_STATE>) => {
      setSessionStates((prev) => ({
        ...prev,
        [sessionId]: { ...(prev[sessionId] ?? EMPTY_STATE), ...patch },
      }));
    },
    [],
  );

  const getHandlers = useCallback(
    (sessionId: string) => {
      const existing = handlersRef.current.get(sessionId);
      if (existing) return existing;
      const handlers = {
        onStatusChange: (status: TerminalStatus) => {
          patchState(sessionId, { status });
          if (status === "connected") {
            clearNewSession(sessionId);
          }
        },
        onErrorMessage: (message: string | null) =>
          patchState(sessionId, { errorMessage: message }),
        onContainerName: (name: string | null) =>
          patchState(sessionId, { containerName: name }),
        onWsUrl: (url: string | null) => patchState(sessionId, { wsUrl: url }),
        onSessionEnded: (ended: boolean, message: string | null) =>
          patchState(sessionId, {
            sessionEnded: ended,
            sessionEndedMessage: message,
          }),
        onConnected: () => {
          if (selectedProjectId) {
            void utils.project.listSessions.invalidate({
              projectId: selectedProjectId,
            });
          }
        },
      };
      handlersRef.current.set(sessionId, handlers);
      return handlers;
    },
    [
      clearNewSession,
      patchState,
      selectedProjectId,
      utils.project.listSessions,
    ],
  );

  const log = useCallback((message: string) => {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }, []);

  // Toolbar hover handlers
  const handleToolbarMouseEnter = useCallback(() => {
    if (toolbarHoverTimeoutRef.current) {
      window.clearTimeout(toolbarHoverTimeoutRef.current);
      toolbarHoverTimeoutRef.current = null;
    }
    setIsToolbarHovered(true);
  }, []);

  const handleToolbarMouseLeave = useCallback(() => {
    if (toolbarHoverTimeoutRef.current) {
      window.clearTimeout(toolbarHoverTimeoutRef.current);
    }
    toolbarHoverTimeoutRef.current = window.setTimeout(() => {
      setIsToolbarHovered(false);
    }, 140);
  }, []);

  // Click-outside to close toolbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        toolbarRef.current &&
        !toolbarRef.current.contains(event.target as Node)
      ) {
        setIsToolbarOpenByClick(false);
      }
    };
    if (isToolbarOpenByClick) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isToolbarOpenByClick]);

  // Cleanup hover timeout
  useEffect(() => {
    return () => {
      if (toolbarHoverTimeoutRef.current) {
        window.clearTimeout(toolbarHoverTimeoutRef.current);
      }
    };
  }, []);

  // Fullscreen: lock body scroll + trigger xterm resize after repaint
  useEffect(() => {
    if (isFullscreen) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
    // Let the layout settle, refit xterm, then reveal
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("resize"));
        requestAnimationFrame(() => {
          setIsFullscreenTransitioning(false);
        });
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [isFullscreen]);

  // Escape to exit fullscreen (only when ports modal is closed)
  useEffect(() => {
    if (!isFullscreen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !portsModalOpen) {
        setIsFullscreenTransitioning(true);
        setIsFullscreen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isFullscreen, portsModalOpen]);

  // Ports modal: escape to close + reset form error
  useEffect(() => {
    if (!portsModalOpen) return;
    setPortFormError(null);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPortsModalOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [portsModalOpen]);

  /** Adds a port mapping to the selected session. */
  const handleAddPortMapping = useCallback(() => {
    if (!selectedSessionId) return;
    const hostPort = Number(hostPortValue);
    const containerPort = Number(containerPortValue);
    if (!Number.isInteger(hostPort) || hostPort <= 0 || hostPort > 65535) {
      setPortFormError("Enter a valid host port.");
      return;
    }
    if (
      !Number.isInteger(containerPort) ||
      containerPort <= 0 ||
      containerPort > 65535
    ) {
      setPortFormError("Enter a valid container port.");
      return;
    }
    setPortFormError(null);
    addPortMutation.mutate({
      sessionId: selectedSessionId,
      hostPort,
      containerPort,
    });
  }, [addPortMutation, containerPortValue, hostPortValue, selectedSessionId]);

  if (!selectedProjectId || !selectedSessionId) return null;

  const state = sessionStates[selectedSessionId] ?? EMPTY_STATE;
  const handlers = getHandlers(selectedSessionId);

  const showError =
    state.errorMessage ??
    (state.status === "error" ? "Unable to connect to the session." : null);
  const isConnecting =
    state.status === "starting" || state.status === "connecting";
  const isNew = isNewSession(selectedSessionId);
  const autoCommand =
    isNew && selectedProject?.defaultCliId
      ? buildCliCommand(selectedProject.defaultCliId as AgentId)
      : null;

  return (
    <>
      <div
        className={
          isFullscreen
            ? "fixed inset-0 z-50 flex flex-col bg-[rgb(23,25,34)]"
            : "relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-none border-white/10 md:rounded-xl md:border"
        }
      >
        {/* Floating toolbar */}
        <div
          ref={toolbarRef}
          className="absolute right-2 top-2 z-20 flex flex-col items-center"
          role="toolbar"
          aria-label="Terminal options"
          onMouseEnter={handleToolbarMouseEnter}
          onMouseLeave={handleToolbarMouseLeave}
        >
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-slate-200/80 transition hover:text-yellow-400 active:text-yellow-300"
            aria-label="Terminal options"
            aria-expanded={isToolbarHovered || isToolbarOpenByClick}
            onClick={() => setIsToolbarOpenByClick((open) => !open)}
          >
            <MoreVertical className="h-4 w-4" strokeWidth={1.6} aria-hidden />
          </button>
          <TooltipProvider delayDuration={300}>
            <div
              className={`absolute right-0 top-full z-30 mt-2 flex flex-col items-center gap-1 transition-all duration-200 ease-out ${
                isToolbarHovered || isToolbarOpenByClick
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
              role="menu"
              aria-label="Terminal options"
              onMouseEnter={handleToolbarMouseEnter}
              onMouseLeave={handleToolbarMouseLeave}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-400/50 hover:bg-emerald-400/10"
                    onClick={() => {
                      setIsFullscreenTransitioning(true);
                      setIsFullscreen((f) => !f);
                    }}
                    aria-label={
                      isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                    }
                  >
                    {isFullscreen ? (
                      <Minimize2
                        className="h-4 w-4"
                        strokeWidth={1.6}
                        aria-hidden
                      />
                    ) : (
                      <Maximize2
                        className="h-4 w-4"
                        strokeWidth={1.6}
                        aria-hidden
                      />
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  {isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-400/50 hover:bg-emerald-400/10"
                    onClick={() => {
                      setPortsModalOpen(true);
                      setIsToolbarOpenByClick(false);
                    }}
                    aria-label="Manage ports"
                  >
                    <Plug className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left">Manage ports</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-rose-400/50 hover:bg-rose-500/10"
                    onClick={() => handleRemoveSession(selectedSessionId)}
                    aria-label="Remove session"
                  >
                    <Trash2 className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left">Remove session</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        {/* Terminal — visibility:hidden during fullscreen transition so the
             WebGL canvas is not painted while xterm refits */}
        <TerminalPane
          className={`min-h-0 flex-1 flex-col${isFullscreenTransitioning ? " invisible" : ""}`}
          sessionId={selectedSessionId}
          active
          resetToken={state.resetToken}
          workspaceSuffix={selectedProject?.folder ?? ""}
          gitBranch={getSessionGitBranch(selectedSessionId)}
          wsUrl={state.wsUrl}
          errorMessage={state.errorMessage}
          autoCommand={autoCommand}
          onStatusChange={handlers.onStatusChange}
          onErrorMessage={handlers.onErrorMessage}
          onContainerName={handlers.onContainerName}
          onWsUrl={handlers.onWsUrl}
          onSessionEnded={handlers.onSessionEnded}
          onConnected={handlers.onConnected}
          onLog={log}
        />

        {/* Overlay: session ended */}
        {state.sessionEnded && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-[rgb(10,12,20)]/85 backdrop-blur-sm">
            <div className="mx-4 flex max-w-sm flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[rgb(23,25,34)]/90 px-6 py-5 text-center shadow-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Session ended
              </p>
              <p className="text-sm font-semibold text-white md:text-base">
                {state.sessionEndedMessage ??
                  "The session has ended. Start again to continue."}
              </p>
              <Button
                type="button"
                className="rounded-full bg-emerald-400/90 px-6 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
                onClick={() =>
                  patchState(selectedSessionId, {
                    resetToken: state.resetToken + 1,
                    sessionEnded: false,
                    sessionEndedMessage: null,
                  })
                }
              >
                Reconnect
              </Button>
            </div>
          </div>
        )}

        {/* Overlay: connection error (only after all retries exhausted) */}
        {!state.sessionEnded && showError && !isConnecting && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-[rgb(10,12,20)]/85 backdrop-blur-sm">
            <div className="mx-4 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-rose-500/30 bg-[rgb(23,25,34)]/90 px-6 py-5 text-center shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-500/30 bg-rose-500/10">
                <AlertTriangle
                  className="h-6 w-6 text-rose-400"
                  strokeWidth={2.2}
                  aria-hidden
                />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-rose-300">
                Connection error
              </p>
              <p className="text-sm text-slate-300">{showError}</p>
              <Button
                type="button"
                className="rounded-full bg-rose-500/90 px-6 py-2 text-sm font-semibold text-rose-50 transition hover:bg-rose-400"
                onClick={() =>
                  patchState(selectedSessionId, {
                    resetToken: state.resetToken + 1,
                    errorMessage: null,
                  })
                }
              >
                Try again
              </Button>
            </div>
          </div>
        )}

        {/* Overlay: creating (new) / loading (existing) */}
        {!state.sessionEnded && !showError && isConnecting && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-[rgb(10,12,20)]/85 backdrop-blur-sm">
            <div className="mx-4 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[rgb(23,25,34)]/90 px-6 py-5 text-center shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
                {isNew ? (
                  <Loader2
                    className="h-6 w-6 animate-spin text-emerald-400"
                    strokeWidth={2.2}
                    aria-hidden
                  />
                ) : (
                  <Cog
                    className="h-6 w-6 animate-spin text-emerald-400"
                    strokeWidth={2.2}
                    aria-hidden
                  />
                )}
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                {isNew ? "Creating session" : "Loading session"}
              </p>
              <p className="text-sm text-slate-300">
                {isNew
                  ? "Setting up your session environment."
                  : "Connecting to your session."}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Ports modal */}
      {portsModalOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Manage ports"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-black/60"
            onClick={() => setPortsModalOpen(false)}
          />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/10 bg-(--oc-panel-strong) p-6 shadow-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Port mappings
                </p>
                <h2 className="text-lg font-semibold text-white">
                  Expose session ports
                </h2>
              </div>
              <Badge variant="muted">Session</Badge>
            </div>
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-(--oc-panel) p-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                Active mappings
              </p>
              {portsQuery.isLoading ? (
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Loading ports...
                </div>
              ) : portMappings.length === 0 ? (
                <p className="text-sm text-slate-400">No ports mapped yet.</p>
              ) : (
                <ul className="flex flex-col gap-2">
                  {portMappings.map((mapping) => (
                    <li
                      key={`${mapping.hostPort}:${mapping.containerPort}`}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                    >
                      <span className="font-mono text-xs text-slate-300">
                        {mapping.hostPort}:{mapping.containerPort}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        className="text-rose-300 hover:bg-rose-500/10"
                        onClick={() => {
                          if (!selectedSessionId) return;
                          removePortMutation.mutate({
                            sessionId: selectedSessionId,
                            hostPort: mapping.hostPort,
                            containerPort: mapping.containerPort,
                          });
                        }}
                        disabled={removePortMutation.isPending}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-(--oc-panel) p-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                Add mapping
              </p>
              <div className="mt-3 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                <input
                  type="number"
                  min={1}
                  max={65535}
                  value={hostPortValue}
                  onChange={(event) => setHostPortValue(event.target.value)}
                  placeholder="Host port"
                  className="w-full rounded-xl border border-white/10 bg-(--oc-panel-strong) px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
                />
                <input
                  type="number"
                  min={1}
                  max={65535}
                  value={containerPortValue}
                  onChange={(event) =>
                    setContainerPortValue(event.target.value)
                  }
                  placeholder="Container port"
                  className="w-full rounded-xl border border-white/10 bg-(--oc-panel-strong) px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
                />
                <Button
                  type="button"
                  className="bg-emerald-500/90 text-white hover:bg-emerald-500"
                  onClick={handleAddPortMapping}
                  disabled={addPortMutation.isPending}
                >
                  {addPortMutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Adding...
                    </>
                  ) : (
                    "Add"
                  )}
                </Button>
              </div>
              {(portFormError || portMutationError) && (
                <p className="mt-3 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
                  {portFormError ?? portMutationError}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Confirm remove session modal */}
      <ConfirmRemoveSessionModal
        open={removeConfirm !== null}
        sessionName={removeConfirm?.name ?? ""}
        childCount={removeConfirm?.childCount ?? 0}
        onClose={() => setRemoveConfirm(null)}
        onConfirm={confirmRemoveSession}
      />
    </>
  );
}
