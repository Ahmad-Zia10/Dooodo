import type { Metadata } from "next";
import { CloseBand } from "@/components/service-line-page";
import { TimeZones } from "@/components/time-zones";
import { PageHeader, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nanhi AI Mindforge is a Delhi NCR technology consultancy combining Oracle ERP and AI engineering, working with clients worldwide.",
  alternates: { canonical: "/about" },
};

const beliefs = [
  {
    title: "The system of record comes first",
    body: "AI is only as useful as the data and processes underneath it. That is why we do both ERP and AI, and why ERP isn't an afterthought.",
  },
  {
    title: "Say what you will do, then do it",
    body: "Written scopes, fixed or capped prices where we can, and status reports that say what went wrong as clearly as what went right.",
  },
  {
    title: "Leave clients more capable",
    body: "Documentation, runbooks and knowledge transfer are part of the deliverable, not an upsell. You should be able to run what we build.",
  },
  {
    title: "Honesty over enthusiasm",
    body: "Some processes don't need AI. Some ERP problems are training problems. We would rather lose a project than sell the wrong one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A consultancy built where two disciplines meet."
        lede={`${site.name} brings Oracle ERP expertise and AI engineering into one team, so the system your business runs on and the intelligence built on top of it are designed together.`}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="h-section lg:col-span-5">Why we exist.</h2>
          <div className="prose-body text-[1.07rem] lg:col-span-7">
            <p>
              Companies usually buy ERP from one partner and AI from another. The ERP partner rarely builds AI,
              and the AI partner rarely understands how a ledger, a procurement approval or a payroll run is
              actually configured. The project falls into the gap between them.
            </p>
            <p>
              We set up {site.name} to close that gap: one team that can configure Oracle properly and build
              agents, automation and copilots that work with it, accountable for the whole result.
            </p>
            <p>
              We are a young company and we say so. What we offer instead of a long client list is a clear
              method, written commitments, and the people you meet being the people who do the work.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface" className="border-y border-rule">
        <h2 className="h-section max-w-[20ch]">What we believe.</h2>
        <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {beliefs.map((b) => (
            <div key={b.title} className="border-t-[3px] border-ink pt-5">
              <dt className="h-sub">{b.title}</dt>
              <dd className="prose-body mt-3">{b.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="h-section">Delhi NCR, and wherever you are.</h2>
            <p className="lede mt-5">
              Our team is based in Delhi NCR. We work with clients remotely and travel for workshops, go-lives
              and the moments that need people in a room.
            </p>
            <dl className="mt-10 space-y-5 border-t border-rule pt-6 text-[0.98rem]">
              <div>
                <dt className="font-semibold">Registered as</dt>
                <dd className="text-ink-2">{site.legalName}</dd>
              </div>
              <div>
                <dt className="font-semibold">Headquarters</dt>
                <dd className="text-ink-2">
                  {site.address.locality}, {site.address.region}, {site.address.country}
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Core hours</dt>
                <dd className="text-ink-2">{site.coreHours}</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-8">
            <TimeZones />
          </div>
        </div>
      </Section>

      <CloseBand />
    </>
  );
}
