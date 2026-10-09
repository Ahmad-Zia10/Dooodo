import type { ReactNode } from "react";
import type { LineId } from "@/content/services";

/**
 * A vertical line diagram, like the strip map above a train door. Each item
 * is a station on a continuous coloured line. Used for service lists and
 * process steps.
 */
export function StripMap({
  line,
  items,
}: {
  line: LineId | "ink";
  items: { id: string; title: ReactNode; body: ReactNode; aside?: ReactNode }[];
}) {
  const color = { ai: "bg-ai", erp: "bg-erp", ink: "bg-ink" }[line];
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className={`strip-line absolute bottom-6 left-[11px] top-3 w-[8px] rounded-full ${color}`}
      />
      {items.map((item) => (
        <li key={item.id} id={item.id} className="relative grid scroll-mt-28 gap-x-10 gap-y-4 pb-14 pl-14 last:pb-0 md:grid-cols-12">
          <span
            aria-hidden="true"
            className="absolute left-0 top-[3px] size-[30px] rounded-full border-[3.5px] border-ink bg-surface"
          />
          <div className="md:col-span-5">
            <h3 className="h-sub">{item.title}</h3>
          </div>
          <div className="md:col-span-7">
            <div className="prose-body">{item.body}</div>
            {item.aside}
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Mobile/compact network: two parallel lines with every station listed. */
export function CompactNetwork({
  groups,
}: {
  groups: { label: string; on: ("ai" | "erp")[]; stations: string[] }[];
}) {
  return (
    <div className="relative">
      <span aria-hidden="true" className="strip-line absolute bottom-2 left-[6px] top-2 w-[7px] rounded-full bg-ai" />
      <span aria-hidden="true" className="strip-line absolute bottom-2 left-[17px] top-2 w-[7px] rounded-full bg-erp" />
      {groups.map((g) => (
        <div key={g.label} className="relative pb-6 pl-11 last:pb-0">
          <p className="pb-2 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-ink-3">{g.label}</p>
          <ul className="space-y-2.5">
            {g.stations.map((s) => (
              <li key={s} className="relative text-[1.02rem] font-medium leading-snug">
                <StationMark on={g.on} />
                {s}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function StationMark({ on }: { on: ("ai" | "erp")[] }) {
  if (on.length === 2)
    return (
      <span
        aria-hidden="true"
        className="absolute -left-[44px] top-[1px] h-[20px] w-[30px] rounded-full border-[3px] border-ink bg-surface"
      />
    );
  const left = on[0] === "ai" ? "-left-[44px]" : "-left-[33px]";
  return (
    <span
      aria-hidden="true"
      className={`absolute ${left} top-[2px] size-[18px] rounded-full border-[3px] border-ink bg-surface`}
    />
  );
}
