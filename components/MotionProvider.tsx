"use client";

import { LazyMotion, domAnimation } from "framer-motion";

// Non-strict on purpose: sections still using motion.* keep working; files
// migrated to m.* get the smaller lazy-loaded feature bundle.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
