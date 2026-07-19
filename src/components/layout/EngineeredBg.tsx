"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/** Fixed blueprint-texture layer that fades in once the user scrolls past the hero. */
export function EngineeredBg() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className={cn("engineered-bg", show && "show")} aria-hidden="true" />;
}
