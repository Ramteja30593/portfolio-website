import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Bot, Camera, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "All" | "AI" | "Data" | "Web";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: Exclude<Category, "All">;
  github: string;
  icon: typeof Bot;
  accent: string;
}

const projects: Project[] = [
  {
    title: "Retail Intelligence Chatbot",
    description:
      "AI-powered chatbot that answers business questions on retail data with natural language, combining LLMs and analytics for actionable insights.",
    tags: ["Python", "AI", "Analytics", "NLP"],
    category: "AI",
    github: "https://github.com/Ramteja30593",
    icon: Bot,
    accent: "from-primary to-primary-glow",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Automated attendance system using OpenCV face recognition with SQL backend — captures, identifies and logs attendance in real time.",
    tags: ["OpenCV", "Python", "SQL", "ML"],
    category: "AI",
    github: "https://github.com/Ramteja30593",
    icon: Camera,
    accent: "from-accent to-primary",
  },
  {
    title: "Sales & Performance Data Dashboard",
    description:
      "Interactive Power BI / Tableau dashboard surfacing KPIs, trends and forecasts to help stakeholders make data-driven decisions quickly.",
    tags: ["Power BI", "Tableau", "Excel", "DAX"],
    category: "Data",
    github: "https://github.com/Ramteja30593",
    icon: BarChart3,
    accent: "from-primary-glow to-accent",
  },
];

const filters: Category[] = ["All", "AI", "Data", "Web"];

export const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section id="projects" eyebrow="Projects" title="Selected work" subtitle="A glimpse of things I've built recently.">
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-smooth",
              active === f
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col">
                <div className={cn("h-32 bg-gradient-to-br relative overflow-hidden", p.accent)}>
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-background/90 backdrop-blur text-foreground">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold bg-background/90 backdrop-blur text-foreground">
                    {p.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline" className="flex-1 gap-1.5">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="gap-1.5">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};
