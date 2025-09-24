'use client';
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  const { language } = useLanguage();

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState(""); // API title
  const [translatedTitle, setTranslatedTitle] = useState("");

  // Fetch API data
  useEffect(() => {
    const fetchProducts = async () => {
      if (!search) return;

      try {
        const res = await fetch(`/api/products/${search}`);
        const data = await res.json();

        if (data.length > 0) {
          setTitle(data[0].title); // Set API title
          const galleryImages = data.flatMap(item =>
            item.img.map(src => ({
              src,
              title: item.title,
            }))
          );
          setImages(galleryImages);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [search]);

  // Translate API title
  useEffect(() => {
    const translateTitle = async () => {
      if (!title) return;

      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ targetLanguage: language, text: title }),
        });
        const data = await res.json();
        setTranslatedTitle(data.translatedText || title);
      } catch (err) {
        console.error("Translation failed", err);
        setTranslatedTitle(title);
      }
    };

    translateTitle();
  }, [title, language]);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem", textAlign: "center" }}>
      {/* Title */}
      <h1 className="mynewpara" style={{ marginTop: "40px" }} dir={language === "ar" ? "rtl" : "ltr"}>
        {translatedTitle}
      </h1>

      {/* Gallery */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 250px)",
          gap: "8px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {images.map((img, index) => (
          <div key={index} style={{ width: "250px", height: "250px", overflow: "hidden", position: "relative" }}>
            <img
              src={img.src}
              alt={img.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </section>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            grid-template-columns: 1fr !important;
          }
          div[style*="width: 250px"] {
            width: 100% !important;
            height: auto !important;
          }
          img {
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
