import { Badge } from '@/components/ui/badge';
import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Code2, FileText, Globe2 } from 'lucide-react';

const technical = [
  'Server-rendered pages so crawlers read content without running JavaScript',
  'robots.txt and firewall rules that let the AI crawlers you want through',
  'Schema.org markup for your organization, products, people, FAQs and reviews',
  'An llms.txt and clean, crawlable sitemaps pointing at what matters',
  'Core Web Vitals, canonicals and internal linking kept healthy for Google',
  'Facts in HTML text — not trapped in images, PDFs or tabs that never load'
];

const content = [
  'Pages that answer the exact questions buyers ask assistants, up front',
  'Passages that stand on their own when lifted out of the page',
  'Comparison and “best for” pages that make your positioning quotable',
  'Original data, pricing and specifics a model can cite instead of guess',
  'Named, credentialed authors and dates that signal the page is current',
  'Your existing top-ranking content restructured rather than rewritten'
];

const offsite = [
  'One consistent description of what you do, everywhere it appears',
  'Knowledge panels, Wikidata and business profiles corrected and filled in',
  'Presence on the review sites, directories and lists that models cite',
  'Earned mentions in the publications and communities your market reads',
  'Reddit, YouTube and forum answers where the real conversations happen',
  'Outdated facts about you tracked down and fixed at the source'
];

const platforms = [
  'Google Search',
  'Google AI Overviews',
  'Google AI Mode',
  'Gemini',
  'ChatGPT',
  'ChatGPT Search',
  'Claude',
  'Perplexity',
  'Microsoft Copilot',
  'Bing'
];

function Column({
  icon: Icon,
  title,
  intro,
  items
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  intro: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-5 bg-surface p-8">
      <Icon className="size-6 text-signal-700" strokeWidth={1.75} />
      <div>
        <h3 className="text-h3">{title}</h3>
        <p className="mt-2 text-graphite-500">{intro}</p>
      </div>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 border-b border-rule py-3 text-[15px] leading-snug text-graphite-600 last:border-0"
          >
            <span className="font-mono text-xs leading-6 text-signal-700">&rarr;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Signals() {
  return (
    <Band className="pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="What gets you cited" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">Three layers an AI checks before it names you</h2>
        <p className="mt-3.5 text-graphite-500">
          A model recommends a brand when it can read the site, extract a clear answer from it,
          and find the rest of the web agreeing. Miss any one layer and the other two stop
          counting. I am an engineer first, so the technical layer is never the part that gets
          skipped.
        </p>
      </div>

      <div className="ps-lattice mt-10 lg:grid-cols-3">
        <Column
          icon={Code2}
          title="Can it read you?"
          intro="Technical SEO, extended to the crawlers behind AI answers."
          items={technical}
        />
        <Column
          icon={FileText}
          title="Can it quote you?"
          intro="Content shaped so a model can lift a passage and trust it."
          items={content}
        />
        <Column
          icon={Globe2}
          title="Does the web agree?"
          intro="The off-site signals that decide whether a model believes you."
          items={offsite}
        />
      </div>

      <div className="mt-14 border-t border-rule pt-10">
        <span className="ps-label text-graphite-500">Where I track your visibility</span>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {platforms.map((platform) => (
            <Badge key={platform}>{platform}</Badge>
          ))}
        </div>
      </div>
    </Band>
  );
}
