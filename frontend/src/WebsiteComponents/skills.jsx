import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiD3Dotjs,
  SiChartdotjs,
  SiAdobe,
  SiFigma,
  SiWordpress,
  SiElementor,
  SiWoo,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiTableau,
  SiJest,
  SiPostman,
  SiWebpack,
  SiVite,
  SiBabel,
  SiGit,
  SiGithub,
  SiJira,
  SiClickup,
  SiNotion,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiScrumalliance,
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaAws, FaSlack } from "react-icons/fa";
import { BiLogoTypescript, BiLogoGoogleCloud } from "react-icons/bi";
import { AiOutlinePython } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import { TbSeo } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";

const techCategories = {
  Frontend: [
    { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
    { name: "JavaScript (ES6)", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "TypeScript", icon: <BiLogoTypescript color="#1572B6" /> },
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
    { name: "Material UI", icon: <SiMui color="#007FFF" /> },
    { name: "d3.js", icon: <SiD3Dotjs color="#F9A03C" /> },
    { name: "Charts.js", icon: <SiChartdotjs color="#FF6384" /> },
    { name: "Adobe XD", icon: <SiAdobe color="#FF0000" /> },
    { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
    { name: "WordPress", icon: <SiWordpress color="#21759B" /> },
    { name: "Elementor", icon: <SiElementor color="#92003B" /> },
    { name: "WooCommerce", icon: <SiWoo color="#96588A" /> },
    { name: "SEO", icon: <TbSeo color="green" /> },
    { name: "Framer Motion", icon: <FiFramer color="orange" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress color="green"/> },
    { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
    { name: "RESTful API", icon: <TbApi color="orange" /> },
    { name: "Python", icon: <AiOutlinePython color="darkblue" /> },

  ],
  Databases: [
    { name: "SQL", icon: <BsFiletypeSql color="#336791" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    { name: "AWS", icon: <FaAws color="#FF9900" /> },
    { name: "Tableau", icon: <SiTableau color="#E97627" /> },
    { name: "Google Cloud", icon: <BiLogoGoogleCloud color="lightblue" /> },

  ],
  "DevOps & PM": [
    { name: "Webpack", icon: <SiWebpack color="#8DD6F9" /> },
    { name: "Vite", icon: <SiVite color="#646CFF" /> },
    { name: "Jest", icon: <SiJest color="#C21325" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "Notion", icon: <SiNotion color="black" /> },
    { name: "ClickUp", icon: <SiClickup color="#7B68EE" /> },
    { name: "JIRA", icon: <SiJira color="#0052CC" /> },
    { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub color="black" /> },
    { name: "Slack", icon: <FaSlack color ="lightskyblue" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop color ="green" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator color ="orange" /> },
    { name: "Lightroom", icon: <SiAdobelightroom color ="blue" /> },
  ],
};

export default function Skills() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("Frontend");


  return (
    <div className="flex flex-col items-center justify-center w-full py-20 px-4">
      {/* Title */}
      <h2
        className={`text-4xl w-full font-mono font-bold flex justify-start items-center mt-12 mb-20 transition-all duration-300 ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <span className={theme === "dark" ? "text-teal" : "text-teal"}>{`</`}</span>
        <span className={theme === "dark" ? "text-white" : "text-black"}>SKILLS</span>
        <span className={theme === "dark" ? "text-teal" : "text-teal"}>{`>`}</span>
        <span
          className={`flex-1 ml-4 h-[3px] transition-all duration-300 ${
            theme === "dark" ? "bg-gradient-to-r from-teal to-transparent" : "bg-gradient-to-r from-teal to-transparent"
          }`}
        ></span>
      </h2>

      {/* Category Navigation Bar */}
      <div
        className={`flex justify-between w-full backdrop-blur-xl shadow-md p-2 mr-2 rounded-md mb-20 max-w-4xl ${
          theme === "dark" ? "" : ""
        }`}
      >
        {Object.keys(techCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-14 py-2 mx-2 text-md font-semibold rounded-md transition-all 
              ${
                activeCategory === category
                  ? "bg-black text-white hover:bg-teal hover:text-white dark:bg-white dark:text-black dark:hover:bg-teal dark:hover:text-white"
                  : "bg-black text-white hover:bg-teal hover:text-white dark:bg-white dark:text-black dark:hover:bg-teal dark:hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Icons Grid */}
      <div className="grid w-full h-[350px] grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 w-4/5 gap-8">
        {techCategories[activeCategory].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 transform transition-all duration-300 hover:scale-110"
          >
            <div className={`text-6xl ${theme === "dark" ? "text-gray-200" : "text-gray-900"}`}>{tech.icon}</div>
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}