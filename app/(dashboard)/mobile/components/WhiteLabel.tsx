'use client';

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Building2, Store, Settings2, Rocket, Users } from 'lucide-react';

const pillars = [
  {
    icon: Palette,
    title: 'Skinned to your brand, not badged with ours',
    description:
      'Colors, typography, iconography, app icon, splash screen, and tone all come from a theme file. Nothing in the app tells your users it started as someone else’s product.',
  },
  {
    icon: Building2,
    title: 'Configured for each brand',
    description:
      'Each brand gets its own content, locations, contacts, and feature set from configuration rather than a code fork. Turning a module off for one brand does not put the others at risk.',
  },
  {
    icon: Store,
    title: 'Published under your accounts',
    description:
      'Builds ship from your Apple and Google developer accounts, so the listing, the reviews, and the users belong to you. One app per brand or one app with a brand picker — both are supported.',
  },
  {
    icon: Settings2,
    title: 'One codebase behind all of them',
    description:
      'A fix or a new feature lands once and rolls out to every brand. Forking the app per client is what makes white-label programs collapse in year two, so we do not do it.',
  },
  {
    icon: Rocket,
    title: 'Live in weeks, not quarters',
    description:
      'Because the product already exists, launching a brand is a theming, configuration, and store-submission exercise. The first one takes the longest; the ones after it are measured in days.',
  },
  {
    icon: Users,
    title: 'You own what ships',
    description:
      'You get the source, the build pipeline, and the documentation. Hand it to an internal team later if you want to — the point is a working app, not a dependency on us.',
  },
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
  'Support and help center',
];

export function WhiteLabel() {
  return (
    <section id="white-label" className="py-20 px-6 bg-muted/30 scroll-mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <Badge variant="secondary" className="px-3 py-1">White label</Badge>
          <h2 className="text-4xl">One app, skinned for every brand you run</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you need a solid mobile app more than you need a bespoke one, start
            from a product that already works and put your brand on it. You are
            paying for configuration and launch instead of a ground-up build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h3 className="text-2xl">Modules you can switch on</h3>
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {modules.map((module) => (
              <Badge key={module} variant="secondary" className="px-3 py-1.5">
                {module}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Anything specific to your operation gets built as a custom module on the
            same foundation, so it upgrades with the rest of the app instead of
            becoming the reason you cannot upgrade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
