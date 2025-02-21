import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "next-themes";

// Component Imports

import Header from "./WebsiteComponents/Header.jsx";
import Footer from "./WebsiteComponents/Footer.jsx";
import Loader from "./WebsiteComponents/loader.jsx";
import HeroSection from "./WebsiteComponents/herosection.jsx";
import Projects from "./WebsiteComponents/projects.jsx";
import SignIn from "./WebsiteComponents/signin.jsx";
import Skills from "./WebsiteComponents/skills.jsx";
import Education from "./WebsiteComponents/education.jsx";
import AboutMe from "./WebsiteComponents/AboutMe.jsx";
import Testimonials from "./WebsiteComponents/testimonials.jsx";
import ContactUs from "./WebsiteComponents/contactus.jsx";
import SocialMediaBar from "./WebsiteComponents/socialmediabar.jsx";
import ScrollToTop from "./WebsiteComponents/scrolltop.jsx";

// Dashboard Imports
import Dashboard from "./DashboardComponents/dashboard.jsx";

// Import CSS
import "./index.css"; 

export default function App() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Reduced Load Time
  }, []);

  // Smooth Scrolling Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`w-full app-container transition-all duration-300 ${
        theme === "dark" ? "dark-mode text-white" : "light-mode text-black"
      }`}
    >
      <Router>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header scrollToSection={scrollToSection} />
            <div className="content-container w-full">
              
              {/* Sections with IDs for Smooth Scrolling */}
              <section id="hero">
                <HeroSection />
              </section>
              <section id="about-me">
                <AboutMe />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="education">
                <Education />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>
              <section id="contact">
                <ContactUs />
              </section>

            </div>
            <SocialMediaBar />
            <ScrollToTop />
            <Footer />
          </>
        )}

        {/* Nested Routes */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
