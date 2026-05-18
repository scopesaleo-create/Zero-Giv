'use client';

import { useState } from 'react';

export function CTA() {
  const [done, setDone] = useState(false);
  return (
    <section id="cta" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(800px circle at 50% 50%, rgba(31,168,255,.18), transparent 60%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="reveal flex items-center justify-center gap-4 mb-8">
          <span className="pnum">05 / PERSPECTIVE</span>
          <span className="divider"><span className="l w-24" /></span>
          <span className="label text-accent">Join</span>
        </div>

        <h2 className="display text-6xl md:text-8xl lg:text-9xl swipe">
          Take control<br />of every <span className="text-accent">move.</span>
        </h2>
        <p className="reveal mt-8 text-white/70 text-lg max-w-2xl mx-auto" data-delay="2">
          Experience the difference biomechanical grip makes. Get exclusive deals, early access to new drops, and stories from the players living the difference.
        </p>

        <form
          className="reveal field mt-12 max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
          data-delay="3"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" type="email" required placeholder="Your email address" disabled={done} />
          <button type="submit" className="btn btn-primary justify-center" data-target>
            {done ? "You're in." : 'Join the movement'} <span className="arr">→</span>
          </button>
        </form>

        <div className="reveal mt-12 flex flex-wrap justify-center gap-4" data-delay="4">
          <a href="#" className="btn btn-ghost" data-target>Shop Grip Socks <span className="arr">→</span></a>
          <a href="#" className="btn btn-ghost" data-target>Player's Space Blog <span className="arr">→</span></a>
          <a href="#" className="btn btn-ghost" data-target>Contact <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}
