"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext"; // ✅ import language context

export default function BlogSection() {
  const router = useRouter();
  const { language } = useLanguage(); // ✅ get current language
  const [blogs, setBlogs] = useState([]);
  const [translatedBlogs, setTranslatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        const firstEight = data;
        setBlogs(firstEight);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // ✅ translate titles and truncated descriptions whenever blogs or language change
  useEffect(() => {
    if (!blogs || blogs.length === 0) return;

    const translateBlogs = async () => {
      try {
        const translated = await Promise.all(
          blogs.map(async (blog) => {
            const plainDescription = blog.description.replace(/<[^>]+>/g, ""); // remove HTML
            const truncated = plainDescription.split(" ").slice(0, 8).join(" ") + 
              (plainDescription.split(" ").length > 8 ? "..." : "");

            const translations = await Promise.all(
              ["title", "description"].map(async (key) => {
                const text = key === "title" ? blog.title : truncated;
                const res = await fetch("/api/translate", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ targetLanguage: language, text }),
                });
                const data = await res.json();
                return [key, data.translatedText || text];
              })
            );

            const translatedContent = Object.fromEntries(translations);
            return { ...blog, ...translatedContent };
          })
        );

        setTranslatedBlogs(translated);
      } catch (err) {
        console.error("Translation failed", err);
        setTranslatedBlogs(
          blogs.map((b) => ({
            ...b,
            title: b.title,
            description: b.description.replace(/<[^>]+>/g, "").split(" ").slice(0, 8).join(" ") + 
              (b.description.split(" ").length > 8 ? "..." : ""),
          }))
        );
      }
    };

    translateBlogs();
  }, [blogs, language]);

  // Format date like 2/Sep/2025
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString(language, { month: "short" }); // translated month
  const year = date.getFullYear();
  return `${day}/${month}/${year}`; // force day/month/year order
};

  return (
    <>
      <div className="mt-5 flex justify-center items-center">
        <h1 className="mynewpara mt-10">
          {language === "ar" ? "مدونتنا" : "Our blogs"}
        </h1>
      </div>

      <section className="w-full px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {translatedBlogs.map((blog) => (
            <div
              key={blog._id}
              className="overflow-hidden cursor-pointer transition"
              onClick={() => router.push(`/blog?id=${blog._id}`)}
            >
              <img
                src={blog.img[0]}
                alt={blog.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <p className="mynewpara2">{blog.title}</p>
                <p className="mynewpara3" dir={language === "ar" ? "rtl" : "ltr"}>
                  {blog.description}
                </p>
               <p className="text-sm text-gray-500 mt-2" dir={language === "ar" ? "rtl" : "ltr"}>{formatDate(blog.date)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
