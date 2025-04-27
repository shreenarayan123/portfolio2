"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { projects } from "@/app/content";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
type Project = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
};

export default function Projects() {
  return (
    <section id="projects" className="py-10 md:px-10 bg-white dark:bg-gray-800">
      <div className="md:container md:mx-auto  px-4">
        <h2 className="md:text-5xl text-3xl  font-cal-sans-regular font-semibold mb-8 text-center text-black dark:text-white tracking-wide">
          Check out my latest work
        </h2>
        <div className="md:grid w-full flex flex-col  md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative md:h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="cover"
                  className="transition-opacity duration-300"
                  placeholder="blur"
                  blurDataURL="/placeholder.svg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 ">
                  {project.description}
                </p>
                <div className=" md:flex-wrap gap-2 mb-4 hidden md:flex">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-black font-semibold dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className=" flex items-start gap-3">
                    {project.link && (
                      <Link href={project.link} target="_blank">
                        <span className="px-3 font-semibold py-1 flex gap-2 items-center bg-black dark:bg-gray-600 text-white dark:text-gray-300 rounded-full text-sm">
                          <Globe size={15} /> Live
                        </span>
                      </Link>
                    )}
                    <Link href={project.code} target="_blank">
                      <span className="px-3 font-semibold py-1 flex gap-2 items-center bg-black dark:bg-gray-600 text-white dark:text-gray-300 rounded-full text-sm">
                        <Github size={15} /> Source
                      </span>
                    </Link>
                  </div>
                  {/* {project.id === 1 && (
                    <p className="font-bold text-xl bg-gradient-to-r from-[rgba(2,0,36,1)] via-[rgba(9,9,121,1)] to-[rgba(0,212,255,1)] bg-clip-text text-transparent">
                      Coming soon
                    </p>
                  )} */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
