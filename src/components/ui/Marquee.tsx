import { cn } from "@/lib/cn";

/**
 * Infinite horizontal marquee (CSS-driven, pauses on hover). Renders the item
 * list twice so the -50% translate loops seamlessly. Pure CSS — no JS needed.
 */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <div
      className="flex shrink-0 items-center gap-x-12 pr-12"
      aria-hidden={hidden || undefined}
    >
      {items.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          "marquee-track flex w-max items-center whitespace-nowrap font-display text-xl font-semibold text-ink/40",
          className,
        )}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
