import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";
import { achievements } from "@/data/achievements";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${profile.name}` },
      {
        name: "description",
        content: `About ${profile.name}: ${profile.role}, based in ${profile.location}. ${profile.summary.slice(0, 120)}`,
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

          <p className="text-base text-muted-foreground leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-14">
            <h3 className="font-mono text-xs text-primary mb-4">
              <span className="text-muted-foreground">~</span>
              {" > "}skills
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
              <span className="text-muted-foreground">~</span>
              {" > "}key_achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((a) => (
                <div
                  key={a.title}
                  className="rounded-lg border border-border bg-card/60 p-5"
                >
                  <h4 className="font-semibold text-foreground border-l-2 border-primary pl-3">
                    {a.title}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {a.items.map((item, i) => {
                      const isObj = typeof item === "object";
                      const text = isObj ? item.text : item;
                      const emphasis = isObj && item.emphasis;
                      return (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground before:content-['▸'] before:text-primary before:mt-0.5"
                        >
                          <span
                            className={
                              emphasis ? "text-foreground font-medium" : ""
                            }
                          >
                            {text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
