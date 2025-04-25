"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      src: "/projectscreenshots/faith.png",
      title: "FAITH",
      description: "FAITH : Framework for AI Integrity and Testing Hallucinations. 🪷 FAITH is an Azure AI based web application which is used to find hallucinations and ensure integrity among various AI models and LLMs along with confident scores, complete reasoning, detailed analytics and visualizations by comparing with external knowledge sources.",
      techStack: ["Azure App Service", "OpenAI", "Bing Search", "Azure AI", "Cosmos DB", "Next.js", "TailwindCSS", "Python", "FastAPI"],
      achievements: ["Won 3rd prize in Microsoft Innovation Challenge December Edition 2024 with a cash prize of $2500"],
      githubUrl: "https://github.com/arunpranav-at/FAITH"
    },
    {
      src: "/projectscreenshots/donationstation.png",
      title: "The Do-Nation Station",
      description: "The Do-Nation Station is a centralized platform designed to facilitate transparent donations to orphanages, NGOs, hospitals, foundations, and old age homes. It aims to simplify the donation process, ensuring that donors can easily find and support organizations based on specific needs, locations, and urgency.",
      techStack: ["Next.js", "Appwrite", "TailwindCSS", "Material UI", "Google Maps API", "React.js", "Figma"],
      achievements: ["Finalist project in Hack4Change hackathon at Charcha2024", "Scored 100% on Best Practices, 95% on Performance, 82% on SEO in Lighthouse"],
      githubUrl: "https://github.com/arunpranav-at/The-Do-Nation-Station"
    },
    {
      src: "/projectscreenshots/kspdatathon.png",
      title: "Predictive Crime Analytics and Visualization System",
      description: "Predictive Crime Analytics and Visualization System for Karnataka State, a cutting-edge initiative aimed at revolutionizing crime prevention. Our project offers deep insights into historical crime trends and forecasts future occurrences.",
      techStack: ["Python", "Tensorflow", "Streamlit", "Plotly", "Pandas", "Seaborn", "Geopy"],
      achievements: ["Offers deep insights into historical crime trends and categorizes crime with average response time of 1.5 seconds", "Visualizes crime data geospatially to get hotspot areas"],
      githubUrl: "https://github.com/arunpranav-at/kspdatathon"
    },
    {
      src: "/projectscreenshots/atap.png",
      title: "ATAP",
      description: "ATAP - Animation Tool for Adorable Preschoolers 🥰 simple, fun, and easy-to-use 2D animation program designed specifically for young kids. With an intuitive interface, minimal complexity, and essential animation tools, ATAP allows children to create frame-by-frame animations effortlessly!",
      techStack: ["Python", "PyQt5"],
      achievements: ["Designed and developed within a span of 3 days", "Adjust brush sizes, undo changes, and even save unfinished projects to continue later"],
      githubUrl: "https://github.com/arunpranav-at/atap"
    },
    {
      src: "/projectscreenshots/harmfulcontentdetection.png",
      title: "Harmful Content Detection",
      description: "A comprehensive platform which detects harmful contents of different formats (texts, images, audio, video, URLs) in various languages including English, Tamil, Tanglish, etc.",
      techStack: ["XLM-RoBERTa tranformers", "Google BERT", "Python", "Streamlit", "PyTorch"],
      achievements: ["Won 2nd prize in She Innovates hackathon conducted by Google Developer Groups, WTM on International Women's Day 2024"],
      githubUrl: "https://github.com/arunpranav-at/Harmful_Content_Detection"
    },
    {
      src: "/projectscreenshots/veritrueai.png",
      title: "Veritrue AI",
      description: "A comprehensive platform named Veritrue.ai which takes in various input formats like video, image, audio and predicts whether it is a deepfake or a real one.",
      techStack: ["Python", "Gradio", "MTCNN", "Resnet", "Librosa", "Jupyter Notebook"],
      achievements: ["Secured 4th place In Cyberhackathon 3.0 conducted by Greater Chennai Police, SRMIST", "Developed within a time period of 18 hours"],
      githubUrl: "https://github.com/arunpranav-at/Veritrue.ai_by_TrioBoys"
    },
    {
      src: "/projectscreenshots/pact.png",
      title: "PACT",
      description: "PACT (Prompt Auto-Correction and Testing) is an advanced system that auto-corrects, sanitizes user inputs, and tests and compares statistics before sending them to the AI. A golden gateway to improve prompt-engineering skills of the users.",
      techStack: ["Azure App Service", "OpenAI", "Azure AI", "Cosmos DB", "Next.js", "TailwindCSS", "Python", "FastAPI"],
      achievements: ["Submitted to Microsoft Innovation Challenge March Edition 2025", "Used Azure products extensively to build a scalable and reliable system"],
      githubUrl: "https://github.com/arunpranav-at/PACT"
    },
    {
      src: "/projectscreenshots/aura.png",
      title: "AURA AI",
      description: "AURA is an Azure AI-based web application designed to detect hallucinations and ensure integrity across various AI models and LLMs. It provides confidence scores, complete reasoning, detailed analytics along with bias, violence, sexual and self harm, and visualizations by comparing outputs with external knowledge sources.",
      techStack: ["Azure App Service", "Bing Search", "Azure AI", "Cosmos DB", "Next.js", "TailwindCSS", "FastAPI"],
      achievements: ["Features a RAG capability, users can upload their own knowledge bases"],
      githubUrl: "https://github.com/arunpranav-at/aura.ai"
    },
    {
      src: "/projectscreenshots/gtcd.png",
      title: "GTCD",
      description: "GTCD : Googol Test Cheating Detector is an AI-powered monitoring system designed to ensure academic integrity during online exams and interviews. It combines Computer Vision and AI/ML technologies to monitor test-takers in real-time, detecting cheating attempts.",
      techStack: ["Python", "Pygetwindow", "Winsound", "Gemini AI", "Google IDX"],
      achievements: ["Submitted for Google Solutions Challenge 2025", "Developed within a time period of one week", "This project leverages several Google technologies to enhance functionality and development like Google Gemini AI, Google IDX, etc."],
      githubUrl: "https://github.com/arunpranav-at/GTCD"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-20 sm:mt-40 mb-10 sm:mb-20 w-full z-[20]"
      id="projects"
    >
      {/* Title Section */}
      <motion.div
        variants={slideInFromTop(0)}
        custom={0}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center mb-8 sm:mb-16 px-4 sm:px-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 sm:mb-4 space-title">
          My Projects
        </h2>
        <p className="text-sm sm:text-base text-gray-400 text-center max-w-[900px]">
          A collection of what I have built, broken, and built better. Here are some of my projects that I have worked on.
        </p>
      </motion.div>

      {/* Project Cards Grid - With slide from top animation for each card */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={slideInFromTop(0.1 * (index + 1))} // Staggered delay based on index
            initial="hidden"
            animate="visible"
          >
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              achievements={project.achievements}
              githubUrl={project.githubUrl}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;