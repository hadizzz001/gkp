'use client';
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { language } = useLanguage(); // Get current language
  const [translatedContent, setTranslatedContent] = useState({
    title: "Terms and Conditions",
    text: `By using this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern GKP’s relationship with you in relation to this website. The term GKP or ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website.

Usage: The content of the pages of this website is for your general information and use only. It is subject to change without notice.
Accuracy: Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
Liability: Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
Intellectual Property: This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
Unauthorized Use: Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
Links: From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
By using this website, you signify your acceptance of these terms and conditions. If you do not agree to these terms, please do not use our website.`
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
    <>
      <link rel="stylesheet" href="css/nicepage.css" media="screen" />
      <link rel="stylesheet" href="css/nicepage-site.css" media="screen" />
      <link rel="stylesheet" href="css/Page-5.css" media="screen" />
      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="Page 5" />
      <meta property="og:type" content="website" />

      <section
        className="u-align-center u-clearfix u-image u-section-1"
        id="sec-9a83"
        data-image-width={1980}
        data-image-height={1214}
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-align-center u-container-style u-group u-group-1">
            <div className="u-container-layout u-valign-middle">
              <h2
                className="u-text u-text-1"
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  fontWeight: "bolder",
                  marginBottom: "1em",
                  fontSize: "3em",
                }}
              >
                {translatedContent.title}
              </h2>
              <p
                className="u-text u-text-2"
                style={{
                  fontFamily:
                    'Frank Ruhl Libre, "PT Serif", "Noto Serif", "Noto Serif JP", "Noto Serif KR", "Noto Serif SC", "Noto Serif TC", ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
                  fontSize: "1.2rem",
                  lineHeight: "2rem",
                  fontWeight: "400",
                }}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {translatedContent.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
