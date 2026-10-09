"use client";

import Link from "next/link";
import { useState } from "react";
import { aiLine, erpLine, interchanges } from "@/content/services";
import { LineBullet } from "./line-bullet";

/*
 * The home-page network diagram. Geometry is hand-set on a 45°/90° grid in
 * the manner of a modernist transit diagram. Two lines share a trunk; the
 * capsules on the trunk are interchanges (work that needs both disciplines).
 */

const AI_Y = 150;
const TRUNK_AI = 280;
const TRUNK_ERP = 302;
const ERP_Y = 430;

const aiPath = `M46 ${AI_Y} H330 L${330 + (TRUNK_AI - AI_Y)} ${TRUNK_AI} H880 L${880 + (TRUNK_AI - AI_Y)} ${AI_Y} H1240`;
const erpPath = `M46 ${ERP_Y} H342 L${342 + (ERP_Y - TRUNK_ERP)} ${TRUNK_ERP} H868 L${868 + (ERP_Y - TRUNK_ERP)} ${ERP_Y} H1240`;

type Stop = {
  key: string;
  x: number;
  name: string;
  summary: string;
  href: string;
  kind: "ai" | "erp" | "both";
};

const aiX = [100, 190, 280, 1060, 1120, 1180, 1240];
const erpX = [100, 190, 280, 1110, 1240];
const ixX = [560, 670, 780];

const aiStops: Stop[] = aiLine.stations.map((s, i) => ({
  key: `ai-${s.id}`,
  x: aiX[i],
  name: s.name,
  summary: s.summary,
  href: `${aiLine.href}#${s.id}`,
  kind: "ai",
}));
const erpStops: Stop[] = erpLine.stations.map((s, i) => ({
  key: `erp-${s.id}`,
  x: erpX[i],
  name: s.name,
  summary: s.summary,
  href: `${erpLine.href}#${s.id}`,
  kind: "erp",
}));
const ixStops: Stop[] = interchanges.map((s, i) => ({
  key: `ix-${s.id}`,
  x: ixX[i],
  name: s.name,
  summary: s.summary,
  href: `/#interchanges`,
  kind: "both",
}));

const shortName: Record<string, string> = {
  "ix-erp-copilots": "ERP copilots",
  "ix-finance-automation": "Finance automation",
  "ix-supply-signals": "Supply-chain signals",
};

const allStops = [...aiStops, ...ixStops, ...erpStops];

export function NetworkMap() {
  const [active, setActive] = useState<Stop | null>(null);
  const shown = active ?? null;

  const focusProps = (s: Stop) => ({
    onMouseEnter: () => setActive(s),
    onFocus: () => setActive(s),
    onMouseLeave: () => setActive((cur) => (cur?.key === s.key ? null : cur)),
    onBlur: () => setActive((cur) => (cur?.key === s.key ? null : cur)),
  });

  return (
    <figure className="network">
      <svg
        viewBox="0 0 1380 580"
        className="block h-auto w-full"
        role="group"
        aria-label="Service network: the AI line and the Oracle ERP line, sharing three interchange stations"
      >
        {/* Lines */}
        <path d={aiPath} className="net-line stroke-ai" pathLength={1} />
        <path d={erpPath} className="net-line stroke-erp" pathLength={1} style={{ animationDelay: "120ms" }} />

        {/* Terminus bullets */}
        <g aria-hidden="true">
          <circle cx="30" cy={AI_Y} r="17" className="fill-ai" />
          <text x="30" y={AI_Y + 6} textAnchor="middle" className="fill-ink text-[17px] font-bold">A</text>
          <circle cx="30" cy={ERP_Y} r="17" className="fill-erp" />
          <text x="30" y={ERP_Y + 6} textAnchor="middle" className="fill-white text-[17px] font-bold">E</text>
        </g>

        {/* AI stations: labels angled up */}
        {aiStops.map((s, i) => (
          <Link key={s.key} href={s.href} className="net-stop" {...focusProps(s)} style={{ ["--i" as string]: i }}>
            <circle cx={s.x} cy={AI_Y} r="8" className={`stop-dot ${active?.key === s.key ? "is-active" : ""}`} />
            <text
              x={s.x + 6}
              y={AI_Y - 20}
              transform={`rotate(-45 ${s.x + 6} ${AI_Y - 20})`}
              className="stop-label"
            >
              {s.name}
            </text>
          </Link>
        ))}

        {/* ERP stations: labels angled down */}
        {erpStops.map((s, i) => (
          <Link key={s.key} href={s.href} className="net-stop" {...focusProps(s)} style={{ ["--i" as string]: i + 7 }}>
            <circle cx={s.x} cy={ERP_Y} r="8" className={`stop-dot ${active?.key === s.key ? "is-active" : ""}`} />
            <text
              x={s.x + 6}
              y={ERP_Y + 30}
              transform={`rotate(45 ${s.x + 6} ${ERP_Y + 30})`}
              className="stop-label"
            >
              {s.name}
            </text>
          </Link>
        ))}

        {/* Interchanges: capsules spanning both lines on the shared trunk */}
        {ixStops.map((s, i) => (
          <Link key={s.key} href={s.href} className="net-stop" {...focusProps(s)} style={{ ["--i" as string]: i + 3 }}>
            <rect
              x={s.x - 10}
              y={TRUNK_AI - 11}
              width="20"
              height={TRUNK_ERP - TRUNK_AI + 22}
              rx="10"
              className={`stop-dot ${active?.key === s.key ? "is-active" : ""}`}
            />
            <text
              x={s.x + 4}
              y={TRUNK_ERP + 34}
              transform={`rotate(45 ${s.x + 4} ${TRUNK_ERP + 34})`}
              className="stop-label stop-label--ix"
            >
              {shortName[s.key]}
            </text>
          </Link>
        ))}
      </svg>

      <figcaption className="network-caption" aria-live="polite">
        {shown ? (
          <>
            <span className="flex shrink-0 gap-1">
              {shown.kind === "both" ? (
                <>
                  <LineBullet line="ai" size="sm" decorative />
                  <LineBullet line="erp" size="sm" decorative />
                </>
              ) : (
                <LineBullet line={shown.kind} size="sm" decorative />
              )}
            </span>
            <span>
              <strong className="font-semibold text-ink">{shown.name}.</strong> {shown.summary}
            </span>
          </>
        ) : (
          <span>
            Two service lines, one partner. Hover or tab through any station; the capsules on the shared
            track are where AI and Oracle ERP work meet.
          </span>
        )}
      </figcaption>
      <p className="sr-only">
        Stations: {allStops.map((s) => s.name).join(", ")}.
      </p>
    </figure>
  );
}
