'use client';
import { useEffect, useRef } from 'react';

const SECTIONS = ['hero', 'science', 'tech', 'spline', 'speed', 'athletes', 'cta'];

export function SideDots() {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
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
      {SECTIONS.map((id, i) => (
        <button
          key={id}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={i === 0 ? 'active' : ''}
          aria-label={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
        />
      ))}
    </nav>
  );
}
