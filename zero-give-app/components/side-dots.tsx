'use client';
import { useEffect, useRef } from 'react';

const SECTIONS: { id: string; label: string }[] = [
  { id: 'hero', label: 'Hero' },
  { id: 'science', label: 'Premise' },
  { id: 'tech', label: 'Technology' },
  { id: 'spline', label: 'Specimen' },
  { id: 'speed', label: 'Performance' },
  { id: 'editorial', label: 'Campaign' },
  { id: 'athletes', label: 'Players' },
  { id: 'cta', label: 'Reserve' },
];

export function SideDots() {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const idx = sections.indexOf(en.target as HTMLElement);
          refs.current.forEach((d, i) => d?.classList.toggle('active', i === idx));
        });
      },
      { threshold: 0.35 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="sidedots hidden lg:flex" aria-label="Section navigation">
      {SECTIONS.map((s, i) => (
        <button
          key={s.id}
          ref={(el) => { refs.current[i] = el; }}
          className={i === 0 ? 'active' : ''}
          aria-label={s.label}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="ttl">{s.label}</span>
        </button>
      ))}
    </nav>
  );
}
