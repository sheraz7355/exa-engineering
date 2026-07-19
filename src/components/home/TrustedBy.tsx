// TRUSTED BY — logo/client marquee strip
import { Marquee } from "@/components/ui/Marquee";
import { trustedBy } from "@/lib/content";

export function TrustedBy() {
  return (
    <section className="border-b border-line py-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
          Trusted by industry &amp; energy operators across Pakistan
        </div>
        <Marquee items={trustedBy} />
      </div>
    </section>
  );
}
