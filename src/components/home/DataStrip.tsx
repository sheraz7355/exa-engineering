// Data strip — thin credibility band beneath the hero.
import { dataStrip } from "@/lib/content";

export function DataStrip() {
  return (
    <section className="bg-ink grid-field-dark border-b border-black/40">
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-x-10 gap-y-2 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 md:px-10">
        {dataStrip.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
