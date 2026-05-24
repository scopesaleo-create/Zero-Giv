import { LOCAL_IMAGES } from '@/lib/assets';

// Edition card section — the closest the site gets to a product detail
// page. Three-up specs, the flat-lay still life as the visual anchor,
// and a primary reserve CTA that scrolls to the form.
const SPECS: [string, string][] = [
  ['Edition', 'ZG-01 · I'],
  ['Cut', 'Crew · low-friction cuff'],
  ['Material', '74% recycled poly · 22% Lycra® · 4% silicone'],
  ['Sizing', 'XS to XL · half-size friendly'],
  ['Colourway', 'Bone / Ink / Signal'],
  ['Release', 'MMXXVI · limited drop'],
];

const PRICE_TIERS = [
  { qty: '1 pair', price: '$32', sub: 'A trial of the system.' },
  { qty: '3 pairs', price: '$84', sub: 'A training week. Saves $12.', highlight: true },
  { qty: '6 pairs', price: '$156', sub: 'A full season. Saves $36.' },
];

export function Edition() {
  return (
    <section id="edition" className="section bg-ink border-y border-rule">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 06</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest">Edition.</h2>
          </div>
          <span className="num hidden md:inline">ZG-01 · I · MMXXVI · limited release</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <h3 className="lg:col-span-7 display text-[56px] md:text-[80px] lg:text-[104px] tracking-tightest leading-[0.92]">
            <span className="reveal block">One sock,</span>
            <span className="reveal editorial block" data-delay="1">engineered three ways.</span>
          </h3>
          <p className="reveal lg:col-span-5 text-bone/90 text-[17px] leading-[1.7] max-w-md" data-delay="2">
            Cuff, ankle, sole: three faces of the same piece of engineering.
            The first edition ships in bone, the next two colourways follow
            the season.
          </p>
        </div>

        <figure
          className="reveal relative overflow-hidden border border-rule aspect-[16/9] bg-graphite mb-16"
          data-target
        >
          <img
            src={LOCAL_IMAGES.doubleSocks}
            alt="Three Zero Give socks aligned on concrete: cuff, ankle, and sole."
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex items-end justify-between gap-6">
            <div>
              <span className="num text-bone/85">Fig. 06.A · Three faces</span>
              <p className="display text-[24px] md:text-[36px] tracking-tightest leading-[0.95] mt-2 text-bone max-w-xl">
                Cuff · Ankle · Sole.
              </p>
            </div>
            <span className="num text-bone/75 hidden md:inline">Bone / Ink / Signal</span>
          </figcaption>
        </figure>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Specs ledger */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-8">The specification</p>
            <dl className="grid sm:grid-cols-2 border-t border-l border-rule">
              {SPECS.map(([k, v]) => (
                <div key={k} className="border-b border-r border-rule p-6 md:p-7">
                  <dt className="label text-bone/75">{k}</dt>
                  <dd className="text-[15px] text-bone mt-3 leading-[1.55]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Price tiers */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-8">The drop</p>
            <ul className="space-y-3">
              {PRICE_TIERS.map((t) => (
                <li
                  key={t.qty}
                  className={[
                    'reveal border p-6 md:p-7 flex items-baseline justify-between gap-6 transition-colors',
                    t.highlight
                      ? 'border-bone/40 bg-graphite'
                      : 'border-rule hover:border-bone/30',
                  ].join(' ')}
                  data-target
                >
                  <div>
                    <p className="display text-[24px] md:text-[28px] tracking-tightest leading-none">{t.qty}</p>
                    <p className="text-xs text-bone/80 mt-2 leading-[1.5]">{t.sub}</p>
                  </div>
                  <div className="text-right">
                    <p className="display text-[28px] md:text-[34px] tracking-tightest leading-none">{t.price}</p>
                    {t.highlight && <p className="num text-signal mt-2">Most chosen</p>}
                  </div>
                </li>
              ))}
            </ul>

            <a href="#cta" className="btn btn-primary w-full mt-8 justify-center" data-target>
              Reserve the edition <span className="arr">→</span>
            </a>
            <p className="num text-bone/65 mt-4 text-center">Free shipping over $80 · 30-day returns</p>
          </div>
        </div>
      </div>
    </section>
  );
}
