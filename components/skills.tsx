const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Angular",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "REST APIs", "Database Design"],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Webpack",
      "Vite",
      "React Query",
    ],
  },
  {
    title: "Domain Expertise",
    skills: [
      "Healthcare Informatics",
      "Pharmacy Systems",
      "Pharmacy Informatics",
      "Workflow Optimization",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border-2 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 group"
            >
              <h3 className="text-xl font-semibold mb-6 group-hover:text-primary transition-colors flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-muted-foreground flex items-center group/item hover:text-foreground transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mr-3 group-hover/item:scale-125 transition-transform" />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

