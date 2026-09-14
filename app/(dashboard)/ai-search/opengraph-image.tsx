import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'AI search optimization — SEO, AEO and GEO for Google, ChatGPT, Gemini and Claude';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    label: 'SEO · AEO · GEO',
    title: 'AI is the new search.',
    blurb: 'Rank on Google, and get named when ChatGPT, Gemini and Claude answer the question.'
  });
}
