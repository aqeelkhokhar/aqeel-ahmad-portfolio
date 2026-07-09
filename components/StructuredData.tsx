import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { education } from "@/data/education";
import { faq } from "@/data/faq";

const BASE_URL = personalInfo.siteUrl;

// One @graph with Person + WebSite + ProfilePage (+ FAQPage) so Google can
// connect the entity, the site and the page. The Person node is the anchor
// for name queries; knowsAbout carries the role phrases we target.
export function StructuredData() {
  const personId = `${BASE_URL}/#person`;
  const websiteId = `${BASE_URL}/#website`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: personalInfo.name,
    jobTitle: "Senior Mobile Engineer & Full-Stack Developer",
    description: personalInfo.metaDescription,
    url: BASE_URL,
    image: `${BASE_URL}${personalInfo.profileImage}`,
    email: `mailto:${personalInfo.email}`,
    telephone: `+${personalInfo.countryCode}${personalInfo.phone}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    alumniOf: education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.institution,
    })),
    sameAs: socialLinks.map((s) => s.href),
    knowsAbout: [
      "Mobile Development",
      "Mobile Engineering",
      "React Native Development",
      "Flutter Development",
      "Cross-Platform Mobile Development",
      "Native iOS Development (Swift)",
      "Native Android Development (Kotlin)",
      "Web Development",
      "Full-Stack Development",
      "React Native",
      "Flutter",
      "Expo",
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Mobile CI/CD",
      "App Store & Play Store Releases",
      "SEO & Core Web Vitals",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: BASE_URL,
    name: `${personalInfo.name} · Portfolio`,
    publisher: { "@id": personId },
    inLanguage: "en",
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${BASE_URL}/#profilepage`,
    url: BASE_URL,
    name: personalInfo.metaTitle,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
    inLanguage: "en",
  };

  const faqPage = faq.length
    ? {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  const data = {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage, ...(faqPage ? [faqPage] : [])],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
