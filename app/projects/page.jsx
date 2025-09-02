'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Gallery() {
  const router = useRouter();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        // Take only the first 3 items
        const galleryImages = data.map(item => ({
          src: item.img[0], // get the first image
          title: item.title,
        }));

        setImages(galleryImages);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div
        className="mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="mynewpara mt-10">Our projects</h1>
      </div>

      <section className="custom-gallery">
        {images.map((img, index) => (
          <div className="custom-gallery-item" key={index}>
            <img src={img.src} alt={img.title} className="custom-gallery-img" />
            <div className="custom-gallery-overlay" />
            <p className="mynewpara4">{img.title}</p>
          </div>
        ))}
      </section>

    
    </>
  );
}
