"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * Page-transition curtain. On each route change a full-screen signal-orange
 * panel wipes up across the viewport, holds briefly with a big centered EXA
 * wordmark, then continues up and off — revealing the new page. Keyed on the
 * pathname so it replays every navigation; skipped on first load and for
 * reduced-motion users.
 */
export function PageCurtain() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        aria-hidden="true"
        className="page-curtain"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "0%", "-100%"] }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], times: [0, 0.34, 0.62, 1] }}
      >
        <motion.span
          className="page-curtain__brand"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: [0, 1, 1, 0], y: [30, 0, 0, -24] }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], times: [0, 0.34, 0.62, 1] }}
        >
          <span className="page-curtain__mark">EXA</span>
          <span className="page-curtain__sub">ENGINEERING</span>
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
}
