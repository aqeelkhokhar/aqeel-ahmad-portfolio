"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { useBooking } from "@/components/BookingProvider";
import { services } from "@/data/services";

export function Services() {
  const booking = useBooking();

  return (
    <section id="services" className="container scroll-mt-20 py-20 sm:py-24">
      <SectionHeading
        eyebrow={`Engagements · ${services.length} ways to work together`}
        title="Plug me into your roadmap."
        description="Fixed scope builds, embedded leadership or release rescue. Pick the shape that fits."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={0.08 * i} className="h-full">
            <article className="flex h-full flex-col rounded-md border border-border bg-card transition-colors duration-200 hover:border-primary/60">
              <div className="flex items-center justify-between gap-3 border-b border-border px-6 py-3.5">
                <span className="label-mono text-muted-foreground">{service.timeline}</span>
                {service.featured && <span className="label-mono text-primary">Most booked</span>}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.pitch}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 bg-primary"
                        aria-hidden="true"
                      />
                      {d}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={booking.open}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Book this engagement
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
