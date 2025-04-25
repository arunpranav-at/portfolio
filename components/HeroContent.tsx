"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { RxLinkedinLogo, RxInstagramLogo, RxGithubLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Text Content - Stacks on top for mobile */}
      <div className="h-full w-full flex flex-col gap-3 md:gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop(0)}
          className="Welcome-box flex items-center justify-center md:justify-start gap-2 py-2 px-3 border border-[#7042f88b] opacity-90 rounded-md shadow-sm bg-white/10 backdrop-blur mx-auto md:mx-0 max-w-[200px]"
        >
          <a
            href="https://www.buymeacoffee.com/arunpranavat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-400 transition duration-200 text-sm"
          >
            <span className="Welcome-text underline font-bold">Support Me</span>
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 md:gap-6 mt-4 md:mt-6 text-3xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Hello everyone! I am
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Arun Pranav A T{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-full md:max-w-[600px]"
        >
          Humble, optimistic ambivert weaving code with care and collaboration.
        </motion.p>
        
        <div className="flex flex-col gap-4 items-center md:items-start">
          <motion.a
            href="https://flowcv.com/resume/jbipw77gh3"
            variants={slideInFromLeft(1)}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg w-full max-w-[150px]"
          >
            Resume
          </motion.a>
          
          <motion.div
            variants={slideInFromLeft(1.2)}
            className="flex justify-center md:justify-start flex-wrap gap-6 mt-2 w-full"
          >
            <a
              href="https://www.linkedin.com/in/arunpranavat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors text-gray-300"
              aria-label="LinkedIn"
            >
              <RxLinkedinLogo size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
            
            <a
              href="https://www.github.com/arunpranav-at"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors text-gray-300"
              aria-label="GitHub"
            >
              <RxGithubLogo size={20} />
              <span className="text-sm">GitHub</span>
            </a>

            <a
              href="mailto:pranav9176@gmail.com"
              className="flex items-center gap-2 hover:text-green-400 transition-colors text-gray-300"
              aria-label="Email"
            >
              <HiOutlineMail size={20} />
              <span className="text-sm">Email</span>
            </a>

            <a
              href="https://www.instagram.com/arunpranavat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-400 transition-colors text-gray-300"
              aria-label="Instagram"
            >
              <RxInstagramLogo size={20} />
              <span className="text-sm">Instagram</span>
            </a>

          </motion.div>
        </div>
      </div>

      {/* Image - Will appear below text on mobile, larger on desktop */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-8 md:mt-0"
      >
        <div className="relative w-[250px] h-[250px] md:w-[500px] md:h-[500px]">
          <Image
            src="/stagespeaking.jpeg"
            alt="work icons"
            fill
            className="rounded-full glow-effect object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;