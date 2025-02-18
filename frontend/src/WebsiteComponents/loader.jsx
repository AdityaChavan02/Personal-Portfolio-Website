import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// List of "Hello" in different languages
const greetings = [
  { text: "Hello!", language: "English", duration: 1.5 },
  { text: "Bonjour!", language: "French", duration: 1.5 },
  { text: "नमस्ते!", language: "Hindi", duration: 1.5 },
];

export default function Loader() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, greetings[currentGreeting].duration * 1000); // Adjust timing dynamically

    // Fade out before redirecting
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => navigate("/"), 1300);
    }, 3750);

    return () => clearInterval(interval);
  }, [navigate, currentGreeting]);

  return (
    <motion.div
      className="flex justify-center items-center h-screen w-full bg-white relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        key={greetings[currentGreeting].text}
        className="absolute text-black text-6xl font-extrabold"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: greetings[currentGreeting].duration, ease: "easeInOut" }}
      >
        {greetings[currentGreeting].text}
      </motion.div>
    </motion.div>
  );
}
