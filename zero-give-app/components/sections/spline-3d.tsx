'use client';

import { useEffect, useRef, useState } from 'react';
import { KeyedVideo, type KeyedVideoHandle } from '@/components/keyed-video';

const CALLOUTS: { n: string; t: string; top: string; left?: string; right?: string; align: 'left' | 'right' }[] = [
  { n: '01', t: 'Cuff lock',         top: '12%', left: '-2%',  align: 'left' },
  { n: '02', t: 'Compression band',  top: '34%', right: '-2%', align: 'right' },
  { n: '03', t: 'PivotCore array',   top: '58%', left: '-2%',  align: 'left' },
  { n: '04', t: 'Grip print sole',   top: '80%', right: '-2%', align: 'right' },
];

export function Spline3D() {
  const kvRef = useRef<KeyedVideoHandle>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState<'auto' | 'cursor' | 'scroll'>('auto');

  useEffect(() => {
    const v = kvRef.current?.video;
    const w = wrapRef.current;
    if (!v || !w) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
      if (!reduced && !interacting && !scrolling) {
        autoTime += dt * 0.05;
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
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 03 — Specimen</span>
          </div>
          <span className="num hidden md:inline">Live walk-through · ZG-01</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-between gap-12">
            <div>
              <p className="reveal eyebrow mb-8">Hover · scroll · scrub</p>
              <h3 className="reveal display text-display-md tracking-tightest" data-delay="1">
                A specimen you can <span className="editorial text-accent">handle</span>.
              </h3>
              <p className="reveal text-bone/85 leading-[1.7] text-[16px] mt-10 max-w-sm" data-delay="2">
                Drag your cursor across the panel to walk around the sock. Scroll and the camera
                follows the page. Step away and the rotation breathes on its own.
              </p>
              <a href="#cta" className="reveal btn-text mt-10" data-target data-delay="3">
                Reserve a pair <span className="arr">→</span>
              </a>
            </div>

            <dl className="reveal grid grid-cols-2 gap-x-6 gap-y-6 pt-8 border-t border-rule" data-delay="4">
              <div>
                <dt className="label text-bone/55">Material</dt>
                <dd className="text-sm text-bone/90 mt-2">Recycled poly / Lycra®</dd>
              </div>
              <div>
                <dt className="label text-bone/55">Knit</dt>
                <dd className="text-sm text-bone/90 mt-2">Zonal compression</dd>
              </div>
              <div>
                <dt className="label text-bone/55">Grip</dt>
                <dd className="text-sm text-bone/90 mt-2">Silicone, directional</dd>
              </div>
              <div>
                <dt className="label text-bone/55">Edition</dt>
                <dd className="text-sm text-bone/90 mt-2">ZG-01 · launch</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8 relative">
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
              <div className="vitrine-scrub" style={{ ['--p' as string]: `${progress * 100}%` }} />
            </div>

            {/* technical callouts overlaid against the panel edges */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
              {CALLOUTS.map((c) => (
                <div
                  key={c.n}
                  className={`callout ${c.align === 'right' ? 'is-right' : ''}`}
                  style={{ top: c.top, left: c.left, right: c.right }}
                >
                  <span className="dot" />
                  <span className="lead" />
                  <span className="meta"><span className="n">{c.n}</span>{c.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
