/**
 * Monogram: the saffron AI line and cobalt ERP line converge into one
 * interchange. The same drawing is used for the favicon (src/app/icon.svg).
 */
export function Monogram({ className = "size-8", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="7" className="fill-ink" stroke={inverted ? "rgba(255,255,255,0.28)" : "none"} strokeWidth="1.5" />
      <path d="M4 9h6l7 7h11" fill="none" className="stroke-ai" strokeWidth="3.4" strokeLinejoin="round" />
      <path d="M4 23h6l7-7h11" fill="none" className="stroke-erp-bright" strokeWidth="3.4" strokeLinejoin="round" />
      <rect x="15.5" y="12.5" width="9" height="7" rx="3.5" fill="#fff" stroke="#0E1116" strokeWidth="1.6" />
    </svg>
  );
}

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Monogram inverted={inverted} />
      <span className={`leading-none ${inverted ? "text-white" : "text-ink"}`}>
        <span className="block text-[1.02rem] font-bold tracking-[-0.01em]">Nanhi AI Mindforge</span>
      </span>
    </span>
  );
}
