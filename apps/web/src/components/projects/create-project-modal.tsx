"use client";

import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { AGENT_IDS, AGENT_LABELS } from "@/lib/agent-preferences";
import { api } from "@/trpc/react";
import { FolderAutocomplete } from "./folder-autocomplete";

type CreateProjectModalProps = {
  open: boolean;
  onClose: () => void;
  onCreated?: (project: {
    id: string;
    name: string;
    folder: string;
    defaultCliId: string | null;
  }) => void;
};

/**
 * Modal for creating a new project. User picks a workspace folder via
 * autocomplete, then the project name auto-fills (editable).
 */
export function CreateProjectModal({
  open,
  onClose,
  onCreated,
}: CreateProjectModalProps) {
  const [folder, setFolder] = useState("");
  const [name, setName] = useState("");
  const [defaultCliId, setDefaultCliId] = useState("");
  const [shared, setShared] = useState(false);
  const [nameManuallyEdited, setNameManuallyEdited] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const utils = api.useUtils();

  const workspaceQuery = api.terminal.workspaceOptions.useQuery(undefined, {
    enabled: open,
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });

  const folderOptions = (workspaceQuery.data?.options ?? []).filter(
    (o) => o.value !== "",
  );

  const createMutation = api.project.create.useMutation({
    onSuccess: (project) => {
      void utils.project.list.invalidate();
      onCreated?.(project);
      resetAndClose();
    },
  });

  const resetAndClose = useCallback(() => {
    setFolder("");
    setName("");
    setDefaultCliId("");
    setShared(false);
    setNameManuallyEdited(false);
    createMutation.reset();
    onClose();
  }, [onClose, createMutation]);

  const handleFolderChange = useCallback(
    (value: string) => {
      setFolder(value);
      if (!nameManuallyEdited && value) {
        setName(value);
      }
    },
    [nameManuallyEdited],
  );

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
      setNameManuallyEdited(true);
    },
    [],
  );

  const handleSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      if (!folder.trim() || !name.trim()) return;
      createMutation.mutate({
        name: name.trim(),
        folder: folder.trim(),
        defaultCliId: defaultCliId || null,
        shared,
      });
    },
    [folder, name, createMutation, defaultCliId, shared],
  );

  useEffect(() => {
    if (open) {
      setFolder("");
      setName("");
      setDefaultCliId("");
      setShared(false);
      setNameManuallyEdited(false);
      createMutation.reset();
    }
  }, [open, createMutation.reset]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") resetAndClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, resetAndClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Create project"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0"
        onClick={resetAndClose}
      />
      <form
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-(--oc-panel-strong) p-6 shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
          New Project
        </h2>

        <div className="mt-5 grid gap-2">
          <label
            htmlFor="project-folder"
            className="text-xs font-medium uppercase tracking-wider text-slate-400"
          >
            Folder
          </label>
          <FolderAutocomplete
            id="project-folder"
            options={folderOptions}
            value={folder}
            onChange={handleFolderChange}
            disabled={workspaceQuery.isLoading}
          />
          <p className="text-xs text-slate-500">
            {folder
              ? `Mounts /workspace/${folder} inside containers.`
              : "Select a folder from your workspace."}
          </p>
        </div>

        <div className="mt-4 grid gap-2">
          <label
            htmlFor="project-name"
            className="text-xs font-medium uppercase tracking-wider text-slate-400"
          >
            Name
          </label>
          <input
            ref={nameInputRef}
            id="project-name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Project name"
            className="w-full rounded-xl border border-white/10 bg-(--oc-panel) px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck={false}
          />
        </div>

        <div className="mt-4 grid gap-2">
          <label
            htmlFor="project-default-cli"
            className="text-xs font-medium uppercase tracking-wider text-slate-400"
          >
            Default CLI
          </label>
          <div className="relative">
            <select
              id="project-default-cli"
              value={defaultCliId}
              onChange={(e) => setDefaultCliId(e.target.value)}
              className="w-full appearance-none rounded-xl border border-white/10 bg-(--oc-panel) px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
            >
              <option value="">None</option>
              {AGENT_IDS.map((id) => (
                <option key={id} value={id}>
                  {AGENT_LABELS[id]}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              strokeWidth={2}
              aria-hidden
            />
          </div>
          <p className="text-xs text-slate-500">
            Optionally auto-start a CLI when new sessions connect.
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Shared
            </span>
            <p className="mt-0.5 text-xs text-slate-500">
              Visible to all users. Anyone can create sessions.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={shared}
            onClick={() => setShared(!shared)}
            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors ${
              shared ? "bg-emerald-500" : "bg-white/10"
            }`}
          >
            <span
              className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform ${
                shared ? "translate-x-[18px]" : "translate-x-[3px]"
              }`}
            />
          </button>
        </div>

        {createMutation.error && (
          <p className="mt-4 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
            {createMutation.error.message}
          </p>
        )}

        <div className="mt-6 flex justify-end gap-2">
          <Button
            type="button"
            variant="ghost"
            className="text-slate-300 hover:bg-white/10"
            onClick={resetAndClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-emerald-500/90 text-white hover:bg-emerald-500"
            disabled={
              !folder.trim() || !name.trim() || createMutation.isPending
            }
          >
            {createMutation.isPending ? "Creating..." : "Create"}
          </Button>
        </div>
      </form>
    </div>
  );
}
