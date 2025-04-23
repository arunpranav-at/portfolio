"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const VolunteerPage = () => {
  
  const volunteerExperiences = [
    {
      id: 1,
      organization: "Microsoft Learn Student Ambassadors",
      role: "Beta MLSA",
      description: "Worked on Microsoft Azure platform, utilized Azure AI services and educated peers on tech trends.",
      timeline: "Nov 2023 - present",
      image: "/volunteering/mlsa-beta.png"
    },
    {
      id: 2,
      organization: "Introduction to Cloud (Part of Horizon - Cloud Club)",
      role: "Mentor",
      description: "Gave introductory sessions on cloud computing and its applications, focusing on Azure.",
      timeline: "Mar 2025",
      image: "/volunteering/cloud-event.jpeg"
    },
    {
      id: 3,
      organization: "GDSC Chennai Institute of Technology",
      role: "Member",
      description: "Participated in Google DSC Hackathon, reaching National Finalist status, and attended devfest events.",
      timeline: "Oct 2022 - Dec 2023",
      image: "/volunteering/gdsc-member.jpeg"
    },
    {
      id: 4,
      organization: "Global Investors Meet",
      role: "Student Representative",
      description: "Represented my college at the Global Investors Meet, networking with industry leaders and learning about investment opportunities.",
      timeline: "Aug 2023",
      image: "/volunteering/global-investors-meet.jpeg"
    },
    {
      id: 5,
      organization: "Trojans CIT 2023",
      role: "Workshop Coordinator",
      description: "Coordinated workshops on various tech topics, including artificial intelligence and emerging technologies.",
      timeline: "Sept 2023",
      image: "/volunteering/trojans-ai-workshop.jpeg"
    },
    {
      id: 6,
      organization: "CITCOS (Carnival of Science)",
      role: "Presenter",
      description: "Presented the project on AI integrated chatbot and demonstrated its applications to students and faculty.",
      timeline: "Dec 2023",
      image: "/volunteering/citcos.jpeg"
    },
    {
      id: 7,
      organization: "Trojans CIT 2022",
      role: "Hosting and People Management",
      description: "Coordinated and hosted events, managing logistics and participant engagement.",
      timeline: "Sept 2022",
      image: "/volunteering/trojanscit.jpeg"
    },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl top-20 -left-48"></div>
        <div className="absolute h-96 w-96 rounded-full bg-blue-600/10 blur-3xl bottom-40 right-20"></div>
        <div className="absolute h-64 w-64 rounded-full bg-purple-600/10 blur-3xl top-1/3 left-1/3"></div>
        
        {/* Stars */}
        <div className="stars absolute inset-0" aria-hidden="true">
          {Array.from({ length: 100 }).map((_, index) => (
            <div 
              key={index}
              className="absolute bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop(0)}
          className="flex flex-col items-center justify-center text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
            Volunteering
          </h1>
          <p className="text-gray-400 text-center max-w-[700px] text-lg">
            My journey of giving back and making an impact through meaningful volunteer work.
          </p>
        </motion.div>

        {/* Volunteer Experiences List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {volunteerExperiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-black/30 border border-[#7042f81f] hover:border-purple-500/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="md:flex">
                {/* Image container with 4:3 aspect ratio */}
                <div className="md:w-1/3 relative">
                  <div className="pb-[75%] md:pb-0 md:h-full"> {/* 4:3 aspect ratio (75%) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-60 z-10"></div>
                    <Image
                      src={experience.image} 
                      alt={experience.organization} 
                      fill
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Content container */}
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                      {experience.organization}
                    </h3>
                    <span className="text-sm text-indigo-300 mt-2 md:mt-0">
                      {experience.timeline}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-4">
                    {experience.role}
                  </h4>
                  
                  <p className="text-gray-300">
                    {experience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VolunteerPage;