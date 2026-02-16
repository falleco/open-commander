"use client";

import type { ReactNode } from "react";
import { AppNavbar } from "@/components/app-navbar";
import { AppSidebar, AppSidebarProvider } from "@/components/app-sidebar";
import {
  CreateProjectModal,
  ProjectProvider,
  ProjectSessionsPanel,
  ProjectTerminalView,
  useProject,
} from "@/components/projects";
import Squares from "@/components/squares";
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

  const showInlineTerminal = Boolean(selectedProjectId && selectedSessionId);

  return (
    <AppSidebarProvider>
      <div className="min-h-screen bg-background text-white">
        <div className="flex min-h-screen flex-col">
          <AppNavbar user={user} />

          <div className="flex min-h-0 flex-1">
            {!hideSidebar && <AppSidebar />}
            <ProjectSessionsPanel />
            <main
              className={`relative flex flex-1 flex-col ${
                showInlineTerminal ? "gap-0 p-0 md:gap-8 md:p-8" : "gap-8 p-8"
              }`}
            >
              {showSquaresBackground && !showInlineTerminal && (
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
              {showInlineTerminal ? <ProjectTerminalView /> : children}
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
    <ProjectProvider>
      <LayoutInner {...props} />
    </ProjectProvider>
  );
}
