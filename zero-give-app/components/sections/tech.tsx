import { LOCAL_IMAGES } from '@/lib/assets';

export function Tech() {
  const specs: [string, string][] = [
    ['Yarn', 'Recycled poly · Lycra®'],
    ['Grip array', '3-zone directional silicone'],
    ['Compression', 'Zonal · arch · midfoot'],
    ['Cuff', 'Locked heel architecture'],
    ['Seam', 'Flat-lock, anti-bunch'],
    ['Wash', 'Cold · air dry'],
  ];

  return (
    <section id="tech" className="section bg-graphite border-y border-rule">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 02</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest">Technology.</h2>
          </div>
          <span className="num hidden md:inline">PivotCore™ · directional grip system</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Native 3:4 technical diagram — the exploded layered view fits
              its source dimensions exactly, no cropping. */}
          <figure
            className="reveal lg:col-span-4 relative overflow-hidden border border-rule bg-ink aspect-[3/4]"
            data-target
          >
            <img
              src={LOCAL_IMAGES.running1}
              alt="Athlete sprinting, Zero Give socks visible mid-flight."
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <figcaption className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3">
              <span className="num text-bone/85">Fig. 02.A · in motion</span>
              <span className="num text-signal">ZG-01</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-8">
            <h3 className="display text-[52px] md:text-[72px] lg:text-[88px] tracking-tightest leading-[0.95]">
              <span className="reveal block">PivotCore™</span>
              <span className="reveal editorial block text-signal" data-delay="1">a grip system.</span>
            </h3>
            <p className="reveal mt-8 text-bone/90 text-[17px] leading-[1.7] max-w-2xl" data-delay="2">
              Three zones of directional silicone are knit into the inner sole. They lock the foot to the boot in the directions force actually wants to travel, and let it breathe in the directions it doesn&apos;t.
            </p>

            <dl className="reveal grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-rule mt-10" data-delay="3">
              {specs.map(([k, v]) => (
                <div key={k} className="border-b border-r border-rule p-6">
                  <dt className="label text-bone/75">{k}</dt>
                  <dd className="text-sm text-bone mt-2.5">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="reveal mt-8 grid grid-cols-3 gap-6" data-delay="4">
              {[
                { n: '01', t: 'Anchor', d: 'Heel-locked architecture eliminates lift.' },
                { n: '02', t: 'Rotate', d: 'Concentric grip controls pivot to ±92°.' },
                { n: '03', t: 'Release', d: 'Compression returns force into push-off.' },
              ].map((p) => (
                <div key={p.n} className="border-t border-rule pt-4">
                  <span className="num text-signal">{p.n}</span>
                  <h4 className="display text-xl tracking-tightest mt-2">{p.t}</h4>
                  <p className="text-sm text-bone/85 mt-2 leading-[1.6]">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
