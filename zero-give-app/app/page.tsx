import { Cursor } from '@/components/cursor';
import { ScrollProgress } from '@/components/scroll-progress';
import { SideDots } from '@/components/side-dots';
import { Nav } from '@/components/nav';
import { Intro } from '@/components/intro';
import { SmoothScroll } from '@/components/smooth-scroll';
import { ScrollObserver } from '@/components/scroll-observer';
import { Magnetic } from '@/components/magnetic';
import { Counters, CardSpotlight } from '@/components/reveal';
import { HeroSock } from '@/components/sections/hero';
import { Science } from '@/components/sections/science';
import { Tech } from '@/components/sections/tech';
import { Spline3D } from '@/components/sections/spline-3d';
import { Performance } from '@/components/sections/performance';
import { Athletes } from '@/components/sections/athletes';
import { CTA } from '@/components/sections/cta';
import { SiteFooter } from '@/components/sections/footer';

export default function Page() {
  return (
    <>
      <Intro />
      <SmoothScroll />
      <ScrollProgress />
      <Cursor />
      <SideDots />
      <Nav />

      <HeroSock />
      <Science />
      <Tech />
      <Spline3D />
      <Performance />
      <Athletes />
      <CTA />
      <SiteFooter />

      <ScrollObserver />
      <Magnetic />
      <Counters />
      <CardSpotlight />
    </>
  );
}
