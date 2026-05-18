'use client';

import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';

export function Spline3D() {
  return (
    <section id="spline" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex items-center gap-4 mb-8">
          <span className="pnum">EXPLORE</span>
          <span className="divider"><span className="l" /></span>
          <span className="label text-accent">In Motion</span>
        </div>

        <Card className="w-full h-[560px] bg-black/[0.96] border-white/10 relative overflow-hidden">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#5BA3F5" />

          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 p-10 md:p-12 relative z-10 flex flex-col justify-center">
              <span className="label text-accent mb-3">Engineered · in motion</span>
              <h2 className="display text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                Inspect the<br />grip in motion.
              </h2>
              <p className="mt-5 text-white/65 max-w-md leading-relaxed">
                A cinematic walk-through of the PivotCore™ silicone array, the compression knit, and the heel lock — engineered to keep your foot, your boot, and your next move on the same page.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#cta" className="btn btn-primary" data-target>Shop the sock <span className="arr">→</span></a>
                <a href="#tech" className="btn btn-ghost" data-target>See the tech <span className="arr">→</span></a>
              </div>
            </div>

            <div className="flex-1 relative min-h-[280px]">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/sock-interactive.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40 pointer-events-none" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
