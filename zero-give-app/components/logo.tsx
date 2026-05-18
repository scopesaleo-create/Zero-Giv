import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('logo-mark', className)} aria-label="Zero Give">
      {/* ZG monogram — chevron-cut tops, merged Z+G, sportswear stencil */}
      <svg viewBox="0 0 240 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
        {/* Z — chevron notched top, thick diagonal, base bar */}
        <path d="
          M 8 30
          L 28 6
          L 48 30
          L 64 14
          L 80 30
          L 104 30
          L 104 56
          L 70 56
          L 132 152
          L 132 178
          L 96 178
          L 96 162
          L 36 70
          L 8 70
          Z
        " />
        <path d="M 8 178 L 8 152 L 96 152 L 96 178 Z" />

        {/* G — angular shield body with internal crossbar tab */}
        <path d="
          M 130 30
          L 150 6
          L 170 30
          L 188 14
          L 206 30
          L 232 30
          L 232 178
          L 130 178
          Z
          M 148 60
          L 214 60
          L 214 76
          L 192 76
          L 192 98
          L 214 98
          L 214 134
          L 148 134
          Z
        " fillRule="evenodd" />

        {/* G — right notch (the crossbar tab on the right side of G) */}
        <path d="M 210 104 L 232 104 L 232 134 L 210 134 Z" />
      </svg>
    </span>
  );
}
