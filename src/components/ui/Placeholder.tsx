import { cn } from "@/lib/cn";

/**
 * Branded hatched image placeholder with a bracketed caption — used for any
 * photographic slot awaiting final imagery. `dark` variant for dark sections.
 */
export function Placeholder({
  label,
  className,
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn(dark ? "ph-dark" : "ph", className)}>
      <span
        className={cn(
          "px-6 text-center font-mono text-[11px] uppercase tracking-[0.12em]",
          dark ? "text-white/50" : "text-ink-soft",
        )}
      >
        {label}
      </span>
    </div>
  );
}
