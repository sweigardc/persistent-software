import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { Gauge, Activity, Rocket, ShieldCheck, Boxes, LineChart } from 'lucide-react';

const improvements = [
  {
    icon: Gauge,
    title: 'Latency drops because the fat comes out',
    body: 'A decade of accreted layers — an ORM wrapping a DAO wrapping a JDBC template, three serialization hops between services — gets replaced with a direct path. Most of the speedup is deleted work, not a faster language.'
  },
  {
    icon: Boxes,
    title: 'Elastic capacity instead of a standing fleet',
    body: 'Containers on Fargate scale on demand and scale back down. You stop paying peak-provisioned prices for a load that only shows up at month-end close.'
  },
  {
    icon: Rocket,
    title: 'Deploys measured in minutes',
    body: 'A build-and-push pipeline with rolling task replacement retires the WAR-file-and-restart ritual. Shipping a fix stops being an event that requires a calendar invite.'
  },
  {
    icon: Activity,
    title: 'Async I/O for I/O-bound work',
    body: 'Most business systems spend their time waiting on databases and third-party APIs. Modern async runtimes hold thousands of in-flight requests per task instead of pinning a thread to each one.'
  },
  {
    icon: LineChart,
    title: 'Observability that was never bolted on',
    body: 'Structured logs, traces and metrics get designed in during the port rather than reverse-engineered later. You find out about regressions from a dashboard, not from a customer.'
  },
  {
    icon: ShieldCheck,
    title: 'A dependency tree you can actually patch',
    body: 'Leaving an EOL runtime and unmaintained libraries behind turns “we cannot upgrade that” into a routine dependency bump — and takes a standing audit finding off the board.'
  }
];

const metrics = [
  { before: '840ms', after: '210ms', label: 'p95 API latency' },
  { before: '~45s', after: '~4s', label: 'Cold start to serving' },
  { before: '3 hrs', after: '9 min', label: 'Deploy, commit to production' },
  { before: '11%', after: '82%', label: 'Line coverage' }
];

export function Performance() {
  return (
    <Band className="pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="After cutover" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">What an updated stack buys you</h2>
        <p className="mt-3.5 text-graphite-500">
          The savings get you to the finish line. The modern runtime is what you live with
          afterward — and it is usually the part the team feels first.
        </p>
      </div>

      <div className="ps-lattice mt-10 grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-1 bg-surface p-6">
            <span className="font-mono text-sm text-graphite-400 line-through">
              {metric.before}
            </span>
            <span className="font-mono text-[32px] font-bold leading-none tracking-[-0.03em] text-graphite-900">
              {metric.after}
            </span>
            <p className="mt-1 text-sm text-graphite-500">{metric.label}</p>
          </div>
        ))}
      </div>

      <Lattice className="mt-10 md:grid-cols-2 lg:grid-cols-3">
        {improvements.map((item) => (
          <LatticeCell key={item.title} icon={item.icon} title={item.title}>
            {item.body}
          </LatticeCell>
        ))}
      </Lattice>

      <p className="mt-8 max-w-[68ch] text-sm text-graphite-500">
        Figures above are from a Java-to-Python engagement. Your numbers
        will depend on the shape of your workload — I measure the legacy baseline before
        starting so the comparison is honest.
      </p>
    </Band>
  );
}
