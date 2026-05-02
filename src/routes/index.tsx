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

        {/* Medal bar — arranged like a service ribbon rack */}
        <div className="flex justify-center">
          <div
            className="relative inline-flex items-end gap-5 sm:gap-8 rounded-md border border-border bg-card/60 px-6 sm:px-10 pt-6 pb-4 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)]"
            role="list"
            aria-label="Certification medals"
          >
            {certifications.map((c) => (
              <div
                key={c.name}
                role="listitem"
                className="group flex flex-col items-center"
              >
                {/* Ribbon */}
                <span
                  aria-hidden
                  className="h-3 w-14 rounded-sm bg-gradient-to-b from-primary/80 to-primary/40 shadow-sm"
                />
                {/* Medal */}
                <div className="relative -mt-0.5">
                  <span
                    aria-hidden
                    className="absolute inset-0 -m-1 rounded-full bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-primary/40 bg-background p-1.5 shadow-inner transition-transform group-hover:-translate-y-0.5">
                    <img
                      src={c.image}
                      alt={c.name}
                      title={`${c.shortName} — ${c.issuer}`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                  {c.shortName}
                </p>
              </div>
            ))}
          </div>
        </div>
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
