import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-slate-200/70 py-16 last:border-b-0 dark:border-slate-800/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {title}
          </p>
          {subtitle ? (
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              {subtitle}
            </h2>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
