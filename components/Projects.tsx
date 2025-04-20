import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-start relative overflow-hidden min-h-screen pb-20" id="projects">
      
      {/* Top Hero Video Section with gradient overlay */}
      <div className="relative w-full h-[300px] mb-10">
        <video
          autoPlay
          muted
          loop
          className="absolute h-full w-full left-0 object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        
        {/* Gradient overlay to blend with star background */}
        <div className="absolute bottom-0 left-0 w-full h-40 video-stars-gradient"></div>
      </div>

      {/* Title with space styling */}
      <div className="mb-16 z-10">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center space-title">
          My Projects
        </h1>
      </div>

      {/* Project Cards Grid - Reduced side margins and increased max width */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-5 w-full max-w-[95%] mx-auto z-10">
      <ProjectCard
          src="/projectscreenshots/faith.png"
          title="FAITH"
          description="FAITH : Framework for AI Integrity and Testing Hallucinations. 🪷 FAITH is an Azure AI based web application which is used to find hallucinations and ensure integrity among various AI models and LLMs along with confident scores, complete reasoning, detailed analytics and visualizations by comparing with external knowledge sources."
          techStack={["Azure App Service", "OpenAI", "Bing Search", "Azure SDK", "Azure AI", "Cosmos DB", "Next.js", "TailwindCSS", "Python", "FastAPI"]}
          achievements={["Won 3rd prize in Microsoft Innovation Challenge December Edition 2024 with a cash prize of $2500"]}
          githubUrl="https://github.com/arunpranav-at/FAITH"
        />
        <ProjectCard
          src="/projectscreenshots/donationstation.png"
          title="The Do-Nation Station"
          description="The Do-Nation Station is a centralized platform designed to facilitate transparent donations to orphanages, NGOs, hospitals, foundations, and old age homes. It aims to simplify the donation process, ensuring that donors can easily find and support organizations based on specific needs, locations, and urgency. The platform also provides detailed information and utilization reports to donors, enhancing transparency and trust."
          techStack={["Next.js", "Appwrite", "TailwindCSS", "Material UI", "Google Maps API", "React.js", "Figma"]}
          achievements={["Finalist project in Hack4Change hackathon at Charcha2024", "Scored 100% on Best Practices, 95% on Performance, 82% on SEO in Lighthouse"]}
          githubUrl="https://github.com/arunpranav-at/The-Do-Nation-Station"
        />
        <ProjectCard
          src="/projectscreenshots/kspdatathon.png"
          title="Predictive Crime Analytics and Visualization System"
          description="Predictive Crime Analytics and Visualization System for Karnataka State, a cutting-edge initiative aimed at revolutionizing crime prevention. By harnessing advanced data analytics and visualization techniques, our project offers deep insights into historical crime trends and forecasts future occurrences."
          techStack={["Python", "Tensorflow", "Timeseries", "Streamlit", "Plotly", "Pandas", "Numpy", "Seaborn", "Geopy"]}
          achievements={["Offers deep insights into historical crime trends and categorizes crime with average response time of 1.5 seconds", "Visualizes crime data geospatially to get hotspot areas"]}
          githubUrl="https://github.com/arunpranav-at/kspdatathon"
        />
        <ProjectCard
          src="/projectscreenshots/atap.png"
          title="ATAP"
          description="ATAP - Animation Tool for Adorable Preschoolers 🥰 simple, fun, and easy-to-use 2D animation program designed specifically for young kids. With an intuitive interface, minimal complexity, and essential animation tools, ATAP allows children to create frame-by-frame animations effortlessly!"
          techStack={["Python", "PyQt5"]}
          achievements={["Designed and developed within a span of 3 days", "Adjust brush sizes, play animations, undo changes, and even save unfinished projects to continue later"]}
          githubUrl="https://github.com/arunpranav-at/atap"
        />
        <ProjectCard
          src="/projectscreenshots/harmfulcontentdetection.png"
          title="Harmful Content Detection"
          description="A comprehensive platform which detects harmful contents of different formats (texts, images, audio, video, URLs) in various languages including English, Tamil, Tanglish, etc."
          techStack={["XLM-RoBERTa tranformers", "Google BERT", "Python", "Streamlit", "PyTorch"]}
          achievements={["Won 2nd prize in She Innovates hackathon conducted by Google Developer Groups, WTM on International Women's Day 2024"]}
          githubUrl="https://github.com/arunpranav-at/Harmful_Content_Detection"
        />
        <ProjectCard
          src="/projectscreenshots/veritrueai.png"
          title="Veritrue AI"
          description="A comprehensive platform named Veritrue.ai which takes in various input formats like video, image, audio and predicts whether it is a deepfake or a real one."
          techStack={["Python", "Gradio", "MTCNN", "Resnet", "Librosa", "Jupyter Notebook"]}
          achievements={["Secured 4th place In Cyberhackathon 3.0 conducted by Greater Chennai Police, SRMIST", "Developed within a time period of 18 hours"]}
          githubUrl="https://github.com/arunpranav-at/Veritrue.ai_by_TrioBoys"
        />
        <ProjectCard
          src="/projectscreenshots/pact.png"
          title="PACT"
          description="PACT (Prompt Auto-Correction and Testing) is an advanced system that auto-corrects, sanitizes user inputs, and tests and compares statistics before sending them to the AI. A golden gateway to improve prompt-engineering skills of the users."
          techStack={["Azure App Service", "OpenAI", "Azure AI", "Cosmos DB", "Next.js", "TailwindCSS", "Python", "FastAPI"]}
          achievements={["Submitted to Microsoft Innovation Challenge March Edition 2025", "Used Azure products extensively to build a scalable and reliable system"]}
          githubUrl="https://github.com/arunpranav-at/PACT"
        />
        <ProjectCard
          src="/projectscreenshots/aura.png"
          title="AURA AI"
          description="AURA is an Azure AI-based web application designed to detect hallucinations and ensure integrity across various AI models and LLMs. It provides confidence scores, complete reasoning, detailed analytics along with bias, violence, sexual and self harm, and visualizations by comparing outputs with external knowledge sources."
          techStack={["Azure App Service", "Bing Search", "Azure AI", "Cosmos DB", "Next.js", "TailwindCSS", "FastAPI"]}
          achievements={["AURA features a RAG (Retrieval-Augmented Generation) capability, enabling users to upload their own knowledge bases"]}
          githubUrl="https://github.com/arunpranav-at/aura.ai"
        />
        <ProjectCard
          src="/projectscreenshots/gtcd.png"
          title="GTCD"
          description="GTCD : Googol Test Cheating Detector is an AI-powered monitoring system designed to ensure academic integrity during online exams and interviews. It combines Computer Vision and AI/ML technologies to monitor test-takers in real-time, detecting cheating attempts."
          techStack={["Python", "Gemini AI", "Google IDX"]}
          achievements={["Submitted for Google Solutions Challenge 2025", "Developed within a time period of one week", "This project leverages several Google technologies to enhance functionality and development like Google Gemini AI, Google IDX, etc."]}
          githubUrl="https://github.com/arunpranav-at/GTCD"
        />
        <ProjectCard
          src="/projectscreenshots/querygenie.png"
          title="QueryGenie"
          description="QueryGenie : An advanced tool which converts Natural Language Prompts to SQL queries and manages the usage based on token counts and cost incurred along with detailed analytics. Executive Challenge - Chat with your data token utilization and cost monitoring challenge"
          techStack={["PostgreSQL", "Python", "OpenAI", "Streamlit"]}
          achievements={["Submitted to Microsoft Innovation Challenge October Edition 2024", "Used Azure products extensively to build this project"]}
          githubUrl="https://github.com/arunpranav-at/QueryGenie"
        />
        <ProjectCard
          src="/projectscreenshots/avvaiaichatbot.png"
          title="Avvai AI Voice Bot"
          description="The Voice Assistant Program is a Python application that utilizes the OpenAI API, speech recognition, and text-to-speech capabilities to create a simple voice-controlled assistant. This program allows you to have a text-based conversation with an AI assistant using voice input and output. The assistant can respond to your voice commands, answer questions, and engage in natural language conversations."
          techStack={["speech_recognition", "pyttsx3", "tkinter"]}
          achievements={["Top 7 among 200+ participants in the CIT intracollege hackathon 2023"]}
          githubUrl="https://github.com/arunpranav-at/avvaiaiintegratedvoicebot"
        />
        <ProjectCard
          src="/projectscreenshots/firedetection.png"
          title="Fire Prevention with Arduino"
          description="The Arduino-based Smoke Identification Device project represents a significant achievement in the realm of fire safety and smoke detection technology. By leveraging the power of Arduino microcontrollers and specialized sensors, we have developed a reliable and cost-effective solution for early smoke detection."
          techStack={["Arduino C", "Smoke Sensor MQ2", "Buzzer", "LCD Display"]}
          achievements={["100% detection rate in lab tests", "Submitted to the Embedded Programming Practical Project at CIT"]}
          githubUrl="https://github.com/arunpranav-at/smoke-detection-and-fire-prevention-using-arduino"
        />
        <ProjectCard
          src="/projectscreenshots/spocal.png"
          title="Spocal Quiz Assistant"
          description="Speech recognition quiz software. This will first get user details in form of voice, display questions and get answers in form of voice, analyse it and check the correctness, finally it displays the score. This was done during my first semester when I was new to programming. This taught me basics of object oriented programming and GUI development."
          techStack={["Python", "SpeechRecognition", "Tkinter"]}
          achievements={["Top project in CIT-COS (Carnival of Science) for the year of 2023", "Developed in a span of 2 days"]}
          githubUrl="https://github.com/arunpranav-at/SpocalQuizAssistantUsingVoice"
        />
        <ProjectCard
          src="/projectscreenshots/psoc.png"
          title="PSoC"
          description="PSoC (Platform for Season of Commits) is a simplified libre platform, primarily designed for managing and organizing FOSS contribution programs such as Season of Commits by FOSS United, enabling seamless interaction between organizations and contributors, fostering FOSS contributions and growth of community."
          techStack={["Frappe framework", "Vue.js", "Frappe UI", "TailwindCSS"]}
          achievements={["Submitted to FOSSHack Hackathon 2025", "Used Frappe framework extensively to build this project"]}
          githubUrl="https://github.com/arunpranav-at/psoc"
        />
        <ProjectCard
          src="/projectscreenshots/storyforge.png"
          title="StoryForge"
          description="StoryForge is a client-side desktop application that leverages Intel® AI PC's cutting-edge architecture and technologies which works offline to support novelists and writers by helping them with: Analyzing the story for tone, emotion, structure, genres, etc.,"
          techStack={["Next.js", "Rust", "TailwindCSS", "FastAPI", "Intel® OpenVINO™ Toolkit"]}
          achievements={["Submitted to Intel® AI PC Hackathon 2024", "Used Intel® OpenVINO™ Toolkit extensively to build this project"]}
          githubUrl="https://github.com/arunpranav-at/storyforge"
        />
        <ProjectCard
          src="/projectscreenshots/tailbitesnakegame.png"
          title="Tail Bite Snake Game"
          description="It is a small python based nokia style snake game made with the help of pygame module. It is made in order to bring in nostalgic memory of childhood period of playing nokia games."
          techStack={["Pygame", "Python"]}
          achievements={["Done when I was in 11th standard back in my school days"]}  
          githubUrl="https://github.com/arunpranav-at/The-Tail-Bite-Snakegame"
        />
      </div>
    </div>
  );
};

export default Projects;