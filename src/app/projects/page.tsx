import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { buildsSoFar } from "../content";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92),_rgba(235,235,235,0.9))] text-black dark:bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.96),_rgba(3,7,18,1))] dark:text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-black shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <div className="mt-10 flex flex-col gap-4 border-b border-black/10 pb-8 dark:border-white/10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/60 dark:text-white/60">
            Things i build so far :
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3">
              <h1 className="font-cal-sans-regular text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Selected projects and live builds
              </h1>
              <p className="text-base leading-7 text-black/70 dark:text-white/70 sm:text-lg">
                A compact list of products, experiments, and shipped work with the stack and link for each one.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="text-black/60 dark:text-white/60">Total projects</div>
              <div className="mt-1 text-3xl font-semibold">{buildsSoFar.length}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:gap-5">
          {buildsSoFar.map((project, index) => {
            const isGithub = project.url.includes("github.com");

            return (
              <article
                key={project.name}
                className="group rounded-3xl border border-black/10 bg-white/80 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_18px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-black">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {project.name}
                      </h2>
                    </div>

                    <p className="max-w-3xl text-base leading-7 text-black/75 dark:text-white/75">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.split("·").map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium text-black/70 dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                        >
                          {item.trim()}
                        </span>
                      ))}
                    </div>

                    <p className="break-all text-sm text-black/55 dark:text-white/55">
                      {project.url}
                    </p>
                  </div>

                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
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