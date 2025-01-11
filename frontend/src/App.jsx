import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Website Imports
import Header from './WebsiteComponents/Header.jsx';
import Footer from './WebsiteComponents/Footer.jsx';
import HeroSection from './WebsiteComponents/herosection.jsx';
import Projects from './WebsiteComponents/projects.jsx';
import SignIn from './WebsiteComponents/signin.jsx';
import Skills from './WebsiteComponents/skills.jsx';
import Education from './WebsiteComponents/education.jsx';
import WorkExperience from './WebsiteComponents/workexperience.jsx';
import Testimonials from "./WebsiteComponents/testimonials.jsx";
import ContactUs from "./WebsiteComponents/contactus.jsx";
// Dashboard Imports
import Dashboard from './DashboardComponents/dashboard.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website Routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <Projects />
              <Skills/>
              <Education />
              <WorkExperience />
              <Testimonials />
              <ContactUs />
              <Footer />
            </>
          }
        />

        {/* Nested Routes */}
        <Route path="/signin" element={<SignIn />} /> {/* SignIn Route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* SignIn Route */}
      </Routes>
    </Router>
  );
}

