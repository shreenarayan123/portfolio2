"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { projects } from "@/app/content";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { PinContainer } from "./ui/3d-pin";
type Project = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 px-10 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="flex justify-center mb-8">
          {["All", "Full stack", "Front end"].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === tag
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-700  rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
            
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
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
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className=" flex items-start gap-3">
                    {project.link && (
                      <Link href={project.link} target="_blank">
                        <span className="px-3 py-1 flex gap-2 items-center bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          <Globe /> Live
                        </span>
                      </Link>
                    )}
                    <Link href={project.code} target="_blank">
                      <span className="px-3 py-1 flex gap-2 items-center bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        <Github /> Github
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
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {selectedProject.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
