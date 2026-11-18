import { Fragment } from "react";
import { projects } from "@/data/projects";

// Ambient marquee of real shipped releases. Pure CSS (no hydration), pauses
// on hover, and reduced motion freezes it via the global media query.
// aria-hidden: every title also appears in the Projects ledger below.
export function ReleaseTicker() {
  const items = projects.map((p) => ({ title: p.title, period: p.period.split(" to ")[0] }));

  const run = (
    <div className="flex w-max items-center">
      {items.map((item, i) => (
        <Fragment key={`${item.title}-${i}`}>
          <span className="label-mono flex items-center gap-3 whitespace-nowrap px-7 py-3.5 text-muted-foreground">
            <span className="h-1.5 w-1.5 flex-shrink-0 bg-primary" aria-hidden="true" />
            {item.title}
            <span className="text-muted-foreground/50">{item.period}</span>
          </span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div aria-hidden="true" className="ticker-wrap overflow-hidden border-b border-border bg-background">
      <div className="ticker flex w-max">
        {run}
        {run}
      </div>
    </div>
  );
}
