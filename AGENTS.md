# Reglas del proyecto

## Idioma

Respondé **siempre en español rioplatense** (voseo: "tenés", "fijate", "armá"),
sin importar en qué idioma esté escrito el código o la pregunta.

Los comentarios en el código y los nombres de variables van en inglés.
El copy del sitio va en el idioma que corresponda a cada objeto de `lib/content.ts`.

## Antes de tocar nada

Leé `CONTEXTO.md`. Tiene las decisiones de producto ya tomadas y por qué.
No las revierta sin hablarlo primero.

## Convenciones

- **Todo el copy vive en `lib/content.ts`.** No metas texto suelto en los componentes.
  Si cambiás algo en el objeto `es`, actualizá el gemelo en `en`.
- Next.js 16 App Router + Tailwind v4. Sin librerías de UI: los componentes se
  escriben a mano.
- No agregues dependencias sin avisar. El proyecto tiene tres y es a propósito.
- No borres el bloque `FAQPage` de `lib/jsonld.ts` ni los user-agents de
  `app/robots.ts`: son la parte de SEO para motores de IA.
- Antes de dar algo por terminado, corré `npm run build`. Que compile no es opcional.

## Estilo de respuesta

Andá al grano. Si algo que te pido está mal planteado, decímelo antes de hacerlo.
