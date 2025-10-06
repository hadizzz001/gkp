"use client"; 

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "../app/context/LanguageContext"; // Import your language context

export default function Home() {
  const router = useRouter();
  const { language } = useLanguage(); // Get current language
  const [translatedContent, setTranslatedContent] = useState({
    aboutUs: "About us",
    description: `GKP is a leading company established in the United Arab Emirates
    during the year 2018 and in Saudi Arabia during 2024.
    Specializing in construction, fit-out, and contracting, with a diverse
    portfolio of services that include civil engineering, electro-mechanical
    engineering, furniture solutions, landscaping, and hardscaping.
    With a legacy of excellence and a commitment to innovation, we deliver
    customized solutions that meet the highest standards of quality and
    efficiency.`,
    learnMore: "Learn more",
  });

  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        aboutUs: "About us",
        description: `GKP is a leading company established in the United Arab Emirates
        during the year 2018 and in Saudi Arabia during 2024.
        Specializing in construction, fit-out, and contracting, with a diverse
        portfolio of services that include civil engineering, electro-mechanical
        engineering, furniture solutions, landscaping, and hardscaping.
        With a legacy of excellence and a commitment to innovation, we deliver
        customized solutions that meet the highest standards of quality and
        efficiency.`,
        learnMore: "Learn more",
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

  return (
    <>
      <section
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "40px 20px",
          marginTop: "6em",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1400px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "nowrap",
          }}
          className="content-container"
        >
          {/* Image Column */}
          <div
            style={{
              flex: "1 1 50%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="content-image"
          >
            <div
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dnprilij7/image/upload/v1759753157/18993ab1155e77a145a1020809166c8d_gzhtid.jpg')",
                backgroundAttachment: "inherit",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                minHeight: "600px",
              }}
            ></div>
          </div>

          {/* Text Column */}
          <div
            style={{
              flex: "1 1 50%",
              paddingLeft: "20px",
            }}
            className="content-text"
          >
            <h1 className="mynewpara">{translatedContent.aboutUs}</h1>
           <p className="mynewpara1 mb-5 mt-5" dir={language === "ar" ? "rtl" : "ltr"}>
  {translatedContent.description}
</p>
            <button id="mybbtn2" onClick={() => router.push("/about")}>
              {translatedContent.learnMore}
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .content-container {
            flex-direction: column;
          }
          .content-text, .content-image {
            width: 100% !important;
            padding-left: 0 !important;
          }
          .content-text {
            order: 2;
            margin-top: 20px;
          }
          .content-image {
            order: 1;
            min-height: 300px;
          }
        }
      `}</style>
    </>
  );
}
