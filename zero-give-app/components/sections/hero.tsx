'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { COMPONENT_META, type SockFocus } from '@/lib/images';
import { cn } from '@/lib/utils';

const HOTSPOTS: { key: Exclude<SockFocus, 'hero'>; label: string; num: string; top: string; left: string }[] = [
  { key: 'heel', label: 'Heel Lock', num: '01', top: '34%', left: '32%' },
  { key: 'grip', label: 'PivotCore™ Grip', num: '02', top: '72%', left: '52%' },
  { key: 'toe', label: 'Toe Box', num: '03', top: '68%', left: '74%' },
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
    if (!videoRef.current) return;
    videoRef.current.playbackRate = focus === 'hero' ? 1 : 0.5;
  }, [focus]);

  const setBack = useCallback(() => setFocus('hero'), []);
  const detail = focus !== 'hero' ? COMPONENT_META[focus] : null;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="grid-bg absolute inset-0 z-0 opacity-60" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 min-h-screen flex flex-col">
        <div className="grid lg:grid-cols-12 gap-10 items-center flex-1">
          <div className="lg:col-span-5">
            <div className="reveal">
              <span className="chip text-xs text-white/70"><span className="dot" /> Trusted by NCAA · MLS · MLFPA</span>
            </div>
            <h1 className="reveal display text-[12vw] md:text-[7.5vw] lg:text-[5.6vw] mt-6 swipe" data-delay="2">
              Grip<br />
              <span className="text-accent">The Game</span><br />
              <span className="stroke-text">You</span> Love.
            </h1>
            <p className="reveal mt-6 text-white/70 text-lg leading-relaxed max-w-md" data-delay="3">
              Every movement leaks energy. Zero Give closes the gap between you and the boot — so every watt arrives where it&apos;s supposed to.
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-3" data-delay="4">
              <a href="#cta" className="btn btn-primary">Shop Performance Socks <span className="arr">→</span></a>
              <a href="#science" className="btn btn-ghost">See The Science <span className="arr">→</span></a>
            </div>
            <p className="label mt-10 text-white/50">Hover the sock → explore by component</p>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-square max-w-[640px] mx-auto stage">
              <div className="ring-static" aria-hidden />

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

              <div
                className={cn(
                  'absolute inset-0 transition-opacity duration-700 pointer-events-none rounded-[28px]',
                  focus !== 'hero' ? 'bg-ink/55' : 'bg-transparent',
                )}
              />

              {focus === 'hero' && HOTSPOTS.map((h) => (
                <button
                  key={h.key}
                  className="hot"
                  style={{ top: h.top, left: h.left, transform: 'translate(-50%, -50%)' }}
                  onClick={() => setFocus(h.key)}
                  aria-label={`Explore ${h.label}`}
                >
                  <span className="dot" />
                  <span className="tip">
                    <span className="num block">{h.num}</span>
                    <span className="ttl block">{h.label}</span>
                  </span>
                </button>
              ))}

              {detail && (
                <div className="absolute right-0 top-0 w-full md:w-[420px] p-7 rounded-2xl border border-white/10 bg-gradient-to-b from-surface/95 to-ink/95 backdrop-blur-xl z-20 shadow-2xl">
                  <button
                    className="absolute top-3 right-3 w-8 h-8 rounded-full border border-white/15 grid place-items-center hover:border-accent hover:text-accent transition"
                    onClick={setBack}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  <span className="label text-accent">{detail.num} — Component</span>
                  <h3 className="display text-4xl mt-2">{detail.title}</h3>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed">{detail.body}</p>
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-4 mt-5 pt-4 border-t border-white/10">
                    {detail.specs.map(([k, v]) => (
                      <div key={k}>
                        <dt className="label text-white/45">{k}</dt>
                        <dd className="text-sm text-white mt-1">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            {focus !== 'hero' && (
              <div className="absolute -top-2 left-2 lg:left-0 flex items-center gap-3 z-30">
                <button onClick={setBack} className="label text-white/65 hover:text-accent transition">
                  ← Back to overview
                </button>
                <span className="pnum">/ {COMPONENT_META[focus].subtitle}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {focus === 'hero' && (
        <div className="scroll-cue">
          <span className="label text-white/45">Scroll to explore</span>
          <span className="bar" />
        </div>
      )}
    </section>
  );
}
