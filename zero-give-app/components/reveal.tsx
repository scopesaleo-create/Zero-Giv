'use client';
import { useEffect } from 'react';

export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    document.querySelectorAll('.reveal, .swipe').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

export function Counters() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          const from = +(el.dataset.from || '0');
          const to = +(el.dataset.to || '0');
          const suffix = el.dataset.suffix || '';
          const start = performance.now();
          const dur = 1400;
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(from + (to - from) * eased) + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.unobserve(el);
        });
      },
      { threshold: 0.4 },
    );
    document.querySelectorAll('[data-counter]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

export function CardSpotlight() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
    };
    const cards = document.querySelectorAll<HTMLElement>('.tcard');
    cards.forEach((c) => c.addEventListener('mousemove', handler as any));
    return () => cards.forEach((c) => c.removeEventListener('mousemove', handler as any));
  }, []);
  return null;
}
