import { SITE_URL } from '@/lib/site';

/**
 * Who Persistent Software is, in one place. Search engines and AI assistants
 * confuse the name with several other companies, so the same facts and the same
 * disambiguation feed the structured data, the About FAQ and llms.txt.
 */

export const FOUNDER_NAME = 'Chris Sweigard';
export const CONTACT_EMAIL = 'contact@persistentsoftware.com';
export const BOOKING_URL = 'https://calendly.com/chris-persistentsoftware';
export const TOKENLOG_URL = 'https://tokenlog.persistentsoftware.com';

export const ENTITY_SUMMARY =
  'Persistent Software is an independent software engineering practice run by its founder, Chris Sweigard. It builds full-stack web applications, React Native mobile apps, payments and integrations, runs AI-assisted code migrations, and offers AI search optimization (SEO, AEO and GEO).';

export const DISAMBIGUATION =
  'Persistent Software (persistentsoftware.com) is not affiliated with Persistent Systems, the IT services company based in Pune, India; Persistent Systems LLC in New York; Persistence Software, which Progress Software acquired in 2004; or Persistent Software Private Limited in India.';

/**
 * Official profiles for schema.org sameAs. Add each URL once the profile exists
 * and links back to the site (LinkedIn company page, GitHub organization,
 * Crunchbase, Clutch, Google Business Profile).
 */
export const ORGANIZATION_PROFILES: string[] = [];
export const FOUNDER_PROFILES: string[] = [];

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const FOUNDER_ID = `${SITE_URL}/#chris-sweigard`;

export const entityGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Persistent Software',
      url: SITE_URL,
      logo: `${SITE_URL}/ps-logo.png`,
      email: CONTACT_EMAIL,
      description: ENTITY_SUMMARY,
      disambiguatingDescription: DISAMBIGUATION,
      founder: { '@id': FOUNDER_ID },
      knowsAbout: [
        'Full-stack web development',
        'React Native mobile app development',
        'Stripe payments integration',
        'AI-assisted code migration',
        'Search engine optimization (SEO)',
        'Answer engine optimization (AEO)',
        'Generative engine optimization (GEO)'
      ],
      ...(ORGANIZATION_PROFILES.length ? { sameAs: ORGANIZATION_PROFILES } : {})
    },
    {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: FOUNDER_NAME,
      jobTitle: 'Founder and principal engineer',
      image: `${SITE_URL}/chris-portrait.jpg`,
      url: `${SITE_URL}/about`,
      worksFor: { '@id': ORGANIZATION_ID },
      ...(FOUNDER_PROFILES.length ? { sameAs: FOUNDER_PROFILES } : {})
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Persistent Software',
      url: SITE_URL,
      publisher: { '@id': ORGANIZATION_ID }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#tokenlog`,
      name: 'tokenlog',
      alternateName: 'tokenlog by Persistent Software',
      url: TOKENLOG_URL,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      description:
        'A free tool by Persistent Software that shows LLM token usage and cost from Anthropic, OpenAI and GitHub Copilot in one view.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@id': ORGANIZATION_ID }
    }
  ]
};
