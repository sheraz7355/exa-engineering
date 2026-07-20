"use client";

import { createElement, Fragment, type ElementType } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { EASE } from "./Reveal";

const word: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.8, ease: EASE } },
};

/**
 * Masked text reveal: each word rises up from behind an invisible mask,
 * staggered — the editorial "type appears" motion. Renders the semantic tag
 * you pass via `as`, so headings stay real headings. Static under reduced
 * motion. Use `trigger="mount"` for above-the-fold headings, `"inview"` (the
 * default) for headings further down.
 */
export function MaskReveal({
  text,
  as = "span",
  className,
  trigger = "inview",
  delay = 0,
  stagger = 0.07,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  trigger?: "inview" | "mount";
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return createElement(as, { className }, text);

  const words = text.split(" ");
  const activate =
    trigger === "mount"
      ? { animate: "show" as const }
      : {
          whileInView: "show" as const,
          viewport: { once: true, margin: "0px 0px -12% 0px" },
        };

  return createElement(
    as,
    { className },
    <motion.span
      style={{ display: "inline" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      initial="hidden"
      {...activate}
    >
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
              // give descenders (g, y, p) room without shifting layout
              paddingBottom: "0.12em",
              marginBottom: "-0.12em",
            }}
          >
            <motion.span
              variants={word}
              style={{ display: "inline-block", willChange: "transform" }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </motion.span>,
  );
}
