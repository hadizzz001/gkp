'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from "../app/context/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";

const originalLabels = {
  home: "Home Page",
  about: "About Us",
  projects: "Projects",
  services: "Services",
  blogs: "Blogs",
  contact: "Contact Us",
};

export default function NavBar() {
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [labels, setLabels] = useState(originalLabels);

  useEffect(() => {
    const fetchTranslations = async () => {
      if (language === "en") {
        setLabels(originalLabels);
        return;
      }

      try {
        const entries = await Promise.all(
          Object.entries(originalLabels).map(async ([key, text]) => {
            const res = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ targetLanguage: language, text }),
            });

            const data = await res.json();
            return [key, data.translatedText || text];
          })
        );

        setLabels(Object.fromEntries(entries));
      } catch (err) {
        console.error("Translation failed", err);
        setLabels(originalLabels);
      }
    };

    fetchTranslations();
  }, [language]);

  return (
    <>
      <header
        className="w-full sticky top-0"
        style={{
          background: '#f5f5f5',
        }}
      >
        <div className="px-4 flex items-center text-black relative mynavidhere">
          {/* Hamburger - only on mobile */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex items-center space-x-2 sm:hidden"
          >
            <Menu className="w-6 h-6 stroke-[1]" id="myColorblack" />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 flex justify-center sm:justify-start items-center flex-1 sm:flex-none">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dnprilij7/image/upload/v1756377073/logo-removebg-preview_mctx7x.webp"
                alt="Logo"
                className="h-16"
                style={{ maxHeight: '60px' }}
              />
            </a>
          </div>

          {/* Desktop menu */}
          <nav
            className="hidden sm:flex flex-1 justify-end items-center gap-10"
            id="mynewNavNav"
          >
            <a href="/">{labels.home}</a>
            <a href="/about">{labels.about}</a>
            <a href="/projects">{labels.projects}</a>
            <a href="/services">{labels.services}</a>
            <a href="/blogs">{labels.blogs}</a>
            <a href="/contact">{labels.contact}</a>
            {/* Language Selector */}
            <LanguageDropdown />
          </nav>
        </div>

        {/* Sidebar Menu - only on mobile */}
        {menuOpen && (
          <div className="fixed top-0 left-0 h-full w-64 bg-[#f5f5f5] text-black shadow-lg z-50 sm:hidden flex flex-col">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4"
              aria-label="Close menu"
            >
              <X className="w-7 h-7 stroke-[1]" id="myColorblack" />
            </button>
            <nav className="flex flex-col mt-16 space-y-6 px-6 text-lg">
              <a href="/" onClick={() => setMenuOpen(false)}>{labels.home}</a>
              <a href="/about" onClick={() => setMenuOpen(false)}>{labels.about}</a>
              <a href="/services" onClick={() => setMenuOpen(false)}>{labels.services}</a>
              <a href="/projects" onClick={() => setMenuOpen(false)}>{labels.projects}</a>
              <a href="/blogs" onClick={() => setMenuOpen(false)}>{labels.blogs}</a>
              <a href="/contact" onClick={() => setMenuOpen(false)}>{labels.contact}</a>
              {/* Language Selector in mobile */}
              <LanguageDropdown />
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
