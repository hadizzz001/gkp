"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../app/context/LanguageContext";

const MyCarousel = () => {
  const router = useRouter();
  const { language } = useLanguage();

  const [translatedContent, setTranslatedContent] = useState({
    title: "Ingenuity, exactness, superior standards",
    learnMore: "Learn more",
  });

  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        title: "Ingenuity, exactness, superior standards",
        learnMore: "View more",
      };

      try {
        const translated = await Promise.all(
          Object.entries(contentToTranslate).map(async ([key, text]) => {
            const res = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ targetLanguage: language, text }),
            });

            const data = await res.json();
            return [key, data.translatedText || text];
          })
        );

        setTranslatedContent(Object.fromEntries(translated));
      } catch (err) {
        console.error("Translation failed", err);
        setTranslatedContent(contentToTranslate);
      }
    };

    translateContent();
  }, [language]);

  return (
    <div className="relative w-full min-h-[800px] md:min-h-[800px] overflow-hidden">

      {/* ✅ Image Tag Instead of Background */}
<img
  src="https://res.cloudinary.com/dnprilij7/image/upload/v1759230918/b012fbd65867cbf7c10ec152eba32ac5_zsbvyc.jpg"
  alt="Carousel Background"
  className="absolute inset-0 w-full h-full object-cover object-[40%_center] md:object-center"
/>


      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
        <div className="text-left ml-6 md:ml-20">
          <p className="myTitle1 mb-10" dir={language === "ar" ? "rtl" : "ltr"}>
            {translatedContent.title}
          </p>
          <button id="mybbtn1" onClick={() => router.push("/projects")}>
            {translatedContent.learnMore}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
