export type Lang = "es" | "en";

export const content = {
  es: {
    htmlLang: "es",
    brand: "Email Manager",
    altHref: "/en",
    altLabel: "EN",
    meta: {
      title: "Email Manager — El equipo que se hace cargo de tu Email Marketing",
      description:
        "Operación mensual de Email Marketing sobre Doppler: campañas, automations, segmentación, entregabilidad y transaccionales. Mesa de trabajo con QA y criterio senior.",
      keywords:
        "email marketing Doppler, agencia Doppler, automations Doppler, entregabilidad email, Doppler Relay, transaccionales, gestión de email marketing, soporte email marketing mensual",
    },
    nav: [
      { label: "Servicios", href: "#servicios" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Criterio senior", href: "#criterio" },
      { label: "Workspace", href: "#workspace" },
      { label: "Contacto", href: "#contacto" },
    ],
    navCta: "Contanos qué está pasando",

    hero: {
      eyebrow: "Operación de Email Marketing sobre Doppler",
      title:
        "El equipo que se hace cargo del Email Marketing que tu empresa nunca llega a hacer.",
      sub: "Campañas, automations, segmentación, entregabilidad y transaccionales. Todo lo que queda entre marketing, ventas y sistemas.",
      ctaPrimary: "Contanos qué está pasando",
      ctaSecondary: "Ver servicios",
      tagline:
        "Doppler-first. Procesos claros. Criterio senior donde importa.",
      stack: [
        "Doppler",
        "Doppler Relay",
        "Tiendanube",
        "Shopify",
        "VTEX",
        "WooCommerce",
        "GA4",
      ],
    },

    problem: {
      title: "El trabajo no siempre es grande. Pero igual necesita un dueño.",
      body: [
        "La newsletter que se atrasa dos semanas. El flow de carrito abandonado que nadie revisó desde que se armó. Los rebotes que vienen subiendo hace tres meses. La lista que se importó mal y ensució la reputación del dominio. El DKIM que quedó a medio configurar.",
        "Ninguna de esas tareas justifica contratar a alguien full-time. Todas juntas te están costando facturación.",
      ],
      pull: "Nosotros no vendemos horas. Vendemos que cada una de esas cosas tenga un responsable con nombre.",
    },

    services: {
      title: "Tres formas de trabajar con nosotros",
      intro:
        "La mayoría de los equipos empieza por la mesa de operación y suma las otras dos cuando el canal crece.",
      items: [
        {
          tag: "Recurrente",
          title: "Mesa de Operación",
          desc: "Trabajo recurrente para necesidades recurrentes. Tu canal de email deja de depender de que alguien se acuerde.",
          bullets: [
            "Armado, maquetado y envío de campañas",
            "Mantenimiento y versionado de plantillas",
            "Carga, limpieza y depuración de listas",
            "Segmentos dinámicos y de comportamiento",
            "QA completo antes de cada envío",
            "Reporte mensual con lectura, no solo métricas",
          ],
        },
        {
          tag: "Ownership",
          title: "Gestión Técnica y de Crecimiento",
          desc: "Para cuando necesitás que alguien sea dueño del canal completo, no solo de las tareas.",
          bullets: [
            "Arquitectura de automations y ciclo de vida",
            "Entregabilidad: SPF, DKIM, DMARC, reputación, warm-up",
            "Estrategia de segmentación y frecuencia",
            "Integración con e-commerce y CRM",
            "Auditoría de cuenta y roadmap trimestral",
            "Revisión senior de decisiones de riesgo",
          ],
        },
        {
          tag: "Scope cerrado",
          title: "Proyectos",
          desc: "Entregables definidos, con alcance y fecha. Empiezan y terminan.",
          bullets: [
            "Migración a Doppler desde otra plataforma",
            "Transaccionales con Doppler Relay (API / SMTP)",
            "Set de plantillas responsive y sistema de diseño",
            "Integración con Tiendanube, Shopify, VTEX o WooCommerce",
            "Recuperación de entregabilidad y reputación",
            "Rearmado completo de flows existentes",
          ],
        },
      ],
      note: "No publicamos una lista de precios. Cada cuenta tiene un volumen, un stack y un nivel de desorden distinto — el número sale después de entender el tuyo. Trabajamos con equipos que ya tienen la plataforma andando y envían de forma constante.",
    },

    how: {
      title: "Cómo funciona",
      intro:
        "El mismo camino para un cambio de dos líneas en una plantilla y para una migración completa. Cambia quién lo toma, no el proceso.",
      steps: [
        {
          n: "01",
          title: "Mandás el pedido",
          desc: "Por mail o desde el workspace. En tus palabras, sin formato obligatorio. Si no sabés cómo describirlo, mandá la captura.",
        },
        {
          n: "02",
          title: "Se aclara el camino",
          desc: "Antes de tocar nada definimos qué es, qué riesgo tiene y qué necesitamos de tu lado. Si falta contexto, preguntamos ahí — no a mitad del trabajo.",
        },
        {
          n: "03",
          title: "Alguien lo toma como dueño",
          desc: "El pedido queda asignado a una persona con nombre. No rota, no se pierde, no vuelve a la fila.",
        },
        {
          n: "04",
          title: "Se ejecuta con QA",
          desc: "Todo envío pasa por revisión: links, variables, render en cliente, segmento de destino, remitente y horario. El QA no es opcional.",
        },
        {
          n: "05",
          title: "Te queda el registro",
          desc: "Qué se hizo, quién lo hizo, qué se decidió y por qué. Dentro de seis meses vas a poder reconstruirlo sin llamar a nadie.",
        },
      ],
    },

    senior: {
      title: "Criterio senior donde importa",
      body: "Hay una capa senior detrás del modelo operativo, pero sin que cada tarea chica dependa de su tiempo. La diferencia está en cómo se clasifica el trabajo antes de empezarlo.",
      levels: [
        {
          label: "Rutinario",
          desc: "Pasa directo por la mesa de operación. Campañas, plantillas, segmentos, cargas de lista.",
        },
        {
          label: "Riesgoso",
          desc: "Recibe revisión extra antes de ejecutarse. Envíos masivos, cambios de DNS, migración de listas, transaccionales en producción, cualquier cosa que toque la reputación del dominio.",
        },
        {
          label: "Estratégico",
          desc: "Se trata como decisión de negocio, no como ticket. Frecuencia de contacto, arquitectura del ciclo de vida, cambio de plataforma, política de datos.",
        },
      ],
    },

    work: {
      title: "Situaciones con las que trabajamos",
      note: "Los casos con nombre y números se publican solo con aprobación del cliente. Mientras tanto, estas son las tres formas en las que más nos suelen llamar.",
      items: [
        {
          title: "Canal parado con base grande",
          problem:
            "Una base de decenas de miles de contactos que casi no se usa, con apertura en caída y miedo a enviar por no romper la reputación.",
          systems: ["Doppler", "Entregabilidad", "Segmentación", "DNS"],
          outcome:
            "Un plan de reactivación por etapas, con la infraestructura de envío ordenada antes del primer envío masivo.",
        },
        {
          title: "E-commerce sin ciclo de vida",
          problem:
            "La tienda vende, pero todo el email es promocional y manual. No hay bienvenida, ni carrito abandonado, ni post-compra.",
          systems: ["Doppler", "Tiendanube / Shopify", "Automations", "GA4"],
          outcome:
            "Una arquitectura de flows conectada a la tienda, con la operación diaria cubierta por la mesa.",
        },
        {
          title: "Transaccionales en manos de desarrollo",
          problem:
            "Los mails de compra, recupero de clave y notificaciones salen desde el servidor de la aplicación, sin plantillas ni métricas, y cada cambio requiere un deploy.",
          systems: ["Doppler Relay", "API / SMTP", "Plantillas", "Monitoreo"],
          outcome:
            "Transaccionales fuera del código de la aplicación, editables sin desarrollo y con visibilidad de entrega.",
        },
      ],
    },

    workspace: {
      title: "Un solo lugar para todo lo que pediste",
      body: "Los pedidos, los archivos y el contexto de tu cuenta viven juntos. Nada de reconstruir una decisión buscando en la cadena de mails.",
      bullets: [
        "Pedidos, archivos y contexto de cuenta en un mismo lugar",
        "Estado claro en todo momento, sin tener que preguntar",
        "Comentarios y decisiones atados al trabajo, no sueltos",
        "Visibilidad de qué pasó por revisión senior",
      ],
      demoTitle: "Campaña de reactivación — segmento inactivos 90d",
      states: ["Nuevo", "Triage", "En curso", "Revisión", "Listo"],
      activeState: 3,
      demoMeta: [
        ["Dueño", "Mesa de operación"],
        ["Riesgo", "Alto — envío masivo"],
        ["Revisión senior", "Requerida"],
      ],
    },

    contact: {
      title: "Contanos qué está pasando",
      body: "No hace falta que sepas cómo se llama el problema. Describí la situación y nosotros la ordenamos.",
      reassure: [
        "Lo leemos como contexto, no como formulario.",
        "Te responde una persona, no un autoresponder.",
        "Salís con un próximo paso claro, contrates o no.",
      ],
      fields: {
        name: "Nombre",
        company: "Empresa",
        email: "Email",
        site: "Sitio o tienda",
        helpType: "En qué necesitás ayuda",
        platform: "Plataforma de email actual",
        challenge: "Qué está pasando hoy",
        challengePlaceholder:
          "Contanos la situación con tus palabras. Qué te trajo hasta acá, qué ya intentaron y qué es lo que más urge.",
        listSize: "Tamaño de la base",
        sends: "Envíos por mes",
        urgency: "Urgencia",
        optional: "Opcional — ayuda, pero no es obligatorio",
        submit: "Enviar",
        sending: "Enviando…",
        success:
          "Listo. Lo leemos y te respondemos con un próximo paso concreto.",
        error: "No se pudo enviar. Escribinos directo a hola@emailmanager.tech",
      },
      helpTypeOptions: [
        "Operación mensual de campañas",
        "Automations y ciclo de vida",
        "Problemas de entregabilidad",
        "Migración a Doppler",
        "Transaccionales (Relay)",
        "Integración con mi e-commerce",
        "Todavía no sé",
      ],
      platformOptions: [
        "Doppler",
        "Mailchimp",
        "Klaviyo",
        "Brevo / Sendinblue",
        "ActiveCampaign",
        "HubSpot",
        "Envío propio / SMTP",
        "Ninguna todavía",
      ],
      urgencyOptions: ["Explorando", "Este trimestre", "Este mes", "Ya"],
    },

    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "No sé si lo que necesito es operación, proyecto o estrategia.",
          a: "Está bien. Esa clasificación es trabajo nuestro, no tuyo. Describí la situación y en la respuesta te decimos dónde encaja y por qué.",
        },
        {
          q: "¿Sirve para pedidos chicos?",
          a: "Sí, y de hecho es el corazón del modelo. Cambiar un bloque en una plantilla o corregir un segmento entra por el mismo camino que un proyecto grande. Lo que cambia es quién lo toma.",
        },
        {
          q: "¿Reemplazan a mi agencia de marketing?",
          a: "No. Ellos definen qué comunicar; nosotros nos hacemos cargo de que salga bien, a tiempo y sin romper nada. Trabajamos con agencias todo el tiempo.",
        },
        {
          q: "¿Todo pasa por revisión senior?",
          a: "No, y esa es la idea. Solo el trabajo riesgoso o estratégico. Si cada tarea chica dependiera del tiempo senior, el modelo no funcionaría para nadie.",
        },
        {
          q: "Trabajo con otra plataforma, no con Doppler.",
          a: "Podemos operar sobre otras plataformas, pero donde tenemos la profundidad y la certificación es en Doppler. Si tiene sentido migrar te lo decimos, y si no tiene sentido también.",
        },
        {
          q: "¿Cómo se cobra?",
          a: "La mesa de operación y la gestión técnica son abonos mensuales. Los proyectos se cotizan cerrados, con alcance y fecha. El número sale después de una conversación, no antes.",
        },
        {
          q: "¿Se puede parar el abono?",
          a: "Sí, con aviso de un mes. No hay permanencia mínima. Si el canal deja de justificar la inversión preferimos que nos lo digas antes que arrastrar un servicio que no rinde.",
        },
        {
          q: "Soy una agencia y quiero usar esto para mis clientes.",
          a: "Se puede, y varios lo hacen. Trabajamos como capa técnica detrás de tu marca, con la operación separada por cuenta.",
        },
      ],
    },

    footer: {
      tagline:
        "Socio operativo de Email Marketing para equipos que ya envían y necesitan que alguien se haga cargo.",
      umbrella: "Parte de Manager",
      cols: [
        {
          title: "Servicios",
          links: [
            { label: "Mesa de Operación", href: "#servicios" },
            { label: "Gestión Técnica", href: "#servicios" },
            { label: "Proyectos", href: "#servicios" },
          ],
        },
        {
          title: "Cómo trabajamos",
          links: [
            { label: "Proceso", href: "#como-funciona" },
            { label: "Criterio senior", href: "#criterio" },
            { label: "Workspace", href: "#workspace" },
          ],
        },
      ],
      closing:
        "Operación, proyectos y criterio senior de Email Marketing, con contexto desde el día uno.",
      legal: ["Privacidad", "Términos"],
    },
  },

  en: {
    htmlLang: "en",
    brand: "Email Manager",
    altHref: "/",
    altLabel: "ES",
    meta: {
      title: "Email Manager — The team behind your email marketing operation",
      description:
        "Monthly email marketing operations on Doppler: campaigns, automations, segmentation, deliverability and transactional email. A support desk with QA and senior judgment.",
      keywords:
        "Doppler email marketing agency, Doppler automations, email deliverability, Doppler Relay, transactional email, managed email marketing, monthly email marketing support",
    },
    nav: [
      { label: "Services", href: "#servicios" },
      { label: "How it works", href: "#como-funciona" },
      { label: "Senior judgment", href: "#criterio" },
      { label: "Workspace", href: "#workspace" },
      { label: "Contact", href: "#contacto" },
    ],
    navCta: "Tell us what is going on",

    hero: {
      eyebrow: "Email marketing operations on Doppler",
      title:
        "The team behind the email marketing your company never gets around to.",
      sub: "Campaigns, automations, segmentation, deliverability and transactional email. Everything that sits between marketing, sales and engineering.",
      ctaPrimary: "Tell us what is going on",
      ctaSecondary: "Explore services",
      tagline: "Doppler-first. Clear workflows. Senior judgment where it matters.",
      stack: [
        "Doppler",
        "Doppler Relay",
        "Tiendanube",
        "Shopify",
        "VTEX",
        "WooCommerce",
        "GA4",
      ],
    },

    problem: {
      title: "The work is not always big. But it still needs an owner.",
      body: [
        "The newsletter that slips two weeks. The abandoned-cart flow nobody has looked at since it was built. The bounce rate that has been climbing for three months. The list that was imported badly and hurt your domain reputation. The DKIM record that was left half configured.",
        "None of those tasks justifies a full-time hire. Together, they are costing you revenue.",
      ],
      pull: "We do not sell hours. We sell the fact that every one of those things has someone's name on it.",
    },

    services: {
      title: "Three ways to work with us",
      intro:
        "Most teams start with the support desk and add the other two as the channel grows.",
      items: [
        {
          tag: "Recurring",
          title: "Support Desk",
          desc: "Recurring work for recurring needs. Your email channel stops depending on someone remembering.",
          bullets: [
            "Campaign build, layout and send",
            "Template maintenance and versioning",
            "List import, cleaning and hygiene",
            "Dynamic and behavioural segments",
            "Full QA before every send",
            "Monthly report with a reading, not just metrics",
          ],
        },
        {
          tag: "Ownership",
          title: "Technology and Growth Partnership",
          desc: "For when you need someone to own the whole channel, not just the tasks.",
          bullets: [
            "Automation and lifecycle architecture",
            "Deliverability: SPF, DKIM, DMARC, reputation, warm-up",
            "Segmentation and frequency strategy",
            "Ecommerce and CRM integration",
            "Account audit and quarterly roadmap",
            "Senior review on risk decisions",
          ],
        },
        {
          tag: "Fixed scope",
          title: "Projects",
          desc: "Defined deliverables, with a scope and a date. They start and they finish.",
          bullets: [
            "Migration to Doppler from another platform",
            "Transactional email with Doppler Relay (API / SMTP)",
            "Responsive template set and design system",
            "Integration with Tiendanube, Shopify, VTEX or WooCommerce",
            "Deliverability and reputation recovery",
            "Full rebuild of existing flows",
          ],
        },
      ],
      note: "We do not publish a price list. Every account has a different volume, stack and level of mess — the number comes after we understand yours. We work with teams that already have the platform running and send consistently.",
    },

    how: {
      title: "How it works",
      intro:
        "The same path for a two-line template change and for a full migration. What changes is who owns it, not the process.",
      steps: [
        {
          n: "01",
          title: "Send the request",
          desc: "By email or from the workspace. In your own words, no required format. If you cannot describe it, send the screenshot.",
        },
        {
          n: "02",
          title: "Clarify the path",
          desc: "Before touching anything we define what it is, what risk it carries and what we need from your side. If context is missing we ask then — not halfway through.",
        },
        {
          n: "03",
          title: "Someone owns it",
          desc: "The request is assigned to a named person. It does not rotate, get lost, or go back in the queue.",
        },
        {
          n: "04",
          title: "Work happens with QA",
          desc: "Every send goes through review: links, variables, client rendering, target segment, sender and timing. QA is not optional.",
        },
        {
          n: "05",
          title: "You get the record",
          desc: "What was done, who did it, what was decided and why. Six months from now you will be able to reconstruct it without calling anyone.",
        },
      ],
    },

    senior: {
      title: "Senior judgment where it matters",
      body: "A senior layer sits behind the operating model, without making every small task depend on senior time. The difference is in how work gets classified before it starts.",
      levels: [
        {
          label: "Routine",
          desc: "Goes straight through the support desk. Campaigns, templates, segments, list imports.",
        },
        {
          label: "Risky",
          desc: "Gets extra review before it runs. Bulk sends, DNS changes, list migrations, transactional email in production, anything that touches domain reputation.",
        },
        {
          label: "Strategic",
          desc: "Treated as a business decision, not a ticket. Contact frequency, lifecycle architecture, platform change, data policy.",
        },
      ],
    },

    work: {
      title: "Situations we work with",
      note: "Named cases with numbers are published only with client approval. In the meantime, these are the three ways people usually reach us.",
      items: [
        {
          title: "Dormant channel, large list",
          problem:
            "Tens of thousands of contacts that barely get used, open rates falling, and fear of sending in case it breaks reputation.",
          systems: ["Doppler", "Deliverability", "Segmentation", "DNS"],
          outcome:
            "A staged reactivation plan, with sending infrastructure sorted out before the first bulk send.",
        },
        {
          title: "Ecommerce with no lifecycle",
          problem:
            "The store sells, but all email is promotional and manual. No welcome, no abandoned cart, no post-purchase.",
          systems: ["Doppler", "Tiendanube / Shopify", "Automations", "GA4"],
          outcome:
            "A flow architecture connected to the store, with daily operations covered by the desk.",
        },
        {
          title: "Transactional email stuck in engineering",
          problem:
            "Purchase, password reset and notification emails go out from the application server, with no templates or metrics, and every change needs a deploy.",
          systems: ["Doppler Relay", "API / SMTP", "Templates", "Monitoring"],
          outcome:
            "Transactional email out of the application code, editable without engineering and with delivery visibility.",
        },
      ],
    },

    workspace: {
      title: "One place for everything you asked for",
      body: "Requests, files and account context live together. No reconstructing a decision by digging through an email thread.",
      bullets: [
        "Requests, files and account context in one place",
        "Clear status at all times, without having to ask",
        "Comments and decisions tied to the work, not floating",
        "Visibility into what went through senior review",
      ],
      demoTitle: "Reactivation campaign — 90d inactive segment",
      states: ["New", "Triage", "In progress", "Review", "Done"],
      activeState: 3,
      demoMeta: [
        ["Owner", "Support desk"],
        ["Risk", "High — bulk send"],
        ["Senior review", "Required"],
      ],
    },

    contact: {
      title: "Tell us what is going on",
      body: "You do not need to know what the problem is called. Describe the situation and we will sort it out.",
      reassure: [
        "We read it like context, not a form.",
        "A person replies, not an autoresponder.",
        "You leave with a clear next step, whether you hire us or not.",
      ],
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        site: "Website or store",
        helpType: "What you need help with",
        platform: "Current email platform",
        challenge: "What is happening today",
        challengePlaceholder:
          "Tell us the situation in your own words. What brought you here, what you have already tried, and what is most urgent.",
        listSize: "List size",
        sends: "Sends per month",
        urgency: "Urgency",
        optional: "Optional — helpful, but not required",
        submit: "Send",
        sending: "Sending…",
        success: "Got it. We will read it and reply with a concrete next step.",
        error: "Could not send. Write to us at hola@emailmanager.tech",
      },
      helpTypeOptions: [
        "Monthly campaign operations",
        "Automations and lifecycle",
        "Deliverability problems",
        "Migration to Doppler",
        "Transactional email (Relay)",
        "Integration with my ecommerce",
        "Not sure yet",
      ],
      platformOptions: [
        "Doppler",
        "Mailchimp",
        "Klaviyo",
        "Brevo / Sendinblue",
        "ActiveCampaign",
        "HubSpot",
        "Own SMTP",
        "None yet",
      ],
      urgencyOptions: ["Exploring", "This quarter", "This month", "Now"],
    },

    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "I am not sure if I need operations, a project or strategy.",
          a: "That is fine. Classifying it is our job, not yours. Describe the situation and we will tell you where it fits and why.",
        },
        {
          q: "Is this suitable for small requests?",
          a: "Yes, and it is the heart of the model. Changing a block in a template or fixing a segment enters through the same path as a big project. What changes is who owns it.",
        },
        {
          q: "Do you replace my marketing agency?",
          a: "No. They define what to communicate; we make sure it goes out well, on time, and without breaking anything. We work alongside agencies all the time.",
        },
        {
          q: "Does everything go through senior review?",
          a: "No, and that is the point. Only risky or strategic work. If every small task depended on senior time, the model would not work for anyone.",
        },
        {
          q: "I use another platform, not Doppler.",
          a: "We can operate on other platforms, but Doppler is where we have the depth and the certification. If migrating makes sense we will tell you, and if it does not we will tell you that too.",
        },
        {
          q: "How do you charge?",
          a: "The support desk and the technology partnership are monthly retainers. Projects are quoted as a fixed scope with a date. The number comes after a conversation, not before.",
        },
        {
          q: "Can the retainer be stopped?",
          a: "Yes, with one month's notice. There is no minimum term. If the channel stops justifying the investment we would rather you tell us than carry a service that is not paying off.",
        },
        {
          q: "I am an agency and want to use this for my clients.",
          a: "You can, and several do. We work as a technical layer behind your brand, with operations separated per account.",
        },
      ],
    },

    footer: {
      tagline:
        "Email marketing operations partner for teams that already send and need someone to own it.",
      umbrella: "Part of Manager",
      cols: [
        {
          title: "Services",
          links: [
            { label: "Support Desk", href: "#servicios" },
            { label: "Technology Partnership", href: "#servicios" },
            { label: "Projects", href: "#servicios" },
          ],
        },
        {
          title: "How we work",
          links: [
            { label: "Process", href: "#como-funciona" },
            { label: "Senior judgment", href: "#criterio" },
            { label: "Workspace", href: "#workspace" },
          ],
        },
      ],
      closing:
        "Operations, projects and senior email marketing judgment, with context from day one.",
      legal: ["Privacy", "Terms"],
    },
  },
} as const;

export type Content = (typeof content)[Lang];
