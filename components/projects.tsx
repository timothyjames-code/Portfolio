import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Github } from "lucide-react";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

const projects = getProjects();

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing modern web development
            practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto pt-4">
                  {project.caseStudy && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <Link href={`/projects/${project.slug}`}>
                        <FileText className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Deep Dive
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

