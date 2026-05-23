import { Logo } from '../logo';

export function SiteFooter() {
  return (
    <footer className="relative border-t border-rule bg-ink pt-20 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex items-end justify-between gap-10 border-b border-rule pb-12">
          <Logo className="h-20 md:h-32" />
          <div className="text-right flex flex-col gap-2">
            <span className="num text-accent">ZG-01</span>
            <span className="num">Edition I · MMXXVI</span>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-12 pb-16 border-b border-rule">
          <div className="md:col-span-5">
            <p className="text-bone/80 max-w-sm text-[15px] leading-[1.7]">
              A biomechanical grip system for the modern game. Designed in studio,
              tested in stoppage time.
            </p>
            <p className="num mt-8">Made in studio · Worn on field</p>
          </div>
          <div className="md:col-span-2">
            <p className="label text-bone/55 mb-5">Shop</p>
            <ul className="space-y-3">
              <li><a className="nav-link" href="#">ZG-01 sock</a></li>
              <li><a className="nav-link" href="#">Bundles</a></li>
              <li><a className="nav-link" href="#">Accessories</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="label text-bone/55 mb-5">Studio</p>
            <ul className="space-y-3">
              <li><a className="nav-link" href="#science">Premise</a></li>
              <li><a className="nav-link" href="#athletes">Players</a></li>
              <li><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="label text-bone/55 mb-5">Follow</p>
            <ul className="space-y-3">
              <li><a className="nav-link" href="#">Instagram</a></li>
              <li><a className="nav-link" href="#">X / Twitter</a></li>
              <li><a className="nav-link" href="#">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <p className="num">© MMXXVI · Zero Give. All rights reserved.</p>
          <p className="num">Grip the game you love.</p>
        </div>
      </div>
    </footer>
  );
}
