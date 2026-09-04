'use client';

import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Gauge, Activity, Rocket, ShieldCheck, Boxes, LineChart } from 'lucide-react';

const improvements = [
  {
    icon: Gauge,
    title: 'Latency drops because the fat comes out',
    description:
      'A decade of accreted layers — an ORM wrapping a DAO wrapping a JDBC template, three serialization hops between services — gets replaced with a direct path. Most of the speedup is deleted work, not a faster language.',
  },
  {
    icon: Boxes,
    title: 'Elastic capacity instead of a standing fleet',
    description:
      'Containers on Fargate scale on demand and scale back down. You stop paying peak-provisioned prices for a load that only shows up at month-end close.',
  },
  {
    icon: Rocket,
    title: 'Deploys measured in minutes',
    description:
      'A build-and-push pipeline with rolling task replacement retires the WAR-file-and-restart ritual. Shipping a fix stops being an event that requires a calendar invite.',
  },
  {
    icon: Activity,
    title: 'Async I/O for I/O-bound work',
    description:
      'Most business systems spend their time waiting on databases and third-party APIs. Modern async runtimes hold thousands of in-flight requests per task instead of pinning a thread to each one.',
  },
  {
    icon: LineChart,
    title: 'Observability that was never bolted on',
    description:
      'Structured logs, traces, and metrics get designed in during the port rather than reverse-engineered later. You find out about regressions from a dashboard, not from a customer.',
  },
  {
    icon: ShieldCheck,
    title: 'A dependency tree you can actually patch',
    description:
      'Leaving an EOL runtime and unmaintained libraries behind turns "we cannot upgrade that" into a routine dependency bump — and takes a standing audit finding off the board.',
  },
];

const metrics = [
  { before: '840ms', after: '210ms', label: 'p95 API latency' },
  { before: '~45s', after: '~4s', label: 'Cold start to serving' },
  { before: '3 hrs', after: '9 min', label: 'Deploy, commit to production' },
  { before: '11%', after: '82%', label: 'Line coverage' },
];

export function Performance() {
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
          <h2 className="text-4xl">What an updated stack buys you</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The savings get you to the finish line. The modern runtime is what you
            live with afterward — and it is usually the part the team feels first.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="text-sm text-muted-foreground line-through decoration-muted-foreground/40">
                {metric.before}
              </div>
              <div className="text-3xl text-cyan-600 my-1">{metric.after}</div>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {improvements.map((item, index) => (
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

        <p className="text-sm text-muted-foreground text-center mt-10 max-w-3xl mx-auto">
          Figures above are from the Java-to-Python engagement described below.
          Your numbers will depend on the shape of your workload — we measure the
          legacy baseline before we start so the comparison is honest.
        </p>
      </div>
    </section>
  );
}
