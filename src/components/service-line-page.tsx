import type { ReactNode } from "react";
import { interchanges, type Line } from "@/content/services";
import { LineBullet, LineBullets } from "./line-bullet";
import { StripMap } from "./strip-map";
import { ButtonLink, Container, PageHeader, Section, TextLink } from "./ui";

export function ServiceLinePage({
  line,
  title,
  lede,
  intro,
  extra,
}: {
  line: Line;
  title: string;
  lede: string;
  intro: ReactNode;
  extra?: ReactNode;
}) {
  const other = line.id === "ai" ? { href: "/services/oracle-erp", name: "Oracle ERP", id: "erp" as const } : { href: "/services/ai", name: "AI", id: "ai" as const };
  return (
    <>
      <PageHeader
        title={title}
        lede={lede}
        rail={line.id}
        aside={
          <nav aria-label={`${line.name} line stations`} className="relative">
            <span aria-hidden="true" className={`strip-line absolute bottom-2 left-[7px] top-2 w-[6px] rounded-full ${line.id === "ai" ? "bg-ai" : "bg-erp"}`} />
            <ul className="space-y-5">
              {line.stations.map((s) => (
                <li key={s.id} className="relative pl-9">
                  <span aria-hidden="true" className="absolute left-0 top-[3px] size-[20px] rounded-full border-[3px] border-ink bg-surface" />
                  <a href={`#${s.id}`} className="font-medium text-ink-2 underline-offset-4 hover:text-ink hover:underline">{s.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        }
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <ButtonLink href="/contact">Discuss a project</ButtonLink>
          <span className="inline-flex items-center gap-2 text-[0.95rem] text-ink-3">
            <LineBullet line={line.id} size="sm" decorative />
            {line.stations.length} stations on this line
          </span>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="h-section lg:col-span-5">What the line covers.</h2>
          <div className="prose-body text-[1.05rem] lg:col-span-7">{intro}</div>
        </div>
        <div className="mt-16">
          <StripMap
            line={line.id}
            items={line.stations.map((s) => ({
              id: s.id,
              title: s.name,
              body: <p>{s.summary}</p>,
              aside: (
                <ul className="mt-5 grid gap-x-8 gap-y-2 border-t border-rule pt-5 text-[0.96rem] text-ink-2 sm:grid-cols-2">
                  {s.scope.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className={`mt-[0.55em] h-[3px] w-3 shrink-0 ${line.id === "ai" ? "bg-ai" : "bg-erp"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              ),
            }))}
          />
        </div>
      </Section>

      {extra}

      <section className="border-y border-rule bg-surface py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h-section">Change at {other.name}.</h2>
            <p className="lede mt-5">
              These interchanges need both practices. They are where one partner saves you a hand-over.
            </p>
            <div className="mt-8">
              <TextLink href={other.href}>See the {other.name} line</TextLink>
            </div>
          </div>
          <ul className="divide-y divide-rule border-y border-rule lg:col-span-6 lg:col-start-7">
            {interchanges.map((ix) => (
              <li key={ix.id} className="flex gap-5 py-6">
                <LineBullets lines={["ai", "erp"]} />
                <div>
                  <h3 className="font-semibold">{ix.name}</h3>
                  <p className="prose-body mt-1.5 text-[0.97rem]">{ix.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CloseBand />
    </>
  );
}

export function CloseBand({
  title = "Have a process in mind?",
  body = "Send a few lines about what you are trying to fix. A consultant, not a sales bot, replies within one working day.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <Container className="flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="h-section max-w-[20ch]">{title}</h2>
          <p className="mt-4 max-w-[56ch] text-[1.05rem] leading-relaxed text-white/75">{body}</p>
        </div>
        <ButtonLink href="/contact" variant="inverse" className="self-start lg:self-auto">
          Start a conversation
        </ButtonLink>
      </Container>
    </section>
  );
}

export function ToolList({ groups }: { groups: { label: string; items: string[] }[] }) {
  return (
    <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {groups.map((g) => (
        <div key={g.label} className="border-t-[3px] border-ink pt-4">
          <dt className="font-semibold">{g.label}</dt>
          <dd className="mt-2 text-[0.96rem] leading-relaxed text-ink-2">{g.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  );
}

