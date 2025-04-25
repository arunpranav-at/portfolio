"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-20 sm:mt-20 mb-10 sm:mb-20 w-full z-[20]"
    >
      <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-16">
        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 sm:mb-4 space-title"
        >
          Technical Expertise
        </motion.h2>
        
        <motion.p
          variants={slideInFromRight(0.5)}
          className="text-sm sm:text-base text-gray-400 text-center max-w-[700px] mx-auto"
        >
          A comprehensive toolkit of programming languages, frameworks, and technologies that I have mastered throughout my journey.
        </motion.p>
      </div>
    </motion.div>
  )
}

export default SkillText