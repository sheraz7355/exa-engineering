// FAQ — common questions accordion
import { faqs } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FAQ() {
  return (
    <section id="faq" className="border-b border-line bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-3">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-[40px]">
            Common questions.
          </h2>
          <p className="mt-4 max-w-xs text-ink-soft">
            Don&apos;t see your question here — reach the operations desk directly.
          </p>
        </Reveal>
        <div className="divide-y divide-line border-t border-b border-line lg:col-span-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4">
                <span className="font-display text-lg font-semibold">{faq.q}</span>
                <span className="accordion-icon text-2xl leading-none text-signal transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
