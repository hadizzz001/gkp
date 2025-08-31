"use client";

export default function Home() {
  return (
    <>
      <section
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
            maxWidth: "1400px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "nowrap",
          }}
          className="content-container"
        >
          {/* Image Column */}
          <div
            style={{
              flex: "1 1 50%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="content-image"
          >
            <div
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dnprilij7/image/upload/v1756635661/1-slider-1-scaled_vjvcgh.webp')",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                minHeight: "700px", // smaller for mobile
              }}
            ></div>
          </div>

          {/* Text Column */}
          <div
            style={{
              flex: "1 1 50%",
              paddingLeft: "20px",
            }}
            className="content-text"
          >
            <h1 className="mynewpara">About us</h1>
            <p className="mynewpara1 mb-5 mt-5">
              GKP is a leading company established in the United Arab Emirates
              during the year 2018 and in Saudi Arabia during 2024.
              Specializing in construction, fit-out, and contracting, with a diverse
              portfolio of services that include civil engineering, electro-mechanical
              engineering, furniture solutions, landscaping, and hardscaping.
              With a legacy of excellence and a commitment to innovation, we deliver
              customized solutions that meet the highest standards of quality and
              efficiency.
            </p>
            <button id="mybbtn2" onClick={() => router.push("/about")}>
              Learn more
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .content-container {
            flex-direction: column; /* stack columns */
          }
          .content-text, .content-image {
            width: 100% !important;
            padding-left: 0 !important;
          }
          .content-text {
            order: 2;
            margin-top: 20px;
          }
          .content-image {
            order: 1;
            min-height: 300px; /* smaller image on mobile */
          }
        }
      `}</style>
    </>
  );
}
