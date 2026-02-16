"use client";

import {
  ChevronDown,
  Keyboard,
  Loader2,
  Menu,
  Plus,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useProject } from "@/components/projects/project-context";
import { ProjectIcon } from "@/components/projects/project-icon";
import { useShortcuts } from "@/components/shortcuts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { api } from "@/trpc/react";

const navButtonBase =
  "flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-purple-500/15 hover:text-purple-300";

const iconProps = { className: "h-5 w-5", strokeWidth: 1.6 };
const iconPropsSmall = { className: "h-4 w-4", strokeWidth: 1.6 };

type AppSidebarContextValue = {
  isMobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
};

const AppSidebarContext = createContext<AppSidebarContextValue | null>(null);

type AppSidebarProviderProps = {
  children: ReactNode;
};

export function AppSidebarProvider({ children }: AppSidebarProviderProps) {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const value = useMemo(
    () => ({ isMobileOpen, setMobileOpen }),
    [isMobileOpen],
  );
  return (
    <AppSidebarContext.Provider value={value}>
      {children}
    </AppSidebarContext.Provider>
  );
}

function useAppSidebarContext() {
  const context = useContext(AppSidebarContext);
  if (!context) {
    throw new Error(
      "AppSidebar components must be wrapped in AppSidebarProvider.",
    );
  }
  return context;
}

export { useAppSidebarContext };

type AppSidebarToggleProps = {
  className?: string;
};

