'use client';

import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Trash2, Lock, WifiOff, Store, Gauge } from 'lucide-react';

const gaps = [
  {
    area: 'Navigation',
    prototype: 'Screens wired together ad hoc; the back button loses your place',
    rebuilt: 'A typed navigation graph with deep links and restored state',
  },
  {
    area: 'Data layer',
    prototype: 'Every component fetches for itself — no cache, spinners everywhere',
    rebuilt: 'One client with caching, retries, and optimistic updates',
  },
  {
    area: 'Auth and secrets',
    prototype: 'Keys shipped inside the bundle, tokens in plain storage',
    rebuilt: 'Real session handling, tokens in the device keychain, silent refresh',
  },
  {
    area: 'Bad networks',
    prototype: 'Assumes the request always succeeds',
    rebuilt: 'Queued writes, cached reads, and honest offline states',
  },
  {
    area: 'Store readiness',
    prototype: 'Cannot be submitted — no signing, permissions, or privacy strings',
    rebuilt: 'Signed builds, entitlements, privacy manifests, review-ready',
  },
  {
    area: 'When it breaks',
    prototype: 'You find out from a one-star review',
    rebuilt: 'Crash reporting and release health, per build, per version',
  },
];

const keep = [
  {
    icon: Sparkles,
    title: 'What we keep',
    description:
      'Everything you learned. The screens, the flows, the copy, the ordering of steps, the features users actually touched. A prototype that has been in front of real people is the most detailed product spec you will ever get, and it is yours already.',
  },
  {
    icon: Trash2,
    title: 'What we do not keep',
    description:
      'The code. Generated app code is optimized for producing a convincing demo on the first try, not for being changed fifty times by a team. Rewriting it against a known-good spec is faster and cheaper than untangling it.',
  },
];

const consequences = [
  {
    icon: Gauge,
    title: 'It has to stay smooth at 60fps',
    description:
      'Long lists get virtualized, images get sized and cached, and animations run on the native thread. Phones are not laptops — jank that is invisible in a browser preview is the first thing a user feels.',
  },
  {
    icon: Lock,
    title: 'The bundle is public',
    description:
      'Anyone can unzip a shipped app. Keys move to the server, privileged calls move behind your API, and the client stops being trusted with anything it should not know.',
  },
  {
    icon: WifiOff,
    title: 'The network is not a given',
    description:
      'Elevators, basements, planes, and rural coverage are normal operating conditions. Reads come from cache, writes queue and reconcile, and the UI says what is happening instead of hanging.',
  },
  {
    icon: Store,
    title: 'Two reviewers stand between you and users',
    description:
      'Apple and Google reject for permission strings, account deletion, data disclosures, and login requirements. We handle submission and the first round of review notes as part of the build.',
  },
];

export function Rebuild() {
  return (
    <section id="rebuild" className="py-20 px-6 bg-background scroll-mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <h2 className="text-4xl">From vibe-coded prototype to a real React Native app</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The gap between an app that demos well and an app that holds up in the
            stores is not visual polish. It is everything underneath the screens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl border border-border"
        >
          <div className="grid grid-cols-12 gap-4 bg-muted/60 px-6 py-4 text-sm text-muted-foreground">
            <div className="col-span-3">Area</div>
            <div className="col-span-5">In the prototype</div>
            <div className="col-span-4 text-cyan-600">After the rebuild</div>
          </div>

          {gaps.map((row) => (
            <div
              key={row.area}
              className="grid grid-cols-12 gap-4 px-6 py-5 border-t border-border items-baseline"
            >
              <div className="col-span-12 sm:col-span-3">{row.area}</div>
              <div className="col-span-12 sm:col-span-5 text-muted-foreground">
                {row.prototype}
              </div>
              <div className="col-span-12 sm:col-span-4 text-cyan-600">{row.rebuilt}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {keep.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-cyan-500/50 transition-colors">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div className="space-y-2">
                    <h3>{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {consequences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
