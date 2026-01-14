import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getProjectBySlugOrThrow } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlugOrThrow(slug);

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl space-y-10">
        <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
          <Button variant="outline" asChild>
            <Link href="/#projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="default" asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="outline" asChild>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live
                </Link>
              </Button>
            )}
          </div>
        </div>

        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {project.caseStudy ? (
          <div className="grid gap-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>{project.caseStudy.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                This is a technical deep dive into the safety-first workflow
                design.
              </CardContent>
            </Card>

            {project.caseStudy.sections.map((section) => (
              <Card key={section.heading} className="border-2">
                <CardHeader>
                  <CardTitle>{section.heading}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.paragraphs?.map((p) => (
                    <p key={p} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {section.code && (
                    <pre className="rounded-lg border bg-muted/20 p-4 overflow-x-auto text-sm">
                      <code>{section.code}</code>
                    </pre>
                  )}

                  {section.bullets && (
                    <ul className="space-y-2">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Deep dive</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Deep dive coming soon.
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}

