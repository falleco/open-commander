"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const STORAGE_PROJECT_KEY = "open-commander.selected-project";
const STORAGE_SESSION_KEY = "open-commander.project-session";

type ProjectContextValue = {
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
};

const ProjectContext = createContext<ProjectContextValue | null>(null);

/**
 * Provides project selection state persisted in localStorage.
 */
export function ProjectProvider({ children }: { children: ReactNode }) {
  const [selectedProjectId, setSelectedProjectIdRaw] = useState<string | null>(
    null,
  );
  const [selectedSessionId, setSelectedSessionIdRaw] = useState<string | null>(
    null,
  );
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const newSessionsRef = useRef(new Set<string>());

  useEffect(() => {
    const storedProject =
      window.localStorage.getItem(STORAGE_PROJECT_KEY) || null;
    const storedSession =
      window.localStorage.getItem(STORAGE_SESSION_KEY) || null;
    if (storedProject) setSelectedProjectIdRaw(storedProject);
    if (storedSession) setSelectedSessionIdRaw(storedSession);
    setHydrated(true);
  }, []);

  const setSelectedProjectId = useCallback((id: string | null) => {
    setSelectedProjectIdRaw(id);
    if (id) {
      window.localStorage.setItem(STORAGE_PROJECT_KEY, id);
    } else {
      window.localStorage.removeItem(STORAGE_PROJECT_KEY);
    }
    setSelectedSessionIdRaw(null);
    window.localStorage.removeItem(STORAGE_SESSION_KEY);
  }, []);

  const setSelectedSessionId = useCallback((id: string | null) => {
    setSelectedSessionIdRaw(id);
    if (id) {
      window.localStorage.setItem(STORAGE_SESSION_KEY, id);
    } else {
      window.localStorage.removeItem(STORAGE_SESSION_KEY);
    }
  }, []);

  const markSessionCreated = useCallback((sessionId: string) => {
    newSessionsRef.current.add(sessionId);
  }, []);

  const isNewSession = useCallback((sessionId: string) => {
    return newSessionsRef.current.has(sessionId);
  }, []);

  const clearNewSession = useCallback((sessionId: string) => {
    newSessionsRef.current.delete(sessionId);
  }, []);

  const isPanelOpen = hydrated && selectedProjectId !== null;

  const value = useMemo(
    () => ({
      selectedProjectId: hydrated ? selectedProjectId : null,
      setSelectedProjectId,
      selectedSessionId: hydrated ? selectedSessionId : null,
      setSelectedSessionId,
      isPanelOpen,
      createModalOpen,
      setCreateModalOpen,
      markSessionCreated,
      isNewSession,
      clearNewSession,
    }),
    [
      hydrated,
      selectedProjectId,
      setSelectedProjectId,
      selectedSessionId,
      setSelectedSessionId,
      isPanelOpen,
      createModalOpen,
      markSessionCreated,
      isNewSession,
      clearNewSession,
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
