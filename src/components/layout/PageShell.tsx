import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { NavItem } from "@/lib/site";

/** Standard page frame: fixed header, offset <main>, and footer. */
export function PageShell({
  children,
  nav,
  cta,
  wordmark = "ENGINEERING",
  footerVariant = "main",
}: {
  children: ReactNode;
  nav: readonly NavItem[];
  cta: { label: string; href: string };
  wordmark?: string;
  footerVariant?: "main" | "solar";
}) {
  return (
    <>
      <Header nav={nav} cta={cta} wordmark={wordmark} />
      <main id="main" className="pt-[76px]">
        {children}
      </main>
      <Footer variant={footerVariant} />
    </>
  );
}
