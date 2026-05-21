'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  text: string;
  className?: string;
  /** seconds before the first word animates */
  delay?: number;
  /** per-word stagger in seconds */
  stagger?: number;
};

/**
 * Word-by-word blur-in entrance. Triggers once when 10% visible.
 * Each word lifts up, sharpens from blur, and fades in.
 */
export function BlurText({ text, className, delay = 0, stagger = 0.08 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <span ref={ref} className={className} style={{ display: 'inline' }}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 32 }}
          animate={
            shown
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(10px)', opacity: 0, y: 32 }
          }
          transition={{
            duration: 0.7,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.22em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
