"use client";

import { useParams, useRouter } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

type ProjectContextValue = {
  currentUserId: string | null;
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
  selectedSessionId: string | null;
  setSelectedSessionId: (id: string | null) => void;
  isPanelOpen: boolean;
  createModalOpen: boolean;
  setCreateModalOpen: (open: boolean) => void;
  /** Mark a session as just-created (shows "Creating session" overlay). */
  markSessionCreated: (sessionId: string) => void;
  /** Check whether a session was just-created in this tab. */
  isNewSession: (sessionId: string) => boolean;
  /** Clear the "new" flag (called after successful connection). */
  clearNewSession: (sessionId: string) => void;
  /** Store the git branch chosen when a session was created. */
  setSessionGitBranch: (sessionId: string, branch: string) => void;
  /** Retrieve the git branch chosen for a session. */
  getSessionGitBranch: (sessionId: string) => string;
};

const ProjectContext = createContext<ProjectContextValue | null>(null);

/**
 * Provides project/session selection state derived from URL params.
 * Navigation is done via router.push so URLs are the source of truth.
 */
export function ProjectProvider({
  children,
  userId,
}: {
  children: ReactNode;
  userId?: string;
}) {
  const params = useParams();
  const router = useRouter();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const newSessionsRef = useRef(new Set<string>());
  const sessionBranchesRef = useRef(new Map<string, string>());

  const selectedProjectId =
    typeof params?.projectId === "string" ? params.projectId : null;
  const selectedSessionId =
    typeof params?.sessionId === "string" ? params.sessionId : null;

  const setSelectedProjectId = useCallback(
    (id: string | null) => {
      if (id) {
        router.push(`/projects/${id}`);
      } else {
        router.push("/dashboard");
      }
    },
    [router],
  );

  const setSelectedSessionId = useCallback(
    (id: string | null) => {
      if (id && selectedProjectId) {
        router.push(`/projects/${selectedProjectId}/sessions/${id}`);
      } else if (selectedProjectId) {
        router.push(`/projects/${selectedProjectId}`);
      } else {
        router.push("/dashboard");
      }
    },
    [router, selectedProjectId],
  );

  const markSessionCreated = useCallback((sessionId: string) => {
    newSessionsRef.current.add(sessionId);
  }, []);

  const isNewSession = useCallback((sessionId: string) => {
    return newSessionsRef.current.has(sessionId);
  }, []);

  const clearNewSession = useCallback((sessionId: string) => {
    newSessionsRef.current.delete(sessionId);
  }, []);

  const setSessionGitBranch = useCallback(
    (sessionId: string, branch: string) => {
      sessionBranchesRef.current.set(sessionId, branch);
    },
    [],
  );

  const getSessionGitBranch = useCallback((sessionId: string) => {
    return sessionBranchesRef.current.get(sessionId) ?? "";
  }, []);

  const isPanelOpen = selectedProjectId !== null;

  const currentUserId = userId ?? null;

  const value = useMemo(
    () => ({
      currentUserId,
      selectedProjectId,
      setSelectedProjectId,
      selectedSessionId,
      setSelectedSessionId,
      isPanelOpen,
      createModalOpen,
      setCreateModalOpen,
      markSessionCreated,
      isNewSession,
      clearNewSession,
      setSessionGitBranch,
      getSessionGitBranch,
    }),
    [
      currentUserId,
      selectedProjectId,
      setSelectedProjectId,
      selectedSessionId,
      setSelectedSessionId,
      isPanelOpen,
      createModalOpen,
      markSessionCreated,
      isNewSession,
      clearNewSession,
      setSessionGitBranch,
      getSessionGitBranch,
    ],
  );

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within ProjectProvider.");
  }
  return context;
}
