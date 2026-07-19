import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Technical "drawing sheet" — a framed panel with registration brackets in all
 * four corners. Use `light` on dark backgrounds so the brackets switch to white.
 */
export function Sheet({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("sheet", light && "sheet-light", className)}>
      <span className="bl" aria-hidden="true" />
      <span className="br" aria-hidden="true" />
      {children}
    </div>
  );
}
