import type { Metadata } from "next";
import { CloseBand } from "@/components/service-line-page";
import { StripMap } from "@/components/strip-map";
import { PageHeader, Section } from "@/components/ui";
import { engagementModels, principles, security, stages } from "@/content/approach";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How engagements run: four delivery stages, engagement models, production principles, and how we handle your data and access.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        title="No black boxes. A route you can follow."
        lede="Four stages with clear owners and written outputs, and something working in front of you early. Here is how an engagement runs, how you can buy it, and how we treat your data."
        rail="ink"
      />

      <Section>
        <h2 className="h-section max-w-[18ch]">The four stages.</h2>
        <div className="mt-14">
          <StripMap
            line="ink"
            items={stages.map((s) => ({
              id: s.id,
              title: s.name,
              body: (
                <>
                  <p className="font-medium text-ink">{s.short}</p>
                  <p>{s.body}</p>
                </>
              ),
              aside: (
                <p className="mt-5 border-t border-rule pt-4 text-[0.94rem] text-ink-2">
                  <span className="font-semibold text-ink">You receive: </span>
                  {s.output.join(" · ")}
                </p>
              ),
            }))}
          />
        </div>
      </Section>

      <Section tone="surface" className="border-y border-rule" id="engagement-models">
        <h2 className="h-section max-w-[20ch]">Ways to work with us.</h2>
        <p className="lede mt-5">Start small and expand only when the first piece has earned it.</p>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-[3px] border-ink text-[0.85rem] text-ink-3">
                <th scope="col" className="py-3 pr-6 font-semibold">Model</th>
                <th scope="col" className="py-3 pr-6 font-semibold">Typical length</th>
                <th scope="col" className="py-3 font-semibold">What it is</th>
              </tr>
            </thead>
            <tbody>
              {engagementModels.map((m) => (
                <tr key={m.name} className="border-b border-rule align-top">
                  <th scope="row" className="py-5 pr-6 text-[1.1rem] font-semibold">{m.name}</th>
                  <td className="whitespace-nowrap py-5 pr-6 tabular-nums text-ink-2">{m.length}</td>
                  <td className="py-5 leading-relaxed text-ink-2">{m.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="security">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="h-section">Security and data handling.</h2>
            <p className="lede mt-5">
              The commitments we make before we see any of your systems.
            </p>
          </div>
          <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {security.map((s) => (
              <div key={s.title} className="border-t-[3px] border-ink pt-5">
                <dt className="h-sub text-[1.15rem]">{s.title}</dt>
                <dd className="prose-body mt-2">{s.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="surface" className="border-t border-rule">
        <h2 className="h-section max-w-[20ch]">Principles we build by.</h2>
        <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="border-t-[3px] border-ink pt-5">
              <dt className="h-sub text-[1.15rem]">{p.title}</dt>
              <dd className="prose-body mt-2">{p.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CloseBand title="Start with a discovery sprint." body="A fixed-price way to find out what is worth building, and what it will take, before you commit to more." />
    </>
  );
}
