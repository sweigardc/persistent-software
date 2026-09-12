import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'AI-assisted code migrations';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    label: 'AI-assisted code migrations',
    title: 'Move the code you cannot rewrite.',
    blurb: 'Legacy systems moved to a modern stack, behaviour intact and verified against the original.'
  });
}
