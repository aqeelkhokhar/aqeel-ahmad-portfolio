import { Rocket, Crown, Workflow } from "lucide-react";
import type { Service } from "./types";

export const services: Service[] = [
  {
    title: "Cross-Platform MVP Build",
    pitch:
      "From wireframes to App Store. A production-ready MVP in React Native or Flutter your users can hold in their hands in 8 to 12 weeks.",
    deliverables: [
      "Choose React Native (Expo) or Flutter, best fit for your roadmap",
      "Auth, payments, push notifications, analytics plus AI features wired up",
      "iOS and Android builds with automated CI/CD and OTA / LiveOps",
      "Sentry and Crashlytics observability plus a 2-week post-launch warranty",
    ],
    timeline: "8 to 12 weeks",
    icon: Rocket,
    featured: true,
  },
  {
    title: "Mobile Tech Lead Engagement",
    pitch:
      "Plug me in as the senior voice on your mobile team. Architecture reviews, mentoring and unblockers across React Native and Flutter without the full-time hire.",
    deliverables: [
      "Architecture review of your RN or Flutter codebase plus a 30/60/90 plan",
      "Sprint leadership, code reviews and PR mentoring",
      "Pair programming on native modules, performance and auth",
      "Hiring and tech-interview support for mobile candidates",
    ],
    timeline: "Ongoing, 20 to 40 hrs per week",
    icon: Crown,
  },
  {
    title: "CI/CD and Release Hardening",
    pitch:
      "Cut your release time, stop shipping bugs to prod, and sleep through your next App Store and Play Store submission.",
    deliverables: [
      "GitHub Actions or Bitrise pipelines for iOS, Android and Huawei",
      "Code-signing automation, OTA / LiveOps and staged rollouts",
      "Crash reporting, error budgets and on-call alerting",
      "Runbooks plus a Loom walkthrough so your team can run it solo",
    ],
    timeline: "2 to 3 weeks",
    icon: Workflow,
  },
];
