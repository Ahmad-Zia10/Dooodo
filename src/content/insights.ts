import type { LineId } from "./services";

/** Articles. Dates are ISO (YYYY-MM-DD). Newest first. */
export type Block = { heading?: string; paragraphs?: string[]; list?: string[] };

export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  minutes: number;
  lines: LineId[];
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "ebs-to-fusion-checklist",
    title: "EBS to Fusion: what to settle before you sign a migration contract",
    summary:
      "Most E-Business Suite migrations that go badly were in trouble before the first workshop. Ten questions to answer while it is still cheap to change your mind.",
    date: "2026-11-04",
    minutes: 7,
    lines: ["erp"],
    body: [
      {
        paragraphs: [
          "Moving from Oracle E-Business Suite to Fusion Cloud is rarely a technical problem. The software is mature and the migration tools work. Projects run late because decisions that should have been made before the contract get made in the middle of the build, under pressure, by whoever is in the room.",
          "Here is what we would want answered before anyone signs a statement of work.",
        ],
      },
      {
        heading: "1. Do you know what you have customised?",
        paragraphs: [
          "Not roughly: a register of every customisation, report, interface and workflow, with who uses it and how often. Build it from code and usage logs, not from memory. Fifteen-year-old estates often have a third of their customisations unused.",
        ],
      },
      {
        heading: "2. Have you decided keep, rebuild or retire for each one?",
        paragraphs: [
          "Every item in the register needs a decision. Fusion's standard functionality now covers much of what was custom in EBS. What remains should be rebuilt on supported extension tools such as Visual Builder or Oracle Integration Cloud, so quarterly updates don't break it.",
        ],
      },
      {
        heading: "3. How much history are you taking?",
        paragraphs: [
          "Migrating ten years of transactions is expensive and rarely needed. Most companies move open balances and open transactions, and keep history in an archive that auditors can query. Decide this early; it changes the size of the project.",
        ],
      },
      {
        heading: "4. Who owns each design decision on your side?",
        paragraphs: [
          "A fit-gap workshop without a decision-maker produces a list of open questions. Name an owner for Financials, Procurement, Supply Chain and HCM before workshops start, and give them the time to do it.",
        ],
      },
      {
        heading: "5. What does the cut-over look like?",
        list: [
          "Which period-end will you go live after, and what is the fallback date?",
          "Will you run one close in parallel?",
          "How many full migration rehearsals are planned? We would want at least three, each reconciled.",
        ],
      },
      {
        heading: "6. How will you test each quarterly update?",
        paragraphs: [
          "Fusion updates four times a year. Without an automated regression suite for your key processes, every update becomes a small project. Plan the test suite as part of the migration, not after it.",
        ],
      },
      {
        heading: "7. What are you not moving?",
        paragraphs: [
          "Some processes are better outside the ERP. Agreeing the boundary early stops the project from quietly absorbing every adjacent problem in the business.",
        ],
      },
      {
        heading: "The short version",
        paragraphs: [
          "A good migration partner should want to answer these with you before quoting a fixed price. If they are happy to quote without them, the uncertainty hasn't gone away; it has been moved into change requests.",
          "We run this as a two-to-three week discovery sprint with a fixed price, and you keep the register and roadmap whoever you choose to build with.",
        ],
      },
    ],
  },
  {
    slug: "ai-agents-on-erp-five-questions",
    title: "Before you build an AI agent on top of your ERP: five questions",
    summary:
      "An agent that can read and write to Oracle is powerful and risky in equal measure. The questions that separate a useful one from an expensive demo.",
    date: "2026-11-04",
    minutes: 6,
    lines: ["ai", "erp"],
    body: [
      {
        paragraphs: [
          "Agents that act inside an ERP are the most valuable kind of business AI, and the easiest to get wrong. They touch money, suppliers and employees. A wrong answer in a chat window is embarrassing; a wrong posting in the ledger is an audit finding.",
          "These are the five questions we ask before writing any code.",
        ],
      },
      {
        heading: "1. Which single process, and what number should change?",
        paragraphs: [
          "\"Use AI in finance\" is not a project. \"Reduce the time accounts payable spends matching invoices, measured in minutes per invoice\" is. Pick one process with a baseline you can measure today, or you won't know whether the agent helped.",
        ],
      },
      {
        heading: "2. Is the data underneath good enough?",
        paragraphs: [
          "Agents inherit every problem in the ERP: duplicate suppliers, inconsistent item codes, approval hierarchies nobody maintains. Sometimes the right first step is a configuration fix, and the agent comes second. That is not a failure; it is why AI and ERP work belongs in one plan.",
        ],
      },
      {
        heading: "3. What may the agent do on its own?",
        list: [
          "Read only: answer questions and prepare work for a person.",
          "Propose: draft the posting or the match, and a person approves it.",
          "Act within limits: post automatically below a value or confidence threshold, with everything logged.",
        ],
      },
      {
        paragraphs: [
          "Start at the first or second level. Autonomy should be earned with measured accuracy, one threshold at a time.",
        ],
      },
      {
        heading: "4. What access does it actually need?",
        paragraphs: [
          "Give the agent its own named account with the minimum roles needed, never a shared administrator login. Use Oracle's standard APIs and integration tools so security rules and audit trails apply exactly as they do for people.",
        ],
      },
      {
        heading: "5. How will you know when it is wrong?",
        paragraphs: [
          "Build an evaluation set from real cases before building the agent, and score every release against it. In production, sample its work weekly, the same way an auditor would. An agent that cannot say \"I'm not sure, here's a person\" is not ready.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "The best first agents prepare work rather than finish it: reconciliations drafted for an accountant, invoices matched for a clerk to approve, tickets triaged for an engineer. They save real time, carry little risk, and build the trust you need for the next step.",
        ],
      },
    ],
  },
  {
    slug: "measuring-an-ai-pilot",
    title: "How to measure an AI pilot so the result means something",
    summary:
      "Most AI pilots end with a demo and a feeling. A simple measurement plan turns that into a decision your finance director can sign off.",
    date: "2026-11-04",
    minutes: 5,
    lines: ["ai"],
    body: [
      {
        paragraphs: [
          "Ask how a pilot went and you will usually hear \"really promising\". That is not a basis for spending more money. A pilot is an experiment, and an experiment needs a measurement plan written before it starts.",
        ],
      },
      {
        heading: "Measure the baseline first",
        paragraphs: [
          "Before building anything, measure the process as it runs today: how long each case takes, how many are handled, how many go wrong. Use a few weeks of real data, not estimates from a workshop. Without a baseline, any result looks good.",
        ],
      },
      {
        heading: "Pick one outcome metric and two guardrails",
        list: [
          "Outcome: the number that should improve, such as minutes per invoice or tickets resolved without a person.",
          "Quality guardrail: accuracy against a labelled evaluation set, so speed doesn't come at the cost of mistakes.",
          "Cost guardrail: model and infrastructure cost per case, so the saving isn't eaten by the bill.",
        ],
      },
      {
        heading: "Agree the decision before you see the result",
        paragraphs: [
          "Write down what result would mean \"scale it\", \"change it\" or \"stop\". For example: scale if handling time falls by at least 40% with accuracy above 97%. Agreeing this upfront stops a disappointing result from being reinterpreted as a success.",
        ],
      },
      {
        heading: "Run it on real work, in the real system",
        paragraphs: [
          "A pilot on cleaned-up sample data in a sandbox tells you little. Run it on a slice of live work, inside the systems your team already uses, with people reviewing its output. The friction you discover is the point.",
        ],
      },
      {
        heading: "Report it honestly",
        paragraphs: [
          "The pilot report should show the baseline, the result, the guardrails and the cases it got wrong, with examples. A pilot that fails clearly and cheaply has done its job. A pilot that \"sort of worked\" and drifts into production is the expensive outcome.",
        ],
      },
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
