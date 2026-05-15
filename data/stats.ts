import { Briefcase, Rocket, Smartphone, Timer } from "lucide-react";
import type { Stat } from "./types";

export const stats: Stat[] = [
  { value: "6+", label: "Years building mobile", icon: Briefcase },
  { value: "11+", label: "Apps shipped to stores", icon: Rocket },
  { value: "2", label: "Frameworks mastered (RN + Flutter)", icon: Smartphone },
  { value: "70%", label: "Faster release cycles", icon: Timer },
];
