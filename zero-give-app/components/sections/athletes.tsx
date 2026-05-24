import { ATHLETE_PORTRAITS } from '@/lib/assets';

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

        <figure className="reveal relative overflow-hidden border border-rule mb-20 aspect-[21/9] bg-ink" data-target>
          <img
            src="/images/zero-give-london.png"
            alt="Zero Give athletes presenting ZG-01 in London."
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex items-end justify-between gap-6">
            <div>
              <span className="num text-bone/85">Field test · London</span>
              <p className="display text-[28px] md:text-[44px] tracking-tightest leading-[0.95] mt-3 text-bone max-w-2xl">
                Carried out under stadium lights, on wet stone, after ninety.
              </p>
            </div>
            <span className="num text-bone/75 hidden md:inline">ZG-01 · Edition I</span>
          </figcaption>
        </figure>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <h3 className="display text-[56px] md:text-[80px] lg:text-[104px] tracking-tightest leading-[0.94]">
            <span className="reveal block">Trusted by</span>
            <span className="reveal editorial block" data-delay="1">those who compete.</span>
          </h3>
          <a href="#cta" className="reveal btn-text" data-delay="2" data-target>
            Read the stories <span className="arr">→</span>
          </a>
        </div>

        <ul className="grid md:grid-cols-3 gap-px bg-rule border border-rule">
          {ATHLETE_PORTRAITS.map((q, i) => (
            <li
              key={q.name}
              className="reveal bg-graphite flex flex-col"
              data-delay={String(i + 1)}
              data-target
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                <img
                  src={q.src}
                  alt={`${q.name}, ${q.role}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 num text-bone/85">Q.{String(i + 1).padStart(2, '0')}</span>
                <span className="absolute top-4 right-4 num text-bone/75">— ZG-01</span>
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent pointer-events-none" />
              </div>
              <div className="p-7 md:p-8 flex-1 flex flex-col">
                <p className="editorial text-[22px] leading-[1.4] text-bone">&ldquo;{q.text}&rdquo;</p>
                <div className="mt-auto pt-8 border-t border-rule flex items-center justify-between">
                  <div>
                    <p className="text-[15px] font-medium tracking-tight">{q.name}</p>
                    <p className="text-xs text-bone/80 mt-1">{q.role}</p>
                  </div>
                  <span className="num text-bone/70">N°{String(i + 1).padStart(2, '0')}</span>
                </div>
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
