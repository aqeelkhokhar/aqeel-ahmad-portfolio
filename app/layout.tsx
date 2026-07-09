import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BookingProvider } from "@/components/BookingProvider";
import { MotionProvider } from "@/components/MotionProvider";
import { StructuredData } from "@/components/StructuredData";
import { personalInfo } from "@/data/personal";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: personalInfo.metaTitle,
  description: personalInfo.metaDescription,
  metadataBase: new URL(personalInfo.siteUrl),
  alternates: { canonical: "/" },
  applicationName: `${personalInfo.name} · Portfolio`,
  creator: personalInfo.name,
  category: "technology",
  keywords: [
    "Aqeel Ahmad",
    "Mobile Developer",
    "Mobile Engineer",
    "Senior Mobile Engineer",
    "React Native Developer",
    "React Native Engineer",
    "Flutter Developer",
    "Cross Platform Developer",
    "Native Android Developer",
    "Native iOS Developer",
    "Web Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Hire React Native Developer",
    "Freelance Mobile Developer",
    "Remote Mobile Developer",
    "Mobile App Development",
    "NestJS",
    "TypeScript",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.siteUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to verify Search
  // Console without editing code.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    title: personalInfo.metaTitle,
    description: personalInfo.metaDescription,
    type: "profile",
    url: "/",
    siteName: `${personalInfo.name} · Portfolio`,
    locale: "en_US",
    images: [
      {
        url: "/og/og.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name}, Senior Mobile Engineer and Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: personalInfo.metaTitle,
    description: personalInfo.metaDescription,
    images: ["/og/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#14110f" },
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hanken.variable} ${bricolage.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans">
        {/* Gates data-reveal hiding on JS being available; runs before paint
            so scroll-reveal content never flashes and no-JS stays readable. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute("data-js","")`,
          }}
        />
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MotionProvider>
            <BookingProvider>{children}</BookingProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
