'use client';

import { useState } from 'react';

export function CTA() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="section bg-ink relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 06 — Reserve</span>
          </div>
          <span className="num hidden md:inline">Edition ZG-01 · limited release</span>
        </header>

        {/* one massive headline. confidence over clutter. */}
        <div className="flex items-center gap-4 reveal">
          <span className="accent-dot" />
          <span className="num">Launch · MMXXVI</span>
        </div>

        <h2 className="reveal display text-display-xl tracking-tightest mt-10 leading-[0.84]" data-delay="1">
          ZERO GIVE.
          <br />
          ZERO <span className="editorial text-accent">excuses</span>.
        </h2>

        <p className="reveal mt-12 text-bone/85 text-[18px] leading-[1.7] max-w-xl" data-delay="2">
          Join the list for first access to the launch edition. Quiet thread, no fluff —
          drops, fit guidance, and letters from the players living the difference.
        </p>

        <form
          className="reveal field mt-16 max-w-3xl flex flex-col sm:flex-row gap-8 sm:items-end pb-10 border-b border-rule-strong"
          data-delay="3"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <div className="flex-1">
            <label className="label text-bone/55 block mb-3" htmlFor="email">Your email</label>
            <input id="email" type="email" required placeholder="hello@you.com" disabled={done} />
          </div>
          <button type="submit" className="btn btn-primary justify-center min-w-[200px]" data-target>
            {done ? "You're on the list" : 'Join the list'} <span className="arr">→</span>
          </button>
        </form>

        <p className="reveal num mt-8 text-bone/45" data-delay="4">
          No spam. Unsubscribe in one click. Edition I ships to a small list first.
        </p>
      </div>
    </section>
  );
}
