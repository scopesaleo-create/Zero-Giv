'use client';

import { useEffect, useState } from 'react';
import { Logo } from './logo';

export function Intro() {
  const [hidden, setHidden] = useState(false);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    // skip intro if we've shown it this session
    if (typeof window !== 'undefined' && sessionStorage.getItem('zg_intro')) {
      setShown(false);
      return;
    }
    sessionStorage.setItem('zg_intro', '1');
    const t = window.setTimeout(() => setHidden(true), 2700);
    return () => window.clearTimeout(t);
  }, []);

  if (!shown || hidden) return null;
  return (
    <div className="intro" aria-hidden>
      <div className="intro-stack">
        <img src="/images/ZgLogo2.avif" alt="" className="intro-glyph" aria-hidden />
        <Logo className="intro-mark" />
      </div>
      <span className="intro-meta">N° 01 · MMXXVI</span>
      <span className="intro-meta right">Grip · The Game · You Love</span>
    </div>
  );
}
