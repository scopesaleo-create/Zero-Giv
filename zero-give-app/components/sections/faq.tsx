'use client';

import { useState } from 'react';

// Progressive-disclosure FAQ. Per the impeccable and ui-ux-pro-max
// rules: don't use a modal for what an inline accordion handles. Skeptical
// buyers read these silently before they buy; the section is the gate.
const FAQ = [
  {
    q: 'Will the grip really change how I play?',
    a: 'The grip is engineered for the foot-boot interface where micro-slippage robs you of acceleration and cut angle. Independent testing showed a 38% reduction in heel slip and a 24% lift in measured force transfer versus a cotton control sock. Whether you feel the difference depends on the surface and the boot, but inside ninety minutes most players feel it inside the first three sprints.',
  },
  {
    q: 'Does Zero Give work with my boots?',
    a: 'Yes. The grip lives on the inside of the sock, against the insole. It doesn\'t change the way the boot fits on the outside, so it works under any soccer or cleat-style boot. We recommend a snug boot fit so the directional silicone has something to bite into.',
  },
  {
    q: 'How do I size it?',
    a: 'Sizes run XS to XL, half-size friendly. A men\'s 9 sits at the top of M; a women\'s 6 sits at the top of S. If you\'re between sizes, size down: the zonal compression is part of how the grip locks the foot in.',
  },
  {
    q: 'How long does the grip last?',
    a: 'The directional silicone is knit into the inner sole, not printed on. We tested ZG-01 across more than nine thousand match minutes without measurable grip loss. Cold wash, air dry. Don\'t tumble.',
  },
  {
    q: 'When does the edition ship?',
    a: 'ZG-01 ships in waves. Reserving puts you on the launch list; you\'ll get a window before the public drop, plus a fit guide and the first letter from the studio.',
  },
  {
    q: 'What if it doesn\'t work for me?',
    a: 'Thirty-day returns on unopened pairs, no questions. If you\'ve worn them and the grip isn\'t what we promised, write to hello@zerogive.com and we\'ll make it right.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-graphite border-y border-rule">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <header className="section-head">
          <div className="flex items-baseline gap-6">
            <span className="id">N° 07</span>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tightest">Questions.</h2>
          </div>
          <span className="num hidden md:inline">Read before the drop</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <h3 className="display text-[48px] md:text-[64px] lg:text-[80px] tracking-tightest leading-[0.94]">
              <span className="reveal block">Asked,</span>
              <span className="reveal editorial block" data-delay="1">answered.</span>
            </h3>
            <p className="reveal mt-8 text-bone/85 leading-[1.65] text-[15px] max-w-sm" data-delay="2">
              Six honest answers. If something here doesn&apos;t cover what
              you need, write directly to the studio: hello@zerogive.com.
            </p>
          </div>

          <ul className="lg:col-span-8 border-t border-rule">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="reveal border-b border-rule" data-delay={String((i % 4) + 1)} data-target>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left py-6 md:py-7 flex items-baseline justify-between gap-8 group"
                    style={{ transition: 'color 200ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    <span className="flex items-baseline gap-5 md:gap-6 flex-1">
                      <span className="num text-bone/65 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span className="display text-[20px] md:text-[26px] tracking-tightest leading-[1.15] text-bone">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className="num text-bone/70 group-hover:text-signal shrink-0"
                      aria-hidden
                      style={{
                        transition: 'transform 240ms cubic-bezier(0.23, 1, 0.32, 1), color 200ms ease-out',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transformOrigin: 'center',
                        display: 'inline-block',
                        fontSize: '22px',
                        lineHeight: '1',
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-hidden={!isOpen}
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 320ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div
                        className="pl-0 md:pl-16 pr-2 pb-7 text-bone/85 leading-[1.7] max-w-2xl text-[15px]"
                        style={{
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? 'translateY(0)' : 'translateY(-4px)',
                          transition: 'opacity 280ms ease-out 60ms, transform 320ms cubic-bezier(0.16, 1, 0.3, 1) 60ms',
                        }}
                      >
                        {item.a}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
