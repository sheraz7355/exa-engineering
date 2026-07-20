// Process — four-stage delivery sequence (scroll-stacking sheets)
import { Reveal } from "@/components/ui/Reveal";
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

        <ProcessStack />
      </div>
    </section>
  );
}
