import type { LineId } from "@/content/services";

const labels: Record<LineId, string> = { erp: "Oracle ERP line", ai: "AI line" };
const codes: Record<LineId, string> = { erp: "E", ai: "A" };

/** Transit-style route bullet: the identity's smallest unit. */
export function LineBullet({
  line,
  size = "md",
  decorative = false,
}: {
  line: LineId;
  size?: "sm" | "md" | "lg";
  decorative?: boolean;
}) {
  const dims = { sm: "size-5 text-[0.7rem]", md: "size-7 text-[0.85rem]", lg: "size-10 text-[1.2rem]" }[size];
  return (
    <span
      className={`inline-grid shrink-0 place-items-center rounded-full font-bold leading-none ${dims} ${
        line === "erp" ? "bg-erp text-white" : "bg-ai text-ink"
      }`}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : labels[line]}
      role={decorative ? undefined : "img"}
    >
      {codes[line]}
    </span>
  );
}

export function LineBullets({ lines, size = "sm" }: { lines: LineId[]; size?: "sm" | "md" }) {
  return (
    <span className="inline-flex gap-1">
      {lines.map((l) => (
        <LineBullet key={l} line={l} size={size} />
      ))}
    </span>
  );
}
