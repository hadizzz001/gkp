"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section
        data-image-width={1980}
        data-image-height={1214}
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
            maxWidth: "1200px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap", // important for wrapping
          }}
        >
          {/* Left Side - Text */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            style={{
              width: "50%",
              paddingRight: "20px",
            }}
            className="content-text"
          >
            <p className="myTitle4 mb-2">About us</p>
            <h1 className="myTitle3 mb-3">GKP</h1>
            <p className="myGray" style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
              Rooted in the heart of Spain, Il Profvmo is a celebration of timeless elegance and Mediterranean soul.

              At Il Profvmo, we believe fragrance is more than a scent — it’s a memory, a mood, a moment captured in time.

              Founded with a passion for the art of perfumery, our mission is to craft unique, timeless fragrances that speak to the soul. Each bottle is a journey — blending the finest ingredients from around the world to create perfumes that are as bold, elegant, and unforgettable as you are.

              From delicate florals to deep, sensual notes, our curated collections are designed to inspire self-expression and evoke emotion with every spritz.

              Welcome to a world where scent becomes story.
              Welcome to Il Profvmo.

              GKP
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="content-image"
          >
            <img
              src="https://res.cloudinary.com/dzfuvfl10/image/upload/v1756055316/f8a09d1e-ed85-4ee8-a313-438af1d90f11_yvel0n.webp"
              alt="Company"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .content-text, .content-image {
            width: 100% !important;
            padding-right: 0 !important;
          }
          .content-text {
            order: 2; /* text goes under image */
            margin-top: 20px;
          }
          .content-image {
            order: 1; /* image stays first */
          }
        }
      `}</style>
    </>
  );
}
