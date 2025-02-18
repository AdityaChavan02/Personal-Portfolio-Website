import React, { useState } from "react";
import Modal from "react-modal";
import ProjectCard from "../utils/ProjectCard";
import { useTheme } from "next-themes";

// Assets Import
import ThreadingImg from "../assets/Images/backgrounnightmode.jpg";
import TurningImg from "../assets/Images/backgrounnightmode.jpg";
import FixturesImg from "../assets/Images/backgrounnightmode.jpg";



// Set up Modal styles
Modal.setAppElement("#root");

export default function Projects() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Threading Component",
      image: ThreadingImg,
      description:
        "This product is built to elevate your productivity and simplify complex tasks with innovative features.",
      projectLink: "https://www.example.com/threading",
      github: "https://github.com/example/threading",
      videoLink: "https://www.youtube.com/example",
    },
    {
      id: 2,
      title: "Turning Component",
      image: TurningImg,
      description:
        "A high-performance product designed for durability, reliability, and unmatched performance.",
      projectLink: "https://www.example.com/turning",
      github: "https://github.com/example/turning",
    },
    {
      id: 3,
      title: "Fixture Component",
      image: FixturesImg,
      description:
        "Engineered for excellence, this product delivers exceptional results and user satisfaction.",
      projectLink: "https://www.example.com/fixtures",
      github: "https://github.com/example/fixtures",
    },
  ];

  // Open Modal with Selected Project
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col w-full px-2 py-8 space-y-8">
      {/* Title */}
      <div className="text-center space-y-4">
              <h2 className={`text-4xl font-mono font-bold flex items-center mb-12 transition-all duration-300 ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}>
          <span className={theme === "dark" ? "text-cyan-400" : "text-blue-500"}>{`</`}</span>
          <span className={theme === "dark" ? "text-white" : "text-black"}>PROJECTS</span>
          <span className={theme === "dark" ? "text-pink-400" : "text-red-500"}>{`>`}</span>
          <span
            className={`flex-1 ml-2 h-[2px] transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 to-pink-400"
                : "bg-gradient-to-r from-blue-500 to-red-500"
            }`}
          ></span>
        </h2>

      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} openModal={openModal} />
        ))}
      </div>

      {/* Modal - Popup for Project Details */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="bg-white dark:bg-gray-900 p-3 max-w-5xl w-4/5 h-3/5 mx-auto rounded-lg shadow-xl focus:outline-none transition-all duration-300 transform scale-100"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-red-500 transition"
          onClick={closeModal}
        >
          &times;
        </button>

        {selectedProject && (
          <div className="flex flex-col md:flex-row gap-6 h-full">
            {/* Left Side - Project Image */}
            <div className="w-full md:w-1/2">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Side - Project Details */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                {selectedProject.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{selectedProject.description}</p>
              <a
                href={selectedProject.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                View Full Project
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
