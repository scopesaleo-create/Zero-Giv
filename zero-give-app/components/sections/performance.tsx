import { SOCK_IMAGES } from '@/lib/images';

const STATS = [
  { label: 'Heel slip', to: 38, suffix: '%', sub: 'Reduction vs. standard sock' },
  { label: 'Energy transfer', to: 24, suffix: '%', sub: 'More force into push-off' },
  { label: 'Rotational control', to: 92, suffix: '°', sub: 'Cut-angle stability range' },
  { label: 'Match duration', to: 90, suffix: '+', sub: 'Minutes of consistent grip' },
];

const TILES = [
  {
    title: 'Locked-In Fit',
    body: 'Eliminates internal foot movement so your boot feels welded to you.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 1 1 8 0v3" />
      </svg>
    ),
  },
  {
    title: 'Max Force Transfer',
    body: 'More of your energy moves forward — none of it slips sideways.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2 L15 9 L22 12 L15 15 L12 22 L9 15 L2 12 L9 9 Z" />
      </svg>
    ),
  },
  {
    title: 'Explosive Control',
    body: 'Control every cut, plant, and pivot — with confidence.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" />
      </svg>
    ),
  },
  {
    title: 'Built for Speed',
    body: 'Optimized for explosive movement and 90+ min performance.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3a9 9 0 0 1 9 9" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        <path d="M12 12 17 7" />
      </svg>
    ),
  },
];

export function Performance() {
  return (
    <section id="speed" className="relative py-32 lg:py-44 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{ backgroundImage: `url(${SOCK_IMAGES.heel})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="pnum">03 / PERSPECTIVE</span>
          <span className="divider"><span className="l" /></span>
          <span className="label text-accent">The Match</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="display text-6xl md:text-7xl lg:text-8xl swipe">
            Built for<br /><span className="text-accent">game speed.</span>
          </h2>
          <p className="reveal text-white/70 text-lg max-w-md" data-delay="2">
            Real intensity. Real sweat. Real fatigue. Zero Give performs across 90+ minutes — when your boots fail and your legs are full of acid.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-16" data-delay="3">
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink p-8">
              <p className="label text-white/40">{s.label}</p>
              <p
                className="display text-5xl md:text-6xl text-accent mt-2"
                data-counter
                data-from="0"
                data-to={String(s.to)}
                data-suffix={s.suffix}
              >
                0{s.suffix}
              </p>
              <p className="text-xs text-white/50 mt-2">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {TILES.map((t, i) => (
            <div key={t.title} className="ftile bg-ink reveal" data-delay={String(i + 1)} data-target>
              <div className="icon">{t.icon}</div>
              <h3 className="display text-2xl">{t.title}</h3>
              <p className="text-sm text-white/60 mt-2">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
