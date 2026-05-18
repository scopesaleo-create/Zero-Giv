import { Logo } from '../logo';

export function SiteFooter() {
  return (
    <footer className="relative border-t border-rule bg-ink py-20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="flex items-center justify-between gap-10 border-b border-rule pb-12">
          <Logo className="h-24 md:h-40" />
          <span className="num hidden md:inline">Edition I · ZG-01</span>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-12 border-t border-rule pt-12">
          <div className="md:col-span-5">
            <p className="text-bone/55 max-w-sm text-[15px] leading-[1.7]">
              A biomechanical grip system for the modern game. Designed in studio, tested in stoppage time.
            </p>
            <p className="num mt-8">ZG-01 · MMXXVI · Edition I</p>
          </div>
          <div className="md:col-span-2">
            <p className="label text-bone/40 mb-5">Shop</p>
            <ul className="space-y-3 text-sm text-bone/75">
              <li><a className="nav-link" href="#">ZG-01 sock</a></li>
              <li><a className="nav-link" href="#">Bundles</a></li>
              <li><a className="nav-link" href="#">Accessories</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="label text-bone/40 mb-5">Studio</p>
            <ul className="space-y-3 text-sm text-bone/75">
              <li><a className="nav-link" href="#">Premise</a></li>
              <li><a className="nav-link" href="#">Players</a></li>
              <li><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="label text-bone/40 mb-5">Newsletter</p>
            <p className="text-sm text-bone/75 leading-[1.7]">A quiet thread, two or three letters a season.</p>
            <a href="#cta" className="btn-text mt-6">Subscribe <span className="arr">→</span></a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-rule flex flex-wrap items-center justify-between gap-6 text-bone/40 text-xs">
          <p>© MMXXVI · Zero Give. All rights reserved.</p>
          <p className="num">Made in studio · worn on field</p>
        </div>
      </div>
    </footer>
  );
}
