import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  techStack?: string[];
  achievements?: string[];
  githubUrl?: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  techStack,
  achievements,
  githubUrl,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#11002b] project-card-hover transition transform hover:-translate-y-1 hover:shadow-purple-500/30">
      {/* Image Section */}
      <div className="project-image-container">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {title}
        </h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Tech Stack */}
        {techStack && (
          <div className="mt-3">
            <h2 className="text-white font-medium">Tech Stack:</h2>
            <ul className="list-disc list-inside text-sm text-gray-400">
              {techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements */}
        {achievements && (
          <div className="mt-3">
            <h2 className="text-white font-medium">Achievements:</h2>
            <ul className="list-disc list-inside text-sm text-gray-400">
              {achievements.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* GitHub Button */}
        {githubUrl && (
          <div className="mt-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border border-purple-500 rounded-lg transition duration-300 hover:bg-purple-700 hover:border-purple-600"
            >
              {/* GitHub Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.3-1.68-1.3-1.68-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.4-1.27.72-1.56-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.5.12-3.12 0 0 .98-.31 3.2 1.18.94-.26 1.96-.39 2.97-.39 1.01 0 2.03.13 2.97.39 2.21-1.49 3.19-1.18 3.19-1.18.64 1.62.24 2.82.12 3.12.75.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.64.41.35.77 1.04.77 2.1v3.12c0 .31.21.68.8.56A10.502 10.502 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
