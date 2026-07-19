// Core Capabilities — services grid + capability comparison table
import Link from "next/link";
import { Building2, SunMedium, ClipboardCheck } from "lucide-react";
import { capabilities, capabilityTable, type Capability } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";

const icons: Record<Capability["icon"], typeof Building2> = {
  structure: Building2,
  solar: SunMedium,
  consulting: ClipboardCheck,
};

export function Services() {
  return (
    <section id="services" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Core Capabilities</SectionLabel>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-[44px]">
              Technical specializations.
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">
            Three disciplines, one calculation standard — every deliverable is peer-reviewed and
            load-tested before it leaves the office.
          </p>
        </Reveal>

        <Stagger className="mb-4 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
          {capabilities.map((cap) => {
            const Icon = icons[cap.icon];
            const isInternal = cap.href.startsWith("/") && !cap.href.startsWith("/#");
            return (
              <StaggerItem
                key={cap.code}
                className="group bg-paper p-8 transition-colors hover:bg-white"
              >
                <div className="mb-8 flex items-center justify-between">
                  <Icon size={30} strokeWidth={1.5} className="text-ink" />
                  <span className="font-mono text-[10px] text-ink-soft transition-colors group-hover:text-signal">
                    {cap.code}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold">{cap.title}</h3>
                <p className="mb-6 text-[15px] leading-relaxed text-ink-soft">{cap.desc}</p>
                {isInternal ? (
                  <Link
                    href={cap.href}
                    className="inline-flex items-center gap-1 border-b border-ink pb-0.5 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors group-hover:border-signal group-hover:text-signal"
                  >
                    {cap.cta} →
                  </Link>
                ) : (
                  <a
                    href={cap.href}
                    className="inline-flex items-center gap-1 border-b border-ink pb-0.5 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors group-hover:border-signal group-hover:text-signal"
                  >
                    {cap.cta} →
                  </a>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-ink font-mono text-[11px] uppercase tracking-[0.1em] text-white">
                <th className="p-4 font-medium">Capability</th>
                <th className="p-4 font-medium">Typical Scale</th>
                <th className="p-4 font-medium">Standards</th>
                <th className="p-4 font-medium">Delivery</th>
              </tr>
            </thead>
            <tbody className="font-mono text-[13px]">
              {capabilityTable.map((row, i) => (
                <tr
                  key={row.capability}
                  className={`border-t border-line ${i % 2 === 1 ? "bg-paper-dim/60" : ""}`}
                >
                  <td className="p-4 font-semibold">{row.capability}</td>
                  <td className="p-4 text-ink-soft">{row.scale}</td>
                  <td className="p-4 text-ink-soft">{row.standards}</td>
                  <td className="p-4 text-ink-soft">{row.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
