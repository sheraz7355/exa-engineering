"use client";

// Home hero background — 2D-canvas drifting node-network.

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; vx: number; vy: number };

/**
 * Engineered node-network drawn on a single canvas behind the hero.
 * DPR-aware, resize-aware, and static (single frame, no RAF) when the
 * user prefers reduced motion. Purely decorative — pointer-events off.
 */
export function NodeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let pts: Point[] = [];
    let raf = 0;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const r = canvas!.getBoundingClientRect();
      w = canvas!.width = r.width * dpr;
      h = canvas!.height = r.height * dpr;
      const count = Math.max(18, Math.floor((r.width * r.height) / 26000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12 * dpr,
        vy: (Math.random() - 0.5) * 0.12 * dpr,
      }));
    }

    function frame() {
      const dpr = window.devicePixelRatio || 1;
      ctx!.clearRect(0, 0, w, h);
      const maxD = 150 * dpr;

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < maxD) {
            ctx!.strokeStyle = `rgba(27,58,92,${(1 - d / maxD) * 0.28})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const p of pts) {
        ctx!.fillStyle = "rgba(255,77,28,0.55)";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.6 * dpr, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!reduce) raf = requestAnimationFrame(frame);
    }

    function onResize() {
      resize();
      if (reduce) frame();
    }

    resize();
    window.addEventListener("resize", onResize);
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
}
