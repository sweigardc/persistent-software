import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Mobile app development — React Native for iOS and Android';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    label: 'React Native · iOS and Android',
    title: 'Now ship it to the app stores.',
    blurb: 'Vibe-coded prototypes rebuilt for production, and a white-label app skinned for your brand.'
  });
}
