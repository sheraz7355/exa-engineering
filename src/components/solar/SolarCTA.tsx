// Solar page — closing CTA section
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function SolarCTA() {
  return (
    <section id="contact" className="bg-blueprint grid-field-dark border-b border-black/30 py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 text-center">
        <SectionLabel tone="light">Start a Solar Project</SectionLabel>
        <h2 className="font-display font-semibold text-white text-3xl md:text-[48px] tracking-tight mt-3 mb-5">
          Put your site under the sun.
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
          A site assessment tells you exactly what your land or roof can produce — before you
          commit to anything.
        </p>
        <Button href={`mailto:${siteConfig.contact.email}`} variant="onDark" size="lg">
          Request Site Assessment
        </Button>
        <p className="font-mono text-white/60 text-[12px] uppercase tracking-[0.14em] mt-8">
          {siteConfig.contact.phone}
        </p>
      </div>
    </section>
  );
}
