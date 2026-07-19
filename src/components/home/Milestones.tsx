// Milestones — track-record timeline
import { milestones } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Milestones() {
  return (
    <section id="history" className="bg-paper-dim border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>Track Record</SectionLabel>
          <h2 className="font-display font-semibold text-3xl md:text-[44px] tracking-tight mt-2 mb-14">
            Two decades of load paths.
          </h2>
        </Reveal>
        <div className="border-t border-line">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="grid md:grid-cols-[120px_1fr] gap-x-8 py-6 border-b border-line group hover:bg-paper transition-colors"
            >
              <div className="font-mono text-signal text-lg">{milestone.year}</div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">{milestone.title}</h3>
                <p className="text-ink-soft text-sm max-w-2xl">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
