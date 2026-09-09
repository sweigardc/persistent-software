import React from 'react';
import type { Metadata } from 'next';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { CTA } from './components/CTA';

export const metadata: Metadata = {
  title: 'About | Persistent Software',
  description:
    'Persistent Software is Chris Sweigard: twenty years shipping production software, eight of them leading engineering teams. One person to talk to, whole stack.',
  openGraph: {
    title: 'About | Persistent Software',
    description:
      'Persistent Software is Chris Sweigard: twenty years shipping production software, eight of them leading engineering teams.',
    url: 'https://www.persistentsoftware.com/about',
    siteName: 'Persistent Software'
  }
};

export default function About() {
  return (
    <main className="min-h-screen bg-paper">
      <Hero />
      <Story />
      <Expertise />
      <Services />
      <CTA />
    </main>
  );
}
