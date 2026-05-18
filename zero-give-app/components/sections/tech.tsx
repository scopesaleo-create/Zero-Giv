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
          <span className="num hidden md:inline">PivotCore™ — directional grip system</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h3 className="display text-[56px] md:text-[80px] tracking-tightest leading-[0.95]">
              <span className="reveal block">PivotCore™</span>
              <span className="reveal editorial block" data-delay="1">a grip system.</span>
            </h3>
            <p className="reveal mt-10 text-bone/90 text-[17px] leading-[1.7] max-w-md" data-delay="2">
              Three zones of directional silicone are knit into the inner sole. They lock the foot to the boot in the directions force actually wants to travel — and let it breathe in the directions it doesn&apos;t.
            </p>
          </div>

          <div className="lg:col-span-7">
            <dl className="grid grid-cols-2 border-t border-l border-rule">
              {specs.map(([k, v], i) => (
                <div key={k} className="reveal border-b border-r border-rule p-8" data-delay={String((i % 3) + 1)}>
                  <dt className="label text-bone/75">{k}</dt>
                  <dd className="text-base text-bone mt-3">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="reveal mt-10 grid grid-cols-3 gap-6" data-delay="3">
              {[
                { n: '01', t: 'Anchor', d: 'Heel-locked architecture eliminates lift.' },
                { n: '02', t: 'Rotate', d: 'Concentric grip controls pivot to ±92°.' },
                { n: '03', t: 'Release', d: 'Compression returns force into push-off.' },
              ].map((p) => (
                <div key={p.n} className="border-t border-rule pt-4">
                  <span className="num">{p.n}</span>
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
