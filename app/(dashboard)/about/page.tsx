import React from 'react';
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { Expertise } from "./components/Expertise";
import { Services } from "./components/Services";
import { CTA } from "./components/CTA";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Story />
      <Expertise />
      <Services />
      <CTA />
    </div>
  );
};

