import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { ShieldCheck, LineChart, Target, Ban, RefreshCw, KeyRound } from 'lucide-react';

const phases = [
  {
    week: 'Weeks 1–2',
    title: 'Measure where you stand',
    body: 'I build a set of the prompts your buyers actually use — category questions, comparisons, “best tool for” — and run them across every major AI platform. You get your share of answers, who is named instead of you, and which sources the models cite.'
  },
  {
    week: 'Weeks 2–4',
    title: 'Fix what blocks the crawlers',
    body: 'A technical audit of your site as an AI crawler sees it: rendering, bot access, structured data, sitemaps and page speed. Fixes ship directly when I have access, or as tickets your team can merge.'
  },
  {
    week: 'Weeks 4–8',
    title: 'Make your best pages quotable',
    body: 'Your highest-value pages are restructured around the questions from the baseline, with the clear answers, specifics and schema that get passages cited. New pages fill the gaps where competitors are being recommended.'
  },
  {
    week: 'Weeks 6–12',
    title: 'Get the rest of the web to agree',
    body: 'Correcting your profiles and entity data, cleaning up stale facts, and earning mentions on the sources the baseline showed models trust in your market.'
  },
  {
    week: 'Monthly',
    title: 'Re-run the prompts and report',
    body: 'The same prompt set runs every month, alongside your Google rankings, so progress is a before-and-after on the questions that matter — not a vanity score.'
  }
];

const principles = [
  {
    icon: ShieldCheck,
    title: 'Never at the expense of Google',
    body: 'Organic search still drives most of your traffic today. Every change is checked against your existing rankings before it ships, and nothing is rewritten that is already working.'
  },
  {
    icon: Target,
    title: 'Prompts your buyers use, not ones that flatter',
    body: 'Anyone can rank for a question containing their own brand name. The prompt set is built from sales calls, support tickets and search data, and it includes the questions you currently lose.'
  },
  {
    icon: LineChart,
    title: 'Measured, with the caveats stated',
    body: 'AI answers vary run to run and change without notice. I sample each prompt repeatedly and report ranges, so you can tell a real trend from a lucky afternoon.'
  },
  {
    icon: Ban,
    title: 'No tricks that get you dropped',
    body: 'No hidden text for bots, no fake reviews, no link schemes, no spam pages. The shortcuts that game AI answers today are the ones that get a domain distrusted next quarter.'
  },
  {
    icon: RefreshCw,
    title: 'Models change, so the work continues',
    body: 'New model versions and search features shift what gets cited. Monthly tracking catches a drop early, and the playbook gets updated as the platforms do.'
  },
  {
    icon: KeyRound,
    title: 'You own everything',
    body: 'The prompt set, the tracking data, the content and the technical changes are yours. Take it in-house whenever you are ready.'
  }
];

export function Approach() {
  return (
    <Band className="pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="How an engagement runs" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">A baseline first, so every result is provable</h2>
        <p className="mt-3.5 text-graphite-500">
          Nobody can promise a model will recommend you. What I can do is measure where you
          stand, fix what is in the way, and show you the change on the same questions every
          month.
        </p>
      </div>

      <ul className="mt-10 border-t border-rule">
        {phases.map((phase) => (
          <li
            key={phase.title}
            className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <span className="ps-label text-signal-700">{phase.week}</span>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-h4">{phase.title}</h3>
              <p className="mt-1.5 max-w-[68ch] text-graphite-500">{phase.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <Lattice className="mt-12 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle) => (
          <LatticeCell key={principle.title} icon={principle.icon} title={principle.title}>
            {principle.body}
          </LatticeCell>
        ))}
      </Lattice>
    </Band>
  );
}
