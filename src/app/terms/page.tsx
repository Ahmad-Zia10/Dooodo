import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms governing use of the ${site.name} website.`,
  alternates: { canonical: "/terms" },
};

// TODO(owner): have these terms reviewed by counsel before launch.
export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of use" lede="The terms that apply when you use this website." rail="ink" />
      <Container className="py-16 sm:py-20">
        <div className="prose-body">
          <p>Last updated: 9 October 2026.</p>

          <h2>About these terms</h2>
          <p>
            This website is operated by {site.legalName}. By using it you agree to these terms. Services we
            provide to clients are governed by separate written agreements, not by this page.
          </p>

          <h2>Information on this site</h2>
          <p>
            Content on this site describes our services in general terms and is provided for information only.
            Use cases are illustrative examples, not descriptions of specific client work. Nothing here is a
            binding offer or professional advice for your situation.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The text, design and graphics of this site belong to {site.name} unless stated otherwise. Oracle and
            other product names are trademarks of their respective owners and are used only to describe the
            technologies we work with; no affiliation or endorsement is implied.
          </p>

          <h2>Acceptable use</h2>
          <p>
            Please don&rsquo;t misuse the site, for example by attempting to break its security, overload it, or
            send spam through its forms.
          </p>

          <h2>Liability</h2>
          <p>
            We take care to keep the site accurate and available but cannot guarantee it. To the extent permitted
            by law, we are not liable for losses arising from use of the site.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of India, and the courts of New Delhi have jurisdiction.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </Container>
    </>
  );
}
