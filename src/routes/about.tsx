import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${profile.name}` },
      {
        name: "description",
        content: `About ${profile.name}: ${profile.role} based in ${profile.location}. Background, skills, and what I'm working on.`,
      },
      { property: "og:title", content: `About — ${profile.name}` },
      {
        property: "og:description",
        content: `${profile.role} based in ${profile.location}.`,
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-4 py-16">
          <SectionHeading
            prompt="~"
            title="About"
            description={`${profile.role} · ${profile.location}`}
          />

          <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
            {profile.bio.map((p, i) => (
              <p key={i} className="text-base">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="font-mono text-xs text-primary mb-4">
              <span className="text-muted-foreground">~</span>{" > "}skills
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(profile.skills).map(([group, items]) => (
                <div
                  key={group}
                  className="rounded-lg border border-border bg-card/60 p-4"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wider text-primary mb-2">
                    {group}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {items.map((s) => (
                      <li
                        key={s}
                        className="font-mono text-xs border border-border rounded px-2 py-0.5 text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-mono text-xs text-primary mb-4">
              <span className="text-muted-foreground">~</span>{" > "}timeline
            </h3>
            <ol className="border-l border-border pl-6 space-y-5">
              {profile.timeline.map((t, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
                  <p className="font-mono text-xs text-muted-foreground">
                    {t.year}
                  </p>
                  <p className="text-foreground font-medium">{t.role}</p>
                  <p className="text-sm text-muted-foreground">{t.org}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
