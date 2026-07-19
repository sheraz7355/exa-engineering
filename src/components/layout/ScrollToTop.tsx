"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/** Fired by the Header when the mobile nav opens/closes. */
export const MENU_EVENT = "exa:menu";

/**
 * Fixed bottom-right control that shows overall page-scroll progress as a
 * circular ring and scrolls back to the top when clicked. Fades in once the
 * user has scrolled past the first stretch of the page.
 *
 * When the mobile nav drawer opens (which slides in from the right), this
 * button glides to the bottom-left so it stays clear of the drawer, then
 * glides back to the bottom-right when the drawer closes.
 */
export function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    // horizontal distance to travel from bottom-right to bottom-left:
    // viewport − button(48) − right margin(20) − left margin(20)
    const calcShift = () => setShift(-(window.innerWidth - 88));
    onScroll();
    calcShift();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", calcShift);
    const onMenu = (e: Event) => setMenuOpen(Boolean((e as CustomEvent).detail));
    window.addEventListener(MENU_EVENT, onMenu);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calcShift);
      window.removeEventListener(MENU_EVENT, onMenu);
    };
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return (
    <motion.button
      type="button"
      onClick={toTop}
      aria-label="Scroll back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8, x: menuOpen ? shift : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-ink text-paper shadow-[0_8px_24px_-8px_rgba(21,24,27,0.5)] transition-colors hover:bg-blueprint md:bottom-8 md:right-8 md:h-14 md:w-14 ${
        menuOpen ? "z-[65]" : "z-40"
      } ${visible ? "" : "pointer-events-none"}`}
    >
      {/* progress ring */}
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(242,243,238,0.22)" strokeWidth="2" />
        <motion.circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="#FF4D1C"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
      {/* up chevron */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="relative" aria-hidden="true">
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}
