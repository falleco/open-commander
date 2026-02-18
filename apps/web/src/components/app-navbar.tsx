"use client";

import { CheckSquare, LogOut, Settings, Shield, Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { env } from "@/env";
import type { AuthUserType } from "@/server/auth";
import { authClient } from "@/server/auth/client";
import { AppBrandName } from "./app-brand-name";
import { AppSidebarToggle } from "./app-sidebar";
import { AppStatusButton, type AppStatusButtonRef } from "./app-status-button";
import type { AppUserButtonMenuItem } from "./app-user-button";
import { AppUserButton, type AppUserButtonRef } from "./app-user-button";

const USER_MENU: AppUserButtonMenuItem[] = [
  {
    label: "Sessions",
    href: "/sessions-old",
    icon: Terminal,
    className: "md:hidden",
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
    className: "md:hidden",
  },
  {
    label: "Security",
    href: "/security",
    icon: Shield,
    className: "md:hidden",
  },
  { label: "Settings", href: "/settings", icon: Settings },
  {
    label: "Sign out",
    href: "#",
    icon: LogOut,
    onClick: async () => {
      await authClient.signOut();
      window.location.href = "/";
    },
  },
];

interface Props {
  user?: AuthUserType;
}

const navIconBase =
  "flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-purple-500/15 hover:text-purple-300";
const navIconActive = "bg-purple-500/25 text-purple-200";

export function AppNavbar({ user }: Props) {
  const pathname = usePathname() ?? "/";
  const statusButtonRef = useRef<AppStatusButtonRef>(null);
  const userButtonRef = useRef<AppUserButtonRef>(null);
  const isAuthDisabled = env.NEXT_PUBLIC_DISABLE_AUTH;

  const onStatusOpen = useCallback(() => {
    userButtonRef.current?.close();
  }, []);

  const onUserMenuOpen = useCallback(() => {
    statusButtonRef.current?.close();
  }, []);

  const isSessionsActive = pathname.startsWith("/sessions-old");
  const isTasksActive = pathname.startsWith("/tasks");
  const isSecurityActive = pathname.startsWith("/security");

  let auth = (
    <Link
      type="button"
      className="flex items-center justify-center rounded-full outline-none ring-purple-400/50 transition focus-visible:ring-2"
      href="/login"
    >
      Login
    </Link>
  );

  if (user) {
    auth = (
      <div className="relative flex items-center gap-2">
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/sessions-old"
                className={`hidden md:flex ${navIconBase} ${isSessionsActive ? navIconActive : ""}`}
                aria-label="Sessions"
                aria-current={isSessionsActive ? "page" : undefined}
              >
                <Terminal className="h-4 w-4" strokeWidth={1.6} aria-hidden />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">Sessions</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/tasks"
                className={`hidden md:flex ${navIconBase} ${isTasksActive ? navIconActive : ""}`}
                aria-label="Tasks"
                aria-current={isTasksActive ? "page" : undefined}
              >
                <CheckSquare
                  className="h-4 w-4"
                  strokeWidth={1.6}
                  aria-hidden
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">Tasks</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/security"
                className={`hidden md:flex ${navIconBase} ${isSecurityActive ? navIconActive : ""}`}
                aria-label="Security"
                aria-current={isSecurityActive ? "page" : undefined}
              >
                <Shield className="h-4 w-4" strokeWidth={1.6} aria-hidden />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">Security</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <AppStatusButton ref={statusButtonRef} onOpen={onStatusOpen} />
        {!isAuthDisabled && (
          <AppUserButton
            ref={userButtonRef}
            menuEntries={USER_MENU}
            avatarSrc={
              user.image ??
              `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${encodeURIComponent(user.email)}`
            }
            avatarAlt={user.name ?? "User avatar"}
            onOpen={onUserMenuOpen}
          />
        )}
      </div>
    );
  }

  return (
    <nav className="flex shrink-0 items-center justify-between border-b border-purple-500/25 bg-(--oc-panel) px-4 py-3 md:px-6 md:py-4">
      <div className="flex items-center gap-4">
        <AppSidebarToggle className="md:hidden" />
        <AppBrandName />
      </div>
      {auth}
    </nav>
  );
}
