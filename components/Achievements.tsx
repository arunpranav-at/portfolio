"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { TrophyIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { LinkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface AchievementCardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  delay: number;
  linkedInPost?: string;
  imageUrl?: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ 
  title, 
  organization, 
  date, 
  description, 
  delay,
  linkedInPost,
  imageUrl
}) => {
  return (
    <motion.div
      variants={slideInFromTop(0)}
      custom={delay}
      initial="hidden"
      animate="visible"
      className="w-full p-4 sm:p-6 bg-black/30 backdrop-blur-md rounded-lg border border-[#7042f81f] flex flex-col gap-4 hover:border-[#7042f8] transition-all duration-300 cosmic-glow mx-auto"
    >
      <div className="flex flex-row items-center gap-4">
        <div className="flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-900/30 border border-purple-500/50 shrink-0">
          <TrophyIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col justify-between gap-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
            <p className="text-sm sm:text-base text-cyan-400 font-medium">{date}</p>
          </div>
          
          <p className="text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium mt-1">
            {organization}
          </p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        {imageUrl && (
          <div className="w-full sm:w-1/3 h-48 relative rounded-lg overflow-hidden bg-black/50 shrink-0 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={`${title} image`}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className="rounded-lg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </div>
        )}
        
        <div className={`flex-1 flex flex-col ${imageUrl ? "" : "mt-0"}`}>        
          <p className="text-sm sm:text-base text-gray-300">{description}</p>
          
          {linkedInPost && (
            <a 
              href={linkedInPost} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 text-sm sm:text-base text-purple-400 hover:text-purple-300 transition-colors"
            >
              <LinkIcon className="h-4 w-4 mr-1" />
              View LinkedIn Post
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const achievementsData = [
  {
    id: 1,
    title: "Microsoft Innovation Challenge 3rd Prize",
    organization: "Microsoft Azure",
    date: "Dec 2024",
    description: "Built FAITH - AI Hallucination detector and analyser that helps users identify and analyze AI-generated hallucinations in text.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_happy-achievement-team-activity-7280581980025470977-2KBt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/microsoft-innovation-challenge.png"
  },
  {
    id: 2,
    title: "Smart India Hackathon 2023 Winners",
    organization: "Government of India",
    date: "Dec 2023",
    description: "Built a custom chatbot for the Ministry of Coal that streamlines information access and enhances communication efficiency.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_smartindiahackathon2023-coderoyalty-championsofinnovation-activity-7144198925321650176-3A2d?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/sih-winners.png"
  },
  {
    id: 3,
    title: "Microsoft Campus Connect Quiz 2024 Winner",
    organization: "Microsoft",
    date: "Jun 2024",
    description: "Ranked in the Top 100 out of 4000+ participants nationwide, demonstrating exceptional technical knowledge and problem-solving skills.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_microsoft-campusconnect-quiz-activity-7207368082384711681-3H62?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/microsoft-campus-connect.png"
  },
  {
    id: 4,
    title: "Google DSC WOW Hackathon 2023 National Finalist",
    organization: "Google DSC Kerala",
    date: "Apr 2023",
    description: "Reached Top 30 out of 3000+ teams nationwide with an innovative solution addressing real-world challenges.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_developer-android-google-activity-7053642758732853248-YQsU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/google-dsc-wow.png"
  },
  {
    id: 5,
    title: "IWD SheInnovates Hackathon 2nd Prize",
    organization: "Google Developer Groups, Women Techmakers",
    date: "Mar 2024",
    description: "Developed Empo(W)HER within just 6 hours, a platform designed to empower women through technology and community support.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_google-googledevelopergroups-womentechmakers-activity-7173383874276651008-bhxc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/iwd-hackathon.png"
  },
  {
    id: 6,
    title: "CyberHackathon 3.0 4th Place",
    organization: "Greater Chennai Police and SRMIST",
    date: "Mar 2024",
    description: "Created Veritrue AI within 18 hours, an innovative solution addressing cybersecurity challenges and helping protect digital identities.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_deepfake-cybersecurity-hackathon-activity-7170422143472656384-3v1F?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/cyber-hackathon.png"
  },
  {
    id: 7,
    title: "Hack4Change Charcha 2024 Finalist",
    organization: "Google, The Nudge",
    date: "Aug 2024",
    description: "Reached Top 40 out of 6000+ teams with Do-Nation Station, a platform connecting donors with those in need through a streamlined donation process.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_hack4change-hackathon-charcha2024-activity-7232632621048938496-zmFG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/hack4change.png"
  },
  {
    id: 8,
    title: "Techgig Code Gladiators 2024 - Finale Rank 128",
    organization: "Techgig",
    date: "Aug 2024",
    description: "Achieved Rank 128 out of 330,000+ programmers nationwide, demonstrating exceptional coding skills and algorithmic thinking.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_coding-competition-professionals-activity-7226428718125105152-uOlx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/techgig-gladiators.png"
  },
  {
    id: 9,
    title: "LeetCode Knight, Top 2.31% Globally",
    organization: "LeetCode",
    date: "Apr 2025",
    description: "Solved 970+ problems with a max rating of 2025. Maintained a 470+ days daily streak and earned 20 badges.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_competitive-programming-update-activity-7242844220418375681-zW-R?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/leetcode-knight.png"
  },
  {
    id: 10,
    title: "CodeChef 3★ (Division 2)",
    organization: "CodeChef",
    date: "Mar 2024",
    description: "Achieved a max rating of 1697 with a best contest rank of 386.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_three-stars-yesterday-activity-7227167454332928003-_GrS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/codechef-3star.png"
  },
  {
    id: 11,
    title: "Codeforces Pupil",
    organization: "Codeforces",
    date: "Feb 2024",
    description: "Reached a max rating of 1279 with a best contest rank of 2781.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_codeforces-pupil-competitiveprogramming-activity-7236568530945503232-nO7-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/codeforces-pupil.png"
  },
  {
    id: 12,
    title: "Microsoft Learn Student Ambassador (Beta)",
    organization: "Microsoft",
    date: "Nov 2023",
    description: "Selected for Microsoft Learn Student Ambassador program. Worked with Microsoft Azure and Azure AI services, guiding peers on tech trends and innovation.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_microsoftlearn-studentambassadors-techeducation-activity-7154738184772354049-PDx6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/mlsa-beta.png"
  },
  {
    id: 13,
    title: "Cleared GATE Exam",
    organization: "IITs/IISc",
    date: "Mar 2025",
    description: "Successfully cleared the GATE examination, demonstrating strong fundamentals in engineering concepts.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_congratulations-to-all-the-students-who-have-activity-7312812271590617088-GG2p?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/gate-exam.png"
  },
  {
    id: 14,
    title: "Selected for TN Skills Level 2 - Mobile App Dev",
    organization: "Tamil Nadu Skill Development Corporation",
    date: "Feb 2024",
    description: "Cleared Level 1 (District Level) and competed in Level 2 (State Level) for Mobile Application Development under TN Skills.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_certificate-activity-7258523018329493505-HjXB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/tn-skills.png"
  },
  {
    id: 15,
    title: "Runner-Up - Intra-college GK Quiz",
    organization: "Chennai Institute of Technology",
    date: "Feb 2024",
    description: "Secured runner-up position in a general knowledge quiz competition held at the college level.",
    linkedInPost: "https://www.linkedin.com/posts/arunpranavat_won-prize-quiz-activity-7257076518256877568-QB0w?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYQaHYBcELnKkTGGyekbUdJr2u1TDjpK4k",
    imageUrl: "/achievements/gk-quiz.png"
  },
  {
    id: 16,
    title: "Third Prize - World Space Week Quiz Competition",
    organization: "ISRO - Indian Space Research Organization",
    date: "Oct 2020",
    description: "Secured third position in the national-level quiz competition conducted as part of World Space Week celebrations."
  }
];

const AchievementsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const filteredAchievements = achievementsData
    .filter(achievement => 
      (selectedFilter === "all" || 
       (selectedFilter === "hackathons" && achievement.title.toLowerCase().includes("hackathon")) ||
       (selectedFilter === "competitions" && (
         achievement.title.toLowerCase().includes("competition") || 
         achievement.title.toLowerCase().includes("challenge") || 
         achievement.title.toLowerCase().includes("contest") ||
         achievement.title.toLowerCase().includes("quiz") ||
         achievement.title.toLowerCase().includes("gladiators") ||
         achievement.title.toLowerCase().includes("olympiad") ||
         achievement.title.toLowerCase().includes("merit") ||
         achievement.title.toLowerCase().includes("prize")
       )) ||
       (selectedFilter === "coding" && (
         achievement.title.toLowerCase().includes("leetcode") ||
         achievement.title.toLowerCase().includes("codechef") ||
         achievement.title.toLowerCase().includes("codeforces") ||
         achievement.title.toLowerCase().includes("hackerrank") ||
         achievement.title.toLowerCase().includes("python")
       ))
      ) && (
        achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-20 sm:mt-40 mb-10 sm:mb-20 px-4 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop(0)}
        custom={0}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 sm:mb-4 space-title">
          Achievements & Accolades
        </h2>
        <p className="text-sm sm:text-base text-gray-400 text-center max-w-[700px] mb-6 sm:mb-8">
          Recognitions that mark milestones in my journey of innovation and problem-solving.
        </p>
        
        {/* Search and Filter Bar */}
        <div className="w-full max-w-[800px] flex flex-col gap-3 mb-6 sm:mb-8">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/40 border border-purple-500/30 rounded-lg py-2 sm:py-3 pl-10 pr-4 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3 sm:px-4 py-2 rounded-lg transition-all whitespace-nowrap text-sm ${
                selectedFilter === "all"
                  ? "bg-purple-700 text-white"
                  : "bg-black/40 border border-purple-500/30 text-gray-300 hover:bg-purple-900/30"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedFilter("hackathons")}
              className={`px-3 sm:px-4 py-2 rounded-lg transition-all whitespace-nowrap text-sm ${
                selectedFilter === "hackathons"
                  ? "bg-purple-700 text-white"
                  : "bg-black/40 border border-purple-500/30 text-gray-300 hover:bg-purple-900/30"
              }`}
            >
              Hackathons
            </button>
            <button
              onClick={() => setSelectedFilter("competitions")}
              className={`px-3 sm:px-4 py-2 rounded-lg transition-all whitespace-nowrap text-sm ${
                selectedFilter === "competitions"
                  ? "bg-purple-700 text-white"
                  : "bg-black/40 border border-purple-500/30 text-gray-300 hover:bg-purple-900/30"
              }`}
            >
              Competitions
            </button>
            <button
              onClick={() => setSelectedFilter("coding")}
              className={`px-3 sm:px-4 py-2 rounded-lg transition-all whitespace-nowrap text-sm ${
                selectedFilter === "coding"
                  ? "bg-purple-700 text-white"
                  : "bg-black/40 border border-purple-500/30 text-gray-300 hover:bg-purple-900/30"
              }`}
            >
              Coding Profiles
            </button>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center gap-4 sm:gap-8 max-w-4xl mx-auto">
        {filteredAchievements.length > 0 ? (
          filteredAchievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              title={achievement.title}
              organization={achievement.organization}
              date={achievement.date}
              description={achievement.description}
              delay={index * 0.1}
              linkedInPost={achievement.linkedInPost}
              imageUrl={achievement.imageUrl}
            />
          ))
        ) : (
          <div className="text-gray-400 text-center py-8">
            No achievements found matching your search.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AchievementsPage;