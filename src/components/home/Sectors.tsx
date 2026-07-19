// SECTORS — industries served chip strip
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { sectors } from "@/lib/content";

export function Sectors() {
  return (
    <section className="border-b border-line py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>Industries Served</SectionLabel>
          <p className="mt-4 max-w-[52ch] text-ink-soft">
            Exa Engineering has delivered across nine industry sectors, from steel mills to food
            processing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="border border-line px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-soft"
              >
                {sector}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
