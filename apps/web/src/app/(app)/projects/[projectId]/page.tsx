"use client";

import { usePageTitle } from "@/hooks/use-page-title";

/**
 * Project page — sessions panel is visible via layout, user picks a session.
 */
export default function ProjectPage() {
  usePageTitle("Project");

  return (
    <div className="relative z-10 flex flex-1 items-center justify-center">
      <p className="text-sm text-slate-500">Select a session from the panel.</p>
    </div>
  );
}
