import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import Editor from "react-simple-code-editor";
import { Highlight, themes } from "prism-react-renderer";
import { FaCircle, FaAngleDoubleDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"; // Import framer-motion for animations
import ProfilePic from "../assets/Images/profile.jpg"; // Ensure correct path

export default function HeroSection() {
  const { theme } = useTheme();
  const [isHeadingRendered, setIsHeadingRendered] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [code, setCode] = useState("");
  const editorRef = useRef(null);

  // Initial Code Snippet
  const initialCode = `const coder = {
  name: "Aditya",
  skills: ["React", "NextJS", "Redux", "Express", "MongoDB", "Docker", "AWS"],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

  useEffect(() => {
    setTimeout(() => setIsHeadingRendered(true), 1100);
    setTimeout(() => setShowContent(true), 1300);
    setTimeout(() => setShowProfile(true), 1800);
    setTimeout(() => setShowEditor(true), 1800);
    setTimeout(() => typeCode(initialCode), 1900);
  }, []);

  // Typing Animation Effect
  const typeCode = (fullText) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setCode(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
  };

  // Scroll to next section when clicking "View More"
  const handleScroll = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row justify-between overflow-hidden transition-all duration-300 px-10 mb-0 pb-0">
      
      {/* Left Column - Animations Applied */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }} 
        className="w-full md:w-1/2 flex flex-col items-start justify-start space-y-8 mt-40 " style={{ minHeight: "500px", maxHeight: "500px" }}
      >
        {/* Animated Greeting */}
        <motion.h1 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          Hello, <span className="text-teal dark:text-yellow-400 ">I’m Aditya</span>
        </motion.h1>

        {/* Animated Role Typing */}
        {showContent && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Software Engineer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="h2"
              className="text-2xl font-semibold text-gray-800 dark:text-gray-300 transition-opacity duration-1000"
            />
          </motion.div>
        )}

        {/* About Section */}
        {showContent && (
          <motion.p 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="text-lg leading-relaxed  text-gray-700 dark:text-gray-400"
          >
            I am passionate about coding, building scalable applications, and
            creating innovative solutions. My expertise lies in{" "}
            <strong>full-stack development</strong> with a focus on{" "}
            <strong>React, Next.js, and AWS</strong>.
          </motion.p>
        )}

        {/* Buttons */}
        {showContent && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            className="mt-6 flex space-x-4 text-sm"
          >
            <button
              onClick={handleScroll}
              className="border-2 backdrop-blur-3xl border-gray-900 dark:border-white text-gray-900 dark:text-white shadow-lg px-4 py-2 rounded-lg flex items-center space-x-2 transition-transform duration-300 hover:translate-y-1"
            >
              <span>View Projects</span>
              <FaAngleDoubleDown className="animate-bounce" />
            </button>
            <button
                className="bg-black backdrop-blur-3xl dark:bg-yellow-400 text-white px-4 py-2 rounded-lg shadow-lg font-semibold transition-all hover:bg-purple-700 dark:hover:bg-yellow-500"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                View Resume
              </button>


          </motion.div>
        )}
      </motion.div>

      {/* Code Editor - Background Same for Both Modes */}
      {showEditor && (
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
          className="relative w-full md:w-1/2 flex justify-center md:justify-start mt-10 md:mt-20 ml-20 md:px-0"
        >
          <div
            className={`w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
              theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
            }`}
            ref={editorRef}
            style={{ minHeight: "500px", maxHeight: "500px", width: "650px" }}
          >
            {/* Code Editor Title Bar */}
            <div
              className={`flex items-center px-4 py-2 rounded-t-lg transition-all duration-300 ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-300"
              }`}
            >
              <FaCircle className="text-red mr-2" />
              <FaCircle className="text-yellow mr-2" />
              <FaCircle className="text-green" />
            </div>

            {/* Code Editor */}
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(code) => (
                <Highlight
                  theme={theme === "dark" ? themes.nightOwl : themes.github}
                  code={code}
                  language="javascript"
                >
                  {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className="p-4 text-sm transition-all duration-300">
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              )}
              padding={15}
              className={`font-mono text-sm leading-6 focus:outline-none rounded-b-lg transition-all duration-300 ${
                theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
              }`}
            />
          </div>
        </motion.div>

      )}
    </section>
  );
}
