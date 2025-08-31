"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Gallery() {
  const router = useRouter();
  const [columns, setColumns] = useState("repeat(4, 1fr)");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns("1fr"); // Stack on mobile
      } else {
        setColumns("repeat(4, 1fr)"); // 4 columns on PC
      }
    };

    handleResize(); // set initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        {/* Row 1 */}
        <div style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
          <img
            src="https://res.cloudinary.com/dnprilij7/image/upload/v1756572733/74f558_b261ab6879d14b0bbc9800ec41ba91fd_mv2_d_6208_4258_s_4_2_hpgucz.avif"
            alt="Gallery"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
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
          <p className="mynewpara2">Construction</p>
          <p className="mynewpara3">
            From concept to completion, we deliver comprehensive construction
            solutions for residential, commercial, and industrial projects.
          </p>
        </div>

        <div style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
          <img
            src="https://res.cloudinary.com/dnprilij7/image/upload/v1756628393/74f558_d26f60b4ce744d9c9e82426a09cd84b5_mv2_d_5616_3744_s_4_2_qfvjpy.avif"
            alt="Gallery"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
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
          <p className="mynewpara2">Fit-out</p>
          <p className="mynewpara3">
            We create functional and aesthetically pleasing interiors customized
            to our clients' needs.
          </p>
        </div>

        {/* Row 2 */}
        <div
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
          <p className="mynewpara2">Contracting</p>
          <p className="mynewpara3">
            As experienced contractors, we handle all aspects of construction
            and infrastructure development.
          </p>
        </div>

        <div style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
          <img
            src="https://res.cloudinary.com/dnprilij7/image/upload/v1756628393/74f558_ac023650dfaf4026972886b8c33e06e9_mv2_d_4000_2983_s_4_2_b6yv1p.avif"
            alt="Gallery"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
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
          <p className="mynewpara2">Civil Engineering</p>
          <p className="mynewpara3">
            We deliver innovative civil engineering solutions, ensuring the
            successful planning, design, and execution of infrastructure
            projects.
          </p>
        </div>

        <div style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
          <img
            src="https://res.cloudinary.com/dnprilij7/image/upload/v1756628516/Construction_civil_engineer_technician_and_architect_working_o82ryr.webp"
            alt="Gallery"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      <div
        className="mb-5 mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button id="mybbtn2" onClick={() => router.push("/services")}>
          More services
        </button>
      </div>
    </>
  );
}
