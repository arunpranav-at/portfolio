"use client";

import {
  Programming_Languages,
  AI_Skills,
  DevOps_Cloud,
  Frontend_Design,
  Backend_Database,
  CS_Fundamentals,
} from "@/constants";
import React from "react";
import SkillDataProvider from "@/components/SkillDataProvider";
import SkillText from "@/components/SkillText";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

interface SkillCategoryProps {
  title: string;
  skills: {
    Image: string;
    width: number;
    height: number;
    name: string;
  }[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <div className="flex flex-wrap gap-5 justify-center md:justify-start">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? slideInFromLeft(index * 0.2) : slideInFromRight(index * 0.2)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-10 transition-all duration-300 w-28 h-32"
          >
            <div className="flex items-center justify-center mb-2">
              <SkillDataProvider
                src={skill.Image}
                width={skill.width}
                height={skill.height}
                index={index}
              />
            </div>
            <p className="text-sm text-gray-300 text-center mt-auto">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-10 py-20 relative overflow-hidden"
      style={{ zIndex: 10 }}
    >
      <SkillText />      
      <div className="flex flex-col gap-12 w-full max-w-6xl px-5">
        <SkillCategory title="Programming Languages" skills={Programming_Languages} />
        <SkillCategory title="Frontend & Design" skills={Frontend_Design} />
        <SkillCategory title="Backend & Database" skills={Backend_Database} />
        <SkillCategory title="DevOps & Cloud" skills={DevOps_Cloud} />
        <SkillCategory title="AI & Machine Learning" skills={AI_Skills} />
        <SkillCategory title="CS Fundamentals" skills={CS_Fundamentals} />
      </div>
    </section>
  );
};

export default Skills;