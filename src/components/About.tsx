import { motion } from "framer-motion";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Code2, Database, LineChart, Brain } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Software Development" },
  { icon: Database, label: "SQL & Databases" },
  { icon: LineChart, label: "Data Analytics" },
  { icon: Brain, label: "Machine Learning" },
];

export const About = () => (
  <Section id="about" eyebrow="About" title="A quick intro" subtitle="What I do and what drives me.">
    <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:col-span-3 space-y-4"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          I'm a final-year Computer Science student at <span className="text-foreground font-medium">KL University</span> with
          a passion for transforming complex datasets into actionable insights. I build data-driven applications
          that combine clean code, strong analytics, and modern machine learning.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          From AI chatbots to interactive dashboards, I love solving real problems with the right blend of
          engineering and analysis. Currently focused on becoming a top-tier Data Analyst & Software Developer.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:col-span-2 grid grid-cols-2 gap-3"
      >
        {highlights.map(({ icon: Icon, label }) => (
          <Card key={label} className="p-4 flex flex-col items-start gap-2 hover:shadow-md hover:-translate-y-0.5 transition-smooth">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">{label}</span>
          </Card>
        ))}
      </motion.div>
    </div>
  </Section>
);
