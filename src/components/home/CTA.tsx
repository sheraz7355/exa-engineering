// CTA — final "Start a Project" call-to-action band above the footer.
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function CTA() {
  return (
    <section id="contact" className="bg-blueprint grid-field-dark border-b border-black/30 py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 text-center">
        <SectionLabel tone="light">Start a Project</SectionLabel>
        <h2 className="font-display font-semibold text-white text-3xl md:text-[48px] tracking-tight mt-3 mb-5">
          Ready to build what&apos;s next?
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
          Partner with us for world-class structural engineering and infrastructure consulting.
        </p>
        <Button href={`mailto:${siteConfig.contact.email}`} variant="onDark" size="lg">
          Request Consultation
        </Button>
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/60 mt-8">
          {siteConfig.contact.phone} — {siteConfig.contact.email}
        </p>
      </div>
    </section>
  );
}
