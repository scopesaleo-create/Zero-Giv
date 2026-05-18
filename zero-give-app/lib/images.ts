// AI-generated product hero images. Swap with real product photography when available.
export const SOCK_IMAGES = {
  hero: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DsbCcUmbuua7dCJ2lMKxJPaZak/hf_20260518_052445_8d5c346b-c9c3-45ef-a50e-618bef5351b6.png',
  heel: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DsbCcUmbuua7dCJ2lMKxJPaZak/hf_20260518_052651_3a99b626-2549-439e-b44e-14bd073d1a67.png',
  grip: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DsbCcUmbuua7dCJ2lMKxJPaZak/hf_20260518_053045_294c9835-abcd-48a8-b6f0-0e1cc816c401.png',
  toe: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DsbCcUmbuua7dCJ2lMKxJPaZak/hf_20260518_053327_487ea782-5919-48fd-bcd0-0bf6d4dc14cb.png',
} as const;

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
