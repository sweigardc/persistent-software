import { Badge } from '@/components/ui/badge';
import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { Figure } from '@/components/ps/figure';
import { Stat } from '@/components/ps/stat';
import { Palette, Building2, Store, Settings2, Rocket, Users } from 'lucide-react';

const facts = [
  { value: '13', label: 'Content blocks a brand composes its screens from' },
  { value: '6', label: 'Screen kinds, from home pages to API-backed lists' },
  { value: '74', label: 'API operations, each documented with its errors' },
  { value: 'AA', label: 'Colour contrast checked on every brand before it builds' }
];

const brands = [
  {
    name: 'AutoCycle AI',
    flag: 'BRAND=autocycle',
    note: 'Dark theme, purple accent, four tabs built for a product launch.',
    screens: [
      {
        src: '/white-label/autocycle-product.png',
        alt: 'AutoCycle AI home screen: “Close the loop between support and engineering.”',
        caption: 'Product'
      },
      {
        src: '/white-label/autocycle-how-it-works.png',
        alt: 'AutoCycle AI “How it works” screen with three numbered steps.',
        caption: 'How it works'
      }
    ]
  },
  {
    name: 'Persistent Software',
    flag: 'BRAND=persistentsoftware',
    note: 'Light theme, cyan accent, a studio app that takes enquiries.',
    screens: [
      {
        src: '/white-label/persistentsoftware-home.png',
        alt: 'Persistent Software home screen: “Ship real software, faster than ever.”',
        caption: 'Home'
      },
      {
        src: '/white-label/persistentsoftware-contact.png',
        alt: 'Persistent Software contact screen with an enquiry form.',
        caption: 'Contact'
      }
    ]
  }
];

const pillars = [
  {
    icon: Palette,
    title: 'Skinned to your brand, not badged with mine',
    body: 'Colours, typography, iconography, app icon, splash screen and tone all come from a theme file. Nothing in the app tells your users it started as someone else’s product.'
  },
  {
    icon: Building2,
    title: 'Configured for each brand',
    body: 'Each brand gets its own content, locations, contacts and feature set from configuration rather than a code fork. Turning a module off for one brand does not put the others at risk.'
  },
  {
    icon: Store,
    title: 'Published under your accounts',
    body: 'Builds ship from your Apple and Google developer accounts, so the listing, the reviews and the users belong to you. One app per brand or one app with a brand picker — both work.'
  },
  {
    icon: Settings2,
    title: 'One codebase behind all of them',
    body: 'A fix or a new feature lands once and rolls out to every brand. Forking the app per client is what makes white-label programmes collapse in year two, so I do not do it.'
  },
  {
    icon: Rocket,
    title: 'Live in weeks, not quarters',
    body: 'Because the product already exists, launching a brand is a theming, configuration and store-submission exercise. The first one takes the longest; the ones after it take days.'
  },
  {
    icon: Users,
    title: 'You own what ships',
    body: 'You get the source, the build pipeline and the documentation. Hand it to an internal team later if you want to — the point is a working app, not a dependency on me.'
  }
];

const dashboard = [
  {
    src: '/white-label/dashboard-appearance.png',
    alt: 'Appearance editor with colour fields, a live phone preview and a contrast check for every text pair.',
    title: 'Restyle the app without a release',
    body: 'Change colours in the dashboard and watch the phone preview update as you type. Installed apps pick it up on their next launch — no rebuild, no App Store review — and a colour pair that fails contrast is refused, with the numbers.'
  },
  {
    src: '/white-label/dashboard-analytics.png',
    alt: 'Analytics page showing events recorded and app installations seen over 30 days, charted by day.',
    title: 'See what people actually do',
    body: 'Events by day, the most visited screens and installations seen, per brand. Events queue on the phone and send in batches, so a dropped connection never means a lost or double-counted tap — and nothing that identifies a person is stored.'
  }
];

const mechanisms = [
  {
    name: 'website-to-brand',
    alt: 'A website’s colours are read, each text pair is checked against WCAG AA, and white on the cyan accent fails at 3.63 to 1 while near-black passes at 5.30 to 1.',
    title: 'From your website to a brand in one step',
    body: 'Paste a site and its colours come back as a brand. Every text pair is checked for contrast first, so a palette that looks fine on a desktop but is unreadable on a phone never ships.'
  },
  {
    name: 'tenant-isolation',
    alt: 'Two brands’ apps call one API; each request’s key binds one tenant and row-level security returns only that brand’s rows.',
    title: 'One backend, every brand sealed off',
    body: 'Every brand runs on the same backend, and the database itself refuses to return another brand’s rows. With no brand bound, a query returns nothing at all — isolation is enforced below the code, not left to it.'
  }
];

const modules = [
  'Onboarding and accounts',
  'Profiles and preferences',
  'Content feeds and articles',
  'Catalog and product browsing',
  'Search and discovery',
  'Booking and scheduling',
  'Payments and subscriptions',
  'Loyalty and rewards',
  'Push notifications',
  'In-app messaging',
  'Referrals and sharing',
  'Support and help center'
];

