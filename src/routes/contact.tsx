import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${profile.name}` },
      {
        name: "description",
        content: `Get in touch with ${profile.name}. Open to DevOps, GCP, and cloud architecture opportunities.`,
      },
      { property: "og:title", content: `Contact — ${profile.name}` },
      {
        property: "og:description",
        content: `Get in touch with ${profile.name}.`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    {
      icon: Phone,
      label: "phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+0-9]/g, "")}`,
    },
    {
      icon: Mail,
      label: "email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Linkedin,
      label: "linkedin",
      value: "linkedin.com/in/narendragodi",
      href: profile.social.linkedin,
      external: true,
    },
    {
      icon: MapPin,
      label: "location",
      value: profile.location,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <SectionHeading
            title="Contact"
            description="Open to DevOps, GCP, and cloud architecture opportunities."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {items.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background/60 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-primary">
                      {label}
                    </span>
                    <span className="block truncate text-sm text-foreground">
                      {value}
                    </span>
                  </span>
                </>
              );
              const cls =
                "flex items-center gap-3 rounded-lg border border-border bg-card/60 p-4 transition-colors hover:border-primary/60";
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className={cls}
                >
                  {content}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
