import { cn } from '@/lib/utils';

// The official Zero Give wordmark, supplied as a high-resolution PNG, is
// rendered via CSS mask so that `currentColor` controls the fill — letting it
// flip between bone, ink and signal across the page without re-exporting art.
export function Logo({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Zero Give"
      className={cn('logo-mark', className)}
      style={{
        WebkitMaskImage: 'url(/images/zero-give-logo.png)',
        maskImage: 'url(/images/zero-give-logo.png)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        backgroundColor: 'currentColor',
        display: 'inline-block',
        aspectRatio: '3584 / 4800',
      }}
    />
  );
}
