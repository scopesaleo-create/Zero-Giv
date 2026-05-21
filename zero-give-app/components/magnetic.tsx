'use client';

import { useEffect } from 'react';

/**
 * Magnetic hover: buttons (and any [data-magnetic] element) lean toward the
 * cursor while it's near, then ease back on leave. Pure CSS transform driven by
 * pointer events — no rAF, GPU-friendly. Skipped on coarse pointers.
 */
export function Magnetic() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.btn, [data-magnetic]'),
    );
    const strength = 0.32;
    const cleanups: Array<() => void> = [];

    els.forEach((el) => {
      const arrow = el.querySelector<HTMLElement>('.arr');

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.style.transition = 'transform .2s cubic-bezier(.16,1,.3,1)';
        el.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
        if (arrow) arrow.style.transform = `translate(${mx * 0.12}px, ${my * 0.12}px)`;
      };
      const onLeave = () => {
        el.style.transition = 'transform .55s cubic-bezier(.16,1,.3,1)';
        el.style.transform = '';
        if (arrow) arrow.style.transform = '';
      };

      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
      });
    });

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
