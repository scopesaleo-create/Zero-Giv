'use client';

import { useEffect, useRef } from 'react';

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
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

    // generic hover: links/buttons/inputs
    const targets = document.querySelectorAll('a, button, input, [data-target]');
    const onHovEnter = () => ring.classList.add('hov');
    const onHovLeave = () => ring.classList.remove('hov');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onHovEnter);
      el.addEventListener('mouseleave', onHovLeave);
    });

    // drag morph on .cursor-drag elements
    const dragZones = document.querySelectorAll('.cursor-drag');
    const onDragEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      ring.classList.add('drag');
      label.textContent = el.dataset.cursor || 'DRAG';
      label.classList.add('show');
    };
    const onDragLeave = () => {
      ring.classList.remove('drag');
      label.classList.remove('show');
    };
    dragZones.forEach((el) => {
      el.addEventListener('mouseenter', onDragEnter);
      el.addEventListener('mouseleave', onDragLeave);
    });

    // hotspot targets
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
      <div ref={ringRef} className="c-ring" aria-hidden>
        <span ref={labelRef} className="c-label" />
      </div>
      <div ref={dotRef} className="c-dot" aria-hidden />
    </>
  );
}
