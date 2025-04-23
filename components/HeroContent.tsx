"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop(0)}
          className="Welcome-box flex items-center gap-2 py-2 px-3 border border-[#7042f88b] opacity-90 rounded-md shadow-sm bg-white/10 backdrop-blur"
        >
          <a
            href="https://www.buymeacoffee.com/arunpranavat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-400 transition duration-200 text-sm"
          >
            <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
            <span className="Welcome-text underline">Support Me</span>
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Humble, optimistic ambivert weaving code with care and collaboration.
        </motion.p>
        <motion.a
          href="https://flowcv.com/resume/jbipw77gh3"
          variants={slideInFromLeft(1)}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[100px]"
        >
          Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/stagespeaking.jpeg"
          alt="work icons"
          height={500}
          width={500}
          className="rounded-full glow-effect"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;