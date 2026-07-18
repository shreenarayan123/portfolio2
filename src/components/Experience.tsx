"use client";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Trillisent · Helios One",
    role: "Full Stack Engineer",
    promotion: "Promoted from Backend Intern → Full-time in 3 months",
    period: "Present",
    summary:
      "Blockchain platform company. Own the business platform end-to-end through a major architecture rebuild.",
    metrics: [
      { value: "15 days", label: "Full backend rewrite" },
      { value: "3 months", label: "Intern → full-time" },
      { value: "End-to-end", label: "Platform ownership" },
    ],
    highlights: [
      "Rewrote the entire backend from scratch in 15 days during a major architecture rebuild — after cleaning up the legacy codebase and resolving numerous security vulnerabilities.",
      "Took over the frontend when the frontend engineer left — integrated all APIs and now own the business platform end-to-end.",
      "Built an internal inventory manager to track and audit company resources — applications, servers, and infrastructure.",
      "Built network discovery tooling: NetFlow mapping, IP discovery, and port scanning powered by Nmap.",
      "Currently driving the blockchain business platform and change-management modules.",
    ],
    stack: ["Node.js", "TypeScript", "React", "PostgreSQL", "Prisma", "Nmap", "AWS"],
  },
  {
    company: "Unque Cloudbook",
    role: "Full Stack Intern → DevOps Engineer",
    promotion: "Earned a pre-placement offer",
    period: "6 months",
    summary:
      "Started across frontend and backend, then moved into DevOps to own releases and AWS infrastructure.",
    metrics: [
      { value: "18+", label: "Production releases in 3 months" },
      { value: "7", label: "Customer data onboardings" },
      { value: "1", label: "End-to-end feature owned" },
    ],
    highlights: [
      "Shipped 18+ production releases in 3 months as DevOps engineer: 6 OTA (Expo/EAS), 4 Android, 4 backend, and 4 web releases.",
      "Owned AWS infrastructure — Lambda functions, EC2 (debugging + releases for dev and prod), SNS topics & subscriptions, SES, IAM, and cron jobs.",
      "Ran 7 data releases onboarding new customers, and built MongoDB aggregation build-scripts for data-engineering workflows.",
      "Took end-to-end ownership of the membership feature across the salon app and consumer React Native app — UI, APIs, and test cases — work typically given to engineers with a year in the company.",
      "Onboarded new joiners to the team and codebase.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "React Native",
      "AWS",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          <Briefcase size={13} />
          Experience
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-4xl font-semibold tracking-tight text-white md:text-5xl"
        >
          Where I&apos;ve{" "}
          <span className="font-serif-accent font-normal italic text-white">
            made an impact
          </span>
        </motion.h2>

        <div className="relative mt-14 flex w-full flex-col gap-10">
          {/* timeline line */}
          <div className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-gradient-to-b from-violet-500/60 via-white/15 to-transparent md:block" />

          {EXPERIENCES.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="relative md:pl-12"
            >
              {/* timeline dot */}
              <span className="absolute left-0 top-9 hidden h-[15px] w-[15px] rounded-full border-2 border-violet-400 bg-zinc-950 shadow-[0_0_16px_rgba(139,92,246,0.7)] md:block" />

              <div className="glass-card group p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] md:p-9">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-medium text-white">
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-lg text-zinc-300">{exp.role}</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300">
                      <TrendingUp size={14} />
                      {exp.promotion}
                    </p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-400">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-4 text-zinc-400">{exp.summary}</p>

                {/* metric chips */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {exp.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 transition-colors duration-300 group-hover:border-violet-400/20"
                    >
                      <div className="text-xl font-semibold text-white">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-xs text-zinc-500">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-3">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-6 text-zinc-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
