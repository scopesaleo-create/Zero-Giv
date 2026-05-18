'use client';

import { SplineScene } from '@/components/ui/splite';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';

export function Spline3D() {
  return (
    <section id="spline" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex items-center gap-4 mb-8">
          <span className="pnum">EXPLORE</span>
          <span className="divider"><span className="l" /></span>
          <span className="label text-accent">Interactive 3D</span>
        </div>

        <Card className="w-full h-[560px] bg-black/[0.96] border-white/10 relative overflow-hidden">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#1FA8FF" />

          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 p-10 md:p-12 relative z-10 flex flex-col justify-center">
              <span className="label text-accent mb-3">Drag · rotate · zoom</span>
              <h2 className="display text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                Inspect the<br />grip in 3D.
              </h2>
              <p className="mt-5 text-white/65 max-w-md leading-relaxed">
                Explore the PivotCore™ geometry from any angle. Drag to rotate, scroll to zoom in on the silicone arrays, or click any component to learn what it does inside the boot.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#cta" className="btn btn-primary" data-target>Shop the sock <span className="arr">→</span></a>
                <a href="#tech" className="btn btn-ghost" data-target>See the tech <span className="arr">→</span></a>
              </div>
            </div>

            <div className="flex-1 relative min-h-[280px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
        <p className="text-xs text-white/40 mt-3">Placeholder Spline scene — replace `scene` URL with your own Zero Give sock model exported from Spline.</p>
      </div>
    </section>
  );
}
