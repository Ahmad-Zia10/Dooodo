import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExampleCard, IllustrativeTag } from "@/components/cards";
import { LineBullets } from "@/components/line-bullet";
import { PhotoBand } from "@/components/photo";
import { CloseBand } from "@/components/service-line-page";
import { StripMap } from "@/components/strip-map";
import { ButtonLink, PageHeader, Section, TextLink } from "@/components/ui";
import { exampleNotice, examples } from "@/content/examples";

export function generateStaticParams() {
  return examples.map((ex) => ({ slug: ex.slug }));
}

export async function generateMetadata({ params }: PageProps<"/examples/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ex = examples.find((e) => e.slug === slug);
  if (!ex) return {};
  return {
    title: `${ex.title} (example)`,
    description: ex.summary,
    alternates: { canonical: `/examples/${ex.slug}` },
  };
}

export default async function ExamplePage({ params }: PageProps<"/examples/[slug]">) {
  const { slug } = await params;
  const ex = examples.find((e) => e.slug === slug);
  if (!ex) notFound();

  const rail = ex.lines.length > 1 ? "both" : ex.lines[0];
  const others = examples.filter((e) => e.slug !== ex.slug).slice(0, 2);
  const contactHref = ex.route ? `/contact?route=${ex.route}` : "/contact";

  return (
    <>
      <PageHeader title={ex.title} lede={ex.summary} rail={rail}>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.95rem] text-ink-3">
          <IllustrativeTag />
          <span className="inline-flex items-center gap-2">
            <LineBullets lines={ex.lines} />
            {ex.sector}
          </span>
        </div>
      </PageHeader>

      <PhotoBand photo={ex.photo} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="h-section lg:col-span-5">The situation.</h2>
          <div className="prose-body text-[1.05rem] lg:col-span-7">
            {ex.situation.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface" className="border-y border-rule">
        <h2 className="h-section max-w-[20ch]">The route we would take.</h2>
        <div className="mt-14">
          <StripMap
            line={ex.lines.length > 1 ? "ink" : ex.lines[0]}
            items={ex.stages.map((s, i) => ({
              id: `stage-${i + 1}`,
              title: (
                <>
                  {s.name}
                  <span className="mt-1 block text-[0.95rem] font-medium text-ink-3 [font-stretch:100%]">{s.weeks}</span>
                </>
              ),
              body: <p>{s.does}</p>,
              aside: (
                <p className="mt-5 border-t border-rule pt-4 text-[0.94rem] text-ink-2">
                  <span className="font-semibold text-ink">You receive: </span>
                  {s.outputs.join(" · ")}
                </p>
              ),
            }))}
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="h-section">How we would measure it.</h2>
            <p className="lede mt-5">Agreed before the build starts, against a baseline taken in discovery.</p>
          </div>
          <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {ex.measures.map((m) => (
              <div key={m.metric} className="border-t-[3px] border-ink pt-5">
                <dt className="h-sub text-[1.15rem]">{m.metric}</dt>
                <dd className="prose-body mt-2">{m.how}</dd>
              </div>
            ))}
            <div className="border-t-[3px] border-ink pt-5">
              <dt className="h-sub text-[1.15rem]">Engagement</dt>
              <dd className="prose-body mt-2">
                {ex.model}. {ex.length}.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section tone="surface" className="border-y border-rule">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h-section">What could go wrong.</h2>
            <p className="lede mt-5">Named up front, with a plan, rather than discovered in week eight.</p>
          </div>
          <ul className="divide-y divide-rule border-y border-rule lg:col-span-7">
            {ex.risks.map((r) => (
              <li key={r} className="prose-body py-5 text-[1.02rem]">
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[70ch] text-[0.92rem] leading-relaxed text-ink-3">{exampleNotice}</p>
          <ButtonLink href={contactHref} className="shrink-0 self-start sm:self-auto">
            Discuss a similar project
          </ButtonLink>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="h-section">More examples.</h2>
          <TextLink href="/examples">All examples</TextLink>
        </div>
        <ul className="mt-12 grid gap-x-12 gap-y-16 md:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}>
              <ExampleCard ex={o} />
            </li>
          ))}
        </ul>
      </Section>

      <CloseBand />
    </>
  );
}
