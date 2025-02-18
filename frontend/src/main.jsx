import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}> 
      {/* Dark mode is the default, system mode disabled */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
