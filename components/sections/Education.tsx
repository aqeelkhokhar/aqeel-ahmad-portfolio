import { GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Motion";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/education";

export function Education() {
  return (
    <AnimatedSection id="education" className="container py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="Education"
        title="Foundations"
        description="Academic background that started it all."
      />

      <StaggerGroup className="grid gap-5 md:grid-cols-3" stagger={0.12}>
        {education.map((e) => (
          <StaggerItem key={e.institution} hover>
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-base font-semibold leading-tight">{e.degree}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.institution}</p>
                <p className="mt-1 text-xs text-muted-foreground">{e.period}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </AnimatedSection>
  );
}
