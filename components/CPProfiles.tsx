"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { CodeBracketIcon, TrophyIcon, FireIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const CPProfilesPage = () => {
  // Calculate active days between Oct 1, 2022 and today
  const calculateActiveDays = () => {
    const startDate = new Date('2022-10-01');
    const currentDate = new Date();
    
    // Calculate the difference in milliseconds
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    // Convert difference to days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };
  
  // Store the calculated active days
  const activeDays = calculateActiveDays();

  const profilesData = [
    {
      id: 1,
      platform: "LeetCode",
      username: "arunpranavat",
      title: "Knight",
      ranking: "Top 2.31% Globally",
      solved: "970+",
      maxRating: 2025,
      additionalStats: [
        { icon: <TrophyIcon className="h-5 w-5" />, label: "Badges", value: "20" },
        { icon: <FireIcon className="h-5 w-5" />, label: "Daily Streak", value: "470+ days" }
      ],
      color: "from-yellow-500 to-orange-500",
      secondaryColor: "rgba(234, 179, 8, 0.2)",
      logo: "/cp-profiles/leetcode-logo.png",
      link: "https://leetcode.com/arunpranavat/"
    },
    {
      id: 2,
      platform: "CodeChef",
      username: "arunpranavat",
      title: "Three Stars (Div 2)",
      ranking: "381 (Contest Best)",
      solved: "150+",
      maxRating: 1697,
      additionalStats: [
        { icon: <TrophyIcon className="h-5 w-5" />, label: "Best Contest Rank", value: "386" }
      ],
      color: "from-red-500 to-red-700",
      secondaryColor: "rgba(239, 68, 68, 0.2)",
      logo: "/cp-profiles/codechef-logo.png",
      link: "https://www.codechef.com/users/arunpranavat"
    },
    {
      id: 3,
      platform: "Codeforces",
      username: "pranav9176",
      title: "Pupil",
      ranking: "2781 (Contest Best)",
      solved: "50+",
      maxRating: 1279,
      additionalStats: [
        { icon: <TrophyIcon className="h-5 w-5" />, label: "Best Contest Rank", value: "2781" }
      ],
      color: "from-blue-500 to-blue-700", 
      secondaryColor: "rgba(59, 130, 246, 0.2)",
      logo: "/cp-profiles/codeforces-logo.png",
      link: "https://codeforces.com/profile/pranav9176"
    }
  ];

  // Helper function to render stars based on rating
interface AdditionalStat {
    icon: JSX.Element;
    label: string;
    value: string;
}

interface Profile {
    id: number;
    platform: string;
    username: string;
    title: string;
    ranking: string;
    solved: string;
    maxRating: number;
    additionalStats: AdditionalStat[];
    color: string;
    secondaryColor: string;
    logo: string;
    link: string;
}

const renderStars = (maxRating: number): JSX.Element[] => {
    let stars = 0;

    if (maxRating >= 2000) stars = 5;
    else if (maxRating >= 1800) stars = 4;
    else if (maxRating >= 1600) stars = 3;
    else if (maxRating >= 1400) stars = 2;
    else stars = 1;

    return Array(stars)
        .fill(0)
        .map((_, index) => (
            <StarIcon key={index} className="h-5 w-5 text-yellow-400" />
        ));
};

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-40 mb-20 px-8 md:px-16 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop(0)}
        custom={0}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 space-title">
          Competitive Programming Profiles
        </h2>
        <p className="text-gray-400 text-center max-w-[700px]">
          My journey through algorithms, data structures, and problem-solving across various coding platforms.
        </p>
      </motion.div>

      {/* Hexagonal Cosmic Grid Layout */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Cosmic Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute h-64 w-64 rounded-full bg-purple-600/20 blur-3xl top-20 -left-32"></div>
          <div className="absolute h-64 w-64 rounded-full bg-blue-600/20 blur-3xl bottom-10 right-10"></div>
          <div className="absolute h-64 w-64 rounded-full bg-cyan-600/20 blur-3xl top-40 right-0"></div>
        </div>
        
        {/* Connected Profiles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connection Lines (visible on desktop) */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <path 
                d="M250,200 C350,100 650,300 750,200" 
                stroke="rgba(168, 85, 247, 0.4)" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="10,10"
              />
              <circle cx="250" cy="200" r="4" fill="#A855F7" />
              <circle cx="750" cy="200" r="4" fill="#A855F7" />
            </svg>
          </div>

          {/* Profile Cards */}
          {profilesData.map((profile, index) => {
            // Determine animation direction based on index
            const animationVariant = index % 3 === 0 
              ? slideInFromLeft 
              : index % 3 === 1 
                ? slideInFromTop 
                : slideInFromRight;
            
            return (
              <motion.div
                key={profile.id}
                variants={typeof animationVariant === "function" ? animationVariant(index * 0.2) : animationVariant}
                custom={index * 0.2}
                initial="hidden"
                animate="visible"
                className="relative z-10"
              >
                <div className="h-full rounded-2xl bg-black/40 backdrop-blur-md border border-[#7042f81f] overflow-hidden hover:border-[#7042f8] transition-all duration-300 group">
                  {/* Hexagonal Top Shape */}
                  <div className="relative h-32">
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${profile.color} clip-hexagon`}
                    ></div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Platform Logo */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2">
                      <CodeBracketIcon className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Platform Name */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 p-2 rounded-lg text-center">
                      <a 
                      href={profile.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                      >
                      <h3 className="text-2xl font-bold text-white">
                        {profile.platform}
                      </h3>
                      <p className="text-sm text-white/80">@{profile.username}</p>
                      </a>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    {/* Title & Rating */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            {profile.title}
                          </span>
                        </div>
                        {profile.ranking && (
                          <span className="text-gray-400 text-sm">{profile.ranking}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        {renderStars(profile.maxRating)}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {profile.solved && (
                        <div className="bg-[#7042f81f] rounded-lg p-3 flex flex-col items-center justify-center">
                          <p className="text-sm text-gray-400">Problems Solved</p>
                          <p className="text-lg font-bold text-white">{profile.solved}</p>
                        </div>
                      )}
                      
                      <div className="bg-[#7042f81f] rounded-lg p-3 flex flex-col items-center justify-center">
                        <p className="text-sm text-gray-400">Max Rating</p>
                        <p className="text-lg font-bold text-white">{profile.maxRating}</p>
                      </div>
                      
                      {profile.additionalStats.map((stat, idx) => (
                        <div key={idx} className="bg-[#7042f81f] rounded-lg p-3 flex flex-col items-center justify-center">
                          <p className="text-sm text-gray-400">{stat.label}</p>
                          <div className="flex items-center gap-1">
                            <span className="text-purple-400">{React.cloneElement(stat.icon, { className: 'h-4 w-4 text-purple-400' })}</span>
                            <p className="text-lg font-bold text-white">{stat.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* View Profile Button */}
                    <a 
                      href={profile.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium text-center transition-all duration-300"
                    >
                      View Profile
                    </a>
                  </div>
                  
                  {/* Glowing Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-20"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Visual Stats Section */}
        <motion.div
          variants={slideInFromTop(0)}
          custom={0.8}
          initial="hidden"
          animate="visible"
          className="mt-20 bg-black/30 backdrop-blur-md border border-[#7042f81f] rounded-xl p-8 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl"></div>
          
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            My CP Journey
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg border border-purple-500/20">
              <div className="h-16 w-16 rounded-full bg-purple-900/30 border border-purple-500/50 flex items-center justify-center mb-4">
                <CodeBracketIcon className="h-8 w-8 text-purple-400" />
              </div>
              <p className="text-4xl font-bold text-white">1200+</p>
              <p className="text-gray-400">Total Number of Problems Solved</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg border border-purple-500/20">
              <div className="h-16 w-16 rounded-full bg-purple-900/30 border border-purple-500/50 flex items-center justify-center mb-4">
                <FireIcon className="h-8 w-8 text-purple-400" />
              </div>
              <p className="text-4xl font-bold text-white">{activeDays}</p>
              <p className="text-gray-400">Active Number of Days</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg border border-purple-500/20">
              <div className="h-16 w-16 rounded-full bg-purple-900/30 border border-purple-500/50 flex items-center justify-center mb-4">
                <TrophyIcon className="h-8 w-8 text-purple-400" />
              </div>
              <p className="text-4xl font-bold text-white">2025 (Leetcode)</p>
              <p className="text-gray-400">Highest Ratings</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CPProfilesPage;