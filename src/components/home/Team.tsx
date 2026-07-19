// Leadership team grid — "the engineers of record"
import { team } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Team() {
  return (
    <section id="team" className="bg-paper-dim border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="font-display font-semibold text-3xl md:text-[44px] tracking-tight mt-2 mb-14">
            The engineers of record.
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-4 gap-px bg-line border border-line">
          {team.map((member) => (
            <StaggerItem key={member.name} className="bg-paper p-8">
              <div className="w-14 h-14 border border-ink flex items-center justify-center font-display font-semibold text-lg mb-6">
                {member.initials}
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{member.name}</h3>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-signal mb-3">
                {member.role}
              </div>
              <p className="text-ink-soft text-sm leading-relaxed">{member.bio}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
