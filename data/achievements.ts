import {
  Download,
  Star,
  Users,
  Globe2,
  Rocket,
  Smartphone,
} from "lucide-react";
import type { Achievement } from "./types";

export const achievements: Achievement[] = [
  {
    metric: "11+",
    title: "Apps shipped to stores",
    description:
      "Delivered cross-platform mobile applications across healthcare, telemedicine, gifting, VPN, attendance, IoT, booking and real-time communication.",
    icon: Rocket,
  },
  {
    metric: "3",
    title: "Stores covered end-to-end",
    description:
      "Shipped and maintained apps across Apple App Store, Google Play and Huawei AppGallery, with a focus on store compliance and release reliability.",
    icon: Globe2,
  },
  {
    metric: "2",
    title: "Frameworks mastered",
    description:
      "Senior-level depth in both React Native (CLI and Expo) and Flutter, a rare combo that unlocks cross-platform options for any roadmap.",
    icon: Smartphone,
  },
  {
    metric: "100K+",
    title: "Downloads on one patient app",
    description:
      "A React Native patient app for a Saudi hospital group, live on Google Play and the App Store in English and Arabic, with appointments, payments, teleconsultation and lab results.",
    icon: Download,
  },
  {
    metric: "4.9",
    title: "Rating on Google Play",
    description:
      "From 4,590 reviews on the same patient app, with 4.7 on the App Store. Quality gates and crash monitoring keep releases steady.",
    icon: Star,
  },
  {
    metric: "7",
    title: "Engineers led",
    description:
      "Team lead for client delivery: sprint planning, code review, mentoring and the CI/CD gates that every release passes through.",
    icon: Users,
  },
];
