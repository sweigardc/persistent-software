import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { Activity, BellRing, KeyRound, Download } from 'lucide-react';

const TOKENLOG_URL = 'https://tokenlog.persistentsoftware.com';

// The three source APIs tokenlog reads. Named the way each provider names the
// credential you paste in, because that is the question people actually have.
const integrations = [
  {
    name: 'Anthropic',
    detail: 'Organization admin key. Usage and cost endpoints only.'
  },
  {
    name: 'OpenAI',
    detail: 'Organization admin key. Usage and cost endpoints only.'
  },
  {
    name: 'GitHub',
    detail: 'OAuth sign-in, plus Copilot seat and premium-request usage.'
  }
];

const features = [
  {
    icon: Activity,
    title: 'Every provider on one page',
    body: 'Tokens in, out and cached, by model and by key, with each provider’s own spend numbers added up instead of read off three billing pages.'
  },
  {
    icon: BellRing,
    title: 'Budgets that warn you early',
    body: 'Set a monthly ceiling and thresholds. Each one fires once, recorded in the app and POSTed to a webhook if you want it somewhere else.'
  },
  {
    icon: KeyRound,
    title: 'Keys encrypted, never shown',
    body: 'Keys are verified once, encrypted with AES-256-GCM before they reach the database, and displayed by their last four characters afterwards.'
  },
  {
    icon: Download,
    title: 'Ninety days of history, exportable',
    body: 'The first sync back-fills 90 days so day one has something to compare against. Refreshes daily, and every view leaves as CSV.'
  }
];

/**
 * The one product band: what I ship for myself, offered free. The diagram is
 * tokenlog's own animated SVG, served as a file so the CSS animation inside it
 * keeps running — next/image would need dangerouslyAllowSVG and would pass the
 * file straight through anyway.
 */
export function Product() {
  return (
    <Band id="tokenlog" className="pt-0 md:pt-0">
      <SectionHeader label="Current product" />

      <div className="mt-10 grid items-end gap-8 border-b border-rule pb-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-h2">tokenlog</h2>
            <span className="ps-label border border-signal-500 px-2.5 py-1.5 text-signal-700">
              Currently free
            </span>
          </div>
          <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.08em] text-graphite-500">
            by Persistent Software
          </p>
          <p className="mt-3.5 max-w-[58ch] text-lead text-graphite-500">
            Your LLM token usage in one convenient view. tokenlog by Persistent Software reads your Anthropic and
            OpenAI organizations and your GitHub Copilot seats, adds up what they cost, and
            tells you where the month is heading before the invoice does. It is free to use
            right now.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Button asChild size="lg">
            <a href={TOKENLOG_URL} target="_blank" rel="noopener noreferrer">
              Open tokenlog
            </a>
          </Button>
        </div>
      </div>

      <figure className="m-0 mt-10">
        {/* Below ~760px the diagram's labels stop being readable shrunk to fit,
            so it scrolls sideways inside its frame instead. */}
        <div className="overflow-x-auto rounded-control border border-rule bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/tokenlog-flow.svg"
            alt="Anthropic, OpenAI and GitHub Copilot connecting into tokenlog, which draws a month of token usage as a daily bar chart alongside spend and request totals."
            width={1120}
            height={440}
            className="block w-full min-w-[760px]"
          />
        </div>
        <figcaption className="mt-2.5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-graphite-500">
          Three sources, one month, one page
        </figcaption>
      </figure>

      <Lattice className="mt-10 sm:grid-cols-3">
        {integrations.map((integration) => (
          <div key={integration.name} className="flex flex-col gap-2.5 bg-surface p-7">
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="size-2.5 bg-signal-500" />
              <span className="ps-label text-graphite-900">{integration.name}</span>
            </div>
            <p className="text-[15px] leading-relaxed text-graphite-500">{integration.detail}</p>
          </div>
        ))}
      </Lattice>

      <Lattice className="mt-6 md:grid-cols-2">
        {features.map((feature) => (
          <LatticeCell key={feature.title} icon={feature.icon} title={feature.title}>
            {feature.body}
          </LatticeCell>
        ))}
      </Lattice>
    </Band>
  );
}
