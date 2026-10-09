import type { Metadata } from "next";
import { LineBullet } from "@/components/line-bullet";
import { Container, PageHeader, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Nanhi AI Mindforge in Delhi NCR: Oracle ERP consultants, AI engineers and full-stack developers who like solving real operational problems.",
  alternates: { canonical: "/careers" },
};

const profiles = [
  {
    line: "erp" as const,
    title: "Oracle functional consultants",
    body: "Financials, SCM or HCM. You can run a fit-gap workshop, configure the module and explain your choices to a finance controller.",
  },
  {
    line: "erp" as const,
    title: "Oracle technical consultants",
    body: "Oracle Integration Cloud, Visual Builder, APEX, PL/SQL and BI Publisher. You build extensions that survive quarterly updates.",
  },
  {
    line: "ai" as const,
    title: "AI engineers",
    body: "Python, retrieval, agent frameworks and evaluation. You care whether the system is right, not just whether the demo looks good.",
  },
  {
    line: "ai" as const,
    title: "Full-stack engineers",
    body: "TypeScript, React and cloud infrastructure. You ship accessible, well-tested product and enjoy integrating it with real back-office systems.",
  },
];

const offer = [
  { title: "Work on both sides", body: "Exposure to ERP and AI projects, and to the clients who use them." },
  { title: "Real ownership", body: "Small teams, where your name is on the work and the client knows it." },
  { title: "Time to learn", body: "Certification support and protected learning time for new Oracle and AI capabilities." },
  { title: "Hybrid from Delhi NCR", body: "Office days for collaboration, remote days for focus, with occasional client travel." },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Build the systems businesses run on."
        lede="We are a growing team in Delhi NCR. We don't list open roles here; we hire when we meet the right people. If you see yourself below, write to us."
        rail="both"
      >
        <a
          href={`mailto:${site.careersEmail}`}
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 font-semibold text-white transition-colors hover:bg-erp"
        >
          Email {site.careersEmail}
        </a>
      </PageHeader>

      <Section>
        <h2 className="h-section max-w-[20ch]">People we always want to hear from.</h2>
        <ul className="mt-12 grid border-t border-ink md:grid-cols-2">
          {profiles.map((p) => (
            <li key={p.title} className="flex gap-5 border-b border-rule py-8 md:odd:border-r md:odd:pr-10 md:even:pl-10">
              <LineBullet line={p.line} />
              <div>
                <h3 className="h-sub">{p.title}</h3>
                <p className="prose-body mt-2">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" className="border-y border-rule">
        <h2 className="h-section max-w-[20ch]">What working here is like.</h2>
        <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {offer.map((o) => (
            <div key={o.title} className="border-t-[3px] border-ink pt-5">
              <dt className="h-sub text-[1.15rem]">{o.title}</dt>
              <dd className="prose-body mt-2">{o.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Container className="py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 className="h-section lg:col-span-5">How to apply.</h2>
          <div className="prose-body text-[1.05rem] lg:col-span-7">
            <p>
              Email <a href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a> with your CV or LinkedIn
              profile, and a few lines about a problem you solved that you are proud of. We read everything and
              reply to every application, usually within two weeks.
            </p>
            <p>
              We never charge candidates a fee at any stage of hiring. If anyone asks you for money in our name,
              please report it to us.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
