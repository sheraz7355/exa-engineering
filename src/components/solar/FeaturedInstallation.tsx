// Solar page — Featured Installation (Bashir Sons Steel 5 MWp case study)
import Image from "next/image";
import { solarFeatured } from "@/lib/content";
import { Sheet } from "@/components/ui/Sheet";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FeaturedInstallation() {
  return (
    <section className="bg-ink text-white grid-field-dark border-b border-black/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionLabel tone="signal">Featured Installation</SectionLabel>
        <h2 className="font-display font-semibold text-3xl md:text-[44px] tracking-tight mt-2 mb-12 max-w-2xl">
          {solarFeatured.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <Sheet light>
              <div className="relative aspect-[16/10] border border-white/15">
                <Image
                  fill
                  src={solarFeatured.image}
                  sizes="(max-width:1024px) 100vw, 60vw"
                  className="object-cover"
                  alt="Aerial view of the 5 MWp industrial solar array at Bashir Sons Steel Industry, Kala Shah Kaku"
                />
              </div>
              <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.1em] text-white/60 mt-3 px-1">
                <span>FIG. 01 — 5 MWp INDUSTRIAL ARRAY</span>
                <span>REV. B</span>
              </div>
            </Sheet>
          </div>
          <div className="lg:col-span-2">
            <p className="text-white/70 leading-relaxed mb-8">{solarFeatured.body}</p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {solarFeatured.stats.map((stat) => (
                <div key={stat.label} className="border-t border-white/15 pt-4">
                  <div className="font-display font-semibold text-2xl">{stat.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/50 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <blockquote className="border-l-2 border-signal pl-5 text-white/80 italic">
              &ldquo;{solarFeatured.quote}&rdquo;
              <footer className="not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 mt-3">
                — {solarFeatured.quoteAuthor}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
