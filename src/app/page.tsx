import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
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
      <Hero />
      <DataStrip />
      <ModelShowcase />
      <TrustedBy />
      <Services />
      <Sectors />
      <MetricsBand />
      <Process />
      <About />
      <CaseStudy />
      <Projects />
      <Milestones />
      <Testimonials />
      <Team />
      <Locations />
      <FAQ />
      <CTA />
      <JsonLd
        data={[servicesLd(), faqLd(faqs), breadcrumbLd([{ name: "Home", path: "/" }])]}
      />
    </PageShell>
  );
}
