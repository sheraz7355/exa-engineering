"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/lib/site";

function NavLink({
  item,
  onClick,
  className,
}: {
  item: NavItem;
  onClick?: () => void;
  className?: string;
}) {
  const isHash = item.href.startsWith("#");
  if (isHash) {
    return (
      <a href={item.href} onClick={onClick} className={className}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} onClick={onClick} className={className}>
      {item.label}
    </Link>
  );
}

export function Header({
  nav,
  cta,
  wordmark = "ENGINEERING",
  logoHref = "/",
}: {
  nav: readonly NavItem[];
  cta: { label: string; href: string };
  wordmark?: string;
  logoHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When the drawer is open: lock scroll, allow Escape to close, and manage focus.
  useEffect(() => {
    if (!open) return;
    const toggleEl = toggleRef.current;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      toggleEl?.focus();
    };
  }, [open]);

  const linkCls =
    "font-mono text-[12px] uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-blueprint";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full border-b bg-paper/90 backdrop-blur-md transition-shadow",
          scrolled ? "border-line shadow-[0_1px_0_rgba(21,24,27,0.06)]" : "border-transparent",
        )}
      >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Logo href={logoHref} wordmark={wordmark} />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.href} item={item} className={linkCls} />
          ))}
          <Button href={cta.href} variant="dark" size="sm">
            {cta.label}
          </Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="text-ink lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </button>
      </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[55] bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-[60] flex h-full w-[78%] max-w-xs flex-col gap-6 bg-ink p-8 text-white lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                ref={closeRef}
                type="button"
                className="self-end text-white/70"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </button>
              {nav.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.12em] text-white/80"
                />
              ))}
              <Button href={cta.href} variant="onDark" size="md" className="mt-2">
                {cta.label}
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
