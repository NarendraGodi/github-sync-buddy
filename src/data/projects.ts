export type ProjectCategory = "Web" | "AI" | "Open Source" | "Tools";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  year: string;
  liveUrl?: string;
  repoUrl?: string;
  highlights: string[];
}

// PLACEHOLDER CONTENT — replace with your real projects.
export const projects: Project[] = [
  {
    slug: "neon-analytics",
    title: "Neon Analytics",
    summary: "Real-time event analytics with sub-second query latency.",
    description:
      "A lightweight, self-hostable analytics platform built for product teams. Streams millions of events per day with sub-second dashboards.",
    category: "Web",
    tech: ["TypeScript", "Next.js", "ClickHouse", "Redis"],
    year: "2025",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/neon-analytics",
    highlights: [
      "Sub-second p95 query latency over 100M+ events",
      "Schema-on-write with automatic column inference",
      "End-to-end type safety from ingestion to dashboard",
    ],
  },
  {
    slug: "promptforge",
    title: "PromptForge",
    summary: "Open-source prompt versioning & evaluation toolkit.",
    description:
      "CLI + web UI for versioning prompts, running offline evaluations, and tracking regressions across model upgrades.",
    category: "AI",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    year: "2024",
    repoUrl: "https://github.com/example/promptforge",
    highlights: [
      "Git-friendly YAML prompt format",
      "Pluggable evaluators (LLM-as-judge, regex, exact)",
      "Used by 200+ teams in production",
    ],
  },
  {
    slug: "tinydb",
    title: "tinydb",
    summary: "A 500-line embedded key-value store written in Rust.",
    description:
      "An educational LSM-tree key-value store with ACID writes, written to teach storage engine internals.",
    category: "Open Source",
    tech: ["Rust", "Tokio"],
    year: "2024",
    repoUrl: "https://github.com/example/tinydb",
    highlights: [
      "Append-only WAL with crash recovery",
      "Background compaction with leveled SSTables",
      "1.2k GitHub stars",
    ],
  },
  {
    slug: "deploybot",
    title: "DeployBot",
    summary: "ChatOps deployments for small teams.",
    description:
      "A Slack bot that ships PRs to staging and prod with one command, complete with rollback and audit log.",
    category: "Tools",
    tech: ["Go", "Slack API", "GitHub Actions"],
    year: "2023",
    repoUrl: "https://github.com/example/deploybot",
    highlights: [
      "Zero-config setup for any GitHub repo",
      "Approval workflows with role-based access",
      "Audit trail backed by SQLite",
    ],
  },
];

export const featuredProjects = projects.slice(0, 3);
