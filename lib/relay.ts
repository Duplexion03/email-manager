/**
 * Doppler Relay transactional send.
 *
 * The site sells transactional email on Relay, so the site sends with Relay.
 * Using anything else here would be hard to defend in a sales call.
 *
 * API:
 *   POST https://api.dopplerrelay.com/accounts/{accountId}/messages
 *
 * On authentication, the official docs contradict each other:
 *   /docs/quickexamples  ->  Authorization: token {apiKey}
 *   /docs/gettingstarted ->  Authorization: Bearer {apiKey}
 *
 * Both are Doppler's own documentation, so rather than bet on one and have
 * every lead fail with an unexplained 401, we send with the first scheme and
 * retry once with the other if Relay rejects the credentials. The scheme that
 * works is logged, so it can be pinned here once we see it in production.
 *
 * Only the fields confirmed in the official example are sent. `reply_to` is
 * NOT included: it is absent from the public schema and an unknown field
 * risks a 400 on every lead. The lead's address goes in the subject and at
 * the top of the body instead, so replying is one copy away.
 */

/** Tried in order. Relay accepts one of them; the docs disagree on which. */
const AUTH_SCHEMES = ["Bearer", "token"] as const;

const SEND_TIMEOUT_MS = 10_000;

export type RelayConfig = {
  apiKey: string;
  accountId: string;
  fromEmail: string;
  fromName: string;
  toEmail: string;
};

export type RelayResult =
  | { ok: true; scheme: string }
  | { ok: false; reason: "auth" | "http" | "network" | "timeout"; detail: string };

/** Where leads go unless the environment says otherwise. */
const DEFAULT_LEADS_TO = "info@manegit.com";

/**
 * Reads Relay credentials from the environment.
 *
 * Returns null when Relay is not configured yet, so the caller can react
 * deliberately instead of firing a request that comes back as an opaque 401.
 * `fromEmail` has no default on purpose: it must belong to a domain that is
 * verified inside the Relay account — Relay blocks sending until that is
 * done — and guessing one would produce sends that get rejected outright.
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

  const payload = JSON.stringify({
    from_name: cfg.fromName,
    from_email: cfg.fromEmail,
    recipients: [{ type: "to", email: cfg.toEmail, name: cfg.fromName }],
    subject: msg.subject,
    html: msg.html,
    text: msg.text,
  });

  let lastAuthError = "";

  for (const scheme of AUTH_SCHEMES) {
    let res: Response;

    try {
      res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `${scheme} ${cfg.apiKey}`,
          "Content-Type": "application/json",
        },
        body: payload,
        // A lead should never hang the request. Relay is normally sub-second.
        signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
      });
    } catch (err) {
      // A network failure says nothing about the auth scheme, so stop here
      // instead of burning the retry on it.
      const timedOut = err instanceof Error && err.name === "TimeoutError";
      return {
        ok: false,
        reason: timedOut ? "timeout" : "network",
        detail: err instanceof Error ? err.message : String(err),
      };
    }

    if (res.ok) return { ok: true, scheme };

    // Relay puts the actual cause in the body (unverified domain, bad key,
    // quota). Without it every failure looks the same in the logs.
    const detail = await res.text().catch(() => "");

    if (res.status === 401 || res.status === 403) {
      lastAuthError = `${res.status} ${detail.slice(0, 300)}`;
      continue; // the other scheme may be the accepted one
    }

    return {
      ok: false,
      reason: "http",
      detail: `${res.status} ${detail.slice(0, 500)}`,
    };
  }

  return {
    ok: false,
    reason: "auth",
    detail:
      `Relay rechazó la credencial con los dos esquemas ` +
      `(${AUTH_SCHEMES.join(", ")}). Último error: ${lastAuthError}. ` +
      `Revisá RELAY_API_KEY y RELAY_ACCOUNT_ID, y que el dominio de ` +
      `RELAY_FROM_EMAIL esté verificado en Relay.`,
  };
}
