export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-5 flex items-center justify-between backdrop-blur-md bg-ink/40 border-b border-white/5">
      <a href="#hero" className="flex items-center gap-3" aria-label="Zero Give home">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="13" stroke="#1FA8FF" strokeWidth="1.5" />
          <path d="M7 14 L14 7 L21 14 L14 21 Z" stroke="#fff" strokeWidth="1.4" fill="none" />
          <circle cx="14" cy="14" r="2.2" fill="#1FA8FF" />
        </svg>
        <span className="display text-xl tracking-wide">Zero Give</span>
        <span className="label text-white/40 hidden md:inline">/ ZG-01</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm">
        <a className="nav-link" href="#science">The Science</a>
        <a className="nav-link" href="#tech">Technology</a>
        <a className="nav-link" href="#spline">3D Explore</a>
        <a className="nav-link" href="#speed">Performance</a>
        <a className="nav-link" href="#athletes">Athletes</a>
      </nav>
      <a href="#cta" className="btn btn-primary text-sm">
        Shop Now <span className="arr">→</span>
      </a>
    </header>
  );
}
