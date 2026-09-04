'use client';

import { motion } from 'motion/react';
import { Smartphone, TestTube2, Layers, Bell, RefreshCw, LineChart } from 'lucide-react';

const phases = [
  {
    week: 'Week 1',
    title: 'Pin down what the app actually is',
    body: 'We go through your prototype or your requirements screen by screen and write down the behavior — including the parts that only exist in someone’s head. That document is what we build against, and it is yours whether or not we continue.',
  },
  {
    week: 'Weeks 2–3',
    title: 'Foundation before features',
    body: 'Navigation, data layer, auth, theming, and the build pipeline land first. Both stores get a signed internal build in the first two weeks, so distribution is never the thing that surprises you at the end.',
  },
  {
    week: 'Weeks 3–7',
    title: 'Build the screens for real',
    body: 'Features ship in vertical slices — a real screen against real data on a real device, not a mock. You get a new TestFlight and Play internal build every week and can use the app while it is being built.',
  },
  {
    week: 'Weeks 6–8',
    title: 'Make it survive the real world',
    body: 'Slow networks, small screens, large fonts, permission denials, expired sessions, and low-end Android hardware. This is where most of the difference between a prototype and a product gets earned.',
  },
  {
    week: 'Weeks 8–10',
    title: 'Submit, review, launch',
    body: 'Store listings, screenshots, privacy disclosures, and account-deletion requirements handled for you. We drive the review process and turn around the reviewer’s notes rather than handing you a checklist.',
  },
];

const principles = [
  {
    icon: Smartphone,
    title: 'Test on the phones your users own',
    description:
      'A simulator on a fast laptop hides everything. We test on real devices, including the three-year-old mid-range Android that a large share of your users are actually holding.',
  },
  {
    icon: Layers,
    title: 'Native where it matters',
    description:
      'React Native covers the vast majority of an app. Camera, biometrics, background location, and hardware integrations get native modules when the ecosystem does not already have a good one.',
  },
  {
    icon: TestTube2,
    title: 'Tests on the paths that cost money',
    description:
      'Checkout, login, and sync get end-to-end coverage on both platforms. We do not chase a coverage percentage on screens whose worst failure is a misaligned label.',
  },
  {
    icon: RefreshCw,
    title: 'Ship without waiting on review',
    description:
      'Over-the-air updates push JavaScript fixes to users in minutes, with store submissions reserved for native changes. A typo does not cost you a three-day review cycle.',
  },
  {
    icon: Bell,
    title: 'Notifications with a reason to exist',
    description:
      'Push is the strongest retention tool a mobile app has and the fastest way to get uninstalled. Segmentation, quiet hours, and per-category preferences are designed in from the start.',
  },
  {
    icon: LineChart,
    title: 'Know what happens after launch',
    description:
      'Crash reporting, release health, and product analytics are wired up before the first submission, so week one is spent reading real numbers instead of guessing.',
  },
];

export function Approach() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <h2 className="text-4xl">How a build actually runs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            You have a signed build on your own phone in the first two weeks, and a
            new one every week after that. Nothing about the timeline depends on
            you trusting a status update.
          </p>
        </motion.div>

        <div className="space-y-4 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="grid grid-cols-12 gap-4 p-6 bg-card rounded-xl border border-border"
            >
              <div className="col-span-12 sm:col-span-3 text-cyan-600">{phase.week}</div>
              <div className="col-span-12 sm:col-span-9 space-y-2">
                <h3>{phase.title}</h3>
                <p className="text-muted-foreground">{phase.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 bg-card rounded-xl border border-border space-y-3"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <principle.icon className="w-6 h-6 text-cyan-500" />
              </div>
              <h3>{principle.title}</h3>
              <p className="text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-10 max-w-3xl mx-auto">
          Timelines above describe a typical single-product build. A white-label
          launch on an existing foundation is considerably shorter; an app with
          heavy hardware or offline requirements runs longer. We scope yours before
          quoting it.
        </p>
      </div>
    </section>
  );
}
