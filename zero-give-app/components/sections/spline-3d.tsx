'use client';

import { useEffect, useRef } from 'react';

// Specimen section. Showcases the in-action film (ZeroGiveVid1) inside
// the same editorial vitrine frame. No interactive scrub — the clip
// just plays on loop, muted, with registration marks and meta labels
// for the magazine-spread feel.
export function Spline3D() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Pause when off-screen so the page stays light.
  useEffect(() => {
    const v = videoRef.current;
    const w = wrapRef.current;
    if (!v || !w) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(w);
    return () => io.disconnect();
  }, []);

  return (
    <section id="spline" className="section bg-ink">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 03</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest reveal">Specimen.</h2>
          </div>
          <span className="num hidden md:inline">A live walk-through · ZG-01</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-between gap-12">
            <div>
              <p className="reveal eyebrow mb-6">In motion · on the pitch</p>
              <h3 className="reveal display text-4xl md:text-5xl tracking-tightest leading-[1.02]" data-delay="1">
                A specimen<br />in <span className="editorial text-signal">flight.</span>
              </h3>
              <p className="reveal text-bone/90 leading-[1.7] mt-8 max-w-sm" data-delay="2">
                The grip in its native environment. Plant, pivot, push. The film loops on its own — sit with it, or scroll on.
              </p>
              <a href="#cta" className="reveal btn-text mt-10" data-target data-delay="3">
                Reserve a pair <span className="arr">→</span>
              </a>
            </div>

            <dl className="reveal grid grid-cols-2 gap-x-6 gap-y-6 pt-8 border-t border-rule" data-delay="4">
              <div>
                <dt className="label text-bone/75">Material</dt>
                <dd className="text-sm text-bone/85 mt-2">Recycled poly / Lycra®</dd>
              </div>
              <div>
                <dt className="label text-bone/75">Knit</dt>
                <dd className="text-sm text-bone/85 mt-2">Zonal compression</dd>
              </div>
              <div>
                <dt className="label text-bone/75">Grip</dt>
                <dd className="text-sm text-bone/85 mt-2">Silicone, directional</dd>
              </div>
              <div>
                <dt className="label text-bone/75">Edition</dt>
                <dd className="text-sm text-bone/85 mt-2">ZG-01 · launch</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8">
            <div
              ref={wrapRef}
              className="vitrine vitrine--isolated aspect-[7/5] relative overflow-hidden"
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

              {/* registration marks */}
              <span className="vitrine-cross" style={{ top: 14, left: 14 }} />
              <span className="vitrine-cross" style={{ top: 14, right: 14 }} />
              <span className="vitrine-cross" style={{ bottom: 14, left: 14 }} />
              <span className="vitrine-cross" style={{ bottom: 14, right: 14 }} />
              <span className="vitrine-meta" style={{ top: 24, left: 36 }}>ZG-01 · field study</span>
              <span className="vitrine-meta" style={{ top: 24, right: 36, color: 'var(--signal)' }}>● REC · LIVE</span>
              <span className="vitrine-meta" style={{ bottom: 24, left: 36 }}>Fig. 03.A</span>
              <span className="vitrine-meta" style={{ bottom: 24, right: 36 }}>00:00 · loop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
