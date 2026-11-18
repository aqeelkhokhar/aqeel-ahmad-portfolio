import { Briefcase, Download, Globe, Rocket } from "lucide-react";
import type { Stat } from "./types";

export const stats: Stat[] = [
  { value: "7+", label: "Years shipping products", icon: Briefcase },
  { value: "15+", label: "Apps & web platforms shipped", icon: Rocket },
  { value: "3", label: "Bilingual web platforms (EN/AR)", icon: Globe },
  { value: "100K+", label: "Downloads on one patient app", icon: Download },
];
