/**
 * URL canónica del sitio. La leen el sitemap, el robots, el metadataBase
 * y el structured data, así que tiene que salir de un solo lugar: si estos
 * cuatro no coinciden, los crawlers ven un canonical que contradice al
 * sitemap y ninguno de los dos gana.
 *
 * Orden de resolución:
 *
 *  1. NEXT_PUBLIC_SITE_URL — el override explícito. Es lo que hay que setear
 *     en Vercel el día que exista el dominio real. Gana sobre todo lo demás.
 *
 *  2. VERCEL_PROJECT_PRODUCTION_URL — Vercel la inyecta sola en cada build y
 *     siempre apunta al dominio de producción del proyecto, no al deploy
 *     individual. Sin esto habría que acordarse de actualizar una env var a
 *     mano cada vez que cambia la URL del proyecto.
 *
 *  3. localhost — solo para `npm run dev`. Es deliberado que el fallback sea
 *     un local roto y no un dominio inventado: un dominio que no existe en el
 *     canonical le pide a Google que no indexe el sitio, y eso falla en
 *     silencio. Esto se nota.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const SITE = resolveSiteUrl();
