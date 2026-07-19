import { ImageResponse } from "next/og";
import { exaMarkDataUri } from "@/lib/brand-svg";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon — the redesigned EXA mark on paper. */
export default function Icon() {
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
        <img src={exaMarkDataUri(28)} width={28} height={28} alt="" />
      </div>
    ),
    { ...size },
  );
}
