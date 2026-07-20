// Scroll-stacking delivery sequence.
//
// Each stage is an opaque "drawing sheet" that sticks under the header; the
// next stage scrolls up and stacks over it, leaving a small peek strip like a
// deck of layered sheets. The whole effect is pure CSS — `position: sticky`
// for the stack (compositor-driven) plus an optional CSS scroll-driven recede
// (see globals.css). No per-frame JavaScript, so it stays smooth on low-end
// devices and degrades gracefully where scroll-timelines aren't supported.
import type { CSSProperties } from "react";
import { process } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";

/* Sticky offset clears the fixed 76px header; each card sticks PEEK px lower
   than the last so the previous sheets stay visible as a stacked deck. */
const STICKY_BASE = 96;
const PEEK = 16;

export function ProcessStack() {
  const total = process.length;
  const totalStr = String(total).padStart(2, "0");

  return (
    <div className="process-stack relative">
      {process.map((stage, index) => {
        const num = String(index + 1).padStart(2, "0");
        const style = { "--stick": `${STICKY_BASE + index * PEEK}px` } as CSSProperties;

        return (
          <div
            key={stage.stage}
            style={style}
            className={cn("process-card", index > 0 && "mt-6 md:mt-0")}
          >
            <div className="sheet relative flex flex-col overflow-hidden rounded-lg border border-line bg-paper px-6 py-9 md:min-h-[52vh] md:px-12 md:py-14">
              <span className="bl" aria-hidden />
              <span className="br" aria-hidden />

              {/* signal accent strip — the sheet's header rule */}
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-signal" />

              {/* top row: stage label + counter */}
              <div className="flex items-center justify-between">
                <SectionLabel>{stage.stage}</SectionLabel>
                <span className="font-mono text-xs tracking-[0.2em] text-ink-soft">
                  {num} <span className="text-line">/</span> {totalStr}
                </span>
              </div>

              {/* body: oversized number + title/desc */}
              <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-[auto_1fr] md:items-start md:gap-12">
                <div className="font-display text-[64px] font-semibold leading-none text-signal/90 md:text-[128px]">
                  {num}
                </div>
                <div className="md:border-l md:border-line md:pt-4 md:pl-12">
                  <h3 className="font-display text-2xl font-semibold tracking-tight md:text-4xl">
                    {stage.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-ink-soft md:text-lg">{stage.desc}</p>
                </div>
              </div>

              {/* footer: stage progress ticks */}
              <div className="mt-8 flex items-center gap-2 pt-8 md:mt-auto md:pt-10">
                {Array.from({ length: total }).map((_, t) => (
                  <span
                    key={t}
                    className={cn("h-px flex-1", t <= index ? "bg-signal" : "bg-line")}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
