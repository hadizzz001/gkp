"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../app/context/LanguageContext"; // ✅ Import context
import { ShieldCheck, Star, Lightbulb, Users, Heart } from "lucide-react";

const initialValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We uphold the highest ethical standards, fostering trust and transparency in every relationship.",
  },
  {
    icon: Star,
    title: "Excellence",
    text: "We are committed to delivering superior quality and exceeding expectations in all our projects.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace innovative technologies and creative approaches to drive efficiency and value.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "We believe in the power of teamwork, working closely with clients, partners, and stakeholders to achieve common goals.",
  },
  {
    icon: Heart,
    title: "Safety",
    text: "Ensuring the safety and well-being of our employees, partners, and the communities we serve is a core priority.",
  },
];

export default function ValuesPage() {
  const { language } = useLanguage(); // ✅ Current language
  const [translatedValues, setTranslatedValues] = useState(initialValues);
  const [title, setTitle] = useState("Our Core Values");

  // ✅ Handle translation
  useEffect(() => {
    const translateContent = async () => {
      try {
        // Translate section title
        const resTitle = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ targetLanguage: language, text: "Our Core Values" }),
        });
        const titleData = await resTitle.json();
        setTitle(titleData.translatedText || "Our Core Values");

        // Translate each value
        const translated = await Promise.all(
          initialValues.map(async (item) => {
            const resTitle = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ targetLanguage: language, text: item.title }),
            });
            const resText = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ targetLanguage: language, text: item.text }),
            });

            const dataTitle = await resTitle.json();
            const dataText = await resText.json();

            return {
              ...item,
              title: dataTitle.translatedText || item.title,
              text: dataText.translatedText || item.text,
            };
          })
        );

        setTranslatedValues(translated);
      } catch (err) {
        console.error("Translation failed", err);
        setTranslatedValues(initialValues); // fallback
        setTitle("Our Core Values");
      }
    };

    translateContent();
  }, [language]);

  return (
    <section
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "40px 20px",
        textAlign: "left",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        <h1 className="mynewpara mb-5" style={{ color: "#07ae60" }}>
          {title}
        </h1>

        <div className="flex flex-col gap-8">
          {translatedValues.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <Icon size={32} style={{ color: "#07ae60" }} />
                <div>
                  <h2
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#07ae60" }}
                  >
                    {item.title}
                  </h2>
                  <p className="text-gray-700" dir={language === "ar" ? "rtl" : "ltr"}>
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
