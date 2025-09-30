"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../app/context/LanguageContext"; // ✅ Import context

export default function Home() {
  const { language } = useLanguage(); // ✅ Current language
  const [translatedContent, setTranslatedContent] = useState({
    partnershipTitle: "THE POWER OF PARTNERSHIP",
    partnershipText: `GKP Development & Contracting has entered into a strategic joint venture with ITC
Interiors, bringing together regional construction and fit-out expertise with global
interior contracting excellence. This partnership combines GKP's strong regional
presence, multidisciplinary construction capabilities, and deep understanding of local
regulations with ITC's global reach, robust procurement network, and proven FF&E/OS&E
project delivery experience.

Together, we offer several key advantages:
• Integrated End-to-End Solutions: From design concept to final installation, clients
will benefit from a seamless approach covering all aspects of interior and construction
projects.
- Global Quality, Local Expertise: While ITC's international standards are applied,
GKP's intimate knowledge of local markets ensures that each project meets global
benchmarks, all while being tailored to the region's needs.
- Operational Efficiency: This collaboration enhances our ability to mobilize quickly,
optimize supply chains, and implement cost-effective project management practices across
Saudi Arabia and the GCC.
- Shared Vision for Excellence: Both GKP and ITC are deeply committed to delivering
innovative, high-quality results that transform spaces and bring client visions to life.

This partnership lays the groundwork for impactful growth, especially within Saudi
Arabia's rapidly evolving construction and development landscape. With GKP's regional
leadership and ITC's international expertise, we are equipped to deliver exceptional,
future-proof projects—driven by innovation, backed by experience, and committed to
shaping a better built environment.`,
  });

  // ✅ Handle translation
  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        partnershipTitle: "THE POWER OF PARTNERSHIP",
        partnershipText: translatedContent.partnershipText,
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
      }
    };

    translateContent();
  }, [language]);

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <img
            src="https://res.cloudinary.com/dnprilij7/image/upload/v1759233934/grp_nrzpbf.jpg"
            alt="Logo"
            style={{
              width: "550px",
              marginBottom: "20px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <h1 className="mynewpara mb-5">
            {translatedContent.partnershipTitle}
          </h1>
          <p
            className="mynewpara1"
            style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {translatedContent.partnershipText}
          </p>
        </div>
      </section>
    </>
  );
}
