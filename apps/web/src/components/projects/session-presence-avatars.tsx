"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type PresenceEntry = {
  userId: string;
  sessionId: string;
  status: "active" | "viewing" | "inactive";
  user: {
    id: string;
    name: string;
    email: string;
    image: string | null;
    avatarImageUrl: string | null;
  };
};

type SessionPresenceAvatarsProps = {
  sessionId: string;
  presences: PresenceEntry[];
};

const borderColorMap: Record<PresenceEntry["status"], string> = {
  active: "border-purple-500",
  viewing: "border-emerald-500",
  inactive: "border-red-500",
};

const ENTER_MS = 500;
const LEAVE_MS = 300;

type AnimState = { kind: "entering" | "leaving"; entry: PresenceEntry };

/**
 * Stacked avatar indicators showing which users are present in a session.
 * Avatars animate in (spin + bounce) when arriving and out (spin + shrink) when departing.
 * No animation on initial mount.
 */
export function SessionPresenceAvatars({
  sessionId,
  presences,
}: SessionPresenceAvatarsProps) {
  const filtered = presences.filter((p) => p.sessionId === sessionId);
  const currentMap = new Map(filtered.map((p) => [p.userId, p]));

  const prevMapRef = useRef<Map<string, PresenceEntry> | null>(null);
  const [anims, setAnims] = useState<Map<string, AnimState>>(new Map());
  const enterTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Detect entering/leaving by comparing previous vs current user sets.
  // useLayoutEffect (no deps = every render) runs synchronously before paint,
  // so setAnims and the resulting re-render are batched into the same paint
  // cycle — the avatar is never briefly invisible before the leave animation.
  // Skips the very first render (prevMapRef is null) so mount doesn't animate.
  useLayoutEffect(() => {
    const prev = prevMapRef.current;
    prevMapRef.current = currentMap;

    if (prev === null) return;

    const next = new Map<string, AnimState>();

    // Entering: in current but not in prev
    for (const [id, entry] of currentMap) {
      if (!prev.has(id)) next.set(id, { kind: "entering", entry });
    }

    // Leaving: in prev but not in current
    for (const [id, entry] of prev) {
      if (!currentMap.has(id)) next.set(id, { kind: "leaving", entry });
    }

    if (next.size === 0) return;

    setAnims(next);

    // Clear entering animations
    const hasEntering = [...next.values()].some((a) => a.kind === "entering");
    if (hasEntering) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = setTimeout(() => {
        setAnims((prev) => {
          const cleaned = new Map(prev);
          for (const [id, a] of cleaned) {
            if (a.kind === "entering") cleaned.delete(id);
          }
          return cleaned;
        });
      }, ENTER_MS);
    }

    // Clear leaving animations
    const hasLeaving = [...next.values()].some((a) => a.kind === "leaving");
    if (hasLeaving) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = setTimeout(() => {
        setAnims((prev) => {
          const cleaned = new Map(prev);
          for (const [id, a] of cleaned) {
            if (a.kind === "leaving") cleaned.delete(id);
          }
          return cleaned;
        });
      }, LEAVE_MS);
    }
  });

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(enterTimerRef.current);
      clearTimeout(leaveTimerRef.current);
    };
  }, []);

  // Merge current entries + leaving entries (so they stay visible during exit animation)
  const visible = new Map(currentMap);
  for (const [id, a] of anims) {
    if (a.kind === "leaving" && !visible.has(id)) {
      visible.set(id, a.entry);
    }
  }

  if (visible.size === 0) return null;

  return (
    <div className="flex -space-x-1.5">
      {[...visible.entries()].map(([userId, p]) => {
        const anim = anims.get(userId);

        const src =
          p.user.avatarImageUrl ??
          p.user.image ??
          `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${encodeURIComponent(p.user.email)}`;

        let animationStyle: React.CSSProperties | undefined;
        if (anim?.kind === "entering") {
          animationStyle = {
            animation: `presence-enter ${ENTER_MS}ms ease-out forwards`,
          };
        } else if (anim?.kind === "leaving") {
          animationStyle = {
            animation: `presence-leave ${LEAVE_MS}ms ease-in forwards`,
          };
        }

        return (
          <Avatar
            key={userId}
            className={`h-5 w-5 border-2 ${borderColorMap[p.status]}`}
            style={animationStyle}
          >
            <AvatarImage src={src} alt={p.user.name} />
            <AvatarFallback className="text-[8px]" />
          </Avatar>
        );
      })}
    </div>
  );
}
