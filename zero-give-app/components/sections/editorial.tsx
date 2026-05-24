import Image from 'next/image';
import { MODEL_IMAGES, FEATURE_HOLD } from '@/lib/assets';

// Editorial campaign gallery — generated model imagery rendered in a
// magazine-grid layout. The four shots step from product → street → match
// → portrait to mirror the brand narrative.
const FRAMES = [
  {
    src: MODEL_IMAGES.street,
    label: 'Look 01',
    title: 'Worn under the boot.',
    caption: 'London, blue hour. The grip works where you cannot see it.',
    span: 'lg:col-span-7 lg:row-span-2',
    aspect: 'aspect-[3/2]',
  },
  {
    src: MODEL_IMAGES.product,
    label: 'Look 02',
    title: 'The specimen.',
    caption: 'PivotCore™ underside. Concentric grip, directional intent.',
    span: 'lg:col-span-5',
    aspect: 'aspect-square',
  },
  {
    src: MODEL_IMAGES.cut,
    label: 'Look 03',
    title: 'The cut.',
    caption: 'Plant. Pivot. Push. The angle holds.',
    span: 'lg:col-span-5',
    aspect: 'aspect-[3/2]',
  },
  {
    src: MODEL_IMAGES.tunnel,
    label: 'Look 04',
    title: 'Tunnel walk.',
    caption: 'Held up before kickoff. Engineering you can show.',
    span: 'lg:col-span-12',
    aspect: 'aspect-[21/9]',
  },
];

export function Editorial() {
  return (
    <section id="editorial" className="section bg-ink border-y border-rule">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 04½</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest">Campaign.</h2>
          </div>
          <span className="num hidden md:inline">Edition I · MMXXVI · shot on field</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <h3 className="lg:col-span-7 display text-[56px] md:text-[80px] lg:text-[104px] tracking-tightest leading-[0.92]">
            <span className="reveal block">Quiet luxury</span>
            <span className="reveal editorial block" data-delay="1">for the loudest minutes.</span>
          </h3>
          <p className="reveal lg:col-span-5 text-bone/90 text-[17px] leading-[1.7] max-w-md" data-delay="2">
            A photographic study of Zero Give in its environment: under boot,
            on street, through the cut. Four frames, one piece of engineering.
          </p>
        </div>

        {/* Single editorial spread: image right, oversize quote left.
            Uses the hand-held feature shot whose left third is intentional
            negative space, anchoring the inline display headline. */}
        <figure
          className="reveal relative overflow-hidden border border-rule bg-graphite mb-12 aspect-[16/9]"
          data-target
        >
          <img
            src={FEATURE_HOLD}
            alt="Zero Give sock held to camera, monogram and grip pattern visible."
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/40 to-transparent" />
          <figcaption className="absolute inset-y-0 left-0 w-full md:w-[55%] p-8 md:p-14 flex flex-col justify-center">
            <span className="eyebrow mb-6">Spread 01 · the inch you don&apos;t see</span>
            <p className="display text-[44px] md:text-[64px] lg:text-[80px] tracking-tightest leading-[0.95] text-bone">
              Built for the inch
              <br />
              <span className="editorial text-bone/95">you don&apos;t see.</span>
            </p>
            <p className="text-bone/85 mt-6 max-w-md leading-[1.65] text-[15px]">
              The grip lives under the boot, in the millimetre between sock
              and insole. Invisible until the moment it isn&apos;t.
            </p>
          </figcaption>
        </figure>

        <div className="relative mb-12 -mx-8 lg:-mx-14 overflow-hidden border-y border-rule py-8 md:py-10 bg-ink mask-fade">
          <div className="marquee whitespace-nowrap text-bone flex items-center gap-12">
            {Array.from({ length: 6 }).map((_, n) => (
              <span key={n} className="flex items-center gap-12 shrink-0">
                <span className="display text-[64px] md:text-[120px] tracking-tightest leading-none">Zero</span>
                <span className="editorial text-[64px] md:text-[120px] tracking-tightest leading-none text-bone/80">give</span>
                <span className="num text-bone/60">· Edition I ·</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
          {FRAMES.map((f, i) => (
            <figure
              key={f.label}
              className={`reveal group relative overflow-hidden border border-rule bg-graphite ${f.span} ${f.aspect}`}
              data-delay={String((i % 4) + 1)}
              data-target
            >
              <Image
                src={f.src}
                alt={f.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform ease-out group-hover:scale-[1.03]"
                style={{ transitionDuration: '1600ms' }}
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent pointer-events-none" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-6">
                <div>
                  <span className="num text-bone/80">{f.label}</span>
                  <p className="display text-[26px] md:text-[32px] tracking-tightest leading-[0.95] mt-2 text-bone">
                    {f.title}
                  </p>
                  <p className="text-bone/75 text-sm mt-2 max-w-md leading-[1.55]">{f.caption}</p>
                </div>
                <span className="num text-bone/70 hidden md:inline shrink-0">ZG-01</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
