import { motion } from "framer-motion";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Trophy } from "lucide-react";

export const Education = () => (
  <Section id="education" eyebrow="Education" title="Academic background">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <Card className="p-8 md:p-10 hover:shadow-elegant transition-smooth">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="p-4 rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">B.Tech in Computer Science & Engineering</h3>
            <p className="text-primary font-medium mb-4">Koneru Lakshmaiah University</p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                2022 — 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-accent" />
                CGPA: <span className="font-semibold text-foreground">9.0 / 10</span>
              </span>
            </div>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Focused coursework on Data Structures, Database Systems, Machine Learning,
              and Web Technologies — paired with hands-on projects in analytics and AI.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  </Section>
);
