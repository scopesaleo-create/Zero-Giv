import { Logo } from './logo';

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between backdrop-blur-md bg-ink/65 border-b border-rule">
        <a href="#hero" className="flex items-center gap-4" aria-label="Zero Give home">
          <Logo className="h-7" />
          <span className="hidden md:inline label text-bone/55">ZG-01 / MMXXVI</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <a className="nav-link" href="#science">Premise</a>
          <a className="nav-link" href="#tech">Technology</a>
          <a className="nav-link" href="#spline">Specimen</a>
          <a className="nav-link" href="#speed">Performance</a>
          <a className="nav-link" href="#athletes">Players</a>
        </nav>
        <a href="#cta" className="btn-text">
          Reserve <span className="arr">→</span>
        </a>
      </div>
    </header>
  );
}
