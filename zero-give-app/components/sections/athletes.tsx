const QUOTES = [
  { name: 'CeeDee Lamb', role: 'Wide Receiver · NFL', text: 'They lock my foot in. More power. More control. A different feel through every cut.' },
  { name: 'Julian Green', role: 'Professional Footballer', text: 'I feel way more stable in my cuts. There is no internal slide — it is just me and the boot.' },
  { name: 'Saquon Barkley', role: 'Running Back · NFL', text: 'The traction is unreal. A game changer in the rain, on turf, on anything.' },
];

export function Athletes() {
  return (
    <section id="athletes" className="section bg-graphite border-y border-rule">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 05</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest">Players.</h2>
          </div>
          <span className="num hidden md:inline">In the words of those who compete</span>
        </header>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <h3 className="display text-[56px] md:text-[80px] lg:text-[104px] tracking-tightest leading-[0.94]">
            <span className="reveal block">Trusted by</span>
            <span className="reveal editorial block" data-delay="1">those who compete.</span>
          </h3>
          <a href="#cta" className="reveal btn-text" data-delay="2" data-target>
            Read the stories <span className="arr">→</span>
          </a>
        </div>

        <ul className="grid md:grid-cols-3 border-t border-rule">
          {QUOTES.map((q, i) => (
            <li key={q.name} className="reveal tcard border-r border-rule last:border-r-0 first:border-l-0 border-b" data-delay={String(i + 1)} data-target>
              <span className="num">Q.{String(i + 1).padStart(2, '0')}</span>
              <p className="editorial text-[22px] leading-[1.4] text-bone mt-4">&ldquo;{q.text}&rdquo;</p>
              <div className="mt-10 pt-5 border-t border-rule flex items-center justify-between">
                <div>
                  <p className="text-[15px] font-medium tracking-tight">{q.name}</p>
                  <p className="text-xs text-bone/50 mt-1">{q.role}</p>
                </div>
                <span className="num">— ZG-01</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-20 overflow-hidden py-10 border-y border-rule mask-fade">
          <div className="marquee marquee-text">
            <span>No&nbsp;slip</span><span className="dot" />
            <span className="accent editorial">More control</span><span className="dot" />
            <span>Game speed</span><span className="dot" />
            <span className="accent editorial">Zero give</span><span className="dot" />
            <span>The full ninety</span><span className="dot" />
            <span>No&nbsp;slip</span><span className="dot" />
            <span className="accent editorial">More control</span><span className="dot" />
            <span>Game speed</span><span className="dot" />
            <span className="accent editorial">Zero give</span><span className="dot" />
            <span>The full ninety</span><span className="dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
