import { motion } from "framer-motion";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Check } from "lucide-react";

const experience = [
  {
    role: "AI / ML Intern",
    company: "AI & Machine Learning Internship",
    period: "2024",
    points: [
      "Built and trained ML models on real-world datasets to solve classification and prediction problems.",
      "Performed data preprocessing, feature engineering and exploratory analysis using Python (Pandas, NumPy).",
      "Evaluated model performance with scikit-learn and presented insights to stakeholders.",
      "Collaborated with the team to deploy prototypes and document findings.",
    ],
  },
];

export const Internships = () => (
  <Section id="internships" eyebrow="Experience" title="Internships" subtitle="Where I've sharpened my skills.">
    <div className="max-w-3xl mx-auto space-y-6">
      {experience.map((e, i) => (
        <motion.div
          key={e.role}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Card className="p-6 md:p-8 hover:shadow-elegant transition-smooth">
            <div className="flex flex-col md:flex-row md:items-start gap-5">
              <div className="p-3 rounded-xl bg-primary/10 text-primary self-start">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{e.role}</h3>
                  <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {e.period}
                  </span>
                </div>
                <p className="text-primary text-sm font-medium mb-4">{e.company}</p>
                <ul className="space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
