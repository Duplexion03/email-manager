# Email Manager — landing

Next.js 16 (App Router) + Tailwind v4. Bilingüe ES/EN. Pensado para deploy en Vercel.

## Correr local

```bash
npm install
npm run dev      # http://localhost:3000  (ES)  ·  /en  (EN)
```

## Estructura

```
lib/content.ts        <- TODO el copy, ES y EN. Es el único archivo que se toca para cambiar textos.
lib/jsonld.ts         <- Structured data (Organization, Service, FAQPage) para SEO y motores de IA.
components/Landing.tsx <- Todas las secciones. Se comparte entre ES y EN.
components/ContactForm.tsx
components/FAQ.tsx
app/page.tsx          <- ES  (/)
app/en/page.tsx       <- EN  (/en)
app/api/contact/route.ts <- Endpoint del formulario. HOY SOLO LOGUEA. Ver abajo.
app/robots.ts         <- Permite explícitamente GPTBot, PerplexityBot, ClaudeBot, OAI-SearchBot.
app/sitemap.ts
```

## Para replicar en E-commerce

Copiar el repo, reemplazar `lib/content.ts` y los colores en `app/globals.css`.
La estructura de componentes no cambia.

## Deploy en Vercel

1. `git init && git add . && git commit -m "init"` y push a un repo nuevo.
2. Importar el repo en Vercel. No hace falta configurar nada del build.
3. Variables de entorno:
   - `NEXT_PUBLIC_SITE_URL` = `https://emailmanager.tech` (o el dominio final)
   - `LEADS_TO_EMAIL` y `RELAY_API_KEY` cuando se conecte el formulario.
4. Apuntar el dominio.

## Pendiente antes de salir a producción

- [ ] **Conectar el formulario.** `app/api/contact/route.ts` valida y loguea, no envía nada.
      Lo natural es mandarlo con Doppler Relay — vendemos eso, conviene usarlo.
- [ ] Dominio y mail real (hoy dice `hola@emailmanager.tech` en el mensaje de error).
- [ ] Página de Privacidad y Términos (el footer ya las lista, todavía no linkean).
- [ ] Client Login (cuando exista el workspace de tickets).
- [ ] Badge de certificación Doppler, si se saca la de Academy.
- [ ] OG image (`app/opengraph-image.tsx`).
