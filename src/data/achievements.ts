export interface Achievement {
  title: string;
  items: (string | { text: string; emphasis?: boolean })[];
}

export const achievements: Achievement[] = [
  {
    title: "Cloud Infrastructure & Automation",
    items: [
      "Created GCP projects from scratch using Google Project Factory, establishing foundational infrastructure using Landing Zones",
      "Implemented environment segregation in GCP using service accounts and IAM policies",
      "Designed and implemented VM Rehydration in GCP, including auto-updates of Cloud DNS records",
      "Automated VM provisioning and rehydration workflows using Terraform across GCP and AWS",
      "Developed VM Recycle automation in AWS using Python's Boto3, reducing manual maintenance effort",
      "Built Ansible playbooks and used SaltStack as VM startup scripts for consistent configuration management",
      "Set up private RHEL repositories to ensure compliance with internal security policies",
    ],
  },
  {
    title: "Cost Optimization & Performance",
    items: [
      {
        text: "Reduced OS Login API calls in GCP from 456 million/week to 30 million/week, optimizing IAM practices and improving cost/performance",
        emphasis: true,
      },
      {
        text: "Reduced cloud infrastructure costs by over 53% (from $28,000 to $13,000/month) by implementing automated VM startup and shutdown schedules aligned with business hours and usage patterns",
        emphasis: true,
      },
      "Migrated On-Premises Data Centre to Google Cloud in a Lift and Shift manner",
    ],
  },
  {
    title: "CI/CD, DevOps & Automation",
    items: [
      "Created and maintained CI/CD pipelines using TeamCity, enabling automated builds and deployments for Order Management Systems",
      "Automated continuous deployment and daily DevOps tasks using custom Python scripts",
      "Managed on-demand K3s cluster setup automation, enabling ephemeral environments for testing",
      "Automated email notifications for pipeline events using Python and SMTP configurations",
      "Developed Docker images, tagged and pushed to GAR, integrated with deployment pipelines",
      "Deployed applications on GCP Serverless platforms such as Cloud Run and Cloud Functions",
    ],
  },
  {
    title: "Monitoring, Observability & Incident Management",
    items: [
      "Created Stackdriver dashboards and implemented alerting policies for proactive monitoring in GCP",
      "Monitored Kubernetes clusters, supported container lifecycle, and resolved issues in collaboration with developers",
      "Contributed to incident management processes using ServiceNow and JIRA, including change tracking and reporting",
      "Strong theoretical knowledge and practical involvement in SLI, SLO, error budgets, RCA, and postmortem practices",
    ],
  },
  {
    title: "Architecture & Technical Leadership",
    items: [
      "Authored multiple System Architecture Documents (SADs) to align business and technical requirements for migration and deployment",
      "Created Load Balancers with Network Endpoint Groups (NEGs) for scalable and efficient OMS routing",
      "Collaborated with onshore/offshore support teams to resolve production issues and optimize cloud infrastructure",
      "Led team coaching and kanban alignment, facilitated onboarding processes, and removed technical roadblocks",
    ],
  },
];
