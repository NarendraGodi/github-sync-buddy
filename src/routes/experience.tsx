import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/experiences";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Narendra Godi" },
      {
        name: "description",
        content:
          "Professional experience: Mphasis (Charles Schwab), TCS (M&G plc), Atos, GlobalLogic. 11+ years in DevOps, GCP, and cloud infrastructure.",
      },
      { property: "og:title", content: "Experience — Narendra Godi" },
      {
        property: "og:description",
        content:
          "11+ years across Mphasis, TCS, Atos, and GlobalLogic — DevOps, GCP, and cloud infrastructure leadership.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const [active, setActive] = useState(experiences[0].slug);
  const current = experiences.find((e) => e.slug === active) ?? experiences[0];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-16">
          <SectionHeading
            title="Professional Experience"
            description="11+ years across financial services, investment management, and enterprise IT."
          />

          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
            {/* Tabs */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {experiences.map((exp) => {
                const isActive = exp.slug === active;
                return (
                  <button
                    key={exp.slug}
                    type="button"
                    onClick={() => setActive(exp.slug)}
                    className={cn(
                      "shrink-0 lg:w-full text-left rounded-lg border px-4 py-3 transition-colors",
                      isActive
                        ? "border-primary/60 bg-primary/5"
                        : "border-border bg-card/40 hover:border-foreground/30"
                    )}
                  >
                    <p
                      className={cn(
                        "font-mono text-sm font-semibold",
                        isActive ? "text-primary" : "text-foreground"
                      )}
                    >
                      {exp.company.split(" ")[0]}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                      {exp.duration}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <article className="rounded-lg border border-border bg-card/60 p-6 fade-in-up" key={current.slug}>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {current.title}
                </h3>
                <p className="mt-1 inline-flex items-center gap-2 text-foreground">
                  <Building2 className="h-4 w-4 text-primary" />
                  {current.company}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground inline-flex items-center gap-2">
                  <span>{current.dateRange}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {current.location}
                  </span>
                </p>
              </div>

              {current.project && (
                <div className="mt-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-primary">
                    Project: {current.project}
                  </h4>
                  {current.projectDescription && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {current.projectDescription}
                    </p>
                  )}
                  {current.bullets && (
                    <ul className="mt-4 space-y-2">
                      {current.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground before:content-['▸'] before:text-primary before:mt-0.5"
                        >
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {current.subProjects && (
                <div className="mt-6 space-y-5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-primary">
                    Multiple Projects
                  </h4>
                  {current.subProjects.map((sp) => (
                    <div
                      key={sp.name}
                      className="rounded-md border border-border bg-background/40 p-4"
                    >
                      <h5 className="font-semibold text-foreground flex items-center gap-2">
                        <span aria-hidden>{sp.emoji}</span>
                        {sp.name}
                      </h5>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {sp.description}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {sp.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-muted-foreground before:content-['▸'] before:text-primary before:mt-0.5"
                          >
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
