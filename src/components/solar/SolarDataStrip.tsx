// Solar page — data strip band beneath the hero
import { solarDataStrip } from "@/lib/content";

export function SolarDataStrip() {
  return (
    <section className="bg-ink grid-field-dark border-b border-black/40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-4 flex flex-wrap gap-x-10 gap-y-2 justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
        {solarDataStrip.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
