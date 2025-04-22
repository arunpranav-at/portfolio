"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const GalleryPage = () => {
  
  type GalleryItem = { id: number; image: string };

  const originalGalleryItems: GalleryItem[] = [];

  for (let i = 1; i <= 46; i++) {
    originalGalleryItems.push({
      id: i,
      image: `/gallery/${i}.jpeg`
    });
  }  

  // Function to shuffle the array using Fisher-Yates algorithm
  const shuffleArray = (array: GalleryItem[]): GalleryItem[] => {
    const shuffledArray: GalleryItem[] = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  // State management
  // Removed duplicate declaration of filteredItems
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  
  // Shuffle the gallery items on initial render
  useEffect(() => {
    setFilteredItems(shuffleArray(originalGalleryItems));
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

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

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="flex flex-col items-center justify-center text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Pranav's Visual Verse
          </h1>
          <p className="text-gray-400 text-center max-w-[700px] text-lg">
            A curated collection of colors, moments, and ideas, captured and crafted through my lens and imagination.
          </p>
        </motion.div>

        {/* Focused Item View - Simplified */}
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-8"
            onClick={() => setActiveItem(null)}
          >
            <div 
              className="max-w-4xl w-full mx-auto bg-black/70 border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl"
              style={{ maxHeight: '80vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image container */}
              <div className="relative bg-black flex items-center justify-center p-4">
                <img 
                  src={activeItem.image} 
                  alt="Gallery image" 
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center z-10"
                >
                  ✕
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Nebula View - Dynamic flowing grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="flex flex-wrap justify-center">
            {filteredItems.map((item) => {
              // Calculate dynamic sizes
              const size = 100 + Math.random() * 100; // Variable sizing between 100-200px
              
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    zIndex: 10,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                  }}
                  className="m-4 cursor-pointer relative"
                  style={{ 
                    width: size, 
                    height: size,
                    transform: `rotate(${Math.random() * 5 - 2.5}deg)`
                  }}
                  onClick={() => setActiveItem(item)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-full h-full overflow-hidden rounded-lg bg-black/60 border border-[#7042f81f] hover:border-purple-500 transition-all duration-300">
                    <img 
                      src={item.image} 
                      alt="Gallery image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;