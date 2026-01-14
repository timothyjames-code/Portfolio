import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Timothy James. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/timothyjames-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/timothycorwin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:ti.corwin229@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

