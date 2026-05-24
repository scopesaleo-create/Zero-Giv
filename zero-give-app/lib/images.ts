// Component-detail metadata for the hero's interactive A1/A2/A3 panels.
// No image URLs here — the 360 rotation video already on stage supplies
// the visual; these panels add the engineering callouts on top.
export type SockFocus = 'hero' | 'heel' | 'grip' | 'toe';

export const COMPONENT_META: Record<Exclude<SockFocus, 'hero'>, { num: string; title: string; subtitle: string; body: string; specs: [string, string][] }> = {
  heel: {
    num: '01',
    title: 'Heel Lock Zone.',
    subtitle: 'Locked Foundation',
    body: 'A locked anchor. Engineered to eliminate heel lift so every push-off translates straight to forward motion — not lost inside the boot.',
    specs: [
      ['Slip reduction', '−38% vs. cotton'],
      ['Compression', 'Targeted zonal'],
      ['Cuff', 'Reinforced lock band'],
      ['Heel cup', '3D-knit pocket'],
    ],
  },
  grip: {
    num: '02',
    title: 'PivotCore™ Grip.',
    subtitle: 'Directional Control',
    body: 'Directional silicone grip pads at the foot-boot interface. Concentric rings control rotation across 360° — plant, pivot, accelerate without slip.',
    specs: [
      ['Grip points', '3 zoned arrays'],
      ['Coverage', '360° directional'],
      ['Material', 'High-friction silicone'],
      ['Rotation', '±92° stability'],
    ],
  },
  toe: {
    num: '03',
    title: 'Toe Box & First Touch.',
    subtitle: 'Cleaner Contact',
    body: 'Reinforced toe cap with low-bulk knit and anti-slip channels. Cleaner contact, better ball feel, and the strike stays where you put it.',
    specs: [
      ['Reinforcement', 'Dual-layer cap'],
      ['Bulk', 'Low-profile knit'],
      ['Strike clarity', '+24% contact'],
      ['Wear life', '4× standard'],
    ],
  },
};
