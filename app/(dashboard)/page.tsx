'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';
import { Terminal } from './terminal';
import { Features } from './components/Features';
import { Services } from './components/Services';

export default function HomePage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-background to-blue-500/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span className="text-cyan-600">AI-accelerated engineering</span>
              </div>

              <h1 className="text-4xl font-bold text-foreground tracking-tight sm:text-5xl md:text-6xl">
                Ship real software,
                <span className="block text-cyan-500">faster than ever.</span>
              </h1>
              <p className="mt-3 text-base text-foreground/70 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Persistent Software pairs 20+ years of full-stack engineering with
                AI-assisted development to turn your idea into a working product
                in weeks, not months.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                {/*<a href="/pricing">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white group w-full sm:w-auto">
                    View Pricing
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>*/}
                <a href="/about">
                  <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 w-full sm:w-auto">
                    Meet the Team
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            >
              <Terminal />
            </motion.div>
          </div>
        </div>
      </section>

      <Features />
      <Services />

      <section className="py-24 bg-gradient-to-br from-cyan-500/10 via-background to-blue-500/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Ready to build?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-foreground/70">
                Tell us about your idea and we'll map out a plan to ship a
                working product fast. No lengthy discovery phase, no
                unnecessary overhead — just focused engineering on what makes
                your product unique.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col sm:flex-row justify-center lg:justify-end gap-4">
              {/*<a href="/sign-up">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white group w-full sm:w-auto">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>*/}
              <a href="mailto:contact@persistentsoftware.com">
                <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 w-full sm:w-auto">
                  <Mail className="mr-2 w-4 h-4" />
                  Contact Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
