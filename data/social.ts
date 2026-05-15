import { Linkedin, Github, BookOpen } from "lucide-react";
import type { SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/aqeel-ahmad-41a39b62/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    name: "github",
    href: "https://github.com/aqeelkhokhar",
    icon: Github,
    label: "GitHub",
  },
  {
    name: "medium",
    href: "https://medium.com/@aqeel_ahmad",
    icon: BookOpen,
    label: "Medium",
  },
];
