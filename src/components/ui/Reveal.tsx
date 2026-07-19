"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  /** vertical offset in px to travel from */
  y?: number;
  /** delay in seconds */
  delay?: number;
  duration?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

/**
 * Scroll-triggered fade-up. Animates once when it enters the viewport.
 * Honors prefers-reduced-motion (renders static).
 */
export function Reveal({
  children,
  y = 18,
  delay = 0,
  duration = 0.7,
  className,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} {...(rest as object)}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
