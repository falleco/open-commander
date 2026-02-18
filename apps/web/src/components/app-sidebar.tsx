"use client";

import {
  ChevronDown,
  Keyboard,
  LayoutDashboard,
  Loader2,
  Menu,
  Plus,
  Settings,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { BranchSelectorModal } from "@/components/projects/branch-selector-modal";
import { useProject } from "@/components/projects/project-context";
import { ProjectIcon } from "@/components/projects/project-icon";
import { SessionPresenceAvatars } from "@/components/projects/session-presence-avatars";
import { useShortcuts } from "@/components/shortcuts";
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
  const router = useRouter();
  const { isMobileOpen, setMobileOpen } = useAppSidebarContext();
  const { openShortcuts } = useShortcuts();
  const {
    selectedProjectId,
    selectedSessionId,
    setCreateModalOpen,
    markSessionCreated,
    setSessionGitBranch,
  } = useProject();
  const [mobileCreatePending, setMobileCreatePending] = useState(false);
  const [mobileDefaultName, setMobileDefaultName] = useState("");
  const utils = api.useUtils();
  const activePage = pathname.startsWith("/settings")
    ? "settings"
    : pathname === "/dashboard" || pathname === "/"
      ? "dashboard"
      : null;

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

  const mobilePresenceEnabled =
    !env.NEXT_PUBLIC_DISABLE_AUTH && Boolean(expandedProjectId);
  const mobilePresenceQuery = api.presence.listByProject.useQuery(
    { projectId: expandedProjectId ?? "" },
    { enabled: mobilePresenceEnabled, refetchInterval: 5000 },
  );
  const mobilePresences = mobilePresenceQuery.data ?? [];

  const createSessionMutation = api.project.createSession.useMutation({
    onSuccess: (session, variables) => {
      void utils.project.listSessions.invalidate({
        projectId: variables.projectId,
      });
      markSessionCreated(session.id);
      router.push(`/projects/${variables.projectId}/sessions/${session.id}`);
      setMobileOpen(false);
    },
  });

  const handleMobileCreateSession = useCallback(() => {
    if (!expandedProjectId) return;
    setMobileDefaultName(randomSessionName());
    setMobileCreatePending(true);
  }, [expandedProjectId]);

  const handleMobileBranchConfirm = useCallback(
    (sessionName: string, gitBranch: string) => {
      if (!expandedProjectId) return;
      createSessionMutation.mutate(
        { projectId: expandedProjectId, name: sessionName },
        {
          onSuccess: (session) => {
            if (gitBranch) setSessionGitBranch(session.id, gitBranch);
          },
        },
      );
      setMobileCreatePending(false);
    },
    [expandedProjectId, createSessionMutation, setSessionGitBranch],
  );

  const handleMobileProjectClick = (projectId: string) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
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
                Menu
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

            {/* Dashboard link */}
            <div className="mt-4 flex flex-col gap-1">
              <Link
                href="/dashboard"
                className={`${mobileLinkBase} w-full text-left ${
                  activePage === "dashboard"
                    ? "bg-purple-500/25 text-purple-200"
                    : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <LayoutDashboard aria-hidden="true" {...iconProps} />
                Dashboard
              </Link>
            </div>

            {/* Projects header */}
            <div className="mt-6 mb-2">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Projects
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {projects.length === 0 ? (
                <p className="px-3 py-4 text-xs text-slate-500">
                  No projects yet.
                </p>
              ) : (
                projects.map(
                  (project: {
                    id: string;
                    name: string;
                    shared: boolean;
                    userId: string;
                  }) => {
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
                          {project.shared && (
                            <Users
                              className="h-3.5 w-3.5 shrink-0 text-purple-400"
                              strokeWidth={1.6}
                              aria-hidden
                            />
                          )}
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
                              buildSessionTree(mobileSessions).map((node) => {
                                const {
                                  session,
                                  depth,
                                  relationType,
                                  isLastChild,
                                  connectorColumns,
                                } = node;
                                const isActive =
                                  selectedProjectId === project.id &&
                                  session.id === selectedSessionId;
                                const dotColor =
                                  session.status === "running"
                                    ? "bg-emerald-400"
                                    : session.status === "starting" ||
                                        session.status === "pending"
                                      ? "bg-yellow-400"
                                      : "bg-slate-500";
                                return (
                                  <div
                                    key={session.id}
                                    className="relative"
                                    style={{ paddingLeft: `${depth * 20}px` }}
                                  >
                                    {/* Downward line from parent dot to children */}
                                    {node.hasChildren && (
                                      <span
                                        className="pointer-events-none absolute"
                                        style={{
                                          left: `${depth * 20 + 16}px`,
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
                                          left: `${col * 20 + 16}px`,
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
                                        style={{
                                          left: `${depth * 20 + 16}px`,
                                          top: "-4px",
                                        }}
                                        aria-hidden
                                      >
                                        <span
                                          className="absolute left-0 top-0 w-px bg-slate-600"
                                          style={{
                                            height: isLastChild
                                              ? "calc(50% + 2px)"
                                              : "100%",
                                          }}
                                        />
                                      </span>
                                    )}
                                    {/* Stack connector — L-shape from parent column */}
                                    {relationType === "stack" && (
                                      <span
                                        className="pointer-events-none absolute bottom-0"
                                        style={{
                                          left: `${(depth - 1) * 20 + 16}px`,
                                          top: "-4px",
                                        }}
                                        aria-hidden
                                      >
                                        <span
                                          className="absolute left-0 top-0 w-px bg-slate-600"
                                          style={{
                                            height: isLastChild
                                              ? "calc(50% + 2px)"
                                              : "100%",
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
                                      className={`flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors ${
                                        isActive
                                          ? "bg-emerald-400/15 text-emerald-200"
                                          : "text-slate-300 hover:bg-white/5 hover:text-slate-100"
                                      }`}
                                      onClick={() => {
                                        router.push(
                                          `/projects/${project.id}/sessions/${session.id}`,
                                        );
                                        setMobileOpen(false);
                                      }}
                                    >
                                      <span
                                        className={`relative z-10 h-2 w-2 shrink-0 rounded-full ${dotColor}`}
                                        aria-hidden
                                      />
                                      <span className="truncate">
                                        {session.name}
                                      </span>
                                      <span className="ml-auto">
                                        <SessionPresenceAvatars
                                          sessionId={session.id}
                                          presences={mobilePresences}
                                        />
                                      </span>
                                    </button>
                                  </div>
                                );
                              })
                            )}
                          </div>
                        )}
                      </div>
                    );
                  },
                )
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
      <aside className="hidden w-16 flex-col items-center justify-between border-r border-purple-500/25 bg-(--oc-panel) px-1.5 py-4 md:flex">
        <TooltipProvider delayDuration={300}>
          <div className="flex flex-col items-center gap-3">
            {/* Dashboard icon — first item */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard"
                  className={linkClass(activePage === "dashboard")}
                  aria-label="Dashboard"
                  aria-current={activePage === "dashboard" ? "page" : undefined}
                >
                  <LayoutDashboard aria-hidden="true" {...iconProps} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>

            {/* Separator */}
            <div className="h-px w-8 bg-purple-500/25" />

            {/* Project icons */}
            {projects.map(
              (project: {
                id: string;
                name: string;
                shared: boolean;
                userId: string;
              }) => (
                <ProjectIcon
                  key={project.id}
                  name={project.name}
                  isActive={selectedProjectId === project.id}
                  href={`/projects/${project.id}`}
                  shared={project.shared}
                />
              ),
            )}
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

      <BranchSelectorModal
        open={mobileCreatePending}
        workspaceSuffix={
          (
            projects.find((p: { id: string }) => p.id === expandedProjectId) as
              | { folder?: string }
              | undefined
          )?.folder ?? ""
        }
        title="Create session"
        defaultName={mobileDefaultName}
        onClose={() => setMobileCreatePending(false)}
        onConfirm={handleMobileBranchConfirm}
      />
    </>
  );
}
