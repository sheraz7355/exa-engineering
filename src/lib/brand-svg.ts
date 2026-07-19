/**
 * The EXA mark as a raw SVG string / data-URI, for use inside `next/og`
 * ImageResponse (Satori) where React SVG components aren't rendered — favicon
 * and OpenGraph images embed it via <img src={exaMarkDataUri()} />.
 * Geometry mirrors <LogoMark> in components/brand/Logo.tsx.
 */
export function exaMarkSvg(size = 40, tone: "default" | "light" = "default"): string {
  const ink = tone === "light" ? "#F2F3EE" : "#15181B";
  const panel = tone === "light" ? "#8FA9C4" : "#1B3A5C";
  const signal = "#FF4D1C";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 40 40" fill="none">
  <path d="M9 35 C3.6 28.5 3.6 14.5 9 5 C14.4 14.5 14.4 28.5 9 35 Z" stroke="${ink}" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M9 9 V31 M9 15.5 L12 12.8 M9 21 L6 18.3" stroke="${ink}" stroke-width="1"/>
  <circle cx="29.5" cy="10" r="3.6" stroke="${signal}" stroke-width="1.4"/>
  <g stroke="${signal}" stroke-width="1.4" stroke-linecap="round">
    <line x1="29.5" y1="2.6" x2="29.5" y2="4.4"/>
    <line x1="37" y1="10" x2="35.2" y2="10"/>
    <line x1="34.8" y1="4.7" x2="33.5" y2="6"/>
    <line x1="34.8" y1="15.3" x2="33.5" y2="14"/>
    <line x1="24.2" y1="4.7" x2="25.5" y2="6"/>
  </g>
  <path d="M16 19 H30 L34.5 33 H11.5 Z" stroke="${panel}" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M20.7 19 L18.4 33 M25.3 19 L26.6 33 M13.9 26 H32.1" stroke="${panel}" stroke-width="1"/>
</svg>`;
}

export function exaMarkDataUri(size = 40, tone: "default" | "light" = "default"): string {
  return `data:image/svg+xml,${encodeURIComponent(exaMarkSvg(size, tone))}`;
}
