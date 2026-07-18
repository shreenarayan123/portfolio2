"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["About", "Experience", "Projects", "Skills", "Contact"];

const GLASS =
  "border border-white/15 bg-white/[0.06] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.10)]";

export default function Navigation() {
  const [selectedItem, setSelectedItem] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      {/* Desktop — centered glass pill */}
      <div className="fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 md:block">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <div className={`flex items-center gap-0.5 rounded-full p-1.5 ${GLASS}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setSelectedItem(item)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
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
      </div>

      {/* Mobile — centered glass bar + dropdown */}
      <div className="fixed left-1/2 top-4 z-50 w-[calc(100vw-2rem)] max-w-sm -translate-x-1/2 md:hidden">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 ${GLASS}`}
        >
          <a
            href="#about"
            onClick={() => setSelectedItem("About")}
            className="font-serif-accent text-lg italic text-white"
          >
            Shreenarayan
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`mt-2 flex flex-col gap-1 rounded-2xl p-2 ${GLASS}`}
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setSelectedItem(item);
                    setMenuOpen(false);
                  }}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    item === selectedItem
                      ? "bg-white font-semibold text-zinc-950"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        </motion.nav>
      </div>
    </>
  );
}
