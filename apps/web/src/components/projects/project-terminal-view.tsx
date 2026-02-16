"use client";

import { AlertTriangle, Cog, Loader2 } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { TerminalPane } from "@/components/terminal";
import type { TerminalStatus } from "@/components/terminal/types";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
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
    isNewSession,
    clearNewSession,
  } = useProject();
  const utils = api.useUtils();
  const projectsQuery = api.project.list.useQuery();
  const selectedProject = projectsQuery.data?.find(
    (p: { id: string }) => p.id === selectedProjectId,
  ) as
    | { id: string; folder: string; defaultCliId: string | null }
    | undefined;
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
        onWsUrl: (url: string | null) =>
          patchState(sessionId, { wsUrl: url }),
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
    [clearNewSession, patchState, selectedProjectId, utils.project.listSessions],
  );

  const log = useCallback((message: string) => {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }, []);

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
      ? selectedProject.defaultCliId
      : null;

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-none border-white/10 md:rounded-xl md:border">
      {/* Terminal */}
      <TerminalPane
        className="min-h-0 flex-1 flex-col"
        sessionId={selectedSessionId}
        active
        resetToken={state.resetToken}
        workspaceSuffix={selectedProject?.folder ?? ""}
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
  );
}
