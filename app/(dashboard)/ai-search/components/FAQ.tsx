import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';

const faqs = [
  {
    question: 'What is the difference between SEO, AEO and GEO?',
    answer:
      'SEO (search engine optimization) earns rankings on results pages like Google. AEO (answer engine optimization) earns a place in direct answers — featured snippets, AI Overviews and voice assistants. GEO (generative engine optimization) earns mentions and citations in answers written by large language models such as ChatGPT, Gemini, Claude and Perplexity. The three overlap heavily, and they work best as one strategy.'
  },
  {
    question: 'We already rank well on Google. Why are we not showing up in ChatGPT?',
    answer:
      'AI answers draw on more than rankings. Models favour sources they can crawl without running JavaScript, passages that answer a question cleanly on their own, and brands described consistently across review sites, directories, forums and publications. A site can rank on Google and still fail every one of those tests.'
  },
  {
    question: 'Will AI optimization hurt our existing Google rankings?',
    answer:
      'It should not, and every change is checked against current rankings before it ships. Most of the work — faster, server-rendered pages, better structured data, clearer answers — also helps traditional SEO. Nothing that already ranks gets rewritten without a reason.'
  },
  {
    question: 'How do you measure visibility in AI answers?',
    answer:
      'With a fixed set of prompts your buyers actually ask, run repeatedly across ChatGPT, Gemini, Claude, Perplexity, Copilot and Google AI Overviews. Each month reports how often you are mentioned, whether you are cited with a link, which competitors appear instead, and how you are described.'
  },
  {
    question: 'How long until we see results?',
    answer:
      'Technical fixes can change what AI search tools retrieve within weeks. Content and off-site authority typically take two to four months to show up consistently, and changes to what a model knows without searching arrive only as new model versions are trained.'
  },
  {
    question: 'Can you guarantee our brand will be recommended?',
    answer:
      'No, and be wary of anyone who does. AI answers vary between runs and change with every model update. What is guaranteed is a measured baseline, the work that moves it, and monthly reporting on the same prompts so you can see exactly what changed.'
  }
];

/**
 * FAQPage structured data mirrors the visible questions word for word — the
 * page practises the markup it sells.
 */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer }
  }))
};

export function FAQ() {
  return (
    <Band id="faq" className="scroll-mt-8 pt-0 pb-16 md:pt-0 md:pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SectionHeader label="Questions" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">What buyers ask before they start</h2>
      </div>

      <dl className="mt-10 border-t border-rule">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-8"
          >
            <dt className="text-h4 md:col-span-5">{faq.question}</dt>
            <dd className="m-0 max-w-[68ch] text-graphite-500 md:col-span-7">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </Band>
  );
}
