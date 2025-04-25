"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  companyUrl: string;
  delay: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  company, 
  duration, 
  location, 
  description,
  companyUrl, 
  delay 
}) => {
  return (
    <motion.div
      variants={slideInFromTop(0)}
      custom={delay}
      initial="hidden"
      animate="visible"
      className="w-full p-4 sm:p-6 bg-black/30 backdrop-blur-md rounded-lg border border-[#7042f81f] flex flex-col gap-2 hover:border-[#7042f8] transition-all duration-300 cosmic-glow"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <BriefcaseIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
            <a 
              href={companyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:underline"
            >
              {company}
            </a>
          </div>
        </div>
        <div className="text-left sm:text-right mt-1">
          <p className="text-sm sm:text-base text-gray-400">{duration}</p>
          <p className="text-sm sm:text-base text-gray-400">{location}</p>
        </div>
      </div>
      
      <ul className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 space-y-1">
        {description.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-500 mr-2 flex-shrink-0">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ExperienceComponent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-20 sm:mt-40 mb-10 sm:mb-20 px-4 sm:px-10 md:px-20 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop(0)}
        custom={0}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center mb-8 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 sm:mb-4 space-title">
          Professional Experience
        </h2>
        <p className="text-sm sm:text-base text-gray-400 text-center max-w-[700px]">
          I have had the opportunity to work with some amazing companies and teams, where I have gained valuable experience and skills. Here are some of my key experiences:
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-4 sm:gap-8 w-full max-w-3xl mx-auto">
        <ExperienceCard
          title="Software Development Engineer Intern"
          company="Reverence Data Company"
          companyUrl="https://www.reverencedata.com/"
          duration="May 2024 - Sep 2024"
          location="Chennai, India"
          description={[
            "Enhanced company product using Angular, PostgreSQL, Python Flask, REST APIs, adding $6K in value",
            "Collaborated with a team of 4 developers using Git, Bitbucket, Confluence, Jira, and Figma"
          ]}
          delay={0.1}
        />

        <ExperienceCard
          title="Artificial Intelligence Trainee"
          company="BUDDI AI"
          companyUrl="https://buddi.ai"
          duration="Apr 2024 - May 2024"
          location="Chennai, India"
          description={[
            "Built 4+ ML models for data classification, regression tasks, achieving over 85%+ accuracy each",
            "Explored RNN, CNN, LSTM, VAE, GAN, and transformers for image and language models as a part of Gen AI"
          ]}
          delay={0.2}
        />

        <ExperienceCard
          title="Intern Special Initiatives"
          company="IITM Pravartak Technologies Foundation"
          companyUrl="https://iitmpravartak.org.in/"
          duration="Dec 2023 - Feb 2024"
          location="Chennai, India"
          description={[
            "Automated company processes that elevated output by 17 times using Linux, Python and Bash script"
          ]}
          delay={0.3}
        />

        <ExperienceCard
          title="Web Design and Development Lead"
          company="GetMax Global Solutions Pvt. Ltd."
          companyUrl="https://getmaxsolutions.com/"
          duration="Oct 2023 - Dec 2023"
          location="Chennai, India"
          description={[
            "Managed clients and developed five websites using HTML, CSS, JavaScript, React.js within 2 months",
            "Led a team of 8 developers in five projects resulting in a 70% profit increase for the company"
          ]}
          delay={0.4}
        />

        <ExperienceCard
          title="Writer, Designer"
          company="Impact CIT"
          companyUrl="https://www.linkedin.com/company/impact-studentcommunity/"
          duration="Dec 2022 - Dec 2023"
          location="Chennai, India"
          description={[
            "Created content utilizing skills in communication, problem solving, and analytical thinking",
            "Contributed to organizational communications using Microsoft Office and Google Workspace"
          ]}
          delay={0.6}
        />
      </div>
    </motion.div>
  );
};

export default ExperienceComponent;