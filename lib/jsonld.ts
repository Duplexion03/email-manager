import { content, type Lang } from "./content";
import { SITE } from "./site";

/**
 * Structured data. Two jobs:
 *  1) Classic rich results (Organization, Service, FAQPage).
 *  2) Giving answer engines (ChatGPT, Perplexity, Google AI Overviews)
 *     an unambiguous, quotable description of what is sold and to whom.
 *     The FAQPage block is the single highest-leverage piece for that —
 *     it is literally question/answer pairs in machine-readable form.
 */
export function jsonLd(lang: Lang) {
  const c = content[lang];
  const url = lang === "es" ? SITE : `${SITE}/en`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#org`,
        name: c.brand,
        url: SITE,
        description: c.meta.description,
        parentOrganization: { "@type": "Organization", name: "Manager" },
        areaServed: ["AR", "UY", "CL", "MX", "CO", "ES", "US"],
        knowsAbout: [
          "Email marketing",
          "Doppler",
          "Doppler Relay",
          "Marketing automation",
          "Email deliverability",
          "SPF",
          "DKIM",
          "DMARC",
          "Transactional email",
          "Lifecycle marketing",
          "Ecommerce email",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: c.brand,
        inLanguage: c.htmlLang,
        publisher: { "@id": `${SITE}/#org` },
      },
      {
        "@type": "Service",
        "@id": `${url}/#service`,
        name: c.brand,
        serviceType: "Email marketing operations",
        provider: { "@id": `${SITE}/#org` },
        description: c.meta.description,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: c.services.title,
          itemListElement: c.services.items.map((s) => ({
            "@type": "OfferCatalog",
            name: s.title,
            description: s.desc,
            itemListElement: s.bullets.map((b) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: b },
            })),
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: c.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
