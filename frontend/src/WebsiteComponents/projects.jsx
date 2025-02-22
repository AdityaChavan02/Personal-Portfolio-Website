import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ProjectCard from "../utils/ProjectCard";
import { useTheme } from "next-themes";
//Contracto Pictures
import Contracto1 from "../assets/Images/ProjectImages/TheContractoAI/homepage.png";
import Contracto2 from "../assets/Images/ProjectImages/TheContractoAI/SignIn.png";
import Contracto3 from "../assets/Images/ProjectImages/TheContractoAI/1.png";
import Contracto4 from "../assets/Images/ProjectImages/TheContractoAI/2.png";
import Contracto5 from "../assets/Images/ProjectImages/TheContractoAI/3.png";
import Contracto6 from "../assets/Images/ProjectImages/TheContractoAI/4.png";

//ARC Pictures
import Arc1 from "../assets/Images/ProjectImages/ARC/1.png";
import Arc2 from "../assets/Images/ProjectImages/ARC/3.png";

// Egleis Pictures
import Egleis1 from "../assets/Images/ProjectImages/Egleis/1.jpeg";

// Msafe Solutions
import Msafe1 from "../assets/Images/ProjectImages/MSAFESolutions/1.png";
import Msafe2 from "../assets/Images/ProjectImages/MSAFESolutions/2.png";
import Msafe3 from "../assets/Images/ProjectImages/MSAFESolutions/3.png";
import Msafe4 from "../assets/Images/ProjectImages/MSAFESolutions/4.png";
import Msafe5 from "../assets/Images/ProjectImages/MSAFESolutions/5.png";
import Msafe6 from "../assets/Images/ProjectImages/MSAFESolutions/6.png";

//This Website
import ThisWebsite1 from "../assets/Images/ProjectImages/ThisWebsite/1.png";
import ThisWebsite2 from "../assets/Images/ProjectImages/ThisWebsite/2.png";
import ThisWebsite3 from "../assets/Images/ProjectImages/ThisWebsite/3.png";

//Dissertation
import Dissertation1 from "../assets/Images/ProjectImages/Dissertation/1.png";
import Dissertation2 from "../assets/Images/ProjectImages/Dissertation/2.png";
import Dissertation3 from "../assets/Images/ProjectImages/Dissertation/3.png";
import Dissertation4 from "../assets/Images/ProjectImages/Dissertation/4.png";
import Dissertation5 from "../assets/Images/ProjectImages/Dissertation/5.png";

// Set up Modal styles
Modal.setAppElement("#root");

