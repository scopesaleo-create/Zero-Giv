'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { COMPONENT_META, type SockFocus } from '@/lib/images';
import { cn } from '@/lib/utils';

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setFocus('hero'); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = focus === 'hero' ? 0.8 : 0.4;
  }, [focus]);

  const setBack = useCallback(() => setFocus('hero'), []);
  const detail = focus !== 'hero' ? COMPONENT_META[focus] : null;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-ink">
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-14 pt-36 pb-24 min-h-screen flex flex-col">
        {/* top meta line */}
        <div className="reveal flex items-center justify-between gap-6 pb-8 border-b border-rule">
          <span className="num">N°&nbsp;01 / Field-grip system</span>
          <span className="num hidden md:block">Made for &mdash; the modern game</span>
          <span className="num">Edition · MMXXVI</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center flex-1 pt-12 lg:pt-20">
          {/* left copy */}
          <div className="lg:col-span-5">
            <div className="reveal">
              <span className="eyebrow">Worn at NCAA · MLS · MLFPA</span>
            </div>
            <h1 className="display text-[14vw] md:text-[10vw] lg:text-[7vw] mt-10 tracking-tightest leading-[0.92]">
              <span className="reveal block" data-delay="1">Grip the</span>
              <span className="reveal editorial block text-bone/95" data-delay="2">game</span>
              <span className="reveal block" data-delay="3">you love.</span>
            </h1>
            <p className="reveal mt-10 text-bone/65 text-[17px] leading-[1.7] max-w-md" data-delay="4">
              A biomechanical grip system worn under the boot. Foot stays planted, force stays forward, the boot stays welded to you — for the entire ninety.
            </p>
            <div className="reveal mt-12 flex flex-wrap gap-3 items-center" data-delay="5">
              <a href="#cta" className="btn btn-primary">Reserve a pair <span className="arr">→</span></a>
              <a href="#science" className="btn-text ml-2">Read the premise <span className="arr">→</span></a>
            </div>
          </div>

          {/* right: spinning sock with mask */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-square max-w-[640px] mx-auto stage">
              <div className="stage-guide" aria-hidden />
              <video
                ref={videoRef}
                className={cn('stage-video', focus !== 'hero' && 'is-focused')}
                src="/videos/sock-hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />

              {/* hotspots */}
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

              {/* detail panel */}
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
                  <p className="mt-5 text-sm text-bone/65 leading-[1.7]">{detail.body}</p>
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mt-7 pt-6 border-t border-rule">
                    {detail.specs.map(([k, v]) => (
                      <div key={k}>
                        <dt className="label text-bone/40">{k}</dt>
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

        {/* bottom meta line */}
        <div className="mt-auto pt-10 border-t border-rule flex items-center justify-between gap-6 text-bone/45">
          <span className="num">Scroll → explore the system</span>
          <span className="num hidden md:block">A1 · A2 · A3 — hover the diagram</span>
          <span className="num">05 chapters</span>
        </div>
      </div>
    </section>
  );
}
