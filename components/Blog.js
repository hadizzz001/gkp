'use client';

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

export default function BlogSection() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data.slice(0, 6)); // only first 8 items
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Remove HTML tags and truncate description to 8 words
  const truncateDescription = (desc) => {
    if (!desc) return "";
    const plainText = desc.replace(/<[^>]+>/g, ""); // remove HTML tags
    const words = plainText.split(" ");
    return words.slice(0, 8).join(" ") + (words.length > 8 ? "..." : "");
  };

  // Format date like 2/Sep/2025
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }); // e.g., "Sep"
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <div className="mt-5 flex justify-center items-center">
        <h1 className="mynewpara mt-10">Our blogs</h1>
      </div>

      <section className="w-full px-6 py-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
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
    <div
      className="overflow-hidden cursor-pointer"
      onClick={() => router.push(`/blog?id=${blog._id}`)}
    >
      <img
        src={blog.img[0]}
        alt={blog.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <p className="mynewpara2">{blog.title}</p>
        <p className="mynewpara3">{truncateDescription(blog.description)}</p>
        <p className="text-sm text-gray-500 mt-2">{formatDate(blog.date)}</p>
      </div>
    </div>
  </SwiperSlide>
))}

        </Swiper>
      </section>

      <div className="mb-5 mt-5 flex justify-center items-center">
        <button id="mybbtn2" onClick={() => router.push("/blogs")}>
          More blogs
        </button>
      </div>
    </>
  );
}
