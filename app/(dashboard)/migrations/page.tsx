import React from 'react';
import type { Metadata } from 'next';
import { Hero } from './components/Hero';
import { Economics } from './components/Economics';
import { Performance } from './components/Performance';
import { CaseStudy } from './components/CaseStudy';
import { Approach } from './components/Approach';
import { CTA } from './components/CTA';

export const metadata: Metadata = {
  title: 'AI-Assisted Code Migrations | Persistent Software',
  description:
    'Retire legacy systems in weeks instead of years. AI-assisted migrations cut cost and timeline while moving you onto a modern, faster, cheaper stack.',
  keywords:
    'code migration, legacy modernization, java to python, ai assisted migration, aws fargate, legacy rewrite, application modernization, persistent software',
  openGraph: {
    title: 'AI-Assisted Code Migrations | Persistent Software',
    description:
      'Retire legacy systems in weeks instead of years. AI-assisted migrations cut cost and timeline while moving you onto a modern, faster, cheaper stack.',
    url: 'https://www.persistentsoftware.com/migrations',
    siteName: 'Persistent Software',
  },
};

export default function Migrations() {
  return (
    <main className="min-h-screen bg-paper">
      <Hero />
      <Economics />
      <Performance />
      <CaseStudy />
      <Approach />
      <CTA />
    </main>
  );
}
