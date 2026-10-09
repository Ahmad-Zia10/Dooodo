import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: `How ${site.name} collects and uses personal data on this website.`,
  alternates: { canonical: "/privacy" },
};

// TODO(owner): have this notice reviewed by counsel before launch.
export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy notice" lede="What we collect on this website, why, and what you can ask us to do with it." rail="ink" />
      <Container className="py-16 sm:py-20">
        <div className="prose-body">
          <p>Last updated: 9 October 2026.</p>

          <h2>Who we are</h2>
          <p>
            This website is operated by {site.legalName} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;), {site.address.locality},{" "}
            {site.address.country}. For anything in this notice, contact{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Contact form:</strong> your name, work email, company (optional), area of interest and
              message.
            </li>
            <li>
              <strong>Emails you send us</strong>, including job applications and any attachments.
            </li>
            <li>
              <strong>Technical data:</strong> our hosting provider processes IP addresses and request logs to
              deliver and secure the site. We do not use advertising or tracking cookies.
            </li>
          </ul>

          <h2>Why we use it</h2>
          <p>
            Only to respond to your enquiry or application, to keep a record of our correspondence, and to protect
            the site from abuse. We do not sell personal data or use it for unrelated marketing.
          </p>

          <h2>Who we share it with</h2>
          <p>
            Service providers who help us run the site and email, such as our hosting and email delivery
            providers, under contracts that limit their use of the data. They may process data outside India.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiries are kept for up to 24 months after our last contact, and job applications for up to 12
            months, unless you ask us to delete them sooner or a longer period is required by law.
          </p>

          <h2>Your rights</h2>
          <p>
            Under India&rsquo;s Digital Personal Data Protection Act, 2023, and, where it applies, the GDPR, you
            can ask to access, correct or erase your personal data, withdraw consent, or raise a grievance. Email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within 30 days.
          </p>

          <h2>Changes</h2>
          <p>We will update this page if our practices change, and revise the date above.</p>
        </div>
      </Container>
    </>
  );
}
