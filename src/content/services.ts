export type LineId = "erp" | "ai";

export type Station = {
  id: string;
  name: string;
  summary: string;
  /** What the engagement actually covers. */
  scope: string[];
};

export type Line = {
  id: LineId;
  code: "E" | "A";
  name: string;
  href: string;
  promise: string;
  stations: Station[];
};

export const erpLine: Line = {
  id: "erp",
  code: "E",
  name: "Oracle ERP",
  href: "/services/oracle-erp",
  promise:
    "We implement, migrate, extend and run Oracle ERP, so the system your finance, people and supply chain depend on is configured properly and stays that way.",
  stations: [
    {
      id: "implementation",
      name: "Implementation",
      summary:
        "Fresh Oracle Fusion Cloud ERP rollouts, phased by module and business unit, with configuration choices documented and defended.",
      scope: [
        "Fit-gap analysis against your processes",
        "Configuration of Financials, Procurement, SCM and HCM",
        "Data conversion and reconciliation plans",
        "User acceptance testing and cut-over runbooks",
      ],
    },
    {
      id: "migration",
      name: "Cloud migration",
      summary:
        "Moving from E-Business Suite or on-premise estates to Oracle Cloud without losing history, controls or month-end.",
      scope: [
        "Current-state assessment and migration roadmap",
        "Customisation rationalisation: keep, rebuild or retire",
        "Historical data strategy and archival",
        "Parallel runs and controlled go-live",
      ],
    },
    {
      id: "extensions",
      name: "Extensions",
      summary:
        "Custom modules, reports and workflows built on Oracle's extension frameworks, so upgrades don't break them.",
      scope: [
        "Oracle Visual Builder and APEX applications",
        "BI Publisher and OTBI reporting",
        "Approval workflows and business rules",
        "Upgrade-safe extension patterns",
      ],
    },
    {
      id: "integrations",
      name: "Integrations",
      summary:
        "Finance, HCM and supply-chain data flowing cleanly between Oracle and the rest of your estate: banks, CRMs, payroll, warehouses.",
      scope: [
        "Oracle Integration Cloud and REST/SOAP APIs",
        "Bank, payment-gateway and tax integrations",
        "CRM, e-commerce and WMS connectors",
        "Monitoring, retries and error queues",
      ],
    },
    {
      id: "support",
      name: "Managed support",
      summary:
        "Ongoing functional and technical support under agreed service levels, including quarterly update testing.",
      scope: [
        "Tiered incident and change management",
        "Quarterly Oracle update regression testing",
        "Period-close support windows",
        "Continuous improvement backlog",
      ],
    },
  ],
};

export const aiLine: Line = {
  id: "ai",
  code: "A",
  name: "AI",
  href: "/services/ai",
  promise:
    "We design, build and operate AI agents, automation and copilots that work inside your systems, are grounded in your data, and are measured by what they change.",
  stations: [
    {
      id: "strategy",
      name: "AI strategy",
      summary:
        "A plain answer to where AI pays off in your operation, where it doesn't, and what to build first.",
      scope: [
        "Process and data readiness review",
        "Use-case scoring by value, risk and effort",
        "Build-versus-buy recommendations",
        "A sequenced, costed roadmap",
      ],
    },
    {
      id: "agents",
      name: "AI agents",
      summary:
        "Agents that plan, call your tools and finish multi-step work across systems, with approval gates where they matter.",
      scope: [
        "Tool and API design for agent access",
        "Multi-step workflow orchestration",
        "Human approval and escalation paths",
        "Evaluation suites and run logs",
      ],
    },
    {
      id: "automation",
      name: "Intelligent automation",
      summary:
        "Repetitive back-office work removed by combining language models with conventional automation and RPA.",
      scope: [
        "Process mining and task capture",
        "Document intake and classification",
        "Exception handling designed in, not bolted on",
        "Before-and-after effort measurement",
      ],
    },
    {
      id: "conversational",
      name: "Conversational AI",
      summary:
        "Support, sales and internal assistants on web, chat and voice that answer from your knowledge, not guesswork.",
      scope: [
        "Retrieval over your documentation and tickets",
        "Hand-off to human agents with full context",
        "Channel integration: web, WhatsApp, Teams, Slack",
        "Deflection and satisfaction tracking",
      ],
    },
    {
      id: "document-ai",
      name: "Document & vision AI",
      summary:
        "Invoices, contracts, forms and images turned into structured, validated data your systems can use.",
      scope: [
        "Extraction with field-level confidence",
        "Validation against master data",
        "Visual inspection for physical processes",
        "Review queues for low-confidence items",
      ],
    },
    {
      id: "ml",
      name: "Predictive ML",
      summary:
        "Forecasting, scoring and anomaly detection wired into the decisions your teams already make.",
      scope: [
        "Demand and cash-flow forecasting",
        "Risk and propensity scoring",
        "Anomaly detection on transactions",
        "Model monitoring and retraining",
      ],
    },
    {
      id: "apps",
      name: "Custom applications",
      summary:
        "Web and mobile products with AI built into the core, from first prototype to production.",
      scope: [
        "Product discovery and UX",
        "Web and mobile engineering",
        "Cloud infrastructure and CI/CD",
        "Security review before launch",
      ],
    },
  ],
};

/** Where the two lines meet: work that needs both disciplines. */
export const interchanges = [
  {
    id: "erp-copilots",
    name: "Copilots on ERP data",
    summary:
      "Assistants that answer finance, procurement and HR questions directly from your Oracle data, respecting the same roles and permissions.",
  },
  {
    id: "finance-automation",
    name: "Finance operations automation",
    summary:
      "Invoice matching, reconciliations and close tasks handled by agents that post into Oracle, with every action logged and reviewable.",
  },
  {
    id: "supply-signals",
    name: "Supply-chain signals",
    summary:
      "Forecasts and anomaly alerts generated from ERP transactions and pushed back into the planning screens your teams already use.",
  },
] as const;

export const lines = { erp: erpLine, ai: aiLine } as const;
