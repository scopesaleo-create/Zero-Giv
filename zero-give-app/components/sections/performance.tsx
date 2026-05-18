const STATS = [
  { label: 'Heel slip', to: 38, suffix: '%', sub: 'vs. standard sock' },
  { label: 'Energy transfer', to: 24, suffix: '%', sub: 'more force into push-off' },
  { label: 'Rotational control', to: 92, suffix: '°', sub: 'cut-angle stability' },
  { label: 'Match duration', to: 90, suffix: '+', sub: 'minutes of consistent grip' },
];

export function Performance() {
  return (
    <section id="speed" className="section bg-ink">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 04</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest">Performance.</h2>
          </div>
          <span className="num hidden md:inline">Tested over 9,000 match minutes</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <h3 className="lg:col-span-7 display text-[64px] md:text-[88px] lg:text-[112px] tracking-tightest leading-[0.92]">
            <span className="reveal block">Built for</span>
            <span className="reveal editorial block" data-delay="1">game speed.</span>
          </h3>
          <p className="reveal lg:col-span-5 text-bone/90 text-[17px] leading-[1.7] max-w-md" data-delay="2">
            We tested ZG-01 in real intensity — boots full of sweat, legs full of acid, surfaces that turn against you. The grip held its shape from minute zero to the end of stoppage.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-4 border-y border-rule" data-delay="3">
          {STATS.map((s, i) => (
            <div key={s.label} className={`stat ${i < 2 ? 'border-b md:border-b-0' : ''} ${i % 2 === 0 ? 'md:border-r border-rule' : 'md:border-r border-rule'}`}>
              <p className="label text-bone/75">{s.label}</p>
              <p
                className="display text-[56px] md:text-[80px] text-bone mt-3 tracking-tightest leading-none"
                data-counter
                data-from="0"
                data-to={String(s.to)}
                data-suffix={s.suffix}
              >
                0{s.suffix}
              </p>
              <p className="text-xs text-bone/80 mt-4 leading-[1.6]">{s.sub}</p>
            </div>
          ))}
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 mt-px">
          {[
            { n: '01', t: 'Locked-in fit', b: 'No internal slide. The boot becomes part of you, not a thing around you.' },
            { n: '02', t: 'Force transfer', b: 'Energy travels forward, not sideways. The push-off becomes legible again.' },
            { n: '03', t: 'Cut control', b: 'Plant, pivot, accelerate. The grip is directional, not just sticky.' },
            { n: '04', t: 'Ninety-minute spec', b: 'The silicone holds its shape at temperature, under sweat, over time.' },
          ].map((t) => (
            <li key={t.n} className="ftile">
              <span className="num">{t.n}</span>
              <h4 className="display text-xl mt-3 tracking-tightest">{t.t}</h4>
              <p className="text-sm text-bone/85 mt-3 leading-[1.65]">{t.b}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
