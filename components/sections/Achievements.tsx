import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Motion";
import { Card, CardContent } from "@/components/ui/card";
import { achievements } from "@/data/achievements";

export function Achievements() {
  if (!achievements.length) return null;

  return (
    <AnimatedSection id="achievements" className="container py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="Impact"
        title="Numbers that matter"
        description="Outcomes from the work, not vanity metrics."
      />

      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {achievements.map((a) => {
          const Icon = a.icon;
          return (
            <StaggerItem key={a.title} hover>
              <Card className="group relative h-full overflow-hidden transition-shadow hover:shadow-lg">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 opacity-50 transition-transform group-hover:scale-110" />
                <CardContent className="relative p-6">
                  <Icon className="mb-4 h-7 w-7 text-primary" />
                  <div className="font-heading text-4xl font-bold text-gradient">{a.metric}</div>
                  <h3 className="mt-2 font-heading text-lg font-semibold">{a.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{a.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </AnimatedSection>
  );
}
