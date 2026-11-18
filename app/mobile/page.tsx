import type { Metadata } from "next";
import { TrackLanding } from "@/components/TrackLanding";
import { tracks } from "@/data/tracks";

const t = tracks.mobile;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: t.path },
  openGraph: { title: t.metaTitle, description: t.metaDescription, url: t.path, type: "profile" },
};

export default function MobilePage() {
  return <TrackLanding track={t} />;
}
