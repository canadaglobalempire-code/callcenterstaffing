import { cn } from '@/lib/utils';

type Marker = {
  x: number;
  y: number;
  label: string;
  region: 'on' | 'near' | 'off';
  align?: 'left' | 'right';
};

const MARKERS: Marker[] = [
  { x: 195, y: 110, label: 'Vancouver', region: 'on', align: 'left' },
  { x: 240, y: 138, label: 'Phoenix', region: 'on', align: 'left' },
  { x: 270, y: 132, label: 'Dallas', region: 'on' },
  { x: 305, y: 130, label: 'Atlanta', region: 'on' },
  { x: 318, y: 118, label: 'New York', region: 'on' },
  { x: 248, y: 175, label: 'Guadalajara', region: 'near', align: 'left' },
  { x: 268, y: 170, label: 'Mexico City', region: 'near' },
  { x: 290, y: 200, label: 'San José', region: 'near' },
  { x: 318, y: 220, label: 'Bogotá', region: 'near' },
  { x: 660, y: 195, label: 'Manila', region: 'off' },
  { x: 502, y: 248, label: 'Cape Town', region: 'off', align: 'left' },
];

const REGION_DOT: Record<Marker['region'], string> = {
  on: 'fill-brand-600',
  near: 'fill-accent-500',
  off: 'fill-navy-700',
};

const REGION_PULSE: Record<Marker['region'], string> = {
  on: 'fill-brand-600/20',
  near: 'fill-accent-500/25',
  off: 'fill-navy-700/20',
};

// Simplified continent paths — smooth polygons, recognizable silhouettes
const CONTINENTS = [
  // North America
  'M 105 95 Q 130 75 175 78 L 235 80 Q 290 85 325 105 L 340 130 Q 335 155 305 165 L 285 170 Q 270 185 255 200 L 240 200 Q 225 195 215 180 L 195 175 Q 175 170 165 155 L 145 140 Q 125 130 110 120 Z',
  // Central America (sliver)
  'M 250 195 Q 268 200 282 210 L 295 222 Q 290 232 275 230 L 260 222 Q 252 212 250 200 Z',
  // South America
  'M 295 220 Q 318 222 332 240 L 340 270 Q 335 300 320 320 L 305 335 Q 290 330 285 305 L 282 275 Q 282 245 292 225 Z',
  // Europe
  'M 395 105 Q 420 95 450 100 L 475 110 Q 478 130 460 140 L 435 142 Q 410 138 400 125 Z',
  // Africa
  'M 432 145 Q 470 145 495 160 L 510 195 Q 510 225 498 250 L 482 270 Q 465 268 455 250 L 442 220 Q 432 190 430 165 Z',
  // Asia / Eurasia (large)
  'M 478 90 Q 540 80 605 88 L 680 100 Q 720 115 720 140 L 705 165 Q 670 180 625 178 L 580 178 Q 540 168 510 155 L 488 145 Q 478 125 478 100 Z',
  // South-East Asia / India
  'M 560 175 Q 590 180 615 195 L 625 210 Q 615 222 595 220 L 575 215 Q 562 200 558 188 Z',
  // Philippines / Indonesia islands
  'M 645 185 Q 660 188 670 198 L 668 208 Q 655 210 648 200 Z',
  'M 672 205 Q 685 207 692 215 L 688 222 Q 678 222 672 215 Z',
  // Australia
  'M 660 275 Q 695 270 720 285 L 728 305 Q 712 318 685 315 L 660 308 Q 650 295 658 282 Z',
];

export function WorldMap({ className }: { className?: string }) {
  return (
    <div className={cn('relative aspect-[2/1] w-full', className)}>
      <svg
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="continent-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Subtle latitude lines for depth */}
        <g className="stroke-ink-200" strokeWidth="0.5" strokeDasharray="2 5" fill="none" opacity="0.5">
          <line x1="20" y1="100" x2="780" y2="100" />
          <line x1="20" y1="200" x2="780" y2="200" />
          <line x1="20" y1="300" x2="780" y2="300" />
        </g>

        {/* Continents */}
        <g>
          {CONTINENTS.map((d, i) => (
            <path key={i} d={d} fill="url(#continent-grad)" stroke="#cbd5e1" strokeWidth="0.6" />
          ))}
        </g>

        {/* Connection arcs */}
        <g className="stroke-brand-600/35" strokeWidth="0.8" strokeDasharray="3 4" fill="none">
          <path d="M 305 130 Q 460 50 660 195" />
          <path d="M 270 170 Q 280 195 318 220" />
          <path d="M 660 195 Q 580 230 502 248" />
        </g>

        {/* Markers + labels */}
        {MARKERS.map((m, i) => {
          const labelX = m.align === 'left' ? m.x - 8 : m.x + 8;
          const anchor = m.align === 'left' ? 'end' : 'start';
          return (
            <g key={i}>
              <circle cx={m.x} cy={m.y} r="11" className={cn(REGION_PULSE[m.region])}>
                <animate attributeName="r" values="9;14;9" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
                <animate attributeName="opacity" values="1;0.2;1" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
              </circle>
              <circle cx={m.x} cy={m.y} r="4" className={cn(REGION_DOT[m.region])} stroke="white" strokeWidth="1.5" />
              <text
                x={labelX}
                y={m.y + 3.5}
                textAnchor={anchor}
                className="fill-navy-950 font-semibold"
                fontSize="9.5"
              >
                {m.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
