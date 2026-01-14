export type Project = {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  highlights: string[];
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Profile = {
  name: string;
  tagline: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    x: string;
    website: string;
  };
  projects: Project[];
  experience: Experience[];
  skills: SkillGroup[];
};

export const profile: Profile = {
  name: "Alex Carter",
  tagline: "Product designer & front-end engineer crafting calm, high-performing digital experiences.",
  location: "Austin, TX",
  email: "hello@alexcarter.design",
  links: {
    github: "https://github.com/alexcarter",
    linkedin: "https://linkedin.com/in/alexcarter",
    x: "https://x.com/alexcarter",
    website: "https://alexcarter.design",
  },
  projects: [
    {
      title: "Nimbus Analytics",
      description:
        "An analytics dashboard for SaaS founders to track retention, MRR, and activation in one view.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      repoUrl: "https://github.com/alexcarter/nimbus-analytics",
      liveUrl: "https://nimbus-analytics.vercel.app",
      highlights: [
        "Designed data-dense layouts with progressive disclosure.",
        "Built a reusable charting system with custom tooltips.",
        "Reduced page load time by 38% with edge caching.",
      ],
    },
    {
      title: "Atlas Onboarding",
      description:
        "A guided onboarding flow for enterprise teams with automated checklist generation.",
      tech: ["React", "Radix UI", "Node.js"],
      repoUrl: "https://github.com/alexcarter/atlas-onboarding",
      liveUrl: "https://atlas-onboarding.vercel.app",
      highlights: [
        "Mapped multi-step journeys into digestible milestones.",
        "Integrated notification hooks to keep teams on track.",
        "Partnered with customer success to validate flows.",
      ],
    },
    {
      title: "Northwind Commerce",
      description:
        "A headless commerce storefront concept focused on speed and accessibility.",
      tech: ["Next.js", "Sanity", "Stripe"],
      repoUrl: "https://github.com/alexcarter/northwind-commerce",
      highlights: [
        "Crafted an editorial product storytelling layout.",
        "Implemented accessible product filters and focus states.",
        "Optimized images and typography for a premium feel.",
      ],
    },
  ],
  experience: [
    {
      company: "Voyager Labs",
      role: "Senior Product Designer",
      dates: "2021 — Present",
      bullets: [
        "Led design system adoption across three product teams.",
        "Collaborated with engineers to ship new billing flows in 6 weeks.",
        "Mentored junior designers and facilitated weekly critique sessions.",
      ],
    },
    {
      company: "Signal & Co.",
      role: "Product Designer",
      dates: "2018 — 2021",
      bullets: [
        "Designed mobile-first onboarding that lifted activation by 22%.",
        "Created research-backed personas for enterprise customers.",
        "Built interactive prototypes to align stakeholders early.",
      ],
    },
    {
      company: "Freelance",
      role: "Design Engineer",
      dates: "2016 — 2018",
      bullets: [
        "Delivered responsive marketing sites for early-stage startups.",
        "Developed brand systems and component libraries.",
        "Ran workshops to define product vision and roadmaps.",
      ],
    },
  ],
  skills: [
    {
      category: "Design",
      items: ["Product strategy", "Design systems", "UX research", "Prototyping"],
    },
    {
      category: "Development",
      items: ["Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS"],
    },
    {
      category: "Tooling",
      items: ["Figma", "Framer", "Notion", "Linear", "Storybook"],
    },
  ],
};
