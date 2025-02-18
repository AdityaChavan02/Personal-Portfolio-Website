import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
export default function SocialMediaBar() {
  return (
    <div className="fixed bottom-2 left-2 flex flex-col space-y-2 z-50">
      <a
        href="https://www.linkedin.com/in/aditya-chavan-641172186/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="bg-purple-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110">
          <FaLinkedin className="text-white text-xl group-hover:text-gray-200" />
        </div>
      </a>

      <a
        href="https://github.com/AdityaChavan02"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="bg-purple-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110">
          <FaGithub className="text-white text-xl group-hover:text-gray-200" />
        </div>
      </a>

      <a
        href="chavanadityawork@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="bg-purple-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110">
          <BiLogoGmail className="text-white text-xl group-hover:text-gray-200" />
        </div>
      </a>
    </div>
  );
}
