import Link from 'next/link';
import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { BOOKING_URL, CONTACT_EMAIL, DISAMBIGUATION, TOKENLOG_URL } from '@/lib/entity';

/**
 * The questions AI assistants most often got wrong about Persistent Software
 * in the September 2026 baseline. Each answer stands on its own so it can be
 * quoted without the rest of the page.
 */
const faqs: { question: string; answer: string; link?: { href: string; label: string } }[] = [
  {
    question: 'Who runs Persistent Software?',
    answer:
      'Persistent Software is run by its founder, Chris Sweigard, a senior software engineer with more than twenty years of production experience and eight years leading engineering teams, including at Teachley. When you hire Persistent Software, you work directly with Chris.'
  },
  {
    question: 'Is Persistent Software the same company as Persistent Systems?',
    answer: `No. ${DISAMBIGUATION} Persistent Software is an independent practice run by Chris Sweigard.`
  },
  {
    question: 'What does Persistent Software do?',
    answer:
      'Persistent Software builds full-stack web applications, React Native mobile apps for iOS and Android, Stripe payments and third-party integrations, and rescues inherited codebases. It also runs AI-assisted code migrations off legacy stacks and offers AI search optimization for brands that want to appear in Google and in AI answers.'
  },
  {
    question: 'Does Persistent Software offer AI search optimization (SEO, AEO and GEO)?',
    answer:
      'Yes. Persistent Software helps brands show up in Google search and in answers from ChatGPT, Gemini, Claude and Perplexity, covering search engine optimization (SEO), answer engine optimization (AEO) and generative engine optimization (GEO).',
    link: { href: '/ai-search', label: 'How AI search optimization works' }
  },
  {
    question: 'What is tokenlog?',
    answer: `tokenlog is a free tool by Persistent Software that shows LLM token usage and cost from Anthropic, OpenAI and GitHub Copilot in one view. It runs at ${TOKENLOG_URL.replace('https://', '')}.`
  },
  {
    question: 'How do I hire Persistent Software for a software project?',
    answer: `Book a 30-minute scoping call with Chris Sweigard at ${BOOKING_URL.replace('https://', '')}, or email ${CONTACT_EMAIL}. You leave the call with a plan and an estimate, whether or not you go ahead.`
  }
];

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
        <h2 className="text-h2">About Persistent Software</h2>
      </div>

      <dl className="mt-10 border-t border-rule">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-8"
          >
            <dt className="text-h4 md:col-span-5">{faq.question}</dt>
            <dd className="m-0 flex max-w-[68ch] flex-col items-start gap-3 text-graphite-500 md:col-span-7">
              <span>{faq.answer}</span>
              {faq.link && (
                <Link
                  href={faq.link.href}
                  className="ps-label border-b border-signal-500 pb-0.5 text-graphite-900 transition-colors duration-[120ms] hover:text-signal-700"
                >
                  {faq.link.label}
                </Link>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Band>
  );
}
