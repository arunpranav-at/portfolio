// app/page.tsx
"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const starsRef = useRef<HTMLDivElement>(null);
  const galaxyRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const cometsRef = useRef<HTMLDivElement>(null);
  
  // Generate stars for the dynamic starfield
  useEffect(() => {
    // Set mounted state to handle client-side only code
    setIsMounted(true);
    
    // Get initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Create stars dynamically with different colors and sizes
    if (starsRef.current) {
      const starsContainer = starsRef.current;
      starsContainer.innerHTML = '';
      
      const starColors = [
        '#ffffff', // white
        '#fffae5', // warm white
        '#e6f7ff', // blue tint
        '#f9e9ff', // purple tint
        '#ffebf3'  // pink tint
      ];
      
      for (let i = 0; i < 300; i++) {
        const star = document.createElement('div');
        star.className = 'absolute rounded-full';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size - bigger range for more variety
        const size = Math.random() * 4;
        
        // Random opacity for twinkling effect
        const opacity = 0.2 + Math.random() * 0.8;
        
        // Random color
        const colorIndex = Math.floor(Math.random() * starColors.length);
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = opacity.toString();
        star.style.backgroundColor = starColors[colorIndex];
        
        // Random animation delay and duration for twinkling
        const animDuration = 2 + Math.random() * 8;
        star.style.animation = `twinkle ${animDuration}s infinite ease-in-out`;
        star.style.animationDelay = `${Math.random() * animDuration}s`;
        
        // Add occasional glow to brighter stars
        if (size > 2.5) {
          star.style.boxShadow = `0 0 ${Math.floor(size * 2)}px ${starColors[colorIndex]}`;
        }
        
        starsContainer.appendChild(star);
      }
    }
    
    // Create galaxy spiral animation
    if (galaxyRef.current) {
      const galaxyContainer = galaxyRef.current;
      galaxyContainer.innerHTML = '';
      
      // Create spiral arms
      for (let i = 0; i < 3; i++) {
        const arm = document.createElement('div');
        const rotationDeg = i * 120;
        
        arm.className = 'absolute w-full h-full';
        arm.style.transform = `rotate(${rotationDeg}deg)`;
        
        // Create dust particles along the arm
        for (let j = 0; j < 40; j++) {
          const dust = document.createElement('div');
          const distance = 10 + (j * 2); // increasing distance from center
          const theta = j * 0.15; // spiral angle
          
          // Calculate position on spiral
          const x = 50 + distance * Math.cos(theta);
          const y = 50 + distance * Math.sin(theta);
          
          // Random size
          const size = 1 + Math.random() * 4;
          
          dust.className = 'absolute rounded-full';
          dust.style.left = `${x}%`;
          dust.style.top = `${y}%`;
          dust.style.width = `${size}px`;
          dust.style.height = `${size}px`;
          dust.style.backgroundColor = j % 3 === 0 ? '#f472b6' : '#c084fc';
          dust.style.opacity = (0.3 + Math.random() * 0.7).toString();
          dust.style.filter = 'blur(1px)';
          
          // Animation for the galaxy rotation
          dust.style.animation = 'spiral 120s infinite linear';
          
          arm.appendChild(dust);
        }
        
        galaxyContainer.appendChild(arm);
      }
    }
    
    // Create comets that shoot across the screen
    if (cometsRef.current) {
      const createComet = () => {
        if (!cometsRef.current) return;
        
        const comet = document.createElement('div');
        
        // Random starting position along the top or left edges
        const startFromTop = Math.random() > 0.5;
        const positionPercent = Math.random() * 100;
        
        const startX = startFromTop ? positionPercent : 0;
        const startY = startFromTop ? 0 : positionPercent;
        
        // Random length for the comet
        const cometLength = 30 + Math.random() * 100;
        
        comet.className = 'absolute';
        comet.style.left = `${startX}%`;
        comet.style.top = `${startY}%`;
        comet.style.width = `${cometLength}px`;
        comet.style.height = '2px';
        comet.style.background = 'linear-gradient(to right, transparent, rgba(191, 219, 254, 0.3) 30%, rgba(147, 197, 253, 0.8) 70%, rgba(59, 130, 246, 0.9) 85%, rgba(96, 165, 250, 1))';
        comet.style.borderRadius = '50px';
        comet.style.transform = startFromTop 
          ? `rotate(${45 + Math.random() * 45}deg)` 
          : `rotate(${-10 - Math.random() * 35}deg)`;
        
        // Add a glowing head to the comet
        const cometHead = document.createElement('div');
        cometHead.className = 'absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-300';
        cometHead.style.boxShadow = '0 0 8px 2px rgba(147, 197, 253, 0.8)';
        
        comet.appendChild(cometHead);
        cometsRef.current.appendChild(comet);
        
        // Animate comet movement
        const distance = startFromTop 
          ? Math.max(window.innerWidth, window.innerHeight) * 1.5
          : Math.max(window.innerWidth, window.innerHeight) * 1.5;
        
        const duration = 1 + Math.random() * 2; // seconds
        
        // Calculate end position based on rotation angle
        const angle = startFromTop 
          ? (45 + Math.random() * 45) * Math.PI / 180
          : (-10 - Math.random() * 35) * Math.PI / 180;
        
        const endX = startX + distance * Math.cos(angle);
        const endY = startY + distance * Math.sin(angle);
        
        // Animate with keyframes
        comet.animate([
          { opacity: 0, left: `${startX}%`, top: `${startY}%` },
          { opacity: 1, left: `${startX + 5}%`, top: `${startY + 5}%` },
          { opacity: 1, left: `${endX - 5}%`, top: `${endY - 5}%` },
          { opacity: 0, left: `${endX}%`, top: `${endY}%` }
        ], {
          duration: duration * 1000,
          easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        }).onfinish = () => {
          if (cometsRef.current && comet.parentNode === cometsRef.current) {
            cometsRef.current.removeChild(comet);
          }
        };
      };
      
      // Create comets at random intervals
      const cometInterval = setInterval(() => {
        createComet();
      }, 2000);
      
      // Initial comet burst
      for (let i = 0; i < 3; i++) {
        setTimeout(createComet, i * 500);
      }
      
      return () => clearInterval(cometInterval);
    }
  }, []);
  
  // Handle mouse movement for parallax effects
  useEffect(() => {
    if (!isMounted) return;
    
    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Window resize handler
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMounted]);
  
  // Calculate parallax effects only when component is mounted (client-side)
  const getParallaxStyle = (factor: number) => {
    if (!isMounted) return {};
    
    const offsetX = (mousePosition.x - windowSize.width/2) / factor;
    const offsetY = (mousePosition.y - windowSize.height/2) / factor;
    
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`
    };
  };
  
  const getPlanetParallaxStyle = () => {
    if (!isMounted) return {
      top: '15%',
      right: '10%',
      boxShadow: 'inset -20px -20px 50px rgba(0,0,0,0.5)'
    };
    
    const offsetX = (mousePosition.x - windowSize.width/2) / 30;
    const offsetY = (mousePosition.y - windowSize.height/2) / 30;
    
    return {
      top: '15%',
      right: '10%',
      transform: `translate(${offsetX}px, ${offsetY}px)`,
      boxShadow: 'inset -20px -20px 50px rgba(0,0,0,0.5)'
    };
  };
  
  const getSatelliteStyle = () => {
    if (!isMounted) return {
      top: '25%',
      right: '25%'
    }
    
    const baseAngle = Date.now() / 4000;
    const centerX = windowSize.width * 0.85;
    const centerY = windowSize.height * 0.15;
    const radius = 80;
    
    const offsetX = Math.cos(baseAngle) * radius;
    const offsetY = Math.sin(baseAngle) * radius;
    
    const parallaxX = (mousePosition.x - windowSize.width/2) / 60;
    const parallaxY = (mousePosition.y - windowSize.height/2) / 60;
    
    return {
      position: 'absolute' as const,
      left: `calc(85% + ${offsetX + parallaxX}px)`,
      top: `calc(15% + ${offsetY + parallaxY}px)`,
      transform: 'translate(-50%, -50%)'
    } as React.CSSProperties;
  };

  const getAstronautStyle = () => {
    if (!isMounted) return {
      bottom: '20%',
      left: '15%'
    };
    
    const offsetX = (mousePosition.x - windowSize.width/2) / -20;
    const offsetY = (mousePosition.y - windowSize.height/2) / -20;
    const floatY = Math.sin(Date.now() / 1000) * 15;
    const rotation = Math.sin(Date.now() / 2000) * 10;
    
    return {
      bottom: '20%',
      left: '15%',
      transform: `translate(${offsetX}px, ${offsetY + floatY}px) rotate(${rotation}deg)`
    };
  };
  
  // Interactive navigation menu items
  const navItems = [
    { path: '/projects', name: 'Projects', color: 'from-blue-500 to-cyan-400' },
    { path: '/skills', name: 'Skills', color: 'from-indigo-500 to-purple-400' },
    { path: '/experience', name: 'Experience', color: 'from-purple-500 to-pink-400' },
    { path: '/education', name: 'Education', color: 'from-pink-500 to-red-400' },
    { path: '/achievements', name: 'Achievements', color: 'from-amber-500 to-yellow-400' },
    { path: '/certifications', name: 'Certifications', color: 'from-emerald-500 to-green-400' },
    { path: '/blogs', name: 'Blogs', color: 'from-blue-500 to-sky-400' },
    { path: '/codingprofiles', name: 'Coding Profiles', color: 'from-indigo-500 to-blue-400' },
    { path: '/volunteering', name: 'Volunteering', color: 'from-rose-500 to-pink-400' },
    { path: '/extracurricular', name: 'Extracurricular', color: 'from-teal-500 to-emerald-400' },
  ];
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* Deep space background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/30 to-black z-0"></div>
      
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 z-0"></div>
      
      {/* Galaxy effect - a slowly rotating spiral */}
      <div ref={galaxyRef} className="absolute inset-0 z-0 opacity-30 galaxy-container"></div>
      
      {/* Distant nebula clouds */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-500/40 blur-3xl pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-500/30 blur-3xl pulse-slow" 
               style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-purple-500/40 blur-3xl pulse-slow"
               style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl pulse-slow"
               style={{animationDelay: '3s'}}></div>
        </div>
      </div>
      
      {/* Shooting comets container */}
      <div ref={cometsRef} className="absolute inset-0 z-10 pointer-events-none"></div>
      
      {/* Glowing cosmic dust particles */}
      <div className="cosmic-dust absolute inset-0 z-10 opacity-40 pointer-events-none"></div>
      
      {/* Main planet with atmosphere and rings */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 overflow-hidden z-10"
        style={getPlanetParallaxStyle()}
      >
        {/* Planet atmosphere glow */}
        <div className="absolute -inset-4 rounded-full bg-blue-500/10 blur-xl"></div>
        
        {/* Planet surface details */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-8 rounded-full bg-blue-400/30 blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-12 rounded-full bg-blue-300/20 blur-sm"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-10 rounded-full bg-blue-200/20 blur-sm"></div>
          
          {/* Continent-like shapes */}
          <div className="absolute top-1/3 left-1/3 w-20 h-10 bg-emerald-700/30 blur-sm"
               style={{borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-12 bg-emerald-700/20 blur-sm"
               style={{borderRadius: '30% 70% 40% 60% / 60% 30% 70% 40%'}}></div>
        </div>
        
        {/* Planet shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent"></div>
        
        {/* Planet rings */}
        <div className="absolute top-1/2 left-1/2 w-96 h-24 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent rounded-full -rotate-20 -z-10 transform-gpu"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-16 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rounded-full -rotate-20 -z-10 transform-gpu"></div>
      </div>
      
      {/* Orbiting satellite/moon */}
      <div 
        className="w-8 h-8 rounded-full bg-gray-300 z-20 shadow-lg"
        style={getSatelliteStyle()}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-400 to-white rounded-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full bg-gray-500"></div>
        </div>
      </div>
      
      {/* Floating astronaut with better details */}
      <div 
        className="absolute w-24 h-36 z-20"
        style={getAstronautStyle()}
      >
        {/* Spacesuit */}
        <div className="relative">
          {/* Helmet */}
          <div className="w-16 h-16 bg-gradient-to-b from-gray-100 to-gray-300 rounded-full relative shadow-lg">
            {/* Helmet visor */}
            <div className="absolute w-10 h-10 bg-gradient-to-br from-blue-400/80 to-blue-600/80 rounded-full top-3 left-3 overflow-hidden">
              {/* Face suggestion */}
              <div className="absolute top-5 left-3 w-4 h-1 bg-white/30 rounded-full"></div>
            </div>
            
            {/* Helmet light */}
            <div className="absolute top-1 right-4 w-2 h-2 bg-yellow-300 rounded-full">
              <div className="absolute inset-0 animate-pulse bg-yellow-200 rounded-full blur"></div>
            </div>
          </div>
          
          {/* Spacesuit body */}
          <div className="w-20 h-24 bg-gradient-to-b from-gray-300 to-gray-400 rounded-xl mt-1 relative">
            {/* Chest panel with lights */}
            <div className="absolute top-2 left-5 w-10 h-6 bg-gray-600 rounded">
              <div className="grid grid-cols-3 gap-1 p-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Arms */}
            <div className="absolute top-4 -left-2 w-6 h-14 bg-gray-400 rounded-full transform -rotate-15"></div>
            <div className="absolute top-4 -right-2 w-6 h-14 bg-gray-400 rounded-full transform rotate-15"></div>
            
            {/* Backpack */}
            <div className="absolute top-2 w-12 h-16 bg-gray-500 rounded -z-10 left-4"></div>
            
            {/* Legs */}
            <div className="absolute -bottom-4 left-3 w-6 h-10 bg-gray-400 rounded-full transform rotate-10"></div>
            <div className="absolute -bottom-4 right-3 w-6 h-10 bg-gray-400 rounded-full transform -rotate-10"></div>
          </div>
          
          {/* Space tether/cord floating effect */}
          <div className="absolute top-3 left-10 h-40 w-1 bg-gradient-to-b from-gray-300 to-transparent rounded"
               style={{transform: 'rotate(-5deg)'}}></div>
        </div>
        
        {/* Subtle glow effect around astronaut */}
        <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-xl rounded-full scale-150"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 mb-6 tracking-tighter"
          >
            COSMIC DEV
          </motion.h1>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative w-40 h-1 mx-auto mb-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent cosmic-line"></div>
          </motion.div>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Welcome to my universe of code. Exploring new frontiers in web development
            and crafting stellar digital experiences.
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-4xl mx-auto mb-12"
          >
            {navItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={item.path}>
                  <motion.div 
                    className={`p-5 rounded-lg backdrop-blur-md border border-white/10 cursor-pointer overflow-hidden relative group`}
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {/* Background gradient that changes on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Border glow on hover */}
                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-lg`}></div>
                    </div>
                    
                    {/* Inner content */}
                    <p className="text-blue-50 font-medium relative z-10">{item.name}</p>
                    
                    {/* Particle effect on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                      <div className="absolute bottom-2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-3 left-3/4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.1s'}}></div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link href="/resume">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-lg hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-purple-500/20 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">View Resume</span>
                
                {/* Button animation effects */}
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-transform duration-300 ease-out"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-out"></div>
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Add global styles directly in the component */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes spiral {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes cosmic-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float-dust {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
        }
        
        .cosmic-line {
          animation: cosmic-line 2s infinite;
        }
        
.pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        
        .galaxy-container {
          transform-origin: center;
          animation: spiral 240s infinite linear;
        }
        
        .cosmic-dust {
          position: relative;
        }
        
        .cosmic-dust::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 30px 30px;
          animation: float-dust 15s infinite ease-in-out;
        }
        
        .space-grid {
          perspective: 1000px;
        }
        
        .space-grid > div {
          transform-style: preserve-3d;
        }
        
        /* Rotate animation */
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Glow animation */
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(147, 197, 253, 0.6)); }
          50% { filter: drop-shadow(0 0 15px rgba(147, 197, 253, 0.8)); }
        }
        
        /* Float animation for astronaut */
        @keyframes float-astronaut {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        /* For screen readers */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
      
      {/* Optional social links */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 right-6 flex space-x-4 z-40"
      >
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" 
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
          <span className="sr-only">GitHub</span>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
          <span className="sr-only">LinkedIn</span>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
          <span className="sr-only">Twitter</span>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      </motion.div>
      
      {/* Accessibility controls */}
      <div className="sr-only">
        <a href="#main-content" className="focus:not-sr-only focus:absolute focus:p-4 focus:bg-purple-900 focus:text-white focus:z-50">
          Skip to main content
        </a>
      </div>
      
      {/* Mobile optimizations & responsive adjustments */}
      <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-blue-100 font-medium"
        >
          Explore
        </motion.button>
      </div>
    </main>
  );
}