export default function Projects() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "The Contracto AI",
      images: [Contracto1, Contracto2, Contracto3, Contracto4, Contracto5, Contracto6],
      subtitle: "Developed an interactive UI with engaging animations using React.js and Tailwind.",
      description: [
        "• Interactive UI increased average user time on site from 40s to 3min.",
        "• Implemented responsive design with Tailwind.",
        "• Improved site speed using React optimizations.",
      ],
      projectLink: "https://areacontrol.thecontracto.com/",
      LinkedInLink: "https://www.linkedin.com/company/contracto-ai-technology-inc/posts/?feedView=all",
    },
    {
      id: 2,
      title: "Smart MSafe",
      images: [Msafe1, Msafe2, Msafe3, Msafe4, Msafe5, Msafe6],
      subtitle: "Optimized user workflows with React.js and responsive layouts.",
      description: [
        "• Created smooth animations with Framer Motion.",
        "• Integrated custom hooks for state management.",
        "• Enhanced UX through dynamic components.",
      ],
      LinkedInLink: "https://www.linkedin.com/showcase/msafesolutions/posts/?feedView=all",
      projectLink: "https://smartmsafe.com/",
    },
    {
      id: 3,
      title: "ARC Enterprises",
      images: [Arc1, Arc2],
      subtitle: "Built responsive layouts with React.js and Tailwind.",
      description: [
        "• Reduced bounce rate by improving navigation.",
        "• Streamlined component structure for scalability.",
        "• Added customizable features using React props.",
      ],
      projectLink: "https://arc-enterprises-8920f.web.app/",
      GitHubLink: "https://github.com/AdityaChavan02/ARCEnterprises",
    },
    {
      id: 4,
      title: "Egleis Technologies",
      images: [ Egleis1 ],
      subtitle: "Built responsive layouts with React.js and Tailwind.",
      description: [
        "• Reduced bounce rate by improving navigation.",
        "• Streamlined component structure for scalability.",
        "• Added customizable features using React props.",
      ],
      projectLink: "https://egleis.com/",
      LinkedInLink: "https://www.linkedin.com/company/egleis-technologies-gmbh/",
    },
    {
      id: 5,
      title: "Portfolio Website",
      images: [ThisWebsite1, ThisWebsite2, ThisWebsite3 ],
      subtitle: "Built responsive layouts with React.js and Tailwind.",
      description: [
        "• Reduced bounce rate by improving navigation.",
        "• Streamlined component structure for scalability.",
        "• Added customizable features using React props.",
      ],
      projectLink: "https://adityarchavanweb.web.app/",
      GitHubLink: "https://github.com/AdityaChavan02/Personal-Portfolio-Website",
      LinkedInLink: "https://www.linkedin.com/in/aditya-chavan-641172186/",
    },
    {
      id: 6,
      title: "Digital Payment Adoption & Financial Inclusion in G20 during Covid",
      images: [Dissertation1, Dissertation2, Dissertation3, Dissertation4, Dissertation5 ],
      subtitle: "Built responsive layouts with React.js and Tailwind.",
      description: [
        "• Reduced bounce rate by improving navigation.",
        "• Streamlined component structure for scalability.",
        "• Added customizable features using React props.",
      ],
      projectLink: "/dissertation.pdf",
    },
  ];

  // Open Modal with Selected Project
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsFullscreen(false);
  };

  // Auto image slideshow
  useEffect(() => {
    if (isModalOpen && selectedProject) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isModalOpen, selectedProject]);

  return (
    <div className="flex flex-col w-full px-2 py-2 space-y-8">
      {/* Title */}
      <div className="text-center space-y-4">
        <h2 className={`text-4xl font-mono font-bold flex items-center mb-5 transition-all duration-300 ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}>
          <span className={theme === "dark" ? "text-teal" : "text-teal"}>{`</`}</span>
          <span className={theme === "dark" ? "text-white" : "text-black"}>PROJECTS</span>
          <span className={theme === "dark" ? "text-teal" : "text-teal"}>{`>`}</span>
          <span className={`flex-1 ml-4 h-[3px] transition-all duration-300 ${
            theme === "dark" ? "bg-gradient-to-r from-teal to-transparent" : "bg-gradient-to-r from-teal to-transparent"
          }`}></span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} openModal={openModal} />
        ))}
      </div>

      {/* Modal - Project Details */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="bg-transparent backdrop-blur-xl dark:bg-transparent dark:backdrop-blur-lg p-2 max-w-7xl w-full h-[520px] mx-auto rounded-lg shadow-3xl focus:outline-none transition-all duration-300 transform scale-80"
        overlayClassName="fixed inset-0 flex items-center justify-center"
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
            {/* Left Side - Image Carousel */}
            <div className="w-full h-full md:w-2/3 relative cursor-pointer" onClick={() => setIsFullscreen(true)}>
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Right Side - Project Details */}
            <div className="w-full md:w-1/3 flex flex-col space-y-6 justify-around">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{selectedProject.title}</h2>
              <ul className="mt-4 text-gray-800 dark:text-gray-200 space-y-2">
                {selectedProject.description.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-lg text-teal">•</span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
              <a
                href={selectedProject.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <span className="p-2 rounded-lg shadow-md text-white bg-black hover:bg-teal hover:text-white dark:text-black dark:bg-white dark:hover:bg-teal dark:hover:text-white hover:underline font-semibold position-bottom">View Full Project</span>
              </a>
            </div>
          </div>
        )}
      </Modal>

      {/* Fullscreen Image Viewer */}
      {isFullscreen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setIsFullscreen(false)}>
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={() => setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)}
          >
            ❮
          </button>
          <img
            src={selectedProject.images[currentImageIndex]}
            alt={selectedProject.title}
            className="max-w-4xl max-h-[80vh] object-contain border-4 border-gray-600 rounded-lg shadow-lg"
            style={{ transform: "perspective(1000px) rotateY(5deg)" }}
          />
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)}
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
}
