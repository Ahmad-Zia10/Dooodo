/**
 * Route planner: common starting problems, and the route we would typically
 * take to solve them. Illustrative journeys, not records of past work.
 */
export type Leg = {
  on: "ai" | "erp" | "both";
  station: string;
  does: string;
};

export type Route = {
  id: string;
  problem: string;
  legs: Leg[];
  arrive: string;
  measure: string;
  interest: "AI" | "Oracle ERP" | "Both";
};

export const routes: Route[] = [
  {
    id: "month-end",
    problem: "Month-end close drags on for days",
    legs: [
      { on: "erp", station: "ERP health check", does: "Map the close calendar, the manual journals and every spreadsheet that feeds them." },
      { on: "erp", station: "Extensions", does: "Fix configuration and add reconciliation rules inside Oracle where the gaps are." },
      { on: "both", station: "Finance operations automation", does: "Agents prepare reconciliations and accruals; accountants review and approve." },
    ],
    arrive: "A shorter, calmer close",
    measure: "Working days to close, manual journals per period",
    interest: "Both",
  },
  {
    id: "invoices",
    problem: "Invoices are keyed in by hand",
    legs: [
      { on: "ai", station: "Document AI", does: "Extract supplier, PO and line data from every format you receive, with a confidence score per field." },
      { on: "both", station: "Finance operations automation", does: "Match against Oracle purchase orders and receipts; route only the exceptions to people." },
      { on: "erp", station: "Integrations", does: "Post approved invoices into Payables with a full audit trail." },
    ],
    arrive: "People handle exceptions, not data entry",
    measure: "Share of invoices processed without manual keying",
    interest: "Both",
  },
  {
    id: "support",
    problem: "Our support team is drowning in tickets",
    legs: [
      { on: "ai", station: "AI strategy", does: "Sort ticket history into what can be answered, what needs an action, and what needs a person." },
      { on: "ai", station: "Conversational AI", does: "An assistant that answers from your help centre and order data, and says when it doesn't know." },
      { on: "ai", station: "AI agents", does: "Let it act on routine requests such as order changes, with approval gates where money moves." },
    ],
    arrive: "Faster answers, and agents freed for hard cases",
    measure: "Tickets resolved without hand-off, time to first response",
    interest: "AI",
  },
  {
    id: "ebs",
    problem: "We need to move off E-Business Suite",
    legs: [
      { on: "erp", station: "Cloud migration", does: "Inventory customisations, decide what to keep, rebuild or retire, and plan historical data." },
      { on: "erp", station: "Implementation", does: "Configure Oracle Fusion Cloud module by module, with parallel runs before cut-over." },
      { on: "erp", station: "Integrations", does: "Reconnect banks, payroll, CRM and warehouses through supported, monitored interfaces." },
      { on: "both", station: "Copilots on ERP data", does: "Once the data is clean, give finance and operations an assistant that answers from it." },
    ],
    arrive: "A supported cloud ERP, ready for AI",
    measure: "Clean go-live reconciliation, incidents in the first 90 days",
    interest: "Oracle ERP",
  },
  {
    id: "ai-plan",
    problem: "The board wants an AI plan",
    legs: [
      { on: "ai", station: "AI strategy", does: "Review processes, data and risk appetite across the business in two to three weeks." },
      { on: "ai", station: "Use-case prioritisation", does: "Score candidates on value, feasibility and risk, and agree the first one together." },
      { on: "both", station: "Copilots on ERP data", does: "Often the fastest credible first step: answers from systems you already trust." },
    ],
    arrive: "A costed roadmap and a first win",
    measure: "Roadmap approved, first use case live and measured",
    interest: "AI",
  },
  {
    id: "forecasts",
    problem: "Our forecasts are guesswork",
    legs: [
      { on: "erp", station: "Integrations", does: "Bring sales, inventory and supplier data out of Oracle and into one clean pipeline." },
      { on: "ai", station: "Predictive ML", does: "Build forecasting models and test them honestly against the method you use today." },
      { on: "both", station: "Supply-chain signals", does: "Push forecasts and alerts back into the Oracle planning screens your team already uses." },
    ],
    arrive: "Plans built on evidence",
    measure: "Forecast error against your current baseline",
    interest: "Both",
  },
];
