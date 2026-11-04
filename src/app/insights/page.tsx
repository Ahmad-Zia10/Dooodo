import type { Metadata } from "next";
import { ArticleCard } from "@/components/cards";
import { CloseBand } from "@/components/service-line-page";
import { PageHeader, Section } from "@/components/ui";
import { articles } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical notes on Oracle ERP and AI: migration checklists, building agents on top of your ERP, and measuring AI pilots properly.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        title="Notes from where ERP meets AI."
        lede="Practical writing for the people who have to make these projects work: finance leaders, IT owners and operations teams. No hype, and no gated downloads."
      />
      <Section>
        <ul className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <li key={a.slug}>
              <ArticleCard a={a} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </Section>
      <CloseBand title="Want a second opinion on your plan?" />
    </>
  );
}
