import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container, Rail } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a conversation with ${site.name}. A consultant replies within ${site.responseTime}.`,
  alternates: { canonical: "/contact" },
};

const next = [
  { title: "We reply", body: `A consultant reads your note and replies within ${site.responseTime}, usually with a few questions.` },
  { title: "We talk", body: "A 30-minute call to understand the process, the systems involved and what success would look like." },
  { title: "We propose", body: "If we can help, a short written proposal follows, often starting with a fixed-price discovery sprint." },
];

export default function ContactPage() {
  return (
    <>
      <div className="border-b border-rule bg-surface">
        <Rail kind="both" />
        <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h1 className="display text-[clamp(2.6rem,5.5vw,4.6rem)]">Let&rsquo;s talk about your process.</h1>
            <p className="lede mt-6">
              A few lines are enough: what the work is, which systems are involved and what is getting in the
              way.
            </p>

            <dl className="mt-10 space-y-6 border-t border-rule pt-8">
              <div>
                <dt className="font-semibold">Email</dt>
                <dd>
                  <a className="text-erp underline underline-offset-4" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Office</dt>
                <dd className="text-ink-2">
                  <address className="not-italic">
                    {site.address.street}
                    <br />
                    {site.address.locality}, {site.address.region}, {site.address.country}
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Hours</dt>
                <dd className="text-ink-2">{site.coreHours}. Calls outside these hours by arrangement.</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </Container>
      </div>

      <Container className="py-16 sm:py-20">
        <h2 className="h-sub text-[1.7rem]">What happens next</h2>
        <ol className="relative mt-10 grid gap-8 md:grid-cols-3">
          <span aria-hidden="true" className="absolute bottom-3 left-[11px] top-3 w-[8px] rounded-full bg-ink md:inset-x-3 md:bottom-auto md:top-[11px] md:h-[8px] md:w-auto" />
          {next.map((n, i) => (
            <li key={n.title} className="relative pl-14 md:pl-0 md:pt-14">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 grid size-[30px] place-items-center rounded-full border-[3.5px] border-ink bg-paper text-[0.75rem] font-bold"
              >
                {i + 1}
              </span>
              <h3 className="font-semibold">{n.title}</h3>
              <p className="prose-body mt-1.5">{n.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
