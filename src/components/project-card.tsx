import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-border bg-card/60 p-5 transition-all hover:border-primary/60 hover:bg-card hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
            {project.category} · {project.year}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="after:absolute after:inset-0"
            >
              {project.title}
            </Link>
          </h3>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>

      <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded px-1.5 py-0.5"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-3 relative z-10">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary"
          >
            <Github className="h-3.5 w-3.5" /> repo
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary"
          >
            <ExternalLink className="h-3.5 w-3.5" /> live
          </a>
        )}
      </div>
    </article>
  );
}
