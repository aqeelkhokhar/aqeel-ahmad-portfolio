import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { personalInfo } from "@/data/personal";

export function About() {
  const [lede, ...rest] = personalInfo.summary;

  return (
    <section id="about" className="container scroll-mt-20 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Profile"
        title="The engineer behind the releases."
        description="Architecture, releases and reliability, owned end to end from first commit to store review."
      />

      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">{lede}</p>
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={i} delay={0.08 * (i + 1)}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="lg:col-span-5" variant="side" delay={0.1}>
          <div className="rounded-md border border-border bg-card">
            <div className="border-b border-border px-6 py-4">
              <span className="label-mono text-muted-foreground">What you get</span>
            </div>
            <ul className="px-6 py-2">
              {personalInfo.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 border-b border-border/60 py-4 text-sm leading-relaxed text-foreground/85 last:border-b-0"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 bg-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
