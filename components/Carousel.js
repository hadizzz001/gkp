"use client";

import React from "react";

const MyCarousel = () => {
  return (
    <div
      className="relative w-full bg-fixed bg-no-repeat bg-center bg-cover 
                 min-h-[800px] md:min-h-[800px]"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dnprilij7/image/upload/v1756386034/74f558_66357e0ecfea4c86b2ea0bce6e8a9447_mv2_klaunl.webp')",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
        <div className="text-left ml-6 md:ml-20">
          <p className="myTitle1 mb-10">
            innovation, precision & quality.
          </p> 
                <button
                  id="mybbtn1" 
                  onClick={() => router.push("/shop")}
                >
                  Learn more
                </button>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
