// Testimonials — client quotes from delivered projects
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Testimonials() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>Client Notes</SectionLabel>
          <h2 className="font-display font-semibold text-3xl md:text-[44px] tracking-tight mt-2 mb-14">
            Read directly from the field.
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name + testimonial.role} className="bg-paper p-8">
              <p className="text-ink-soft leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft border-t border-line pt-4">
                {testimonial.name} — {testimonial.role}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
