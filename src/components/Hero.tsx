"use client";
import { motion } from "framer-motion";
import React from "react";
import { Modal, ModalTrigger } from "./ui/animated-modal";
import Link from "next/link";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ShimmerButton } from "./magicui/shimmer-button";

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
          <Link href="#projects">
            <Modal>
              <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                  See my projects
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  Let's go ! 🚀
                </div>
              </ModalTrigger>
            </Modal>{" "}
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
