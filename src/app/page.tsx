import type { Metadata } from "next";
import Link from "next/link";
import { DepartureBoard } from "@/components/departure-board";
import { LineStatus, NoteOnBeingNew, OneNetworkArgument } from "@/components/home-sections";
import { LineBullet } from "@/components/line-bullet";
import { Photo } from "@/components/photo";
import { NetworkMap } from "@/components/network-map";
import { RoutePlanner } from "@/components/route-planner";
import { CompactNetwork } from "@/components/strip-map";
import { TimeZones } from "@/components/time-zones";
import { ButtonLink, Container, Section, TextLink } from "@/components/ui";
import { principles } from "@/content/approach";
import { industries } from "@/content/industries";
import { industryPhotos, photos } from "@/content/photos";
import { aiLine, erpLine, interchanges, type Line } from "@/content/services";
import type { Photo as PhotoData } from "@/content/photos";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Hero: the network, running */}
      <section className="bg-surface">
        <Container className="pt-14 sm:pt-20 lg:pt-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <h1 className="display text-[clamp(2.75rem,6.6vw,5.6rem)] lg:col-span-8">
              AI engineering and Oracle&nbsp;ERP, on one network.
            </h1>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="lede">
                Most companies hire one firm for Oracle and another for AI, then lose months in the gap between
                them. We are both: one team that configures the ledger, builds the agents, and answers for the
                result.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <ButtonLink href="#plan">Plan your route</ButtonLink>
                <TextLink href="/contact">Talk to us</TextLink>
              </div>
            </div>
          </div>

          <div className="mt-12 hidden md:block lg:mt-6">
            <NetworkMap />
          </div>
          <div className="mt-12 pb-10 md:hidden">
            <CompactNetwork
              groups={[
                { label: "AI line", on: ["ai"], stations: aiLine.stations.map((s) => s.name) },
                { label: "Interchanges", on: ["ai", "erp"], stations: interchanges.map((s) => s.name) },
                { label: "Oracle ERP line", on: ["erp"], stations: erpLine.stations.map((s) => s.name) },
              ]}
            />
          </div>
        </Container>
        <Container className="pb-14 pt-6 sm:pb-16">
          <h2 className="sr-only">Service status</h2>
          <LineStatus />
        </Container>
      </section>

      {/* The argument */}
      <section id="why-one-network" className="scroll-mt-20 border-t border-rule py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 className="h-section lg:col-span-6">Most projects don&rsquo;t fail in the build. They stall at the hand-over.</h2>
            <p className="lede lg:col-span-5 lg:col-start-8">
              AI needs clean ERP data, correct permissions and someone who understands how the books are configured.
              When those sit with a different vendor, every question becomes a ticket. We removed the gap.
            </p>
          </div>
          <div className="mt-14">
            <OneNetworkArgument />
          </div>
        </Container>
      </section>

      {/* Route planner */}
      <section id="plan" className="scroll-mt-20 border-y border-rule bg-[#e9ebee] py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="display text-[clamp(2.4rem,5vw,4.2rem)] lg:col-span-7">Plan your route.</h2>
            <p className="lede lg:col-span-5">
              Pick the problem closest to yours. We&rsquo;ll show you the stations we&rsquo;d call at, where the
              lines change, and how we&rsquo;d know we had arrived.
            </p>
          </div>
          <div className="mt-14">
            <RoutePlanner />
          </div>
        </Container>
      </section>

      {/* The two lines */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="h-section lg:col-span-6">Two practices, each complete on its own.</h2>
          <p className="lede lg:col-span-5 lg:col-start-8">
            Buy either line by itself. Most clients start with one; the value compounds where they connect.
          </p>
        </div>
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-0">
          <LineSummary line={erpLine} photo={photos.erp} className="lg:border-r lg:border-rule lg:pr-14" />
          <LineSummary line={aiLine} photo={photos.ai} className="lg:pl-14" />
        </div>
      </Section>

      {/* Ways to work */}
      <Section tone="surface" className="border-y border-rule">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="h-section">Start small. Expand when it&rsquo;s earned.</h2>
            <p className="lede mt-5">
              Every engagement has a written scope, a named owner and a metric agreed up front. Most begin with a
              fixed-price discovery sprint.
            </p>
            <div className="mt-8">
              <TextLink href="/approach">How engagements run</TextLink>
            </div>
          </div>
          <div className="min-w-0 lg:col-span-8">
            <DepartureBoard />
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section>
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

      {/* Owner's note */}
      <Section tone="surface" className="border-y border-rule">
        <NoteOnBeingNew />
      </Section>

      {/* Global delivery */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="h-section">Based in Delhi NCR. Working in your hours.</h2>
            <p className="lede mt-5">
              We plan collaboration around your working day from the first week, not after the first missed call.
            </p>
            <Photo photo={photos.delhi} caption={false} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 380px, 100vw" className="mt-10" />
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
                <Photo
                  photo={{ ...industryPhotos[ind.id], caption: ind.name, lines: ["ai", "erp"] }}
                  caption={false}
                  ratio="aspect-[3/2]"
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  className="mb-2"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="text-[1.08rem] font-semibold leading-snug">{ind.name}</span>
                <span className="text-[0.93rem] leading-snug text-ink-3">{ind.context}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Close */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 flex flex-col gap-[3px]">
          <span className="h-[5px] bg-ai" />
          <span className="h-[5px] bg-erp-bright" />
        </div>
        <Container className="grid gap-10 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="display text-[clamp(2.4rem,5.4vw,4.6rem)]">
              Tell us the one process that eats your team&rsquo;s week.
            </h2>
            <p className="mt-6 max-w-[56ch] text-[1.12rem] leading-relaxed text-white/75">
              We&rsquo;ll tell you honestly whether AI, better ERP configuration or neither is the answer. A
              consultant replies within one working day.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
            <ButtonLink href="/contact" variant="inverse">
              Start a conversation
            </ButtonLink>
            <a href="#plan" className="text-[0.95rem] text-white/70 underline underline-offset-4 hover:text-white">
              or plan your route first
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

function LineSummary({ line, photo, className = "" }: { line: Line; photo: PhotoData; className?: string }) {
  return (
    <article className={className}>
      <Photo photo={photo} className="mb-10" />
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
                className="size-3 shrink-0 rounded-full border-[2.5px] border-ink bg-surface transition-colors group-hover:bg-ink"
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
