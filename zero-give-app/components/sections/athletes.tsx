import { LOCAL_IMAGES } from '@/lib/assets';

const QUOTES = [
  { name: 'Marcus Adeyemi', role: 'Midfielder · ZG-01', text: 'It locks my foot in. More power. More control. A different feel through every cut.' },
  { name: 'Julian Green',   role: 'Professional Footballer', text: 'I feel way more stable in my cuts. There is no internal slide, it is just me and the boot.' },
  { name: 'Camila Torres',  role: 'Forward · NWSL', text: 'The traction is unreal. A game changer in the rain, on turf, on anything.' },
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

        {/* The London squad shot, now in its native 3:4 portrait. We pair
            it with display copy in a side-by-side that respects the
            original aspect ratio so the image isn't cropped to a banner. */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-stretch">
          <figure
            className="reveal relative lg:col-span-5 overflow-hidden border border-rule bg-ink aspect-[3/4]"
            data-target
          >
            <img
              src={LOCAL_IMAGES.inAction1}
              alt="Zero Give athletes presenting ZG-01 with Big Ben in the background."
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <figcaption className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4">
              <span className="num text-bone/85">London · MMXXVI</span>
              <span className="num text-signal">● ZG-01</span>
            </figcaption>
          </figure>

          <div className="reveal lg:col-span-7 flex flex-col justify-between border border-rule bg-graphite p-8 md:p-12" data-target>
            <div>
              <p className="eyebrow mb-6">Field test 01</p>
              <p className="display text-[34px] md:text-[52px] lg:text-[64px] tracking-tightest leading-[0.95]">
                Carried out under stadium lights,
                <br />
                <span className="editorial text-signal">on wet stone, after ninety.</span>
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-rule grid sm:grid-cols-3 gap-6">
              <div>
                <p className="label text-bone/75">Conditions</p>
                <p className="text-sm text-bone/85 mt-2">Wet asphalt, 7°C</p>
              </div>
              <div>
                <p className="label text-bone/75">Squad</p>
                <p className="text-sm text-bone/85 mt-2">Six players, two halves</p>
              </div>
              <div>
                <p className="label text-bone/75">Result</p>
                <p className="text-sm text-bone/85 mt-2">Zero internal slip</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <h3 className="display text-[56px] md:text-[80px] lg:text-[104px] tracking-tightest leading-[0.94]">
            <span className="reveal block">Trusted by</span>
            <span className="reveal editorial block" data-delay="1">those who compete.</span>
          </h3>
          <a href="#cta" className="reveal btn-text" data-delay="2" data-target>
            Read the stories <span className="arr">→</span>
          </a>
        </div>

        {/* Asymmetric quote layout. One feature card on the left with an
            ember-yellow signal accent on the quote mark; two stacked
            secondary cards on the right. No portrait images yet — they
            ship in the next Higgsfield batch. */}
        {(() => {
          const [feature, ...rest] = QUOTES;
          return (
            <div className="grid lg:grid-cols-12 gap-px bg-rule border border-rule">
              <article className="reveal lg:col-span-7 lg:row-span-2 bg-graphite p-10 md:p-14 flex flex-col justify-between" data-target>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="eyebrow">Conversation 01</span>
                    <span className="num text-signal">N°01</span>
                  </div>
                  <p
                    className="editorial mt-10 leading-[1.2] text-bone"
                    style={{ fontSize: 'clamp(34px, 4vw, 56px)' }}
                  >
                    <span className="text-signal" aria-hidden>&ldquo;</span>
                    {feature.text}
                    <span className="text-signal" aria-hidden>&rdquo;</span>
                  </p>
                </div>
                <div className="mt-10 pt-8 border-t border-rule flex items-center justify-between">
                  <div>
                    <p className="text-[16px] font-medium tracking-tight">{feature.name}</p>
                    <p className="text-xs text-bone/80 mt-1">{feature.role}</p>
                  </div>
                  <span className="num text-bone/70">ZG-01 · Feature</span>
                </div>
              </article>

              {rest.map((q, i) => (
                <article
                  key={q.name}
                  className="reveal lg:col-span-5 bg-graphite p-8 md:p-10 flex flex-col justify-between"
                  data-delay={String(i + 1)}
                  data-target
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="eyebrow">Conversation 0{i + 2}</span>
                      <span className="num text-bone/70">N°0{i + 2}</span>
                    </div>
                    <p className="editorial mt-6 text-[22px] md:text-[26px] leading-[1.35] text-bone">
                      &ldquo;{q.text}&rdquo;
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-rule flex items-center justify-between">
                    <div>
                      <p className="text-[15px] font-medium tracking-tight">{q.name}</p>
                      <p className="text-xs text-bone/80 mt-1">{q.role}</p>
                    </div>
                    <span className="num text-bone/65">ZG-01</span>
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
