const STATS = [
  { label: 'Heel slip',          to: 38, suffix: '%', sub: 'vs. standard sock' },
  { label: 'Energy transfer',    to: 24, suffix: '%', sub: 'more force into push-off' },
  { label: 'Rotational control', to: 92, suffix: '°', sub: 'cut-angle stability' },
  { label: 'Match duration',     to: 90, suffix: '+', sub: 'minutes of consistent grip' },
];

const TILES = [
  { n: '01', t: 'Locked-in fit', b: 'No internal slide. The boot becomes part of you, not a thing around you.' },
  { n: '02', t: 'Force transfer', b: 'Energy travels forward, not sideways. The push-off becomes legible again.' },
  { n: '03', t: 'Cut control',   b: 'Plant, pivot, accelerate. The grip is directional, not just sticky.' },
  { n: '04', t: 'Ninety-minute spec', b: 'Silicone holds its shape at temperature, under sweat, over time.' },
];

export function Performance() {
  return (
    <section id="speed" className="section bg-ink">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 04 — Performance</span>
          </div>
          <span className="num hidden md:inline">Tested over 9,000 match minutes</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <h3 className="reveal lg:col-span-8 display text-display-lg tracking-tightest">
            Built for <span className="editorial text-accent">game speed</span>.
          </h3>
          <p className="reveal lg:col-span-4 text-bone/85 text-[17px] leading-[1.7] max-w-md" data-delay="1">
            Tested in real intensity — boots full of sweat, legs full of acid, surfaces that
            turn against you. The grip held its shape from minute zero to the end of stoppage.
          </p>
        </div>

        {/* scoreboard — huge counters */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border-y border-rule" data-delay="2">
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink py-12 md:py-16 px-6 md:px-8 flex flex-col gap-6">
              <span className="label text-bone/55">{s.label}</span>
              <p
                className="display text-[clamp(64px,9vw,128px)] leading-none tracking-tightest text-bone"
                data-counter
                data-from="0"
                data-to={String(s.to)}
                data-suffix={s.suffix}
              >
                0{s.suffix}
              </p>
              <div className="h-px bg-accent w-10" />
              <p className="text-[12px] text-bone/65 leading-[1.5]">{s.sub}</p>
            </div>
          ))}
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule mt-px">
          {TILES.map((t) => (
            <li key={t.n} className="bg-ink py-10 px-6 md:px-8">
              <span className="font-mono text-[11px] tracking-widest text-accent">{t.n}</span>
              <h4 className="display text-xl mt-3 tracking-tightest">{t.t}</h4>
              <p className="text-[13px] text-bone/70 mt-3 leading-[1.6]">{t.b}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
