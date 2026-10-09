import type { Metadata } from "next";
import { LineBullet, LineBullets } from "@/components/line-bullet";
import { CloseBand } from "@/components/service-line-page";
import { Container, PageHeader } from "@/components/ui";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Where AI and Oracle ERP make a difference in financial services, retail, healthcare, logistics, manufacturing, technology, public sector and education.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Different sectors, the same question: where does the time go?"
        lede="For each sector, here is where we would typically start. These are examples of what we design and build, not a list of past clients."
      >
        <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.92rem] text-ink-3">
          <span className="inline-flex items-center gap-2"><LineBullet line="ai" size="sm" decorative /> AI line</span>
          <span className="inline-flex items-center gap-2"><LineBullet line="erp" size="sm" decorative /> Oracle ERP line</span>
          <span className="inline-flex items-center gap-2">
            <LineBullets lines={["ai", "erp"]} /> Needs both lines
          </span>
        </p>
      </PageHeader>

      <Container className="py-12 sm:py-16">
        <nav aria-label="Industries on this page" className="flex flex-wrap gap-2">
          {industries.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className="inline-flex min-h-10 items-center rounded-full border border-rule bg-surface px-4 text-[0.92rem] font-medium transition-colors hover:border-ink"
            >
              {i.name}
            </a>
          ))}
        </nav>

        <div className="mt-12 border-t border-ink">
          {industries.map((ind) => (
            <section
              key={ind.id}
              id={ind.id}
              aria-labelledby={`${ind.id}-h`}
              className="grid scroll-mt-24 gap-6 border-b border-rule py-12 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-4">
                <h2 id={`${ind.id}-h`} className="h-sub text-[1.7rem]">
                  {ind.name}
                </h2>
                <p className="prose-body mt-3">{ind.context}</p>
              </div>
              <ul className="lg:col-span-7 lg:col-start-6">
                {ind.useCases.map((u) => (
                  <li key={u.text} className="flex items-start gap-4 border-t border-rule py-4 first:border-t-0 first:pt-0 lg:first:pt-1">
                    <span className="w-[3.25rem] shrink-0 pt-0.5">
                      <LineBullets lines={u.lines} />
                    </span>
                    <span className="text-[1.05rem] leading-snug">{u.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>

      <CloseBand title="Don’t see your sector?" body="The processes matter more than the industry label. Tell us what your team spends its week on." />
    </>
  );
}
