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

        {/* Asymmetric quote layout: one large feature card on the left,
            two stacked secondary cards on the right. Breaks the 3-equal
            grid reflex the design skills flag as AI slop. */}
        {(() => {
          const [feature, ...rest] = ATHLETE_PORTRAITS;
          return (
            <div className="grid lg:grid-cols-12 gap-px bg-rule border border-rule">
              {/* Feature */}
              <article
                className="reveal lg:col-span-7 lg:row-span-2 bg-graphite flex flex-col lg:flex-row"
                data-target
              >
                <div className="relative aspect-[4/5] lg:aspect-auto lg:w-3/5 overflow-hidden bg-ink">
                  <img
                    src={feature.src}
                    alt={`${feature.name}, ${feature.role}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ transition: 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                  <span className="absolute top-4 left-4 num text-bone/85">Q.01 · Feature</span>
                  <span className="absolute top-4 right-4 num text-bone/75">· ZG-01</span>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent pointer-events-none" />
                </div>
                <div className="p-8 md:p-10 lg:w-2/5 flex flex-col">
                  <span className="eyebrow mb-6">Conversation 01</span>
                  <p className="editorial text-[26px] md:text-[30px] leading-[1.35] text-bone">
                    &ldquo;{feature.text}&rdquo;
                  </p>
                  <div className="mt-auto pt-8 border-t border-rule flex items-center justify-between">
                    <div>
                      <p className="text-[16px] font-medium tracking-tight">{feature.name}</p>
                      <p className="text-xs text-bone/80 mt-1">{feature.role}</p>
                    </div>
                    <span className="num text-bone/70">N°01</span>
                  </div>
                </div>
              </article>

              {/* Secondary stack */}
              {rest.map((q, i) => (
                <article
                  key={q.name}
                  className="reveal lg:col-span-5 bg-graphite grid grid-cols-5"
                  data-delay={String(i + 1)}
                  data-target
                >
                  <div className="relative col-span-2 aspect-[3/4] overflow-hidden bg-ink">
                    <img
                      src={q.src}
                      alt={`${q.name}, ${q.role}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ transition: 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                    <span className="absolute top-3 left-3 num text-bone/85">Q.{String(i + 2).padStart(2, '0')}</span>
                  </div>
                  <div className="col-span-3 p-6 md:p-8 flex flex-col">
                    <p className="editorial text-[17px] md:text-[19px] leading-[1.4] text-bone">
                      &ldquo;{q.text}&rdquo;
                    </p>
                    <div className="mt-auto pt-6 border-t border-rule">
                      <p className="text-[14px] font-medium tracking-tight">{q.name}</p>
                      <p className="text-xs text-bone/80 mt-1">{q.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          );
        })()}

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
