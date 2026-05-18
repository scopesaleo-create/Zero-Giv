'use client';

import { useEffect, useRef, useState } from 'react';

export function Spline3D() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState<'auto' | 'cursor' | 'scroll'>('auto');

  // play-through and scrub via hover OR scroll
  useEffect(() => {
    const v = videoRef.current;
    const w = wrapRef.current;
    if (!v || !w) return;

    let raf = 0;
    let target = 0;        // 0–1 desired scrub position
    let current = 0;       // smoothed
    let autoTime = 0;
    let lastNow = performance.now();
    let interacting = false;
    let scrolling = false;
    let scrollTimer: number | null = null;

    const setTarget = (t: number) => {
      target = Math.min(1, Math.max(0, t));
    };

    const loop = (now: number) => {
      const dt = (now - lastNow) / 1000;
      lastNow = now;

      if (!interacting && !scrolling) {
        // ambient autoplay loop
        autoTime += dt * 0.06; // slow ambient pass — 0..1 over ~16s
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
      setTarget(x);
    };
    const onLeave = () => {
      interacting = false;
      // smoothly hand back to auto from current position
      autoTime = current;
      setMode('auto');
    };

    const onScroll = () => {
      const r = w.getBoundingClientRect();
      const vh = window.innerHeight;
      // scroll progress through the section (entry → exit)
      const total = r.height + vh;
      const passed = Math.min(total, Math.max(0, vh - r.top));
      const p = passed / total;
      scrolling = true;
      setMode('scroll');
      setTarget(p);
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
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest">Specimen.</h2>
          </div>
          <span className="num hidden md:inline">A live walk-through · ZG-01</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* left copy */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-12">
            <div>
              <p className="reveal eyebrow mb-6">Hover · scroll · scrub</p>
              <h3 className="display text-4xl md:text-5xl tracking-tightest leading-[1.02]">
                A specimen<br />you can <span className="editorial">handle.</span>
              </h3>
              <p className="reveal text-bone/65 leading-[1.7] mt-8 max-w-sm" data-delay="2">
                Drag your cursor across the panel to walk around the sock. Scroll and the camera follows the page. Step away and the rotation breathes on its own.
              </p>
              <a href="#cta" className="btn-text mt-10" data-target>Reserve a pair <span className="arr">→</span></a>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 pt-8 border-t border-rule">
              <div>
                <dt className="label text-bone/40">Material</dt>
                <dd className="text-sm text-bone/85 mt-2">Recycled poly / Lycra®</dd>
              </div>
              <div>
                <dt className="label text-bone/40">Knit</dt>
                <dd className="text-sm text-bone/85 mt-2">Zonal compression</dd>
              </div>
              <div>
                <dt className="label text-bone/40">Grip</dt>
                <dd className="text-sm text-bone/85 mt-2">Silicone, directional</dd>
              </div>
              <div>
                <dt className="label text-bone/40">Edition</dt>
                <dd className="text-sm text-bone/85 mt-2">ZG-01 · launch</dd>
              </div>
            </dl>
          </div>

          {/* right: vitrine */}
          <div className="lg:col-span-8">
            <div ref={wrapRef} className="vitrine aspect-[7/5] relative cursor-none" data-target>
              <video
                ref={videoRef}
                src="/videos/sock-interactive.mp4"
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* registration marks */}
              <span className="vitrine-cross" style={{ top: 14, left: 14 }} />
              <span className="vitrine-cross" style={{ top: 14, right: 14 }} />
              <span className="vitrine-cross" style={{ bottom: 14, left: 14 }} />
              <span className="vitrine-cross" style={{ bottom: 14, right: 14 }} />

              {/* meta tags */}
              <span className="vitrine-meta" style={{ top: 24, left: 36 }}>ZG-01 · 360°</span>
              <span className="vitrine-meta" style={{ top: 24, right: 36 }}>{modeLabel}</span>
              <span className="vitrine-meta" style={{ bottom: 24, left: 36 }}>Fig. 03.A</span>
              <span className="vitrine-meta" style={{ bottom: 24, right: 36 }}>
                {String(Math.round(progress * 360)).padStart(3, '0')}°
              </span>

              {/* scrub track */}
              <div className="vitrine-scrub" style={{ ['--p' as any]: `${progress * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
