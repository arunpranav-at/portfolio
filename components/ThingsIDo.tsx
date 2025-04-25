"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import {
  CodeBracketIcon,
  ServerIcon,
  CpuChipIcon,
  CommandLineIcon,
  AcademicCapIcon,
  BoltIcon,
  HeartIcon,
  PencilIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      variants={slideInFromTop(0)}
      custom={delay}
      initial="hidden"
      animate="visible"
      className="w-full md:w-[300px] h-[350px] p-4 bg-black/30 backdrop-blur-md rounded-lg border border-[#7042f81f] flex flex-col items-center justify-start gap-2 transition-all duration-300"
    >
      <div className="w-full flex justify-center">
        {icon}
      </div>
      {/* Added text-center class to ensure title is centered on all devices */}
      <h3 className="text-xl font-bold text-white mt-5 text-center w-full">{title}</h3>
      <p className="text-gray-400 text-center mt-2">{description}</p>
    </motion.div>
  );
};

const ThingsIDo = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // Added more responsive padding for mobile
      className="mt-40 mb-20 px-4 sm:px-10 md:px-20 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop(0)}
        custom={0}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
          Things I Do
        </h2>
        <p className="text-gray-400 text-center max-w-[700px]">
          Blending logic, creativity, and a growth mindset to build, solve, and inspire.
        </p>
      </motion.div>

      {/* Improved gap and spacing for mobile */}
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
        <ServiceCard
          icon={<AcademicCapIcon className="h-16 w-16 text-purple-500" />}
          title="Competitive Programming"
          description="Sharpening problem-solving skills and Data Structures & Algorithms through consistent practice on LeetCode, CodeChef, and Codeforces. I enjoy tackling algorithmic challenges and optimizing code for performance."
          delay={0.1}
        />
        <ServiceCard
          icon={<CodeBracketIcon className="h-16 w-16 text-cyan-500" />}
          title="Full-Stack Development"
          description="Building dynamic apps with Next.js, React.js, Angular.js, Flask, Node.js, and more. I handle both frontend and backend with databases like MySQL, Postgres, MongoDB, and use Appwrite for serverless infrastructure."
          delay={0.2}
        />
        <ServiceCard
          icon={<CpuChipIcon className="h-16 w-16 text-purple-500" />}
          title="AI, ML & Data Science"
          description="Working with Python, TensorFlow, Keras and PyTorch. I dive deep into ML/DL, large language models, data visualization, applied math, stats, and real-world problem solving through intelligent systems."
          delay={0.3}
        />
        <ServiceCard
          icon={<CloudIcon className="h-16 w-16 text-cyan-500" />}
          title="Cloud & DevOps"
          description="Deploying and maintaining apps using Azure, Docker, Linux, Git, and GitHub. I automate workflows and manage scalable cloud infrastructure with modern DevOps practices. "
          delay={0.4}
        />
        <ServiceCard
          icon={<BoltIcon className="h-16 w-16 text-purple-500" />}
          title="Hackathons & Freelancing"
          description="Engaging in hackathons, networking, collaborating, coding contests, and freelance projects to apply knowledge, work under pressure, and build innovative solutions in diverse team environments."
          delay={0.5}
        />
        <ServiceCard
          icon={<HeartIcon className="h-16 w-16 text-cyan-500" />}
          title="Community & Open Source"
          description="Giving back by contributing to open source and volunteering with communities like Microsoft Learn Student Ambassadors and Google Developer Groups. I love mentoring, collaborating, and sharing knowledge."
          delay={0.6}
        />
        <ServiceCard
          icon={<PencilIcon className="h-16 w-16 text-purple-500" />}
          title="Content & Creativity"
          description="Expressing ideas through content on LinkedIn, YouTube, and Instagram. I also explore writing, singing and listening to music, philosophies, spirituality, and visual art as forms of creative expression."
          delay={0.7}
        />
        <ServiceCard
          icon={<HeartIcon className="h-16 w-16 text-cyan-500" />}
          title="Health & Lifestyle"
          description="Staying active with swimming, gym workouts, travel, meditation, yoga and mindful eating. I believe that wellness fuels both creativity and productivity in my everyday life. A lot of self love to take care of myself."
          delay={0.8}
        />
      </div>
    </motion.div>
  );
};

export default ThingsIDo;