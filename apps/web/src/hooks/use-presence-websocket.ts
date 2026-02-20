"use client";

import { useEffect, useRef, useState } from "react";
import { env } from "@/env";

type PresenceEntry = {
  userId: string;
  sessionId: string;
  status: "active" | "viewing" | "inactive";
  user: {
    id: string;
    name: string;
    email: string;
    image: string | null;
    avatarImageUrl: string | null;
  };
};

const MAX_RETRY_DELAY_MS = 30_000;
const HEARTBEAT_INTERVAL_MS = 15_000;
const ACTIVE_THRESHOLD_MS = 30_000;
const VIEWING_THRESHOLD_MS = 2 * 60_000;

function computeStatus(
  lastInteractionMs: number,
): "active" | "viewing" | "inactive" {
  const elapsed = Date.now() - lastInteractionMs;
  if (elapsed < ACTIVE_THRESHOLD_MS) return "active";
  if (elapsed < VIEWING_THRESHOLD_MS) return "viewing";
  return "inactive";
}

/**
 * Subscribes to real-time presence updates for a project via WebSocket.
 * When sessionId is provided, also sends heartbeat messages over the same WS
 * connection (replacing the tRPC heartbeat mutation). Reconnects automatically
 * with exponential back-off on disconnect.
 * Returns an empty array when disabled or projectId is absent.
 *
 * Intentionally does NOT clear presences on WS reconnect — last known
 * data stays visible until fresh data arrives, preventing flash-of-empty.
 */
export function usePresenceWebSocket(
  projectId: string | null | undefined,
  sessionId?: string | null,
  enabled = true,
): PresenceEntry[] {
  const [presences, setPresences] = useState<PresenceEntry[]>([]);
  const socketRef = useRef<WebSocket | null>(null);
  const retryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const retryDelayRef = useRef(1000);
  const closedRef = useRef(false);
  const lastInteractionRef = useRef(Date.now());
  const heartbeatIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );
  const sessionIdRef = useRef(sessionId);

  // Keep sessionId ref in sync so heartbeat always uses the current sessionId.
  useEffect(() => {
    sessionIdRef.current = sessionId;
  }, [sessionId]);

  // When sessionId changes, send an immediate heartbeat so presence reflects
  // the new session without waiting for the next 15s interval.
  useEffect(() => {
    if (!sessionId || env.NEXT_PUBLIC_DISABLE_AUTH) return;
    const ws = socketRef.current;
    if (ws?.readyState === WebSocket.OPEN) {
      const status = computeStatus(lastInteractionRef.current);
      ws.send(JSON.stringify({ type: "heartbeat", sessionId, status }));
    }
  }, [sessionId]);

  // Track user interactions when sessionId is provided (heartbeat status).
  useEffect(() => {
    if (!sessionId || env.NEXT_PUBLIC_DISABLE_AUTH) return;

    const onInteraction = () => {
      lastInteractionRef.current = Date.now();
    };

    const events = ["mousemove", "keydown", "click", "scroll"] as const;
    for (const evt of events) {
      document.addEventListener(evt, onInteraction, { passive: true });
    }

    return () => {
      for (const evt of events) {
        document.removeEventListener(evt, onInteraction);
      }
    };
  }, [sessionId]);

  // Send leave message on tab close.
  useEffect(() => {
    const onBeforeUnload = () => {
      const ws = socketRef.current;
      if (ws?.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: "leave" }));
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  useEffect(() => {
    if (!enabled || !projectId) {
      // Explicitly disabled or no project: clear stale data.
      setPresences([]);
      return;
    }

    closedRef.current = false;
    retryDelayRef.current = 1000;

    const sendHeartbeat = (ws: WebSocket) => {
      const sid = sessionIdRef.current;
      if (!sid || ws.readyState !== WebSocket.OPEN) return;
      const status = computeStatus(lastInteractionRef.current);
      ws.send(JSON.stringify({ type: "heartbeat", sessionId: sid, status }));
    };

    const connect = () => {
      if (closedRef.current) return;

      const protocol = window.location.protocol === "https:" ? "wss" : "ws";
      const ws = new WebSocket(
        `${protocol}://${window.location.host}/presence/${projectId}`,
      );
      socketRef.current = ws;

      ws.onmessage = (event) => {
        try {
          setPresences(JSON.parse(event.data as string) as PresenceEntry[]);
        } catch {
          // malformed frame — ignore
        }
      };

      ws.onopen = () => {
        retryDelayRef.current = 1000;
        // Send initial heartbeat immediately on connect (if tracking).
        if (sessionIdRef.current && !env.NEXT_PUBLIC_DISABLE_AUTH) {
          sendHeartbeat(ws);
          heartbeatIntervalRef.current = setInterval(
            () => sendHeartbeat(ws),
            HEARTBEAT_INTERVAL_MS,
          );
        }
      };

      ws.onclose = () => {
        clearInterval(heartbeatIntervalRef.current ?? undefined);
        heartbeatIntervalRef.current = null;
        if (closedRef.current) return;
        // Back-off reconnect. Presences are intentionally kept so the UI
        // does not flash empty while reconnecting.
        retryTimerRef.current = setTimeout(() => {
          retryDelayRef.current = Math.min(
            retryDelayRef.current * 2,
            MAX_RETRY_DELAY_MS,
          );
          connect();
        }, retryDelayRef.current);
      };

      ws.onerror = () => ws.close();
    };

    connect();

    return () => {
      closedRef.current = true;
      clearInterval(heartbeatIntervalRef.current ?? undefined);
      heartbeatIntervalRef.current = null;
      if (retryTimerRef.current) clearTimeout(retryTimerRef.current);
      const ws = socketRef.current;
      if (ws) {
        // Send leave before closing so presence is removed immediately.
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "leave" }));
        }
        ws.close();
        socketRef.current = null;
      }
      // Do NOT call setPresences([]) here — keep last known data until the
      // new connection sends fresh state. Clear happens above when disabled.
    };
  }, [enabled, projectId]);

  return presences;
}
