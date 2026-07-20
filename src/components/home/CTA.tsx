// CTA — final "Start a Project" call-to-action. A rounded-top sheet that
// stacks up over the section above it for a layered, "panels" finish.
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden rounded-t-[1.75rem] border-b border-black/30 bg-blueprint py-24 shadow-[0_-30px_60px_-40px_rgba(0,0,0,0.55)] grid-field-dark md:rounded-t-[2.5rem]"
    >
      <Reveal y={40} className="mx-auto max-w-[1440px] px-6 text-center md:px-10">
        <SectionLabel tone="light">Start a Project</SectionLabel>
        <h2 className="mt-3 mb-5 font-display text-3xl font-semibold tracking-tight text-white md:text-[48px]">
          Ready to build what&apos;s next?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
          Partner with us for world-class structural engineering and infrastructure consulting.
        </p>
        <Magnetic strength={0.5}>
          <Button href={`mailto:${siteConfig.contact.email}`} variant="onDark" size="lg">
            Request Consultation
          </Button>
        </Magnetic>
        <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.16em] text-white/60">
          {siteConfig.contact.phone} — <span className="normal-case">{siteConfig.contact.email}</span>
        </p>
      </Reveal>
    </section>
  );
}
