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
    "Exa Engineering (Private) Limited — a broad engineering firm delivering roads, bridges, underpasses, buildings, and utility-scale solar across Pakistan. 700+ projects delivered, including the country's largest 150 MW solar installation.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <PageShell nav={mainNav} cta={{ label: "Request Consultation", href: "/#contact" }} wordmark="ENGINEERING">
      {/* Stack: the white hero pins while the dark data strip and 3D-model
          showcase stick over it (black on white), then the lighter sections
          slide over the model. */}
      <StackDeck>
        <StackPin>
          <Hero />
        </StackPin>
        <StackPin>
          <DataStrip />
        </StackPin>
        <StackPin>
          <ModelShowcase />
        </StackPin>
        <TrustedBy />
        <Services />
      </StackDeck>

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
