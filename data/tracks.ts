export type TrackLandingData = {
  path: "/mobile" | "/frontend";
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  proof: { value: string; label: string }[];
  buildTitle: string;
  builds: string[];
  stack: string[];
  projectSlugs: string[];
  cvHref: string;
  cvLabel: string;
  other: { href: "/mobile" | "/frontend"; label: string };
};

export const tracks: Record<"mobile" | "frontend", TrackLandingData> = {
  mobile: {
    path: "/mobile",
    metaTitle: "Senior Mobile Engineer for React Native, Expo and Flutter Apps | Aqeel Ahmad",
    metaDescription:
      "Hire a senior mobile engineer for React Native, Expo and Flutter. 15+ production apps live on the App Store and Google Play, including a patient app with 100K+ downloads. Remote from Lahore, UTC+5.",
    eyebrow: "Mobile · React Native · Expo · Flutter",
    headline: "Mobile apps that ship to the stores and stay stable.",
    intro:
      "I am a senior mobile engineer and team lead with 7+ years of shipping React Native, Expo and Flutter apps for FinTech, healthcare, real estate, IoT and VPN products. I own architecture, CI/CD and store releases, write native Swift and Kotlin modules where the bridge is not enough, and ship AI features with the OpenAI and Gemini APIs.",
    proof: [
      { value: "7+", label: "Years shipping mobile apps" },
      { value: "15+", label: "Production apps and platforms" },
      { value: "100K+", label: "Downloads on one patient app" },
      { value: "3", label: "Stores: App Store, Google Play, AppGallery" },
    ],
    buildTitle: "What I build",
    builds: [
      "Consumer and enterprise apps in React Native, Expo and Flutter, from first commit to store release",
      "Payments, identity and security: Stripe, Apple Pay, Google Pay, biometrics, certificate pinning",
      "Real-time features: video visits, chat, push notifications, geofenced attendance, IoT dashboards",
      "Native modules in Swift and Kotlin, plus open source libraries for React Native",
      "CI/CD on GitHub Actions and Bitrise, code signing, OTA updates and staged rollouts",
      "English and Arabic apps with RTL layouts",
    ],
    stack: [
      "React Native",
      "Expo",
      "Flutter",
      "TypeScript",
      "Swift",
      "Kotlin",
      "Redux Toolkit",
      "TanStack Query",
      "Firebase",
      "Stripe",
      "GitHub Actions",
      "Bitrise",
    ],
    projectSlugs: [
      "fintech-gifting-app",
      "hospital-patient-app",
      "clinic-group-patient-app",
      "real-estate-field-agent-crm",
      "civic-education-app",
      "consumer-vpn-app",
      "telemedicine-app",
      "healthcare-provider-app",
      "iot-air-quality-app",
      "sports-booking-app",
      "isp-self-service-app",
      "nfc-controller",
      "rn-highlight-text-view",
      "rn-layout-transfarmer",
    ],
    cvHref: "/cv/Aqeel-Ahmad-Senior-Mobile-Engineer.pdf",
    cvLabel: "Download the mobile CV",
    other: { href: "/frontend", label: "Need a web frontend engineer instead?" },
  },
  frontend: {
    path: "/frontend",
    metaTitle: "Senior Frontend Engineer for React, Next.js and TypeScript | Aqeel Ahmad",
    metaDescription:
      "Hire a senior frontend engineer for React, Next.js and TypeScript: admin dashboards, CMS platforms and bilingual English and Arabic sites. Remote from Lahore, UTC+5.",
    eyebrow: "Frontend · React · Next.js · TypeScript",
    headline: "Frontends, dashboards and CMS platforms that teams rely on.",
    intro:
      "I am a senior software engineer and team lead with 7+ years of shipping React and TypeScript products for clients in Europe, North America and the Gulf. I build Next.js frontends, admin dashboards and CMS platforms, from React tools used by 2,000+ staff at a Saudi hospital group to a US platform that trains AI agents. I lead a team of 7 engineers.",
    proof: [
      { value: "7+", label: "Years shipping React products" },
      { value: "2,000+", label: "People on admin and CMS platforms I built" },
      { value: "11", label: "Web platforms and sites listed below" },
      { value: "WCAG 2.2 AA", label: "Accessibility checked in CI on every route" },
    ],
    buildTitle: "What I build",
    builds: [
      "Next.js frontends with SSR, SSG and Server Components, built for SEO and Core Web Vitals",
      "Admin dashboards and CMS platforms with role-based access, charts and real-time features",
      "Headless CMS sites on Sanity with typed content that editors publish without developers",
      "Bilingual English and Arabic interfaces with RTL layouts",
      "Forms, tables and data layers with React Hook Form, Zod and TanStack Query",
      "Accessibility, unit and end-to-end tests with Playwright, Vitest and React Testing Library",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Ant Design",
      "TanStack Query",
      "Redux Toolkit",
      "Zustand",
      "Sanity",
      "Playwright",
      "Vitest",
    ],
    projectSlugs: [
      "gifting-web-storefront",
      "clinics-patient-portal",
      "clinics-admin-crm",
      "gulf-industrial-website",
      "ai-training-health-platform",
      "sales-crm-platform",
      "multi-tenant-sales-platform",
      "hr-payroll-platform-console",
      "hospital-patient-app-cms",
      "hospital-attendance-admin-portal",
      "biomedical-operations-web-app",
    ],
    cvHref: "/cv/Aqeel-Ahmad-Senior-Software-Engineer-Frontend.pdf",
    cvLabel: "Download the frontend CV",
    other: { href: "/mobile", label: "Need a mobile engineer instead?" },
  },
};
