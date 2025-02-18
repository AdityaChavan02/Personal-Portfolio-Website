import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialMediaBar() {
  return (
    <div className="fixed bottom-4 left-3 flex flex-col space-y-2 z-50">
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="bg-purple-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110">
          <FaLinkedin className="text-white text-xl group-hover:text-gray-200" />
        </div>
      </a>

      <a
        href="https://github.com/yourgithub"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="bg-purple-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110">
          <FaGithub className="text-white text-xl group-hover:text-gray-200" />
        </div>
      </a>

      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="bg-purple-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110">
          <FaInstagram className="text-white text-xl group-hover:text-gray-200" />
        </div>
      </a>

      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="bg-purple-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110">
          <FaTwitter className="text-white text-xl group-hover:text-gray-200" />
        </div>
      </a>
    </div>
  );
}
