"use client";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const ROW_ONE = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Express",
  "Nest.js",
  "Tailwind CSS",
  "Framer Motion",
];

const ROW_TWO = [
  "AWS Lambda",
  "EC2",
  "SNS / SES",
  "IAM",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Git",
  "CI / CD",
  "Nmap",
];

const DOT_COLORS = [
  "bg-violet-400",
  "bg-sky-400",
  "bg-emerald-400",
  "bg-fuchsia-400",
  "bg-amber-400",
];

function Chip({ label, index }: { label: string; index: number }) {
  return (
    <span className="mx-2 inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.08]">
      <span
        className={`h-2 w-2 rounded-full ${DOT_COLORS[index % DOT_COLORS.length]}`}
      />
      {label}
    </span>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="pause-on-hover relative flex w-full overflow-hidden">
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#09090b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#09090b] to-transparent" />
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((label, i) => (
          <Chip key={`${label}-${i}`} label={label} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          <Wrench size={13} />
          Skills
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-4xl font-semibold tracking-tight text-white md:text-5xl"
        >
          Tools I{" "}
          <span className="font-serif-accent font-normal italic text-gradient">
            work with
          </span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 flex flex-col gap-5"
      >
        <MarqueeRow items={ROW_ONE} />
        <MarqueeRow items={ROW_TWO} reverse />
      </motion.div>
    </section>
  );
}
