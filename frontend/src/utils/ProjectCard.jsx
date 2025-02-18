import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaExternalLinkAlt, FaVideo } from "react-icons/fa";

export default function ProjectCard({ project, openModal }) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex flex-row items-center w-full h-[300px] overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg cursor-pointer
        ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => openModal(project)}
    >
      {/* Left Column - Project Info */}
      <div className="flex-1 space-y-3 z-10 py-8 px-6 h-full relative">
        {/* Project Logo & Title */}
        <div className="flex items-center space-x-3">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg 
              ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-300 text-black"}`}
          >
            {project.title.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold">{project.title}</h2>
        </div>

        {/* Project Description */}
        <p className="text-gray-400">{project.description}</p>
      </div>

      {/* Right Column - Half Hidden Image */}
      <div className="relative w-1/2 top-10 overflow-hidden rounded-l-xl">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover rounded-tl-xl rounded-bl-xl scale-110 transition-all duration-500 
            ${isHovered ? "brightness-50" : ""}`}
        />

        {/* Overlay Hover Effect */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-500">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black opacity-80 text-white p-3 rounded-lg hover:scale-110 transition-all"
            >
              <FaExternalLinkAlt size={22} />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black opacity-80 text-white p-3 rounded-lg hover:scale-110 transition-all"
            >
              <FaGithub size={22} />
            </a>

            {project.videoLink && (
              <a
                href={project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black opacity-40 text-white p-3 rounded-lg hover:scale-110 transition-all"
              >
                <FaVideo size={22} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
