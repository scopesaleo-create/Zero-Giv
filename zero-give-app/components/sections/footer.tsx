import { Logo } from '../logo';
import { MODEL_IMAGES } from '@/lib/assets';

export function SiteFooter() {
  return (
    <footer className="relative border-t border-rule bg-ink overflow-hidden">
      {/* atmospheric product wash on the right edge */}
      <div
        aria-hidden
        className="absolute -right-40 -top-20 w-[720px] h-[720px] hidden md:block pointer-events-none opacity-[0.12] mix-blend-screen"
        style={{
          backgroundImage: `url(${MODEL_IMAGES.product})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'radial-gradient(circle at center, #000 40%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(circle at center, #000 40%, transparent 72%)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-14 pt-24 pb-14">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-rule">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">The brand</p>
            <p className="text-bone/85 max-w-sm text-[15px] leading-[1.7]">
              A biomechanical grip system for the modern game. Designed in
              studio, tested in stoppage time, worn by those who refuse to
              slip.
            </p>
            <p className="num mt-8">ZG-01 · MMXXVI · Edition I</p>
          </div>
          <div className="md:col-span-2">
            <p className="label text-bone/75 mb-5">Shop</p>
            <ul className="space-y-3 text-sm text-bone/85">
              <li><a className="nav-link" href="#edition">The edition</a></li>
              <li><a className="nav-link" href="#cta">Bundles</a></li>
              <li><a className="nav-link" href="#">Accessories</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="label text-bone/75 mb-5">Studio</p>
            <ul className="space-y-3 text-sm text-bone/85">
              <li><a className="nav-link" href="#science">Premise</a></li>
              <li><a className="nav-link" href="#tech">Technology</a></li>
              <li><a className="nav-link" href="#editorial">Campaign</a></li>
              <li><a className="nav-link" href="#athletes">Players</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="label text-bone/75 mb-5">A quiet thread</p>
            <p className="text-sm text-bone/80 leading-[1.7]">
              Two or three letters a season. Long-form notes from the players
              and studio. No noise, ever.
            </p>
            <a href="#cta" className="btn-text mt-6 inline-flex">Subscribe <span className="arr">→</span></a>
          </div>
        </div>

        {/* the wordmark as architecture — full-bleed lockup */}
        <div className="py-16 flex items-center justify-center">
          <Logo className="h-[28vw] max-h-[360px] text-bone/90" />
        </div>

        <div className="pt-8 border-t border-rule flex flex-wrap items-center justify-between gap-6 text-bone/75 text-xs">
          <p>© MMXXVI · Zero Give. All rights reserved.</p>
          <p className="num">Made in studio · worn on field · grip the game you love</p>
          <div className="flex items-center gap-5 text-bone/75">
            <a className="nav-link" href="#">Instagram</a>
            <a className="nav-link" href="#">TikTok</a>
            <a className="nav-link" href="#">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
