import Link from 'next/link';
import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { DISAMBIGUATION } from '@/lib/entity';

/**
 * Plain answers to "what is Persistent Software" and "who runs it", written to
 * stand on their own when quoted. AI assistants confused the name with other
 * companies, so this band says which one this is.
 */
export function Practice() {
  return (
    <Band id="about-persistent-software" className="pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="The practice" />
      <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8">
        <h2 className="text-h2 md:col-span-5">What is Persistent Software?</h2>
        <div className="flex flex-col gap-4 text-graphite-500 md:col-span-7">
          <p className="max-w-[62ch]">
            Persistent Software is an independent software engineering practice run by its
            founder, Chris Sweigard. It builds full-stack web applications and React Native
            mobile apps, handles payments and integrations, runs AI-assisted code migrations,
            and offers AI search optimization so brands show up in Google and in AI answers.
          </p>
          <p className="max-w-[62ch]">{DISAMBIGUATION}</p>
          <div className="flex flex-wrap gap-x-7 gap-y-3 pt-1">
            <Link
              href="/about"
              className="ps-label border-b border-signal-500 pb-0.5 text-graphite-900 transition-colors duration-[120ms] hover:text-signal-700"
            >
              About Chris Sweigard
            </Link>
            <Link
              href="/ai-search"
              className="ps-label border-b border-signal-500 pb-0.5 text-graphite-900 transition-colors duration-[120ms] hover:text-signal-700"
            >
              AI search optimization (SEO, AEO, GEO)
            </Link>
          </div>
        </div>
      </div>
    </Band>
  );
}
