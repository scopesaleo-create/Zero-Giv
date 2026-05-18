'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

type Props = {
  src: string;
  className?: string;
  /** RGB color to key out (0..255 each), default white */
  keyColor?: [number, number, number];
  /** Pixel value above which to start fading to transparent */
  threshold?: number;
  /** Range over which the fade happens (1-30 typical) */
  softness?: number;
  /** preload attribute for the underlying <video> */
  preload?: 'auto' | 'metadata' | 'none';
  /** autoplay (muted) */
  autoPlay?: boolean;
  /** loop */
  loop?: boolean;
};

export type KeyedVideoHandle = {
  video: HTMLVideoElement | null;
  canvas: HTMLCanvasElement | null;
};

/**
 * Plays a video into a hidden <video> element, draws each frame onto a <canvas>,
 * and pixel-keys out a near-uniform background color in real time. Works in every
 * browser without needing alpha-WebM/HEVC.
 */
export const KeyedVideo = forwardRef<KeyedVideoHandle, Props>(function KeyedVideo(
  { src, className, keyColor = [255, 255, 255], threshold = 235, softness = 18, preload = 'metadata', autoPlay = false, loop = false },
  ref,
) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useImperativeHandle(ref, () => ({ video: videoRef.current, canvas: canvasRef.current }));

  useEffect(() => {
    const v = videoRef.current;
    const c = canvasRef.current;
    if (!v || !c) return;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let raf = 0;
    let sized = false;

    const draw = () => {
      if (v.readyState >= 2 && v.videoWidth) {
        if (!sized || c.width !== v.videoWidth) {
          c.width = v.videoWidth;
          c.height = v.videoHeight;
          sized = true;
        }
        ctx.drawImage(v, 0, 0, c.width, c.height);
        const img = ctx.getImageData(0, 0, c.width, c.height);
        const d = img.data;
        const [kr, kg, kb] = keyColor;
        const t = threshold;
        const s = softness;

        for (let i = 0; i < d.length; i += 4) {
          const r = d[i];
          const g = d[i + 1];
          const b = d[i + 2];
          // distance to keyColor on min-channel and channel-similarity
          const dr = Math.abs(r - kr);
          const dg = Math.abs(g - kg);
          const db = Math.abs(b - kb);
          const dist = Math.max(dr, dg, db);
          const minC = Math.min(r, g, b);

          if (minC >= t && dist <= 255 - t + s) {
            // soft fade based on how white
            const above = minC - t;
            const alpha = Math.max(0, 255 - above * Math.ceil(255 / Math.max(1, s)));
            d[i + 3] = alpha;
          }
        }
        ctx.putImageData(img, 0, 0);
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [keyColor, threshold, softness]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        crossOrigin="anonymous"
        preload={preload}
        autoPlay={autoPlay}
        loop={loop}
        style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
      />
      <canvas ref={canvasRef} className={className} />
    </>
  );
});
