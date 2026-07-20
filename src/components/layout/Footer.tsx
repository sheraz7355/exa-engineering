import Link from "next/link";
import { LogoMark } from "@/components/brand/Logo";
import { NewsletterForm } from "./NewsletterForm";
import { siteConfig } from "@/lib/site";

const year = 2026;

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isHash = href.startsWith("#");
  const cls = "text-white/70 transition-colors hover:text-signal";
  return isHash ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-white/50">{title}</h2>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <FooterLink href={l.href}>{l.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ variant = "main" }: { variant?: "main" | "solar" }) {
  if (variant === "solar") {
    return (
      <footer className="bg-ink text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4 md:px-10">
          <div className="md:col-span-2">
            <div className="mb-1 flex items-center gap-3">
              <LogoMark size={30} tone="light" />
              <span className="font-display text-lg font-semibold">
                EXA <span className="font-medium text-white/55">ENGINEERING</span>
              </span>
            </div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-white/60">
              {siteConfig.legalName}
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              The renewable-energy practice of Exa Engineering. The same calculations, pointed at the sun.
            </p>
          </div>
          <Column
            title="Solar"
            links={[
              { label: "Solutions", href: "#solutions" },
              { label: "Installations", href: "#installations" },
              { label: "Specifications", href: "#specs" },
            ]}
          />
          <Column
            title="EXA"
            links={[
              { label: "Main Site", href: "/" },
              { label: "Projects", href: "/#projects" },
              { label: "Contact", href: "/#contact" },
            ]}
          />
        </div>
        <Legal dwg="EXA-PV-2026-002" />
      </footer>
    );
  }

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-6 md:px-10">
        <div className="md:col-span-2">
          <div className="mb-1 flex items-center gap-3">
            <LogoMark size={32} tone="light" />
            <span className="font-display text-lg font-semibold">
              EXA <span className="font-medium text-white/55">ENGINEERING</span>
            </span>
          </div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-white/60">
            {siteConfig.legalName}
          </div>
          <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
            Structural, civil-construction, and solar engineering for Pakistan&apos;s most demanding
            projects.
          </p>
          <NewsletterForm />
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-white/60">
            Monthly notes from the operations desk.
          </p>
        </div>
        <Column
          title="Capabilities"
          links={[
            { label: "Structural & Civil", href: "/#services" },
            { label: "Solar & Energy", href: "/solar" },
            { label: "Consulting", href: "/#services" },
          ]}
        />
        <Column
          title="Company"
          links={[
            { label: "About", href: "/#about" },
            { label: "Projects", href: "/#projects" },
            { label: "Leadership", href: "/#team" },
            { label: "Locations", href: "/#locations" },
          ]}
        />
        <Column
          title="Resources"
          links={[
            { label: "Our Process", href: "/#process" },
            { label: "FAQ", href: "/#faq" },
            { label: "Contact", href: "/#contact" },
          ]}
        />
        <div>
          <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-white/50">Contact</h2>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a
                href={siteConfig.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-signal"
              >
                {siteConfig.contact.address}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-signal">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-signal">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Legal dwg="EXA-2026-001" />
    </footer>
  );
}

function Legal({ dwg }: { dwg: string }) {
  return (
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-2 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.1em] text-white/60 md:flex-row md:px-10">
        <span>© {year} {siteConfig.legalName}. All rights reserved.</span>
        <span>DWG NO. {dwg} · REV A</span>
      </div>
    </div>
  );
}
