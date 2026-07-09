import { Briefcase, Globe, Rocket, Timer } from "lucide-react";
import type { Stat } from "./types";

export const stats: Stat[] = [
  { value: "6+", label: "Years shipping products", icon: Briefcase },
  { value: "14+", label: "Apps & web platforms shipped", icon: Rocket },
  { value: "3", label: "Bilingual web platforms (EN/AR)", icon: Globe },
  { value: "70%", label: "Faster release cycles", icon: Timer },
];
