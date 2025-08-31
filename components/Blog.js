"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Blog Post One",
      desc: "This is the first blog post description.",
      img: "https://res.cloudinary.com/dnprilij7/image/upload/v1756386034/74f558_66357e0ecfea4c86b2ea0bce6e8a9447_mv2_klaunl.webp",
    },
    {
      id: 2,
      title: "Blog Post Two",
      desc: "This is the second blog post description.",
      img: "https://res.cloudinary.com/dnprilij7/image/upload/v1756386034/74f558_66357e0ecfea4c86b2ea0bce6e8a9447_mv2_klaunl.webp",
    },
    {
      id: 3,
      title: "Blog Post Three",
      desc: "This is the third blog post description.",
      img: "https://res.cloudinary.com/dnprilij7/image/upload/v1756386034/74f558_66357e0ecfea4c86b2ea0bce6e8a9447_mv2_klaunl.webp",
    },
    {
      id: 4,
      title: "Blog Post Four",
      desc: "This is the fourth blog post description.",
      img: "https://res.cloudinary.com/dnprilij7/image/upload/v1756386034/74f558_66357e0ecfea4c86b2ea0bce6e8a9447_mv2_klaunl.webp",
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
  <h1 className="mynewpara mt-10">Our blogs</h1>
</div>
    <section className="w-full px-6 py-10"> 

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500, // 2.5s per slide
          disableOnInteraction: false,
        }} 
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className=" overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <p className="mynewpara2">{blog.title}</p>
                <p className="mynewpara3">{blog.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
        onClick={() => router.push("/blogs")}
      >
        More blogs
      </button>
</div>

</>
  );
}
