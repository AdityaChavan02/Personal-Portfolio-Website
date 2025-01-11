module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#052d41",
        darkerblue: "#063d59",
        footerblue: "#030d26", // dark blue background color
        lightblue: "#0d4b7d",
        skyblue: "#5fbcfe",
        lightskyblue: "#acdafa",
        whiteblue: "#e0f2ff",
        seablue: "#23a0f3", // light
        white: "#FFFFFF",
        navygray: "#cbcbcb", // white background color
        buttonBlue: "#00AEEF", // for button
        buttonBorder: "#004F7D",
        orange: "#f49917",
        yellow: "#ffd042",
        red: "#c33100",
        darkred: "#862200",
        green: "#219a0c",
        goldenyellow: "#efb000",
      },
      animation: {
        "gradient-wave": "gradientWave 8s ease infinite",
        "horizontal-scroll": "horizontalScroll 15s linear infinite", // New animation for horizontal scrolling
      },
      keyframes: {
        gradientWave: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        horizontalScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // Scroll horizontally
        },
      },
      backgroundSize: {
        "200%": "200% 200%", // Add large background size for gradients
      },
      width: {
        card: "250px", // Custom card width
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
