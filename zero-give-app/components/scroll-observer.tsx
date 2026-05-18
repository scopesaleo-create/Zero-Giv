'use client';

import { useEffect } from 'react';

/**
 * One unified IO that activates .reveal, .split-word, .fade-side, .rule, .swipe.
 * Also drives [data-parallax] elements via scroll for a subtle drift.
 */
export function ScrollObserver() {
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
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );
    document.querySelectorAll('.reveal, .split-word, .fade-side, .rule, .swipe').forEach((el) => io.observe(el));

    // parallax: each element with data-parallax="speed" (e.g. -0.15) gets shifted
    const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]');
    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const offset = (center - vh / 2) * Number(el.dataset.parallax || '-0.1');
        el.style.setProperty('--py', String(offset));
      });
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}
