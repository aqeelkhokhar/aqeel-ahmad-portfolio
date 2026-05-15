import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Motion";
import { TechChip } from "@/components/TechChip";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="container py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="Skills"
        title="The stack I build with daily"
        description="Production-grade tools I've shipped in fintech, healthcare and enterprise apps."
      />

      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <StaggerItem key={group.category} hover>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-base font-semibold">{group.category}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechChip key={item}>{item}</TechChip>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </AnimatedSection>
  );
}
