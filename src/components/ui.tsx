import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-10 ${className}`}>{children}</div>;
}

export function Arrow({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="none">
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
    </svg>
  );
}

type ButtonProps = ComponentProps<typeof Link> & { variant?: "solid" | "outline" | "inverse" };

export function ButtonLink({ variant = "solid", className = "", children, ...rest }: ButtonProps) {
  const styles = {
    solid: "bg-ink text-white hover:bg-erp",
    outline: "border border-ink text-ink hover:bg-ink hover:text-white",
    inverse: "bg-ai text-ink hover:bg-white",
  }[variant];
  return (
    <Link
      {...rest}
      className={`group inline-flex min-h-12 items-center gap-3 rounded-full px-6 text-[0.98rem] font-semibold transition-colors duration-200 ${styles} ${className}`}
    >
      {children}
      <Arrow className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
    </Link>
  );
}

export function TextLink({ className = "", children, ...rest }: ComponentProps<typeof Link>) {
  return (
    <Link {...rest} className={`link-arrow ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}

/** Interior page opener: a route rail with the page title. */
export function PageHeader({
  title,
  lede,
  rail = "both",
  children,
  aside,
}: {
  title: string;
  lede: string;
  rail?: "ai" | "erp" | "both" | "ink";
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="relative border-b border-rule bg-surface">
      <Rail kind={rail} />
      <Container className="grid gap-12 pb-14 pt-16 sm:pb-20 sm:pt-24 lg:grid-cols-12">
        <div className={aside ? "lg:col-span-8" : "lg:col-span-12"}>
          <h1 className="display max-w-[18ch] text-[clamp(2.6rem,6vw,5rem)]">{title}</h1>
          <p className="lede mt-6">{lede}</p>
          {children}
        </div>
        {aside && <div className="hidden lg:col-span-3 lg:col-start-10 lg:block lg:self-end">{aside}</div>}
      </Container>
    </header>
  );
}

export function Rail({ kind }: { kind: "ai" | "erp" | "both" | "ink" }) {
  if (kind === "both")
    return (
      <div aria-hidden="true" className="flex flex-col gap-[3px]">
        <span className="h-[6px] bg-ai" />
        <span className="h-[6px] bg-erp" />
      </div>
    );
  const color = { ai: "bg-ai", erp: "bg-erp", ink: "bg-ink" }[kind];
  return <span aria-hidden="true" className={`block h-[9px] ${color}`} />;
}

export function Section({
  id,
  className = "",
  children,
  tone = "paper",
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: "paper" | "surface" | "ink";
}) {
  const bg = { paper: "", surface: "bg-surface", ink: "bg-ink text-white" }[tone];
  return (
    <section id={id} className={`py-20 sm:py-28 ${bg} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
