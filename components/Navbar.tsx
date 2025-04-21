import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center gap-6 border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
          <a href="/" className="cursor-pointer">
            About me
          </a>
          <a href="/skills" className="cursor-pointer">
            Skills
          </a>
          <a href="/projects" className="cursor-pointer">
            Projects
          </a>
          <a href="/experience" className="cursor-pointer">
            Experience
          </a>
          <a href="/achievements" className="cursor-pointer">
            Achievements
          </a>
          <a href="/education" className="cursor-pointer">
            Education
          </a>
          <a href="#projects" className="cursor-pointer">
            CP Profiles
          </a>
          <a href="#projects" className="cursor-pointer">
            Volunteering
          </a>
          <a href="#projects" className="cursor-pointer">
            Blogs
          </a>
          <a href="/certifications" className="cursor-pointer">
            Certifications
          </a>
          <a href="#projects" className="cursor-pointer">
            Extra curricular
          </a>
          <a href="https://flowcv.com/resume/jbipw77gh3" className="cursor-pointer">
            Resume
          </a>
          <a href="#projects" className="cursor-pointer">
            Gallery
          </a>
          <a href="#projects" className="cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;