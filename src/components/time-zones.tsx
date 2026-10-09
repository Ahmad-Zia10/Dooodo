/*
 * Business hours (09:00–18:00 local, standard time) for client regions,
 * plotted on an IST axis against our core hours. Overlap is computed, not typed.
 */

const CORE: [number, number] = [9.5, 18.5];

const regions = [
  { city: "Delhi NCR", note: "Headquarters", offset: 5.5, home: true },
  { city: "Singapore", note: "UTC+8", offset: 8 },
  { city: "Dubai", note: "UTC+4", offset: 4 },
  { city: "London", note: "UTC+0", offset: 0 },
  { city: "New York", note: "UTC−5", offset: -5 },
];

function istWindow(offset: number): [number, number][] {
  const start = (((9 - offset + 5.5) % 24) + 24) % 24;
  const end = start + 9;
  return end <= 24 ? [[start, end]] : [[start, 24], [0, end - 24]];
}

function overlapHours(segs: [number, number][]) {
  return segs.reduce((sum, [a, b]) => sum + Math.max(0, Math.min(b, CORE[1]) - Math.max(a, CORE[0])), 0);
}

const fmt = (h: number) => {
  const hh = Math.floor(h) % 24;
  const mm = Math.round((h % 1) * 60);
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
};

const ticks = [0, 6, 12, 18, 24];

export function TimeZones() {
  return (
    <figure>
      <div className="relative [--label-w:9.5rem] sm:[--label-w:13rem]">
        {/* Core-hours band */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 border-x border-dashed border-ink/40 bg-ai/12"
          style={{
            left: `calc(var(--label-w) + (100% - var(--label-w)) * ${CORE[0] / 24})`,
            width: `calc((100% - var(--label-w)) * ${(CORE[1] - CORE[0]) / 24})`,
          }}
        />
        <table className="relative w-full table-fixed border-collapse text-left">
          <caption className="sr-only">
            Client business hours shown in India Standard Time, compared with our core hours of {fmt(CORE[0])} to{" "}
            {fmt(CORE[1])} IST.
          </caption>
          <thead>
            <tr>
              <th scope="col" className="w-[var(--label-w)] pb-3 text-[0.8rem] font-semibold text-ink-3">
                Region
              </th>
              <th scope="col" className="relative pb-3 text-[0.8rem] font-semibold text-ink-3">
                <span className="sr-only">Business hours in IST</span>
                <span aria-hidden="true" className="relative block h-4">
                  {ticks.map((t) => (
                    <span
                      key={t}
                      className="absolute -translate-x-1/2 tabular-nums first:translate-x-0 last:-translate-x-full"
                      style={{ left: `${(t / 24) * 100}%` }}
                    >
                      {fmt(t)}
                    </span>
                  ))}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {regions.map((r) => {
              const segs = istWindow(r.offset);
              const overlap = overlapHours(segs);
              return (
                <tr key={r.city} className="border-t border-rule">
                  <th scope="row" className="py-3.5 pr-3 align-middle font-normal">
                    <span className="block font-semibold leading-tight">{r.city}</span>
                    <span className="block text-[0.82rem] text-ink-3">
                      {r.home ? r.note : `${r.note} · ${overlap > 0 ? `${overlap}h overlap` : "scheduled windows"}`}
                    </span>
                  </th>
                  <td className="py-3.5 align-middle">
                    <span className="relative block h-3.5 rounded-full bg-rule/60">
                      {segs.map(([a, b]) => (
                        <span
                          key={a}
                          className={`absolute inset-y-0 rounded-full ${r.home ? "bg-ai" : "bg-ink"}`}
                          style={{ left: `${(a / 24) * 100}%`, width: `${((b - a) / 24) * 100}%` }}
                        />
                      ))}
                    </span>
                    <span className="sr-only">
                      {segs.map(([a, b]) => `${fmt(a)} to ${fmt(b)}`).join(" and ")} IST
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-5 max-w-[70ch] text-[0.9rem] leading-relaxed text-ink-3">
        Local business hours of 09:00 to 18:00, shown in India Standard Time (standard time; daylight saving
        shifts Europe and North America by an hour). The shaded band is our core working day. For regions without
        natural overlap we agree fixed early or late call windows at the start of an engagement.
      </figcaption>
    </figure>
  );
}
