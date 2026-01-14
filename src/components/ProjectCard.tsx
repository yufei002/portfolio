import { ArrowUpRight, Github } from "lucide-react";

import type { Project } from "@/data/profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-slate-300 dark:border-slate-800/70 dark:bg-slate-900">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
        <a
          href={project.repoUrl}
          className="inline-flex items-center gap-2 text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
        >
          <Github className="h-4 w-4" />
          View repo
        </a>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-2 text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" />
            Live site
          </a>
        ) : null}
      </div>
    </article>
  );
}
