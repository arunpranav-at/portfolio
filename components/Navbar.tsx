'use client';

import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { href: "/", text: "About me" },
    { href: "/skills", text: "Skills" },
    { href: "/projects", text: "Projects" },
    { href: "/experience", text: "Experience" },
    { href: "/achievements", text: "Achievements" },
    { href: "/education", text: "Education" },
    { href: "/cpprofiles", text: "CP Profiles" },
    { href: "/blogs", text: "Blogs" },
    {
      href: "https://www.buymeacoffee.com/arunpranavat",
      text: "Support me",
      external: true,
    },
    {
      href: "https://flowcv.com/resume/jbipw77gh3",
      text: "Resume",
      external: true,
    },
    { href: "/gallery", text: "Gallery" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      {/* Combined Header for both mobile and desktop */}
      <div className="h-[50px] flex items-center justify-between">
        {/* Mobile menu button (hidden on desktop) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex w-full justify-center">
          <div className="flex items-center gap-4 md:gap-6 border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200 text-sm md:text-base">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="cursor-pointer whitespace-nowrap px-1 text-gray-200" // Removed hover effect
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-[50px] left-0 right-0 bg-[#0300145e] shadow-lg overflow-y-auto max-h-[calc(100vh-50px)]">
          <div className="flex flex-col space-y-2 px-4 py-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-4 py-2 rounded-md text-gray-200" // Removed hover effect
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;