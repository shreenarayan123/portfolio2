'use client'

import { useEffect, useRef } from 'react'
import {  useScroll, useTransform } from 'framer-motion'
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Modal, ModalTrigger } from './ui/animated-modal';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';
 

export default function Hero() {
  

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Transforming concepts into seamless user experience
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Hii I'm Shreenarayan A full stack developer based in India
        </div>
        
        <div className='pt-10'>
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
        </Modal>
           </Link>
        </div>
        
      </motion.div>
    </AuroraBackground>
  )
}