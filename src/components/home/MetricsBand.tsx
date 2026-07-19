// Metrics band — animated counters on a blueprint-dark strip.
import { metrics } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { CountUp } from "@/components/ui/CountUp";

export function MetricsBand() {
  return (
    <section className="bg-blueprint grid-field-dark border-b border-black/30 py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {metrics.map((metric) => (
            <StaggerItem key={metric.label} className="bg-blueprint p-8">
              <div className="font-display font-semibold text-white text-4xl md:text-5xl">
                <CountUp value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/55 mt-2">
                {metric.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
