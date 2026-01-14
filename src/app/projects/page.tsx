import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { profile } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Projects
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            All projects
          </h1>
          <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
            A closer look at the products, prototypes, and experiments I have built in recent
            years.
          </p>
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          >
            ← Back to home
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
