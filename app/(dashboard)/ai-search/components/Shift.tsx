import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { Search, MessageSquareQuote, EyeOff } from 'lucide-react';

const differences = [
  {
    area: 'What the user gets',
    seo: 'Ten blue links, and they pick one',
    ai: 'One written answer that names a few brands'
  },
  {
    area: 'What you win',
    seo: 'A position on the results page',
    ai: 'A mention, a citation, or a recommendation'
  },
  {
    area: 'What gets read',
    seo: 'Pages, ranked by relevance and links',
    ai: 'Passages, extracted and stitched into a reply'
  },
  {
    area: 'Where authority comes from',
    seo: 'Backlinks and domain strength',
    ai: 'Consistent facts about you across the whole web'
  },
  {
    area: 'Who is reading',
    seo: 'Googlebot',
    ai: 'GPTBot, ClaudeBot, PerplexityBot, Google-Extended and friends'
  },
  {
    area: 'How you measure it',
    seo: 'Rank tracking and Search Console',
    ai: 'Prompt tracking: share of answers, citations, sentiment'
  }
];

const symptoms = [
  {
    icon: Search,
    title: 'Page one on Google, absent from the answer',
    body: 'You own the keyword, but when someone asks an assistant the same question it recommends three competitors. Rankings and AI visibility are correlated, not the same thing.'
  },
  {
    icon: MessageSquareQuote,
    title: 'AI describes you wrong',
    body: 'Old pricing, a product you retired, a category you left. Models repeat whatever the web says about you most consistently — and if that is out of date, so is the answer.'
  },
  {
    icon: EyeOff,
    title: 'The crawlers cannot see your site',
    body: 'Content rendered only in the browser, AI bots blocked by a default firewall rule, key facts locked in images and PDFs. Google works around a lot of that. Most AI crawlers do not.'
  }
];

export function Shift() {
  return (
    <Band id="the-gap" className="scroll-mt-8 py-16 md:py-20">
      <SectionHeader label="The gap" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">Ranking and being recommended are different jobs</h2>
        <p className="mt-3.5 text-graphite-500">
          Traditional SEO still matters — AI engines lean heavily on what already ranks. But a
          good SEO programme was built to win a results page, and a growing share of buyers
          never see one. Answer engine optimization (AEO) and generative engine optimization
          (GEO) are the work of getting chosen when the machine writes the answer.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto border border-rule">
        <div className="min-w-[640px]">
          <div className="ps-label grid grid-cols-12 gap-4 bg-sunk px-6 py-4 text-graphite-500">
            <div className="col-span-3">Area</div>
            <div className="col-span-4">Traditional search</div>
            <div className="col-span-5 text-signal-700">AI search</div>
          </div>
          {differences.map((row) => (
            <div
              key={row.area}
              className="grid grid-cols-12 items-baseline gap-4 border-t border-rule px-6 py-5"
            >
              <div className="col-span-3 font-semibold">{row.area}</div>
              <div className="col-span-4 text-graphite-500">{row.seo}</div>
              <div className="col-span-5 text-signal-700">{row.ai}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-rule pt-10">
        <span className="ps-label text-graphite-500">Sound familiar?</span>
        <h3 className="mt-5 max-w-[40ch]">Built for brands that already did SEO right</h3>
        <p className="mt-3 max-w-[68ch] text-graphite-500">
          If you have no SEO foundation, start there. This service is for companies with
          traffic, content and rankings who have noticed the leads are asking about a
          competitor they heard about from an AI.
        </p>
      </div>

      <Lattice className="mt-8 md:grid-cols-3">
        {symptoms.map((item) => (
          <LatticeCell key={item.title} icon={item.icon} title={item.title}>
            {item.body}
          </LatticeCell>
        ))}
      </Lattice>
    </Band>
  );
}
