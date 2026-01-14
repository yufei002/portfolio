import Link from "next/link";

import { Footer } from "@/components/Footer";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SkillGroupCard } from "@/components/SkillGroup";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <section className="border-b border-slate-200/70 bg-gradient-to-b from-slate-50 to-white py-20 dark:border-slate-800/70 dark:from-slate-950 dark:to-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {profile.location}
              </p>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
                  {profile.name}
                </h1>
                <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                  {profile.tagline}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#projects"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  View projects
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
                >
                  Explore all work
                </Link>
                <Link
                  href="/resume"
                  className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
                >
                  Download resume
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title="About" subtitle="Designing thoughtful products end-to-end">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300">
              <p>
                I partner with product teams to move from vague ideas to crisp, shippable experiences.
                My work blends research, systems thinking, and front-end engineering to deliver
                polished user journeys.
              </p>
              <p>
                I love translating customer pain points into structured flows, pairing purposeful
                typography with subtle motion, and building modular UI kits that scale.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-card dark:border-slate-800/70 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Current Focus
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li>• Building AI-powered onboarding experiences</li>
                <li>• Refining enterprise design systems</li>
                <li>• Prototyping in Next.js + Tailwind</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected work and experiments">
          <div className="grid gap-6 md:grid-cols-2">
            {profile.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" subtitle="Teams and roles I've supported">
          <div className="flex flex-col gap-6">
            {profile.experience.map((item) => (
              <ExperienceItem key={item.company} item={item} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Design + engineering toolkit">
          <div className="grid gap-6 md:grid-cols-3">
            {profile.skills.map((group) => (
              <SkillGroupCard key={group.category} group={group} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Let's build something together">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300">
              <p>
                I’m available for select consulting and full-time opportunities. The best way to
                reach me is via email, and I aim to respond within two business days.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
              >
                {profile.email}
              </a>
            </div>
            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-card dark:border-slate-800/70 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Quick Links
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
                <a className="transition hover:text-slate-900 dark:hover:text-white" href={profile.links.github}>
                  GitHub
                </a>
                <a className="transition hover:text-slate-900 dark:hover:text-white" href={profile.links.linkedin}>
                  LinkedIn
                </a>
                <a className="transition hover:text-slate-900 dark:hover:text-white" href={profile.links.x}>
                  X / Twitter
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
