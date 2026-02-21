import type { SessionRelationType } from "@/generated/prisma";

type SessionInput = {
  id: string;
  parentId: string | null;
  relationType: SessionRelationType | null;
  createdAt: Date;
  [key: string]: unknown;
};

/** Node produced by buildSessionTree for rendering. */
export type SessionTreeNode<T extends SessionInput = SessionInput> = {
  session: T;
  depth: number;
  relationType: SessionRelationType | null;
  isLastChild: boolean;
  hasChildren: boolean;
  /** Parent-depth column indices where ancestor vertical lines continue. */
  connectorColumns: number[];
};

/**
 * Builds a flat render-list from a list of sessions, ordered for tree display.
 * Forks stay at parent depth (same level). Stacks indent depth + 1.
 */
export function buildSessionTree<T extends SessionInput>(
  sessions: T[],
): SessionTreeNode<T>[] {
  const sessionIds = new Set(sessions.map((s) => s.id));
  const childrenMap = new Map<string | null, T[]>();

  for (const s of sessions) {
    // Treat sessions whose parent is not in the current list as root nodes.
    const effectiveParentId =
      s.parentId === null || !sessionIds.has(s.parentId) ? null : s.parentId;
    const list = childrenMap.get(effectiveParentId) ?? [];
    list.push(s);
    childrenMap.set(effectiveParentId, list);
  }

  const result: SessionTreeNode<T>[] = [];

  const walk = (
    parentId: string | null,
    parentDepth: number,
    activeColumns: number[],
  ) => {
    const raw = childrenMap.get(parentId);
    if (!raw) return;

    // Forks first (same depth), then stacks (indented)
    const children = [...raw].sort((a, b) => {
      const aFork = a.relationType === "fork" ? 1 : 0;
      const bFork = b.relationType === "fork" ? 1 : 0;
      return aFork - bFork;
    });

    for (let i = 0; i < children.length; i++) {
      const session = children[i];
      const isLast = i === children.length - 1;
      const isFork = session.relationType === "fork";
      const nodeDepth =
        parentId === null ? 0 : isFork ? parentDepth : parentDepth + 1;
      const nodeChildren = childrenMap.get(session.id);

      result.push({
        session,
        depth: nodeDepth,
        relationType: session.relationType,
        isLastChild: isLast,
        hasChildren: Boolean(nodeChildren?.length),
        connectorColumns: parentId === null ? [] : [...activeColumns],
      });

      // Continuation column = parentDepth (where this node's connector lives).
      // Root nodes don't generate continuation columns.
      const nextColumns =
        isLast || parentId === null
          ? activeColumns
          : [...activeColumns, parentDepth];

      walk(session.id, nodeDepth, nextColumns);
    }
  };

  walk(null, 0, []);

  return result;
}
