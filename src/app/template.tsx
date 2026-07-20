"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Page content settle. A `template` re-mounts on every route navigation, so
 * this soft fade plays each time — timed to come in just as the orange page
 * curtain (see PageCurtain) wipes away. Opacity-only, so it never establishes
 * a containing block that could break the sticky/fixed layout.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
    >
      {children}
    </motion.div>
  );
}
