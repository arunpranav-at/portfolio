"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { RxInstagramLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      id: 1,
      icon: <MdOutlineMarkEmailUnread className="h-8 w-8 text-purple-400" />,
      title: "Email",
      value: "pranav9176@gmail.com",
      link: "mailto:pranav9176@gmail.com",
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
      link: "mailto:pranav9176@gmail.com",
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
            <a
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
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
              </motion.div>
            </a>
          ))}
        </motion.div>

        {/* Contact Form and Social Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.3)}
            className="lg:col-span-2 rounded-2xl bg-black/40 backdrop-blur-md border border-[#7042f81f] overflow-hidden p-8"
          >
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-black/60 border border-[#7042f84f] text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-black/60 border border-[#7042f84f] text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black/60 border border-[#7042f84f] text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg bg-black/60 border border-[#7042f84f] text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your message here..."
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center space-x-2 w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium text-center transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <IoSendSharp className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-400/20 border border-green-500 text-green-300 rounded-lg text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </div>
            </form>
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
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
      
      {/* Custom CSS for twinkling stars */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
  );
};

export default ContactPage;