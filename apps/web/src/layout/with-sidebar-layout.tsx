"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { AppNavbar } from "@/components/app-navbar";
import { AppSidebar, AppSidebarProvider } from "@/components/app-sidebar";
import {
  CreateProjectModal,
  ProjectProvider,
  ProjectSessionsPanel,
  useProject,
} from "@/components/projects";
import Squares from "@/components/squares";
import { env } from "@/env";
import { usePresenceWebSocket } from "@/hooks/use-presence-websocket";
import type { AuthUserType } from "@/server/auth";

type WithSidebarLayoutProps = {
  showSquaresBackground?: boolean;
  children?: ReactNode;
  hideSidebar?: boolean;
  user?: AuthUserType;
};

/**
 * Inner layout that consumes ProjectContext for the create-project modal
 * and conditional panels.
 */
function LayoutInner({
  showSquaresBackground,
  children,
  hideSidebar,
  user,
}: WithSidebarLayoutProps) {
  const {
    createModalOpen,
    setCreateModalOpen,
    selectedProjectId,
    selectedSessionId,
    setSelectedProjectId,
  } = useProject();

  usePresenceWebSocket(
    selectedProjectId,
    selectedSessionId,
    !env.NEXT_PUBLIC_DISABLE_AUTH && Boolean(selectedProjectId),
  );

  const pathname = usePathname() ?? "";
  const isTerminalPage = /^\/projects\/[^/]+\/sessions\/[^/]+/.test(pathname);

  return (
    <AppSidebarProvider>
      <div className="h-dvh overscroll-none bg-background text-white">
        <div className="flex h-full flex-col overflow-hidden">
          <AppNavbar user={user} />

          <div className="flex min-h-0 flex-1">
            {!hideSidebar && <AppSidebar />}
            <ProjectSessionsPanel />
            <main
              className={`relative flex min-h-0 flex-1 flex-col ${
                isTerminalPage
                  ? "gap-0 overflow-hidden p-0 md:gap-8 md:p-8"
                  : "gap-4 overflow-y-auto p-4 md:gap-8 md:p-8"
              }`}
            >
              {showSquaresBackground && !isTerminalPage && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="h-full w-full">
                    <Squares
                      direction="diagonal"
                      speed={0.5}
                      squareSize={40}
                      borderColor="#271E37"
                      hoverFillColor="#222222"
                    />
                  </div>
                </div>
              )}
              {children}
            </main>
          </div>
        </div>
      </div>

      <CreateProjectModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreated={(project) => {
          setSelectedProjectId(project.id);
        }}
      />
    </AppSidebarProvider>
  );
}

export function WithSidebarLayout(props: WithSidebarLayoutProps) {
  return (
    <ProjectProvider userId={props.user?.id}>
      <LayoutInner {...props} />
    </ProjectProvider>
  );
}
