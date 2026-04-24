import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 backdrop-blur text-sm font-medium mb-8"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">Available for internships & freelance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
          >
            Hi, I'm <span className="gradient-text">Ram Teja Reddy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Data Analyst & Software Developer turning raw data into clear insights and
            building intelligent products with Python, SQL & Machine Learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <Button asChild size="lg" className="gap-2 shadow-glow">
              <a href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="#contact">
                <Mail className="h-4 w-4" /> Contact
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-5 text-muted-foreground"
          >
            <a href="https://github.com/Ramteja30593" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-smooth">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/ramtejareddymedapati/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-smooth">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:2200030593cseh@gmail.com" aria-label="Email" className="hover:text-foreground transition-smooth">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
