"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ChennaiRiversArticle = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  
  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopyMessage(true);
    setTimeout(() => {
      setShowCopyMessage(false);
    }, 2000);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute h-96 w-96 rounded-full bg-blue-600/20 blur-3xl top-20 -left-48"></div>
          <div className="absolute h-96 w-96 rounded-full bg-cyan-600/20 blur-3xl bottom-40 right-20"></div>
          <div className="absolute h-64 w-64 rounded-full bg-teal-600/20 blur-3xl top-1/2 left-1/3"></div>
          
          {/* Stars */}
          <div className="stars absolute inset-0">
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
                }}
              />
            ))}
          </div>

          {/* Futuristic Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,150,199,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,150,199,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <motion.h1 
              variants={slideUp}
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300">
                THE CITY OF THREE RIVERS
              </span>
            </motion.h1>
            
            <motion.div variants={slideUp} className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                A historical perspective of Chennai's rivers and an urgent call to action.
              </p>
              
              <div className="flex justify-center space-x-6">
                <button 
                  onClick={scrollToContent}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-700 hover:to-blue-600 text-white font-medium transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Read Article</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="relative">
                  <button 
                    onClick={copyToClipboard}
                    className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-900/20 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Share</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                  
                  {/* Copy confirmation tooltip */}
                  {showCopyMessage && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-cyan-900 text-white px-4 py-2 rounded-md text-sm">
                      URL copied to clipboard!
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Down Arrow */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>

      {/* Rivers Visual Section - Modified for better layout */}
      <div className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 lg:px-12 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coovam River Card - Modified to 1:1 aspect ratio and visible tagline */}
            <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
              <div className="bg-gradient-to-b from-amber-50 to-amber-100 relative p-4">
                <h3 className="text-center font-bold text-3xl text-gray-800">Coovam</h3>
                <p className="text-center text-lg text-gray-600 mb-4">Central River</p>
                <div className="relative aspect-square mb-4">
                  <Image 
                    src="/blogs/thecityofthreerivers/oldcoovum.png" 
                    alt="Coovam River - Historical View" 
                    fill
                    className="object-cover rounded-lg" 
                  />
                </div>
                <div className="text-gray-800 text-center font-medium p-2 bg-amber-100/70 rounded-lg">
                  Once celebrated in Tamil literature as purer than Manasarovar Lake
                </div>
              </div>
            </div>

            {/* Adyar River Card - Modified to 1:1 aspect ratio and visible tagline */}
            <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
              <div className="bg-gradient-to-b from-teal-50 to-teal-100 relative p-4">
                <h3 className="text-center font-bold text-3xl text-gray-800">Adyar</h3>
                <p className="text-center text-lg text-gray-600 mb-4">Southern River</p>
                <div className="relative aspect-square mb-4">
                  <Image 
                    src="/blogs/thecityofthreerivers/coovum.jpg" 
                    alt="Adyar River - Historical View" 
                    fill
                    className="object-cover rounded-lg" 
                  />
                </div>
                <div className="text-gray-800 text-center font-medium p-2 bg-teal-100/70 rounded-lg">
                  Southern waterway carrying toxic chemicals, with fish survival of only 3 hours
                </div>
              </div>
            </div>

            {/* Kosasthalai River Card - Modified to 1:1 aspect ratio and visible tagline */}
            <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 relative p-4">
                <h3 className="text-center font-bold text-3xl text-gray-800">Kosasthalai</h3>
                <p className="text-center text-lg text-gray-600 mb-4">Northern River</p>
                <div className="relative aspect-square mb-4">
                  <Image 
                    src="/blogs/thecityofthreerivers/kosasthalaiyar.jpg" 
                    alt="Kosasthalai River - Industrial View" 
                    fill
                    className="object-cover rounded-lg" 
                  />
                </div>
                <div className="text-gray-800 text-center font-medium p-2 bg-blue-100/70 rounded-lg">
                  Comparatively healthier but affected by industrial effluents and encroachment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content Section - Made wider */}
      <div ref={contentRef} className="min-h-screen relative pt-16 pb-32">
        {/* Background Elements For Article Section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute h-96 w-96 rounded-full bg-blue-600/10 blur-3xl -top-48 right-20"></div>
          <div className="absolute h-64 w-64 rounded-full bg-cyan-600/10 blur-3xl bottom-40 left-1/4"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-12 xl:px-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-5xl mx-auto bg-black/60 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              The City of Three Rivers
            </h2>
            
            <p className="text-cyan-300 mb-12 text-lg italic">
              "The earth, the air, the land and the water are not an inheritance from our fore fathers but on loan from our children. So we have to hand over to them at least as it has been handed over to us." - Mahatma Gandhi
            </p>
            
            <div className="prose prose-xl prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-8">
                We used to say that the city of Delhi is situated on the banks of river Yamuna. The city of Kolkata is situated on the banks of river Hoogly. Mysuru on Kaveri, Varanasi on Ganga, Madurai on Vaigai and so on. What would you say when you are questioned, "On which river bank, the city of Chennai is located?" Then we all won't answer in a same way. It is because; Chennai is situated on the banks of three rivers – Coovam river, Adyar river, and Kosasthalai river. To say in simpler words, we can answer it as "Chennai is situated on the banks of three sewers". Yes the condition of those rivers is so bad.
              </p>
              
              <p className="text-xl leading-relaxed mb-8">
                First lets have a brief description about those three rivers. All these three river are originated outside the district of Chennai and reaches Bay of Bengal by forming its mouth at Chennai. The river Kosasthalai flows at the northern part of the city, while river Coovam at centre and river Adyar at the southern part. There is also an important man made channel named Buckingham Canal which connects all three rivers. There are several minor channels, ponds and small lakes which are connected between the Buckingham Canal and the three rivers. But all these are now completely polluted and made useless. This made the people of Chennai depend on the groundwater and the lakes in the neighbouring districts.
              </p>

              <div className="mb-12 bg-cyan-900/20 p-6 rounded-xl border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">State of the Rivers: Alarming Facts</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>A survey of fish species in Coovam found 49 species in 1949, which dwindled to 21 in 1979 and zero by the end of the last millennium.</li>
                  <li>Two third of the total sewage generated by the city is just let into the river untreated.</li>
                  <li>According to Greater Chennai Municipal Corporation, the Metrowater supplies 830 million litres of water per day and thus the sewage treatment plant has the capacity to treat 550 million litres of sewage daily. But the fact is that total sewage generated in the city is about 1800 million litres for a day.</li>
                  <li>Fishes were able to survive in the sample taken from the Adyar and Coovam river just for 3 hours even after dilution.</li>
                  <li>Both the rivers contains heavy traces of harmful metals like copper, zinc, and pesticides like endosulphan and lindane in it.</li>
                  <li>These rivers contain no dissolved oxygen and the river is already dead.</li>
                </ul>
              </div>
              
              <p className="text-xl leading-relaxed mb-8">
                In April 2020, we saw an incident - lot of toxic bubbles araised in the Marina Beach which is the second longest beach in the world and the fame of Chennai. Then the researchers found that it was due to the sudden release of high amount of toxic chemicals released by the industries in Adyar river. But then, the media didn't give attention towards this issue and no actions were taken.
              </p>
              
              <p className="text-xl leading-relaxed mb-8">
                Public Works Department sources said that the government agencies like Greater Chennai Municipal Corporation, business units and retail outlets on the banks of the river were responsible for the pollution. Another fact says that 60 percent of the total sewage generated is let untreated into Buckingham Canal and rest is shared by the Coovam and Adyar rivers. The Kosasthalai which runs in the northern part is comparitatively good, but is also affected due to the industrial effluents and the encroachments.
              </p>
              
              <div className="mb-12 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">The Cultural & Historical Significance</h3>
                <p className="text-gray-300 mb-4">
                  The readers must pay attention to the upcoming paragraph. The Kasi Viswanath Temple is closely related with river Ganga. The Madurai Kal Alaghar Temple is closely realted with river Vaigai. Similarly ancient temples like Thiruverkadu Shiva Temple, Koyambedu Shiva Temple, and Veerabathraswami Temple are closely related with river Coovam.
                </p>
                <p className="text-gray-300">
                  In ancient Tamil literatures, the Tamil poets had praised the river Coovam as the one which is purer than Manasarovar lake. The river Coovam was onced called as the way of salvation. Taking a dip in Coovam river provides you with moksha and considered powerful than the river Ganga and Saraswathi. These rivers were once a waterway too. Three rivers along with the Buckingham Cannal was a perfect means of water transportation in the British period. The Duke of Buckingham ordered the construction of the Bukingham Canal linking all these three rivers in 1876 for agricultural and transporational purposes. But all their work went in vain.
                </p>
              </div>
              
              <p className="text-xl leading-relaxed mb-8">
                The Tamilnadu State Government have spent about a total of 1832 crores rupees in cleaning these rivers and canals of Chennai. But this money is merely wasted and was made no use.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 p-6 rounded-xl border border-cyan-500/20 mb-12">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">A British Poet's Perspective</h3>
                <p className="text-gray-300 italic mb-2">The British poet V.H. Shipley describes the Coovam river in 1928 as follows:</p>
                <blockquote className="pl-4 border-l-4 border-cyan-500 italic text-cyan-200">
                  "Of dirt and smell your sources awake…<br/>
                  And near the sea where one would think it forms a cesspit,<br/>
                  Was cleaner by the bridge, adjoining Marina.<br/>
                  Oh sterile stream!<br/>
                  Oh fragrant flood<br/>
                  Oh green and enticing river!"
                </blockquote>
              </div>

              <div className="flex justify-center my-10">
                <div className="inline-flex items-center justify-center space-x-4">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                  <span className="text-cyan-400 font-bold">Then & Now</span>
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/10 p-6 rounded-xl border border-cyan-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-cyan-300 mb-4">Then</h3>
                    <p className="text-gray-300">
                      Celebrated in literature, culturally significant, transportation routes, clean water systems
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-900/30 to-orange-900/10 p-6 rounded-xl border border-red-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-red-300 mb-4">Now</h3>
                    <p className="text-gray-300">
                      Polluted sewers, toxic waste carriers, zero fish population, health hazards, wasted resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interactive Elements */}
            <div className="mt-16 flex flex-wrap gap-4">            
              <div className="relative">
                <button 
                  onClick={copyToClipboard}
                  className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-900/20 transition-all duration-300 flex items-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  <span>Share</span>
                </button>
                
                {/* Copy confirmation tooltip */}
                {showCopyMessage && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-cyan-900 text-white px-4 py-2 rounded-md text-sm">
                    URL copied to clipboard!
                  </div>
                )}
              </div>
            </div>
            
            {/* Author Info */}
            <div className="mt-16 flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold">
                AP
              </div>
              <div>
                <div className="font-bold text-lg">Arun Pranav A T</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChennaiRiversArticle;