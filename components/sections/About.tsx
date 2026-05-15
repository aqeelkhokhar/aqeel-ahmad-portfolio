import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Motion";
import { personalInfo } from "@/data/personal";

const highlights = [
  "6+ years shipping mobile apps in React Native, Expo and Flutter",
  "Healthcare, fintech, telemedicine, VPN, IoT, AI and gifting domain depth",
  "Owns CI/CD, code signing, OTA / LiveOps and App Store releases",
  "Mentors mobile engineers and runs technical interviews",
];

export function About() {
  return (
    <AnimatedSection id="about" className="container py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="About"
        title="Senior mobile engineering, end-to-end"
        description="I take products from a blank screen to the App Store, owning architecture, releases and reliability."
      />

      <div className="grid gap-8 md:grid-cols-5">
        <StaggerGroup
          className="space-y-4 md:col-span-3"
          as="div"
          stagger={0.12}
        >
          {personalInfo.summary.map((p, i) => (
            <StaggerItem key={i} direction="left">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{p}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <StaggerItem className="md:col-span-2" direction="right">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold">What I bring to the table</h3>
            <StaggerGroup as="ul" className="mt-4 space-y-3" stagger={0.08} delay={0.15}>
              {highlights.map((h) => (
                <StaggerItem key={h} as="li" className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground/80">{h}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </StaggerItem>
      </div>
    </AnimatedSection>
  );
}
