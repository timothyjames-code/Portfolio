import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect!
          </p>
        </div>

        <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">Contact Information</CardTitle>
            <CardDescription className="text-base">
              Feel free to reach out through any of these channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="default"
              size="lg"
              className="w-full justify-start group hover:shadow-lg transition-all"
              asChild
            >
              <Link href="mailto:ti.corwin229@gmail.com">
                <Mail className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                ti.corwin229@gmail.com
              </Link>
            </Button>
            <Button
              variant="default"
              size="lg"
              className="w-full justify-start group hover:shadow-lg transition-all"
              asChild
            >
              <Link
                href="https://github.com/timothyjames-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                github.com/timothyjames-code
              </Link>
            </Button>
            <Button
              variant="default"
              size="lg"
              className="w-full justify-start group hover:shadow-lg transition-all"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/timothycorwin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                linkedin.com/in/timothycorwin
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

