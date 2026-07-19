/**
 * EXA ENGINEERING — content model (single source of truth).
 *
 * All figures and projects are REAL, delivered by Exa Engineering (Private)
 * Limited. Project data was migrated from the company's completed/ongoing
 * portfolio and rebranded from the former "Solarkon" operating name.
 * Sections and JSON-LD both read from this file so on-page content and
 * structured data never drift apart.
 */

/* ------------------------------------------------------------------ */
/*  HOME — engineering site                                            */
/* ------------------------------------------------------------------ */

export type Stat = { value: number | string; suffix?: string; label: string };

export const heroStats: Stat[] = [
  { value: 700, suffix: "+", label: "Projects Delivered" },
  { value: 150, suffix: " MW", label: "Largest Single Project" },
  { value: "24/7", label: "Monitoring Desk" },
];

export const dataStrip: string[] = [
  "CERTIFIED ENGINEERING TEAM",
  "700+ SYSTEMS DELIVERED",
  "PAKISTAN'S LARGEST 150 MW PROJECT",
  "OPERATIONS DESK: 24/7/365",
];

/** Real client / sector names for the trusted-by marquee. */
export const trustedBy: string[] = [
  "BASHIR SONS STEEL",
  "GOURMET BAKERIES",
  "HAJVERY FOODS",
  "AL FATEH STEEL",
  "FIVE STAR STEEL",
  "AZAAN FLOUR MILL",
];

export type Capability = {
  code: string;
  icon: "structure" | "solar" | "consulting";
  title: string;
  desc: string;
  href: string;
  cta: string;
};

export const capabilities: Capability[] = [
  {
    code: "SPEC / CIV",
    icon: "structure",
    title: "Structural & Civil Construction",
    desc: "Roads, bridges, underpasses, and buildings — load-bearing analysis and construction oversight run against live seismic, wind, and traffic-load models before a single beam is set.",
    href: "/#projects",
    cta: "See projects",
  },
  {
    code: "SPEC / SOL",
    icon: "solar",
    title: "Solar & Renewable Energy",
    desc: "Utility-scale and industrial photovoltaic arrays — from 1 MWp rooftops to Pakistan's largest 150 MW field, engineered to the panel with grid-tied integration and net metering.",
    href: "/solar",
    cta: "Explore solar",
  },
  {
    code: "SPEC / CNS",
    icon: "consulting",
    title: "Engineering Consulting",
    desc: "Data-driven feasibility studies, energy audits, and risk-management protocols for high-stakes programs — every deliverable peer-reviewed before it leaves the office.",
    href: "/#contact",
    cta: "Talk to us",
  },
];

export type CapabilityRow = {
  capability: string;
  scale: string;
  standards: string;
  delivery: string;
};

export const capabilityTable: CapabilityRow[] = [
  {
    capability: "Structural & Civil",
    scale: "Roads · bridges · buildings",
    standards: "ASCE 7, Eurocode",
    delivery: "8–24 weeks",
  },
  {
    capability: "Solar & Renewable",
    scale: "1–150 MW arrays",
    standards: "IEC 61215 / 61730",
    delivery: "8–36 weeks",
  },
  {
    capability: "Engineering Consulting",
    scale: "Any project scale",
    standards: "ISO 9001, ISO 31000",
    delivery: "2–6 weeks",
  },
];

export const metrics: Stat[] = [
  { value: 700, suffix: "+", label: "Projects Delivered" },
  { value: 150, suffix: " MW", label: "Largest Single Project" },
  { value: 9, suffix: "", label: "Industry Sectors Served" },
  { value: 0, suffix: "", label: "Structural Failures On Record" },
];

export type ProcessStage = { stage: string; title: string; desc: string };

export const process: ProcessStage[] = [
  {
    stage: "STAGE 01",
    title: "Survey & Site Data",
    desc: "Geotechnical surveys, load-history data, and resource studies collected on site.",
  },
  {
    stage: "STAGE 02",
    title: "Engineering & Modeling",
    desc: "Finite-element analysis against seismic, wind, traffic, and live-load scenarios.",
  },
  {
    stage: "STAGE 03",
    title: "Validation & Testing",
    desc: "Independent peer review and physical load-testing of every critical assembly.",
  },
  {
    stage: "STAGE 04",
    title: "Construction Oversight",
    desc: "On-site inspection through to commissioning and as-built sign-off.",
  },
];

