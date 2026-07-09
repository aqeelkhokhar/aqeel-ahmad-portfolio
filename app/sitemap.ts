import type { MetadataRoute } from "next";
import { personalInfo } from "@/data/personal";

const BASE_URL = personalInfo.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
