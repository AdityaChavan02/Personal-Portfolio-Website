import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const educationData = [
  {
    year: "September 2022 - December 2023",
    degree: "M.S. Financial Technology",
    university: "University of Liverpool, Liverpool, UK",
    details: [
      "Relevant Courses: Python, Big Data Analytics, Digital Payments, QA & Statistics, Regulations, Financial Modelling.",
      "Developed expertise in Data Science and AI-based financial analytics.",
    ],
  },
  {
    year: "August 2016 - September 2020",
    degree: "B.E. Computer Science",
    university: "Modern College of Engineering, Pune, IND",
    details: [
      "Relevant Courses: Web Development, Databases, Artificial Intelligence.",
      "Worked on large-scale projects focusing on full-stack applications.",
    ],
  },
];

const workExperienceData = [
  {
    year: "January 2024 - Present",
    position: "Full Stack Developer",
    company: "MSAFE Solutions Inc, Ontario, CA (Remote)",
    details: [
      "• Crafted interactive UI/UX wireframes in Adobe XD, improving user experience by 15% through iterative feedback-driven web design.",
      "• Engineered component-based React.js frontend with Tailwind and Material UI, accelerating feature rollout time by 5 days.",
      "• Architected a serverless backend using Node.js and Firebase Cloud Functions, developed real-time RESTful APIs to handle advanced data queries, improving system response speed by 30% and reducing cloud service costs by £70 per month.",
      "• Created efficient database schemas in Supabase, reducing query execution time by 300ms. Secured user data through role-based policies.",
      "• Maximized website performance using Google Lighthouse. Utilized lazy-loading techniques, improving usability score to 98/100.",
      "• Integrated dual sign-in, Google OAuth, Maps, and real-time notification APIs to enhance security and site functionalities.",
      "• Hosted sites using Firebase Hosting and custom DNS in Scala. Streamlined team collaboration with Git, reducing merge conflicts by 25%.",
      "• Authored comprehensive product documentation for technical and non-technical stakeholders, streamlining knowledge transfer.",

    ],
  },
  {
    year: "May 2021 - October 2021",
    position: "Junior Consultant",
    company: "TIBCO Ltd, Pune, IND",
    details: [
      "• Configured real-time financial transaction monitoring dashboard using React.js and Grafana, reducing transaction reporting errors by 30%.",
      "• Collaborated with backend engineers to optimise system alerts via Grafana, saving 12+ hours/week in manual debugging & 89% blockers.",
      "• Automated processes, saving 12+ hours/week in debugging efforts.",
    ],
  },
  {
    year: "June 2019 - July 2019",
    position: "WordPress Developer",
    company: "Calviltech Digital Solutions, Pune, IND",
    details: [
      "• Designed and maintained a fully functional product platform with Elementor, handling 30+ service listings.",
      "• Optimised site speed and responsiveness through efficient asset loading, caching strategies reducing load time from 4s to 1.6s.",
      "• Emphasized effective collaboration with clients and in-house professionals to understand initial concepts, leading to the iterative refinement of website features ensuring impactful product delivery catering to evolving business needs.",
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
          className={`text-4xl font-mono font-bold flex items-center mb-20 transition-all duration-300 ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <span className={theme === "dark" ? "text-teal" : "text-teal"}>
            {`</`}
          </span>
          <span className={theme === "dark" ? "text-white" : "text-black"}>
            MY PROFILE
          </span>
          <span className={theme === "dark" ? "text-teal" : "textteal"}>
            {`>`}
          </span>
          <span
            className={`flex-1 ml-4 h-[3px] transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-teal to-transparent"
                : "bg-gradient-to-r from-teal to-transparent"
            }`}
          ></span>
        </h2>

        {/* Navigation Tabs - Center Aligned */}
        <div className="w-full flex justify-center mb-8">
          <div className="flex items-center justify-center backdrop-blur-xl shadow-lg px-6 py-3 mb-10 rounded-lg">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-2 text-lg font-semibold rounded-lg transition-all ${
                activeTab === "experience"
                  ? "bg-black text-white dark:bg-white dark:text-black hover:bg-teal dark:hover:text-white dark:hover:bg-teal shadow-lg"
                  : "bg-black text-white dark:bg-white dark:text-black hover:bg-teal dark:hover:text-white dark:hover:bg-teal"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 ml-4 text-lg font-semibold rounded-lg transition-all ${
                activeTab === "education"
                  ? "bg-black text-white dark:bg-white dark:text-black hover:bg-teal dark:hover:text-white dark:hover:bg-teal"
                  : "bg-black text-white dark:bg-white dark:text-black hover:bg-teal dark:hover:text-white dark:hover:bg-teal"
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
                <span className="px-4 py-2 text-sm font-bold text-white dark:text-black bg-black dark:bg-white hover:bg-teal dark:hover:bg-teal dark:hover:text-white  rounded-full shadow-md">
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
                    <span className="mr-2 text-lg text-teal">•</span> {/* Fire Emoji Bullet */}
                    <p>{point.replace("•", "").trim()}</p> {/* Ensure consistency in list formatting */}
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