export type StandardItem = { num: string; title: string; desc: string };

export const standards: StandardItem[] = [
  {
    num: "01",
    title: "Certified Engineering Team",
    desc: "Certified engineers and technicians delivering every project to the highest national and international standards.",
  },
  {
    num: "02",
    title: "Data-Driven Design",
    desc: "Predictive modeling ensures structural longevity and long-term safety margins on every build.",
  },
  {
    num: "03",
    title: "Independent Peer Review",
    desc: "Every critical calculation is checked by a second licensed engineer before sign-off.",
  },
];

export const aboutParagraph =
  "Exa Engineering (Private) Limited is a broad-spectrum engineering firm delivering structural, civil-construction, and renewable-energy projects across Pakistan. Our certified engineers bring decades of combined experience — and we're proud to have delivered Pakistan's largest solar project at 150 MW, alongside 700+ installations across nine industry sectors.";

/* ---- Projects (real, rebranded) ---- */

export type Project = {
  slug: string;
  title: string;
  detailTitle: string;
  category: string;
  status: "Completed" | "Ongoing";
  capacity: string;
  sector: string;
  location: string;
  description: string;
  img: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "bashir-sons-steel",
    title: "Bashir Sons Steel Industry",
    detailTitle: "Bashir Sons Steel Industry — 5 MWp Solar Installation",
    category: "Industrial Solar",
    status: "Completed",
    capacity: "5 MWp",
    sector: "Heavy Industry",
    location: "Kala Shah Kaku, Pakistan",
    description:
      "Large-scale solar installation for one of Pakistan's leading steel mills, powering heavy industrial operations with 5 MWp of clean energy — a landmark project in Pakistan's industrial solar sector.",
    img: "/projects/bashirsons1.webp",
    gallery: [
      "/projects/bashirsons1.webp",
      "/projects/bashirsons2.webp",
      "/projects/bashirsons4.webp",
      "/projects/bashirsons6.webp",
    ],
  },
  {
    slug: "gourmet-bakeries",
    title: "Gourmet Bakeries",
    detailTitle: "Gourmet Bakeries — 3.5 MWp Multi-Branch Solar System",
    category: "Commercial Solar",
    status: "Completed",
    capacity: "3.5 MWp",
    sector: "Food Industry",
    location: "Multiple Branches, Pakistan",
    description:
      "Multi-branch solar installation for one of Pakistan's largest bakery chains — 3.5 MWp distributed across production facilities, ensuring consistent power for baking and cold storage.",
    img: "/projects/gourmet.webp",
    gallery: [
      "/projects/gourmet.webp",
      "/projects/gourmet1.webp",
      "/projects/gourmet4.webp",
      "/projects/gourmet6.webp",
    ],
  },
  {
    slug: "hajvery-foods",
    title: "Hajvery Foods",
    detailTitle: "Hajvery Foods — 1.2 MWp Solar Installation",
    category: "Industrial Solar",
    status: "Completed",
    capacity: "1.2 MWp",
    sector: "Food Processing",
    location: "Daska, Sialkot",
    description:
      "Solar power solution for a major food-processing facility — a 1.2 MWp system meeting the high demands of processing, packaging, and cold-storage operations.",
    img: "/projects/hajvery.webp",
    gallery: ["/projects/hajvery.webp", "/projects/hajvery1.webp", "/projects/hajvery8.webp"],
  },
  {
    slug: "bashir-sons-phase-2",
    title: "Bashir Sons Steel — Phase 2",
    detailTitle: "Bashir Sons Steel Industry — 10 MWp Expansion",
    category: "Industrial Solar",
    status: "Ongoing",
    capacity: "10 MWp",
    sector: "Heavy Industry",
    location: "Kala Shah Kaku, Pakistan",
    description:
      "Second-phase expansion for Bashir Sons Steel Industry, adding 10 MWp of solar capacity to power growing industrial operations — doubling the site's renewable footprint.",
    img: "/projects/ongoingB.webp",
    gallery: ["/projects/ongoingB.webp", "/projects/ongoingB1.webp", "/projects/ongoing7.webp"],
  },
  {
    slug: "al-fateh-steel",
    title: "Al Fateh Steel Mill",
    detailTitle: "Al Fateh Steel Mill — 6 MWp Solar Installation",
    category: "Industrial Solar",
    status: "Ongoing",
    capacity: "6 MWp",
    sector: "Heavy Industry",
    location: "Daska, Sialkot",
    description:
      "Megawatt-scale solar array for a major steel mill, engineered to offset heavy industrial load with grid-tied clean energy and load balancing for continuous operations.",
    img: "/projects/DJI_0288.webp",
    gallery: ["/projects/DJI_0288.webp", "/projects/DJI_0296.webp"],
  },
  {
    slug: "azaan-flour-mill",
    title: "Azaan Flour Mill",
    detailTitle: "Azaan Flour Mill — Commercial Solar Installation",
    category: "Commercial Solar",
    status: "Ongoing",
    capacity: "Commercial",
    sector: "Food Processing",
    location: "Pakistan",
    description:
      "Solar power solution for a flour-milling facility, ensuring reliable clean energy for grinding, packaging, and storage while reducing dependency on the grid.",
    img: "/projects/solar-panels-closeup.webp",
    gallery: ["/projects/solar-panels-closeup.webp"],
  },
];

