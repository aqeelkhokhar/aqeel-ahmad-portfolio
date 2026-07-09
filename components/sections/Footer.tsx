import { personalInfo } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container flex flex-col items-start justify-between gap-2 py-6 sm:flex-row sm:items-center">
        <div className="label-mono text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name} · All rights reserved
        </div>
        <div className="label-mono text-muted-foreground/70">
          Built with Next.js · Shipped on Vercel
        </div>
      </div>
    </footer>
  );
}
