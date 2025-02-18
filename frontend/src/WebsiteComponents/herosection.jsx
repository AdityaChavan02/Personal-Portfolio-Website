import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import Editor from "react-simple-code-editor";
import { Highlight, themes } from "prism-react-renderer";
import { FaCircle, FaAngleDoubleDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ProfilePic from "../assets/Images/profile.jpg"; // Replace with your path

export default function HeroSection() {
  const { theme } = useTheme();
  const [isHeadingRendered, setIsHeadingRendered] = useState(false);
  const [moveUp, setMoveUp] = useState(false);
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
    setTimeout(() => setMoveUp(true), 2300);
    setTimeout(() => setShowContent(true), 3500);
    setTimeout(() => setShowProfile(true), 4000);
    setTimeout(() => setShowEditor(true), 4500);
    setTimeout(() => typeCode(initialCode), 4700);
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
    <section className="relative w-full h-screen flex flex-col md:flex-row items-left justify-between overflow-hidden transition-all duration-300 px-10">
      {/* Left Column */}
      <div className="w-full md:w-[800px] flex flex-col justify-center space-y-6">
        {/* Animated Greeting */}
        <div
          className={`absolute transition-all duration-1000 ${
            moveUp
              ? "top-[10%] left-[0%] text-left"
              : "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center"
          } ${isHeadingRendered ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className="text-3xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Hi there!{" "}
            <span className="text-purple-600 dark:text-yellow-400 ml-2">I'm Aditya 👋</span>
          </h1>
        </div>

        <div className="flex flex-col justify-between">
          {/* Scrolling Titles Animation */}
          {showContent && (
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
          )}


        </div>

        {/* About Section */}
        {showContent && (
          <div className="transition-opacity mt-6 duration-1000 opacity-100">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-400">
              I am passionate about coding, building scalable applications, and
              creating innovative solutions. My expertise lies in{" "}
              <strong>full-stack development</strong> with a focus on{" "}
              <strong>React, Next.js, and AWS</strong>.
            </p>
          </div>
        )}

        {/* Buttons */}
        {showContent && (
          <div className="mt-6 flex space-x-4 text-sm">
            {/* View More Button */}
            <button
              onClick={handleScroll}
              className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-4 py-1 rounded-lg flex items-center space-x-2 transition-transform duration-300 hover:translate-y-1"
            >
              <span>View More</span>
              <FaAngleDoubleDown className="animate-bounce" />
            </button>

            {/* Download Resume Button */}
            <button className="bg-purple-600 dark:bg-yellow-400 text-white px-4 py-1 rounded-lg font-semibold transition-all hover:bg-purple-700 dark:hover:bg-yellow-500">
              View Resume
            </button>
          </div>
        )}
      </div>
      {/* Middle Column */}
      <div
        className={`w-full h-auto md:w-1/2 flex flex-col items-center space-y-6 top-30 transition-all duration-1000 ${
          showEditor ? "translate-x-0 opacity-100" : "translate-x-[75%] opacity-0"
        }`}
      >
          {/* Profile Image */}
          {showProfile && (
            <div
              className="mt-6 transition-all duration-1000 transform"
              style={{
                opacity: showProfile ? 1 : 0,
                translate: showProfile ? "0 0" : "100px",
              }}
            >
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-80 h-100 shadow-lg rounded-lg grayscale hover:grayscale-0 transition-all duration-500 border-4 border-gray-300 dark:border-gray-700"
              />
            </div>
          )}
      </div>
      {/* Right Column */}
      <div
        className={`w-full md:w-1/2 flex flex-col right-0 items-end space-y-6 items-center top-30 transition-all duration-1000 ${
          showEditor ? "translate-x-10 opacity-100" : "translate-x-[40%] opacity-0"
        }`}
      >
        {/* Code Editor Panel */}
        <div
          className="w-full h-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl scrollbar-hidden"
          ref={editorRef}
          style={{
            minHeight: "500px",
            maxHeight: "500px",
            width: "600px",
            overflowY: "auto",
          }}
        >
          {/* Mac-Style Title Bar */}
          <div className="flex items-center bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-t-lg">
            <FaCircle className="text-red-500 mr-2" />
            <FaCircle className="text-yellow-500 mr-2" />
            <FaCircle className="text-green-500" />
          </div>

          {/* Code Editor */}
          <Editor
            value={code}
            onValueChange={(newCode) => setCode(newCode)}
            highlight={(code) => (
              <Highlight theme={themes.nightOwl} code={code} language="javascript">
                {({ tokens, getLineProps, getTokenProps }) => (
                  <pre className="p-4 overflow-hidden text-gray-900 dark:text-gray-100">
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
            className="font-mono text-sm leading-6 bg-white dark:bg-gray-900 focus:outline-none rounded-b-lg"
          />
        </div>
      </div>
    </section>
  );
}
