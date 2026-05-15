"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLElement> &
  MotionProps & {
    delay?: number;
  };

export function AnimatedSection({ className, delay = 0, children, ...props }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 48, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
