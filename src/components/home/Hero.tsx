// Hero — primary landing section with node-network background and 3D-model teaser stats.
import { NodeNetwork } from "./NodeNetwork";
import { HeroDrawing } from "./HeroDrawing";
import { heroStats } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CountUp } from "@/components/ui/CountUp";
import { Magnetic } from "@/components/ui/Magnetic";
import { Parallax } from "@/components/ui/Parallax";
import { MaskReveal } from "@/components/ui/MaskReveal";

export function Hero() {
  return (
    <section className="relative grid-field overflow-hidden border-b border-line">
      <NodeNetwork />
      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2">
        <div>
          <SectionLabel rule className="mb-5">
            Structural — Civil — Energy
          </SectionLabel>
          <MaskReveal
            as="h1"
            trigger="mount"
            delay={0.15}
            text="Engineering the future of infrastructure."
            className="mb-6 font-display text-[42px] font-semibold leading-[1.05] tracking-tight md:text-[64px] md:leading-[1.02]"
          />
          <p className="mb-9 max-w-lg text-[17px] leading-relaxed text-ink-soft md:text-lg">
            Precision structural analysis, civil construction, and renewable-energy infrastructure
            for a rapidly evolving world. From roads, bridges, and underpasses to Pakistan&apos;s
            largest solar arrays, we calculate the stability of tomorrow&apos;s landscapes before a
            single beam is set.
          </p>
          <div className="mb-12 flex flex-wrap gap-4">
            <Magnetic>
              <Button href="/#contact" variant="primary">
                Request Consultation
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href="#model" variant="outline">
                Explore the 3D Model
              </Button>
            </Magnetic>
          </div>
          <div className="grid max-w-lg grid-cols-3 border-t border-line pt-6">
            {heroStats.map((stat, i) => (
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

        <Parallax speed={0.14}>
          <HeroDrawing />
        </Parallax>
      </div>
    </section>
  );
}
