import { ImageResponse } from "next/og";
import { exaMarkDataUri } from "@/lib/brand-svg";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon / larger PWA icon — the EXA mark on paper. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F2F3EE",
        }}
      >
        <img src={exaMarkDataUri(140)} width={140} height={140} alt="" />
      </div>
    ),
    { ...size },
  );
}
