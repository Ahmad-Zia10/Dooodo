import type { Metadata } from "next";
import { ServiceLinePage, ToolList } from "@/components/service-line-page";
import { Section } from "@/components/ui";
import { aiLine } from "@/content/services";

export const metadata: Metadata = {
  title: "AI agents, automation and copilots",
  description:
    "AI agents, intelligent automation, conversational AI, document AI and predictive ML, designed, built and operated inside your systems.",
  alternates: { canonical: "/services/ai" },
};

export default function AiPage() {
  return (
    <ServiceLinePage
      line={aiLine}
      title="AI that does the work, inside your systems."
      lede={aiLine.promise}
      intro={
        <>
          <p>
            We start from a process, not a model. Whether the right answer is an agent, a retrieval assistant, a
            forecasting model or plain automation, it has to connect to the systems your teams already use and
            report against a number you care about.
          </p>
          <p>
            We work with commercial and open models and choose per use case, based on accuracy, cost, latency
            and data sensitivity. The choice is documented, so you are never locked in by a decision you
            didn&rsquo;t see being made.
          </p>
        </>
      }
      extra={
        <Section tone="surface" className="border-t border-rule">
          <h2 className="h-section max-w-[22ch]">What we build with.</h2>
          <p className="lede mt-5">
            Technologies we work with day to day. We are not affiliated with or endorsed by these vendors; we
            choose whatever fits your stack.
          </p>
          <div className="mt-12">
            <ToolList
              groups={[
                { label: "Models", items: ["OpenAI", "Anthropic Claude", "Google Gemini", "Llama and other open-weight models"] },
                { label: "Cloud AI platforms", items: ["Azure AI Foundry", "AWS Bedrock", "Google Vertex AI", "OCI Generative AI"] },
                { label: "Retrieval & data", items: ["PostgreSQL with pgvector", "Elasticsearch", "Snowflake", "Databricks"] },
                { label: "Engineering", items: ["Python", "TypeScript", "LangGraph", "Kubernetes and serverless"] },
              ]}
            />
          </div>
        </Section>
      }
    />
  );
}
