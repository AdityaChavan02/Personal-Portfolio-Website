/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode via class (works with next-themes)
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#052d41",
        teal: "#66cdaa",
        darkerblue: "#063d59",
        footerblue: "#030d26",
        lightblue: "#0d4b7d",
        skyblue: "#5fbcfe",
        lightskyblue: "#acdafa",
        whiteblue: "#e0f2ff",
        seablue: "#23a0f3",
        white: "#FFFFFF",
        navygray: "#cbcbcb",
        buttonBlue: "#00AEEF",
        buttonBorder: "#004F7D",
        orange: "#f49917",
        yellow: "#ffd042",
        red: "#c33100",
        darkred: "#862200",
        green: "#219a0c",
        goldenyellow: "#efb000",
        darkBg: "#121212", // Custom background for dark mode
        lightBg: "#f8f9fa", // Custom background for light mode
      },
      animation: {
        "gradient-wave": "gradientWave 8s ease infinite",
        "horizontal-scroll": "horizontalScroll 15s linear infinite",
      },
      keyframes: {
        gradientWave: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        horizontalScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      width: {
        card: "250px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
