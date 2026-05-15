"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, Download, MapPin, Sparkles } from "lucide-react";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useBooking } from "@/components/BookingProvider";
import { personalInfo } from "@/data/personal";
import { stats } from "@/data/stats";
import { socialLinks } from "@/data/social";

export function Hero() {
  const booking = useBooking();
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-3"
          >
            <Badge variant="accent" className="mb-5 gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> {personalInfo.availability}
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I&apos;m {personalInfo.name.split(" ")[0]}.<br />
              <span className="text-gradient">{personalInfo.title}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {personalInfo.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="gradient" size="lg" onClick={booking.open}>
                <CalendarCheck className="h-5 w-5" />
                Book a Discovery Call
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Find me on</span>
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {personalInfo.location}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative md:col-span-2"
          >
            <motion.div
              className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                style={{ animation: "spin 30s linear infinite" }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-2xl ring-2 ring-primary/30">
                {personalInfo.profileImage ? (
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    sizes="(min-width: 768px) 320px, 288px"
                    className="object-cover object-[center_top]"
                    style={{ objectPosition: "center 12%" }}
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary via-primary/80 to-accent">
                    <span className="font-heading text-7xl font-bold tracking-tight text-white drop-shadow-md sm:text-8xl">
                      {getInitials(personalInfo.name)}
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg ring-1 ring-border">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold">Available for hire</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats trust strip */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
          }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.95 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="group rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-shadow hover:shadow-lg"
              >
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <div className="font-heading text-3xl font-bold">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
