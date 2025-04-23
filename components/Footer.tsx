"use client";

import React from "react";
import { RxInstagramLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="w-full bg-black bg-opacity-90 text-gray-200 shadow-lg p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: Copyright */}
        <div className="text-sm text-center md:text-left">
          With ❤️ by Arun Pranav A T
        </div>

        {/* Right Side: Social Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a
            href="https://www.linkedin.com/in/arunpranavat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <RxLinkedinLogo size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          
          <a
            href="https://www.instagram.com/arunpranavat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-400 transition-colors"
            aria-label="Instagram"
          >
            <RxInstagramLogo size={18} />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          
          <a
            href="mailto:pranav9176@gmail.com"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
            aria-label="Email"
          >
            <HiOutlineMail size={18} />
            <span className="hidden sm:inline">Email</span>
          </a>
          
          <a
            href="https://www.github.com/arunpranav-at"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            aria-label="GitHub"
          >
            <RxGithubLogo size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;