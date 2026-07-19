"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  /** number to count to, or a literal string (e.g. "24/7", "99.2%") rendered as-is */
  value: number | string;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

/**
 * Animated count-up that fires once when scrolled into view. Non-numeric
 * values (like "24/7") render immediately without animation. The count is
 * written imperatively to the DOM node (no per-frame re-renders).
 */
export function CountUp({ value, suffix = "", durationMs = 1400, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const isNumeric = typeof value === "number";

  useEffect(() => {
    if (!isNumeric || !inView) return;
    const el = ref.current;
    if (!el) return;
    const target = value as number;
    if (reduce || target === 0) {
      el.textContent = target.toLocaleString("en-US") + suffix;
      return;
    }
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, value, suffix, durationMs, reduce]);

  // Initial (and SSR) text: numbers start at 0, strings render as-is.
  const initial = isNumeric ? `0${suffix}` : `${value}${suffix}`;
  return (
    <span ref={ref} className={className}>
      {initial}
    </span>
  );
}
