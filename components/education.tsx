import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, HeartPulse } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Education & Credentials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Healthcare experience that informs how I design and build software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
            <CardHeader className="flex flex-row items-center gap-3">
              <GraduationCap className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">Doctor of Pharmacy (PharmD)</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Pharmacist with a strong foundation in clinical workflows, safety,
              and regulated environments.
            </CardContent>
          </Card>

          <Card className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
            <CardHeader className="flex flex-row items-center gap-3">
              <HeartPulse className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">Healthcare Software Focus</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Interested in building healthcare apps and programs that improve
              outcomes, streamline operations, and reduce cognitive load for
              clinicians.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

