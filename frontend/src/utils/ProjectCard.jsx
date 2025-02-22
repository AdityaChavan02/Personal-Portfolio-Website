import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaExternalLinkAlt, FaVideo, FaLinkedin } from "react-icons/fa";

export default function ProjectCard({ project, openModal }) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center w-full h-[300px] overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg cursor-pointer
        ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => openModal(project)}
    >
      {/* Left Column - Project Info */}
      <div className="flex-1 space-y-3 z-10 py-8 px-6 h-full relative">
        {/* Project Logo & Title */}
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-bold">{project.title}</h2>
        </div>

        {/* Project Description */}
        <p className="text-gray-400">{project.subtitle}</p>
      </div>

      {/* Right Column - Project Image */}
      <div className="relative w-1/2 h-full overflow-hidden top-16 position-bottom rounded-l-xl">
        <img
          src={project.images[0]}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 
            ${isHovered ? "brightness-50 scale-105" : ""}`}
        />

        {/* Overlay Hover Icons */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-500">
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black opacity-80 text-white p-3 rounded-lg hover:scale-110 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
            {project.GitHubLink && (
            <a
              href={project.GitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black opacity-80 text-white p-3 rounded-lg hover:scale-110 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={18} />
            </a>
            )}
            {project.LinkedInLink && (
              <a
                href={project.LinkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black opacity-80 text-white p-3 rounded-lg hover:scale-110 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <FaLinkedin size={18} color="white" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
