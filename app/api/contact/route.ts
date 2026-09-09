import { NextResponse } from "next/server";
import { relayConfig, sendViaRelay } from "@/lib/relay";

/**
 * Intake endpoint. Validates the lead, then emails it to the team via
 * Doppler Relay.
 *
 * Env vars: RELAY_API_KEY, RELAY_ACCOUNT_ID, RELAY_FROM_EMAIL,
 *           RELAY_FROM_NAME (optional), LEADS_TO_EMAIL (defaults to
 *           info@manegit.com).
 *
 * The lead is always logged before we try to send. If Relay is down or not
 * configured, the submission is still recoverable from the platform logs and
 * the visitor is told to write directly — which is honest. Returning ok:true
 * on a failed send would be the one genuinely unrecoverable outcome: the
 * person believes they contacted us and nobody ever sees it.
 *
 * The labels below are internal ops copy, never rendered on the site, so they
 * deliberately live here and not in lib/content.ts (which is the bilingual
 * site copy and would imply these need an EN twin).
 */

const REQUIRED = ["name", "company", "email", "helpType", "challenge"] as const;

/** Rendered in this order. Anything not listed is ignored. */
const FIELDS: ReadonlyArray<readonly [key: string, label: string]> = [
  ["name", "Nombre"],
  ["company", "Empresa"],
  ["email", "Email"],
  ["site", "Sitio o tienda"],
  ["helpType", "Necesita ayuda en"],
  ["platform", "Plataforma actual"],
  ["challenge", "Qué está pasando"],
  ["listSize", "Tamaño de la base"],
  ["sends", "Envíos por mes"],
  ["urgency", "Urgencia"],
];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function str(body: Record<string, unknown>, key: string): string {
  const v = body[key];
  return typeof v === "string" ? v.trim() : "";
}

function renderLead(body: Record<string, unknown>) {
  const rows = FIELDS.map(([key, label]) => [label, str(body, key)] as const)
    .filter(([, value]) => value !== "");

  const lang = str(body, "lang") === "en" ? "inglés" : "español";
  const meta = `Desde la landing en ${lang} · ${new Date().toISOString()}`;

  const text =
    rows.map(([label, value]) => `${label}: ${value}`).join("\n") +
    `\n\n${meta}`;

  const html =
    `<table cellpadding="0" cellspacing="0" style="font:15px/1.55 -apple-system,Segoe UI,Arial,sans-serif;color:#101010">` +
    rows
      .map(
        ([label, value]) =>
          `<tr>` +
          `<td style="padding:6px 18px 6px 0;color:#6f6f78;vertical-align:top;white-space:nowrap">${escapeHtml(
            label
          )}</td>` +
          `<td style="padding:6px 0;vertical-align:top">${escapeHtml(
            value
          ).replace(/\n/g, "<br>")}</td>` +
          `</tr>`
      )
      .join("") +
    `</table>` +
    `<p style="margin-top:22px;font:13px/1.5 -apple-system,Segoe UI,Arial,sans-serif;color:#6f6f78">${escapeHtml(
      meta
    )}</p>`;

  const subject = `Lead: ${str(body, "company")} — ${str(body, "helpType")}`;

  return { subject, text, html };
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  for (const field of REQUIRED) {
    const v = body[field];
    if (typeof v !== "string" || v.trim() === "") {
      return NextResponse.json(
        { error: "missing_field", field },
        { status: 400 }
      );
    }
  }

  const email = String(body.email);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  // Honeypot-free, but cap payload size so the endpoint is not a free relay.
  if (JSON.stringify(body).length > 8000) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  // Logged before the send, so a Relay outage never loses the lead.
  console.log("[lead]", { ...body, receivedAt: new Date().toISOString() });

  const cfg = relayConfig();

  if (!cfg) {
    console.error(
      "[lead] Doppler Relay sin configurar: falta RELAY_API_KEY, " +
        "RELAY_ACCOUNT_ID o RELAY_FROM_EMAIL. El lead quedó solo en el log."
    );
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const result = await sendViaRelay(cfg, renderLead(body));

  if (!result.ok) {
    console.error("[lead] Relay rechazó el envío:", result.reason, result.detail);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  // Which Authorization scheme Relay accepted. The official docs disagree, so
  // this is how we find out which one is real; once it shows up consistently
  // in the logs, pin it in lib/relay.ts and drop the retry.
  console.log("[lead] enviado por Relay con el esquema:", result.scheme);

  return NextResponse.json({ ok: true });
}
