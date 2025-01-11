import React, { useState, useEffect } from 'react';

// Asset Imports
import Signinblack from '../assets/Icons/signinblack.png';
import Signinwhite from '../assets/Icons/signinwhite.png';
import Daymode from '../assets/Icons/daymode.png';
import Nightmode from '../assets/Icons/nightmode.png';

export default function Header() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    // Apply theme to the document
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        // Header
        <div className='flex flex-col md:flex-row justify-between items-center h-auto md:h-[80px] w-full shadow-md bg-gray-200 dark:bg-gray-800 dark:text-white transition-colors duration-300'>
            {/* Logo or Branding */}
            <div className='pl-5 pt-5 md:pt-0 flex items-center justify-center'>
                <img
                    src={theme === 'dark' ? Nightmode : Daymode}
                    alt='Logo'
                    className='h-12 w-12'
                />
            </div>

            {/* Navigation Menu */}
            <div className='flex flex-row space-x-5 md:flex-row md:space-x-10 space-y-4 md:space-y-0 items-center text-bold text-sm md:text-lg mt-4 md:mt-0'>
                <h3>ACHIEVEMENTS</h3>
                <h3>SKILLS</h3>
                <h3>EDUCATION</h3>
                <h3>WORK EXPERIENCE</h3>
                <h3>PROJECTS</h3>
                <h3>CERTIFICATIONS</h3>
            </div>

            {/* Right Section: Toggle Button and Sign-in Icon */}
            <div className='flex flex-row items-center mt-4 md:mt-0'>
                {/* Toggle Icon to switch between Day and Night Mode */}
                <div className='pr-5'>
                    <button
                        onClick={toggleTheme}
                        className='relative w-14 h-7 rounded-full transition-colors duration-300 bg-gray-300 dark:bg-gray-600'
                    >
                        <span
                            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                                theme === 'dark' ? 'translate-x-7' : ''
                            }`}
                        ></span>
                    </button>
                </div>

                {/* Sign-in Icon */}
                <div className='pr-5'>
                    <img
                        src={theme === 'dark' ? Signinwhite : Signinblack}
                        alt='Sign In Icon'
                        className='h-12 w-12'
                    />
                </div>
            </div>
        </div>
    );
}
