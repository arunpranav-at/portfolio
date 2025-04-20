import React from "react";
import { RxInstagramLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="w-full bg-black bg-opacity-80 text-gray-200 shadow-lg p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Copyright */}
        <div className="text-[14px] text-center md:text-left mb-2 md:mb-0">
          With ❤️ by Arun Pranav A T
        </div>

        {/* Right Side: Social Links */}
        <div className="flex flex-row space-x-6">
          <a
            href="https://www.linkedin.com/in/arunpranavat"
            className="flex items-center space-x-2 hover:text-blue-400 transition"
          >
            <RxLinkedinLogo size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/arunpranavat"
            className="flex items-center space-x-2 hover:text-pink-400 transition"
          >
            <RxInstagramLogo size={20} />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:pranav9176@gmail.com"
            className="flex items-center space-x-2 hover:text-green-400 transition"
          >
            <HiOutlineMail size={20} />
            <span>Email</span>
          </a>
          <a
            href="https://www.github.com/arunpranav-at"
            className="flex items-center space-x-2 hover:text-green-400 transition"
          >
            <RxGithubLogo size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
