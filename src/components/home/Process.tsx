// Process — four-stage delivery sequence.
// Small screens get the original compact stacked list; tablet/desktop get the
// scroll-stacking sheet sequence (ProcessStack), which only reads well at width.
import { process } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProcessStack } from "./ProcessStack";

export function Process() {
  return (
    <section id="process" className="border-b border-line bg-paper-dim py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-12 md:mb-16">
          <SectionLabel>How We Deliver</SectionLabel>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-[44px]">
            A four-stage sequence, every time.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            No shortcuts between site data and signed-off structure. Each stage closes with a
            written sign-off before the next begins.
          </p>
        </Reveal>

        {/* Small screens — original compact stacked list */}
        <Stagger className="grid grid-cols-1 gap-6 md:hidden">
          {process.map((stage) => (
            <StaggerItem key={stage.stage} className="border-t border-line pt-6">
              <div className="mb-3 font-mono text-sm text-signal">{stage.stage}</div>
              <h3 className="mb-1.5 font-display text-lg font-semibold">{stage.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{stage.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Tablet & desktop — scroll-stacking sheet sequence */}
        <div className="hidden md:block">
          <ProcessStack />
        </div>
      </div>
    </section>
  );
}
