import type { Job } from "./types";

export const experience: Job[] = [
  {
    title: "Full-Stack Engineer (Contract)",
    company: "Confidential Clients",
    location: "Remote · Gulf Region",
    type: "Contract",
    period: "2023 to Present",
    current: true,
    bullets: [
      "**Bilingual marketing site:** Built an industrial trading company's website (Gulf region) from scratch with Next.js 16, React 19 and Tailwind CSS: English/Arabic RTL via next-intl, a CSS-first animation system that paints before hydration, static export to S3, and a full technical SEO stack (JSON-LD, sitemap, hreflang) with Lighthouse-green Core Web Vitals.",
      "**Patient web portal:** Delivered the customer-facing web platform for a Saudi healthcare clinics group: Next.js 15 App Router with Turbopack, Zustand state, Radix UI primitives, bilingual EN/AR routing and booking, WhatsApp and email conversion flows across 8+ service routes.",
      "**Admin dashboard & CRM:** Built the clinics' operations panel spanning 22+ modules: role-based access control, doctors, branches, bookings on a calendar view, content management (blogs, offers, testimonials, landing pages), Chart.js analytics and Google Maps, with Redux Toolkit + Saga, TanStack Query, Ant Design, i18next RTL, Jest + Cypress and Docker.",
      "**Backend engineering:** Actively build and extend NestJS + PostgreSQL/TypeORM APIs powering these platforms: JWT/Passport auth, Stripe payments, Redis caching, S3 presigned uploads, Socket.io real-time messaging, rate limiting and Swagger-documented endpoints.",
      "**Delivery discipline:** Enforce quality gates with Husky and CommitLint, code review, performance budgets and Sentry monitoring across every codebase.",
    ],
  },
  {
    title: "Team Lead, Senior Mobile Engineer",
    company: "Pikes Soft",
    location: "Lahore, Pakistan",
    type: "On-site",
    period: "Feb 2025 to Present",
    current: true,
    bullets: [
      "Lead mobile application delivery across React Native and Flutter projects for iOS and Android, including ground-up rebuilds and product modernisation from planning through production deployment.",
      "**CI/CD:** Built and maintained pipelines on GitHub Actions and Bitrise to improve release speed and delivery consistency.",
      "**Integrations:** Implemented secure authentication, payment flows, analytics and third-party integrations across consumer and enterprise mobile products.",
      "**Leadership:** Drive performance optimisation, code reviews, sprint execution, release management and App Store submissions across cross-functional teams.",
    ],
  },
  {
    title: "Lead Mobile Engineer",
    company: "Pikes Soft",
    location: "Lahore, Pakistan",
    type: "On-site",
    period: "Jan 2024 to Jan 2025",
    bullets: [
      "Led ground-up rebuilds and modernisation of cross-platform mobile products with React Native and Flutter, focused on scalable architecture, reusable components and production-grade integrations.",
      "Delivered feature-rich applications with authentication, push notifications, payments, analytics and real-time engagement workflows.",
      "Improved mobile performance through profiling, optimisation and release hardening for Android and iOS.",
    ],
  },
  {
    title: "Software Engineer, Mobile App Development",
    company: "Pikes Soft",
    location: "Lahore, Pakistan",
    type: "On-site",
    period: "Sep 2021 to Dec 2023",
    bullets: [
      "Built and maintained mobile applications in healthcare and business productivity domains using React Native and TypeScript.",
      "Integrated Google Fit, Apple HealthKit, payment gateways, push notifications, crash monitoring and release automation to lift user experience and platform reliability.",
      "Contributed to scalable architecture, reusable UI systems and stable app releases for Android and iOS.",
    ],
  },
  {
    title: "Associate Software Engineer, Mobile App Development",
    company: "Pikes Soft",
    location: "Lahore, Pakistan",
    type: "On-site",
    period: "Sep 2020 to Aug 2021",
    bullets: [
      "Developed mobile features for workforce management and attendance products using React Native.",
      "Integrated QR scanning, facial recognition workflows, deep linking and reusable components for cross-platform use.",
      "Supported bug fixing, performance improvements and store deployment for early-stage mobile products.",
    ],
  },
];
