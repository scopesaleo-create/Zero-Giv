'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { COMPONENT_META, type SockFocus } from '@/lib/images';
import { cn } from '@/lib/utils';

type Component = {
  key: Exclude<SockFocus, 'hero'>;
  label: string;
  num: string;
};

const COMPONENTS: Component[] = [
  { key: 'heel', label: 'Heel architecture', num: '01' },
  { key: 'grip', label: 'PivotCore array',   num: '02' },
  { key: 'toe',  label: 'Toe cap',           num: '03' },
];

const STATS: { v: string; k: string; u: string }[] = [
  { v: '38', k: 'Heel slip reduction', u: '% vs cotton' },
  { v: '24', k: 'Force return',         u: '% push-off' },
  { v: '92', k: 'Pivot stability',      u: '° rotation' },
];

export function HeroSock() {
  const [focus, setFocus] = useState<SockFocus>('hero');
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageInnerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setFocus('hero'); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = focus === 'hero' ? 0.55 : 0.3;
  }, [focus]);

  // honour prefers-reduced-motion for the auto-playing model video
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      v.pause();
      v.removeAttribute('autoplay');
    }
  }, []);

  // gentle z-translate parallax on the stage as the hero scrolls past
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const section = sectionRef.current;
    const stage = stageInnerRef.current;
    if (!section || !stage) return;

    let raf = 0;
    const update = () => {
      const r = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh;
      const passed = Math.min(total, Math.max(0, vh - r.top));
      const p = passed / total;
      const scale = 1 + p * 0.14;
      const ty = -p * 60;
      stage.style.transform = `translate3d(0, ${ty}px, 0) scale(${scale})`;
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
      <div className="hero-backdrop" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-32 md:pt-36 pb-20 min-h-screen flex flex-col">
        {/* top meta line */}
        <div className="reveal flex items-center justify-between gap-6 pb-6 border-b border-rule">
          <span className="num"><span className="text-accent">N° 01</span> &nbsp;/&nbsp; ZG-01 grip system</span>
          <span className="num hidden md:block">Engineered for the modern game</span>
          <span className="num">Edition · MMXXVI</span>
        </div>

        {/* hero stack: massive type left/center, sock right */}
        <div className="flex-1 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center pt-12 lg:pt-16">
          {/* left: display type + cta */}
          <div className="lg:col-span-7 relative z-10">
            <div className="reveal flex items-center gap-3">
              <span className="accent-dot" />
              <span className="num">Field-grip system · Worn under the boot</span>
            </div>

            <h1
              className="reveal display mt-8 text-[18vw] md:text-[15vw] lg:text-[13vw] xl:text-[12vw] leading-[0.82] tracking-tightest"
              data-delay="1"
            >
              <span className="block">NO</span>
              <span className="block">
                GIVE<span className="text-accent">.</span>
              </span>
            </h1>

            <p className="reveal mt-10 text-bone/85 text-[17px] leading-[1.65] max-w-md" data-delay="3">
              A biomechanical grip system worn under the boot. The foot stays planted.
              The force stays forward. The boot stays welded to you — for the full ninety.
            </p>

            <div className="reveal mt-12 flex flex-wrap items-center gap-6" data-delay="4">
              <a href="#cta" className="btn btn-primary">Reserve a pair <span className="arr">→</span></a>
              <a href="#science" className="btn-text">Read the premise <span className="arr">→</span></a>
            </div>
          </div>

          {/* right: sock stage + component picker */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square stage max-w-[480px] mx-auto">
              <div ref={stageInnerRef} className="stage-inner">
                <div className="stage-model-bg" aria-hidden />
                <div className="stage-glow" aria-hidden />
                <video
                  ref={videoRef}
                  className={cn('stage-model', focus !== 'hero' && 'is-focused')}
                  src="/videos/sock-model.mp4"
                  poster="/videos/sock-model-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="stage-grade" aria-hidden />
              </div>

              {/* corner registration marks */}
              <span className="absolute top-0 left-0 w-3 h-3 border-l border-t border-rule-strong" />
              <span className="absolute top-0 right-0 w-3 h-3 border-r border-t border-rule-strong" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-rule-strong" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-rule-strong" />

              {detail && (
                <div className="absolute left-0 right-0 -bottom-4 z-20 bg-carbon border border-rule-strong p-6">
                  <button
                    className="absolute top-3 right-3 w-7 h-7 border border-rule-strong grid place-items-center hover:border-bone transition"
                    onClick={setBack}
                    aria-label="Close"
                  >
                    <span className="text-base leading-none -mt-px">×</span>
                  </button>
                  <span className="num"><span className="text-accent">{detail.num}</span> · {detail.subtitle}</span>
                  <h3 className="display text-[26px] tracking-tightest leading-[0.95] mt-2">{detail.title}</h3>
                  <p className="mt-3 text-sm text-bone/85 leading-[1.65]">{detail.body}</p>
                </div>
              )}
            </div>

            {/* component picker — minimal row, no icons */}
            <div className="mt-8 grid grid-cols-3 gap-px bg-rule">
              {COMPONENTS.map((c) => {
                const active = focus === c.key;
                return (
                  <button
                    key={c.key}
                    data-target
                    onClick={() => setFocus(active ? 'hero' : c.key)}
                    className={cn(
                      'group relative bg-ink p-4 text-left transition-colors',
                      active ? 'bg-carbon' : 'hover:bg-carbon',
                    )}
                    aria-label={`Explore ${c.label}`}
                  >
                    <span className={cn('font-mono text-[10px] tracking-widest', active ? 'text-accent' : 'text-bone/55')}>
                      {c.num}
                    </span>
                    <span className="block mt-2 text-[12px] text-bone/90 leading-[1.3]">{c.label}</span>
                    {active && (
                      <span className="absolute left-0 top-0 h-full w-px bg-accent" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* spec stats row — Nike-tier scoreboard */}
        <div className="reveal mt-16 lg:mt-24 grid grid-cols-3 gap-px bg-rule border-y border-rule" data-delay="4">
          {STATS.map((s) => (
            <div key={s.k} className="bg-ink py-8 px-6 flex flex-col justify-between gap-6">
              <span className="label text-bone/60">{s.k}</span>
              <div className="flex items-baseline gap-2">
                <span className="display text-[clamp(48px,6vw,84px)] leading-none tracking-tightest text-bone">{s.v}</span>
                <span className="font-mono text-[11px] tracking-widest text-bone/55">{s.u}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
