# Zero Give — Next.js site

Production refactor of the Zero Give brand site. Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui patterns + Spline 3D + Framer Motion.

## Stack

- **Next.js 14** (App Router, RSC)
- **TypeScript** strict
- **Tailwind CSS** with custom design tokens (`tailwind.config.ts`)
- **shadcn/ui** project structure (`components.json`, `components/ui/`, `lib/utils.ts`)
- **@splinetool/react-spline** for the interactive 3D scene
- **Framer Motion** (available for animations; Aceternity Spotlight component included)
- **Lucide React** for icons (installed; SVGs inlined for hero performance)

## Install & run

```bash
cd zero-give-app
npm install      # or pnpm install / bun install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Project structure

```
zero-give-app/
├── app/
│   ├── layout.tsx        # fonts + global shell
│   ├── page.tsx          # composes all sections
│   └── globals.css       # tokens, helpers, animations
├── components/
│   ├── ui/               # shadcn-style primitives
│   │   ├── card.tsx
│   │   ├── spotlight.tsx (Aceternity)
│   │   └── splite.tsx    (Spline wrapper)
│   ├── sections/         # page sections
│   │   ├── hero.tsx      # interactive sock — image-driven perspective shifter
│   │   ├── science.tsx
│   │   ├── tech.tsx
│   │   ├── spline-3d.tsx # SplineScene + Spotlight Card
│   │   ├── performance.tsx
│   │   ├── athletes.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   ├── cursor.tsx        # snappy custom cursor
│   ├── nav.tsx
│   ├── reveal.tsx        # IntersectionObserver + counters + card spotlight
│   ├── scroll-progress.tsx
│   └── side-dots.tsx
├── lib/
│   ├── images.ts         # AI-generated product image URLs + component meta
│   └── utils.ts          # cn() helper for shadcn
└── public/
    └── assets/           # local image / video slots
```

## Hero — perspective shifter

`components/sections/hero.tsx` is the centerpiece. Four AI-generated product shots (hero overview + heel close-up + sole grip close-up + toe close-up) are layered as background "frames." Only the active frame is visible. Hovering a hotspot crossfades-preview that frame; clicking commits to it and slides in a detail panel with copy + specs. The active frame uses a Ken-Burns slow zoom (`animation: ken-burns 10s ease-out forwards`) so each component feels like a held cinematic shot.

To swap in real product photography:
1. Drop PNGs into `public/assets/images/` (e.g. `hero.png`, `heel.png`, `grip.png`, `toe.png`).
2. Update `lib/images.ts`:
   ```ts
   export const SOCK_IMAGES = {
     hero: '/assets/images/hero.png',
     heel: '/assets/images/heel.png',
     grip: '/assets/images/grip.png',
     toe: '/assets/images/toe.png',
   };
   ```

## Replacing the placeholder Spline scene

`components/sections/spline-3d.tsx` currently loads a generic Spline demo scene. To use your own ZG sock model:

1. Build/import the sock in [Spline](https://spline.design).
2. **Export → Code → React/Web** and copy the `.splinecode` URL.
3. Replace the `scene` prop in `spline-3d.tsx`.

## When real videos become available

If you upgrade your Higgsfield/Bytedance plan, swap the image background-frames in `hero.tsx` for `<video autoPlay loop muted playsInline>` elements pointing at the generated mp4s. The crossfade + Ken-Burns animation can be removed since real video carries the motion.

## License notes for `components/ui/*`

- `card.tsx` — shadcn/ui (MIT)
- `spotlight.tsx` — Aceternity UI (MIT)
- `splite.tsx` — Spline integration wrapper (template provided by user; standard `@splinetool/react-spline` Suspense pattern)
