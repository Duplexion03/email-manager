# Contexto del proyecto — leer antes de tocar nada

Este archivo existe para que cualquier agente (Antigravity, Claude Code, el que sea)
pueda retomar el trabajo sin que Tomas tenga que explicar todo de nuevo.

---

## Qué es esto

Landing de **Email Manager**, la primera de tres verticales productizadas que Manager
(Diego Papatino + Tomas Olmedo) va a lanzar. Las otras dos son E-commerce y CRM.

El modelo se copia de `rubaru.tech` (el sitio de Andrés), que ya funciona: vende
**propiedad de la tarea**, no horas. Tres niveles de servicio, formulario de intake
largo en lugar de precios, y un sistema de tickets con estados visibles.

La vertical de Email Marketing opera sobre **Doppler** (incluido Doppler Relay para
transaccionales).

## Decisiones ya tomadas — no volver a discutirlas sin hablar con Tomas

| Decisión | Por qué |
|---|---|
| **Sin precios publicados** | El ticket objetivo es 300–550 USD/mes. Publicar el piso ancla a todos en 300 y deja sin margen para cotizar arriba. El filtro se hace con el copy ("equipos que ya tienen la plataforma andando") y en la conversación post-formulario. |
| **Tres dominios separados**, no un sitio con tres páginas | Decisión de Tomas. Permite vender o separar una vertical más adelante. Contra conocida: divide la autoridad de dominio en tres, lo que cuesta caro para el objetivo de SEO en motores de IA. Si en unos meses no arranca, la salida es consolidar bajo un dominio con redirects. |
| **Un solo repo, tres proyectos de Vercel** | Los componentes se escriben una vez. Cada vertical se deploya a su dominio. |
| **ES + EN desde el arranque** | Doppler es LATAM, pero el ticket se cobra en USD. |
| **Vercel, no Hosting.com** | Flujo de push y control de versiones. Discutido y cerrado con Diego. |
| **CRM pospuesto** | Es la vertical más lejana. El orden es Email → E-commerce → CRM. |

## Estructura

```
lib/content.ts          TODO el copy, objetos gemelos `es` y `en`.
                        Es el único archivo que se toca para cambiar textos.
                        Si cambiás uno, actualizá el gemelo.
lib/jsonld.ts           Structured data: Organization, Service, FAQPage.
                        El bloque FAQPage es la pieza de más peso para que
                        ChatGPT / Perplexity citen el sitio. No borrarlo.
components/Landing.tsx  Todas las secciones. Compartido entre ES y EN.
components/ContactForm.tsx
components/FAQ.tsx
app/page.tsx            ES  (/)
app/en/page.tsx         EN  (/en)
app/api/contact/route.ts  Endpoint del formulario. HOY SOLO VALIDA Y LOGUEA.
app/robots.ts           Habilita explícitamente GPTBot, PerplexityBot,
                        ClaudeBot, OAI-SearchBot.
app/sitemap.ts
```

Stack: Next.js 16 (App Router, Turbopack) + Tailwind v4. Sin librerías de UI.

## Estado actual

- Build verificado, corre en local con `npm run dev`.
- Copy completo en ES y EN, primera versión, **sin revisar por Diego todavía**.
- Todavía **no** está en GitHub ni en Vercel.

## Pendientes, en orden

1. **Cargar las credenciales de Doppler Relay en Vercel.** El formulario ya
   manda por Relay a `info@manegit.com`, pero faltan `RELAY_API_KEY`,
   `RELAY_ACCOUNT_ID` y `RELAY_FROM_EMAIL`. **Hasta que estén, ningún lead
   sale por mail**: el endpoint devuelve 503 y el formulario dice "escribinos
   directo". Los leads quedan igual en los logs de Vercel, buscando `[lead]`.
   Ojo con `RELAY_FROM_EMAIL`: tiene que ser de un dominio autenticado dentro
   de la cuenta de Relay, si no Relay rechaza el envío.
2. ~~Repo + Vercel.~~ Hecho. `github.com/Duplexion03/email-manager` →
   `email-manager-xi.vercel.app`. Push a `main` redeploya solo.
   `NEXT_PUBLIC_SITE_URL` no hace falta: `lib/site.ts` lee la URL que Vercel
   inyecta sola. Setearla solo cuando exista el dominio real.
3. **Dominio.** Todavía no hay uno propio. El mail de contacto ya es
   `info@manegit.com` y no queda ningún `emailmanager.tech` en el código.
4. **Privacidad y Términos.** El footer ya las lista pero no linkean a nada.
5. **Certificación de Doppler Academy** (es gratuita) para poner el badge.
   Es la única prueba social disponible hasta que haya un caso aprobado.
6. **OG image** (`app/opengraph-image.tsx`).
7. **Replicar a E-commerce**: copiar el repo, reemplazar `lib/content.ts`
   y los colores en `app/globals.css`. La estructura de componentes no cambia.
   Jonathan lleva el liderazgo técnico de esa vertical.

## Investigación pendiente, aparte del código

Tomas tiene asignado investigar el sistema de tickets y el backend técnico que usa
Andrés en Rubaru. El mockup del workspace en la landing (estados Nuevo → Triage →
En curso → Revisión → Listo) es por ahora **solo una imagen**: no hay sistema atrás.
