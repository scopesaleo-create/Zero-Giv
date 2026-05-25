import { LOCAL_IMAGES } from '@/lib/assets';

// Editorial spread built only from the assets in /public/images.
// Five frames at mixed native aspect ratios — every image renders at
// or near its source dimensions so nothing is cropped.
const FRAMES = [
  {
    src: LOCAL_IMAGES.twoModels,
    label: 'Look 01',
    title: 'Two on the pitch.',
    caption: 'Same grip, same edition, two players writing the same line.',
    span: 'lg:col-span-12',
    aspect: 'aspect-[16/9]',
  },
  {
    src: LOCAL_IMAGES.action2,
    label: 'Look 02',
    title: 'Court after dark.',
    caption: 'Cage, concrete, ZG-01. The grip travels.',
    span: 'lg:col-span-5',
    aspect: 'aspect-[3/4]',
  },
  {
    src: LOCAL_IMAGES.doubleSocks,
    label: 'Look 03',
    title: 'Pair, in hand.',
    caption: 'Cuff, ankle, sole. Three faces, one piece of engineering.',
    span: 'lg:col-span-7',
    aspect: 'aspect-[4/3]',
  },
  {
    src: LOCAL_IMAGES.sockModel,
    label: 'Look 04',
    title: 'The specimen.',
    caption: 'PivotCore™ underside. Concentric grip, directional intent.',
    span: 'lg:col-span-12',
    aspect: 'aspect-[16/9]',
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
              <img
                src={f.src}
                alt={f.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03]"
                style={{ transition: 'transform 1600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
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
