'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const router = useRouter();
  const { language } = useLanguage();
  const [columns, setColumns] = useState("repeat(4, 1fr)");
  const [services, setServices] = useState([]);

  // Responsive columns
  useEffect(() => {
    const handleResize = () => {
      setColumns(window.innerWidth < 768 ? "1fr" : "repeat(4, 1fr)");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch and translate services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();

        // Translate title and description for each service
        const translatedServices = await Promise.all(
          data.map(async (service) => {
            let translatedTitle = service.title;
            let translatedDescription = service.description;

            try {
              // Translate title
              const titleRes = await fetch("/api/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ targetLanguage: language, text: service.title }),
              });
              const titleData = await titleRes.json();
              translatedTitle = titleData.translatedText || service.title;

              // Translate description
              const descRes = await fetch("/api/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ targetLanguage: language, text: service.description }),
              });
              const descData = await descRes.json();
              translatedDescription = descData.translatedText || service.description;
            } catch (err) {
              console.error("Translation failed for service:", service.title, err);
            }

            return {
              ...service,
              title: translatedTitle,
              description: translatedDescription,
            };
          })
        );

        setServices(translatedServices);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, [language]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 className="mynewpara mt-10">{language === "ar" ? "خدماتنا" : "Our services"}</h1>
      </div>

      <section
        className="mt-5"
        style={{
          display: "grid",
          gridTemplateColumns: columns,
          width: "100%",
          padding: "20px",
        }}
      >
        {services.map((service, index) => {
          const row = Math.floor(index / 2);
          const isEvenRow = row % 2 === 1;

          const imageCell = (
            <div key={`img-${index}`} style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
              <img
                src={service.img[0]}
                alt={service.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          );

          const textCell = (
            <div
              key={`text-${index}`}
              style={{
                aspectRatio: "1 / 1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#dbdbdb",
                padding: "1rem",
              }}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <p className="mynewpara2">{service.title}</p>
              <p className="mynewpara3">{service.description}</p>
            </div>
          );

          return isEvenRow ? (
            <>
              {textCell}
              {imageCell}
            </>
          ) : (
            <>
              {imageCell}
              {textCell}
            </>
          );
        })}
      </section>
    </>
  );
}
