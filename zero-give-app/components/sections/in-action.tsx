'use client';

import { useEffect, useRef, useState } from 'react';

// In-action film section. Sits directly under Specimen so the page
// moves from controlled product study (interactive scrub) into
// motion footage (autoplay loop) without losing visual rhythm.
// Plays muted, loops, autoplays. Click-to-unmute toggle for sound.
export function InAction() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  // Pause when off-screen so the page stays light. Resume when in view.
  useEffect(() => {
    const v = videoRef.current;
    const w = wrapRef.current;
    if (!v || !w) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(w);
    return () => io.disconnect();
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section id="in-action" className="section bg-ink border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 03½</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest">
              In action.
            </h2>
          </div>
          <span className="num hidden md:inline">Live footage · ZG-01 on the pitch</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
          <h3 className="lg:col-span-7 display text-[48px] md:text-[72px] lg:text-[96px] tracking-tightest leading-[0.94]">
            <span className="reveal block">Specimen,</span>
            <span className="reveal editorial block" data-delay="1">in flight.</span>
          </h3>
          <p className="reveal lg:col-span-5 text-bone/90 text-[17px] leading-[1.7] max-w-md" data-delay="2">
            The grip in its native environment. Plant, pivot, push. No edits, no slow-mo, just the boot doing what the sock helped it do.
          </p>
        </div>

        <div
          ref={wrapRef}
          className="relative overflow-hidden border border-rule bg-graphite aspect-[16/9]"
        >
          <video
            ref={videoRef}
            src="/media/zero-give-action.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />

          {/* registration overlays — keep it from feeling like a YouTube embed */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute top-4 left-4 num text-bone/85">REC · LIVE</span>
            <span className="absolute top-4 right-4 num text-signal">● ZG-01</span>
            <span className="absolute bottom-4 left-4 num text-bone/85">Fig. 03½ · field study</span>
            <span className="absolute bottom-4 right-4 num text-bone/85">01:00 · loop</span>

            {/* Cross-hair registration marks at the corners */}
            <span className="absolute top-3 left-3 w-3 h-3 border-l border-t border-bone/40" />
            <span className="absolute top-3 right-3 w-3 h-3 border-r border-t border-bone/40" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-bone/40" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-bone/40" />
          </div>

          {/* Mute toggle, bottom-centre, tactile */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            aria-pressed={!muted}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-ink/70 border border-rule-strong text-bone backdrop-blur-md"
            style={{ transition: 'background-color 220ms var(--ease-out), border-color 220ms var(--ease-out), transform 160ms var(--ease-out)' }}
            data-target
          >
            {muted ? (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2.5 6v4h2.2l3.3 2.8V3.2L4.7 6H2.5z" />
                <path d="M11 6l3 4M14 6l-3 4" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2.5 6v4h2.2l3.3 2.8V3.2L4.7 6H2.5z" />
                <path d="M10.5 5.5a3.5 3.5 0 010 5M12.5 3.8a6 6 0 010 8.4" />
              </svg>
            )}
            <span className="num">{muted ? 'Sound off · tap' : 'Sound on'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
