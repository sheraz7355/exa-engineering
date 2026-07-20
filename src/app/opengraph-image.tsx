import { ImageResponse } from "next/og";
import { exaMarkDataUri } from "@/lib/brand-svg";
import { siteConfig } from "@/lib/site";

export const alt = "Exa Engineering — Structural, Civil & Solar Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** OpenGraph / social card for the main engineering site. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F2F3EE",
          padding: 70,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* frame */}
        <div style={{ position: "absolute", inset: 28, border: "2px solid #15181B", display: "flex" }} />
        {/* header */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <img src={exaMarkDataUri(96)} width={96} height={96} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 46, fontWeight: 700, color: "#15181B", letterSpacing: -1 }}>
              EXA ENGINEERING
            </div>
            <div style={{ fontSize: 15, color: "#565C60", letterSpacing: 4 }}>
              {siteConfig.legalName.toUpperCase()}
            </div>
          </div>
        </div>
        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 4, width: 84, background: "#FF4D1C", marginBottom: 26 }} />
          <div style={{ fontSize: 66, fontWeight: 700, color: "#15181B", lineHeight: 1.05, maxWidth: 940 }}>
            Structural, civil &amp; solar engineering.
          </div>
        </div>
        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#565C60",
            letterSpacing: 2,
          }}
        >
          <div style={{ display: "flex" }}>PAKISTAN · SINCE {siteConfig.founded}</div>
          <div style={{ display: "flex", color: "#1B3A5C" }}>700+ PROJECTS · 150+ MW DELIVERED</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
