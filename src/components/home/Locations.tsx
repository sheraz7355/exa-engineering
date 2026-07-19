// Locations — four regional desks, engineering-blueprint grid card layout
import { locations } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Locations() {
  return (
    <section id="locations" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>National Reach</SectionLabel>
          <h2 className="mt-2 mb-14 font-display text-3xl font-semibold tracking-tight md:text-[44px]">
            Four desks, one standard.
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-4">
          {locations.map((location) => (
            <StaggerItem key={location.city} className="bg-paper p-6">
              <h3 className="mb-3 font-display text-lg font-semibold">{location.city}</h3>
              <div className="block space-y-1 font-mono text-[11px] text-ink-soft">
                <div>{location.coords}</div>
                <div>{location.zone}</div>
                <div>{location.role}</div>
              </div>
              {location.role === "Head Office" && (
                <a
                  href={siteConfig.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border-b border-ink pb-0.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors hover:border-signal hover:text-signal"
                >
                  Get directions →
                </a>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
