export interface SubProject {
  emoji: string;
  name: string;
  description: string;
  bullets: string[];
}

export interface Experience {
  slug: string;
  company: string;
  title: string;
  duration: string;
  dateRange: string;
  location: string;
  project?: string;
  projectDescription?: string;
  bullets?: string[];
  subProjects?: SubProject[];
}

export const experiences: Experience[] = [
  {
    slug: "mphasis",
    company: "Mphasis Limited",
    title: "Delivery Project Lead",
    duration: "2023 — Present",
    dateRange: "May 2023 — Present",
    location: "Hyderabad, Telangana, India",
    project: "Charles Schwab",
    projectDescription:
      "Leading DevOps and delivery initiatives for a major financial services client, focusing on cloud infrastructure, automation, and team leadership.",
    bullets: [
      "Leading delivery team with focus on GCP DevOps automation",
      "Implementing best practices for cloud infrastructure and CI/CD",
      "Coaching team members on Agile methodologies and kanban alignment",
      "Removing technical roadblocks and facilitating onboarding processes",
    ],
  },
  {
    slug: "tcs",
    company: "Tata Consultancy Services",
    title: "IT Analyst",
    duration: "2018 — 2023",
    dateRange: "September 2018 — May 2023",
    location: "Hyderabad, Telangana, India",
    project: "M&G plc",
    projectDescription:
      "Worked extensively on GCP infrastructure automation, cost optimization, and DevOps practices for a major investment management company.",
    bullets: [
      "Created GCP projects using Google Project Factory and Landing Zones",
      "Reduced OS Login API calls from 456M/week to 30M/week (93% reduction)",
      "Achieved 53% cost reduction (from $28K to $13K/month) through automated scheduling",
      "Implemented VM Rehydration with automated Cloud DNS updates",
      "Built CI/CD pipelines using TeamCity for Order Management Systems",
      "Deployed applications on Cloud Run and Cloud Functions",
      "Created Stackdriver dashboards and alerting policies",
      "Authored System Architecture Documents (SADs)",
      "Migrated On-Premises Data Centre to Google Cloud",
    ],
  },
  {
    slug: "atos",
    company: "Atos",
    title: "Information Management Specialist",
    duration: "2015 — 2018",
    dateRange: "April 2015 — August 2018",
    location: "Bengaluru, Karnataka, India",
    subProjects: [
      {
        emoji: "🏦",
        name: "Franklin Templeton",
        description:
          "Worked on infrastructure management and automation for financial services client.",
        bullets: [
          "Infrastructure automation and monitoring",
          "Incident management and support",
          "Configuration management using Ansible",
        ],
      },
      {
        emoji: "🚜",
        name: "The Scotts Miracle-Gro Company",
        description:
          "Provided DevOps and automation support for manufacturing and consumer products company.",
        bullets: [
          "AWS infrastructure management",
          "Automation scripting and deployment",
          "System monitoring and maintenance",
        ],
      },
      {
        emoji: "⚡",
        name: "SEMPRA",
        description:
          "Infrastructure and automation support for energy services company.",
        bullets: [
          "VM provisioning and management",
          "Automation using Python and Boto3",
          "Environment setup and configuration",
        ],
      },
    ],
  },
  {
    slug: "globallogic",
    company: "GlobalLogic",
    title: "Analyst",
    duration: "2013 — 2015",
    dateRange: "August 2013 — March 2015",
    location: "Hyderabad, Telangana, India",
    project: "Initial Career Experience",
    projectDescription:
      "Started career in automation and infrastructure management, building foundational skills in DevOps practices.",
    bullets: [
      "Infrastructure support and maintenance",
      "Basic automation scripting",
      "System administration and monitoring",
      "Incident response and troubleshooting",
    ],
  },
];
