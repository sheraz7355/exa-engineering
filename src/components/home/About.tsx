// About / Standards — engineering rigor stats section
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Sheet } from "@/components/ui/Sheet";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { standards, aboutParagraph } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Sheet>
            <Image
              src="/projects/DJI_0354.webp"
              width={720}
              height={540}
              alt="Aerial view of an Exa Engineering utility-scale solar installation"
              className="h-auto w-full grayscale transition-all duration-500 hover:grayscale-0 border border-line"
            />
          </Sheet>
          <div className="mt-3 flex justify-between px-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft">
            <span>FIG. 03 — SITE REVIEW</span>
            <span>REV. A</span>
          </div>
        </div>

        <Reveal className="order-1 lg:order-2">
          <SectionLabel>Our Standards</SectionLabel>
          <h2 className="mt-2 mb-6 font-display text-3xl font-semibold tracking-tight md:text-[40px]">
            Technical rigor, by the numbers.
          </h2>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-ink-soft">{aboutParagraph}</p>
          <ul className="max-w-lg space-y-6">
            {standards.map((item) => (
              <li key={item.num} className="flex items-start gap-4 border-t border-line pt-5">
                <span className="mt-0.5 font-mono text-sm text-signal">{item.num}</span>
                <div>
                  <strong className="mb-1 block font-display font-semibold">{item.title}</strong>
                  <p className="text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
