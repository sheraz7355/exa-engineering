import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { EngineeredBg } from "@/components/layout/EngineeredBg";
import { JsonLd, organizationLd, websiteLd } from "@/lib/jsonld";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} | Structural, Civil & Solar Engineering`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "engineering",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.legalName} — Structural, Civil & Solar Engineering`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalName} — Structural, Civil & Solar Engineering`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#15181B" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-paper font-body text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-[12px] focus:uppercase focus:tracking-[0.12em] focus:text-white"
        >
          Skip to content
        </a>
        <EngineeredBg />
        {children}
        <JsonLd data={[organizationLd(), websiteLd()]} />
      </body>
    </html>
  );
}
