import type { MetadataRoute } from "next";
import { personalInfo } from "@/data/personal";

const BASE_URL = personalInfo.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
