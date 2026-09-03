import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emailmanager.tech";

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
