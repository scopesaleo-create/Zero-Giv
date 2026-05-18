export function Science() {
  return (
    <section id="science" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="pnum">01 / PERSPECTIVE</span>
          <span className="divider"><span className="l" /></span>
          <span className="label text-accent">The Athlete</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="display text-6xl md:text-7xl lg:text-8xl swipe">
              Every<br />movement<br /><span className="text-accent">leaks</span> energy.
            </h2>
            <p className="reveal mt-8 text-white/70 text-lg max-w-md leading-relaxed" data-delay="2">
              Internal foot movement creates instability, reduces force transfer, and costs you speed, power, and control. Zero Give eliminates the energy leaks — so you can perform at your highest level.
            </p>
            <a href="#tech" className="reveal btn btn-ghost mt-10" data-delay="3" data-target>
              Explore the science <span className="arr">→</span>
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { num: '01', title: 'Sprint', body: 'Heel lift and slippage reduce acceleration efficiency.' },
              { num: '02', title: 'Cut', body: 'Lateral movement creates rotational forces and instability.' },
              { num: '03', title: 'Strike', body: 'Uncontrolled movement reduces force transfer and power.' },
            ].map((c, i) => (
              <article key={c.num} className="reveal tcard" data-delay={String(i + 1)} data-target>
                <div className="relative h-56 -m-7 mb-5 overflow-hidden rounded-t-[18px] bg-gradient-to-b from-accent/20 via-ink to-ink">
                  <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full">
                    <g stroke="#1FA8FF" strokeWidth=".5" fill="none" opacity=".5">
                      <circle cx="150" cy="150" r="60" />
                      <circle cx="150" cy="150" r="100" />
                      <circle cx="150" cy="150" r="140" />
                    </g>
                    <path d="M120 60 q10 20 0 50 l-10 40 l-20 60 l30 20 l30 -20 l25 -50 l30 -40 l-25 -30 z" fill="#1FA8FF" opacity=".4" />
                  </svg>
                </div>
                <p className="label text-accent">{c.num}</p>
                <h3 className="display text-3xl mt-2">{c.title}</h3>
                <p className="text-sm text-white/60 mt-2">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
