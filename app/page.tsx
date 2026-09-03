import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { content } from "@/lib/content";
import { jsonLd } from "@/lib/jsonld";

const c = content.es;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  keywords: c.meta.keywords,
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    title: c.meta.title,
    description: c.meta.description,
    locale: "es_AR",
    type: "website",
    url: "/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd("es")) }}
      />
      <Landing lang="es" />
    </>
  );
}
