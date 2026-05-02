import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.role}` },
      {
        name: "description",
        content: `${profile.name} — ${profile.tagline} Portfolio of projects, writing, and open-source work.`,
      },
      { property: "og:title", content: `${profile.name} — ${profile.role}` },
      {
        property: "og:description",
        content: `${profile.name} — ${profile.tagline}`,
      },
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
        <FeaturedWork />
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
            available for new projects
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            <span className="text-muted-foreground font-mono text-2xl sm:text-3xl block mb-2">
              hi, I&apos;m
            </span>
            <span className="cursor-blink">{profile.name}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity ring-glow"
            >
              View work <ArrowRight className="h-4 w-4" />
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
            <p className="pl-3">{profile.role}, based in {profile.location}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="border-t border-border/60 bg-background/40">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading
          title="Featured Work"
          description="A few recent things I've shipped. See all projects for the full list."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 font-mono text-sm text-primary hover:underline"
          >
            cd ./projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TechStrip() {
  const stack = [
    "TypeScript",
    "React",
    "Node.js",
    "Rust",
    "Python",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="font-mono text-xs text-muted-foreground mb-4">
          <span className="text-primary">~</span>{" > "}stack
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
