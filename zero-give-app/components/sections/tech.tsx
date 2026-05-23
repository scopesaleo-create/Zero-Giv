const FEATURES: { n: string; t: string; d: string; m: string }[] = [
  {
    n: '01',
    t: 'Heel-lock architecture',
    d: 'A reinforced lock band and 3D-knit pocket eliminate vertical lift. The boot becomes structural.',
    m: '−38% slip',
  },
  {
    n: '02',
    t: 'PivotCore™ silicone array',
    d: 'Three zones of directional grip control rotation across the foot–boot interface. Plant, pivot, accelerate.',
    m: '±92° stability',
  },
  {
    n: '03',
    t: 'Zonal compression',
    d: 'Arch and midfoot compression mapped to the lines of force. Energy returns into push-off instead of leaking sideways.',
    m: '+24% return',
  },
  {
    n: '04',
    t: 'Ninety-minute spec',
    d: 'High-friction silicone keeps its shape under sweat and surface temperature. The grip ends the match the way it started.',
    m: '90+ min hold',
  },
];

export function Tech() {
  return (
    <section id="tech" className="section bg-carbon border-y border-rule">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 02 — Technology</span>
          </div>
          <span className="num hidden md:inline">PivotCore™ · directional grip system</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
          <h3 className="reveal lg:col-span-7 display text-display-lg tracking-tightest">
            A grip system,
            <br />
            <span className="editorial text-accent">not a sock</span>.
          </h3>
          <p className="reveal lg:col-span-5 text-bone/85 text-[18px] leading-[1.7] max-w-md self-end" data-delay="1">
            Four engineered systems, knit into a single garment. Each one solves a specific
            failure mode of the foot–boot interface. Together they lock the athlete in.
          </p>
        </div>

        {/* feature grid — numeric prefix, thin underline, name, line */}
        <ol className="grid md:grid-cols-2 gap-px bg-rule border-y border-rule">
          {FEATURES.map((f, i) => (
            <li
              key={f.n}
              className="reveal bg-carbon p-8 md:p-12 flex flex-col gap-6 min-h-[280px]"
              data-delay={String((i % 3) + 1)}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest text-accent">{f.n}</span>
                <span className="font-mono text-[10px] tracking-widest text-bone/55">{f.m}</span>
              </div>
              <div className="w-12 h-px bg-bone/40" />
              <h4 className="display text-[26px] md:text-[34px] tracking-tightest leading-[1.0]">{f.t}</h4>
              <p className="text-[15px] text-bone/75 leading-[1.65] max-w-md">{f.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
