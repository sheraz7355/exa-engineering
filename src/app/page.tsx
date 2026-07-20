import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { StackDeck, StackPin } from "@/components/ui/StackDeck";
import { mainNav } from "@/lib/site";
import { faqs } from "@/lib/content";
import { JsonLd, servicesLd, faqLd, breadcrumbLd } from "@/lib/jsonld";

import { Hero } from "@/components/home/Hero";
import { DataStrip } from "@/components/home/DataStrip";
import { ModelShowcase } from "@/components/home/ModelShowcase";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Services } from "@/components/home/Services";
import { Sectors } from "@/components/home/Sectors";
import { MetricsBand } from "@/components/home/MetricsBand";
import { Process } from "@/components/home/Process";
import { About } from "@/components/home/About";
import { CaseStudy } from "@/components/home/CaseStudy";
import { Projects } from "@/components/home/Projects";
import { Milestones } from "@/components/home/Milestones";
import { Testimonials } from "@/components/home/Testimonials";
import { Team } from "@/components/home/Team";
import { Locations } from "@/components/home/Locations";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Structural, Civil & Solar Engineering",
  description:
    "Exa Engineering (Private) Limited — a broad engineering firm delivering roads, bridges, underpasses, buildings, and utility-scale solar across Pakistan. 700+ projects and 150+ MW of solar delivered.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <PageShell nav={mainNav} cta={{ label: "Request Consultation", href: "/#contact" }} wordmark="ENGINEERING">
      <Hero />

      {/* The dark data-strip + 3D-model block slides up over the hero as a
          rounded sheet — a clear dark-over-light stack that keeps the hero (and
          its stats) fully visible instead of pinning it. */}
      <div className="relative z-10 -mt-8 overflow-hidden rounded-t-[1.75rem] shadow-[0_-30px_60px_-40px_rgba(0,0,0,0.5)] md:-mt-12 md:rounded-t-[2.5rem]">
        <DataStrip />
        <ModelShowcase />
      </div>

      <TrustedBy />
      <Services />

      <Sectors />
      <MetricsBand />
      <Process />
      <About />

      {/* Stack: the dark featured project pins while the project grid slides up
          over it (the grid scrolls through, so every row stays visible). */}
      <StackDeck>
        <StackPin>
          <CaseStudy />
        </StackPin>
        <Projects />
      </StackDeck>

      <Milestones />
      <Testimonials />
      <Team />
      <Locations />

      {/* Finale: FAQ pins, the dark CTA sheet slides up over it, footer follows. */}
      <StackDeck>
        <StackPin>
          <FAQ />
        </StackPin>
        <CTA />
      </StackDeck>
      <JsonLd
        data={[servicesLd(), faqLd(faqs), breadcrumbLd([{ name: "Home", path: "/" }])]}
      />
    </PageShell>
  );
}
