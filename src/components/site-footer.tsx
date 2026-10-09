import Link from "next/link";
import { aiLine, erpLine } from "@/content/services";
import { site } from "@/content/site";
import { Container } from "./ui";
import { LineBullet } from "./line-bullet";
import { Wordmark } from "./wordmark";

const company = [
  { href: "/industries", label: "Industries" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div aria-hidden="true" className="flex flex-col gap-[3px]">
        <span className="h-[5px] bg-ai" />
        <span className="h-[5px] bg-erp-bright" />
      </div>
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Wordmark inverted />
          <p className="mt-5 max-w-[34ch] text-[0.95rem] leading-relaxed text-white/70">
            AI engineering and Oracle ERP under one roof. Headquartered in Delhi NCR, working with clients
            worldwide.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 md:col-span-8">
        <FooterCol title={aiLine.name} line="ai">
          <li><Link href="/services/ai">All AI services</Link></li>
          <li><Link href="/services/consulting">AI strategy & consulting</Link></li>
          <li><Link href="/services/app-development">App development</Link></li>
        </FooterCol>
        <FooterCol title={erpLine.name} line="erp">
          {erpLine.stations.slice(0, 4).map((s) => (
            <li key={s.id}>
              <Link href={`${erpLine.href}#${s.id}`}>{s.name}</Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="Company">
          {company.map((c) => (
            <li key={c.href}>
              <Link href={c.href}>{c.label}</Link>
            </li>
          ))}
        </FooterCol>
        </div>
      </Container>

      <Container className="text-[0.85rem] text-white/65">
        <div className="grid gap-6 border-t border-white/15 py-8 md:grid-cols-2">
        <address className="not-italic leading-relaxed">
          {site.legalName}
          <br />
          {site.address.street}, {site.address.locality}, {site.address.country}
          <br />
          <a className="underline-offset-4 hover:text-white hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          {site.cin && <><br />CIN {site.cin}</>}
          {site.gstin && <><br />GSTIN {site.gstin}</>}
        </address>
        <div className="flex flex-wrap items-end gap-x-6 gap-y-2 md:justify-end">
          <Link className="hover:text-white" href="/privacy">Privacy</Link>
          <Link className="hover:text-white" href="/terms">Terms</Link>
          <span>© <CopyrightYear /> {site.name}</span>
        </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  line,
  children,
}: {
  title: string;
  line?: "ai" | "erp";
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-[0.95rem] font-semibold">
        {line && <LineBullet line={line} size="sm" decorative />}
        {title}
      </p>
      <ul className="mt-4 space-y-2.5 text-[0.93rem] text-white/70 [&_a:hover]:text-white">{children}</ul>
    </div>
  );
}

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}
