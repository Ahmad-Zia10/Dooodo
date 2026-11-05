import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/cards";
import { LineBullets } from "@/components/line-bullet";
import { CloseBand } from "@/components/service-line-page";
import { Container, Rail, Section, TextLink } from "@/components/ui";
import { articles, formatDate } from "@/content/insights";
import { site } from "@/content/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.summary,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", publishedTime: a.date },
  };
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  const more = articles.filter((x) => x.slug !== a.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    datePublished: a.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/insights/${a.slug}`,
  };

  return (
    <>
      <article>
        <header className="border-b border-rule bg-surface">
          <Rail kind={a.lines.length > 1 ? "both" : a.lines[0]} />
          <Container className="pb-14 pt-16 sm:pb-20 sm:pt-24">
            <div className="mx-auto max-w-[760px]">
              <TextLink href="/insights">All insights</TextLink>
              <h1 className="display mt-8 text-[clamp(2.3rem,5vw,3.9rem)]">{a.title}</h1>
              <p className="lede mt-6">{a.summary}</p>
              <p className="mt-8 flex flex-wrap items-center gap-3 text-[0.92rem] text-ink-3">
                <LineBullets lines={a.lines} />
                <span>{site.name}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={a.date}>{formatDate(a.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{a.minutes} min read</span>
              </p>
            </div>
          </Container>
        </header>

        <Container className="py-16 sm:py-20">
          <div className="prose-body mx-auto max-w-[760px] text-[1.08rem]">
            {a.body.map((b, i) => (
              <section key={i} className={`${b.heading ? "mt-10" : "mt-4"} first:mt-0`}>
                {b.heading && <h2 className="h-sub mb-4 text-[1.45rem] text-ink">{b.heading}</h2>}
                {b.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 first:mt-0">
                    {p}
                  </p>
                ))}
                {b.list && (
                  <ul className="mt-4 space-y-3">
                    {b.list.map((li) => (
                      <li key={li} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7em] h-[3px] w-3 shrink-0 bg-ink" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </Container>
      </article>

      <Section tone="surface" className="border-t border-rule">
        <h2 className="h-section">Keep reading.</h2>
        <ul className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {more.map((m) => (
            <li key={m.slug}>
              <ArticleCard a={m} />
            </li>
          ))}
        </ul>
      </Section>

      <CloseBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
