'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { COMPONENT_META, type SockFocus } from '@/lib/images';
import { cn } from '@/lib/utils';
import { BackgroundPathsLayer } from '@/components/ui/background-paths';

type Hot = {
  key: Exclude<SockFocus, 'hero'>;
  label: string;
  num: string;
  top: string;
  left: string;
  side: 'left' | 'right';
};

const HOTSPOTS: Hot[] = [
  { key: 'heel', label: 'Heel architecture', num: 'A1', top: '32%', left: '23%', side: 'left' },
  { key: 'grip', label: 'PivotCore array',   num: 'A2', top: '72%', left: '50%', side: 'right' },
  { key: 'toe',  label: 'Toe cap',           num: 'A3', top: '70%', left: '78%', side: 'right' },
];

export function HeroSock() {
  const [focus, setFocus] = useState<SockFocus>('hero');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageInnerRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setFocus('hero'); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = focus === 'hero' ? 0.8 : 0.4;
  }, [focus]);

  // 3D spatial scroll zoom: while the hero section is on screen, push the sock
  // forward (z-translate) and slightly upward as the user scrolls past it.
  // Copy fades and lifts in counter-direction for parallax depth.
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageInnerRef.current;
    const copy = copyRef.current;
    if (!section || !stage) return;

    let raf = 0;
    const update = () => {
      const r = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when section just enters from bottom, 1 when fully scrolled past top
      const total = r.height + vh;
      const passed = Math.min(total, Math.max(0, vh - r.top));
      const p = passed / total; // 0..1

      // sock: subtle scale up + push forward in z + tiny vertical lift
      const scale = 1 + p * 0.22;
      const tz = p * 220; // px forward
      const ty = -p * 80;
      const rot = p * -4; // gentle rotateX for depth tilt
      stage.style.transform = `translate3d(0, ${ty}px, ${tz}px) rotateX(${rot}deg) scale(${scale})`;

      // copy: lift up and fade out as we leave
      if (copy) {
        const ct = -p * 60;
        const alpha = Math.max(0, 1 - p * 1.4);
        copy.style.transform = `translate3d(0, ${ct}px, 0)`;
        copy.style.opacity = String(alpha);
      }
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const setBack = useCallback(() => setFocus('hero'), []);
  const detail = focus !== 'hero' ? COMPONENT_META[focus] : null;

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen overflow-hidden bg-ink">
      <div className="hero-backdrop">
        <BackgroundPathsLayer />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-14 pt-36 pb-24 min-h-screen flex flex-col">
        {/* top meta line */}
        <div className="reveal flex items-center justify-between gap-6 pb-8 border-b border-rule">
          <span className="num text-bone/80">N°&nbsp;01 / Field-grip system</span>
          <span className="num text-bone/80 hidden md:block">Made for &mdash; the modern game</span>
          <span className="num text-bone/80">Edition · MMXXVI</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center flex-1 pt-12 lg:pt-20">
          {/* left copy — parallax-lifted */}
          <div ref={copyRef} className="lg:col-span-5 will-change-transform">
            <div className="reveal">
              <span className="eyebrow">Worn at NCAA · MLS · MLFPA</span>
            </div>
            <h1 className="display text-[14vw] md:text-[10vw] lg:text-[7vw] mt-10 tracking-tightest leading-[0.92]">
              <span className="reveal block" data-delay="1">Grip the</span>
              <span className="reveal editorial block text-bone/95" data-delay="2">game</span>
              <span className="reveal block" data-delay="3">you love.</span>
            </h1>
            <p className="reveal mt-10 text-bone/90 text-[17px] leading-[1.7] max-w-md" data-delay="4">
              A biomechanical grip system worn under the boot. Foot stays planted, force stays forward, the boot stays welded to you — for the entire ninety.
            </p>
            <div className="reveal mt-12 flex flex-wrap gap-3 items-center" data-delay="5">
              <a href="#cta" className="btn btn-primary">Reserve a pair <span className="arr">→</span></a>
              <a href="#science" className="btn-text ml-2">Read the premise <span className="arr">→</span></a>
            </div>
          </div>

          {/* right: spinning sock with 3D scroll-zoom */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-square max-w-[640px] mx-auto stage">
              <div ref={stageInnerRef} className="stage-inner">
                <div className="stage-guide" aria-hidden />
                <video
                  ref={videoRef}
                  className={cn('stage-video', focus !== 'hero' && 'is-focused')}
                  src="/videos/sock-hero.mp4"
                  poster="/videos/sock-hero-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>

              {/* hotspots (not inside stage-inner so they don't zoom with the sock) */}
              {focus === 'hero' && HOTSPOTS.map((h) => (
                <button
                  key={h.key}
                  className={cn('hot', h.side === 'right' && 'is-right')}
                  style={{ top: h.top, left: h.left, transform: 'translate(-50%, -50%)' }}
                  onClick={() => setFocus(h.key)}
                  aria-label={`Explore ${h.label}`}
                >
                  <span className="pin" />
                  <span className="lead" />
                  <span className="tag">
                    <span className="n">{h.num}</span>
                    <span className="t">{h.label}</span>
                  </span>
                </button>
              ))}

              {detail && (
                <div className="absolute right-0 top-2 w-[92%] md:w-[420px] z-20 bg-graphite border border-rule p-8">
                  <button
                    className="absolute top-4 right-4 w-7 h-7 border border-rule-strong grid place-items-center hover:border-bone transition"
                    onClick={setBack}
                    aria-label="Close"
                  >
                    <span className="text-lg leading-none -mt-px">×</span>
                  </button>
                  <span className="num">{detail.num} · {detail.subtitle}</span>
                  <h3 className="display text-[36px] tracking-tightest leading-[0.95] mt-3">{detail.title}</h3>
                  <p className="mt-5 text-sm text-bone/90 leading-[1.7]">{detail.body}</p>
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mt-7 pt-6 border-t border-rule">
                    {detail.specs.map(([k, v]) => (
                      <div key={k}>
                        <dt className="label text-bone/75">{k}</dt>
                        <dd className="text-sm text-bone mt-1.5">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            {focus !== 'hero' && (
              <div className="absolute -top-10 left-0 flex items-center gap-3 z-30">
                <button onClick={setBack} className="btn-text">
                  <span className="arr -scale-x-100">→</span> Back to overview
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto pt-10 border-t border-rule flex items-center justify-between gap-6">
          <span className="num text-bone/80">Scroll → explore the system</span>
          <span className="num text-bone/80 hidden md:block">A1 · A2 · A3 — hover the diagram</span>
          <span className="num text-bone/80">05 chapters</span>
        </div>
      </div>
    </section>
  );
}
