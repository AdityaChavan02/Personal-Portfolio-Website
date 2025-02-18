import React, { useState } from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPhp,
  SiGooglecloud,
  SiDigitalocean,
  SiNetlify,
  SiVercel,
  SiAndroidstudio,
  SiOpenjdk,
  SiSqlite,
  SiJira,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaGoogle, FaAws } from "react-icons/fa"; // Corrected AWS import

// Organized Skill Categories
const techCategories = {
  Frontend: [
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "NextJS", icon: <SiNextdotjs color="#000000" /> },
    { name: "ReactJS", icon: <SiReact color="#61DAFB" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" /> },
    { name: "TypeScript", icon: <SiTypescript color="#007ACC" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
    { name: "Material UI", icon: <SiMui color="#007FFF" /> },
    { name: "Chakra UI", icon: <SiChakraui color="#319795" /> },
    { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "Sass", icon: <SiSass color="#CC6699" /> },
    { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
  ],
  Backend: [
    { name: "NodeJS", icon: <SiNodedotjs color="#339933" /> },
    { name: "ExpressJS", icon: <SiExpress color="#000000" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "PHP", icon: <SiPhp color="#777BB4" /> },
    { name: "AWS", icon: <FaAws color="#FF9900" /> },
  ],
  Others: [
    { name: "Google", icon: <FaGoogle color="#4285F4" /> },
    { name: "Android Studio", icon: <SiAndroidstudio color="#3DDC84" /> },
    { name: "Java", icon: <SiOpenjdk color="#007396" /> },
    { name: "SQLite", icon: <SiSqlite color="#003B57" /> },
    { name: "Jira", icon: <SiJira color="#0052CC" /> },
    { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub color="#181717" /> },
    { name: "DigitalOcean", icon: <SiDigitalocean color="#0080FF" /> },
    { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
    { name: "Vercel", icon: <SiVercel color="#000000" /> },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend"); // State to track selected category

  return (
    <div className="flex flex-col items-center w-full py-10 px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Tech Stack</h1>

      {/* Category Navigation Bar */}
      <div className="flex justify-between w-full bg-white shadow-md p-2 mr-2 rounded-md mb-10 max-w-xl">
        {Object.keys(techCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-14 py-2 mx-2 text-md font-semibold rounded-md transition-all 
              ${activeCategory === category ? "bg-purple-600 text-white shadow-lg scale-105" : "bg-gray-100 text-gray-800 hover:bg-purple-500 hover:text-white"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 w-4/5 gap-8">
        {techCategories[activeCategory].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 transform transition-all duration-300 hover:scale-110"
          >
            <div className="text-6xl">{tech.icon}</div>
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
