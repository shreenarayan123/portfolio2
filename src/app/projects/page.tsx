import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { buildsSoFar } from "../content";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <div className="mt-10 flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Things I&apos;ve{" "}
                <span className="font-serif-accent italic text-gradient">
                  built so far
                </span>
              </h1>
              <p className="text-base leading-7 text-zinc-400 sm:text-lg">
                A compact list of products, experiments, and shipped work.
              </p>
            </div>
            <div className="glass-card px-5 py-4 text-sm">
              <div className="text-zinc-500">Total projects</div>
              <div className="mt-1 text-3xl font-bold text-gradient">
                {buildsSoFar.length}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:gap-5">
          {buildsSoFar.map((project, index) => {
            const isGithub = project.url.includes("github.com");

            return (
              <article
                key={project.name}
                className="group glass-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-[0_18px_60px_rgba(0,0,0,0.5)]"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-950">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {project.name}
                      </h2>
                    </div>

                    <p className="max-w-3xl text-base leading-7 text-zinc-400">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.split("·").map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                        >
                          {item.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
                  >
                    {isGithub ? "Source" : "Live"}
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
