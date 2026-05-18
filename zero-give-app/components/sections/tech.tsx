import { SOCK_IMAGES } from '@/lib/images';

export function Tech() {
  return (
    <section
      id="tech"
      className="relative py-32 lg:py-44 overflow-hidden border-y border-white/5 bg-gradient-to-b from-panel via-ink to-panel"
    >
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="pnum">02 / PERSPECTIVE</span>
          <span className="divider"><span className="l" /></span>
          <span className="label text-accent">The Engineer</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <h2 className="display text-6xl md:text-7xl lg:text-8xl swipe">
              PivotCore<sup className="text-2xl text-accent">™</sup><br />Technology.
            </h2>
            <p className="reveal mt-8 text-white/70 text-lg max-w-md leading-relaxed" data-delay="2">
              A biomechanical grip system designed to lock your foot in, control rotation, and maximize the transfer of force in every direction.
            </p>
            <dl className="reveal mt-12 grid grid-cols-2 gap-x-8 gap-y-6 max-w-md" data-delay="4">
              <div><dt className="label text-white/40">Yarn</dt><dd className="text-sm text-white/80 mt-1">Recycled poly / Lycra® blend</dd></div>
              <div><dt className="label text-white/40">Grip pads</dt><dd className="text-sm text-white/80 mt-1">Directional silicone array</dd></div>
              <div><dt className="label text-white/40">Compression</dt><dd className="text-sm text-white/80 mt-1">Zonal — arch & midfoot</dd></div>
              <div><dt className="label text-white/40">Cuff</dt><dd className="text-sm text-white/80 mt-1">Locked heel architecture</dd></div>
            </dl>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative aspect-square max-w-[560px] mx-auto">
              <div className="halo absolute inset-0">
                <div className="h-orbit" />
                <div className="h-ring" />
                <div className="h-ring r2" />
              </div>
              <div
                className="absolute inset-[8%] rounded-full overflow-hidden border border-accent/20"
                style={{
                  backgroundImage: `url(${SOCK_IMAGES.grip})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label="PivotCore grip pattern close-up"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
