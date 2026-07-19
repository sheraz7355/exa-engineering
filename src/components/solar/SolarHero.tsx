// Solar page hero — headline, CTAs, and stats row alongside the blueprint solar drawing.
import { SolarDrawing } from "./SolarDrawing";
import { solarHeroStats } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CountUp } from "@/components/ui/CountUp";

export function SolarHero() {
  return (
    <section className="relative grid-field overflow-hidden border-b border-line">
      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2">
        <div>
          <SectionLabel rule className="mb-5">
            Solar — Photovoltaic — Net Metering
          </SectionLabel>
          <h1 className="mb-6 font-display text-[42px] font-semibold leading-[1.05] tracking-tight md:text-[64px] md:leading-[1.02]">
            Solar arrays, engineered to the panel.
          </h1>
          <p className="mb-9 max-w-lg text-[17px] leading-relaxed text-ink-soft md:text-lg">
            From 1 MWp rooftops to Pakistan&apos;s largest 150 MW field, Exa Engineering designs,
            validates, and oversees photovoltaic installations with the same structural rigor we
            bring to bridges — every rack, pile, and inverter pad calculated before ground is
            broken.
          </p>
          <div className="mb-12 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">
              Request Site Assessment
            </Button>
            <Button href="#installations" variant="outline">
              View Installations
            </Button>
          </div>
          <div className="grid max-w-lg grid-cols-3 border-t border-line pt-6">
            {solarHeroStats.map((stat, i) => (
              <div key={stat.label} className={i > 0 ? "border-l border-line pl-5" : undefined}>
                <div className="font-display text-2xl font-semibold md:text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <SolarDrawing />
      </div>
    </section>
  );
}
