"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Shape returned by project.listSessions, mirrored here so the WS hook
 * can return a type-compatible value. Dates arrive as ISO strings over the
 * wire and are revived to Date objects inside the hook.
 */
export type SessionEntry = {
  id: string;
  name: string | null;
  status: string;
  containerName: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  projectId: string | null;
  parentId: string | null;
  relationType: "fork" | "stack" | null;
  user: { id: string; name: string | null };
  [key: string]: unknown;
};

const MAX_RETRY_DELAY_MS = 30_000;

/** Revive Date fields that JSON.parse turns into strings. */
function revive(raw: Record<string, unknown>): SessionEntry {
  return {
    ...(raw as unknown as SessionEntry),
    createdAt: new Date(raw.createdAt as string),
    updatedAt: new Date(raw.updatedAt as string),
  };
}

/**
 * Subscribes to real-time session list updates for a project via WebSocket.
 * Reconnects automatically with exponential back-off on disconnect.
 * Returns an empty array when disabled or projectId is absent.
 *
 * Intentionally does NOT clear sessions on WS reconnect — last known data
 * stays visible until fresh data arrives, preventing flash-of-empty.
 *
 * Returns a tuple of [sessions, addSession] where addSession can be used to
 * optimistically insert a session before the next WS broadcast arrives.
 */
export function useSessionsWebSocket(
  projectId: string | null | undefined,
  enabled = true,
): readonly [SessionEntry[], (session: SessionEntry) => void] {
  const [sessions, setSessions] = useState<SessionEntry[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!enabled || !projectId) {
      setSessions([]);
      return;
    }

    // Local variables per effect invocation — avoids the race condition where
    // the old socket's onclose fires after the new effect resets shared refs,
    // causing an infinite retry loop against the stale projectId.
    let closed = false;
    let retryTimer: ReturnType<typeof setTimeout> | null = null;
    let retryDelay = 1000;

    const connect = () => {
      if (closed) return;

      const protocol = window.location.protocol === "https:" ? "wss" : "ws";
      const ws = new WebSocket(
        `${protocol}://${window.location.host}/sessions/${projectId}`,
      );
      socketRef.current = ws;

      ws.onmessage = (event) => {
        try {
          const raw = JSON.parse(event.data as string) as Record<
            string,
            unknown
          >[];
          setSessions(raw.map(revive));
        } catch {
          // malformed frame — ignore
        }
      };

      ws.onopen = () => {
        retryDelay = 1000;
      };

      ws.onclose = () => {
        if (closed) return;
        retryTimer = setTimeout(() => {
          retryDelay = Math.min(retryDelay * 2, MAX_RETRY_DELAY_MS);
          connect();
        }, retryDelay);
      };

      ws.onerror = () => ws.close();
    };

    connect();

    return () => {
      closed = true;
      if (retryTimer) clearTimeout(retryTimer);
      socketRef.current?.close();
      socketRef.current = null;
      // Do NOT clear sessions here — keep last known data across reconnects.
    };
  }, [enabled, projectId]);

  /** Optimistically add a session before the next WS broadcast arrives. */
  const addSession = useCallback((newSession: SessionEntry) => {
    setSessions((prev) => {
      if (prev.some((s) => s.id === newSession.id)) return prev;
      return [...prev, newSession];
    });
  }, []);

  return [sessions, addSession] as const;
}
