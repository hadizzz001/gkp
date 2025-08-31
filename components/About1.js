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
          {/* Text Column (LEFT) */}
          <div
            style={{
              flex: "1 1 50%",
              paddingRight: "40px",
            }}
            className="content-text"
          >
            <h1 className="mynewpara">Vision</h1>
            <p className="mynewpara1 mb-5 mt-5">
              To be the trusted leader in the construction and
              contracting industry, recognized for our ability to
              transform ideas into reality and for our dedication
              to shaping a better future.
            </p> 
          </div>

          {/* Image Column (RIGHT) */}
          <div
            style={{
              flex: "1 1 50%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            className="content-image"
          >
            <div
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dnprilij7/image/upload/v1756635753/b4c77e_0dd8413723734181869393a9a3a2bf4f_mv2_zesfer.avif')",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                minHeight: "700px",
              }}
            ></div>
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
            padding-right: 0 !important;
          }
          .content-text {
            order: 2; /* text goes under image */
            margin-top: 20px;
          }
          .content-image {
            order: 1; /* image stays first */
            min-height: 300px; /* smaller image on mobile */
          }
        }
      `}</style>
    </>
  );
}
