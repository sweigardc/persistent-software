import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-500/10 via-background to-blue-500/10 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-6">Ready to Accelerate Your Development?</h2>
          <p className="mb-8 text-foreground/70 max-w-2xl mx-auto">
            Join the companies that are building faster, smarter, and more efficiently with Persistent Software. 
            Let's transform your ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white group">
              Start Your Project Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500">
              <Mail className="mr-2 w-4 h-4" />
              Contact Us
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <p className="text-foreground/60 mb-6">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Startup A', 'Tech Co', 'Innovation Ltd', 'Digital Inc'].map((company, index) => (
                <div key={index} className="text-foreground/40">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
