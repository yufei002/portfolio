import { Github, Globe, Linkedin, Twitter } from "lucide-react";

import { profile } from "@/data/profile";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
  { label: "X", href: profile.links.x, icon: Twitter },
  { label: "Website", href: profile.links.website, icon: Globe },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white py-10 dark:border-slate-800/70 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:hover:text-white"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
