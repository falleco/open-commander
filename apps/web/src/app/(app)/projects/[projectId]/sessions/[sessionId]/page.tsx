"use client";

import { ProjectTerminalView } from "@/components/projects";
import { usePageTitle } from "@/hooks/use-page-title";

/**
 * Session terminal page — renders the inline terminal for the selected session.
 */
export default function SessionPage() {
  usePageTitle("Session");

  return <ProjectTerminalView />;
}
