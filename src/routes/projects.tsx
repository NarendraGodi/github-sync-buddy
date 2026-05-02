import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Portfolio" },
      {
        name: "description",
        content:
          "Selected projects across web, AI, open-source, and developer tools.",
      },
      { property: "og:title", content: "Projects — Portfolio" },
      {
        property: "og:description",
        content: "Selected projects across web, AI, and developer tools.",
      },
    ],
  }),
  component: ProjectsPage,
});

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "AI",
  "Open Source",
  "Tools",
];

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-16">
          <SectionHeading
            title="Projects"
            description="Things I've built — production work, side projects, and open-source."
          />

          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "font-mono text-xs rounded-full border px-3 py-1.5 transition-colors",
                  active === f
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="font-mono text-sm text-muted-foreground py-12 text-center">
              // no projects in this category yet
            </p>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
