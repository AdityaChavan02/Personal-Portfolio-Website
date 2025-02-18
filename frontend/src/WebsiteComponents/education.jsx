import React from "react";
import { Chrono } from "react-chrono";
import { useTheme } from "next-themes";
import { FaGraduationCap, FaBriefcase, FaRocket, FaBuilding } from "react-icons/fa";
import TimelineCard from "../utils/TimelineCard";

// Timeline Data (Education + Work Experience)
const timelineData = [
  {
    year: "2000",
    title: "Started High School",
    subtitle: "ABC High School",
    description: "Began my academic journey.",
    icon: <FaGraduationCap />,
    type: "education",
  },
  {
    year: "2010",
    title: "Graduated College",
    subtitle: "XYZ University, Computer Science",
    description: "Gained expertise in programming and software development.",
    icon: <FaGraduationCap />,
    type: "education",
  },
  {
    year: "2015",
    title: "First Job - Junior Developer",
    subtitle: "TechCorp",
    description: "Worked on cutting-edge tech and improved coding skills.",
    icon: <FaBriefcase />,
    type: "work",
  },
  {
    year: "2020",
    title: "Promotion - Senior Developer",
    subtitle: "TechCorp",
    description: "Managed projects and mentored junior developers.",
    icon: <FaBuilding />,
    type: "work",
  },
  {
    year: "2025",
    title: "Founded Tech Startup",
    subtitle: "AI Solutions Inc.",
    description: "Built AI-powered business solutions.",
    icon: <FaRocket />,
    type: "work",
  },
];

export default function EducationWorkTimeline() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="py-20 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h1 className={`text-4xl font-extrabold text-center mb-10 ${isDarkMode ? "text-blue-300" : "text-blue-700"}`}>
          Education & Work Timeline
        </h1>

        {/* Timeline Layout */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Education */}
          <div className="w-full md:w-1/2 flex flex-col space-y-10">
            {timelineData
              .filter((item) => item.type === "education")
              .map((item, index) => (
                <TimelineCard
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  icon={item.icon}
                  isLeft={true}
                />
              ))}
          </div>

          {/* Center Column - React-Chrono Timeline */}
          <div className="w-full flex justify-center">
            <Chrono
              items={timelineData.map((item) => ({ title: item.year }))}
              mode="VERTICAL_ALTERNATING"
              theme={{
                primary: isDarkMode ? "#00ADB5" : "#007bff",
                secondary: "transparent",
                cardBgColor: "transparent",
                titleColor: isDarkMode ? "#FFFFFF" : "#1E293B",
                iconBackground: isDarkMode ? "#00ADB5" : "#007bff",
              }}
              hideControls
              disableToolbar
              disableClickOnCircle
              scrollable
              enableBreakPoint
              timelineCircleDimension={25} // Smaller timeline circles
              itemWidth={120} // Ensures spacing between timeline items
            />
          </div>

          {/* Right Column - Work Experience */}
          <div className="w-full md:w-1/2 flex flex-col space-y-10">
            {timelineData
              .filter((item) => item.type === "work")
              .map((item, index) => (
                <TimelineCard
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  icon={item.icon}
                  isLeft={false}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
