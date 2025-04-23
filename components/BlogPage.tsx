"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { FiSearch } from "react-icons/fi";

// Define types for blog items
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  
  const blogs: BlogPost[] = [
    {
        id: 1,
        title: "Worldly Treason",
        description: "The story of a scientist who lost his grand-daughter in a future dystopian world",
        image: "/blog-images/worldlytreason.jpeg",
        date: "April 15, 2024",
        readTime: "5 min read",
        slug: "worldlytreason"
    },
    {
        id: 2,
        title: "The City of Three Rivers",
        description: "An article about the concerning condition of the rivers in the city of Chennai",
        image: "/blog-images/thecityofthreerivers.jpeg",
        date: "August 24, 2023",
        readTime: "5 min read",
        slug: "thecityofthreerivers"
      },
  ];

  // Filter blogs based on search term
  useEffect(() => {
    const results = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(results);
  }, [searchTerm]);

  // Initialize filtered blogs with all blogs
  useEffect(() => {
    setFilteredBlogs(blogs);
  }, []);

  // Open blog in new tab when clicked
  const handleBlogClick = (slug: string): void => {
    window.open(`/blogs/${slug}`, '_blank');
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

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop(0)}
          className="flex flex-col items-center justify-center text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            My Blogs, Articles and Stories
          </h1>
          <p className="text-gray-400 text-center max-w-[700px] text-lg">
            Explore a collection of insightful articles and stories that delve into various topics, from technology to lifestyle. 
            Discover new perspectives and ideas that inspire and inform.
          </p>
        </motion.div>

        {/* Search Bar - Improved visibility */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop(0)}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-200 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-4 pl-12 pr-4 bg-gray-900 backdrop-blur-md border border-purple-500/30 rounded-full text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300"
            />
          </div>
          {searchTerm && (
            <p className="text-gray-400 mt-2 text-center">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? 'result' : 'results'} found for "{searchTerm}"
            </p>
          )}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial="hidden"
              animate="visible"
              variants={index % 3 === 0 ? slideInFromLeft((index % 3) * 0.1) : 
                       index % 3 === 1 ? slideInFromTop((index % 3) * 0.1) : 
                       slideInFromRight((index % 3) * 0.1)}
              className="group cursor-pointer"
              onClick={() => handleBlogClick(blog.slug)}
            >
              <div className="h-full rounded-2xl bg-gray-900/70 backdrop-blur-md border border-[#7042f81f] overflow-hidden hover:border-[#7042f8] transition-all duration-300">
                {/* Blog Image - Fixed placeholder with gradient fallback */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div> 
                    <div className="relative aspect-square overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                    <div className="h-full w-full group-hover:scale-105 transition-transform duration-500">
                        {/* Gradient fallback is now only shown when image fails to load */}
                        <img 
                        src={blog.image}
                        alt={blog.title}
                        className="h-full w-full object-cover object-center"
                        onError={(e) => {
                            // If the image fails to load, show the gradient fallback
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23252A37'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='18' fill='%238B5CF6'%3ETailwind CSS Blog%3C/text%3E%3C/svg%3E";
                            
                            // Add gradient overlay when image fails
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                            const gradientDiv = document.createElement('div');
                            gradientDiv.className = 'absolute inset-0 bg-gradient-to-br from-purple-700 to-blue-600 opacity-80';
                            parent.prepend(gradientDiv);
                            }
                        }}
                        />
                    </div>
                    </div>
                </div>
                
                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-purple-400">{blog.date}</span>
                    <span className="text-xs text-cyan-400">{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-400 line-clamp-3">
                    {blog.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <span className="text-purple-500 text-sm font-medium group-hover:text-purple-400 transition-colors duration-300 flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromTop(0)}
            className="text-center py-16"
          >
            <div className="h-24 w-24 mx-auto mb-6 rounded-full bg-gray-900 border border-[#7042f81f] flex items-center justify-center">
              <svg className="h-12 w-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              We couldn't find any articles matching your search. Try different keywords or browse all articles.
            </p>
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-300"
            >
              View All Articles
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;