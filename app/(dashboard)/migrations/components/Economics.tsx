import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { Clock, DollarSign, Users, AlarmClock } from 'lucide-react';

const phases = [
  {
    phase: 'Codebase archaeology',
    detail: 'Mapping what the system actually does — not what the docs say it does',
    traditional: '3–5 months',
    assisted: '1–2 weeks'
  },
  {
    phase: 'Behavior spec & test harness',
    detail: 'Characterization tests pinned to the legacy system’s real outputs',
    traditional: '2–3 months',
    assisted: '2 weeks'
  },
  {
    phase: 'Translation & port',
    detail: 'Module-by-module rewrite in the target language and framework',
    traditional: '8–12 months',
    assisted: '4–8 weeks'
  },
  {
    phase: 'Parity chase',
    detail: 'Hunting the edge cases the old system handled and nobody remembers',
    traditional: '3–6 months',
    assisted: 'Continuous'
  },
  {
    phase: 'Cutover & decommission',
    detail: 'Shadow traffic, gradual rollout, retiring the old fleet',
    traditional: '1–2 months',
    assisted: '1–2 weeks'
  }
];

const costDrivers = [
  {
    index: '01',
    icon: Clock,
    title: 'The clock stops sooner',
    body: 'Every month a migration runs is a month you pay for two systems, freeze the roadmap and keep a team on hold. Compressing 18 months into 3 removes most of that carrying cost before a single line of code is priced.'
  },
  {
    index: '02',
    icon: Users,
    title: 'A smaller team, not a bigger one',
    body: 'Rewrites usually get staffed with a dozen engineers to brute-force the reading. A senior engineer directing AI covers the same ground with far less coordination overhead — and no onboarding cliff.'
  },
  {
    index: '03',
    icon: AlarmClock,
    title: 'Legacy licensing and support end',
    body: 'Application servers, commercial JDK support, per-core database licensing, EOL OS extended-support contracts. These line items disappear at cutover and they never come back.'
  },
  {
    index: '04',
    icon: DollarSign,
    title: 'Infrastructure right-sizes itself',
    body: 'Old systems are provisioned for a peak that happens twice a year. Containerised services on autoscaling infrastructure bill for what you use, which is typically a fraction of the standing fleet.'
  }
];

export function Economics() {
  return (
    <Band className="py-16 md:py-20">
      <SectionHeader label="The economics" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">Where the time and money actually go</h2>
        <p className="mt-3.5 text-graphite-500">
          A migration is rarely slow because typing is slow. It is slow because understanding
          a decade-old system is slow. That is the phase AI collapses — and it is the phase
          that dominates the budget.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto border border-rule">
        <div className="min-w-[640px]">
          <div className="ps-label grid grid-cols-12 gap-4 bg-sunk px-6 py-4 text-graphite-500">
            <div className="col-span-6">Phase</div>
            <div className="col-span-3">Traditional rewrite</div>
            <div className="col-span-3 text-signal-700">AI-assisted</div>
          </div>

          {phases.map((row) => (
            <div
              key={row.phase}
              className="grid grid-cols-12 items-baseline gap-4 border-t border-rule px-6 py-5"
            >
              <div className="col-span-6">
                <div className="font-semibold">{row.phase}</div>
                <p className="mt-1 text-sm text-graphite-500">{row.detail}</p>
              </div>
              <div className="col-span-3 font-mono text-sm text-graphite-400 line-through">
                {row.traditional}
              </div>
              <div className="col-span-3 font-mono text-sm text-signal-700">{row.assisted}</div>
            </div>
          ))}

          <div className="grid grid-cols-12 items-baseline gap-4 border-t border-rule bg-sunk px-6 py-5">
            <div className="col-span-6 font-semibold">Typical total</div>
            <div className="col-span-3 font-mono text-sm text-graphite-400 line-through">
              17–28 months
            </div>
            <div className="col-span-3 font-mono text-signal-700">8–14 weeks</div>
          </div>
        </div>
      </div>

      <Lattice className="mt-10 md:grid-cols-2">
        {costDrivers.map((driver) => (
          <LatticeCell key={driver.index} index={driver.index} icon={driver.icon} title={driver.title}>
            {driver.body}
          </LatticeCell>
        ))}
      </Lattice>
    </Band>
  );
}
