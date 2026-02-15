"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export type ConfirmDeleteProjectModalProps = {
  open: boolean;
  projectName: string;
  onClose: () => void;
  onConfirm: () => void;
};

/**
 * Confirmation modal for deleting a project and all its sessions.
 */
export function ConfirmDeleteProjectModal({
  open,
  projectName,
  onClose,
  onConfirm,
}: ConfirmDeleteProjectModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-project-title"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-(--oc-panel-strong) p-6 shadow-xl">
        <h2
          id="delete-project-title"
          className="text-lg font-semibold text-white"
        >
          Delete project?
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          This will permanently delete{" "}
          <span className="font-semibold text-white">{projectName}</span> and
          stop all its sessions.
        </p>
        <div className="mt-6 flex justify-end gap-2">
          <Button
            type="button"
            variant="ghost"
            className="text-slate-300 hover:bg-white/10"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="bg-rose-500/90 text-white hover:bg-rose-500"
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
