import Image from 'next/image';
import { MODEL_IMAGES } from '@/lib/assets';

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
            A photographic study of Zero Give in its environment — under boot,
            on street, through the cut. Four frames, one piece of engineering.
          </p>
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
