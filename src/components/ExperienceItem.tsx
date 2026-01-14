import type { Experience } from "@/data/profile";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="relative flex gap-6 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-card dark:border-slate-800/70 dark:bg-slate-900">
      <div className="mt-1 hidden h-full w-1 rounded-full bg-slate-200 dark:bg-slate-700 md:block" />
      <div className="flex flex-1 flex-col gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {item.dates}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
            {item.role}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{item.company}</p>
        </div>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
