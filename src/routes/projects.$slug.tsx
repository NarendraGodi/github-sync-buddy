import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    return {
      meta: project
        ? [
            { title: `${project.title} — Project` },
            { name: "description", content: project.summary },
            { property: "og:title", content: `${project.title} — Project` },
            { property: "og:description", content: project.summary },
          ]
        : [{ title: "Project" }],
    };
  },
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 mx-auto max-w-3xl px-4 py-20">
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="mt-2 text-muted-foreground">{error.message}</p>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="mt-4 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
          >
            Retry
          </button>
        </main>
        <SiteFooter />
      </div>
    );
  },
  notFoundComponent: () => {
    const { slug } = Route.useParams();
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 mx-auto max-w-3xl px-4 py-20">
          <p className="font-mono text-xs text-primary">404</p>
          <h1 className="mt-2 text-2xl font-bold">
            No project named "{slug}"
          </h1>
          <Link
            to="/projects"
            className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> back to projects
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> projects
          </Link>

          <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" /> Live site
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:border-primary/60 hover:text-primary"
              >
                <Github className="h-4 w-4" /> Source
              </a>
            )}
          </div>

          <div className="mt-10 prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="font-mono text-xs text-primary mb-3">
              <span className="text-muted-foreground">~</span>{" > "}highlights
            </h2>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-muted-foreground before:content-['▸'] before:text-primary before:mt-0.5"
                >
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-mono text-xs text-primary mb-3">
              <span className="text-muted-foreground">~</span>{" > "}stack
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="font-mono text-xs border border-border rounded px-2 py-1 text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
