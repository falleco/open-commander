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
import { ShortcutsModal } from "./shortcuts-modal";
import type { ShortcutItem } from "./shortcuts-types";

function isMac(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}

const modKey = isMac() ? "⌘" : "Ctrl";

const GLOBAL_SHORTCUTS: ShortcutItem[] = [
  {
    id: "open-shortcuts",
    keys: [modKey, "K"],
    description: "Open shortcuts",
    category: "General",
  },
];

type ShortcutsContextValue = {
  openShortcuts: (focusSearch?: boolean) => void;
  closeShortcuts: () => void;
  /** @deprecated Use registerShortcuts / unregisterShortcuts instead. */
  setPageShortcuts: (shortcuts: ShortcutItem[]) => void;
  /** Register shortcuts under a unique key. Multiple sources are merged. */
  registerShortcuts: (key: string, shortcuts: ShortcutItem[]) => void;
  /** Remove shortcuts registered under the given key. */
  unregisterShortcuts: (key: string) => void;
  /** True when the shortcuts modal is open (e.g. so pages skip handling their shortcuts). */
  shortcutsOpen: boolean;
};

const ShortcutsContext = createContext<ShortcutsContextValue | null>(null);

export function useShortcuts() {
  const ctx = useContext(ShortcutsContext);
  if (!ctx) {
    throw new Error("useShortcuts must be used within a ShortcutsProvider.");
  }
  return ctx;
}

type ShortcutsProviderProps = {
  children: ReactNode;
};

/**
 * Provides shortcut modal state and global Cmd+K / Ctrl+K to open it.
 * Pages can register extra shortcuts via setPageShortcuts.
 */
export function ShortcutsProvider({ children }: ShortcutsProviderProps) {
  const [open, setOpen] = useState(false);
  const [focusSearchOnOpen, setFocusSearchOnOpen] = useState(false);
  const [shortcutSources, setShortcutSources] = useState<
    Record<string, ShortcutItem[]>
  >({});
  const shortcutSourcesRef = useRef(shortcutSources);
  shortcutSourcesRef.current = shortcutSources;

  const openShortcuts = useCallback((focusSearch = false) => {
    setFocusSearchOnOpen(focusSearch);
    setOpen(true);
  }, []);

  const closeShortcuts = useCallback(() => setOpen(false), []);

  const registerShortcuts = useCallback(
    (key: string, shortcuts: ShortcutItem[]) => {
      setShortcutSources((prev) => ({ ...prev, [key]: shortcuts }));
    },
    [],
  );

  const unregisterShortcuts = useCallback((key: string) => {
    setShortcutSources((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  /** Backwards-compat wrapper: registers under the "page" key. */
  const setPageShortcuts = useCallback(
    (shortcuts: ShortcutItem[]) => {
      if (shortcuts.length === 0) {
        unregisterShortcuts("page");
      } else {
        registerShortcuts("page", shortcuts);
      }
    },
    [registerShortcuts, unregisterShortcuts],
  );

  const allShortcuts = useMemo(
    () => [...GLOBAL_SHORTCUTS, ...Object.values(shortcutSources).flat()],
    [shortcutSources],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openShortcuts(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openShortcuts]);

  const value = useMemo<ShortcutsContextValue>(
    () => ({
      openShortcuts,
      closeShortcuts,
      setPageShortcuts,
      registerShortcuts,
      unregisterShortcuts,
      shortcutsOpen: open,
    }),
    [
      openShortcuts,
      closeShortcuts,
      setPageShortcuts,
      registerShortcuts,
      unregisterShortcuts,
      open,
    ],
  );

  return (
    <ShortcutsContext.Provider value={value}>
      {children}
      <ShortcutsModal
        open={open}
        onClose={closeShortcuts}
        shortcuts={allShortcuts}
        focusSearchOnOpen={focusSearchOnOpen}
      />
    </ShortcutsContext.Provider>
  );
}

export { modKey };
