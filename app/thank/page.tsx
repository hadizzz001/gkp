'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Page = () => {
  const { language } = useLanguage();

  const [translatedContent, setTranslatedContent] = useState({
    message: "Thank you for your request, we will contact you soon",
    returnHome: "Return home",
  });

  useEffect(() => {
    const translateContent = async () => {
      try {
        const translated = await Promise.all(
          Object.entries(translatedContent).map(async ([key, text]) => {
            const res = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ targetLanguage: language, text }),
            });
            const data = await res.json();
            return [key, data.translatedText || text];
          })
        );
        setTranslatedContent(Object.fromEntries(translated));
      } catch (err) {
        console.error("Translation failed", err);
      }
    };

    translateContent();
  }, [language]);

  return (
    <div className='container mt-40 mb-40' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h1 className='mynewpara'>
        <center>{translatedContent.message}</center>
      </h1>
      <br />
      <center>
        <a href="/">{translatedContent.returnHome}</a>
      </center>
    </div>
  );
};

export default Page;
