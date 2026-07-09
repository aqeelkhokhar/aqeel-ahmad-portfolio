import type { Metadata } from "next";
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
  title: `${personalInfo.name} · ${personalInfo.title}`,
  description: personalInfo.tagline,
  metadataBase: new URL("https://aqeel-portfolio.vercel.app"),
  alternates: { canonical: "/" },
  keywords: [
    "React Native developer",
    "Flutter developer",
    "Next.js developer",
    "Full-stack engineer",
    "Mobile app development",
    "Senior mobile engineer",
    "NestJS",
    "TypeScript",
  ],
  authors: [{ name: personalInfo.name }],
  robots: { index: true, follow: true },
  openGraph: {
    title: `${personalInfo.name} · ${personalInfo.title}`,
    description: personalInfo.tagline,
    type: "website",
    url: "/",
    siteName: personalInfo.name,
    images: [{ url: "/og/og.png", width: 1200, height: 630, alt: personalInfo.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} · ${personalInfo.title}`,
    description: personalInfo.tagline,
    images: ["/og/og.png"],
  },
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
