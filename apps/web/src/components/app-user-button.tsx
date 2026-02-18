"use client";

import { User } from "lucide-react";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export type AppUserButtonRef = { close: () => void };

export type AppUserButtonMenuItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  onClick?: () => Promise<void>;
  /** Extra CSS classes for the menu item (e.g. responsive visibility). */
  className?: string;
};

type AppUserButtonProps = {
  menuEntries: AppUserButtonMenuItem[];
  avatarSrc?: string | null;
  avatarAlt?: string;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
};

export const AppUserButton = forwardRef<AppUserButtonRef, AppUserButtonProps>(
  function AppUserButton(
    {
      menuEntries,
      avatarSrc,
      avatarAlt = "User avatar",
      className,
      onOpen,
      onClose,
    },
    ref,
  ) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const close = useCallback(() => {
      setOpen(false);
      onClose?.();
    }, [onClose]);

    const openMenu = useCallback(() => {
      setOpen(true);
      onOpen?.();
    }, [onOpen]);

    useImperativeHandle(ref, () => ({ close }), [close]);

    useEffect(() => {
      if (!open) return;
      const handleClickOutside = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          close();
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, [open, close]);

    const toggle = () => (open ? close() : openMenu());

    return (
      <div className={cn("relative", className)} ref={wrapperRef}>
        <button
          type="button"
          className="flex items-center justify-center rounded-full outline-none ring-purple-400/50 transition focus-visible:ring-2"
          onClick={toggle}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label="User menu"
        >
          <Avatar className="h-9 w-9 cursor-pointer border-purple-500/30 hover:border-purple-400/50">
            <AvatarImage src={avatarSrc ?? undefined} alt={avatarAlt} />
            <AvatarFallback className="text-purple-300">
              <User className="h-4 w-4" strokeWidth={2} aria-hidden />
            </AvatarFallback>
          </Avatar>
        </button>

        <div
          className={cn(
            "absolute right-0 top-full z-50 mt-2 min-w-48 origin-top-right rounded-lg border border-purple-500/25 bg-(--oc-panel-strong) py-1 shadow-xl transition-all duration-200 ease-out",
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
          role="menu"
          aria-hidden={!open}
        >
          {menuEntries.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm text-slate-200 transition hover:bg-purple-500/15 hover:text-white",
                  item.className,
                )}
                role="menuitem"
                onClick={() => {
                  if (item.onClick) {
                    item.onClick();
                  }
                  close();
                }}
              >
                <Icon
                  className="h-4 w-4 shrink-0"
                  strokeWidth={2}
                  aria-hidden
                />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    );
  },
);
