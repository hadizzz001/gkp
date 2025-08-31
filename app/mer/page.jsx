"use client";

export default function Home() {
  const sections = [
    {
      title: "FANCY ROTATING STAND METAL LED LIGHT 98 PCS",
      description:
        "COUNTERTOP IMPULSE SALES HEAVY DUTY GOOD FOR PHARMACIES DEPARTMENT STORES MOBILE SHOPS AND HIGH TRAFFIC SHOPS FITS AT ANY RETAIL FORMAT",
      image:
        "https://res.cloudinary.com/dciku5di2/image/upload/v1755016483/001_wurlgv.webp",
    },
    {
      title: "CHIC SLIM METAL 42 PCS",
      description:
        "COUNTERTOP IMPULSE SALES PRACTICAL GOOD FOR HAIR SALONS, SPA’S GYMS AND RELATIVELY MEDIUM TRAFIC STORES",
      image:
        "https://res.cloudinary.com/dciku5di2/image/upload/v1755016483/002_vvnzau.webp",
    },
    {
      title: "MINI CHIC SLIM METAL 26 PCS",
      description:
        "COUNTERTOP IMPULSE SALES PRACTICAL HANDY GOOD FOR SMALL SHOPS, HAIR SALONS, SPA’S",
      image:
        "https://res.cloudinary.com/dciku5di2/image/upload/v1755016483/003_nhfgdm.webp",
    },
    {
      title: "BASKET METAL 40 PCS",
      description:
        "COUNTERTOP IMPULSE SALES PRACTICAL HANDY GOOD FOR GYMS BEACH CLUBS AND VIP AREAS",
      image:
        "https://res.cloudinary.com/dciku5di2/image/upload/v1755016483/004_kprgp4.webp",
    },
    {
      title: "MINI FRESH BASKET METAL 27 PCS",
      description:
        "COUNTERTOP IMPULSE SALES PRACTICAL HANDY GOOD FOR HAIR SALONS, SPA’S GYMS, BEACH CLUBS ONE GENDER SOLUTION",
      image:
        "https://res.cloudinary.com/dciku5di2/image/upload/v1755016484/005_g08rtv.webp",
    },
    {
      title: "120 PCS",
      description:
        "GOOD AS BACKUP STOCK PERFUME STORES, PHARMACIES, DEPARTMENT STORES, AND SUPERMARKETS",
      image:
        "https://res.cloudinary.com/dciku5di2/image/upload/v1755016484/006_dag3aq.webp",
    },
    {
      title: "SPECIAL COLLECTION 24 PCS",
      description:
        "SPECIAL COLLECTION 24 PCS HIGH END SPECIAL COLLECTION PERFUME STORES CIGAR LOUNGE SPECIAL EVENT HIGH END SPA’S",
      image:
        "https://res.cloudinary.com/dciku5di2/image/upload/v1755016483/007_ottaow.webp",
    },
    {
      title: "OFFICE COLLECTION 5 PCS",
      description:
        "DAILY PERSONAL USE ALL DAY SCENTED GOOD FOR OFFICES AND HOME USE",
      image:
        "https://res.cloudinary.com/dciku5di2/image/upload/v1755016483/008_upcl6s.webp",
    },
  ];

  const whatsappNumber = "966556500026";

  return (
    <>
      {sections.map((section, index) => {
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=I am interesting on ${encodeURIComponent(
          section.title
        )}`;
        return (
          <section
            key={index}
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 20px",
              boxSizing: "border-box",
            }}
          >
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                width: "100%",
                maxWidth: "1200px",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {/* Right Side - Image */}
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="content-image"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>

              {/* Left Side - Text */}
              <div
                style={{
                  width: "40%",
                }}
                className="content-text"
              >
                <h5
                  className="myGray mytitle2"
                  style={{ marginBottom: "20px" }}
                >
                  {section.title}
                </h5>
                <p
                  className="myGray"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    textAlign: "justify",
                  }}
                >
                  {section.description}
                </p>
              </div>
            </a>
          </section>
        );
      })}

      <style>{`
        @media (max-width: 768px) {
          .content-text, .content-image {
            width: 100% !important;
            padding-right: 0 !important;
          }
          .content-text {
            order: 2;
            margin-top: 20px;
          }
          .content-image {
            order: 1;
          }
        }
      `}</style>
    </>
  );
}
