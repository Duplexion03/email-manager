import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE,
      lastModified: now,
      priority: 1,
      alternates: { languages: { es: SITE, en: `${SITE}/en` } },
    },
    {
      url: `${SITE}/en`,
      lastModified: now,
      priority: 0.9,
      alternates: { languages: { es: SITE, en: `${SITE}/en` } },
    },
  ];
}
