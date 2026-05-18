'use client';

import { useEffect, useRef } from 'react';

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let rx = tx, ry = ty;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate3d(${tx}px,${ty}px,0) translate(-50%,-50%)`;
    };
    const loop = () => {
      rx += (tx - rx) * 0.55;
      ry += (ty - ry) * 0.55;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    const targets = document.querySelectorAll('a, button, input, [data-target]');
    const onEnter = () => ring.classList.add('hov');
    const onLeave = () => ring.classList.remove('hov');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const hotspots = document.querySelectorAll('.hot');
    const onHotEnter = () => ring.classList.add('target');
    const onHotLeave = () => ring.classList.remove('target');
    hotspots.forEach((el) => {
      el.addEventListener('mouseenter', onHotEnter);
      el.addEventListener('mouseleave', onHotLeave);
    });

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="c-ring" aria-hidden />
      <div ref={dotRef} className="c-dot" aria-hidden />
    </>
  );
}
