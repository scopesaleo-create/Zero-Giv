import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('logo-mark', className)} aria-label="Zero Give">
      {/* ZG monogram — angular, sportswear cut, merged Z/G */}
      <svg viewBox="0 0 200 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Z — chevron top, diagonal bar, base */}
        <path d="M14 12 L34 0 L54 12 L98 12 L98 30 L62 30 L98 84 L98 110 L74 110 L74 96 L36 30 L14 30 Z" />
        <path d="M18 110 L18 92 L56 92 L56 110 Z" />
        {/* G — angular shield with notch */}
        <path d="M104 36 L124 24 L144 36 L164 24 L184 36 L184 110 L104 110 Z M122 54 L166 54 L166 64 L150 64 L150 78 L166 78 L166 96 L122 96 Z" />
      </svg>
    </span>
  );
}
