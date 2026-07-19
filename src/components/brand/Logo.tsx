import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * EXA Engineering brand mark — the company's leaf + solar-panel + sun logo,
 * redrawn in the site's thin-line "blueprint" aesthetic.
 *   • leaf  → sustainability   (ink, or white on dark)
 *   • panel → PV / solar       (blueprint blue)
 *   • sun   → energy           (signal orange)
 * `tone="light"` recolours the ink strokes to white for dark surfaces.
 */
export function LogoMark({
  size = 34,
  tone = "default",
  className,
}: {
  size?: number;
  tone?: "default" | "light";
  className?: string;
}) {
  const ink = tone === "light" ? "#F2F3EE" : "#15181B";
  const panel = tone === "light" ? "#8fa9c4" : "#1B3A5C";
  const signal = "#FF4D1C";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      role="img"
      aria-label="EXA Engineering"
    >
      {/* leaf — sustainability */}
      <path
        d="M9 35 C3.6 28.5 3.6 14.5 9 5 C14.4 14.5 14.4 28.5 9 35 Z"
        stroke={ink}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 9 V31 M9 15.5 L12 12.8 M9 21 L6 18.3" stroke={ink} strokeWidth="1" />

      {/* sun — energy */}
      <circle cx="29.5" cy="10" r="3.6" stroke={signal} strokeWidth="1.4" />
      <g stroke={signal} strokeWidth="1.4" strokeLinecap="round">
        <line x1="29.5" y1="2.6" x2="29.5" y2="4.4" />
        <line x1="37" y1="10" x2="35.2" y2="10" />
        <line x1="34.8" y1="4.7" x2="33.5" y2="6" />
        <line x1="34.8" y1="15.3" x2="33.5" y2="14" />
        <line x1="24.2" y1="4.7" x2="25.5" y2="6" />
      </g>

      {/* solar panel — PV array */}
      <path
        d="M16 19 H30 L34.5 33 H11.5 Z"
        stroke={panel}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M20.7 19 L18.4 33 M25.3 19 L26.6 33 M13.9 26 H32.1"
        stroke={panel}
        strokeWidth="1"
      />
    </svg>
  );
}

/**
 * Full lockup: mark + "EXA {wordmark}" wordmark. Wraps in a link to `href`.
 */
export function Logo({
  href = "/",
  wordmark = "ENGINEERING",
  tone = "default",
  size = 34,
  className,
}: {
  href?: string;
  wordmark?: string;
  tone?: "default" | "light";
  size?: number;
  className?: string;
}) {
  const primary = tone === "light" ? "text-paper" : "text-ink";
  const secondary = tone === "light" ? "text-white/55" : "text-ink-soft";
  return (
    <Link href={href} className={cn("flex items-center gap-3", className)} aria-label={`EXA ${wordmark}`}>
      <LogoMark size={size} tone={tone} />
      <span className={cn("font-display text-lg font-semibold tracking-tight", primary)}>
        EXA <span className={cn("font-medium", secondary)}>{wordmark}</span>
      </span>
    </Link>
  );
}
