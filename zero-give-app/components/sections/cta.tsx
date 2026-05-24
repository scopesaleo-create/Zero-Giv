'use client';

import { useState } from 'react';
import { MODEL_IMAGES } from '@/lib/assets';

export function CTA() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="section bg-ink relative overflow-hidden">
      {/* product specimen bleed-through, anchored to the right edge */}
      <div
        aria-hidden
        className="absolute -right-32 top-24 w-[680px] h-[680px] hidden lg:block pointer-events-none opacity-[0.18] mix-blend-screen"
        style={{
          backgroundImage: `url(${MODEL_IMAGES.product})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'radial-gradient(circle at center, #000 35%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, #000 35%, transparent 70%)',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 08</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest">Reserve.</h2>
          </div>
          <span className="num hidden md:inline">Edition ZG-01 · limited release</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-7">
            <h3 className="display text-[64px] md:text-[96px] lg:text-[128px] tracking-tightest leading-[0.92]">
              <span className="reveal block">Take control</span>
              <span className="reveal editorial block" data-delay="1">of every move.</span>
            </h3>
          </div>
          <p className="reveal lg:col-span-5 text-bone/90 text-[17px] leading-[1.7] max-w-md" data-delay="2">
            Join the list for exclusive access to the launch edition. Early-access drops, fit guidance, and a quiet thread of letters from the players living the difference.
          </p>
        </div>

        <form
          className="reveal field mt-20 max-w-3xl pb-10 border-b border-rule"
          data-delay="3"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          aria-live="polite"
        >
          <div className="flex flex-col sm:flex-row gap-6 sm:items-end">
            <div className="flex-1">
              <label className="label text-bone/75 block mb-3" htmlFor="email">Your email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="hello@you.com"
                disabled={done}
                style={{ transition: 'opacity 320ms cubic-bezier(0.16, 1, 0.3, 1)', opacity: done ? 0.5 : 1 }}
              />
            </div>
            <button
              type="submit"
              disabled={done}
              className="btn btn-primary justify-center min-w-[200px]"
              data-target
              style={{
                transition: 'background-color 220ms ease-out, color 220ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  transition: 'filter 240ms ease-out, opacity 240ms ease-out, transform 280ms cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: done ? 'blur(2px)' : 'none',
                  opacity: done ? 0 : 1,
                  transform: done ? 'translateY(-4px)' : 'translateY(0)',
                  position: done ? 'absolute' : 'relative',
                }}
              >
                Join the list <span className="arr">→</span>
              </span>
              <span
                aria-hidden={!done}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'opacity 280ms ease-out 80ms, transform 320ms cubic-bezier(0.16, 1, 0.3, 1) 80ms',
                  opacity: done ? 1 : 0,
                  transform: done ? 'translateY(0)' : 'translateY(4px)',
                  position: done ? 'relative' : 'absolute',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M3 8.5l3.2 3.2L13 4.5" />
                </svg>
                You&apos;re on the list
              </span>
            </button>
          </div>
          <p className="num text-bone/65 mt-5">
            One letter when the edition opens. Unsubscribe in one click. No noise.
          </p>
        </form>

        {/* Asymmetric brick layout: one wide primary card on top, two
            secondary cards split below. Replaces the banned 3-equal grid. */}
        <div className="reveal mt-16 grid grid-cols-1 md:grid-cols-12 gap-px bg-rule border border-rule" data-delay="4">
          <a
            href="#edition"
            data-target
            className="bg-ink p-10 md:p-12 group md:col-span-8 flex flex-col justify-between min-h-[220px] transition-colors hover:bg-graphite"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="num text-bone/70">Primary action</span>
                <h4 className="display text-[34px] md:text-[44px] tracking-tightest leading-[0.95] mt-3">Shop ZG-01</h4>
              </div>
              <span className="lift-link text-2xl text-bone/85 group-hover:text-signal transition-colors">→</span>
            </div>
            <p className="text-sm text-bone/85 mt-6 leading-[1.6] max-w-md">
              Three colourways, sizes XS to XL. The first edition drops in bone, with ink and signal following the season.
            </p>
          </a>

          <a
            href="#athletes"
            data-target
            className="bg-ink p-8 md:p-10 group md:col-span-4 md:row-span-2 flex flex-col justify-between min-h-[220px] transition-colors hover:bg-graphite"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="num text-bone/70">Editorial</span>
                <h4 className="display text-[24px] md:text-[28px] tracking-tightest leading-[0.95] mt-3">Player&apos;s Space</h4>
              </div>
              <span className="lift-link text-bone/85 group-hover:text-signal transition-colors">→</span>
            </div>
            <p className="text-sm text-bone/85 mt-6 leading-[1.6] max-w-xs">
              Long-form letters from the studio and training notes from the squad. Two or three a season, no noise.
            </p>
          </a>

          <a
            href="mailto:hello@zerogive.com"
            data-target
            className="bg-ink p-8 md:p-10 group md:col-span-8 flex items-center justify-between gap-6 transition-colors hover:bg-graphite"
          >
            <div>
              <span className="num text-bone/70">Get in touch</span>
              <h4 className="display text-[22px] md:text-[26px] tracking-tightest leading-[0.95] mt-2">Press, partnerships, athletes</h4>
              <p className="text-sm text-bone/85 mt-2">hello@zerogive.com</p>
            </div>
            <span className="lift-link text-bone/85 group-hover:text-signal transition-colors text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
