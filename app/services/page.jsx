'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Gallery() {
  const router = useRouter();
  const [columns, setColumns] = useState("repeat(4, 1fr)");
  const [services, setServices] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setColumns(window.innerWidth < 768 ? "1fr" : "repeat(4, 1fr)");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

useEffect(() => {
  const fetchServices = async () => {
    try {
      const res = await fetch("/api/services");
      const data = await res.json();
      setServices(data); // <-- only first 4 items
    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
  };
  fetchServices();
}, []);


  const images = [
    "https://res.cloudinary.com/dnprilij7/image/upload/v1756572733/74f558_b261ab6879d14b0bbc9800ec41ba91fd_mv2_d_6208_4258_s_4_2_hpgucz.avif",
    "https://res.cloudinary.com/dnprilij7/image/upload/v1756628393/74f558_d26f60b4ce744d9c9e82426a09cd84b5_mv2_d_5616_3744_s_4_2_qfvjpy.avif",
    "https://res.cloudinary.com/dnprilij7/image/upload/v1756628393/74f558_ac023650dfaf4026972886b8c33e06e9_mv2_d_4000_2983_s_4_2_b6yv1p.avif",
    "https://res.cloudinary.com/dnprilij7/image/upload/v1756628516/Construction_civil_engineer_technician_and_architect_working_o82ryr.webp"
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 className="mynewpara mt-10">Our services</h1>
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
          // Determine which row this service belongs to (2 services per row)
          const row = Math.floor(index / 2);
          const isEvenRow = row % 2 === 1; // swap for 2nd row, 4th row...

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
            >
              <p className="mynewpara2">{service.title}</p>
              <p className="mynewpara3">{service.description}</p>
            </div>
          );

          // Swap order for even rows
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
