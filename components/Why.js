'use client';
import React, { useState, useEffect } from 'react';
import { Users, Target, CheckCircle, Leaf } from 'lucide-react';
import { useLanguage } from '../app/context/LanguageContext'; // import your context

const Why = () => {
  const { language } = useLanguage(); // get current language
  const [translatedContent, setTranslatedContent] = useState({
    title: 'Why us?',
    expertTeamTitle: 'Expert Team',
    expertTeamDesc: 'Highly skilled professionals with years of industry experience.',
    clientCentricTitle: 'Client-Centric Approach',
    clientCentricDesc: 'Solutions customized to your unique needs and vision.',
    provenTitle: 'Proven Track Record',
    provenDesc: 'A history of successful projects delivered on time and within budget.',
    sustainabilityTitle: 'Sustainability Focus',
    sustainabilityDesc: 'Commitment to environmentally friendly practices.',
  });

  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = { ...translatedContent };

      try {
        const translated = await Promise.all(
          Object.entries(contentToTranslate).map(async ([key, text]) => {
            const res = await fetch('/api/translate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ targetLanguage: language, text }),
            });

            const data = await res.json();
            return [key, data.translatedText || text];
          })
        );

        setTranslatedContent(Object.fromEntries(translated));
      } catch (err) {
        console.error('Translation failed', err);
        setTranslatedContent(contentToTranslate); // fallback
      }
    };

    translateContent();
  }, [language]);

  return (
    <section className="text-gray-700 body-font">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className="mynewpara mt-10">{translatedContent.title}</h1>
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          {/* Expert Team */}
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <Users size={64} color="#07ae60" className="mb-3" />
              </div>
              <p className="mynewpara2">{translatedContent.expertTeamTitle}</p>
              <p className="mynewpara1c">{translatedContent.expertTeamDesc}</p>
            </div>
          </div>

          {/* Client-Centric */}
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <Target size={64} color="#07ae60" className="mb-3" />
              </div>
              <p className="mynewpara2">{translatedContent.clientCentricTitle}</p>
              <p className="mynewpara1c">{translatedContent.clientCentricDesc}</p>
            </div>
          </div>

          {/* Proven Track Record */}
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <CheckCircle size={64} color="#07ae60" className="mb-3" />
              </div>
              <p className="mynewpara2">{translatedContent.provenTitle}</p>
              <p className="mynewpara1c">{translatedContent.provenDesc}</p>
            </div>
          </div>

          {/* Sustainability */}
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <Leaf size={64} color="#07ae60" className="mb-3" />
              </div>
              <p className="mynewpara2">{translatedContent.sustainabilityTitle}</p>
              <p className="mynewpara1c">{translatedContent.sustainabilityDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