/** Flagship case study (real project). */
export const caseStudy = {
  slug: "bashir-sons-steel",
  eyebrow: "Featured Project",
  title: "Bashir Sons Steel Industry — 5 MWp",
  image: "/projects/bashirsons2.webp",
  body: "A megawatt-scale grid-tied solar installation for one of Pakistan's leading steel mills. Exa Engineering delivered array design, structural racking, and construction oversight — powering heavy industrial operations with 5 MWp of clean energy and setting a new benchmark for industrial solar adoption in Pakistan.",
  stats: [
    { value: "5 MWp", label: "Nameplate Capacity" },
    { value: "Grid-Tied", label: "Integration" },
    { value: "Heavy Ind.", label: "Sector" },
    { value: "Kala Shah Kaku", label: "Location" },
  ],
  quote:
    "Exa Engineering delivered a massive solar solution that powers our entire steel operation. The savings and reliability have exceeded our expectations.",
  quoteAuthor: "Operations Director — Bashir Sons Steel Industry",
};

export type Milestone = { year: string; title: string; desc: string };

export const milestones: Milestone[] = [
  {
    year: "2009",
    title: "Founded in Lahore",
    desc: "Exa Engineering opens its practice, taking on structural and civil-construction commissions across Punjab.",
  },
  {
    year: "2016",
    title: "First megawatt solar array",
    desc: "The firm moves into utility-scale renewable energy, engineering its first megawatt-class industrial PV installation.",
  },
  {
    year: "2022",
    title: "Pakistan's largest 150 MW project",
    desc: "Exa delivers the country's largest single solar project at 150 MW, setting a national benchmark in renewable energy.",
  },
  {
    year: "2025",
    title: "700th project delivered",
    desc: "The firm passes 700 delivered installations across nine industry sectors, with a 24/7 monitoring desk online.",
  },
];

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Exa Engineering delivered a massive solar solution that powers our entire steel operation. The savings and reliability have exceeded our expectations.",
    name: "Operations Director",
    role: "Bashir Sons Steel, Kala Shah Kaku",
  },
  {
    quote:
      "Their multi-site installation keeps our bakeries running smoothly across all locations. A game-changer for our operations.",
    name: "Facilities Manager",
    role: "Gourmet Bakeries, Pakistan",
  },
  {
    quote:
      "The solar system from Exa Engineering has transformed our processing facility's energy profile — reliable power and significant savings.",
    name: "Plant Manager",
    role: "Hajvery Foods, Daska",
  },
];

export type TeamMember = { initials: string; name: string; role: string; bio: string };

export const team: TeamMember[] = [
  {
    initials: "MA",
    name: "Muhammad Ashiq",
    role: "Chief Executive Officer",
    bio: "Leads Exa Engineering's vision across structural, civil-construction, and solar practices.",
  },
  {
    initials: "MH",
    name: "Muhammad Hussnain",
    role: "Business Manager",
    bio: "Oversees client engagements, commercial strategy, and day-to-day operations.",
  },
  {
    initials: "GA",
    name: "Ghulam Ahmad",
    role: "Project Manager",
    bio: "Manages end-to-end project delivery and construction oversight across active sites.",
  },
];

export type Location = { city: string; coords: string; zone: string; role: string };

