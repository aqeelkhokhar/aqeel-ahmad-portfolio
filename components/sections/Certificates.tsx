import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { certificates } from "@/data/certificates";

export function Certificates() {
  if (!certificates.length) return null;

  return (
    <section id="certificates" className="container scroll-mt-20 py-20 sm:py-24">
      <SectionHeading eyebrow="Credentials" title="Certifications." />

      <Reveal>
        <div className="border-t border-border">
          {certificates.map((cert) => {
            const row = (
              <div className="grid gap-x-8 gap-y-1 py-5 md:grid-cols-12">
                <div className="font-mono text-xs tracking-wider text-muted-foreground md:col-span-3 md:pt-1">
                  {cert.date}
                </div>
                <div className="flex items-start justify-between gap-4 md:col-span-9">
                  <div>
                    <div className="font-heading text-base font-semibold">{cert.name}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{cert.issuer}</div>
                  </div>
                  {cert.credentialUrl && (
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  )}
                </div>
              </div>
            );
            return cert.credentialUrl ? (
              <a
                key={cert.name}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b border-border transition-colors hover:bg-muted/50"
              >
                {row}
              </a>
            ) : (
              <div key={cert.name} className="border-b border-border">
                {row}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
