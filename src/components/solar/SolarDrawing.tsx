// Solar array blueprint drawing — hero technical sheet for the /solar page
import { Sheet } from "@/components/ui/Sheet";

export function SolarDrawing() {
  return (
    <Sheet className="floaty relative border border-line bg-white/60 p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
          DWG NO. EXA—PV—0310
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
          SCALE N.T.S.
        </span>
      </div>
      <svg viewBox="0 0 560 420" className="h-auto w-full">
        {/* sun path arc */}
        <path
          d="M60 120 A 240 240 0 0 1 500 120"
          fill="none"
          stroke="rgba(27,58,92,0.35)"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
        <circle cx="280" cy="52" r="12" fill="none" stroke="#FF4D1C" strokeWidth="1.6" className="draw-path" />
        <g stroke="#FF4D1C" strokeWidth="1.2">
          <line x1="280" y1="30" x2="280" y2="22" />
          <line x1="280" y1="82" x2="280" y2="74" />
          <line x1="258" y1="52" x2="250" y2="52" />
          <line x1="310" y1="52" x2="302" y2="52" />
          <line x1="264" y1="36" x2="258" y2="30" />
          <line x1="296" y1="36" x2="302" y2="30" />
          <line x1="264" y1="68" x2="258" y2="74" />
          <line x1="296" y1="68" x2="302" y2="74" />
        </g>
        {/* ground line */}
        <line x1="30" y1="330" x2="530" y2="330" stroke="#15181B" strokeWidth="2.5" className="draw-path" />
        {/* tilted panel rows (side profile) */}
        <g className="draw-path" stroke="#1B3A5C" strokeWidth="2" fill="none">
          <line x1="70" y1="318" x2="170" y2="250" />
          <line x1="230" y1="318" x2="330" y2="250" />
          <line x1="390" y1="318" x2="490" y2="250" />
        </g>
        {/* panel cell hatching */}
        <g stroke="#1B3A5C" strokeWidth="1" opacity="0.55">
          <line x1="95" y1="301" x2="103" y2="313" />
          <line x1="120" y1="284" x2="128" y2="296" />
          <line x1="145" y1="267" x2="153" y2="279" />
          <line x1="255" y1="301" x2="263" y2="313" />
          <line x1="280" y1="284" x2="288" y2="296" />
          <line x1="305" y1="267" x2="313" y2="279" />
          <line x1="415" y1="301" x2="423" y2="313" />
          <line x1="440" y1="284" x2="448" y2="296" />
          <line x1="465" y1="267" x2="473" y2="279" />
        </g>
        {/* support piles */}
        <g stroke="#15181B" strokeWidth="2">
          <line x1="120" y1="284" x2="120" y2="330" />
          <line x1="280" y1="284" x2="280" y2="330" />
          <line x1="440" y1="284" x2="440" y2="330" />
        </g>
        {/* pile foundations */}
        <g fill="#FF4D1C">
          <circle cx="120" cy="330" r="3.5" />
          <circle cx="280" cy="330" r="3.5" />
          <circle cx="440" cy="330" r="3.5" />
        </g>
        {/* tilt angle */}
        <path d="M110 318 A 40 40 0 0 0 100 297" fill="none" stroke="#FF4D1C" strokeWidth="1.2" />
        <text x="128" y="305" fontFamily="IBM Plex Mono" fontSize="11" fill="#FF4D1C">
          34°
        </text>
        {/* row pitch dimension */}
        <line x1="70" y1="360" x2="230" y2="360" stroke="rgba(21,24,27,0.4)" strokeWidth="1" />
        <line x1="70" y1="354" x2="70" y2="366" stroke="rgba(21,24,27,0.4)" strokeWidth="1" />
        <line x1="230" y1="354" x2="230" y2="366" stroke="rgba(21,24,27,0.4)" strokeWidth="1" />
        <text x="150" y="378" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11" fill="#565C60">
          ROW PITCH 8.4 M
        </text>
        {/* leader labels */}
        <line x1="330" y1="250" x2="380" y2="215" className="leader-line" />
        <text x="384" y="218" fontFamily="IBM Plex Mono" fontSize="10" fill="#565C60">
          BIFACIAL MODULE, 620 W
        </text>
        <line x1="280" y1="310" x2="230" y2="220" className="leader-line" />
        <text x="152" y="214" fontFamily="IBM Plex Mono" fontSize="10" fill="#565C60">
          DRIVEN STEEL PILE, 2.4 M
        </text>
        {/* irradiance arrows */}
        <g stroke="#FF4D1C" strokeWidth="1.2" fill="none">
          <path d="M210 120 L160 210" markerEnd="url(#arrowE)" />
          <path d="M350 120 L300 210" markerEnd="url(#arrowE)" />
        </g>
        <text x="290" y="110" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#FF4D1C">
          1,120 kWh/m²·yr
        </text>
        <defs>
          <marker id="arrowE" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#FF4D1C" />
          </marker>
        </defs>
      </svg>
    </Sheet>
  );
}
