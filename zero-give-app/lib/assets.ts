// All imagery is now sourced from /public/images and /public/media in the
// repo. No external CDN URLs. New Higgsfield drops should land in the same
// /public/images folder and be wired in here.
export const LOCAL_IMAGES = {
  logo:        '/images/zero-give-logo.png',
  london:      '/images/zero-give-london.png',
  twoModels:   '/images/zg-two-models.png',
  doubleSocks: '/images/zg-double-socks.png',
  sockModel:   '/images/sock-model.png',
} as const;

export const LOCAL_MEDIA = {
  rotation: '/media/zero-give-360.mp4',
  action:   '/media/zero-give-action.mp4',
} as const;
