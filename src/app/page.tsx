import type { Metadata } from "next";
import Link from "next/link";
import { LineBullet, LineBullets } from "@/components/line-bullet";
import { NetworkMap } from "@/components/network-map";
import { CompactNetwork } from "@/components/strip-map";
import { TimeZones } from "@/components/time-zones";
import { ButtonLink, Container, Section, TextLink } from "@/components/ui";
import { principles, stages } from "@/content/approach";
import { industries } from "@/content/industries";
import { aiLine, erpLine, interchanges, type Line } from "@/content/services";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-rule bg-surface">
        <Container className="pt-14 sm:pt-20 lg:pt-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <h1 className="display text-[clamp(2.75rem,6.6vw,5.6rem)] lg:col-span-8">
              AI engineering and Oracle&nbsp;ERP, on one network.
            </h1>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="lede">
                We implement the systems your business runs on, then build the agents and automation that make
                them run better. One partner, accountable for both.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <ButtonLink href="/contact">Start a conversation</ButtonLink>
                <TextLink href="/approach">How we work</TextLink>
              </div>
            </div>
          </div>

          <div className="mt-12 hidden pb-10 md:block lg:mt-8">
            <NetworkMap />
          </div>
          <div className="mt-12 pb-12 md:hidden">
            <CompactNetwork
              groups={[
                { label: "AI line", on: ["ai"], stations: aiLine.stations.map((s) => s.name) },
                { label: "Interchanges", on: ["ai", "erp"], stations: interchanges.map((s) => s.name) },
                { label: "Oracle ERP line", on: ["erp"], stations: erpLine.stations.map((s) => s.name) },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* The two lines */}
      <Section>
        <h2 className="h-section max-w-[20ch]">Two practices, each complete on its own.</h2>
        <p className="lede mt-5">
          Buy either line by itself. Most clients start with one, and the value grows where the two connect.
        </p>
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-0">
          <LineSummary line={erpLine} className="lg:border-r lg:border-rule lg:pr-14" />
          <LineSummary line={aiLine} className="lg:pl-14" />
        </div>
      </Section>

      {/* Interchanges */}
      <section id="interchanges" className="scroll-mt-20 border-y border-rule bg-surface py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div aria-hidden="true" className="mb-8 flex items-center">
                <span className="h-[9px] w-16 bg-ai" />
                <span className="-mx-1 h-9 w-14 rounded-full border-[3.5px] border-ink bg-surface" />
                <span className="h-[9px] w-16 bg-erp" />
              </div>
              <h2 className="h-section">Where the lines meet.</h2>
              <p className="lede mt-5">
                Most AI projects stall at the system of record. Ours start there: we know how the ledger, the
                approvals and the roles are configured, because configuring them is half of what we do.
              </p>
            </div>
            <ul className="divide-y divide-rule border-y border-rule lg:col-span-6 lg:col-start-7">
              {interchanges.map((ix) => (
                <li key={ix.id} className="grid gap-3 py-7 sm:grid-cols-[auto_1fr] sm:gap-6">
                  <LineBullets lines={["ai", "erp"]} size="md" />
                  <div>
                    <h3 className="h-sub">{ix.name}</h3>
                    <p className="prose-body mt-2">{ix.summary}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* How an engagement runs */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="h-section max-w-[18ch]">Four stages, with something working early.</h2>
          <TextLink href="/approach">Engagement models and security</TextLink>
        </div>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          <span aria-hidden="true" className="absolute left-[11px] top-3 bottom-3 w-[8px] rounded-full bg-ink md:inset-x-3 md:bottom-auto md:left-3 md:top-[11px] md:h-[8px] md:w-auto" />
          {stages.map((s, i) => (
            <li key={s.id} className="relative pl-14 md:pl-0 md:pt-16">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 grid size-[30px] place-items-center rounded-full border-[3.5px] border-ink bg-paper text-[0.75rem] font-bold tabular-nums md:left-0"
              >
                {i + 1}
              </span>
              <h3 className="h-sub">{s.name}</h3>
              <p className="prose-body mt-2">{s.short}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Principles */}
      <Section tone="surface" className="border-y border-rule">
        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="h-section lg:col-span-4">Built for production, not for the demo.</h2>
          <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {principles.map((p) => (
              <div key={p.title} className="border-t-[3px] border-ink pt-5">
                <dt className="h-sub">{p.title}</dt>
                <dd className="prose-body mt-3">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Global delivery */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="h-section">Based in Delhi NCR. Working in your hours.</h2>
            <p className="lede mt-5">
              We plan collaboration around your working day from the first week, not after the first missed
              call.
            </p>
          </div>
          <div className="lg:col-span-8">
            <TimeZones />
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section tone="surface" className="border-t border-rule">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="h-section max-w-[16ch]">Sectors we design for.</h2>
          <TextLink href="/industries">Use cases by industry</TextLink>
        </div>
        <ul className="mt-12 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <li key={ind.id} className="border-b border-rule sm:odd:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0">
              <Link
                href={`/industries#${ind.id}`}
                className="group flex h-full min-h-28 flex-col gap-3 p-5 transition-colors hover:bg-paper"
              >
                <span className="text-[1.08rem] font-semibold leading-snug">{ind.name}</span>
                <span className="text-[0.93rem] leading-snug text-ink-3">{ind.context}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Close */}
      <section className="bg-ink text-white">
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="display text-[clamp(2.3rem,5vw,4.2rem)]">
              Tell us the one process that eats your team&rsquo;s week.
            </h2>
            <p className="mt-6 max-w-[56ch] text-[1.1rem] leading-relaxed text-white/75">
              We&rsquo;ll tell you honestly whether AI, better ERP configuration or neither is the answer. A
              consultant replies within one working day.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <ButtonLink href="/contact" variant="inverse">
              Start a conversation
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

function LineSummary({ line, className = "" }: { line: Line; className?: string }) {
  return (
    <article className={className}>
      <div className="flex items-center gap-4">
        <LineBullet line={line.id} size="lg" decorative />
        <h3 className="text-[1.9rem] font-bold tracking-tight [font-stretch:90%]">{line.name}</h3>
      </div>
      <p className="prose-body mt-5 text-[1.05rem]">{line.promise}</p>
      <ul className="mt-8 border-t border-rule">
        {line.stations.map((s) => (
          <li key={s.id} className="border-b border-rule">
            <Link
              href={`${line.href}#${s.id}`}
              className="group flex min-h-13 items-center gap-4 py-3 font-medium transition-colors hover:text-erp"
            >
              <span
                aria-hidden="true"
                className={`size-3 shrink-0 rounded-full border-[2.5px] border-ink bg-surface transition-colors group-hover:bg-ink`}
              />
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <TextLink href={line.href}>Explore the {line.name} line</TextLink>
      </div>
    </article>
  );
}
