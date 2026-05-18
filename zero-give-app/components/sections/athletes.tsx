const QUOTES = [
  { name: 'CeeDee Lamb', role: 'Wide Receiver · NFL', text: 'They lock my foot in. More power. More control. Genuinely a different feel through every cut.' },
  { name: 'Julian Green', role: 'Professional Footballer', text: "I feel way more stable in my cuts. There's no internal slide — it's just me and the boot." },
  { name: 'Saquon Barkley', role: 'Running Back · NFL', text: 'The traction is unreal. Game changer in the rain, on turf, on anything.' },
];

export function Athletes() {
  return (
    <section
      id="athletes"
      className="relative py-32 lg:py-44 overflow-hidden border-y border-white/5 bg-gradient-to-b from-ink via-panel to-ink"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="pnum">04 / PERSPECTIVE</span>
          <span className="divider"><span className="l" /></span>
          <span className="label text-accent">The Player</span>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <h2 className="display text-6xl md:text-7xl lg:text-8xl swipe">
            Trusted by<br />those who <span className="text-accent">compete.</span>
          </h2>
          <a href="#cta" className="reveal btn btn-ghost" data-delay="2" data-target>
            See athlete stories <span className="arr">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {QUOTES.map((q, i) => (
            <article key={q.name} className="tcard reveal" data-delay={String(i + 1)} data-target>
              <div className="text-accent text-4xl leading-none">"</div>
              <p className="mt-2 text-white/85 text-lg leading-relaxed">{q.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dim" />
                <div>
                  <p className="font-semibold">{q.name}</p>
                  <p className="text-xs text-white/50">{q.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 overflow-hidden py-6 border-y border-white/10 mask-fade">
          <div className="marquee display text-5xl md:text-6xl text-white/30">
            <span>No Slip.</span>
            <span className="text-accent">More Control.</span>
            <span>Better Performance.</span>
            <span>Grip The Game You Love.</span>
            <span className="text-accent">#ZEROGIVE</span>
            <span>No Slip.</span>
            <span className="text-accent">More Control.</span>
            <span>Better Performance.</span>
            <span>Grip The Game You Love.</span>
            <span className="text-accent">#ZEROGIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
