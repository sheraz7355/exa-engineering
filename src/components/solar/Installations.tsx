// Solar page — recent installations grid
import Image from "next/image";
import { solarInstallations } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Installations() {
  return (
    <section id="installations" className="border-b border-line bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-12">
          <SectionLabel>Installations</SectionLabel>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-[44px]">
            Recent solar work.
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
          {solarInstallations.map((item) => (
            <StaggerItem key={item.title} className="group relative overflow-hidden bg-ink">
              <div className="relative aspect-video">
                <Image
                  src={item.img}
                  alt={`${item.title} — ${item.capacity} solar installation`}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="border border-line bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink">
                  {item.tag} · {item.capacity}
                </span>
                {item.status === "Ongoing" && (
                  <span className="flex items-center gap-1.5 border border-signal/40 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-signal">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                    Ongoing
                  </span>
                )}
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
