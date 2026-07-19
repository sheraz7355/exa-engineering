// Solar Solutions — the three installation classes grid
import { Factory, Home, BatteryCharging } from "lucide-react";
import { solarSolutions, type SolarSolution } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ICONS: Record<SolarSolution["icon"], typeof Factory> = {
  utility: Factory,
  rooftop: Home,
  storage: BatteryCharging,
};

export function Solutions() {
  return (
    <section id="solutions" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <SectionLabel>Solar Solutions</SectionLabel>
            <h2 className="font-display font-semibold text-3xl md:text-[44px] tracking-tight mt-2">
              Three installation classes.
            </h2>
          </div>
          <p className="text-ink-soft max-w-sm">
            Every array is yield-modelled, wind-load tested, and grid-study cleared before the
            first pile is driven.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {solarSolutions.map((solution) => {
            const Icon = ICONS[solution.icon];
            return (
              <StaggerItem
                key={solution.code}
                className="bg-paper p-8 hover:bg-white transition-colors group"
              >
                <div className="flex items-center justify-between mb-8">
                  <Icon size={30} strokeWidth={1.5} className="text-ink" />
                  <span className="font-mono text-[10px] text-ink-soft group-hover:text-signal transition-colors">
                    {solution.code}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{solution.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed mb-6">{solution.desc}</p>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
                  {solution.delivery}
                </span>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