export function AppSidebarToggle({ className }: AppSidebarToggleProps) {
  const { setMobileOpen } = useAppSidebarContext();
  return (
    <button
      type="button"
      className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-purple-500/15 hover:text-purple-300 ${className ?? ""}`}
      aria-label="Open menu"
      title="Menu"
      onClick={() => setMobileOpen(true)}
    >
      <Menu aria-hidden="true" {...iconProps} />
    </button>
  );
}

export function AppSidebar() {
  const pathname = usePathname() ?? "/";
  const { isMobileOpen, setMobileOpen } = useAppSidebarContext();
  const { openShortcuts } = useShortcuts();
  const {
    selectedProjectId,
    setSelectedProjectId,
    selectedSessionId,
    setSelectedSessionId,
    setCreateModalOpen,
    markSessionCreated,
  } = useProject();
  const utils = api.useUtils();
  const activePage = pathname.startsWith("/settings") ? "settings" : null;

  const projectsQuery = api.project.list.useQuery();
  const projects = projectsQuery.data ?? [];

  // Mobile accordion: track which project is expanded
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    null,
  );

  const sessionsQuery = api.project.listSessions.useQuery(
    { projectId: expandedProjectId ?? "" },
    { enabled: Boolean(expandedProjectId), refetchInterval: 5000 },
  );
  const mobileSessions = sessionsQuery.data ?? [];

  const createSessionMutation = api.project.createSession.useMutation({
    onSuccess: (session) => {
      void utils.project.listSessions.invalidate({
        projectId: expandedProjectId ?? "",
      });
      markSessionCreated(session.id);
      setSelectedSessionId(session.id);
      setMobileOpen(false);
    },
  });

  const handleMobileCreateSession = useCallback(() => {
    if (!expandedProjectId) return;
    const count = mobileSessions.length + 1;
    createSessionMutation.mutate({
      projectId: expandedProjectId,
      name: `Session ${count}`,
    });
  }, [expandedProjectId, mobileSessions.length, createSessionMutation]);

  const handleProjectClick = (projectId: string) => {
    if (selectedProjectId === projectId) {
      setSelectedProjectId(null);
    } else {
      setSelectedProjectId(projectId);
    }
  };

  const handleMobileProjectClick = (projectId: string) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
      setSelectedProjectId(projectId);
    }
  };

  const openCreateProjectModal = () => setCreateModalOpen(true);

  const linkClass = (isActive: boolean) =>
    `${navButtonBase} ${isActive ? "bg-purple-500/25 text-purple-200" : ""}`;
  const mobileLinkBase =
    "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-purple-500/15 hover:text-purple-300";

  return (
    <>
      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isMobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMobileOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
            isMobileOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`relative z-10 flex h-full w-64 flex-col justify-between border-r border-purple-500/25 bg-(--oc-panel) px-4 py-6 backdrop-blur transition-transform duration-200 ease-out ${
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Projects
              </span>
              <button
                type="button"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-purple-500/15 hover:text-purple-300"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X aria-hidden="true" {...iconPropsSmall} />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              {projects.length === 0 ? (
                <p className="px-3 py-4 text-xs text-slate-500">
                  No projects yet.
                </p>
              ) : (
                projects.map((project: { id: string; name: string }) => {
                  const isExpanded = expandedProjectId === project.id;
                  return (
                    <div key={project.id}>
                      <button
                        type="button"
                        className={`${mobileLinkBase} w-full text-left ${
                          selectedProjectId === project.id
                            ? "bg-emerald-400/15 text-emerald-200"
                            : ""
                        }`}
                        onClick={() => handleMobileProjectClick(project.id)}
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-white/10 text-[10px] font-bold uppercase">
                          {project.name.slice(0, 2)}
                        </span>
                        <span className="min-w-0 flex-1 truncate">
                          {project.name}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-150 ${isExpanded ? "rotate-0" : "-rotate-90"}`}
                          strokeWidth={1.6}
                          aria-hidden
                        />
                      </button>

                      {isExpanded && (
                        <div className="flex flex-col gap-0.5 py-1 pl-5">
                          {/* Create session — always first */}
                          <button
                            type="button"
                            className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-emerald-400 transition-colors hover:bg-emerald-400/10 hover:text-emerald-300"
                            onClick={handleMobileCreateSession}
                            disabled={createSessionMutation.isPending}
                          >
                            {createSessionMutation.isPending ? (
                              <Loader2
                                className="h-3.5 w-3.5 animate-spin"
                                aria-hidden
                              />
                            ) : (
                              <Plus
                                className="h-3.5 w-3.5"
                                strokeWidth={2}
                                aria-hidden
                              />
                            )}
                            Create Session
                          </button>

                          {sessionsQuery.isLoading ? (
                            <div className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500">
                              <Loader2
                                className="h-3 w-3 animate-spin"
                                aria-hidden
                              />
                              Loading…
                            </div>
                          ) : (
                            mobileSessions.map((session) => {
                              const isActive = session.id === selectedSessionId;
                              const dotColor =
                                session.status === "running"
                                  ? "bg-emerald-400"
                                  : session.status === "starting" ||
                                      session.status === "pending"
                                    ? "bg-yellow-400"
                                    : "bg-slate-500";
                              return (
                                <button
                                  key={session.id}
                                  type="button"
                                  className={`flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors ${
                                    isActive
                                      ? "bg-emerald-400/15 text-emerald-200"
                                      : "text-slate-300 hover:bg-white/5 hover:text-slate-100"
                                  }`}
                                  onClick={() => {
                                    setSelectedSessionId(session.id);
                                    setMobileOpen(false);
                                  }}
                                >
                                  <span
                                    className={`h-2 w-2 shrink-0 rounded-full ${dotColor}`}
                                    aria-hidden
                                  />
                                  <span className="truncate">
                                    {session.name}
                                  </span>
                                </button>
                              );
                            })
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
              <button
                type="button"
                className={`${mobileLinkBase} w-full text-left text-emerald-300 hover:text-emerald-200`}
                onClick={() => {
                  openCreateProjectModal();
                  setMobileOpen(false);
                }}
              >
                <Plus aria-hidden="true" {...iconProps} />
                New Project
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <button
              type="button"
              className={`${mobileLinkBase} w-full text-left`}
              onClick={() => {
                openShortcuts(true);
                setMobileOpen(false);
              }}
            >
              <Keyboard aria-hidden="true" {...iconProps} />
              Shortcuts
            </button>
            <Link
              href="/settings"
              className={`${mobileLinkBase} ${activePage === "settings" ? "bg-purple-500/25 text-purple-200" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <Settings aria-hidden="true" {...iconProps} />
              Settings
            </Link>
          </div>
        </aside>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden w-16 flex-col items-center justify-between border-r border-purple-500/25 bg-(--oc-panel) px-1.5 py-6 md:flex">
        <TooltipProvider delayDuration={300}>
          <div className="flex flex-col items-center gap-3">
            {projects.map((project: { id: string; name: string }) => (
              <ProjectIcon
                key={project.id}
                name={project.name}
                isActive={selectedProjectId === project.id}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-dashed border-slate-600 text-slate-500 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300"
                  aria-label="New project"
                  onClick={openCreateProjectModal}
                >
                  <Plus className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">New Project</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className={navButtonBase}
                  aria-label="Shortcuts"
                  onClick={() => openShortcuts(true)}
                >
                  <Keyboard aria-hidden="true" {...iconProps} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">Shortcuts</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/settings"
                  className={linkClass(activePage === "settings")}
                  aria-label="Settings"
                  aria-current={activePage === "settings" ? "page" : undefined}
                >
                  <Settings aria-hidden="true" {...iconProps} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </aside>
    </>
  );
}