export const locations: Location[] = [
  { city: "Lahore", coords: "31.5204° N, 74.3587° E", zone: "HQ — PKT", role: "Head Office" },
  { city: "Sialkot", coords: "32.4945° N, 74.5229° E", zone: "Punjab — PKT", role: "Field Operations" },
  { city: "Kala Shah Kaku", coords: "31.7167° N, 74.2667° E", zone: "Punjab — PKT", role: "Industrial Projects" },
  { city: "Islamabad", coords: "33.6844° N, 73.0479° E", zone: "Capital — PKT", role: "Consulting Desk" },
];

/** Industry sectors served (from the delivered portfolio). */
export const sectors: string[] = [
  "Pharmaceuticals",
  "Flour Mills",
  "Steel Mills",
  "Rice Mills",
  "Education",
  "Food Industry",
  "Beverage Industry",
  "Cooperative Societies",
  "Control Sheds",
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What project sizes do you take on?",
    a: "From single-structure feasibility studies to Pakistan's largest 150 MW solar project. Scope is set in the first consultation, and every engagement gets the same peer-review process regardless of size.",
  },
  {
    q: "Which disciplines does Exa Engineering cover?",
    a: "Structural and civil construction — roads, bridges, underpasses, and buildings — alongside utility-scale and industrial solar. Our renewable-energy practice has its own dedicated page.",
  },
  {
    q: "Do you provide construction-phase oversight?",
    a: "Yes — Stage 04 of our process places a field engineer on site through commissioning, with regular as-built reconciliation against the approved model.",
  },
  {
    q: "How quickly can you start a feasibility review?",
    a: "Typically within two weeks of a signed engagement letter, and sooner for existing clients with data already on file with our operations desk.",
  },
];

/* ------------------------------------------------------------------ */
/*  SOLAR — sub-brand page                                             */
/* ------------------------------------------------------------------ */

export const solarHeroStats: Stat[] = [
  { value: 150, suffix: " MW", label: "Largest Project" },
  { value: 700, suffix: "+", label: "Installations" },
  { value: "99.2%", label: "Fleet Uptime" },
];

export const solarDataStrip: string[] = [
  "IEC 61215 / 61730 COMPLIANT",
  "150 MW LARGEST PROJECT",
  "P50 / P90 YIELD MODELLING",
  "MONITORING DESK: 24/7/365",
];

export type SolarSolution = {
  code: string;
  icon: "utility" | "rooftop" | "storage";
  title: string;
  desc: string;
  delivery: string;
};

export const solarSolutions: SolarSolution[] = [
  {
    code: "PV / UTL",
    icon: "utility",
    title: "Utility & Industrial",
    desc: "1–150 MW grid-tied fields and industrial arrays on driven-pile or ballasted foundations, with full geotechnical survey and P50/P90 energy modelling.",
    delivery: "Typ. delivery 20–36 weeks",
  },
  {
    code: "PV / COM",
    icon: "rooftop",
    title: "Commercial Rooftop",
    desc: "Rooftop systems engineered against the host structure's residual load capacity — never past it — with net-metering integration for homes and businesses.",
    delivery: "Typ. delivery 8–14 weeks",
  },
  {
    code: "PV / NET",
    icon: "storage",
    title: "Net Metering & Storage",
    desc: "Battery storage and net-metering co-located with PV — pad design, thermal management, and interconnection studies delivered as one package.",
    delivery: "Typ. delivery 12–20 weeks",
  },
];

export const solarFeatured = {
  eyebrow: "Featured Installation",
  title: "Bashir Sons Steel — 5 MWp Industrial Array",
  image: "/projects/bashirsons4.webp",
  body: "A 5 MWp grid-tied solar installation across one of Pakistan's leading steel mills. Exa Engineering delivered geotechnical survey, racking structural design, and construction oversight — powering heavy industrial operations with clean energy and first energy ahead of schedule.",
  stats: [
    { value: "5 MWp", label: "Nameplate Capacity" },
    { value: "Grid-Tied", label: "Integration" },
    { value: "Heavy Ind.", label: "Load Profile" },
    { value: "< 0.4%", label: "Pile Refusal Rate" },
  ],
  quote:
    "Exa Engineering's pile and load analysis saved us an entire re-mobilization. First energy came early, and under budget.",
  quoteAuthor: "VP Development — Bashir Sons Steel",
};

