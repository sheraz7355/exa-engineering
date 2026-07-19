// Featured project case study — home page
import Image from "next/image";
import { caseStudy } from "@/lib/content";
import { Sheet } from "@/components/ui/Sheet";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export function CaseStudy() {
  return (
    <section className="bg-ink text-white grid-field-dark border-b border-black/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionLabel tone="signal">Featured Project</SectionLabel>
          <h2 className="font-display font-semibold text-3xl md:text-[44px] tracking-tight mt-2 mb-12 max-w-2xl">
            {caseStudy.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <Sheet light>
              <div className="relative aspect-[16/10] border border-white/15">
                <Image
                  src={caseStudy.image}
                  alt="Aerial view of the 5 MWp Bashir Sons Steel Industry solar installation"
                  fill
                  sizes="(max-width:1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </Sheet>
          </div>
          <div className="lg:col-span-2">
            <p className="text-white/70 leading-relaxed mb-8">{caseStudy.body}</p>
            <Stagger className="grid grid-cols-2 gap-6 mb-8">
              {caseStudy.stats.map((stat) => (
                <StaggerItem key={stat.label} className="border-t border-white/15 pt-4">
                  <div className="font-display font-semibold text-2xl">{stat.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/55 mt-1">
                    {stat.label}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <blockquote className="border-l-2 border-signal pl-5 text-white/80 italic">
              &ldquo;{caseStudy.quote}&rdquo;
              <footer className="not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 mt-3">
                — {caseStudy.quoteAuthor}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
