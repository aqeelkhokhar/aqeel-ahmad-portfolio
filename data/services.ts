import { Rocket, Crown, LifeBuoy } from "lucide-react";
import type { Service } from "./types";

export const services: Service[] = [
  {
    title: "Fixed-scope project",
    price: "From $3,000",
    pitch:
      "A clearly scoped build at a fixed price: a feature, an MVP, a marketing site or an admin panel, for mobile or web, shipped with tests and a handover.",
    deliverables: [
      "Written scope, estimate and milestones before any work starts",
      "React Native, Flutter or Next.js build, whichever fits your roadmap",
      "Auth, payments, push notifications, analytics and AI features where needed",
      "CI/CD, crash reporting and store release handled, plus a 2 week post launch warranty",
    ],
    timeline: "2 to 12 weeks",
    icon: Rocket,
    featured: true,
  },
  {
    title: "Part-time retainer",
    price: "From $2,000 per month",
    pitch:
      "A senior engineer embedded in your team for about 20 hours a week: architecture, delivery and code review without the full-time hire.",
    deliverables: [
      "Architecture review of your codebase and a 30, 60 and 90 day plan",
      "Sprint leadership, code reviews and mentoring for your engineers",
      "Hands-on delivery on mobile, web and the API behind them",
      "Hiring and technical interview support",
    ],
    timeline: "Ongoing, about 20 hrs per week",
    icon: Crown,
  },
  {
    title: "Ongoing support",
    price: "From $25 per hour",
    pitch:
      "Pay as you go help for a product that is already live: bug fixes, release rescue, store submissions and CI/CD hardening, with no minimum.",
    deliverables: [
      "Bug fixing, performance work and dependency upgrades",
      "GitHub Actions or Bitrise pipelines, code signing and staged rollouts",
      "App Store, Google Play and Huawei AppGallery submissions",
      "Crash reporting, alerting and runbooks your team can run alone",
    ],
    timeline: "As needed, no minimum",
    icon: LifeBuoy,
  },
];
