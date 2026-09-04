'use client';

import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Users, AlarmClock } from 'lucide-react';

const phases = [
  {
    phase: 'Codebase archaeology',
    detail: 'Mapping what the system actually does — not what the docs say it does',
    traditional: '3–5 months',
    assisted: '1–2 weeks',
  },
  {
    phase: 'Behavior spec & test harness',
    detail: 'Characterization tests pinned to the legacy system’s real outputs',
    traditional: '2–3 months',
    assisted: '2 weeks',
  },
  {
    phase: 'Translation & port',
    detail: 'Module-by-module rewrite in the target language and framework',
    traditional: '8–12 months',
    assisted: '4–8 weeks',
  },
  {
    phase: 'Parity chase',
    detail: 'Hunting the edge cases the old system handled and nobody remembers',
    traditional: '3–6 months',
    assisted: 'Continuous',
  },
  {
    phase: 'Cutover & decommission',
    detail: 'Shadow traffic, gradual rollout, retiring the old fleet',
    traditional: '1–2 months',
    assisted: '1–2 weeks',
  },
];

const costDrivers = [
  {
    icon: Clock,
    title: 'The clock stops sooner',
    description:
      'Every month a migration runs is a month you pay for two systems, freeze the roadmap, and keep a team on hold. Compressing 18 months into 3 removes most of that carrying cost before a single line of code is priced.',
  },
  {
    icon: Users,
    title: 'A smaller team, not a bigger one',
    description:
      'Rewrites usually get staffed with a dozen engineers to brute-force the reading. Two or three senior engineers directing AI cover the same ground with far less coordination overhead — and no onboarding cliff.',
  },
  {
    icon: AlarmClock,
    title: 'Legacy licensing and support end',
    description:
      'Application servers, commercial JDK support, per-core database licensing, EOL OS extended-support contracts. These line items disappear at cutover and they never come back.',
  },
  {
    icon: DollarSign,
    title: 'Infrastructure right-sizes itself',
    description:
      'Old systems are provisioned for a peak that happens twice a year. Containerized services on autoscaling infrastructure bill for what you use, which is typically a fraction of the standing fleet.',
  },
];

export function Economics() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <h2 className="text-4xl">Where the time and money actually go</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A migration is rarely slow because typing is slow. It is slow because
            understanding a decade-old system is slow. That is the phase AI
            collapses — and it is the phase that dominates the budget.
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
            <div className="col-span-6">Phase</div>
            <div className="col-span-3">Traditional rewrite</div>
            <div className="col-span-3 text-cyan-600">AI-assisted</div>
          </div>

          {phases.map((row) => (
            <div
              key={row.phase}
              className="grid grid-cols-12 gap-4 px-6 py-5 border-t border-border items-baseline"
            >
              <div className="col-span-12 sm:col-span-6">
                <div>{row.phase}</div>
                <p className="text-sm text-muted-foreground mt-1">{row.detail}</p>
              </div>
              <div className="col-span-6 sm:col-span-3 text-muted-foreground line-through decoration-muted-foreground/40">
                {row.traditional}
              </div>
              <div className="col-span-6 sm:col-span-3 text-cyan-600">{row.assisted}</div>
            </div>
          ))}

          <div className="grid grid-cols-12 gap-4 px-6 py-5 border-t border-border bg-muted/30 items-baseline">
            <div className="col-span-12 sm:col-span-6">Typical total</div>
            <div className="col-span-6 sm:col-span-3 text-muted-foreground">17–28 months</div>
            <div className="col-span-6 sm:col-span-3 text-cyan-600 text-lg">8–14 weeks</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {costDrivers.map((driver, index) => (
            <motion.div
              key={driver.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-cyan-500/50 transition-colors">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <driver.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div className="space-y-2">
                    <h3>{driver.title}</h3>
                    <p className="text-muted-foreground">{driver.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
