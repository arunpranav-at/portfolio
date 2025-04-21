"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";

interface CertificationCardProps {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
  issuerUrl: string;
  delay: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  title, 
  issuer, 
  issueDate, 
  credentialId, 
  skills,
  issuerUrl, 
  delay 
}) => {
  return (
    <motion.div
      variants={slideInFromTop}
      custom={delay}
      initial="hidden"
      animate="visible"
      className="w-full md:w-[1000px] lg:w-[1200px] p-6 bg-black/30 backdrop-blur-md rounded-lg border border-[#7042f81f] hover:border-[#7042f8] transition-all duration-300 cosmic-glow"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex items-center gap-3">
          <DocumentCheckIcon className="h-8 w-8 text-purple-500" />
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <a 
              href={issuerUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:underline"
            >
              {issuer}
            </a>
          </div>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <p className="text-gray-400">{issueDate}</p>
          {credentialId && <p className="text-gray-400 text-sm">ID: {credentialId}</p>}
        </div>
      </div>
      
      {skills.length > 0 && (
        <div className="mt-3">
          <p className="text-gray-400 mb-2">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const CertificationsComponent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-40 mb-20 px-4 md:px-8 lg:px-12 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop}
        custom={0}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 space-title">
          Licenses & Certifications
        </h2>
        <p className="text-gray-400 text-center max-w-[900px]">
          I consistently pursue learning opportunities to expand my knowledge and skillset. Below are certifications I've earned across different technology domains and competitions.
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-6">
        {/* Technical Certifications - Most Recent First */}
        <CertificationCard
          title="Cloud Computing - NPTEL"
          issuer="Indian Institute of Technology, Kharagpur"
          issuerUrl="https://www.iitkgp.ac.in/"
          issueDate="April 2024"
          credentialId="NPTEL24CS17S453407291"
          skills={["Python", "Cloud Computing"]}
          delay={0.1}
        />

        <CertificationCard
          title="Fundamental AI Concepts"
          issuer="Microsoft"
          issuerUrl="https://www.microsoft.com/"
          issueDate="January 2024"
          skills={["Pandas", "Algorithms", "OpenCV", "Python"]}
          delay={0.15}
        />

        <CertificationCard
          title="Fundamentals of Machine Learning"
          issuer="Microsoft"
          issuerUrl="https://www.microsoft.com/"
          issueDate="January 2024"
          skills={["Pandas", "Algorithms", "OpenCV", "Python"]}
          delay={0.2}
        />

        <CertificationCard
          title="Introduction to Machine Learning"
          issuer="Microsoft"
          issuerUrl="https://www.microsoft.com/"
          issueDate="January 2024"
          skills={["Pandas", "Algorithms", "OpenCV", "Python"]}
          delay={0.25}
        />

        <CertificationCard
          title="Microsoft Azure AI Fundamentals: AI Overview"
          issuer="Microsoft"
          issuerUrl="https://www.microsoft.com/"
          issueDate="January 2024"
          skills={["Pandas", "Algorithms", "OpenCV", "Python"]}
          delay={0.3}
        />

        <CertificationCard
          title="Ethical Hacking - NPTEL"
          issuer="Indian Institute of Technology, Kharagpur"
          issuerUrl="https://www.iitkgp.ac.in/"
          issueDate="November 2023"
          credentialId="NPTEL23CS75S103351565"
          skills={["Algorithms", "Linux", "Python"]}
          delay={0.35}
        />

        <CertificationCard
          title="Introduction to Generative AI"
          issuer="Google"
          issuerUrl="https://www.google.com/"
          issueDate="November 2023"
          credentialId="6352125"
          skills={["Pandas", "Algorithms", "OpenCV", "Python"]}
          delay={0.4}
        />

        <CertificationCard
          title="Certificate of Completion AI For India 2.0"
          issuer="GUVI Geek Networks, IITM Research Park"
          issuerUrl="https://www.guvi.in/"
          issueDate="August 2023"
          credentialId="9p3C613210600B9jHO"
          skills={["OpenCV"]}
          delay={0.5}
        />

        {/* Digital Defenders CTF Certifications */}
        <CertificationCard
          title="Digital Defenders CTF 2023 - Network Attacks and Defence"
          issuer="CySecK"
          issuerUrl="https://cs-coe.iisc.ac.in/"
          issueDate="July 2023"
          skills={["Cybersecurity", "Network Security"]}
          delay={0.55}
        />

        <CertificationCard
          title="Digital Defenders CTF 2023 - Web Security and Penetration Testing"
          issuer="CySecK"
          issuerUrl="https://cs-coe.iisc.ac.in/"
          issueDate="July 2023"
          skills={["Web Security", "Penetration Testing"]}
          delay={0.6}
        />

        <CertificationCard
          title="Digital Defenders CTF 2023 - Network Analysis and Tools"
          issuer="CySecK"
          issuerUrl="https://cs-coe.iisc.ac.in/"
          issueDate="July 2023"
          skills={["Network Analysis"]}
          delay={0.65}
        />

        <CertificationCard
          title="Certificate of Appreciation - Codekaze Round 2"
          issuer="Coding Ninjas"
          issuerUrl="https://www.codingninjas.com/"
          issueDate="June 2023"
          credentialId="295355"
          skills={["Problem Solving", "Algorithms"]}
          delay={0.7}
        />

        <CertificationCard
          title="Introduction to Packet Tracer"
          issuer="Cisco Networking Academy"
          issuerUrl="https://www.netacad.com/"
          issueDate="June 2023"
          skills={["Linux", "Networking"]}
          delay={0.75}
        />

        <CertificationCard
          title="Introduction to Networks"
          issuer="Cisco Networking Academy"
          issuerUrl="https://www.netacad.com/"
          issueDate="May 2023"
          skills={["Linux", "Networking"]}
          delay={0.8}
        />

        <CertificationCard
          title="Cybersecurity Essentials"
          issuer="Cisco Networking Academy"
          issuerUrl="https://www.netacad.com/"
          issueDate="February 2023"
          skills={["Linux", "Cybersecurity"]}
          delay={0.9}
        />

        <CertificationCard
          title="Introduction to Cybersecurity"
          issuer="Cisco Networking Academy"
          issuerUrl="https://www.netacad.com/"
          issueDate="January 2023"
          skills={["Linux", "Cybersecurity"]}
          delay={0.95}
        />
      </div>
    </motion.div>
  );
};

export default CertificationsComponent;