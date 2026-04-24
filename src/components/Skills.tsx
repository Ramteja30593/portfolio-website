import { motion } from "framer-motion";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Code, Wrench, Sparkles } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "SQL", "HTML", "CSS", "React"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Excel", "Power BI", "Tableau", "VS Code"],
  },
  {
    icon: Sparkles,
    title: "Technologies",
    skills: ["Machine Learning", "Data Analysis"],
  },
];

export const Skills = () => (
  <Section id="skills" eyebrow="Skills" title="My toolkit" subtitle="Technologies I use to ship great work.">
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Card className="p-6 h-full hover:shadow-elegant hover:-translate-y-1 transition-smooth">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <cat.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-smooth"
                >
                  {s}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
