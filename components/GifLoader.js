'use client';

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
      <div className="relative w-[20rem] h-[20rem] flex items-center justify-center">
        {/* Spot shadow behind the logo */}
        <div
          className="absolute w-[26rem] h-[26rem] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)',
          }}
        />

        {/* Logo on top */}
        <img
          src="https://res.cloudinary.com/dnprilij7/image/upload/v1759233765/logo-removebg-preview_i445ay.png"
          alt="S Loader"
          className="w-[32rem] h-[32rem] object-contain relative z-10"
        />
      </div>
    </div>
  );
};

export default SLoader;