export const solarMetrics: Stat[] = [
  { value: 150, suffix: " MW", label: "Largest Project Delivered" },
  { value: 700, suffix: "+", label: "Systems Commissioned" },
  { value: 9, suffix: "", label: "Industry Sectors" },
  { value: 0, suffix: "", label: "Racking Failures On Record" },
];

export const solarProcess: ProcessStage[] = [
  {
    stage: "STAGE 01",
    title: "Resource & Site Study",
    desc: "Irradiance modelling, geotechnical borings, shading analysis, and interconnection screening.",
  },
  {
    stage: "STAGE 02",
    title: "Array & Racking Design",
    desc: "Layout, pile-embedment design, string sizing, and P50/P90 yield certification.",
  },
  {
    stage: "STAGE 03",
    title: "Construction Oversight",
    desc: "Pile-driving QA, torque verification, and IV-curve commissioning on every string.",
  },
  {
    stage: "STAGE 04",
    title: "Monitoring & O&M",
    desc: "24/7 performance monitoring against the yield model, with annual thermographic inspection.",
  },
];

export type Installation = {
  title: string;
  tag: string;
  capacity: string;
  img: string;
  status: "Completed" | "Ongoing";
};

export const solarInstallations: Installation[] = [
  { title: "Bashir Sons Steel Industry", tag: "INDUSTRIAL", capacity: "5 MWp", img: "/projects/bashirsons1.webp", status: "Completed" },
  { title: "Gourmet Bakeries, Multi-Branch", tag: "COMMERCIAL", capacity: "3.5 MWp", img: "/projects/gourmet.webp", status: "Completed" },
  { title: "Hajvery Foods Processing", tag: "INDUSTRIAL", capacity: "1.2 MWp", img: "/projects/hajvery.webp", status: "Completed" },
  { title: "Bashir Sons Steel — Phase 2", tag: "INDUSTRIAL · ONGOING", capacity: "10 MWp", img: "/projects/ongoingB.webp", status: "Ongoing" },
];

export type SolarSpecRow = {
  parameter: string;
  utility: string;
  rooftop: string;
  standard: string;
};

export const solarSpecs: SolarSpecRow[] = [
  { parameter: "Wind Load Design", utility: "Up to 240 km/h, 3-sec gust", rooftop: "Site-specific uplift study", standard: "ASCE 7-22" },
  { parameter: "Module Certification", utility: "Bifacial 580–650 W", rooftop: "Mono PERC 420–460 W", standard: "IEC 61215 / 61730" },
  { parameter: "Foundation", utility: "Driven pile, 2.1–3.0 m embed", rooftop: "Ballast ≤ 24 kg/m² added", standard: "DNV-ST-0126" },
  { parameter: "Yield Modelling", utility: "P50 / P90 / P99 certified", rooftop: "P50 / P90", standard: "IEC 61724-1" },
  { parameter: "Grid Interconnection", utility: "Transmission-level study", rooftop: "Net metering / distribution", standard: "IEEE 1547-2018" },
];

export const solarFaqs: Faq[] = [
  {
    q: "Do you install, or only engineer?",
    a: "We are the engineer of record and construction overseer. Installation is executed by vetted partners working to our drawings, with Exa Engineering field engineers verifying every stage — pile refusal, torque, and string commissioning included.",
  },
  {
    q: "Can my roof or land take a solar array?",
    a: "That's the first thing we check. A structural residual-capacity assessment precedes any layout — if the roof or ground can't carry the system through its design life, we say so before you spend anything on modules.",
  },
  {
    q: "Do you handle net metering?",
    a: "Yes. We handle net-metering applications and interconnection studies end-to-end for residential, commercial, and industrial systems, plus environmental compliance.",
  },
  {
    q: "What happens after commissioning?",
    a: "The array feeds our 24/7 monitoring desk. Underperformance against the yield model triggers a ticket within the hour, and every site receives an annual thermographic inspection.",
  },
];

/** 3D model showcase stats (home). */
export const modelStats: Stat[] = [
  { value: 112, suffix: "", label: "Connection Nodes" },
  { value: 284, suffix: "", label: "Truss Members" },
  { value: "A36", label: "Steel Grade" },
  { value: "1.6×", label: "Safety Factor" },
];
