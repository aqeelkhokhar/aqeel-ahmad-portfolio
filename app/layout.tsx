import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BookingProvider } from "@/components/BookingProvider";
import { personalInfo } from "@/data/personal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  title: `${personalInfo.name} · ${personalInfo.title}`,
  description: personalInfo.tagline,
  metadataBase: new URL("https://aqeel-portfolio.vercel.app"),
  openGraph: {
    title: `${personalInfo.name} · ${personalInfo.title}`,
    description: personalInfo.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} · ${personalInfo.title}`,
    description: personalInfo.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <BookingProvider>{children}</BookingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
