import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { content } from "@/lib/content";
import { jsonLd } from "@/lib/jsonld";

const c = content.en;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  keywords: c.meta.keywords,
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    title: c.meta.title,
    description: c.meta.description,
    locale: "en_US",
    type: "website",
    url: "/en",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd("en")) }}
      />
      <Landing lang="en" />
    </>
  );
}