/**
 * The product diagrams are animated SVGs served as files so their CSS
 * animation keeps running (see Product.tsx). Visitors who prefer reduced
 * motion get the still frame of the same diagram instead.
 */
function Diagram({ name, alt, caption }: { name: string; alt: string; caption?: string }) {
  return (
    <figure className="m-0">
      {/* Below ~640px the diagram's labels stop being readable shrunk to fit,
          so it scrolls sideways inside its frame instead. */}
      <div className="overflow-x-auto rounded-control border border-rule bg-ink">
        <picture>
          <source
            srcSet={`/white-label/still/${name}.svg`}
            media="(prefers-reduced-motion: reduce)"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/white-label/${name}.svg`}
            alt={alt}
            width={960}
            height={540}
            loading="lazy"
            className="block h-auto w-full min-w-[640px]"
          />
        </picture>
      </div>
      {caption && (
        <figcaption className="mt-2.5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-graphite-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function WhiteLabel() {
  return (
    <Band id="white-label" className="scroll-mt-8 pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="White label" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">One app, skinned for every brand you run</h2>
        <p className="mt-3.5 text-graphite-500">
          If you need a solid mobile app more than you need a bespoke one, start from a
          product that already works and put your brand on it. One React Native app builds
          into a different installable product per brand, and one multi-tenant backend runs
          them all — content, sign-in, push, analytics and webhooks included. You are paying
          for configuration and launch instead of a ground-up build.
        </p>
      </div>

      <div className="mt-10">
        <Diagram
          name="one-codebase-every-brand"
          alt="One shared codebase reads a single brand folder at build time; the same app becomes the Whitelabel, Persistent Software or AutoCycle AI product, each with its own colours, copy and name."
          caption="One folder per brand · everything else shared"
        />
      </div>

      <Lattice className="mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <Stat key={fact.label} value={fact.value} className="flex-col gap-3 p-7">
            {fact.label}
          </Stat>
        ))}
      </Lattice>

      <div className="mt-14 border-t border-rule pt-10">
        <span className="ps-label text-graphite-500">Two brands · the same code</span>
        <h3 className="mt-5 max-w-[40ch]">Opposite looks, and not one line of code between them</h3>
        <p className="mt-3 max-w-[68ch] text-graphite-500">
          Everything that differs — the name, the bundle id, colours, fonts, copy and screens —
          lives in one folder per brand. The rest is shared, so every improvement reaches every
          brand.
        </p>

        <Lattice className="mt-8 md:grid-cols-2">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col gap-6 bg-surface p-7">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h4 className="text-h4">{brand.name}</h4>
                  <code className="font-mono text-xs text-signal-700">{brand.flag}</code>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-graphite-500">{brand.note}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {brand.screens.map((screen) => (
                  <Figure
                    key={screen.src}
                    src={screen.src}
                    alt={screen.alt}
                    ratio="1206/2622"
                    caption={screen.caption}
                    sizes="(min-width: 1120px) 250px, (min-width: 768px) 22vw, 45vw"
                  />
                ))}
              </div>
            </div>
          ))}
        </Lattice>
      </div>

      <Lattice className="mt-14 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <LatticeCell key={pillar.title} icon={pillar.icon} title={pillar.title}>
            {pillar.body}
          </LatticeCell>
        ))}
      </Lattice>

      <div className="mt-14 border-t border-rule pt-10">
        <span className="ps-label text-graphite-500">The dashboard</span>
        <h3 className="mt-5 max-w-[40ch]">Each brand runs its own app without calling you</h3>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-8">
          {dashboard.map((screen) => (
            <div key={screen.src}>
              <Figure
                src={screen.src}
                alt={screen.alt}
                ratio="3/2"
                sizes="(min-width: 1120px) 536px, (min-width: 768px) 48vw, 100vw"
              />
              <h4 className="mt-5 text-h4">{screen.title}</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-graphite-500">{screen.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-rule pt-10">
        <span className="ps-label text-graphite-500">Under the hood</span>
        <div className="mt-8 flex flex-col gap-12">
          {mechanisms.map((mechanism) => (
            <div key={mechanism.name}>
              <h3 className="max-w-[40ch]">{mechanism.title}</h3>
              <p className="mt-3 mb-6 max-w-[68ch] text-graphite-500">{mechanism.body}</p>
              <Diagram name={mechanism.name} alt={mechanism.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-rule pt-10">
        <span className="ps-label text-graphite-500">Modules you can switch on</span>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {modules.map((module) => (
            <Badge key={module}>{module}</Badge>
          ))}
        </div>
        <p className="mt-5 max-w-[68ch] text-graphite-500">
          Anything specific to your operation gets built as a custom module on the same
          foundation, so it upgrades with the rest of the app instead of becoming the reason
          you cannot upgrade.
        </p>
        <p className="mt-10 max-w-[68ch] text-sm text-graphite-400">
          Screenshots are from the running app and dashboard, filled with example data — the
          people and figures shown are not real customers.
        </p>
      </div>
    </Band>
  );
}
