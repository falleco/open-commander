"use client";

import {
  AlertTriangle,
  Cog,
  Loader2,
  Maximize2,
  Minimize2,
  MoreVertical,
  Pencil,
  Plug,
  Plus,
  Terminal,
  Trash2,
  X,
} from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ShortcutItem } from "@/components/shortcuts";
import { modKey, useShortcuts } from "@/components/shortcuts";
import StarBorder from "@/components/star-border";
import { TerminalPane } from "@/components/terminal";
import { ConfirmRemoveSessionModal } from "@/components/terminal/confirm-remove-session-modal";
import { CreateSessionModal } from "@/components/terminal/create-session-modal";
import type { TerminalStatus } from "@/components/terminal/types";
import { AnimatedPageTitle } from "@/components/ui/animated-page-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePageTitle } from "@/hooks/use-page-title";
import { api } from "@/trpc/react";

const STORAGE_SELECTED_KEY = "open-commander.sessions.selected";
const EMPTY_SESSION_STATE = {
  status: "idle" as TerminalStatus,
  errorMessage: null as string | null,
  containerName: null as string | null,
  wsUrl: null as string | null,
  sessionEnded: false,
  sessionEndedMessage: null as string | null,
  resetToken: 0,
  workspaceSuffix: "",
};

/**
 * Terminal sessions dashboard with list, actions, and live terminal view.
 */
