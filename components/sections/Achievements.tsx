import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { achievements } from "@/data/achievements";

export function Achievements() {
  if (!achievements.length) return null;

  return (
    <section id="achievements" className="container scroll-mt-20 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Proof of shipping"
        title="Shipping, measured."
        description="Outcomes from the work, not vanity metrics."
      />

      <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} variant="pop" delay={(i % 3) * 0.08}>
            <div className="h-full border-b border-r border-border p-6 sm:p-8">
              <div className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {/* CountUp only animates clean leading integers; decimals
                    (99.9%) would read wrong mid-animation. */}
                {a.metric.includes(".") ? a.metric : <CountUp value={a.metric} />}
              </div>
              <div className="mt-3 font-heading text-base font-semibold">{a.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
