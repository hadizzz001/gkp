"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../app/context/LanguageContext"; // ✅ Import language context

export default function Home() {
  const { language } = useLanguage(); // ✅ Get current language
  const [isMobile, setIsMobile] = useState(false);
  const [translatedContent, setTranslatedContent] = useState({
    missionTitle: "Mission",
    missionText:
      "To deliver world class construction that exceeds client expectations through innovation, precision, and quality.",
  });

  // ✅ Handle translation
  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        missionTitle: "Mission",
        missionText:
          "To deliver world class construction that exceeds client expectations through innovation, precision, and quality.",
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
        setTranslatedContent(contentToTranslate); // fallback
      }
    };

    translateContent();
  }, [language]);

  // ✅ Handle responsive layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#1e1e1e",
        display: "flex",
        justifyContent: "center",
        padding: "80px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          maxWidth: "1200px",
          alignItems: "center",
        }}
      >
        {/* Left Title */}
        <div
          style={{
            width: isMobile ? "100%" : "30%",
            display: "flex",
            justifyContent: "center",
            marginBottom: isMobile ? "20px" : "0",
          }}
        >
          <h1
            className="myTitle5"
            style={{
              textAlign: isMobile ? "center" : "left",
              color: "#fff",
            }}
          >
            {translatedContent.missionTitle}
          </h1>
        </div>

        {/* Vertical Line */}
        {!isMobile && (
          <div
            style={{
              width: "2px",
              backgroundColor: "#dbdbdb",
              height: "100%",
            }}
          ></div>
        )}

        {/* Right Text */}
        <div
          className="myTitle6"
          style={{
            width: isMobile ? "100%" : "70%",
            marginLeft: isMobile ? "0" : "20px",
            textAlign: isMobile ? "center" : "left",
            color: "#fff",
          }}
        >
          <p dir={language === "ar" ? "rtl" : "ltr"}>
            {translatedContent.missionText}
          </p>
        </div>
      </div>
    </section>
  );
}
