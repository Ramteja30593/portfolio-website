import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, subtitle, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          {eyebrow && (
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>
          {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
};
