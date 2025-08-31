'use client';

import { useState } from 'react';
import {
  Menu,
  X,
} from 'lucide-react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="w-full sticky top-0"
        style={{
          background: '#f5f5f5',
        }}
      >
        <div className="px-4 flex items-center text-black relative mynavidhere">
          {/* Hamburger - only on mobile, left */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex items-center space-x-2 sm:hidden"
          >
            <Menu className="w-6 h-6 stroke-[1]" id="myColorblack" />
          </button>

          {/* Logo - center on mobile, left on desktop */}
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

          {/* Desktop menu - pushed to the right on PC */}
          <nav
            className="hidden sm:flex flex-1 justify-end items-center gap-10"
            id="mynewNavNav"
          >
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/projects" className="hover:underline">Projects</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/blogs" className="hover:underline">Blogs</a>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </nav>
        </div>

        {/* Fullscreen Menu - only on mobile */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#f5f5f5] text-black flex flex-col items-center justify-center z-50 sm:hidden">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-10 right-4"
              aria-label="Close menu"
            >
              <X className="w-8 h-8 stroke-[1]" id="myColorblack" />
            </button>
            <nav className="flex flex-col items-center gap-6 mt-12 text-3xl font-bold">
              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</a>
              <a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
