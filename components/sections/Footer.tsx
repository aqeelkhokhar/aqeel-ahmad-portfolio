import { Heart } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          Built with <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> using Next.js,
          deployed on Vercel
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
