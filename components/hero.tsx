import Link from "next/link";
import { FileText, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Timothy James
              </h1>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Software Engineer
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
              <span>Healthcare & Pharmacy Informatics</span>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a software engineer and pharmacist (PharmD) with a unique
            background in healthcare and pharmacy informatics, building modern
            web applications with React, Next.js, TypeScript, and Angular. I
            enjoy turning complex workflows into clean, intuitive interfaces and
            designing systems that scale—especially for healthcare apps and
            programs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="outline"
              size="lg"
              className="shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <Link href="/resume.pdf" prefetch={false}>
                <FileText className="h-5 w-5" />
                Resume
              </Link>
            </Button>
            <Button variant="default" size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
              <Link
                href="https://github.com/timothyjames-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button variant="default" size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
              <Link
                href="https://www.linkedin.com/in/timothycorwin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all" asChild>
              <Link href="mailto:ti.corwin229@gmail.com">
                <Mail className="h-5 w-5" />
                Email
              </Link>
            </Button>
          </div>

          <div className="pt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <a
              href="#projects"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-sm">Explore my work</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

