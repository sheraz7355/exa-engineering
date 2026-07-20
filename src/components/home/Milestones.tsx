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
            Load paths that hold.
          </h2>
        </Reveal>
        <ol className="max-w-3xl">
          {milestones.map((milestone, i) => {
            const isLast = i === milestones.length - 1;
            return (
              <li key={milestone.title} className="flex gap-x-5 md:gap-x-8">
                {/* pipeline rail — orange junction node linked by a thin blueprint line */}
                <div className="flex flex-col items-center" aria-hidden>
                  <span className="relative mt-[7px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-2 border-signal bg-paper-dim">
                    <span className="h-1 w-1 rounded-full bg-signal" />
                  </span>
                  {!isLast && <span className="w-px flex-1 bg-line" />}
                </div>
                <div className={isLast ? "" : "pb-10"}>
                  <h3 className="font-display font-semibold text-lg mb-1">{milestone.title}</h3>
                  <p className="text-ink-soft text-sm max-w-2xl">{milestone.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
