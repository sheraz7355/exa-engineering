import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "dark" | "outline" | "onDark" | "ghostLight";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  // signal → ink (light backgrounds)
  primary: "bg-signal text-white hover:bg-ink",
  // ink → signal (header CTA on paper)
  dark: "bg-ink text-paper hover:bg-signal",
  // outlined on light backgrounds
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  // signal → white on dark / blueprint backgrounds
  onDark: "bg-signal text-white hover:bg-white hover:text-blueprint",
  // outlined on dark backgrounds
  ghostLight: "border border-white/30 text-white hover:bg-white hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5",
  md: "px-5 py-3",
  lg: "px-7 py-4",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

/**
 * Consistent monospace CTA. Renders a plain <a> for hash anchors / external
 * links and a prefetching <Link> for internal routes.
 */
export function Button({ href, children, variant = "primary", size = "lg", className }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors",
    variants[variant],
    sizes[size],
    className,
  );
  const isHttp = /^https?:\/\//.test(href);
  // hash anchors, mailto:, tel:, and external URLs render as plain <a>
  const isPlainAnchor = href.startsWith("#") || isHttp || /^(mailto:|tel:)/.test(href);
  if (isPlainAnchor) {
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
