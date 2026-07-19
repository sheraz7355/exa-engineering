// Process — four-stage delivery sequence
import { process } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Process() {
  return (
    <section id="process" className="border-b border-line bg-paper-dim py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-16">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-[44px]">
            A four-stage sequence, every time.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            No shortcuts between site data and signed-off structure. Each stage closes with a
            written sign-off before the next begins.
          </p>
        </Reveal>

        <Stagger className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          <div className="absolute top-0 left-0 right-0 hidden h-px bg-line md:block" />
          {process.map((stage) => (
            <StaggerItem key={stage.stage} className="relative pt-8">
              <div className="absolute -top-[6px] left-0 hidden h-3 w-3 rounded-full bg-signal ring-4 ring-paper-dim md:flex" />
              <div className="mb-4 font-mono text-sm text-signal">{stage.stage}</div>
              <h3 className="mb-2 font-display text-lg font-semibold">{stage.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{stage.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
