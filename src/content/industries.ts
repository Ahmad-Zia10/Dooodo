import type { LineId } from "./services";

export type UseCase = { text: string; lines: LineId[] };

export type Industry = {
  id: string;
  name: string;
  context: string;
  useCases: UseCase[];
};

/**
 * Example use-cases: where we would typically start in each sector.
 * These describe capabilities, not delivered client work.
 */
export const industries: Industry[] = [
  {
    id: "financial-services",
    name: "Financial services",
    context:
      "High volumes, strict controls, and regulators who expect every decision to be explainable.",
    useCases: [
      { text: "Automated reconciliation with exception queues and full audit trails", lines: ["ai", "erp"] },
      { text: "KYC document extraction and validation", lines: ["ai"] },
      { text: "Oracle Financials consolidation across entities", lines: ["erp"] },
    ],
  },
  {
    id: "retail",
    name: "Retail & e-commerce",
    context:
      "Thin margins, seasonal peaks, and customers who expect an answer immediately.",
    useCases: [
      { text: "Support assistants grounded in order, return and product data", lines: ["ai"] },
      { text: "Demand forecasting fed back into replenishment", lines: ["ai", "erp"] },
      { text: "Marketplace and storefront integration with Oracle SCM", lines: ["erp"] },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    context:
      "Sensitive data, clinical staff with no time to spare, and paperwork that never ends.",
    useCases: [
      { text: "Claims and referral document intake", lines: ["ai"] },
      { text: "Procurement and inventory control for consumables", lines: ["erp"] },
      { text: "Staff scheduling and HCM workflows", lines: ["erp", "ai"] },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & supply chain",
    context:
      "Many partners, many systems, and costs that rise every hour a shipment is unaccounted for.",
    useCases: [
      { text: "Freight invoice audit and three-way matching", lines: ["ai", "erp"] },
      { text: "Shipment exception triage agents", lines: ["ai"] },
      { text: "Carrier and WMS integration with Oracle", lines: ["erp"] },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    context:
      "Physical lines, tight tolerances, and planning that depends on accurate stock.",
    useCases: [
      { text: "Visual inspection on production lines", lines: ["ai"] },
      { text: "Oracle SCM and manufacturing cloud rollout", lines: ["erp"] },
      { text: "Maintenance and quality anomaly alerts", lines: ["ai", "erp"] },
    ],
  },
  {
    id: "technology",
    name: "SaaS & technology",
    context:
      "Fast-moving teams who want AI inside the product, not in a slide.",
    useCases: [
      { text: "In-product copilots and agent features", lines: ["ai"] },
      { text: "Support deflection with retrieval over docs and tickets", lines: ["ai"] },
      { text: "Subscription billing and revenue recognition in Oracle", lines: ["erp"] },
    ],
  },
  {
    id: "public-sector",
    name: "Public sector",
    context:
      "Accountability, accessibility, and processes that have to work for everyone.",
    useCases: [
      { text: "Citizen-facing assistants with clear escalation to staff", lines: ["ai"] },
      { text: "Grant and case document processing", lines: ["ai"] },
      { text: "Financial management and procurement modernisation", lines: ["erp"] },
    ],
  },
  {
    id: "education",
    name: "Education",
    context:
      "Small administrative teams serving large numbers of students and staff.",
    useCases: [
      { text: "Admissions and student-query assistants", lines: ["ai"] },
      { text: "Fee, finance and HR administration on Oracle", lines: ["erp"] },
      { text: "Document verification for applications", lines: ["ai"] },
    ],
  },
];
