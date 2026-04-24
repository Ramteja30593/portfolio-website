import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ram Teja Reddy Medapati. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-4 text-muted-foreground">
        <a href="https://github.com/Ramteja30593" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-smooth">
          <Github className="h-4 w-4" />
        </a>
        <a href="https://www.linkedin.com/in/ramtejareddymedapati/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-smooth">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href="mailto:2200030593cseh@gmail.com" aria-label="Email" className="hover:text-foreground transition-smooth">
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
);
