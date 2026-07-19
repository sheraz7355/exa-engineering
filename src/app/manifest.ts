// Web app manifest — PWA metadata for EXA Engineering
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: "EXA",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F2F3EE",
    theme_color: "#F2F3EE",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
