import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send, Check } from "lucide-react";
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
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <SectionHeading
            title="Contact"
            description="I'm always interested in hearing about new projects and opportunities."
          />

          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <div className="space-y-3 font-mono text-sm">
              <a
                href={`tel:${profile.phone.replace(/[^+0-9]/g, "")}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" /> {profile.phone}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" /> {profile.email}
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-4 w-4 text-primary" /> linkedin
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> {profile.location}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-card/60 p-5 space-y-4"
            >
              <div>
                <label className="block font-mono text-xs text-primary mb-1.5">
                  name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-primary mb-1.5">
                  email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-primary mb-1.5">
                  message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={submitting || sent}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />{" "}
                    {submitting ? "Sending..." : "Send message"}
                  </>
                )}
              </button>

              <p className="font-mono text-[11px] text-muted-foreground">
                // demo form — connect Lovable Cloud to persist + email submissions
              </p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
