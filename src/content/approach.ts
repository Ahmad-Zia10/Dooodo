export const stages = [
  {
    id: "discover",
    name: "Discover",
    short: "Pick the one problem worth solving first.",
    body: "We sit with the people who do the work, map the process and its data, and agree a single measurable outcome. You leave with a written scope, a risk list and a fixed price for what comes next, whether or not you continue with us.",
    output: ["Process and data map", "Success metric and baseline", "Scoped, priced plan"],
  },
  {
    id: "design",
    name: "Design",
    short: "Decide architecture, guardrails and tests before code.",
    body: "Architecture, model and vendor choices, access controls and the evaluation plan are written down and reviewed with your IT and security owners. Nothing is built that your team cannot later operate.",
    output: ["Solution architecture", "Security and access design", "Evaluation plan"],
  },
  {
    id: "build",
    name: "Build & integrate",
    short: "Ship into your real systems in short, visible increments.",
    body: "We work in two-week increments against your actual systems, in your environments, with a demo at the end of each. Approvals and human review are built in wherever money, customers or compliance are involved.",
    output: ["Working increments every two weeks", "Integration and regression tests", "Runbooks and handover notes"],
  },
  {
    id: "operate",
    name: "Operate & improve",
    short: "Measure against the baseline, then keep improving.",
    body: "After go-live we monitor quality, cost and the metric we agreed at the start. You can run it yourselves with our documentation, or keep us on under a support agreement with defined service levels.",
    output: ["Live quality and cost monitoring", "Monthly outcome report", "Optional managed support"],
  },
] as const;

export const principles = [
  {
    title: "Grounded, not guessed",
    body: "AI outputs are tied to your source data with retrieval, citations and automated evaluations. If the system does not know, it says so.",
  },
  {
    title: "Runs in your stack",
    body: "Cloud, hybrid or on-premise, inside your tenancy where possible, integrated with the ERP and tools you already run.",
  },
  {
    title: "People approve what matters",
    body: "Approval gates and audit trails come first. Automation earns more autonomy only after it has earned trust.",
  },
  {
    title: "Measured by outcomes",
    body: "Every engagement starts with a baseline and a target metric, such as hours saved, days to close or tickets resolved, and reports against it.",
  },
] as const;

export const engagementModels = [
  {
    name: "Discovery sprint",
    length: "2–3 weeks",
    body: "A fixed-price assessment that ends in a written scope, architecture outline and costed plan. Useful on its own, even if you build elsewhere.",
  },
  {
    name: "Project delivery",
    length: "Typically 6–20 weeks",
    body: "A defined outcome delivered in milestones, priced fixed or capped. Weekly status reports and fortnightly demos.",
  },
  {
    name: "Managed service",
    length: "Monthly",
    body: "Ongoing support and improvement for Oracle ERP or AI systems under agreed service levels and a shared backlog.",
  },
  {
    name: "Dedicated team",
    length: "Quarterly",
    body: "Engineers and consultants working inside your team and tooling, with our delivery lead accountable for quality.",
  },
] as const;

export const security = [
  {
    title: "Confidentiality from the first call",
    body: "We sign your NDA, or offer ours, before any data or documentation is shared.",
  },
  {
    title: "Your data stays yours",
    body: "Client data is processed in your environment or in accounts you control wherever possible. We do not use it to train shared models.",
  },
  {
    title: "Least-privilege access",
    body: "Named accounts, the minimum roles needed, time-boxed access and revocation at hand-over.",
  },
  {
    title: "Model and vendor choice",
    body: "We recommend providers per use case and data sensitivity, including private and self-hosted models, and document the reasoning.",
  },
  {
    title: "Everything logged",
    body: "Agent actions, approvals and integration runs are logged so your auditors can see who or what did what, and when.",
  },
  {
    title: "Compliance-aware",
    body: "Designs account for India's Digital Personal Data Protection Act, GDPR and sector rules relevant to your business.",
  },
] as const;
