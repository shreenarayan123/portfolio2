"use client";
import { animate, motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const STATS = [
  { value: 2, suffix: "+", label: "Years of experience" },
  { value: 27, suffix: "", label: "Projects built" },
  { value: 100, suffix: "+", label: "GitHub repos" },
  { value: 18, suffix: "+", label: "Production releases" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-24"
    >
      {/* backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:justify-between"
      >
        <div className="flex max-w-xl flex-col items-center gap-6 text-center md:items-start md:text-left">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400" />
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl"
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="inline-block"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 18, -8, 18, 0] }}
              transition={{ duration: 1.8, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span>
            <br />
            <span className="text-gradient">Shreenarayan</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl text-zinc-400 md:text-2xl"
          >
            Full-stack engineer who{" "}
            <span className="font-serif-accent text-2xl italic text-zinc-200 md:text-3xl">
              ships end-to-end
            </span>
            <br className="hidden md:block" /> — product, backend, and the
            infrastructure underneath.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Link
              href="/projects"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
            >
              View all projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-1">
              {[
                { href: "https://github.com/shreenarayan123", icon: Github },
                {
                  href: "https://www.linkedin.com/in/shreenarayan-jaiswal-092025283/",
                  icon: Linkedin,
                },
                { href: "https://x.com/Shreenarayan521", icon: Twitter },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2.5 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative hidden md:block">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-500/40 via-fuchsia-500/20 to-sky-500/40 blur-xl" />
          <motion.div
            whileHover={{ rotate: 1.5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src="/images/me2.png"
              alt="Shreenarayan"
              width={330}
              height={380}
              className="relative z-10"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* stats band */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative z-10 mt-20 grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4"
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 bg-zinc-950/90 px-6 py-8 transition-colors duration-300 hover:bg-zinc-900/90"
          >
            <span className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              <Counter to={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-sm text-zinc-500">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
