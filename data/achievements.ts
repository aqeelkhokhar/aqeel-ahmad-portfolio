import {
  Timer,
  Activity,
  Globe2,
  ShieldCheck,
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
    metric: "70%",
    title: "Faster release cycles",
    description:
      "Automated iOS and Android pipelines on GitHub Actions and Bitrise with code signing, OTA and staged rollouts.",
    icon: Timer,
  },
  {
    metric: "99.9%",
    title: "Production uptime",
    description:
      "Sentry, Bugsnag and Firebase Crashlytics tuned to catch regressions before users, across fintech and healthcare apps.",
    icon: Activity,
  },
  {
    metric: "0",
    title: "Critical auth incidents",
    description:
      "Auth0, Clerk and Firebase Authentication with biometric and multi-factor flows, JWT, SecureStore and SSL pinning across healthcare and fintech releases.",
    icon: ShieldCheck,
  },
];
