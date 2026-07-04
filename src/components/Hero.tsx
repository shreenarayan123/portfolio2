"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Hero() {
  return (
    <div className="relative flex flex-col gap-4 items-center justify-center px-4">
      <div id="about" className="flex items-center py-20 h-full gap-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <span className="md:text-6xl text-4xl items-center flex flex-col md:items-start gap-2 font-inter font-bold text-center text-gray-900 dark:text-white">
            <span className="flex items-center gap-2">
              {" "}
              Hi, I'am
              <motion.span
                initial={{ y: -10 }}
                animate={{ y: 10 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                }}
              >
                👋
              </motion.span>
            </span>
            <AuroraText speed={2}>Shreenarayan </AuroraText>
          </span>
          <span className="text-xl">A FullStack Developer from India</span>
          <Link
            href="/projects"
            className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-black px-6 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-black"
          >
            <span className="transition duration-300 group-hover:translate-y-6">
              Things i built so far 
            </span>
            <span className="absolute translate-y-6 transition duration-300 group-hover:translate-y-0">
              View all projects
            </span>
          </Link>
        </div>
        <div className="[perspective:1000px] [transform-style:preserve-3d] flex items-center justify-center">
          <Image
            src="/images/me2.png"
            alt="Hero Image"
            width={350}
            height={400}
            className="rounded-2xl z-50 shadow-lg md:block hidden"
          />
        </div>
      </div>
    </div>
  );
}
