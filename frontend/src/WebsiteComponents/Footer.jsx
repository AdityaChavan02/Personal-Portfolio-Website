import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-footerblue text-white py-8 h-500">
      {/* Footer Content Container */}
      {/* Divider Line */}
      <div className="mt-4 w-full flex justify-center">
        <hr className="border-t border-gray-600 w-10/12 lg:w-full mx-5" />
      </div>
      <div className="max-w-full flex flex-row lg:flex-row justify-between items-end text-sm space-y-4 lg:space-y-0 px-6 mx-h-100">
        {/* Left Side: Copyright */}
        <span className="text-start lg:text-left mt-5">
          Copyright © 2025 Aditya Chavan
        </span>
        <span className="text-start lg:text-left mt-5">

        </span>
      </div>
    </div>
  );
};

