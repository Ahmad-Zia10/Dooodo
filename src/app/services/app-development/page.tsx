import type { Metadata } from "next";
import { CloseBand } from "@/components/service-line-page";
import { StripMap } from "@/components/strip-map";
import { PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Custom application development",
  description:
    "Web and mobile applications with AI built into the core: discovery, design, engineering, cloud infrastructure and launch.",
  alternates: { canonical: "/services/app-development" },
};

const offers = [
  {
    id: "discovery",
    title: "Product discovery",
    body: "User interviews, workflow mapping and clickable prototypes that test the idea before engineering starts.",
  },
  {
    id: "web",
    title: "Web applications",
    body: "Customer portals, internal tools and SaaS products built with TypeScript, React and Next.js, accessible and fast by default.",
  },
  {
    id: "mobile",
    title: "Mobile applications",
    body: "Cross-platform iOS and Android apps for field teams, customers and partners, with offline support where work happens away from a desk.",
  },
  {
    id: "ai-features",
    title: "AI inside the product",
    body: "Search, assistants, summarisation and automation designed into the product from the start, with the evaluation and cost controls to keep them reliable.",
  },
  {
    id: "platform",
    title: "Cloud and delivery",
    body: "Infrastructure as code, CI/CD, observability and a security review before launch, on AWS, Azure, Google Cloud or Oracle Cloud.",
  },
];

export default function AppDevelopmentPage() {
  return (
    <>
      <PageHeader
        title="Software built to be run, not just shipped."
        lede="Web and mobile products with AI in the core, built by engineers who also understand the back-office systems those products need to talk to."
        rail="ai"
      />
      <Section>
        <StripMap line="ai" items={offers.map((o) => ({ id: o.id, title: o.title, body: <p>{o.body}</p> }))} />
      </Section>
      <CloseBand title="Have a product to build?" />
    </>
  );
}
