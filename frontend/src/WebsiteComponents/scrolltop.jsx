import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ScrollToTop() {
    const { theme } = useTheme(); // ✅ Fix: Get current theme from next-themes
  
  const [isVisible, setIsVisible] = useState(false);

  // Handle Scroll Event
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 bg-black text-black p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:text-teal focus:outline-none z-50 ${
              theme === "dark"
                ? "bg-white"
                : "bg-black"
            }`}
        >
          <FaArrowUp className="text-md text-white hover:text-teal dark:text-black " />
        </button>
      )}
    </div>
  );
}
