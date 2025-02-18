import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Daymode from "../assets/Icons/daymode.png";
import Nightmode from "../assets/Icons/nightmode.png";

export default function Header({ scrollToSection }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevents hydration mismatch in SSR

    return (
        <div className="fixed top-0 left-0 w-full h-[60px] bg-white dark:bg-gray-900 dark:text-white shadow-md z-50 flex flex-row justify-between items-center px-5 transition-all duration-300">
            
            {/* Logo - Scrolls to Hero */}
            <div className="flex items-center">
                <h2 className="text-xl font-extrabold cursor-pointer" onClick={() => scrollToSection("hero")}>
                    Aditya Chavan
                </h2>
            </div>

            {/* Navigation Menu */}
            <div className="flex flex-row space-x-6 font-semibold text-sm md:text-md text-black dark:text-white">
                <h3 className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300" onClick={() => scrollToSection("achievements")}>
                    ACHIEVEMENTS
                </h3>
                <h3 className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300" onClick={() => scrollToSection("skills")}>
                    SKILLS
                </h3>
                <h3 className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300" onClick={() => scrollToSection("education")}>
                    EDUCATION
                </h3>
                <h3 className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300" onClick={() => scrollToSection("work-experience")}>
                    WORK EXPERIENCE
                </h3>
                <h3 className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300" onClick={() => scrollToSection("projects")}>
                    PROJECTS
                </h3>
                <h3 className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300" onClick={() => scrollToSection("contact")}>
                    CONTACT
                </h3>
            </div>

            {/* Theme Toggle Button */}
            <div className="flex flex-row items-center space-x-4">
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="focus:outline-none"
                >
                    <img src={theme === "dark" ? Daymode : Nightmode} alt="Theme Toggle" className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}
