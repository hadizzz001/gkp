"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

const ResponsiveVideo = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const innerRefs = useRef([]); // holds refs for zooming

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category");
        const data = await res.json();
        setCategories(data.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleHover = (i, enter) => {
    const el = innerRefs.current[i];
    if (!el) return;
    gsap.to(el, {
      scale: enter ? 1.12 : 1,
      duration: 4,           // slow & smooth
      ease: "power2.out",
    });
  };

  const renderMedia = (category) => {
    const src = category.img?.[0];
    if (src?.endsWith(".mp4")) {
      return (
        <video
          className="w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
      );
    }
    return (
      <img
        className="w-full h-full object-cover pointer-events-none"
        src={src}
        alt={category.name}
      />
    );
  };

 

  if (categories.length === 0) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 mt-20">
      <p className="myTitle4 mb-2">Discover</p>
      <h1 className="myTitle3 mb-20">Our Collections</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-full aspect-square overflow-hidden cursor-pointer"
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
            onClick={() =>
              router.push(
                "/search?cat=" + encodeURIComponent(category.name)
              )
            }
          >
            {/* Inner layer that zooms */}
            <div
              ref={(el) => (innerRefs.current[index] = el)}
              className="absolute inset-0 will-change-transform"
              style={{ transform: "scale(1)" }}
            >
              {renderMedia(category)}
            </div>

            {/* Centered text */}
            <div className="absolute inset-0 grid place-items-center">
              <h3 className="myTit123 text-center px-2">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveVideo;
