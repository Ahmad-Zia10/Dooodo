import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | AI engineering and Oracle ERP`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const DIRECTION_CONTRACT = `<!--
THESIS: AI engineering and Oracle ERP drawn as two lines of one transit network; the interchanges are the offer. Refuses the stock-photo consultancy hero and the dark neon AI page.
OWN-WORLD: Cool paper ground, white plates, ink rules. Cobalt E line, saffron A line, route bullets, white station dots ringed in ink, capsule interchanges, 45/90 geometry. Archivo, narrowed for display.
STORY: A buyer sees both disciplines and where they meet, believes the firm is specific and honest, and starts a conversation.
FIRST VIEWPORT: Left-aligned headline with lede and two actions on top, and a full-width network diagram below. Station hover reveals summaries in the caption rail.
FORM: Vignelli/Unimark transit diagram identity, candidate 7 of 7, seed 104a130c.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
  knowsAbout: ["Oracle ERP", "Oracle Fusion Cloud", "AI agents", "Intelligent automation", "Conversational AI", "Machine learning"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={archivo.variable}>
      <body className="flex min-h-dvh flex-col">
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
