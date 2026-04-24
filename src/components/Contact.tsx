import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

const EMAIL = "2200030593cseh@gmail.com";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    // Open user's email client with prefilled message to ensure delivery
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email app — just hit send!");
      setSending(false);
    }, 400);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      subtitle="Have an opportunity or idea? I'd love to hear from you."
    >
      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-3"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-smooth group"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-smooth">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium truncate">{EMAIL}</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ramtejareddymedapati/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-smooth group"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-smooth">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium">ramtejareddymedapati</p>
            </div>
          </a>

          <a
            href="https://github.com/Ramteja30593"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-smooth group"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-smooth">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="text-sm font-medium">Ramteja30593</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Based in</p>
              <p className="text-sm font-medium">India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2" disabled={sending}>
                <Send className="h-4 w-4" />
                {sending ? "Sending..." : "Send Message"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your default email client will open with the message ready to send.
              </p>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
