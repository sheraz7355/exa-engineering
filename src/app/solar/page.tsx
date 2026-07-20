import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { StackDeck, StackPin } from "@/components/ui/StackDeck";
import { solarNav } from "@/lib/site";
import { solarFaqs } from "@/lib/content";
import { JsonLd, solarServiceLd, faqLd, breadcrumbLd } from "@/lib/jsonld";

import { SolarHero } from "@/components/solar/SolarHero";
import { SolarDataStrip } from "@/components/solar/SolarDataStrip";
import { Solutions } from "@/components/solar/Solutions";
import { FeaturedInstallation } from "@/components/solar/FeaturedInstallation";
import { SolarMetrics } from "@/components/solar/SolarMetrics";
import { SolarProcess } from "@/components/solar/SolarProcess";
import { Installations } from "@/components/solar/Installations";
import { SpecsTable } from "@/components/solar/SpecsTable";
import { SolarFAQ } from "@/components/solar/SolarFAQ";
import { SolarCTA } from "@/components/solar/SolarCTA";

export const metadata: Metadata = {
  title: "Solar Installation & PV Infrastructure",
  description:
    "Exa Engineering's solar practice — utility-scale, industrial, and commercial photovoltaic installations across Pakistan, from 1 MWp rooftops to 150 MW utility-scale fields. Net metering, P50/P90 yield modelling, and 24/7 monitoring.",
  keywords: [
    "solar installation Pakistan",
    "utility-scale solar",
    "industrial solar PV",
    "commercial rooftop solar",
    "net metering Pakistan",
    "solar EPC",
  ],
  alternates: { canonical: "/solar" },
  openGraph: {
    url: "/solar",
    title: "Exa Engineering — Solar arrays, engineered to the panel",
  },
};

export default function SolarPage() {
  return (
    <PageShell
      nav={solarNav}
      cta={{ label: "Request Site Assessment", href: "#contact" }}
      wordmark="ENGINEERING"
      footerVariant="solar"
    >
      <SolarHero />
      <SolarDataStrip />

      {/* Stack: the white Solutions cards pin, the black featured installation
          sticks over them, then metrics / process / installations slide over. */}
      <StackDeck>
        <StackPin>
          <Solutions />
        </StackPin>
        <StackPin>
          <FeaturedInstallation />
        </StackPin>
        <SolarMetrics />
        <SolarProcess />
        <Installations />
      </StackDeck>

      <SpecsTable />

      {/* Finale: FAQ pins, the dark CTA sheet slides up over it, footer follows. */}
      <StackDeck>
        <StackPin>
          <SolarFAQ />
        </StackPin>
        <SolarCTA />
      </StackDeck>
      <JsonLd
        data={[
          solarServiceLd(),
          faqLd(solarFaqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Solar", path: "/solar" },
          ]),
        ]}
      />
    </PageShell>
  );
}
