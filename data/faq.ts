import type { FaqItem } from "./types";

// Answers double as SEO content: each one naturally carries the role
// keywords the site targets (mobile developer, React Native developer,
// Flutter developer, native iOS and Android, web and full stack developer).
// The FAQ section auto-hides when this array is empty, and the same data
// feeds the FAQPage JSON-LD in StructuredData.
export const faq: FaqItem[] = [
  {
    question: "What kind of mobile developer are you?",
    answer:
      "I am a senior cross platform mobile engineer. I build iOS and Android apps with React Native and Flutter, and I write native modules in Swift and Kotlin when a feature needs platform depth. In 6+ years as a mobile developer I have shipped 14+ products to the App Store, Google Play and Huawei AppGallery.",
  },
  {
    question: "Should my product use React Native or Flutter?",
    answer:
      "Either can be the right call, and I work at a senior level in both. As a React Native developer and a Flutter developer I recommend based on your roadmap, your team skills and your performance needs, not my preference. On a discovery call you will get a clear, honest read within 20 minutes.",
  },
  {
    question: "Do you handle native iOS and native Android work?",
    answer:
      "Yes. I develop native modules in Swift as a native iOS developer and in Kotlin as a native Android developer, integrate platform APIs such as NFC, HealthKit and Google Fit, and own code signing, store compliance and releases on both platforms end to end.",
  },
  {
    question: "Do you also work as a web or full stack developer?",
    answer:
      "Yes. Alongside mobile I work as a full stack developer on production web platforms: Next.js and React on the frontend, NestJS and PostgreSQL on the backend, with payments, real time features, bilingual English and Arabic support and technical SEO included.",
  },
  {
    question: "How do engagements usually start?",
    answer:
      "With a free 20 minute discovery call. From there most clients pick one of three shapes: a fixed scope MVP build of 8 to 12 weeks, an ongoing mobile tech lead engagement, or a short CI/CD and release hardening sprint.",
  },
  {
    question: "Do you work with remote and international clients?",
    answer:
      "Yes. I work remotely from Lahore, Pakistan (GMT+5) with startups and product teams across the Gulf region, Europe and North America, and I keep a generous overlap with your working hours. Communication runs through whatever your team already uses.",
  },
];
