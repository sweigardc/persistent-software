'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, GitBranch } from 'lucide-react';

const stats = [
  { value: '6-10x', label: 'Faster than a hand-written rewrite' },
  { value: '70-85%', label: 'Lower migration cost' },
  { value: '~4x', label: 'Better p95 latency after cutover' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 backdrop-blur-sm rounded-full border border-cyan-400/30">
            <GitBranch className="w-4 h-4 text-cyan-300" />
            <p className="text-cyan-200">AI-assisted code migrations</p>
          </div>

          <h1 className="text-5xl md:text-6xl">
            Get off the legacy stack
            <span className="block text-cyan-400">without the two-year rewrite.</span>
          </h1>

          <p className="text-xl opacity-90">
            Legacy migrations stall because reading the old system costs more than
            writing the new one. AI reads all of it — every branch, every stored
            procedure, every dead code path — in hours. We use that map to port your
            system deliberately, with tests that prove the new one behaves like the old one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="https://calendly.com/chris-persistentsoftware" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white group w-full sm:w-auto gap-2">
                <Calendar className="w-5 h-5" />
                Scope your migration
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#case-study">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
              >
                Read the Java → Python story
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid sm:grid-cols-3 gap-8 border-t border-white/15 pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl text-cyan-400 mb-2">{stat.value}</div>
              <p className="opacity-80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
