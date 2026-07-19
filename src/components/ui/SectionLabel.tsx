import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * The signal-orange monospace eyebrow used above every section heading.
 * Pass `rule` for the hero variant with a leading tick mark.
 * `tone="muted"` / `"light"` recolor it for dark or blueprint backgrounds.
 */
export function SectionLabel({
  children,
  className,
  rule = false,
  tone = "signal",
}: {
  children: ReactNode;
  className?: string;
  rule?: boolean;
  tone?: "signal" | "muted" | "light";
}) {
  const color =
    tone === "signal" ? "text-signal" : tone === "light" ? "text-white/60" : "text-ink-soft";
  return (
    <span
      className={cn(
        "font-mono text-[12px] uppercase tracking-[0.2em]",
        color,
        rule && "flex items-center gap-2",
        className,
      )}
    >
      {rule && <span className="inline-block h-px w-6 bg-signal" aria-hidden="true" />}
      {children}
    </span>
  );
}
