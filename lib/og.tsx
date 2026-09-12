import { ImageResponse } from 'next/og';

/**
 * One card for every shared link: the ink band, the cyan spine and the mono
 * label the site itself opens with. Rendered at build time by each route's
 * opengraph-image, so a link pasted into Slack or LinkedIn looks like the page
 * it points at.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const INK = '#070b0e';
const PAPER = '#fbfcfc';
const SIGNAL = '#06b6d4';
const SIGNAL_300 = '#67e8f9';
const GRAPHITE_300 = '#a6b2ba';

export function renderOgImage({
  label,
  title,
  blurb
}: {
  label: string;
  title: string;
  blurb: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: INK,
          color: PAPER,
          padding: '72px 80px',
          borderLeft: `12px solid ${SIGNAL}`
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: SIGNAL_300
            }}
          >
            {label}
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: 960
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.45,
              color: GRAPHITE_300,
              maxWidth: 880
            }}
          >
            {blurb}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #24313a',
            paddingTop: 28,
            fontSize: 24,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: GRAPHITE_300
          }}
        >
          <span>Persistent Software</span>
          <span style={{ color: SIGNAL_300 }}>persistentsoftware.com</span>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
