import { Badge } from '@/components/ui/badge';
import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { Palette, Building2, Store, Settings2, Rocket, Users } from 'lucide-react';

const pillars = [
  {
    index: '01',
    icon: Palette,
    title: 'Skinned to your brand, not badged with mine',
    body: 'Colours, typography, iconography, app icon, splash screen and tone all come from a theme file. Nothing in the app tells your users it started as someone else’s product.'
  },
  {
    index: '02',
    icon: Building2,
    title: 'Configured for each brand',
    body: 'Each brand gets its own content, locations, contacts and feature set from configuration rather than a code fork. Turning a module off for one brand does not put the others at risk.'
  },
  {
    index: '03',
    icon: Store,
    title: 'Published under your accounts',
    body: 'Builds ship from your Apple and Google developer accounts, so the listing, the reviews and the users belong to you. One app per brand or one app with a brand picker — both work.'
  },
  {
    index: '04',
    icon: Settings2,
    title: 'One codebase behind all of them',
    body: 'A fix or a new feature lands once and rolls out to every brand. Forking the app per client is what makes white-label programmes collapse in year two, so I do not do it.'
  },
  {
    index: '05',
    icon: Rocket,
    title: 'Live in weeks, not quarters',
    body: 'Because the product already exists, launching a brand is a theming, configuration and store-submission exercise. The first one takes the longest; the ones after it take days.'
  },
  {
    index: '06',
    icon: Users,
    title: 'You own what ships',
    body: 'You get the source, the build pipeline and the documentation. Hand it to an internal team later if you want to — the point is a working app, not a dependency on me.'
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

export function WhiteLabel() {
  return (
    <Band id="white-label" className="scroll-mt-8 pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="White label" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">One app, skinned for every brand you run</h2>
        <p className="mt-3.5 text-graphite-500">
          If you need a solid mobile app more than you need a bespoke one, start from a
          product that already works and put your brand on it. You are paying for
          configuration and launch instead of a ground-up build.
        </p>
      </div>

      <Lattice className="mt-10 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <LatticeCell key={pillar.index} index={pillar.index} icon={pillar.icon} title={pillar.title}>
            {pillar.body}
          </LatticeCell>
        ))}
      </Lattice>

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
      </div>
    </Band>
  );
}
