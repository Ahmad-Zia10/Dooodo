/**
 * Company facts. Anything marked TODO(owner) is a placeholder the owner must
 * confirm before launch. See SITE-BRIEF.md → "Open items for the owner".
 */
export const site = {
  name: "Nanhi AI Mindforge",
  // TODO(owner): confirm exact registered legal name.
  legalName: "Nanhi AI Mindforge Private Limited",
  // TODO(owner): replace with the production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nanhimindforge.com",
  description:
    "Nanhi AI Mindforge is a technology consultancy that implements Oracle ERP and builds AI agents, automation and copilots on top of it. Headquartered in Delhi NCR, working with clients worldwide.",
  // TODO(owner): confirm inboxes.
  email: "hello@nanhimindforge.com",
  careersEmail: "careers@nanhimindforge.com",
  address: {
    // TODO(owner): registered street address.
    street: "Registered office address to be confirmed",
    locality: "New Delhi",
    region: "Delhi NCR",
    country: "India",
  },
  // TODO(owner): fill in once available; rendered only when non-empty.
  cin: "",
  gstin: "",
  coreHours: "Monday to Friday, 09:30 to 18:30 IST",
  responseTime: "one working day",
} as const;

export const nav = [
  { href: "/services/ai", label: "AI" },
  { href: "/services/oracle-erp", label: "Oracle ERP" },
  { href: "/industries", label: "Industries" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
] as const;
