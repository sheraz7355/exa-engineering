// Solar page — Technical Specifications table
import { solarSpecs } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SpecsTable() {
  return (
    <section id="specs" className="bg-paper-dim border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>Technical Specifications</SectionLabel>
          <h2 className="font-display font-semibold text-3xl md:text-[44px] tracking-tight mt-2 mb-12">
            What we engineer against.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border border-line overflow-x-auto bg-paper">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-ink text-white font-mono text-[11px] uppercase tracking-[0.1em]">
                  <th className="p-4 font-medium">Parameter</th>
                  <th className="p-4 font-medium">Utility & Industrial</th>
                  <th className="p-4 font-medium">Rooftop</th>
                  <th className="p-4 font-medium">Standard</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[13px]">
                {solarSpecs.map((row, i) => (
                  <tr
                    key={row.parameter}
                    className={`border-t border-line ${i % 2 === 0 ? "" : "bg-paper-dim/60"}`}
                  >
                    <td className="p-4 font-semibold">{row.parameter}</td>
                    <td className="p-4 text-ink-soft">{row.utility}</td>
                    <td className="p-4 text-ink-soft">{row.rooftop}</td>
                    <td className="p-4 text-ink-soft">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
