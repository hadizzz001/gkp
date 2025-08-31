"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#1e1e1e",
        display: "flex",
        justifyContent: "center",
        padding: "80px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          maxWidth: "1200px",
          alignItems: "center",
        }}
      >
        {/* Left Title */}
        <div
          style={{
            width: isMobile ? "100%" : "30%",
            display: "flex",
            justifyContent: "center",
            marginBottom: isMobile ? "20px" : "0",
          }}
        >
          <h1 className="myTitle5" style={{ textAlign: isMobile ? "center" : "left", color: "#fff" }}>
            Mission
          </h1>
        </div>

        {/* Vertical Line */}
        {!isMobile && (
          <div style={{ width: "2px", backgroundColor: "#dbdbdb", height: "100%" }}></div>
        )}

        {/* Right Text */}
        <div
        className="myTitle6"
          style={{
            width: isMobile ? "100%" : "70%",
            marginLeft: isMobile ? "0" : "20px",
            textAlign: isMobile ? "center" : "left",
            color: "#fff",
          }}
        >
          <p>
            To deliver world class construction that exceeds client expectations
            through innovation, precision, and quality.
          </p>
        </div>
      </div>
    </section>
  );
}
