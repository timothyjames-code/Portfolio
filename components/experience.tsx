import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    company: "MVHQ",
    role: "Frontend Developer",
    period: "2024 - 2025",
    description:
      "Built web UI features for an NFT platform in Next.js, integrating frontend flows with on-chain contract interactions to support minting and asset management.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Web3",
      "Ethers.js",
      "Smart Contracts",
    ],
    achievements: [
      "Implemented frontend workflows that trigger and track NFT contract transactions (mint, transfer, approvals)",
      "Integrated wallet connectivity and transaction state UX (pending/confirmed/failed) to keep users informed",
      "Collaborated with contract and product stakeholders to translate requirements into reliable UI flows",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in software engineering
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {exp.company}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-lg font-medium text-foreground/80">
                      {exp.role}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
