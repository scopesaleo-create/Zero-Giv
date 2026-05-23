const SPECS: { k: string; v: string }[] = [
  { k: 'Heel slip',           v: '−38 %' },
  { k: 'Force return',        v: '+24 %' },
  { k: 'Pivot stability',     v: '±92 °' },
  { k: 'Compression zones',   v: '4' },
  { k: 'Sustained grip',      v: '90+ min' },
  { k: 'Tested match-time',   v: '9,000 min' },
];

export function Science() {
  return (
    <section id="science" className="section bg-ink">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 01 — Premise</span>
          </div>
          <span className="num hidden md:inline">A short read · three pages</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* left: editorial claim */}
          <div className="lg:col-span-7">
            <h2 className="reveal display text-display-lg tracking-tightest">
              Engineered for
              <br />
              the <span className="editorial text-accent">next mile</span>.
            </h2>
            <p className="reveal mt-12 text-bone/85 text-[18px] leading-[1.7] max-w-xl" data-delay="1">
              Internal foot movement inside the boot is the silent tax on every athlete.
              Speed costs you fractions. Control costs you angles. ZG-01 was built to
              pay the tax back — every step, every cut, every minute.
            </p>
            <a href="#tech" className="reveal btn-text mt-12" data-delay="2" data-target>
              Read the engineering <span className="arr">→</span>
            </a>
          </div>

          {/* right: measured spec rows, mono */}
          <div className="lg:col-span-5">
            <div className="reveal flex items-center justify-between pb-4 border-b border-rule-strong" data-delay="1">
              <span className="label text-bone/55">Measured · ZG-01</span>
              <span className="label text-accent">Verified</span>
            </div>
            <dl>
              {SPECS.map((s, i) => (
                <div key={s.k} className="spec-row reveal" data-delay={String((i % 4) + 1)}>
                  <dt className="k">{s.k}</dt>
                  <dd className="v">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
