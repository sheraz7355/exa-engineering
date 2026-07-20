// Home — delivered projects portfolio grid
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Projects() {
  return (
    <section id="projects" className="border-b border-line bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-12 flex items-end justify-between">
          <div>
            <SectionLabel>Our Portfolio</SectionLabel>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-[44px]">
              Delivered projects.
            </h2>
          </div>
          <Link
            href="/#contact"
            className="hidden border-b border-ink pb-1 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors hover:border-signal hover:text-signal md:inline"
          >
            Start a project →
          </Link>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug} className="group relative overflow-hidden bg-ink">
              <div className="relative aspect-video">
                <Image
                  src={project.img}
                  alt={`${project.title}, ${project.location}`}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-blueprint/0 transition-colors group-hover:bg-blueprint/30" />
              <div className="absolute top-4 left-4 bg-black/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/80">
                {project.category}
              </div>
              {project.status === "Ongoing" && (
                <div className="absolute top-4 right-4 bg-signal px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white">
                  Ongoing
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70">
                  {project.capacity} · {project.location}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Link
          href="/#contact"
          className="mt-8 inline-block border-b border-ink pb-1 font-mono text-[12px] uppercase tracking-[0.12em] md:hidden"
        >
          Start a project →
        </Link>
      </div>
    </section>
  );
}
