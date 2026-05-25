import { Logo } from './logo';

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-8 lg:px-14 py-4 flex items-center justify-between backdrop-blur-md bg-ink/55 border-b border-rule">
        <a href="#hero" className="flex items-center gap-4" aria-label="Zero Give home">
          <Logo className="h-7" />
          <span className="hidden md:inline label text-bone/75">ZG-01 · MMXXVI</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          <a className="nav-link" href="#science">Premise</a>
          <a className="nav-link" href="#tech">Technology</a>
          <a className="nav-link" href="#spline">Specimen</a>
          <a className="nav-link" href="#in-action">In action</a>
          <a className="nav-link" href="#speed">Performance</a>
          <a className="nav-link" href="#editorial">Campaign</a>
          <a className="nav-link" href="#athletes">Players</a>
          <a className="nav-link" href="#edition">Edition</a>
          <a className="nav-link" href="#faq">Questions</a>
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-signal text-ink text-[12px] font-semibold tracking-wide uppercase border border-signal"
          style={{
            transition: 'background-color 200ms var(--ease-out), color 200ms var(--ease-out), transform 160ms var(--ease-out)',
            boxShadow: '0 0 0 1px rgba(214,255,61,0.18), 0 10px 24px -12px rgba(214,255,61,0.4)',
          }}
        >
          Reserve <span className="arr">→</span>
        </a>
      </div>
    </header>
  );
}
