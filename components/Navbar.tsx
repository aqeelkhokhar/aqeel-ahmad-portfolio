"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useBooking } from "@/components/BookingProvider";
import { navItems } from "@/data/nav";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const booking = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        // header-drop is CSS-only so the navbar is visible pre-hydration.
        "header-drop fixed inset-x-0 top-0 z-40 transition-[backdrop-filter,background-color,border-color] duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="flex items-baseline gap-1 font-heading text-base font-bold tracking-tight"
          aria-label="Back to top"
        >
          {personalInfo.name}
          <span className="inline-block h-1.5 w-1.5 translate-y-px bg-primary" aria-hidden="true" />
        </button>

        <nav className="hidden items-center md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "label-mono relative px-3.5 py-2 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {isActive && (
                  <m.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3.5 -bottom-px h-px bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="hidden sm:inline-flex" onClick={booking.open}>
            Book a call
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <nav className="container flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    "flex items-center justify-between border-b border-border/60 py-3.5 text-left font-heading text-lg font-semibold transition-colors",
                    active === item.id ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                  <span className="label-mono text-muted-foreground">
                    {active === item.id ? "●" : ""}
                  </span>
                </button>
              ))}
              <Button
                className="mt-4"
                onClick={() => {
                  setMobileOpen(false);
                  booking.open();
                }}
              >
                Book a discovery call
              </Button>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