export default function TerminalDashboardPage() {
  const [sessionUiState, setSessionUiState] = useState<
    Record<string, typeof EMPTY_SESSION_STATE>
  >({});
  const sessionsQuery = api.terminal.listSessions.useQuery();
  const sessions = sessionsQuery.data ?? [];
  const utils = api.useUtils();
  const createSessionMutation = api.terminal.createSession.useMutation({
    onSuccess: (session) => {
      utils.terminal.listSessions.setData(undefined, (prev) => [
        ...(prev ?? []),
        session,
      ]);
      void utils.terminal.sessionStats.invalidate();
      void utils.terminal.ingressStatus.invalidate();
      setSelectedSessionId(session.id);
    },
  });
  const updateSessionNameMutation = api.terminal.updateSessionName.useMutation({
    onSuccess: (session) => {
      utils.terminal.listSessions.setData(undefined, (prev) =>
        (prev ?? []).map((item) => (item.id === session.id ? session : item)),
      );
      void utils.terminal.ingressStatus.invalidate();
    },
  });
  const removeSessionMutation = api.terminal.removeSession.useMutation({
    onSuccess: (_result, variables) => {
      utils.terminal.listSessions.setData(undefined, (prev) =>
        (prev ?? []).filter((item) => item.id !== variables.id),
      );
      void utils.terminal.sessionStats.invalidate();
      void utils.terminal.ingressStatus.invalidate();
    },
  });
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(
    null,
  );

  usePageTitle("Agent Sessions");

  const sessionPanelRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isToolbarHovered, setIsToolbarHovered] = useState(false);
  const [isToolbarOpenByClick, setIsToolbarOpenByClick] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const toolbarHoverTimeoutRef = useRef<number | null>(null);
  const [sessionDropdownOpen, setSessionDropdownOpen] = useState(false);
  const sessionDropdownRef = useRef<HTMLDivElement>(null);
  const [createSessionModalOpen, setCreateSessionModalOpen] = useState(false);
  const [confirmRemoveSessionId, setConfirmRemoveSessionId] = useState<
    string | null
  >(null);
  const [portsModalOpen, setPortsModalOpen] = useState(false);
  const [hostPortValue, setHostPortValue] = useState("");
  const [containerPortValue, setContainerPortValue] = useState("");
  const [portFormError, setPortFormError] = useState<string | null>(null);
  const { setPageShortcuts, shortcutsOpen } = useShortcuts();
  const sessionHandlersRef = useRef(
    new Map<
      string,
      {
        onStatusChange: (status: TerminalStatus) => void;
        onErrorMessage: (message: string | null) => void;
        onContainerName: (name: string | null) => void;
        onWsUrl: (url: string | null) => void;
        onSessionEnded: (ended: boolean, message: string | null) => void;
      }
    >(),
  );
  const closePortsModal = useCallback(() => {
    setPortsModalOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sessionDropdownRef.current &&
        !sessionDropdownRef.current.contains(event.target as Node)
      ) {
        setSessionDropdownOpen(false);
      }
    };
    if (sessionDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [sessionDropdownOpen]);

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

  useEffect(() => {
    return () => {
      if (toolbarHoverTimeoutRef.current) {
        window.clearTimeout(toolbarHoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!portsModalOpen) return;
    setPortFormError(null);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePortsModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closePortsModal, portsModalOpen]);

  /**
   * Toggles fullscreen mode for the session panel.
   */
  const toggleFullscreen = () => {
    if (!sessionPanelRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }
    sessionPanelRef.current.requestFullscreen?.();
  };

  useEffect(() => {
    const className = "overflow-hidden";
    if (isFullscreen) {
      document.documentElement.classList.add(className);
      document.body.classList.add(className);
    } else {
      document.documentElement.classList.remove(className);
      document.body.classList.remove(className);
    }
    window.dispatchEvent(new Event("resize"));
  }, [isFullscreen]);
  const searchParams = useSearchParams();

  /**
   * Appends a line to the session log list.
   */
  const log = useCallback((message: string) => {
    const line = `[${new Date().toISOString()}] ${message}`;
    console.log(line);
  }, []);

  const selectedSession = useMemo(
    () => sessions.find((session) => session.id === selectedSessionId) ?? null,
    [sessions, selectedSessionId],
  );
  const confirmRemoveSession = useMemo(
    () =>
      sessions.find((session) => session.id === confirmRemoveSessionId) ?? null,
    [sessions, confirmRemoveSessionId],
  );
  const portsQuery = api.terminal.listPortMappings.useQuery(
    {
      sessionId: selectedSessionId ?? "",
    },
    {
      enabled: portsModalOpen && Boolean(selectedSessionId),
    },
  );
  const portSummaryQuery = api.terminal.portMappingSummary.useQuery(undefined, {
    enabled: sessions.length > 0,
  });
  const addPortMutation = api.terminal.addPortMapping.useMutation({
    onSuccess: () => {
      setHostPortValue("");
      setContainerPortValue("");
      void portsQuery.refetch();
      void utils.terminal.portMappingSummary.invalidate();
    },
  });
  const removePortMutation = api.terminal.removePortMapping.useMutation({
    onSuccess: () => {
      void portsQuery.refetch();
      void utils.terminal.portMappingSummary.invalidate();
    },
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedSelected = window.localStorage.getItem(STORAGE_SELECTED_KEY);
    if (storedSelected) {
      setSelectedSessionId(storedSelected);
    }
  }, []);

  useEffect(() => {
    const requested = searchParams?.get("sessionId");
    if (requested) {
      setSelectedSessionId(requested);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!sessionsQuery.isFetched) return;
    const selectedStillExists = sessions.some(
      (session) => session.id === selectedSessionId,
    );
    if (selectedSessionId && !selectedStillExists) {
      setSelectedSessionId(null);
      return;
    }
    if (sessions.length > 0 && !selectedStillExists) {
      setSelectedSessionId(sessions[0].id);
    }
  }, [sessions, selectedSessionId, sessionsQuery.isFetched]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (selectedSessionId) {
      window.localStorage.setItem(STORAGE_SELECTED_KEY, selectedSessionId);
    } else {
      window.localStorage.removeItem(STORAGE_SELECTED_KEY);
    }
  }, [selectedSessionId]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === sessionPanelRef.current);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Register session shortcuts for the shortcuts modal (and cleanup on unmount).
  useEffect(() => {
    const items: ShortcutItem[] = [
      {
        id: "new-session",
        keys: [modKey, "Shift", "N"],
        description: "Create new session",
        category: "Sessions",
      },
      ...sessions.slice(0, 9).map((session, index) => ({
        id: `switch-session-${session.id}`,
        keys: [modKey, String(index + 1)],
        description: `Switch to session ${index + 1}`,
        category: "Sessions",
      })),
    ];
    setPageShortcuts(items);
    return () => setPageShortcuts([]);
  }, [sessions, setPageShortcuts]);

  // Handle session shortcuts when modal is not open.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (shortcutsOpen) return;
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.shiftKey && e.key.toLowerCase() === "n") {
        e.preventDefault();
        setCreateSessionModalOpen(true);
        return;
      }
      if (mod && !e.shiftKey && e.key >= "1" && e.key <= "9") {
        const index =
          e.key === "9" ? 8 : e.key.charCodeAt(0) - "1".charCodeAt(0);
        const session = sessions[index];
        if (session) {
          e.preventDefault();
          setSelectedSessionId(session.id);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shortcutsOpen, sessions]);

  /**
   * Opens the create-session modal (user enters name, then we create).
   */
  const openCreateSessionModal = () => setCreateSessionModalOpen(true);
  const openRemoveSessionModal = (sessionId: string) =>
    setConfirmRemoveSessionId(sessionId);
  const closeRemoveSessionModal = () => setConfirmRemoveSessionId(null);

  const setSessionState = useCallback(
    (sessionId: string, patch: Partial<typeof EMPTY_SESSION_STATE>) => {
      setSessionUiState((prev) => {
        const current = prev[sessionId] ?? EMPTY_SESSION_STATE;
        const next = { ...current, ...patch };
        return { ...prev, [sessionId]: next };
      });
    },
    [],
  );

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

  const getSessionHandlers = useCallback(
    (sessionId: string) => {
      const existing = sessionHandlersRef.current.get(sessionId);
      if (existing) return existing;
      const handlers = {
        onStatusChange: (status: TerminalStatus) =>
          setSessionState(sessionId, { status }),
        onErrorMessage: (message: string | null) =>
          setSessionState(sessionId, { errorMessage: message }),
        onContainerName: (name: string | null) =>
          setSessionState(sessionId, { containerName: name }),
        onWsUrl: (url: string | null) =>
          setSessionState(sessionId, { wsUrl: url }),
        onSessionEnded: (ended: boolean, message: string | null) =>
          setSessionState(sessionId, {
            sessionEnded: ended,
            sessionEndedMessage: message,
          }),
      };
      sessionHandlersRef.current.set(sessionId, handlers);
      return handlers;
    },
    [setSessionState],
  );

  const bumpResetToken = useCallback((sessionId: string) => {
    setSessionUiState((prev) => {
      const current = prev[sessionId] ?? EMPTY_SESSION_STATE;
      return {
        ...prev,
        [sessionId]: {
          ...current,
          resetToken: current.resetToken + 1,
          sessionEnded: false,
          sessionEndedMessage: null,
        },
      };
    });
  }, []);

  const handleCreateSessionSubmit = useCallback(
    async (name: string, workspaceSuffix: string) => {
      try {
        const session = await createSessionMutation.mutateAsync({
          name: name.trim() || "My Terminal Session",
        });
        setSessionState(session.id, { workspaceSuffix });
      } catch {
        // Errors are surfaced via createSessionMutation state.
      }
    },
    [createSessionMutation, setSessionState],
  );

  /**
   * Adds a port mapping to the selected session.
   */
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

  /**
   * Updates the selected session name.
   */
  const updateSessionName = (nextName: string) => {
    if (!selectedSessionId) return;
    updateSessionNameMutation.mutate({
      id: selectedSessionId,
      name: nextName,
    });
  };

  /**
   * Removes the selected session and stops its container.
   */
  const removeSessionById = async (sessionId: string) => {
    const removingSession = sessions.find(
      (session) => session.id === sessionId,
    );
    const removingSessionName = removingSession?.name ?? "Session";
    const isRemovingSelected = sessionId === selectedSessionId;
    const nextSelected = isRemovingSelected
      ? (sessions.find((session) => session.id !== sessionId)?.id ?? null)
      : selectedSessionId;

    if (isRemovingSelected) {
      setSessionState(sessionId, {
        status: "idle",
        errorMessage: null,
        containerName: null,
        wsUrl: null,
        sessionEnded: false,
        sessionEndedMessage: null,
      });
    }

    try {
      log(`session: remove ${removingSessionName}`);
      const payload = await removeSessionMutation.mutateAsync({
        id: sessionId,
      });
      if (!payload.removed) {
        const errorDetail = payload.error ?? "Container not removed.";
        log(`session: remove container failed ${errorDetail}`);
      } else {
        log(`session: container removed ${payload.containerName}`.trim());
      }
      setSessionUiState((prev) => {
        if (!(sessionId in prev)) return prev;
        const next = { ...prev };
        delete next[sessionId];
        return next;
      });
      if (isRemovingSelected) {
        setSelectedSessionId(nextSelected);
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected error.";
      log(`session: remove container failed ${message}`);
    }
  };

  const handleConfirmRemoveSession = async () => {
    if (!confirmRemoveSessionId) return;
    const sessionId = confirmRemoveSessionId;
    closeRemoveSessionModal();
    await removeSessionById(sessionId);
  };

  const selectedSessionState = selectedSessionId
    ? (sessionUiState[selectedSessionId] ?? EMPTY_SESSION_STATE)
    : null;
  const selectedSessionErrorMessage =
    selectedSessionState?.errorMessage ??
    (selectedSessionState?.status === "error"
      ? "Unable to connect to the session."
      : null);
  const sessionBusyLabel = createSessionMutation.isPending
    ? "Creating session"
    : removeSessionMutation.isPending
      ? "Removing session"
      : null;
  const showBusyOverlay = Boolean(sessionBusyLabel);
  const showSessionErrorOverlay = Boolean(
    selectedSession && !showBusyOverlay && selectedSessionErrorMessage,
  );
  const createSessionErrorMessage = createSessionMutation.error
    ? createSessionMutation.error.message
    : "Unable to create a session.";
  const portMappings = portsQuery.data?.mappings ?? [];
  const portMutationError = addPortMutation.error?.message ?? null;
  const sessionsWithPorts = useMemo(
    () => new Set(portSummaryQuery.data?.sessionIds ?? []),
    [portSummaryQuery.data?.sessionIds],
  );

  useEffect(() => {
    if (sessions.length === 0) {
      setSessionUiState({});
      sessionHandlersRef.current.clear();
      return;
    }
    setSessionUiState((prev) => {
      let changed = false;
      const next: Record<string, typeof EMPTY_SESSION_STATE> = {};
      for (const session of sessions) {
        if (prev[session.id]) {
          next[session.id] = prev[session.id];
        } else {
          next[session.id] = { ...EMPTY_SESSION_STATE };
          changed = true;
        }
      }
      if (!changed) {
        const prevKeys = Object.keys(prev);
        if (
          prevKeys.length !== sessions.length ||
          prevKeys.some((id) => !next[id])
        ) {
          changed = true;
        }
      }
      const allowed = new Set(sessions.map((session) => session.id));
      for (const sessionId of sessionHandlersRef.current.keys()) {
        if (!allowed.has(sessionId)) {
          sessionHandlersRef.current.delete(sessionId);
        }
      }
      return changed ? next : prev;
    });
  }, [sessions]);

  return (
    <>
      <CreateSessionModal
        open={createSessionModalOpen}
        onClose={() => setCreateSessionModalOpen(false)}
        onSubmit={handleCreateSessionSubmit}
      />
      <ConfirmRemoveSessionModal
        open={Boolean(confirmRemoveSessionId)}
        sessionName={confirmRemoveSession?.name ?? "Session"}
        onClose={closeRemoveSessionModal}
        onConfirm={handleConfirmRemoveSession}
      />
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
            onClick={closePortsModal}
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
              <Badge variant="muted">
                {selectedSession?.name ?? "Session"}
              </Badge>
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

      <header className="relative z-10 flex shrink-0 flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <AnimatedPageTitle
            icon={Terminal}
            text="Agent Sessions"
            iconClassName="text-emerald-400"
            styledRange={{ start: 6, className: "text-emerald-400" }}
            cursor={{ character: "|" }}
          />
          <div className="flex items-center gap-2 md:hidden">
            {sessions.length > 0 && (
              <div className="relative" ref={sessionDropdownRef}>
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center gap-0 rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 md:h-auto md:w-auto md:min-w-0 md:gap-2 md:px-3 md:py-2"
                  onClick={() => setSessionDropdownOpen((o) => !o)}
                  aria-expanded={sessionDropdownOpen}
                  aria-haspopup="listbox"
                  aria-label="Session list"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-medium tabular-nums text-slate-400 md:hidden">
                    {(sessions.findIndex((s) => s.id === selectedSessionId) ??
                      -1) + 1}
                  </span>
                  {selectedSession && (
                    <span className="hidden h-5 w-5 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-medium tabular-nums text-slate-400 md:flex">
                      {(sessions.findIndex((s) => s.id === selectedSessionId) ??
                        -1) + 1}
                    </span>
                  )}
                  <span className="hidden max-w-[180px] truncate text-sm md:inline">
                    {selectedSession?.name ?? "Select session"}
                  </span>
                  <svg
                    aria-hidden="true"
                    className="hidden h-4 w-4 shrink-0 transition-transform data-open:rotate-180 md:block"
                    data-open={sessionDropdownOpen || undefined}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {sessionDropdownOpen && (
                  <ul className="absolute right-0 top-full z-20 mt-1 max-h-64 w-56 overflow-auto rounded-lg border border-white/10 bg-(--oc-panel-strong) py-1 shadow-xl">
                    {sessions.map((session, index) => (
                      <li key={session.id}>
                        <button
                          type="button"
                          className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition ${
                            session.id === selectedSessionId
                              ? "bg-emerald-400/20 text-emerald-200"
                              : "text-slate-200 hover:bg-white/10"
                          }`}
                          onClick={() => {
                            setSelectedSessionId(session.id);
                            setSessionDropdownOpen(false);
                          }}
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-medium tabular-nums text-slate-400">
                            {index + 1}
                          </span>
                          {session.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            <Button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-400/90 px-2 py-2 text-sm font-semibold text-emerald-950 hover:bg-emerald-300 md:h-auto md:w-auto md:px-4 md:py-2"
              onClick={openCreateSessionModal}
              aria-label="Create session"
            >
              <Plus
                className="h-5 w-5 shrink-0 md:h-4 md:w-4"
                strokeWidth={2.25}
                aria-hidden
              />
              <span className="hidden md:inline">Create Session</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        {!selectedSession ? (
          createSessionMutation.isError && sessions.length === 0 ? (
            <section className="flex flex-1 flex-col items-center justify-center gap-6 rounded-2xl border border-rose-500/20 bg-(--oc-panel) p-8 text-center text-slate-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-500/30 bg-rose-500/10">
                <AlertTriangle
                  className="h-6 w-6 text-rose-400"
                  strokeWidth={2.2}
                  aria-hidden
                />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-rose-300">
                Session error
              </p>
              <p className="text-lg font-semibold text-white">
                {createSessionErrorMessage}
              </p>
              <Button
                type="button"
                className="rounded-full bg-rose-500/90 px-6 py-2.5 text-sm font-semibold text-rose-50 transition hover:bg-rose-400"
                onClick={openCreateSessionModal}
              >
                Try again
              </Button>
            </section>
          ) : sessions.length === 0 ? (
            <section className="flex flex-1 flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-(--oc-panel) p-8 text-center text-slate-300">
              <Image
                src="/imgs/app-logo.webp"
                alt="Open Commander logo"
                className="h-48 w-auto"
                width={96}
                height={192}
                priority
              />
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                No session created
              </p>
              <p className="text-lg font-semibold text-white">
                Create a TUI session to get started.
              </p>
              <Button
                type="button"
                className="rounded-full bg-emerald-400/90 px-6 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
                onClick={openCreateSessionModal}
              >
                <Plus className="mr-2 h-4 w-4" strokeWidth={2.25} aria-hidden />
                Create Session
              </Button>
            </section>
          ) : (
            <section className="flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-(--oc-panel) p-8 text-center text-slate-300">
              <Image
                src="/imgs/app-logo.webp"
                alt="Open Commander logo"
                className="h-48 w-auto"
                width={96}
                height={192}
                priority
              />
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                No session selected
              </p>
              <p className="text-lg font-semibold text-white">
                Create or select a TUI session to start.
              </p>
            </section>
          )
        ) : selectedSessionState?.sessionEnded ? (
          <section className="flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-(--oc-panel) p-8 text-center text-slate-300">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Session ended
            </p>
            <p className="text-lg font-semibold text-white">
              {selectedSessionState?.sessionEndedMessage ??
                "The session has ended. Start again to continue."}
            </p>
            <button
              type="button"
              className="rounded-full bg-emerald-400/90 px-6 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
              onClick={() => {
                if (selectedSessionId) {
                  bumpResetToken(selectedSessionId);
                }
              }}
            >
              Reconnect
            </button>
          </section>
        ) : (
          <div
            className={`relative flex min-h-0 flex-1 flex-col ${
              !isFullscreen ? "rounded-xl overflow-hidden" : ""
            }`}
          >
            {(() => {
              const sessionPanelInner = (
                <>
                  {!isFullscreen && (
                    <div className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-white/5 px-3 py-2">
                      <div className="flex min-w-0 flex-1 items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="h-3 w-3 rounded-full bg-[#ff5f57]"
                            aria-hidden
                          />
                          <span
                            className="h-3 w-3 rounded-full bg-[#febc2e]"
                            aria-hidden
                          />
                          <span
                            className="h-3 w-3 rounded-full bg-[#28c840]"
                            aria-hidden
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="hidden h-10 shrink-0 items-stretch border-b border-white/10 bg-[rgb(26,30,38)] md:flex">
                    <div className="flex min-w-0 flex-1 items-stretch overflow-hidden">
                      <div className="flex min-w-0 flex-1 items-stretch overflow-x-auto">
                        {sessions.map((session, index) => {
                          const isActive = session.id === selectedSessionId;
                          return (
                            <div
                              key={session.id}
                              className={`group flex h-full max-w-[260px] shrink-0 items-stretch border-b-2 transition ${
                                isActive
                                  ? "border-emerald-400 bg-emerald-400/10 text-emerald-100"
                                  : "border-transparent bg-white/5 text-slate-200/90 hover:bg-white/10 hover:text-slate-100"
                              }`}
                            >
                              <TooltipProvider delayDuration={200}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      type="button"
                                      className="flex h-full flex-1 cursor-pointer items-center gap-2 px-3 text-xs font-medium"
                                      onClick={() =>
                                        setSelectedSessionId(session.id)
                                      }
                                      aria-current={
                                        isActive ? "page" : undefined
                                      }
                                    >
                                      <span className="flex h-5 w-5 items-center justify-center rounded bg-white/10 text-[10px] font-semibold tabular-nums text-slate-400">
                                        {index + 1}
                                      </span>
                                      <span className="flex min-w-0 items-center gap-2">
                                        <span className="truncate">
                                          {session.name}
                                        </span>
                                        {sessionsWithPorts.has(session.id) && (
                                          <span
                                            className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 ring-2 ring-(--oc-panel)"
                                            aria-hidden
                                          />
                                        )}
                                      </span>
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent side="bottom">
                                    {sessionsWithPorts.has(session.id)
                                      ? "Ports mapped"
                                      : "No ports mapped"}
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              <button
                                type="button"
                                className="flex h-full cursor-pointer items-center pl-0 pr-2 text-slate-300/70 opacity-0 transition hover:text-slate-100 group-hover:opacity-100 group-focus-within:opacity-100"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  openRemoveSessionModal(session.id);
                                }}
                                aria-label={`Close ${session.name}`}
                              >
                                <X
                                  className="h-3.5 w-3.5"
                                  strokeWidth={2}
                                  aria-hidden
                                />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex shrink-0 items-stretch gap-1.5">
                      <TooltipProvider delayDuration={300}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              type="button"
                              className="flex h-full w-9 cursor-pointer items-center justify-center rounded-md text-slate-200/80 transition hover:text-yellow-400 active:text-yellow-300"
                              aria-label="New session"
                              onClick={openCreateSessionModal}
                            >
                              <Plus
                                className="h-4 w-4"
                                strokeWidth={2.2}
                                aria-hidden
                              />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            New Session
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      {/* biome-ignore lint: toolbar container; fieldset is for form grouping */}
                      <div
                        ref={toolbarRef}
                        className="relative flex flex-col items-center"
                        role="group"
                        aria-label="Terminal options"
                        onMouseEnter={handleToolbarMouseEnter}
                        onMouseLeave={handleToolbarMouseLeave}
                      >
                        <button
                          type="button"
                          className="flex h-full w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-slate-200/80 transition hover:text-yellow-400 active:text-yellow-300"
                          aria-label="Session options"
                          aria-expanded={
                            isToolbarHovered || isToolbarOpenByClick
                          }
                          onClick={() =>
                            setIsToolbarOpenByClick((open) => !open)
                          }
                        >
                          <MoreVertical
                            className="h-4 w-4"
                            strokeWidth={1.6}
                            aria-hidden
                          />
                        </button>
                        <TooltipProvider delayDuration={300}>
                          <div
                            className={`absolute right-0 top-full z-30 mt-2 flex flex-col items-center gap-1 transition-all duration-200 ease-out ${
                              isToolbarHovered || isToolbarOpenByClick
                                ? "translate-y-0 opacity-100"
                                : "pointer-events-none -translate-y-2 opacity-0"
                            }`}
                            role="menu"
                            aria-label="Session options"
                            onMouseEnter={handleToolbarMouseEnter}
                            onMouseLeave={handleToolbarMouseLeave}
                          >
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-400/50 hover:bg-emerald-400/10"
                                  onClick={toggleFullscreen}
                                  aria-label={
                                    isFullscreen
                                      ? "Exit fullscreen"
                                      : "Enter fullscreen"
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
                                {isFullscreen
                                  ? "Exit fullscreen"
                                  : "Enter fullscreen"}
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-400/50 hover:bg-emerald-400/10"
                                  onClick={() => {
                                    const name = window.prompt(
                                      "New session name",
                                      selectedSession?.name ?? "",
                                    );
                                    if (name?.trim())
                                      updateSessionName(name.trim());
                                  }}
                                  aria-label="Rename session"
                                >
                                  <Pencil
                                    className="h-4 w-4"
                                    strokeWidth={1.6}
                                    aria-hidden
                                  />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="left">
                                Rename session
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-400/50 hover:bg-emerald-400/10"
                                  onClick={() => {
                                    if (!selectedSessionId) return;
                                    setPortsModalOpen(true);
                                    setIsToolbarOpenByClick(false);
                                  }}
                                  aria-label="Manage ports"
                                >
                                  <Plug
                                    className="h-4 w-4"
                                    strokeWidth={1.6}
                                    aria-hidden
                                  />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="left">
                                Manage ports
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-rose-400/50 hover:bg-rose-500/10"
                                  onClick={() => {
                                    if (selectedSessionId) {
                                      openRemoveSessionModal(selectedSessionId);
                                    }
                                    setIsToolbarOpenByClick(false);
                                  }}
                                  aria-label="Remove session"
                                >
                                  <Trash2
                                    className="h-4 w-4"
                                    strokeWidth={1.6}
                                    aria-hidden
                                  />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="left">
                                Remove session
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </TooltipProvider>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
                    <div className="absolute inset-0">
                      {sessions.map((session) => {
                        const isActive = session.id === selectedSessionId;
                        const state =
                          sessionUiState[session.id] ?? EMPTY_SESSION_STATE;
                        const handlers = getSessionHandlers(session.id);
                        return (
                          <div
                            key={session.id}
                            className={`absolute inset-0 transition-opacity ${
                              isActive
                                ? "opacity-100"
                                : "pointer-events-none opacity-0"
                            }`}
                            aria-hidden={!isActive}
                          >
                            <TerminalPane
                              className="min-h-0 flex-1 flex-col gap-3"
                              sessionId={session.id}
                              active={isActive}
                              resetToken={state.resetToken}
                              workspaceSuffix={state.workspaceSuffix}
                              wsUrl={state.wsUrl}
                              errorMessage={state.errorMessage}
                              onStatusChange={handlers.onStatusChange}
                              onErrorMessage={handlers.onErrorMessage}
                              onContainerName={handlers.onContainerName}
                              onWsUrl={handlers.onWsUrl}
                              onSessionEnded={handlers.onSessionEnded}
                              onLog={log}
                            />
                          </div>
                        );
                      })}
                    </div>
                    {showBusyOverlay && (
                      <div className="absolute inset-0 z-40 flex items-center justify-center bg-[rgb(10,12,20)]/85 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-3 rounded-2xl border border-rose-500/30 bg-[rgb(23,25,34)]/90 px-6 py-5 text-center shadow-2xl">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-500/30 bg-rose-500/10">
                            <Cog
                              className="h-6 w-6 animate-spin text-rose-400"
                              strokeWidth={2.2}
                              aria-hidden
                            />
                          </div>
                          <p className="text-xs uppercase tracking-[0.3em] text-rose-300">
                            {sessionBusyLabel}
                          </p>
                          <p className="text-sm text-slate-300">
                            Preparing your session environment.
                          </p>
                        </div>
                      </div>
                    )}
                    {showSessionErrorOverlay && (
                      <div className="absolute inset-0 z-40 flex items-center justify-center bg-[rgb(10,12,20)]/85 backdrop-blur-sm">
                        <div className="flex max-w-md flex-col items-center gap-3 rounded-2xl border border-rose-500/30 bg-[rgb(23,25,34)]/90 px-6 py-5 text-center text-slate-200 shadow-2xl">
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
                          <p className="text-sm text-slate-300">
                            {selectedSessionErrorMessage}
                          </p>
                          <Button
                            type="button"
                            className="rounded-full bg-rose-500/90 px-6 py-2 text-sm font-semibold text-rose-50 transition hover:bg-rose-400"
                            onClick={() => {
                              if (selectedSessionId) {
                                bumpResetToken(selectedSessionId);
                              }
                            }}
                          >
                            Try again
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              );
              return !isFullscreen ? (
                <StarBorder
                  as="div"
                  className="terminal-window-border absolute inset-0 flex flex-col rounded-xl"
                  color="var(--color-emerald-400)"
                  speed="12s"
                  thickness={1}
                >
                  <section
                    ref={sessionPanelRef}
                    className="absolute inset-px z-10 flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-[11px] bg-[rgb(23,25,34)] shadow-xl relative"
                  >
                    {sessionPanelInner}
                  </section>
                </StarBorder>
              ) : (
                <section
                  ref={sessionPanelRef}
                  className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden h-full w-full"
                >
                  {sessionPanelInner}
                </section>
              );
            })()}
          </div>
        )}
      </div>
    </>
  );
}
