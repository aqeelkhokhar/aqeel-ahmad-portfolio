import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";

const BASE_URL = "https://aqeel-portfolio.vercel.app";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: BASE_URL,
    email: `mailto:${personalInfo.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    sameAs: socialLinks.map((s) => s.href),
    knowsAbout: [
      "React Native",
      "Flutter",
      "Expo",
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Mobile CI/CD",
      "SEO & Core Web Vitals",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
