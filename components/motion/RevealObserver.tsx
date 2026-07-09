"use client";

import { useEffect } from "react";

// Reveals every [data-reveal] element once as it scrolls into view by adding
// .is-in (see globals.css). One observer replaces a framer-motion whileInView
// component per element — the main hydration cost on mobile.
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      // Near-zero threshold: blocks taller than the viewport (spec sheet,
      // ledger groups) can never reach a fractional threshold, and elements
      // inside content-visibility regions report unstable geometry until
      // painted — "any pixel visible" is the only reliable trigger.
      { threshold: 0.01, rootMargin: "0px 0px -6% 0px" },
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
