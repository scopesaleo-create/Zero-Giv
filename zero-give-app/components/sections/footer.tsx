export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#1FA8FF" strokeWidth="1.5" />
              <path d="M7 14 L14 7 L21 14 L14 21 Z" stroke="#fff" strokeWidth="1.4" fill="none" />
              <circle cx="14" cy="14" r="2.2" fill="#1FA8FF" />
            </svg>
            <span className="display text-xl">Zero Give</span>
          </div>
          <p className="mt-4 text-white/55 max-w-sm text-sm">
            Elite grip socks for explosive soccer performance. Because traction isn't just dots — it's direction.
          </p>
        </div>
        <div>
          <p className="label text-white/40 mb-3">Shop</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a className="nav-link" href="#">Grip Socks</a></li>
            <li><a className="nav-link" href="#">Bundles</a></li>
            <li><a className="nav-link" href="#">Accessories</a></li>
          </ul>
        </div>
        <div>
          <p className="label text-white/40 mb-3">Brand</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a className="nav-link" href="#">Our Goal</a></li>
            <li><a className="nav-link" href="#">Player's Space</a></li>
            <li><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
        <p>© 2026 Zero Give. All rights reserved.</p>
        <p>Powered by performance. Designed for the players.</p>
      </div>
    </footer>
  );
}
