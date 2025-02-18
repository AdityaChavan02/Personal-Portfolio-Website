import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const educationData = [
  {
    year: "September 2022 - December 2023",
    degree: "M.S. Financial Technology",
    university: "University of Liverpool, Liverpool, UK",
    details: [
      "🔥 Relevant Courses: Python, Big Data Analytics, Digital Payments, QA & Statistics, Regulations, Financial Modelling.",
      "🔥 Developed expertise in Data Science and AI-based financial analytics.",
    ],
  },
  {
    year: "August 2016 - September 2020",
    degree: "B.E. Computer Science",
    university: "Modern College of Engineering, Pune, IND",
    details: [
      "🔥 Relevant Courses: Web Development, Databases, Artificial Intelligence.",
      "🔥 Worked on large-scale projects focusing on full-stack applications.",
    ],
  },
];

const workExperienceData = [
  {
    year: "January 2024 - Present",
    position: "Full Stack Developer",
    company: "MSAFE Solutions Inc, Ontario, CA (Remote)",
    details: [
      "🔥 Designed UI/UX wireframes in Adobe XD, improving UX by 15%.",
      "🔥 Developed a React.js frontend with Tailwind and Material UI, reducing load time by 3s.",
      "🔥 Built serverless backend with Node.js & Firebase Cloud Functions, reducing cloud costs by £70/month.",
      "🔥 Enhanced security with Google OAuth & role-based access policies.",
      "🔥 Improved website performance to 98/100 via Google Lighthouse optimizations.",
    ],
  },
  {
    year: "May 2021 - October 2021",
    position: "Junior Consultant",
    company: "TIBCO Ltd, Pune, IND",
    details: [
      "🔥 Developed real-time transaction monitoring dashboard with React.js & Grafana.",
      "🔥 Optimized system alerts, preventing 95% of critical reporting failures.",
      "🔥 Automated processes, saving 12+ hours/week in debugging efforts.",
    ],
  },
];

export default function EducationExperienceTabs() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("experience"); // Default to Experience

  return (
    <div className="py-20 w-full flex flex-col items-center">
      <div className="flex flex-col max-w-9xl w-full px-6">
        {/* Section Title */}
        <h2
          className={`text-4xl font-mono font-bold flex items-center mb-12 transition-all duration-300 ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <span className={theme === "dark" ? "text-cyan-400" : "text-blue-500"}>
            {`</`}
          </span>
          <span className={theme === "dark" ? "text-white" : "text-black"}>
            MY PROFILE
          </span>
          <span className={theme === "dark" ? "text-pink-400" : "text-red-500"}>
            {`>`}
          </span>
          <span
            className={`flex-1 ml-2 h-[2px] transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 to-pink-400"
                : "bg-gradient-to-r from-blue-500 to-red-500"
            }`}
          ></span>
        </h2>

        {/* Navigation Tabs - Center Aligned */}
        <div className="w-full flex justify-center mb-8">
          <div className="flex items-center justify-center bg-white dark:bg-gray-800 shadow-lg px-6 py-3 rounded-lg">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-2 text-lg font-semibold rounded-lg transition-all ${
                activeTab === "experience"
                  ? "bg-purple-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 ml-4 text-lg font-semibold rounded-lg transition-all ${
                activeTab === "education"
                  ? "bg-purple-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Content Section - Experience or Education */}
        <div className="w-full flex flex-col space-y-6">
          {(activeTab === "experience" ? workExperienceData : educationData).map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl transition-all hover:scale-[1.02]"
            >
              {/* Header with Date & Title */}
              <div className="flex items-center justify-between space-x-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {activeTab === "experience" ? item.position : item.degree}
                  </h3>
                <span className="px-4 py-2 text-sm font-bold text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-full shadow-md">
                  {item.year}
                </span>

              </div>

              {/* Subtitle */}
              <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
                {activeTab === "experience" ? item.company : item.university}
              </p>

              {/* Details List */}
              <ul className="mt-4 text-gray-800 dark:text-gray-200 space-y-2">
                {item.details.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-lg">🔥</span> {/* Fire Emoji Bullet */}
                    <p>{point.replace("🔥", "").trim()}</p> {/* Ensure consistency in list formatting */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
