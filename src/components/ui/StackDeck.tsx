import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Sticky-stacking deck container. Wrap sections you want to PIN in <StackPin>;
 * render tall sections (image grids, long tables) directly so they scroll
 * through normally. As you scroll, pinned sections stay put while the sections
 * after them slide up and cover them — the editorial section-overlap effect.
 *
 * Why not pin everything: a pinned section only ever shows its first viewport
 * (it's frozen at the top), so a section taller than the viewport would hide
 * its lower content. Tall sections must scroll through to reveal all of it.
 *
 * Pure CSS `position: sticky` — no scroll listeners — and it collapses to
 * normal flow under reduced motion (see .stack-deck rules in globals.css).
 */
export function StackDeck({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("stack-deck relative z-[1]", className)}>{children}</div>;
}

/** A pinned backdrop inside a <StackDeck>. Use only for sections that fit in
 *  roughly one viewport, so nothing is hidden while they're pinned. */
export function StackPin({ children }: { children: ReactNode }) {
  return <div className="stack-deck__item">{children}</div>;
}
