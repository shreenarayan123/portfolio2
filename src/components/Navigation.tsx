"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_ITEMS = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navigation() {
  const [selectedItem, setSelectedItem] = useState("About");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.toLowerCase())
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = NAV_ITEMS.find((item) => item.toLowerCase() === id);
            if (match) setSelectedItem(match);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-zinc-950/70 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setSelectedItem(item)}
            className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 sm:px-4 sm:text-sm ${
              item === selectedItem
                ? "text-zinc-950"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {item === selectedItem && (
              <motion.span
                layoutId="nav-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full bg-white"
              />
            )}
            <span className="relative z-10">{item}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
