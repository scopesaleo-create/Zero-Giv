// All imagery is sourced from /public/images and /public/media in this
// repo. Every entry below is rendered in containers that respect its
// native aspect ratio — most of the new portraits are 896 x 1200 (3:4).
export const LOCAL_IMAGES = {
  // Legacy assets kept for fallback.
  logo:        '/images/zero-give-logo.png',
  london:      '/images/zero-give-london.png',
  twoModels:   '/images/zg-two-models.png',
  doubleSocks: '/images/zg-double-socks.png',
  sockModel:   '/images/sock-model.png',

  // New 896 x 1200 (3:4) drops.
  logoMark:    '/images/ZgLogo2.avif',    // alt logo glyph
  inAction1:   '/images/ZgIn-Action1.png', // squad · Big Ben · color
  action2:     '/images/ZgAction2.png',    // graffiti court at night
  running1:    '/images/ZgRunning1.png',   // sprint, sock visible mid-flight
  running2:    '/images/ZgRunning2.png',   // foot close-up on wet pitch
  layers:      '/images/ZgLayers.png',     // technical exploded view
} as const;

export const LOCAL_MEDIA = {
  rotation: '/media/zero-give-360.mp4',
  action:   '/media/zero-give-action.mp4',
} as const;
