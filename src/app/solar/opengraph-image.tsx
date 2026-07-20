import { ImageResponse } from "next/og";
import { exaMarkDataUri } from "@/lib/brand-svg";

export const alt = "Exa Engineering — Solar arrays, engineered to the panel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** OpenGraph / social card for the solar sub-brand page. */
export default function SolarOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#15181B",
          padding: 70,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", inset: 28, border: "2px solid rgba(255,255,255,0.25)", display: "flex" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <img src={exaMarkDataUri(96, "light")} width={96} height={96} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 46, fontWeight: 700, color: "#F2F3EE", letterSpacing: -1 }}>EXA ENGINEERING</div>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", letterSpacing: 4 }}>
              THE SOLAR PRACTICE OF EXA ENGINEERING
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 4, width: 84, background: "#FF4D1C", marginBottom: 26 }} />
          <div style={{ fontSize: 66, fontWeight: 700, color: "#F2F3EE", lineHeight: 1.05, maxWidth: 940 }}>
            Solar arrays, engineered to the panel.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: 2,
          }}
        >
          <div style={{ display: "flex" }}>UTILITY · INDUSTRIAL · ROOFTOP</div>
          <div style={{ display: "flex", color: "#FF4D1C" }}>150+ MW DELIVERED · 700+ INSTALLS</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
