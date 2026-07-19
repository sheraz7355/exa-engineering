// Hero blueprint drawing — signature bridge SVG on the drawing sheet.
import { Sheet } from "@/components/ui/Sheet";

export function HeroDrawing() {
  return (
    <Sheet className="floaty relative border border-line bg-white/60 p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
          DWG NO. EXA—0142
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
          SCALE N.T.S.
        </span>
      </div>
      <svg viewBox="0 0 560 420" className="h-auto w-full">
        <line x1="40" y1="260" x2="520" y2="260" stroke="#15181B" strokeWidth="3" className="draw-path" />
        <line x1="280" y1="260" x2="280" y2="50" stroke="#15181B" strokeWidth="4" className="draw-path" />
        <g stroke="#1B3A5C" strokeWidth="1.4">
          <line x1="280" y1="80" x2="90" y2="260" className="draw-path" />
          <line x1="280" y1="100" x2="140" y2="260" className="draw-path" />
          <line x1="280" y1="120" x2="190" y2="260" className="draw-path" />
          <line x1="280" y1="140" x2="240" y2="260" className="draw-path" />
          <line x1="280" y1="80" x2="470" y2="260" className="draw-path" />
          <line x1="280" y1="100" x2="420" y2="260" className="draw-path" />
          <line x1="280" y1="120" x2="370" y2="260" className="draw-path" />
          <line x1="280" y1="140" x2="320" y2="260" className="draw-path" />
        </g>
        <line x1="90" y1="260" x2="70" y2="330" stroke="#15181B" strokeWidth="2" />
        <line x1="470" y1="260" x2="490" y2="330" stroke="#15181B" strokeWidth="2" />
        <g fill="#FF4D1C">
          <circle cx="280" cy="260" r="3.5" />
          <circle cx="90" cy="260" r="3.5" />
          <circle cx="470" cy="260" r="3.5" />
        </g>
        <line x1="40" y1="300" x2="520" y2="300" stroke="rgba(21,24,27,0.4)" strokeWidth="1" />
        <line x1="40" y1="294" x2="40" y2="306" stroke="rgba(21,24,27,0.4)" strokeWidth="1" />
        <line x1="520" y1="294" x2="520" y2="306" stroke="rgba(21,24,27,0.4)" strokeWidth="1" />
        <text x="280" y="318" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11" fill="#565C60">
          SPAN 240.0 M
        </text>
        <g stroke="#1B3A5C" strokeWidth="1.2" fill="none">
          <path d="M140 235 L140 258" markerEnd="url(#arrow)" />
          <path d="M380 235 L380 258" markerEnd="url(#arrow)" />
        </g>
        <text x="140" y="228" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#1B3A5C">
          4.2 kN/m²
        </text>
        <text x="380" y="228" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#1B3A5C">
          4.2 kN/m²
        </text>
        <line x1="280" y1="60" x2="340" y2="30" className="leader-line" />
        <text x="344" y="33" fontFamily="IBM Plex Mono" fontSize="10" fill="#565C60">
          A36 STEEL PYLON
        </text>
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#1B3A5C" />
          </marker>
        </defs>
      </svg>
    </Sheet>
  );
}
