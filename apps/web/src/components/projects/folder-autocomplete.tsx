"use client";

import { useEffect, useRef, useState } from "react";

type FolderOption = { label: string; value: string };

type FolderAutocompleteProps = {
  options: FolderOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  id?: string;
};

/**
 * Text input with dropdown autocomplete for workspace folder selection.
 * Filters options as the user types and selects on click or Enter.
 */
export function FolderAutocomplete({
  options,
  value,
  onChange,
  disabled,
  id,
}: FolderAutocompleteProps) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const filtered = options.filter(
    (o) => o.value && o.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    setHighlightIndex(0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const select = (opt: FolderOption) => {
    onChange(opt.value);
    setQuery(opt.label);
    setOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[highlightIndex]) {
        select(filtered[highlightIndex]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <input
        ref={inputRef}
        id={id}
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          onChange("");
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Type to search folders..."
        className="w-full rounded-xl border border-white/10 bg-(--oc-panel) px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 disabled:cursor-not-allowed disabled:border-white/5 disabled:bg-white/5 disabled:text-slate-400"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck={false}
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        aria-controls={id ? `${id}-listbox` : undefined}
      />
      {open && (
        <div
          ref={listRef}
          id={id ? `${id}-listbox` : undefined}
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 mt-1 max-h-48 overflow-auto rounded-xl border border-white/10 bg-(--oc-panel-strong) py-1 shadow-xl"
        >
          {filtered.length === 0 ? (
            <div className="px-3 py-2 text-xs text-slate-500">
              No folders found.
            </div>
          ) : (
            filtered.map((opt, i) => (
              <div key={opt.value}>
                <button
                  type="button"
                  className={`flex w-full items-center px-3 py-2 text-left text-sm transition ${
                    i === highlightIndex
                      ? "bg-emerald-400/20 text-emerald-200"
                      : "text-slate-200 hover:bg-white/10"
                  }`}
                  onMouseEnter={() => setHighlightIndex(i)}
                  onClick={() => select(opt)}
                  role="option"
                  aria-selected={i === highlightIndex}
                >
                  {opt.label}
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
