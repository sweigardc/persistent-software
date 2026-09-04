import React from 'react';
import type { Metadata } from 'next';
import { Hero } from './components/Hero';
import { Rebuild } from './components/Rebuild';
import { WhiteLabel } from './components/WhiteLabel';
import { Backend } from './components/Backend';
import { Approach } from './components/Approach';
import { CTA } from './components/CTA';

export const metadata: Metadata = {
  title: 'Mobile App Development | Persistent Software',
  description:
    'React Native apps for iOS and Android. We rebuild vibe-coded prototypes into production apps, and offer a white-label app skinned for your brand — integrated with your backend or one we build.',
  keywords:
    'react native development, mobile app development, vibe coded app rebuild, white label mobile app, ios android app, expo, mobile backend, persistent software',
  openGraph: {
    title: 'Mobile App Development | Persistent Software',
    description:
      'React Native apps for iOS and Android. We rebuild vibe-coded prototypes into production apps, and offer a white-label app skinned for your brand — integrated with your backend or one we build.',
    url: 'https://www.persistentsoftware.com/mobile',
    siteName: 'Persistent Software',
  },
};

export default function Mobile() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Rebuild />
      <WhiteLabel />
      <Backend />
      <Approach />
      <CTA />
    </div>
  );
}
