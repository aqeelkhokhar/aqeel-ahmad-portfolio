import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "@/data/certificates";

export function Certificates() {
  if (!certificates.length) return null;

  return (
    <AnimatedSection id="certificates" className="container py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        description="Formal training and verifications."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <Card
            key={c.name}
            className="group transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent className="flex items-start gap-4 p-5">
              <div className="grid h-12 w-12 flex-shrink-0 place-items-center overflow-hidden rounded-lg bg-primary/10">
                {c.logo ? (
                  <Image src={c.logo} alt={c.issuer} width={40} height={40} className="object-contain" />
                ) : (
                  <Award className="h-6 w-6 text-primary" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-base font-semibold leading-tight">{c.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {c.issuer} · {c.date}
                </p>
                {c.credentialUrl && (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    View credential <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
