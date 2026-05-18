'use client';

import { useState } from 'react';

export function CTA() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="section bg-ink relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 06</span>
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
          <p className="reveal lg:col-span-5 text-bone/65 text-[17px] leading-[1.7] max-w-md" data-delay="2">
            Join the list for exclusive access to the launch edition. Early-access drops, fit guidance, and a quiet thread of letters from the players living the difference.
          </p>
        </div>

        <form
          className="reveal field mt-20 max-w-3xl flex flex-col sm:flex-row gap-6 sm:items-end pb-10 border-b border-rule"
          data-delay="3"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <div className="flex-1">
            <label className="label text-bone/40 block mb-3" htmlFor="email">Your email</label>
            <input id="email" type="email" required placeholder="hello@you.com" disabled={done} />
          </div>
          <button type="submit" className="btn btn-primary justify-center min-w-[180px]" data-target>
            {done ? "You're on the list" : 'Join the list'} <span className="arr">→</span>
          </button>
        </form>

        <div className="reveal mt-16 grid md:grid-cols-3 gap-px bg-rule border border-rule" data-delay="4">
          {[
            { t: 'Shop ZG-01', d: 'Three colourways, sizes XS–XL.' },
            { t: "Player's Space", d: 'Long-form letters & training notes.' },
            { t: 'Contact', d: 'Press, partnerships, athletes.' },
          ].map((b) => (
            <a key={b.t} href="#" data-target className="bg-ink p-10 group transition-colors hover:bg-graphite">
              <div className="flex items-start justify-between">
                <h4 className="display text-2xl tracking-tightest">{b.t}</h4>
                <span className="lift-link text-bone/60 group-hover:text-signal transition-colors">→</span>
              </div>
              <p className="text-sm text-bone/55 mt-3 leading-[1.6] max-w-xs">{b.d}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
