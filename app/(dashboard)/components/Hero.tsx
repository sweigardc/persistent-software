import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/bc6198be9a6d14efebfe55ab6fe2bca78489b7f2.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-background to-blue-500/10" />
      
      {/* Animated circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400">AI-Powered Development</span>
            </motion.div>

            <h1 className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transform Ideas into Reality at Lightning Speed
            </h1>

            <p className="mb-8 text-foreground/70 max-w-2xl mx-auto lg:mx-0">
              Persistent Software specializes in rapid prototyping using cutting-edge AI and battle-tested templates. 
              We turn your vision into functional software in days, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white group">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border/50">
              <div>
                <div className="text-cyan-400">10x</div>
                <p className="text-foreground/60">Faster Delivery</p>
              </div>
              <div>
                <div className="text-cyan-400">100+</div>
                <p className="text-foreground/60">Projects Completed</p>
              </div>
              <div>
                <div className="text-cyan-400">98%</div>
                <p className="text-foreground/60">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right content - Animated logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative">
              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 bg-cyan-500/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Logo */}
              <motion.img
                src={logo.src}
                alt="Persistent Software"
                className="w-96 h-96 relative z-10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Orbiting particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full"
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                  }}
                  animate={{
                    rotate: 360,
                    x: [0, 150 * Math.cos((i * 2 * Math.PI) / 3)],
                    y: [0, 150 * Math.sin((i * 2 * Math.PI) / 3)],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
