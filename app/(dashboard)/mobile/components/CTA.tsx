'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Mail, Calendar, Check } from 'lucide-react';

const deliverables = [
  'An honest read on what your prototype is worth keeping',
  'The features that stand between you and a store approval',
  'A phased plan with a real timeline and a real number',
];

export function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-cyan-500/10 via-background to-blue-500/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl">Send us the app you already built</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every engagement starts with a review of what exists today — a
            prototype, a spec, or a rough idea of the app your brand needs.
            You get the findings whether or not you hire us to build it.
          </p>
        </div>

        <div className="flex flex-col sm:inline-flex gap-3 text-left mx-auto">
          {deliverables.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <a href="https://calendly.com/chris-persistentsoftware" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-cyan-500 hover:bg-cyan-600 text-white">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
          </a>
          <a href="mailto:contact@persistentsoftware.com">
            <Button size="lg" variant="outline" className="gap-2 border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500">
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
