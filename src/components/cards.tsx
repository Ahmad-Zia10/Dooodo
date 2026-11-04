import Link from "next/link";
import type { Example } from "@/content/examples";
import { formatDate, type Article } from "@/content/insights";
import { LineBullets } from "./line-bullet";
import { Photo } from "./photo";
import { Arrow } from "./ui";

/** Plain-language flag on every illustrative example. */
export function IllustrativeTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-ink/25 bg-surface px-3 py-1 text-[0.8rem] font-semibold text-ink-2 ${className}`}
    >
      <span aria-hidden="true" className="size-2 rounded-full border-2 border-ink" />
      Illustrative example
    </span>
  );
}

export function ExampleCard({ ex, headingLevel = "h3" }: { ex: Example; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="group relative flex h-full flex-col">
      <Photo
        photo={ex.photo}
        caption={false}
        ratio="aspect-[3/2]"
        sizes="(min-width: 1024px) 560px, 100vw"
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="mt-5 flex flex-wrap items-center gap-3 text-[0.9rem] text-ink-3">
        <LineBullets lines={ex.lines} />
        <span>{ex.sector}</span>
        <span aria-hidden="true">·</span>
        <span>{ex.length}</span>
      </div>
      <H className="h-sub mt-3">
        <Link href={`/examples/${ex.slug}`} className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4">
          {ex.title}
        </Link>
      </H>
      <p className="prose-body mt-3">{ex.summary}</p>
      <span aria-hidden="true" className="mt-5 inline-flex items-center gap-2 font-semibold">
        Read the example <Arrow className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </article>
  );
}

export function ArticleCard({ a, headingLevel = "h3" }: { a: Article; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="group relative flex h-full flex-col border-t-[3px] border-ink pt-5">
      <div className="flex flex-wrap items-center gap-3 text-[0.9rem] text-ink-3">
        <LineBullets lines={a.lines} />
        <time dateTime={a.date}>{formatDate(a.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{a.minutes} min read</span>
      </div>
      <H className="h-sub mt-3">
        <Link href={`/insights/${a.slug}`} className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4">
          {a.title}
        </Link>
      </H>
      <p className="prose-body mt-3">{a.summary}</p>
    </article>
  );
}
