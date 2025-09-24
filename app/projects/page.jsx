'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext"; // Import your language context

export default function Gallery() {
  const router = useRouter();
  const { language } = useLanguage(); // Get current language
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        // Map images with translation
        const galleryImages = await Promise.all(
          data.map(async (item) => {
            // Translate the title
            let translatedTitle = item.title;
            try {
              const translationRes = await fetch("/api/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ targetLanguage: language, text: item.title }),
              });
              const translationData = await translationRes.json();
              translatedTitle = translationData.translatedText || item.title;
            } catch (err) {
              console.error("Translation failed for title:", item.title, err);
            }

            return {
              id: item._id,
              src: item.img[0],
              title: translatedTitle,
            };
          })
        );

        setImages(galleryImages);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [language]); // Re-run when language changes

  return (
    <div className="container mx-auto px-4">
      {/* Title */}
      <div className="mt-5 flex justify-center items-center">
        <h1 className="mynewpara mt-10">{language === "ar" ? "مشاريعنا" : "Our projects"}</h1>
      </div>

      {/* Grid */}
      <section className="custom-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {images.map((img, index) => (
          <div
            className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
            key={index}
            onClick={() => router.push(`/project?id=${img.id}`)}
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Always visible black overlay */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Title centered on image */}
            <p
              className="mynewpara4 absolute inset-0 flex items-center justify-center text-white text-lg font-semibold z-10"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {img.title}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
