import { motion } from 'motion/react';
import { Zap, Cpu, Blocks, Rocket, Shield, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Rapid prototyping that delivers working software in days, not months. Speed without compromising quality.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    description: 'Leverage cutting-edge AI to automate repetitive tasks and accelerate development cycles.',
  },
  {
    icon: Blocks,
    title: 'Template Library',
    description: 'Access our extensive library of battle-tested templates and components for instant development.',
  },
  {
    icon: Rocket,
    title: 'Quick Launch',
    description: 'From concept to deployment in record time. Get your product to market faster than ever.',
  },
  {
    icon: Shield,
    title: 'Production Ready',
    description: 'Code that\'s not just fast to build, but secure, scalable, and ready for production.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work with experienced developers who understand both speed and quality.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-cyan-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="mb-4 text-1xl font-bold text-gray-900 sm:text-2xl">
            Why Choose Persistent Software
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We combine the power of AI with proven templates to deliver exceptional software at unprecedented speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
