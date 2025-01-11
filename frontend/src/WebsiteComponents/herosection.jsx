import React, { useEffect, useState } from "react";

// Assets Import

export default function HeroSection() {
  const [isHeadingRendered, setIsHeadingRendered] = useState(false);
  const [moveUp, setMoveUp] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showContentBlocks, setShowContentBlocks] = useState(false);

  useEffect(() => {
    const headingTimer = setTimeout(() => setIsHeadingRendered(true), 1100); // Header renders after 1.2s
    const moveUpTimer = setTimeout(() => setMoveUp(true), 2300); // Header moves up after 2.4s
    const descriptionTimer = setTimeout(() => setShowDescription(true), 3500); // Description shows 1s after header
    const contentBlocksTimer = setTimeout(() => setShowContentBlocks(true), 4800); // Show blocks after 1.1s

    return () => {
      clearTimeout(headingTimer);
      clearTimeout(moveUpTimer);
      clearTimeout(descriptionTimer);
      clearTimeout(contentBlocksTimer);
    };
  }, []);

  return (
    <section className="relative w-full h-[600px] bg-gradient-to-r from-[#21286B] via-[#2AA8E0] to-[#EFB940] animate-gradient-wave text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Main Heading (Title Only) */}
      <div
        className={`absolute transition-all duration-[1200ms] ${
          moveUp
            ? "top-[10%] left-[30%] translate-x-[-50%] text-center"
            : "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center"
        } ${isHeadingRendered ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="text-5xl md:text-5xl font-bold text-start">
          Hi there! <br/>Welcome to my website <br/><span className="text-yellow-400 mt-10">I'm Aditya</span>
        </h1>
      </div>


      {/* Dual Blocks - Company Description and Video */}
      <div
        className={`absolute top-[40%] flex flex-row justify-center items-start w-3/4 space-x-16 transition-all duration-[1300ms] ${
          showContentBlocks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"
        }`}
      >
        
        {/* Left Block: Company Description */}
        <div
          className="w-1/2 p-10 bg-white bg-opacity-10 rounded-lg shadow-lg"
          style={{ height: '300px' }}  // Fixed height for consistency
        >
          <h2 className="text-3xl font-bold mb-6">A little about me</h2>
          <p className="text-lg leading-relaxed">
            ARC Enterprises is dedicated to providing cutting-edge solutions
            in CNC machining, industrial innovations, and client-centric
            approaches to ensure quality and satisfaction.
          </p>
        </div>

        {/* Right Block: Video Placeholder */}
        <div
          className="w-1/2 p-4 rounded-lg shadow-lg bg-white bg-opacity-10"
          style={{ height: '440px' }}  // Match left block height
        >
          <div className="relative w-full h-full rounded-lg">
            <video
              className="w-full h-full rounded-lg object-cover"
              controls 
              autoPlay 
              loop 
              muted
              src="#"  // Replace with your uploaded video path
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
