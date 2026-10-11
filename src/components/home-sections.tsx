import Link from "next/link";
import { LineBullet, LineBullets } from "./line-bullet";

/** Transit-style service status: honest, and a call to action. */
export function LineStatus() {
  const rows = [
    { lines: ["ai"] as const, name: "AI line", href: "/services/ai" },
    { lines: ["erp"] as const, name: "Oracle ERP line", href: "/services/oracle-erp" },
    { lines: ["ai", "erp"] as const, name: "Interchanges", href: "/#why-one-network" },
  ];
  return (
    <div className="grid border-y border-ink sm:grid-cols-3">
      {rows.map((r, i) => (
        <Link
          key={r.name}
          href={r.href}
          className={`group flex items-center gap-4 px-1 py-4 transition-colors hover:bg-paper sm:px-5 ${
            i > 0 ? "border-t border-rule sm:border-l sm:border-t-0" : ""
          }`}
        >
          <LineBullets lines={[...r.lines]} size="md" />
          <span className="flex-1 leading-tight">
            <span className="block font-semibold">{r.name}</span>
            <span className="mt-0.5 flex items-center gap-2 text-[0.9rem] text-ink-2">
              <span aria-hidden="true" className="board-pulse size-2 rounded-full bg-[#1f9d55]" />
              Accepting new projects
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

/** The argument for one partner, drawn. */
export function OneNetworkArgument() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <figure className="rounded-[10px] border border-rule bg-surface p-6 sm:p-8">
        <figcaption className="flex items-baseline justify-between gap-4">
          <span className="text-[1.15rem] font-semibold">The usual way</span>
          <span className="text-[0.88rem] text-ink-3">Two vendors, two contracts</span>
        </figcaption>
        <svg viewBox="0 0 520 200" className="mt-6 h-auto w-full" role="img" aria-label="An ERP line and an AI line that end before they meet, with a gap labelled hand-over between them">
          <path d="M14 60 H200" className="stroke-erp" strokeWidth="10" strokeLinecap="round" fill="none" />
          <rect x="196" y="40" width="8" height="40" className="fill-ink" />
          <path d="M320 140 H506" className="stroke-ai" strokeWidth="10" strokeLinecap="round" fill="none" />
          <rect x="316" y="120" width="8" height="40" className="fill-ink" />
          <path d="M214 66 C270 80 250 124 306 134" stroke="#b42318" strokeWidth="2.5" strokeDasharray="6 7" fill="none" />
          <text x="260" y="40" textAnchor="middle" className="fill-[#b42318] text-[15px] font-semibold">Hand-over</text>
          <text x="14" y="34" className="fill-ink-3 text-[13px]">ERP partner</text>
          <text x="506" y="182" textAnchor="end" className="fill-ink-3 text-[13px]">AI partner</text>
        </svg>
        <ul className="mt-6 space-y-2.5 border-t border-rule pt-5 text-[0.98rem] text-ink-2">
          <li className="flex gap-3"><Cross />Requirements explained twice, to two teams</li>
          <li className="flex gap-3"><Cross />Data access renegotiated at the boundary</li>
          <li className="flex gap-3"><Cross />When something breaks, each points at the other</li>
        </ul>
      </figure>

      <figure className="rounded-[10px] border border-ink bg-surface p-6 shadow-[0_24px_60px_-34px_rgba(14,17,22,0.4)] sm:p-8">
        <figcaption className="flex items-baseline justify-between gap-4">
          <span className="text-[1.15rem] font-semibold">With Nanhi AI Mindforge</span>
          <span className="text-[0.88rem] text-ink-3">One network, one contract</span>
        </figcaption>
        <svg viewBox="0 0 520 200" className="mt-6 h-auto w-full" role="img" aria-label="The ERP line and the AI line merging onto a shared track with interchange stations">
          <path d="M14 46 H120 L170 92 H350 L400 46 H506" className="stroke-ai" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          <path d="M14 154 H120 L170 108 H350 L400 154 H506" className="stroke-erp" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          {[210, 260, 310].map((x) => (
            <rect key={x} x={x - 10} y="80" width="20" height="40" rx="10" fill="#fff" stroke="#0e1116" strokeWidth="4" />
          ))}
          <text x="14" y="28" className="fill-ink-3 text-[13px]">AI</text>
          <text x="14" y="188" className="fill-ink-3 text-[13px]">Oracle ERP</text>
          <text x="260" y="150" textAnchor="middle" className="fill-ink text-[15px] font-semibold">No hand-over</text>
        </svg>
        <ul className="mt-6 space-y-2.5 border-t border-rule pt-5 text-[0.98rem] text-ink-2">
          <li className="flex gap-3"><Tick />One team that knows the ledger and the model</li>
          <li className="flex gap-3"><Tick />AI built on ERP configuration we understand</li>
          <li className="flex gap-3"><Tick />One accountable owner for the outcome</li>
        </ul>
      </figure>
    </div>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 16 16" className="mt-1 size-4 shrink-0" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#b42318" strokeWidth="2" />
    </svg>
  );
}
function Tick() {
  return (
    <svg viewBox="0 0 16 16" className="mt-1 size-4 shrink-0" aria-hidden="true">
      <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="#1f9d55" strokeWidth="2.2" />
    </svg>
  );
}

/** Owner's letter: being new, stated plainly. */
export function NoteOnBeingNew() {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div aria-hidden="true" className="flex items-center gap-2">
          <LineBullet line="ai" size="lg" decorative />
          <LineBullet line="erp" size="lg" decorative />
        </div>
        <h2 className="h-section mt-8">A note on being new.</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <div className="space-y-6 text-[clamp(1.15rem,1.6vw,1.35rem)] leading-[1.6] text-ink [text-wrap:pretty]">
          <p>
            We are a young company. You won&rsquo;t find a wall of client logos on this site, and we won&rsquo;t
            invent one.
          </p>
          <p>
            What we offer instead is what a new firm can give and a large one often can&rsquo;t. The people you
            meet are the people who do the work. Your project is not one of fifty. And every commitment is
            written down, because our reputation is being built one client at a time.
          </p>
          <p className="text-ink-2">
            If that still feels like a risk, start small. A discovery sprint is fixed in scope and price, and you
            keep everything it produces, whether or not we go further together.
          </p>
        </div>
        <p className="mt-10 border-t border-rule pt-5 text-[0.95rem] text-ink-3">
          <span className="font-semibold text-ink">Nanhi AI Mindforge</span> · Delhi NCR, India
        </p>
      </div>
    </div>
  );
}
