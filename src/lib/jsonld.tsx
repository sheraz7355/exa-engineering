/**
 * JSON-LD structured-data builders. Rendered as <script type="application/ld+json">
 * for rich results (Organization, WebSite, Service, FAQPage, BreadcrumbList).
 */
import { siteConfig } from "./site";
import { team, type Faq } from "./content";

const ORG_ID = `${siteConfig.url}/#organization`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.founded),
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressCountry: siteConfig.contact.countryCode,
    },
    hasMap: siteConfig.contact.mapUrl,
    areaServed: { "@type": "Country", name: siteConfig.contact.country },
    employee: team.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "sales",
      areaServed: siteConfig.contact.countryCode,
      availableLanguage: ["en", "ur"],
    },
    sameAs: Object.values(siteConfig.socials),
    knowsAbout: [
      "Structural engineering",
      "Civil construction",
      "Road and bridge construction",
      "Solar energy engineering",
      "Utility-scale photovoltaics",
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function servicesLd() {
  const services = [
    { name: "Structural & Civil Construction", desc: "Roads, bridges, underpasses, and building construction with structural analysis and oversight." },
    { name: "Solar & Renewable Energy", desc: "Utility-scale and industrial solar PV engineering, grid-tied integration, and net metering." },
    { name: "Engineering Consulting", desc: "Feasibility studies, energy audits, and risk-management for engineering programs." },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.desc,
        provider: { "@id": ORG_ID },
        areaServed: siteConfig.contact.country,
      },
    })),
  };
}

export function faqLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteConfig.url}${it.path}`,
    })),
  };
}

export function solarServiceLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Solar Engineering & Installation",
    serviceType: "Utility-scale and industrial solar PV",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: siteConfig.contact.country },
    description:
      "Utility-scale, industrial, and commercial solar PV — from 1 MWp rooftops to 150 MW utility-scale fields, engineered to the panel with net metering and 24/7 monitoring.",
    url: `${siteConfig.url}/solar`,
  };
}

/**
 * Renders one or more JSON-LD objects into a script tag. Multiple entities are
 * wrapped in a single `@graph` object (with the `@context` hoisted to the top
 * level) rather than a bare array, so naive consumers that read `data["@context"]`
 * don't choke on an array.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  const payload =
    items.length === 1
      ? items[0]
      : {
          "@context": "https://schema.org",
          "@graph": items.map((item) => {
            const rest: Record<string, unknown> = {};
            for (const [key, value] of Object.entries(item as Record<string, unknown>)) {
              if (key !== "@context") rest[key] = value;
            }
            return rest;
          }),
        };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
