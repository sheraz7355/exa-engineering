"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * Scroll parallax: translates its child on the Y axis as the element travels
 * through the viewport, at a fraction of scroll speed. Positive `speed` drifts
 * up (foreground feel); negative drifts down (background feel). Transform-only
 * and reduced-motion aware, so it stays smooth and degrades to a static block.
 */
export function Parallax({
  children,
  speed = 0.12,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shift = Math.round(speed * 120);
  const y = useTransform(scrollYProgress, [0, 1], [shift, -shift]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
