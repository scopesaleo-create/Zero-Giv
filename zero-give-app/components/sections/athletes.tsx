// To swap in real portraits, replace each PORTRAIT_SLOT block with:
//   <Image src={a.src} alt={a.name} fill priority={false} sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
// and uncomment the next-image import below.
// import Image from 'next/image';

const ATHLETES: { name: string; sport: string; quote: string; src: string }[] = [
  {
    name: 'CeeDee Lamb',
    sport: 'Wide Receiver · NFL',
    quote: 'They lock my foot in. More power, more control through every cut.',
    src: '/athletes/athlete-01.jpg',
  },
  {
    name: 'Julian Green',
    sport: 'Professional Footballer',
    quote: 'I feel way more stable in my cuts. There is no internal slide — just me and the boot.',
    src: '/athletes/athlete-02.jpg',
  },
  {
    name: 'Saquon Barkley',
    sport: 'Running Back · NFL',
    quote: 'The traction is unreal. A game changer in the rain, on turf, on anything.',
    src: '/athletes/athlete-03.jpg',
  },
  {
    name: 'Sofia Marín',
    sport: 'Midfielder · NWSL',
    quote: 'My plant foot doesn’t move. That changes everything about how I read the game.',
    src: '/athletes/athlete-04.jpg',
  },
];

export function Athletes() {
  return (
    <section id="athletes" className="section bg-carbon border-y border-rule">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 05 — Players</span>
          </div>
          <span className="num hidden md:inline">In the words of those who compete</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <h3 className="reveal lg:col-span-8 display text-display-lg tracking-tightest">
            Trusted by those
            <br />
            <span className="editorial text-accent">who compete</span>.
          </h3>
          <p className="reveal lg:col-span-4 text-bone/85 text-[17px] leading-[1.7] max-w-md" data-delay="1">
            The athletes living the difference. From training kit to stoppage time —
            ZG-01 stays welded in.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {ATHLETES.map((a, i) => (
            <li key={a.name} className="reveal group" data-delay={String((i % 4) + 1)}>
              <figure className="relative w-full aspect-[4/5] overflow-hidden bg-ink">
                {/* PORTRAIT_SLOT: replace with
                    <Image src={a.src} alt={a.name} fill priority={false} sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" /> */}
                <div className="portrait-slot">
                  <div className="ring"><span className="mark">ZG</span></div>
                </div>

                {/* corner registration marks */}
                <span className="absolute top-3 left-3 w-2.5 h-2.5 border-l border-t border-bone/30" />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 border-r border-t border-bone/30" />
                <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-l border-b border-bone/30" />
                <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-r border-b border-bone/30" />

                <figcaption className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest text-bone/70">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-[10px] tracking-widest text-bone/70">ZG-01</span>
                </figcaption>
              </figure>

              <div className="mt-6 flex flex-col gap-3">
                <p className="editorial text-[20px] leading-[1.35] text-bone">&ldquo;{a.quote}&rdquo;</p>
                <div className="pt-4 border-t border-rule flex items-baseline justify-between gap-4">
                  <p className="text-[14px] font-medium tracking-tight text-bone">{a.name}</p>
                  <span className="font-mono text-[10px] tracking-widest text-bone/55">{a.sport}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-24 overflow-hidden py-10 border-y border-rule mask-fade">
          <div className="marquee">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-20 shrink-0">
                <span className="display text-[clamp(48px,8vw,112px)] leading-none tracking-tightest text-bone/10">NO SLIP</span>
                <span className="accent-dot" />
                <span className="display text-[clamp(48px,8vw,112px)] leading-none tracking-tightest editorial text-bone">more control</span>
                <span className="accent-dot" />
                <span className="display text-[clamp(48px,8vw,112px)] leading-none tracking-tightest text-bone/10">GAME SPEED</span>
                <span className="accent-dot" />
                <span className="display text-[clamp(48px,8vw,112px)] leading-none tracking-tightest editorial text-bone">zero give</span>
                <span className="accent-dot" />
                <span className="display text-[clamp(48px,8vw,112px)] leading-none tracking-tightest text-bone/10">FULL NINETY</span>
                <span className="accent-dot" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
