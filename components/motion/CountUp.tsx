"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Stat value like "6+", "70%", "14+" — leading number animates, the rest is a suffix. */
  value: string;
  durationMs?: number;
}

export function CountUp({ value, durationMs = 1400 }: CountUpProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const animatable = Boolean(match);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduced || !animatable) return;
    const controls = animate(0, target, {
      duration: durationMs / 1000,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduced, animatable, target, durationMs]);

  if (!animatable) return <span ref={ref}>{value}</span>;

  const shown = reduced ? target : display;

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}
