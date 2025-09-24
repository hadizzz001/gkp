'use client';
import { useState } from "react";
import { useLanguage } from "../app/context/LanguageContext";
import 'flag-icon-css/css/flag-icons.min.css'; // ✅ Import flags

const LANGUAGES = {
  en: { label: "English", countryCode: "gb" }, 
  ar: { label: "Arabic", countryCode: "sa" }, 
};

export default function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="dropdown" style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "0px 10px",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          fontSize: "15px",
          textTransform: "uppercase",
        }}
      >
        <span
          className={`flag-icon flag-icon-${LANGUAGES[language].countryCode}`}
          style={{ marginRight: "8px", fontSize: "20px" }}
        ></span> 
      </button>

      {open && (
        <ul
          style={{
            listStyle: "none",
            position: "absolute",
            backgroundColor: "white",
            padding: "0.5em",
            margin: 0,
            zIndex: 1000,
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          {Object.entries(LANGUAGES).map(([code, { label, countryCode }]) => (
            <li key={code}>
              <button
                onClick={() => handleLanguageChange(code)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "0.5em",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <span
                  className={`flag-icon flag-icon-${countryCode}`}
                  style={{ marginRight: "8px", fontSize: "20px", color:"#222" }}
                ></span>
            
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
