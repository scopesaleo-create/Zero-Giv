'use client';

import { motion } from 'framer-motion';

/**
 * Animated SVG paths drifting across the background.
 * Theme-adapted: bone-on-ink with very low opacity so it sits behind hero content.
 */
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${
      470 - i * 6
    } ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.35 + i * 0.015,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-bone" viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.012 + path.id * 0.004}
            initial={{ pathLength: 0.3, opacity: 0.18 }}
            animate={{
              pathLength: 1,
              opacity: [0.08, 0.18, 0.08],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 28 + Math.random() * 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/** Backdrop-only variant — to be placed inside any container as an absolute layer. */
export function BackgroundPathsLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
