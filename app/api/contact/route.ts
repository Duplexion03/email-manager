import { NextResponse } from "next/server";

/**
 * Intake endpoint.
 *
 * Right now it validates and logs. Plug in ONE of these before launch:
 *   - Resend / Doppler Relay  -> send the lead as an email to the team
 *   - A Doppler list + Relay  -> also drop the contact into a nurture list
 *   - The ticket system       -> create the ticket directly (see task #2)
 *
 * Env vars expected once wired: RELAY_API_KEY, LEADS_TO_EMAIL
 */

const REQUIRED = ["name", "company", "email", "helpType", "challenge"] as const;

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

  console.log("[lead]", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  // TODO: replace with real delivery before going live.
  return NextResponse.json({ ok: true });
}
