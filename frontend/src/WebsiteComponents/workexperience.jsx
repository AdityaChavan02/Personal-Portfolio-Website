import React, { useState } from "react";

const workExperienceData = [
  {
    id: 1,
    title: "Full Stack Developer",
    date: "January 2024 - Present",
    company: "MSAFE Solutions Inc. Ontario, CA",
    description: [
      "Crafted interactive UI/UX wireframes in Adobe XD, improving user experience by 15% through iterative feedback-driven web design.",
      "Engineered a component-based React.js frontend with Tailwind and Material UI, reducing load time by 3s and feature rollout time by 5 days.",
      "Architected a serverless backend using Node.js and Firebase Cloud Functions, developing real-time RESTful APIs to handle advanced data queries, improving system response speed by 30% and reducing cloud service costs by £70 per month.",
      "Created efficient database schemas in Supabase, reducing query execution time by 300ms while securing user data through role-based policies.",
      "Maximized website performance using Google Lighthouse. Utilized lazy-loading techniques, improving usability score to 98/100.",
      "Integrated dual sign-in, Google OAuth, Maps, and real-time notification APIs to enhance security and site functionalities.",
      "Hosted sites using Firebase Hosting and custom DNS in Scala. Streamlined team collaboration with Git, reducing merge conflicts by 25%.",
      "Authored comprehensive product documentation for technical and non-technical stakeholders, streamlining knowledge transfer.",
      "Achievement: Instrumental in securing Platform Calgary Incubator selection, aiding in product scalability and VC investor outreach.",
    ],
  },
  {
    id: 2,
    title: "Junior Consultant",
    date: "May 2021 - October 2021",
    company: "TIBCO Ltd, Pune, IND",
    description: [
      "Configured a real-time financial transaction monitoring dashboard using React.js and Grafana, reducing transaction reporting errors by 30%.",
      "Collaborated with backend engineers to optimize system alerts via Grafana, preventing 95% of critical reporting failures and saving 12+ hours/week in manual debugging.",
    ],
  },
  {
    id: 3,
    title: "WordPress Intern",
    date: "January 2020 - March 2020",
    company: "Calviltech Digital Solutions, Ltd. Pune, IND",
    description: [
      "Configured a real-time financial transaction monitoring dashboard using React.js and Grafana, reducing transaction reporting errors by 30%.",
      "Collaborated with backend engineers to optimize system alerts via Grafana, preventing 95% of critical reporting failures and saving 12+ hours/week in manual debugging.",
    ],
  },
];

export default function WorkExperience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <div className="bg-transparent py-10 w-full">
      <div className="w-full mx-auto px-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-black dark:text-white">
          Work Experience
        </h1>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Left Column - Job Titles */}
          <div className="relative flex flex-col items-start w-full md:w-1/4 bg-white dark:bg-gray-800 bg-opacity-80 p-4 rounded-lg shadow-lg">
            {/* Vertical Progress Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-600"></div>

            {workExperienceData.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedExperience(job)}
                className={`pl-2 py-4 w-full cursor-pointer transition-all duration-300 ${
                  selectedExperience?.id === job.id
                    ? "bg-gray-300 dark:bg-gray-700 bg-opacity-50 border-l-4 border-black dark:border-white"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <h2 className="text-lg font-bold text-black dark:text-white">{job.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{job.date}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{job.company}</p>
              </div>
            ))}
          </div>

          {/* Right Column - Job Details */}
          <div className="w-full md:w-3/4 bg-white dark:bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
            {selectedExperience ? (
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {selectedExperience.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  {selectedExperience.date}
                </p>
                <p className="text-lg text-gray-800 dark:text-gray-300">
                  {selectedExperience.company}
                </p>
                <hr className="my-4 border-gray-300 dark:border-gray-600" />

                {/* ✅ Bullet Points with Small Diamonds */}
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                  {selectedExperience.description.map((point, index) => (
                    <li key={index} className="flex items-center">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-500 text-center dark:text-gray-400">
                Click a work experience to view the details.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
