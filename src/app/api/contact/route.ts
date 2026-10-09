import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/content/site";

/*
 * Contact form endpoint. Sends the enquiry via Resend's HTTP API.
 * Env: RESEND_API_KEY, CONTACT_TO_EMAIL (defaults to site.email),
 *      CONTACT_FROM_EMAIL (a sender on a domain verified in Resend).
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Best-effort, per-instance limiter. Enough to blunt casual abuse on a brochure site.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many messages from this connection. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fieldErrors[key] ??= issue.message;
    }
    // A filled honeypot gets a quiet success so bots learn nothing.
    if (fieldErrors.website) return Response.json({ ok: true });
    return Response.json({ ok: false, fieldErrors }, { status: 422 });
  }

  const { name, email, company, interest, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email not configured; enquiry received:", { name, email, company, interest });
      return Response.json({ ok: true });
    }
    console.error("[contact] RESEND_API_KEY or CONTACT_FROM_EMAIL missing");
    return Response.json(
      { ok: false, error: `We couldn't send your message just now. Please email us at ${site.email}.` },
      { status: 503 },
    );
  }

  const html = `
    <h2>New enquiry from the website</h2>
    <p><strong>Name:</strong> ${escape(name)}<br/>
    <strong>Email:</strong> ${escape(email)}<br/>
    <strong>Company:</strong> ${escape(company || "Not given")}<br/>
    <strong>Interested in:</strong> ${escape(interest)}</p>
    <p style="white-space:pre-wrap">${escape(message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website enquiry: ${interest} (${name}${company ? `, ${company}` : ""})`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
    return Response.json(
      { ok: false, error: `We couldn't send your message just now. Please email us at ${site.email}.` },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
