'use client';

import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  poster?: string;
  className?: string;
  /** seconds of crossfade overlap that hides the loop seam */
  fade?: number;
  /** playback speed (1 = normal) */
  playbackRate?: number;
};

/**
 * Loops a video with no visible seam by crossfading between two stacked
 * instances. When the active clip is `fade` seconds from its end, the idle
 * clip restarts from 0 and the two opacity-crossfade — so a rotation that
 * doesn't perfectly close still reads as one continuous, smooth motion.
 */
export function SeamlessVideo({ src, poster, className, fade = 0.5, playbackRate = 1 }: Props) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    let active = a;
    let idle = b;
    let raf = 0;

    a.style.opacity = '1';
    b.style.opacity = '0';
    a.play().catch(() => {});

    const tick = () => {
      const v = active;
      if (v.duration && Number.isFinite(v.duration)) {
        const remaining = v.duration - v.currentTime;
        if (remaining <= fade && idle.paused) {
          idle.currentTime = 0;
          idle.play().catch(() => {});
        }
        if (!idle.paused) {
          const t = Math.min(1, idle.currentTime / fade);
          active.style.opacity = String(1 - t);
          idle.style.opacity = String(t);
          if (t >= 1) {
            active.pause();
            active.style.opacity = '0';
            const tmp = active;
            active = idle;
            idle = tmp;
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [src, fade]);

  useEffect(() => {
    if (aRef.current) aRef.current.playbackRate = playbackRate;
    if (bRef.current) bRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <>
      <video ref={aRef} className={className} src={src} poster={poster} muted playsInline preload="auto" />
      <video ref={bRef} className={className} src={src} muted playsInline preload="auto" aria-hidden />
    </>
  );
}
