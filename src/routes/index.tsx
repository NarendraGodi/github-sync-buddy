import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Cloud, Container, GitBranch } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";
import { certifications } from "@/data/certifications";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — DevOps Architect & GCP Specialist` },
      {
        name: "description",
        content: `${profile.name} — ${profile.tagline}`,
      },
      {
        property: "og:title",
        content: `${profile.name} — DevOps Architect & GCP Specialist`,
      },
      { property: "og:description", content: profile.tagline },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Certifications />
        <TechStrip />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-20 sm:pt-28 pb-16">
        <div className="fade-in-up max-w-3xl">
          <p className="font-mono text-xs text-primary mb-4 inline-flex items-center gap-2 border border-primary/30 rounded-full px-3 py-1 bg-primary/5">
            <Sparkles className="h-3 w-3" />
            11+ years · GCP & CKA certified
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            <span className="text-muted-foreground font-mono text-2xl sm:text-3xl block mb-2">
              hi, I&apos;m
            </span>
            <span className="cursor-blink">{profile.name}</span>
          </h1>

          <p className="mt-4 font-mono text-sm text-primary">
            {profile.role}
          </p>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity ring-glow"
            >
              View experience <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/60 hover:text-primary transition-colors"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-10 font-mono text-xs text-muted-foreground space-y-1">
            <p>
              <span className="text-primary">$</span> whoami
            </p>
            <p className="pl-3">
              {profile.role.split(" | ")[0]}, based in {profile.location}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const icons = [Cloud, GitBranch, Container];
  return (
    <section className="border-t border-border/60 bg-background/40">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading
          title="Impact"
          description="Measurable outcomes delivered across enterprise cloud programs."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {profile.highlights.map((h, i) => {
            const Icon = icons[i] ?? Cloud;
            return (
              <div
                key={h.label}
                className="rounded-lg border border-border bg-card/60 p-6 hover:border-primary/60 transition-colors"
              >
                <Icon className="h-5 w-5 text-primary mb-4" />
                <p className="text-3xl sm:text-4xl font-bold text-foreground">
                  {h.metric}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-primary">
                  {h.label}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{h.detail}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Link
            to="/experience"
            className="inline-flex items-center gap-1 font-mono text-sm text-primary hover:underline"
          >
            cd ./experience <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading
          title="Certifications"
          description="Validated expertise from Google Cloud, CNCF, and AWS."
        />

        {/* Medals — left-aligned, Font Awesome icons */}
        <ul
          className="flex flex-wrap items-start gap-10 sm:gap-12"
          aria-label="Certification medals"
        >
          {certifications.map((c) => (
            <li key={c.name} className="group flex flex-col items-center">
              <i
                className="fa-thin fa-solid fa-medal text-5xl sm:text-6xl text-primary transition-transform group-hover:-translate-y-0.5"
                style={{ filter: "drop-shadow(0 0 12px hsl(var(--primary) / 0.45))" }}
                aria-hidden="true"
                title={`${c.shortName} — ${c.issuer}`}
              />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                {c.shortName}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TechStrip() {
  const stack = [
    "GCP",
    "AWS",
    "Kubernetes",
    "Terraform",
    "Docker",
    "Python",
    "Ansible",
    "TeamCity",
    "Cloud Run",
    "Stackdriver",
  ];
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="font-mono text-xs text-muted-foreground mb-4">
          <span className="text-primary">~</span>
          {" > "}stack
        </p>
        <ul className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <li
              key={s}
              className="font-mono text-xs border border-border rounded px-2.5 py-1 text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
