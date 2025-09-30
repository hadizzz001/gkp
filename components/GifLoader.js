"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000); // Hide after 3s

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="relative w-48 h-48">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dnprilij7/image/upload/v1759233765/logo-removebg-preview_i445ay.png"
          alt="S Loader"
          className="w-full h-full object-contain"
        />

        {/* White overlay that slides away */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-white"
        />
      </div>
    </div>
  );
};

export default SLoader;
