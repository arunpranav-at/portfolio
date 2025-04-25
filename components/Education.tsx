"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade: string;
  description: string[];
  institutionUrl: string;
  delay: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ 
  institution, 
  degree, 
  duration, 
  location, 
  grade,
  description,
  institutionUrl, 
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
          <AcademicCapIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">{degree}</h3>
            <a 
              href={institutionUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:underline"
            >
              {institution}
            </a>
          </div>
        </div>
        <div className="text-left sm:text-right mt-1">
          <p className="text-sm sm:text-base text-gray-400">{duration}</p>
          <p className="text-sm sm:text-base text-gray-400">{location}</p>
          <p className="text-sm sm:text-base text-purple-400 font-medium">{grade}</p>
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

const EducationComponent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-20 sm:mt-40 mb-10 sm:mb-20 px-4 sm:px-6 md:px-8 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop(0)}
        custom={0}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center mb-8 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 sm:mb-4 space-title">
          Education
        </h2>
        <p className="text-sm sm:text-base text-gray-400 text-center max-w-[900px]">
          My academic journey has equipped me with a strong foundation in technology and various other disciplines. Here is a look at my educational background:
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-4 sm:gap-8 w-full max-w-4xl mx-auto">
        <EducationCard
          institution="Chennai Institute of Technology, Anna University"
          degree="Bachelor of Technology - BTech, Information Technology"
          institutionUrl="https://www.citchennai.edu.in/"
          duration="Oct 2022 - Apr 2026"
          location="Chennai, India"
          grade="CGPA: 9.74"
          description={[
            "Developing expertise in various technologies including PostgreSQL, React.js, Microsoft Azure, Git, and more",
            "Gaining proficiency in programming languages such as Python, JavaScript, C++, Java, and Rust",
            "Building strong foundations in data structures, algorithms, and problem-solving methodologies",
            "Engaging in competitive programming, hackathons, and open-source contributions to strengthen technical skills",
            "Active participation in tech communities, enhancing leadership and collaboration abilities"
          ]}          
          delay={0.1}
        />

        <EducationCard
          institution="The Hindu Colony Chellammal Vidyalaya (CBSE)"
          degree="Class 12, Computer Science with Physics, Chemistry, Mathematics and English"
          institutionUrl="https://www.chellammalvidyalayaschool.org/"
          duration="2021 - 2022"
          location="Chennai, India"
          grade="96.8% - A1"
          description={[
            "Scored 484/500 in Class 12 CBSE board examination with School rank 3",
            "Subject topper in Mathematics, Computer Science, and English",
            "Active member of Student Council, Environment Club, Science Club, and Social Debate Club",
            "Organized events like Shraddha Vibhushita (Children's day Fest), Literary Associations, and Inter-school Tournaments"
          ]}
          delay={0.2}
        />

        <EducationCard
          institution="The Hindu Colony Chellammal Vidyalaya (CBSE)"
          degree="Class 10, Science, Mathematics, Social Science, Information Technology, English, Tamil"
          institutionUrl="https://www.chellammalvidyalayaschool.org/"
          duration="2019 - 2020"
          location="Chennai, India"
          grade="98.6% - A1"
          description={[
            "Scored 493/500 marks in Class 10 CBSE board examination with School rank 1",
            "Subject topper in Science, Information Technology, and Tamil",
            "Active member of Student Council, Environment Club, Science Club, and Social Debate Club",
            "Participated in organization of Literary Associations, Science and Maths Associations, and Inter-school Tournaments"
          ]}
          delay={0.3}
        />

        <EducationCard
          institution="Dakshina Bharat Hindi Prachar Sabha"
          degree="Bachelor of Arts - BA (Rashtrabhasha Praveen), Hindi Language and Literature"
          institutionUrl="https://www.dbhpscentral.org/latindex"
          duration="2018"
          location="Chennai, India"
          grade="First Class"
          description={[
            "Developed proficiency in Hindi language and literature",
            "Enhanced analytical skills and communication abilities",
            "Gained cultural and linguistic understanding of Hindi-speaking regions"
          ]}
          delay={0.4}
        />
      </div>
    </motion.div>
  );
};

export default EducationComponent;