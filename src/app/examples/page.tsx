import type { Metadata } from "next";
import { ExampleCard } from "@/components/cards";
import { CloseBand } from "@/components/service-line-page";
import { PageHeader, Section } from "@/components/ui";
import { exampleNotice, examples } from "@/content/examples";

export const metadata: Metadata = {
  title: "Example engagements",
  description:
    "How we would run typical AI and Oracle ERP projects, stage by stage: invoice automation, EBS to Fusion migration, support assistants and month-end close.",
  alternates: { canonical: "/examples" },
};

export default function ExamplesPage() {
  return (
    <>
      <PageHeader
        title="What a project with us looks like."
        lede="Four typical engagements, end to end: the situation, the route we would take, what you would receive at each stage and how we would measure success."
      >
        <p className="mt-8 max-w-[68ch] border-l-[3px] border-ink pl-4 text-[0.95rem] leading-relaxed text-ink-2">
          {exampleNotice} As a new company, we would rather show you exactly how we work than borrow someone
          else&rsquo;s logos.
        </p>
      </PageHeader>

      <Section>
        <ul className="grid gap-x-12 gap-y-16 md:grid-cols-2">
          {examples.map((ex) => (
            <li key={ex.slug}>
              <ExampleCard ex={ex} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </Section>

      <CloseBand
        title="Recognise one of these?"
        body="Tell us how your version differs. We will reply within one working day with how we would approach it."
      />
    </>
  );
}
