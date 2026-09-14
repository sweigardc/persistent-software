import React from 'react';
import type { Metadata } from 'next';
import { Hero } from './components/Hero';
import { Shift } from './components/Shift';
import { Signals } from './components/Signals';
import { Approach } from './components/Approach';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';

export const metadata: Metadata = {
  title: 'AI Search Optimization — SEO, AEO & GEO | Persistent Software',
  description:
    'Rank on Google and get cited by ChatGPT, Gemini, Claude and Perplexity. AEO and GEO for brands that already have SEO but are invisible in AI answers.',
  keywords:
    'ai seo, answer engine optimization, aeo, generative engine optimization, geo, llm seo, rank in chatgpt, gemini seo, claude search, perplexity seo, ai overviews, technical seo, persistent software',
  alternates: {
    canonical: '/ai-search'
  },
  openGraph: {
    title: 'AI Search Optimization — SEO, AEO & GEO | Persistent Software',
    description:
      'Rank on Google and get cited by ChatGPT, Gemini, Claude and Perplexity. AEO and GEO for brands that already have SEO but are invisible in AI answers.',
    url: 'https://www.persistentsoftware.com/ai-search',
    siteName: 'Persistent Software',
  },
};

export default function AiSearch() {
  return (
    <main className="min-h-screen bg-paper">
      <Hero />
      <Shift />
      <Signals />
      <Approach />
      <FAQ />
      <CTA />
    </main>
  );
}
