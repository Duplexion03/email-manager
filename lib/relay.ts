/**
 * Doppler Relay transactional send.
 *
 * The site sells transactional email on Relay, so the site sends with Relay.
 * Using anything else here would be hard to defend in a sales call.
 *
 * API (confirmed against the official example, not guessed):
 *   POST https://api.dopplerrelay.com/accounts/{accountId}/messages
 *   Authorization: token {apiKey}
 *
 * Only the fields documented in that example are sent. `reply_to` is NOT
 * included: it is not in the public schema and an unknown field risks a 400
 * on every lead. The lead's address goes in the subject and at the top of the
 * body instead, so replying is one copy away.
 */

export type RelayConfig = {
  apiKey: string;
  accountId: string;
  fromEmail: string;
  fromName: string;
  toEmail: string;
};

export type RelayResult =
  | { ok: true }
  | { ok: false; reason: "http" | "network" | "timeout"; detail: string };

/** Where leads go unless the environment says otherwise. */
const DEFAULT_LEADS_TO = "info@manegit.com";

/**
 * Reads Relay credentials from the environment.
 *
 * Returns null when Relay is not configured yet, so the caller can react
 * deliberately instead of firing a request that comes back as an opaque 401.
 * `fromEmail` has no default on purpose: it must belong to a domain that is
 * authenticated inside the Relay account, and guessing one would produce
 * sends that Relay silently rejects or that land in spam.
 */
export function relayConfig(): RelayConfig | null {
  const apiKey = process.env.RELAY_API_KEY?.trim();
  const accountId = process.env.RELAY_ACCOUNT_ID?.trim();
  const fromEmail = process.env.RELAY_FROM_EMAIL?.trim();

  if (!apiKey || !accountId || !fromEmail) return null;

  return {
    apiKey,
    accountId,
    fromEmail,
    fromName: process.env.RELAY_FROM_NAME?.trim() || "Email Manager",
    toEmail: process.env.LEADS_TO_EMAIL?.trim() || DEFAULT_LEADS_TO,
  };
}

export async function sendViaRelay(
  cfg: RelayConfig,
  msg: { subject: string; html: string; text: string }
): Promise<RelayResult> {
  const url = `https://api.dopplerrelay.com/accounts/${encodeURIComponent(
    cfg.accountId
  )}/messages`;

  let res: Response;

  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `token ${cfg.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from_name: cfg.fromName,
        from_email: cfg.fromEmail,
        recipients: [{ type: "to", email: cfg.toEmail, name: cfg.fromName }],
        subject: msg.subject,
        html: msg.html,
        text: msg.text,
      }),
      // A lead should never hang the request. Relay is normally sub-second.
      signal: AbortSignal.timeout(10_000),
    });
  } catch (err) {
    const timedOut = err instanceof Error && err.name === "TimeoutError";
    return {
      ok: false,
      reason: timedOut ? "timeout" : "network",
      detail: err instanceof Error ? err.message : String(err),
    };
  }

  if (!res.ok) {
    // Relay puts the actual cause in the body (unauthenticated domain, bad
    // key, quota). Without it every failure looks the same in the logs.
    const detail = await res.text().catch(() => "");
    return {
      ok: false,
      reason: "http",
      detail: `${res.status} ${detail.slice(0, 500)}`,
    };
  }

  return { ok: true };
}
