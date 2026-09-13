import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Persistent Software — full-stack, mobile and AI engineering';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    label: 'Full-stack · Mobile · AI',
    title: 'Ship software faster than ever.',
    blurb: 'One senior engineer, twenty years of production experience — and you own the codebase.'
  });
}
