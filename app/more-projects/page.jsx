"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext"; // Import language context

const ProjectsList = () => {
  const { language } = useLanguage(); // Get current language
  const [translatedProjects, setTranslatedProjects] = useState([]);

  const projects = [
    "Offices Retail & Restaurants Entertainment venues",
    "Governmental buildings",
    "Amiri Guard residence, Qatar",
    "Commercial Interiors Palaces",
    "Private Villa complexes Residential Interiors",
    "Al-Rayyan Palace, Qatar",
    "Sheraton Hotel, Qatar",
    "Al-Rayyan Palace, Qatar",
    "Labors camp, 10,000 labors capacity, Qatar",
    "Bahri Villa Private, Qatar",
    "Prime Minister Office of Macedonia",
    "Ifran Palace, Morocco",
    "Prime Minister Office - Qatar",
    "Al-Wajba Palace, Qatar",
    "Medical Center, Italy",
    "Al-Rayyan Towers - Doha",
    "Crowne Hotel, Qatar",
    "West Bay Villa, Qatar",
    "2025",
    "Projects We Worked On",
    "CONSTRUCTIONS & LANDSCAPING",
    "HOSPITALS, CLINICS, LABS & EQUIPMENTS",
    "HOMOGENEOUS PVC FLOORING, FIT OUT & EQUIPMENT",
    "STADIUMS - GYMS",
    "FITOUT & FURNITURE",
    "HOTEL PROJECTS",
  ];

  // 🔹 Translation logic (same as your Home component)
  useEffect(() => {
    const translateProjects = async () => {
      try {
        const translated = await Promise.all(
          projects.map(async (text) => {
            const res = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ targetLanguage: language, text }),
            });

            const data = await res.json();
            return data.translatedText || text;
          })
        );

        setTranslatedProjects(translated);
      } catch (err) {
        console.error("Translation failed", err);
        setTranslatedProjects(projects); // fallback
      }
    };

    translateProjects();
  }, [language]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {language === "ar" ? "المزيد من المشاريع التي عملنا عليها" : "More Projects We Worked On"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {translatedProjects.map((project, index) => (
          <div key={index} className="p-4 bg-[#07ae60]">
            <p
              className="font-bold text-lg text-white uppercase"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {project}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
