"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { RxInstagramLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const ContactPage = () => {
  const contactMethods = [
    {
      id: 1,
      icon: <MdOutlineMarkEmailUnread className="h-8 w-8 text-purple-400" />,
      title: "Email",
      value: "pranav9176@gmail.com",
      color: "from-purple-500 to-cyan-500",
    }
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <RxLinkedinLogo className="h-8 w-8" />,
      name: "LinkedIn",
      username: "@arunpranavat",
      link: "https://www.linkedin.com/in/arunpranavat",
      color: "bg-[#0077B5]",
      hoverColor: "hover:bg-[#005885]",
    },
    {
      id: 2,
      icon: <RxGithubLogo className="h-8 w-8" />,
      name: "GitHub",
      username: "@arunpranav-at",
      link: "https://www.github.com/arunpranav-at",
      color: "bg-[#333]",
      hoverColor: "hover:bg-[#222]",
    },
    {
      id: 3,
      icon: <RxInstagramLogo className="h-8 w-8" />,
      name: "Instagram",
      username: "@arunpranavat",
      link: "https://www.instagram.com/arunpranavat",
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
      hoverColor: "hover:opacity-90",
    },
    {
      id: 4,
      icon: <HiOutlineMail className="h-8 w-8" />,
      name: "Email",
      username: "pranav9176@gmail.com",
      link: "#",
      color: "bg-[#EA4335]",
      hoverColor: "hover:bg-[#D33426]",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 rounded-full bg-purple-600/10 blur-3xl top-20 -left-48"></div>
        <div className="absolute h-96 w-96 rounded-full bg-blue-600/10 blur-3xl bottom-40 right-20"></div>
        <div className="absolute h-64 w-64 rounded-full bg-cyan-600/10 blur-3xl top-1/2 left-1/3"></div>
        
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

      <div className="max-w-7xl mx-auto px-4 py-32 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="flex flex-col items-center justify-center text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-center max-w-[700px] text-lg">
            Have a question or want to collaborate? Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="grid grid-cols-1 gap-8 mb-16"
        >
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="group"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft(0.3)}
                className="h-full rounded-2xl bg-black/40 backdrop-blur-md border border-[#7042f81f] overflow-hidden hover:border-[#7042f8] transition-all duration-300 p-6 flex flex-col items-center justify-center text-center relative"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-10`}></div>
                </div>
                
                {/* Icon Circle */}
                <div className="h-20 w-20 rounded-full bg-black/50 border border-[#7042f81f] flex items-center justify-center mb-4 group-hover:border-purple-500 transition-all duration-300">
                  {method.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-purple-300">{method.value}</p>
                <p className="text-gray-400 mt-2">Please copy this email address and send your message directly from your preferred email client.</p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Contact Info and Social Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.3)}
            className="lg:col-span-2 rounded-2xl bg-black/40 backdrop-blur-md border border-[#7042f81f] overflow-hidden p-8"
          >
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-black/60 border border-[#7042f84f]">
                <h3 className="text-xl font-bold text-purple-400 mb-4">How to Contact Me</h3>
                <p className="text-gray-300 mb-4">
                  You can send me an email at the address below:
                </p>
                <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-purple-300 font-mono">pranav9176@gmail.com</span>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText("pranav9176@gmail.com");
                      alert("Email copied to clipboard!");
                    }}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition-colors duration-300"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-gray-400 mt-4">
                  When sending an email, please include:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                  <li>Your name</li>
                  <li>A detailed description of your inquiry or project</li>
                  <li>Any relevant timeline information</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg bg-black/60 border border-[#7042f84f]">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Response Time</h3>
                <p className="text-gray-300">
                  I typically respond to emails within 24-48 hours. For urgent matters, please mention Urgent in the subject line.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Social Profiles */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.3)}
            className="rounded-2xl bg-black/40 backdrop-blur-md border border-[#7042f81f] overflow-hidden p-8"
          >
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              Connect with Me
            </h2>
            
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.id !== 4 ? social.link : "#"} 
                  onClick={social.id === 4 ? (e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText("pranav9176@gmail.com");
                    alert("Email copied to clipboard!");
                  } : undefined}
                  target={social.id !== 4 ? "_blank" : undefined}
                  rel={social.id !== 4 ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 rounded-lg ${social.color} ${social.hoverColor} transition-all duration-300`}
                >
                  <div className="bg-white/10 rounded-full p-2">
                    {social.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold">{social.name}</span>
                    <span className="text-white/80 text-sm">{social.username}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;