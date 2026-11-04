import { industryPhotos, type Photo } from "./photos";
import type { LineId } from "./services";

/**
 * Example engagements: how we would run a typical project, end to end.
 * These are illustrative, NOT records of past client work. Every page that
 * shows them must say so. Replace with real case studies as they happen.
 */
export type Example = {
  slug: string;
  title: string;
  sector: string;
  lines: LineId[];
  /** Route planner id, so "Discuss a similar project" can prefill the form. */
  route?: string;
  summary: string;
  situation: string[];
  stages: { name: string; weeks: string; does: string; outputs: string[] }[];
  measures: { metric: string; how: string }[];
  model: string;
  length: string;
  risks: string[];
  photo: Photo;
};

const photo = (id: string, caption: string, lines: LineId[]): Photo => ({ ...industryPhotos[id], caption, lines });

export const examples: Example[] = [
  {
    slug: "invoice-matching-distributor",
    title: "Taking invoice matching off the accounts payable team",
    sector: "Logistics and distribution",
    lines: ["ai", "erp"],
    route: "invoices",
    summary:
      "A distributor on Oracle Fusion Payables matches around 2,000 supplier invoices a month by hand. We would read the invoices with document AI, match them in Oracle, and leave people only the exceptions.",
    situation: [
      "Picture a regional distributor with 40 people in finance and a three-person accounts payable team. Invoices arrive as PDFs and scans from about 600 suppliers, in a dozen layouts.",
      "Each one is keyed into Oracle Fusion Payables and matched by hand against the purchase order and goods receipt. Month-end becomes a backlog, early-payment discounts are missed, and duplicate payments slip through more often than anyone would like.",
    ],
    stages: [
      {
        name: "Discover",
        weeks: "Weeks 1–2",
        does: "Sample three months of invoices, map the matching rules the team actually uses, and measure today's handling time and error rate.",
        outputs: ["Baseline: minutes per invoice, exception rate", "Supplier layout analysis", "Fixed-price plan for the build"],
      },
      {
        name: "Design",
        weeks: "Week 3",
        does: "Agree tolerance rules with the finance controller, design the exception queue, and decide which suppliers start in the pilot.",
        outputs: ["Matching and tolerance rules, signed off", "Approval and audit design", "Evaluation set of labelled invoices"],
      },
      {
        name: "Build and integrate",
        weeks: "Weeks 4–9",
        does: "Document AI extracts header and line data. An agent proposes the match in Oracle through standard APIs; anything outside tolerance goes to a person with the evidence attached.",
        outputs: ["Extraction and matching service", "Oracle Integration Cloud flows", "Exception queue for the AP team"],
      },
      {
        name: "Operate and improve",
        weeks: "From week 10",
        does: "Roll out supplier by supplier, report accuracy weekly, and widen automatic posting only where accuracy has earned it.",
        outputs: ["Weekly accuracy and volume report", "Runbook and handover", "Optional managed service"],
      },
    ],
    measures: [
      { metric: "Invoices matched without a person", how: "Share posted automatically, checked against a weekly audit sample" },
      { metric: "Handling time per invoice", how: "Compared with the discovery baseline" },
      { metric: "Duplicate and incorrect payments", how: "Count per month, before and after" },
    ],
    model: "Discovery sprint, then project delivery",
    length: "About 10 weeks to the first suppliers in production",
    risks: [
      "Poor scan quality from some suppliers: they stay manual until fixed at source.",
      "Purchase orders raised after the invoice: handled as a policy question, not hidden in the tool.",
    ],
    photo: photo("logistics", "Payables automation on Oracle Fusion", ["ai", "erp"]),
  },
  {
    slug: "ebs-to-fusion-manufacturer",
    title: "Moving a manufacturer from E-Business Suite to Fusion Cloud",
    sector: "Manufacturing",
    lines: ["erp"],
    route: "ebs",
    summary:
      "A manufacturer running Oracle EBS 12.2 with years of customisations needs to move to Fusion Cloud without losing control of month-end or the shop floor.",
    situation: [
      "Picture a mid-sized manufacturer with three plants on Oracle E-Business Suite 12.2. Over fifteen years it has collected more than 200 customisations, and few of the people who wrote them are still around.",
      "Premier support costs are rising, and the business wants Fusion Cloud's quarterly updates and reporting. The fear is a long, expensive migration that breaks costing or the close halfway through.",
    ],
    stages: [
      {
        name: "Discover",
        weeks: "Weeks 1–3",
        does: "Inventory every customisation, report and integration, and decide for each one whether to keep, rebuild on Fusion, or retire.",
        outputs: ["Customisation register with a decision for each", "Data migration strategy", "Phased roadmap with costs"],
      },
      {
        name: "Design",
        weeks: "Weeks 4–8",
        does: "Fit-gap workshops for Financials, Procurement, Inventory and Costing, with every configuration choice written down and defended.",
        outputs: ["Configuration workbook", "Extension designs on Visual Builder and OIC", "Cut-over plan"],
      },
      {
        name: "Build and integrate",
        weeks: "Weeks 9–24",
        does: "Configure Fusion, rebuild the extensions that earn their place, run three data migration cycles, and reconcile each one.",
        outputs: ["Configured Fusion environments", "Reconciled migration cycles", "User acceptance tests and training"],
      },
      {
        name: "Operate and improve",
        weeks: "Go-live and 3 months after",
        does: "Parallel run through one close, controlled go-live, then hypercare and a backlog of improvements for each quarterly update.",
        outputs: ["Go-live and hypercare", "Quarterly update regression tests", "Runbooks for the internal team"],
      },
    ],
    measures: [
      { metric: "Customisations carried forward", how: "Count kept versus retired, from the register" },
      { metric: "First close on Fusion", how: "Working days to close compared with the last close on EBS" },
      { metric: "Support tickets after go-live", how: "Volume per week through hypercare" },
    ],
    model: "Discovery sprint, then project delivery",
    length: "About 6 months to go-live, by module",
    risks: [
      "Undocumented customisations: the register is built from code and usage logs, not memory.",
      "Costing differences between EBS and Fusion: reconciled in every migration cycle, not at the end.",
    ],
    photo: photo("manufacturing", "EBS to Fusion Cloud migration", ["erp"]),
  },
  {
    slug: "support-assistant-retailer",
    title: "A support assistant that answers from real order data",
    sector: "Retail and e-commerce",
    lines: ["ai"],
    route: "support",
    summary:
      "An online retailer's support team answers the same order, return and delivery questions all day. We would build an assistant grounded in order data and policy, which hands over to a person when it isn't sure.",
    situation: [
      "Picture an e-commerce retailer that handles about 15,000 support conversations a month across chat and email. Most of them ask where an order is, how to return something, or whether an item is in stock.",
      "A previous chatbot answered from a list of FAQs and made things up when it didn't know, so customers learned to ask for a person straight away.",
    ],
    stages: [
      {
        name: "Discover",
        weeks: "Weeks 1–2",
        does: "Classify a month of conversations, find the questions that can be answered from systems, and measure today's resolution times.",
        outputs: ["Conversation analysis by intent", "Baseline: first response and resolution time", "Scope for the first release"],
      },
      {
        name: "Design",
        weeks: "Week 3",
        does: "Decide which actions the assistant may take, write the hand-over rules, and build an evaluation set from real questions.",
        outputs: ["Allowed actions and limits", "Hand-over rules", "Evaluation set of 300 questions"],
      },
      {
        name: "Build and integrate",
        weeks: "Weeks 4–8",
        does: "Retrieval over policies and help content, live lookups for orders and stock, and a hand-over that passes the full context to an agent.",
        outputs: ["Assistant in chat and email", "Order and stock integrations", "Agent hand-over in the help desk"],
      },
      {
        name: "Operate and improve",
        weeks: "From week 9",
        does: "Start with 10% of traffic, review wrong answers every week, and widen the rollout as accuracy holds.",
        outputs: ["Weekly quality review", "Cost per conversation report", "Optional managed service"],
      },
    ],
    measures: [
      { metric: "Conversations resolved without a person", how: "Counted only when the customer doesn't come back within 48 hours" },
      { metric: "Answer accuracy", how: "Scored against the evaluation set before every release" },
      { metric: "Customer satisfaction", how: "Post-chat rating, assistant versus human" },
    ],
    model: "Discovery sprint, then project delivery",
    length: "About 8 weeks to a first release",
    risks: [
      "Questions the data can't answer: the assistant says so and hands over.",
      "Peak season volume: load-tested before the rollout widens.",
    ],
    photo: photo("retail", "Grounded customer support", ["ai"]),
  },
  {
    slug: "month-end-close-financial-group",
    title: "A calmer month-end close for a multi-entity group",
    sector: "Financial services",
    lines: ["ai", "erp"],
    route: "month-end",
    summary:
      "A financial services group with twelve legal entities on Oracle Fusion takes eight working days to close. We would fix the configuration first, then let agents prepare reconciliations for accountants to approve.",
    situation: [
      "Picture a group of twelve legal entities in four countries, all on Oracle Fusion Financials. The close takes eight working days and depends on more than 60 spreadsheets.",
      "Intercompany balances rarely agree first time, manual journals pile up on the last two days, and the auditors ask the same questions every year.",
    ],
    stages: [
      {
        name: "Discover",
        weeks: "Weeks 1–3",
        does: "Map the close calendar task by task, list every spreadsheet and manual journal, and find which ones are configuration problems.",
        outputs: ["Close map with owners and timings", "Spreadsheet and journal register", "Prioritised fix list"],
      },
      {
        name: "Design",
        weeks: "Weeks 4–5",
        does: "Redesign intercompany rules and reconciliation in Oracle, and decide where agents prepare work and where people approve it.",
        outputs: ["Configuration changes, signed off", "Agent responsibilities and approval gates", "Audit trail design"],
      },
      {
        name: "Build and integrate",
        weeks: "Weeks 6–12",
        does: "Configuration fixes first. Then agents prepare bank and intercompany reconciliations and draft accruals, with every step logged.",
        outputs: ["Oracle configuration changes", "Reconciliation and accrual agents", "Close dashboard"],
      },
      {
        name: "Operate and improve",
        weeks: "Next three closes",
        does: "Run alongside the team for three closes, track each task's time, and retire spreadsheets one by one.",
        outputs: ["Close-by-close report", "Retired spreadsheet log", "Runbook for the finance team"],
      },
    ],
    measures: [
      { metric: "Working days to close", how: "Measured each month against the discovery baseline" },
      { metric: "Manual journals per period", how: "Count from Oracle, before and after" },
      { metric: "Spreadsheets in the close", how: "Retired against the register" },
    ],
    model: "Discovery sprint, then project delivery",
    length: "About 12 weeks, then three supported closes",
    risks: [
      "Changing a close mid-year: changes go live at the start of a period, with a rollback plan.",
      "Auditor confidence: the audit trail design is agreed with them before the build.",
    ],
    photo: photo("financial-services", "Finance close automation", ["ai", "erp"]),
  },
];

export const exampleNotice =
  "Illustrative example. This shows how we would run this kind of engagement. It is not a record of work for a past client, and the numbers describe the scenario, not results we have achieved.";
