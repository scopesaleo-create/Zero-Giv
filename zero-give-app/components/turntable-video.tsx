'use client';

import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  poster?: string;
  className?: string;
  /** seconds for one full forward+back sweep at speed = 1 */
  cycle?: number;
  /** speed multiplier (1 = normal, lower = slower) */
  speed?: number;
};

/**
 * Drives a video's currentTime in a cosine-eased ping-pong (0 → end → 0).
 * Because the turnarounds happen at identical frames, the motion is perfectly
 * continuous — no loop seam, no position jump — which a partial-rotation clip
 * cannot achieve with a normal loop. The sock sweeps smoothly back and forth.
 */
export function TurntableVideo({ src, poster, className, cycle = 22, speed = 1 }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const speedRef = useRef(speed);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.pause();

    let raf = 0;
    let phase = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const d = v.duration;
      if (d && Number.isFinite(d) && d > 0) {
        const omega = (2 * Math.PI) / (cycle / Math.max(0.05, speedRef.current));
        phase += omega * dt;
        if (phase > Math.PI * 2) phase -= Math.PI * 2;
        // cosine ease: 0 → 1 → 0, velocity zero at each turnaround
        const tnorm = (1 - Math.cos(phase)) / 2;
        try {
          v.currentTime = tnorm * d;
        } catch {
          /* seeking not ready yet */
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [src, cycle]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      playsInline
      preload="auto"
    />
  );
}
