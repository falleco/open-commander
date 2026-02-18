"use client";

import { Users } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ProjectIconProps = {
  name: string;
  isActive: boolean;
  href: string;
  shared?: boolean;
};

/**
 * Extracts up to 2 initials from a project name.
 * "My App" -> "MA", "backend" -> "BA"
 */
function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

/**
 * Sidebar icon for a project. Renders as a Link for proper URL navigation.
 */
export function ProjectIcon({
  name,
  isActive,
  href,
  shared,
}: ProjectIconProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={`relative flex h-11 w-11 items-center justify-center rounded-lg text-xs font-bold tracking-wide transition-colors ${
            isActive
              ? "bg-emerald-400/20 text-emerald-300 ring-2 ring-emerald-400/40"
              : "bg-white/10 text-slate-300 hover:bg-purple-500/15 hover:text-purple-300"
          }`}
          aria-label={name}
        >
          {getInitials(name)}
          {shared && (
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-purple-500 ring-1 ring-purple-400/40">
              <Users className="h-2 w-2 text-white" strokeWidth={2.5} />
            </span>
          )}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">
        {name}
        {shared ? " (shared)" : ""}
      </TooltipContent>
    </Tooltip>
  );
}
