"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create a context for the language state
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Set initial language state based on localStorage or default to "en"
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language");
      return savedLanguage || "en"; // Return saved language or "en" as fallback
    }
    return "en"; // Default to "en" if no window or localStorage is available
  });

  // Effect to save language to localStorage whenever it changes
  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);