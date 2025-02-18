import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function TimelineCard({ title, subtitle, description, icon, isLeft }) {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`relative flex w-full md:w-[450px] p-6 rounded-xl shadow-lg transition-all duration-500 
        ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} 
        ${isLeft ? "md:justify-end pr-10" : "md:justify-start pl-10"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col space-y-3">
        {/* Icon & Title */}
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-full text-lg ${theme === "dark" ? "bg-blue-500 text-white" : "bg-blue-600 text-white"}`}>
            {icon}
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>

        {/* Subtitle */}
        <h3 className="text-lg text-gray-400">{subtitle}</h3>

        {/* Description */}
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
