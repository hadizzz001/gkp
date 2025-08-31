"use client";
 

export default function Gallery() {
  const images = [
    {
      src: "https://res.cloudinary.com/dnprilij7/image/upload/v1756629742/15a_wjbhpt.webp",
      title: "Private Villas",
    },
    {
      src: "https://res.cloudinary.com/dnprilij7/image/upload/v1756629742/15z_tberqv.webp",
      title: "Commercial building",
    },
    {
      src: "https://res.cloudinary.com/dnprilij7/image/upload/v1756629742/15_krotyw.webp",
      title: "Landscape",
    },
  ];

  return (
    <>
    
    <div
    className="  mt-5"
  style={{
    display: "flex",
    justifyContent: "center", // horizontal center
    alignItems: "center", // vertical center 
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

    <div
    className="mb-5 mt-5"
  style={{
    display: "flex",
    justifyContent: "center", // horizontal center
    alignItems: "center", // vertical center 
  }}
>
       <button
        id="mybbtn2"
        onClick={() => router.push("/projects")}
      >
        More projects
      </button>
</div>
      </>
  );
}
