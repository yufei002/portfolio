import type { SkillGroup } from "@/data/profile";

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-card dark:border-slate-800/70 dark:bg-slate-900">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.category}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
