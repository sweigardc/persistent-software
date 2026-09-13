import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'About Persistent Software';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    label: 'About',
    title: 'Twenty years of shipping, one person to talk to.',
    blurb: 'Chris Sweigard — the engineer who scopes your project is the one who writes the code.'
  });
}
