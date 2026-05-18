'use client';

import { useEffect, useRef, useState } from 'react';
import { KeyedVideo, type KeyedVideoHandle } from '@/components/keyed-video';

export function Spline3D() {
  const kvRef = useRef<KeyedVideoHandle>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState<'auto' | 'cursor' | 'scroll'>('auto');

  useEffect(() => {
    const v = kvRef.current?.video;
    const w = wrapRef.current;
    if (!v || !w) return;

    // ensure metadata loads so we have duration
    v.preload = 'metadata';

    let raf = 0;
    let target = 0;
    let current = 0;
    let autoTime = 0;
    let lastNow = performance.now();
    let interacting = false;
    let scrolling = false;
    let scrollTimer: number | null = null;

    const setT = (t: number) => { target = Math.min(1, Math.max(0, t)); };

    const loop = (now: number) => {
      const dt = (now - lastNow) / 1000;
      lastNow = now;
      if (!interacting && !scrolling) {
        autoTime += dt * 0.06;
        target = autoTime % 1;
      }
      current += (target - current) * 0.12;
      if (v.duration && Number.isFinite(v.duration)) {
        v.currentTime = current * v.duration;
        setProgress(current);
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = w.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      interacting = true;
      setMode('cursor');
      setT(x);
    };
    const onLeave = () => {
      interacting = false;
      autoTime = current;
      setMode('auto');
    };
    const onScroll = () => {
      const r = w.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh;
      const passed = Math.min(total, Math.max(0, vh - r.top));
      const p = passed / total;
      scrolling = true;
      setMode('scroll');
      setT(p);
      if (scrollTimer) window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        scrolling = false;
        autoTime = current;
        if (!interacting) setMode('auto');
      }, 220);
    };

    raf = requestAnimationFrame(loop);
    w.addEventListener('pointermove', onMove);
    w.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      w.removeEventListener('pointermove', onMove);
      w.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      if (scrollTimer) window.clearTimeout(scrollTimer);
    };
  }, []);

  const modeLabel =
    mode === 'cursor' ? 'CURSOR · scrubbing'
    : mode === 'scroll' ? 'SCROLL · scrubbing'
    : 'AMBIENT · auto';

  return (
    <section id="spline" className="section bg-ink">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 03</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest reveal">Specimen.</h2>
          </div>
          <span className="num hidden md:inline">A live walk-through · ZG-01</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-between gap-12">
            <div>
              <p className="reveal eyebrow mb-6">Hover · scroll · scrub</p>
              <h3 className="reveal display text-4xl md:text-5xl tracking-tightest leading-[1.02]" data-delay="1">
                A specimen<br />you can <span className="editorial">handle.</span>
              </h3>
              <p className="reveal text-bone/90 leading-[1.7] mt-8 max-w-sm" data-delay="2">
                Drag your cursor across the panel to walk around the sock. Scroll and the camera follows the page. Step away and the rotation breathes on its own.
              </p>
              <a href="#cta" className="reveal btn-text mt-10" data-target data-delay="3">
                Reserve a pair <span className="arr">→</span>
              </a>
            </div>

            <dl className="reveal grid grid-cols-2 gap-x-6 gap-y-6 pt-8 border-t border-rule" data-delay="4">
              <div>
                <dt className="label text-bone/75">Material</dt>
                <dd className="text-sm text-bone/85 mt-2">Recycled poly / Lycra®</dd>
              </div>
              <div>
                <dt className="label text-bone/75">Knit</dt>
                <dd className="text-sm text-bone/85 mt-2">Zonal compression</dd>
              </div>
              <div>
                <dt className="label text-bone/75">Grip</dt>
                <dd className="text-sm text-bone/85 mt-2">Silicone, directional</dd>
              </div>
              <div>
                <dt className="label text-bone/75">Edition</dt>
                <dd className="text-sm text-bone/85 mt-2">ZG-01 · launch</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8">
            <div
              ref={wrapRef}
              className="vitrine vitrine--isolated cursor-drag aspect-[7/5] relative"
              data-cursor="DRAG · SCRUB"
            >
              <KeyedVideo
                ref={kvRef}
                src="/videos/sock-interactive.mp4"
                preload="metadata"
                className="vitrine-canvas"
                keyColor={[255, 255, 255]}
                threshold={232}
                softness={14}
              />
              {/* registration marks */}
              <span className="vitrine-cross" style={{ top: 14, left: 14 }} />
              <span className="vitrine-cross" style={{ top: 14, right: 14 }} />
              <span className="vitrine-cross" style={{ bottom: 14, left: 14 }} />
              <span className="vitrine-cross" style={{ bottom: 14, right: 14 }} />
              <span className="vitrine-meta" style={{ top: 24, left: 36 }}>ZG-01 · 360°</span>
              <span className="vitrine-meta" style={{ top: 24, right: 36 }}>{modeLabel}</span>
              <span className="vitrine-meta" style={{ bottom: 24, left: 36 }}>Fig. 03.A</span>
              <span className="vitrine-meta" style={{ bottom: 24, right: 36 }}>
                {String(Math.round(progress * 360)).padStart(3, '0')}°
              </span>
              <div className="vitrine-scrub" style={{ ['--p' as any]: `${progress * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
