"use client";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CalendarCheck,
  ArrowUpRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { useBooking } from "@/components/BookingProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { whatsappLink } from "@/lib/utils";
import { whatsappCallLink } from "@/lib/booking";

export function Contact() {
  const booking = useBooking();
  const wa = whatsappLink(
    personalInfo.countryCode,
    personalInfo.phone,
    `Hi ${personalInfo.name.split(" ")[0]}, I'd love to chat about a mobile project.`
  );
  const waCall = whatsappCallLink(personalInfo.countryCode, personalInfo.phone);
  const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    "Mobile project enquiry"
  )}`;

  return (
    <AnimatedSection id="contact" className="container py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's build your mobile product"
        description="The fastest way to start is a 20-minute discovery call. Or drop me a line directly."
      />

      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardContent className="space-y-5 p-6 sm:p-8">
            <Badge variant="accent">{personalInfo.availability}</Badge>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={mailto}
                className="group flex items-start gap-3 rounded-xl border border-border p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="mt-0.5 text-sm font-medium">{personalInfo.email}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-border p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="mt-0.5 text-sm font-medium">Chat now</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={waCall}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-border p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Call · WhatsApp
                  </div>
                  <div className="mt-0.5 text-sm font-medium">
                    +{personalInfo.countryCode} {personalInfo.phone}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="flex items-start gap-3 rounded-xl border border-border p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="mt-0.5 text-sm font-medium">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button variant="gradient" size="lg" onClick={booking.open}>
                <CalendarCheck className="h-5 w-5" /> Book a Discovery Call
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={mailto}>
                  <Mail className="h-5 w-5" /> Send an email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardContent className="flex h-full flex-col gap-6 p-6 sm:p-8">
            <div>
              <h3 className="font-heading text-lg font-semibold">Working with me</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                I typically respond within a few hours during weekdays (GMT+5). Discovery calls are free and zero pressure. We figure out fit before anything else.
              </p>
            </div>

            <div className="flex-1 rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent p-5">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Find me online
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
