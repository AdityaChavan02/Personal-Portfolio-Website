import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaCalendar } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProfilePic from "../assets/Images/profile.jpg"; // Ensure correct path

const skills = [
  { title: "Database Management", value: 93, color: "#6A5ACD" },
  { title: "Full Stack Development", value: 94, color: "#20B2AA" },
  { title: "Responsive Web Development", value: 90, color: "#FF8C00" },
  { title: "Framework Expertise", value: 91, color: "#DC143C" },
];

export default function AboutMe() {
  const { theme } = useTheme(); // Ensure Dark Mode support

  return (
    <section className="relative w-full px-10 pt-5 transition-all duration-300">
      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="justify-start items-start text-5xl font-extrabold"
      >
        <h2
          className={`text-4xl font-mono font-bold flex items-center mt-12 mb-20 transition-all duration-300 ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <span className={theme === "dark" ? "text-teal" : "text-teal"}>{"</"}</span>
          <span className={theme === "dark" ? "text-white" : "text-black"}>ABOUT ME</span>
          <span className={theme === "dark" ? "text-teal" : "tex-teal"}>{">"}</span>
          <span
            className={`flex-1 ml-4 h-[3px] transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-teal to-transparent"
                : "bg-gradient-to-r from-teal to-transparent"
            }`}
          ></span>
        </h2>
      </motion.h1>

      {/* Main Content Row */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-between mt-10"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full md:w-1/3 flex justify-start items-start"
        >
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-64 h-64 rounded-md shadow-lg border border-gray-300 dark:border-gray-700 transform scale-95 hover:scale-105 transition-all duration-500"
          />
        </motion.div>

        {/* Description & Personal Info */}
        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          >
            I am a passionate <strong>Full Stack Developer</strong> with expertise in <strong>modern web technologies</strong> and a strong foundation in <strong>backend development</strong>. My journey spans from <strong>data-intensive systems</strong> to creating <strong>scalable web applications</strong>. I specialize in <strong>React, Next.js, JavaScript, SQL, and Cloud Computing</strong>, striving to craft elegant solutions that make an impact.
          </motion.p>

          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900 dark:text-gray-100"
          >
            <div className="flex items-center space-x-4">
              <FaUser className="text-purple-600 dark:text-yellow-400 text-xl" />
              <span><strong>Full Name:</strong> Aditya Chavan</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaCalendar className="text-blue-500 text-xl" />
              <span><strong>Age:</strong> 26 Years</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-green-500 text-xl" />
              <span><strong>Phone:</strong> +44-7768406922</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-500 text-xl" />
              <span><strong>Location:</strong> Manchester, United Kingdom</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Skills & Proficiency */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.9 + index * 0.2 }}
            className="flex flex-col items-center w-full justify-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all hover:scale-105"
          >
            <div className="w-28 h-28">
              <CircularProgressbar
                value={skill.value}
                text={`${skill.value}%`}
                styles={buildStyles({
                  textColor: theme === "dark" ? "#FFF" : "#333",
                  pathColor: skill.color,
                  trailColor: theme === "dark" ? "#444" : "#ddd",
                })}
              />
            </div>
            <h3 className="flex mt-4 w-full text-xl font-semibold items-center justify-center text-gray-800 dark:text-white">
              {skill.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
