import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Persistent Software blog';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    label: 'Blog',
    title: 'Notes from the work.',
    blurb: 'Field reports from client and product work: what broke, what fixed it, and the code.'
  });
}
