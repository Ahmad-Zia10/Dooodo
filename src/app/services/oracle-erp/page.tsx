import type { Metadata } from "next";
import { ServiceLinePage, ToolList } from "@/components/service-line-page";
import { Section } from "@/components/ui";
import { erpLine } from "@/content/services";

export const metadata: Metadata = {
  title: "Oracle ERP implementation, migration and support",
  description:
    "Oracle Fusion Cloud ERP implementation, E-Business Suite to Cloud migration, extensions, integrations and managed support, with AI built on top.",
  alternates: { canonical: "/services/oracle-erp" },
};

export default function OracleErpPage() {
  return (
    <ServiceLinePage
      line={erpLine}
      title="Oracle ERP, configured properly and kept that way."
      lede={erpLine.promise}
      intro={
        <>
          <p>
            An ERP is only as good as the decisions made while configuring it. We document every significant
            choice, such as chart of accounts, approval hierarchies, costing methods and security roles, so your
            team understands the system they inherit and auditors can follow it.
          </p>
          <p>
            We cover Oracle Fusion Cloud ERP across Financials, Procurement, Supply Chain and HCM, as well as
            E-Business Suite estates that are being maintained or moved to the cloud.
          </p>
        </>
      }
      extra={
        <Section tone="surface" className="border-t border-rule">
          <h2 className="h-section max-w-[22ch]">Modules and tools.</h2>
          <p className="lede mt-5">
            The Oracle products we implement and integrate with. Oracle is a trademark of Oracle Corporation;
            we are an independent consultancy.
          </p>
          <div className="mt-12">
            <ToolList
              groups={[
                { label: "Financials", items: ["General Ledger", "Payables", "Receivables", "Fixed Assets", "Cash Management"] },
                { label: "Supply chain", items: ["Procurement", "Inventory", "Order Management", "Planning"] },
                { label: "People", items: ["Core HR", "Payroll", "Absence", "Talent"] },
                { label: "Platform", items: ["Oracle Integration Cloud", "Visual Builder", "APEX", "OTBI and BI Publisher"] },
              ]}
            />
          </div>
        </Section>
      }
    />
  );
}
