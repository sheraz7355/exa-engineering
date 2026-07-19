/**
 * Global site configuration — single source of truth for identity, SEO,
 * navigation, and contact details. Imported by layout, metadata, JSON-LD,
 * sitemap, robots, header, and footer.
 */

export const siteConfig = {
  name: "EXA Engineering",
  legalName: "Exa Engineering (Private) Limited",
  shortName: "EXA",
  url: "https://exaengineering.org",
  tagline: "Engineering the future of infrastructure.",
  description:
    "Exa Engineering (Private) Limited delivers structural, civil-construction, and utility-scale solar engineering across Pakistan — roads, bridges, underpasses, buildings, and megawatt solar arrays, engineered to spec.",
  founded: 2009,
  locale: "en_US",
  contact: {
    email: "info@exaengineering.com",
    phone: "+92 314 1444880",
    address: "94-C J1, Johar Town Phase 2, Lahore, Pakistan",
    city: "Lahore",
    country: "Pakistan",
    countryCode: "PK",
    mapUrl: "https://maps.app.goo.gl/WyNG7RchrvwGPR9eA",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/exa-engineering",
    twitter: "https://twitter.com/exaengineering",
    facebook: "https://www.facebook.com/exaengineering",
  },
  keywords: [
    "engineering firm Pakistan",
    "structural engineering",
    "civil construction",
    "road and bridge construction",
    "underpass construction",
    "building construction",
    "solar engineering",
    "utility-scale solar",
    "industrial solar installation",
    "grid-tied solar PV",
    "net metering Pakistan",
    "renewable energy engineering",
    "EPC contractor Pakistan",
    "Exa Engineering",
  ],
} as const;

/** Primary navigation for the main (engineering) site. Absolute anchors so they resolve from any route. */
export const mainNav = [
  { label: "Capabilities", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Solar", href: "/solar" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
] as const;

/** Navigation for the solar sub-brand page (in-page anchors). */
export const solarNav = [
  { label: "← Main Site", href: "/" },
  { label: "Solutions", href: "#solutions" },
  { label: "Installations", href: "#installations" },
  { label: "Process", href: "#process" },
  { label: "Specs", href: "#specs" },
] as const;

export type NavItem = { label: string; href: string };
