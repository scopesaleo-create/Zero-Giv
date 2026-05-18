export function Science() {
  const items = [
    { num: '01', title: 'Sprint', body: 'Heel lift and slippage rob the first three metres of an acceleration. The window where games are won.' },
    { num: '02', title: 'Cut', body: 'Lateral movement loads rotational forces into the foot–boot interface. Internal sliding takes the angle back.' },
    { num: '03', title: 'Strike', body: 'Energy that escapes sideways at the boot wall never reaches the ball. Contact becomes mushy, intent becomes guesswork.' },
  ];

  return (
    <section id="science" className="section bg-ink">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 01</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest">Premise.</h2>
          </div>
          <span className="num hidden md:inline">A short read — three pages</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h3 className="display text-[64px] md:text-[88px] lg:text-[112px] tracking-tightest leading-[0.92]">
              <span className="reveal block">Every</span>
              <span className="reveal editorial block" data-delay="1">movement</span>
              <span className="reveal block" data-delay="2">leaks energy.</span>
            </h3>
            <p className="reveal mt-10 text-bone/65 text-[17px] leading-[1.7] max-w-md" data-delay="3">
              Internal foot movement inside the boot is the silent tax on every athlete. Speed costs you fractions; control costs you angles. Zero Give was built to pay the tax back.
            </p>
            <a href="#tech" className="reveal btn-text mt-10" data-delay="4" data-target>
              Read the engineering <span className="arr">→</span>
            </a>
          </div>

          <ol className="lg:col-span-7 divide-y divide-rule border-t border-b border-rule">
            {items.map((c, i) => (
              <li key={c.num} className="reveal grid grid-cols-12 gap-6 py-10" data-delay={String(i + 1)} data-target>
                <div className="col-span-2 num">{c.num}</div>
                <div className="col-span-10 md:col-span-3">
                  <h4 className="display text-2xl tracking-tightest">{c.title}</h4>
                </div>
                <p className="col-span-12 md:col-span-7 text-bone/70 leading-[1.7] text-[15px]">{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
