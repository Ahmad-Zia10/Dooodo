import type { Metadata } from "next";
import { CloseBand } from "@/components/service-line-page";
import { StripMap } from "@/components/strip-map";
import { PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "AI strategy and consulting",
  description:
    "Independent AI and ERP advice: readiness reviews, use-case prioritisation, build-versus-buy decisions and costed roadmaps.",
  alternates: { canonical: "/services/consulting" },
};

const offers = [
  {
    id: "readiness",
    title: "AI readiness review",
    body: "Two to three weeks looking at your processes, data quality, systems and governance. You get a written assessment of where AI will and won't pay off, with the reasons.",
  },
  {
    id: "prioritisation",
    title: "Use-case prioritisation",
    body: "We score candidate use cases on value, feasibility, risk and time to impact, and agree the first one to build together with your team, rather than for them.",
  },
  {
    id: "build-vs-buy",
    title: "Build-versus-buy decisions",
    body: "An honest comparison of off-the-shelf products, Oracle-native features and custom builds for a specific need, including the cost of running each for three years.",
  },
  {
    id: "erp-health",
    title: "Oracle ERP health check",
    body: "A review of configuration, customisations, integrations and user pain points, ending in a prioritised list of fixes and the AI opportunities they open up.",
  },
  {
    id: "roadmap",
    title: "Roadmap and business case",
    body: "A sequenced, costed plan your board or investment committee can approve, with measurable milestones and named risks.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        title="Advice that is allowed to say “not yet”."
        lede="Strategy work with no obligation to build with us afterwards. If AI isn’t the right answer for a process, we’ll say so, and say why."
        rail="ai"
      />
      <Section>
        <StripMap line="ai" items={offers.map((o) => ({ id: o.id, title: o.title, body: <p>{o.body}</p> }))} />
      </Section>
      <CloseBand title="Start with a conversation, not a contract." />
    </>
  );
}
