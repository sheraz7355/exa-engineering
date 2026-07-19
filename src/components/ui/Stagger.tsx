"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "./Reveal";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** seconds between each child */
  gap?: number;
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

/**
 * Container that reveals its <StaggerItem> children one after another as it
 * scrolls into view. Pair with StaggerItem for each animated child.
 */
export function Stagger({ children, className, gap = 0.08, delay = 0, ...rest }: StaggerProps) {
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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type ItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

export function StaggerItem({ children, className, y = 18, ...rest }: ItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
