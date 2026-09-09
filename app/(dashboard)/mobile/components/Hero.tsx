'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Smartphone } from 'lucide-react';

const stats = [
  { value: 'One codebase', label: 'iOS and Android from a single React Native app' },
  { value: '6–10 weeks', label: 'Working prototype to a build in both stores' },
  { value: 'Your backend', label: 'Keep the one you have, or we build it to spec' },
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
            <Smartphone className="w-4 h-4 text-cyan-300" />
            <p className="text-cyan-200">React Native mobile development</p>
          </div>

          <h1 className="text-5xl md:text-6xl">
            The prototype proved the idea.
            <span className="block text-cyan-400">Now ship it to the app stores.</span>
          </h1>

          <p className="text-xl opacity-90">
            AI-built apps are excellent at showing what a product should be and
            terrible at surviving a thousand real users. We rebuild them in React
            Native — keeping every product decision you validated and none of the
            code that cannot go to production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="https://calendly.com/chris-persistentsoftware" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white group w-full sm:w-auto gap-2">
                <Calendar className="w-5 h-5" />
                Scope your app
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#white-label">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
              >
                See the white-label option
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
              <div className="text-3xl text-cyan-400 mb-2">{stat.value}</div>
              <p className="opacity-80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
