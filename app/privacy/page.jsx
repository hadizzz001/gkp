'use client';

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const [translatedContent, setTranslatedContent] = useState({
    title: "Privacy Policy",
    content: `
At GKP, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services. We understand the importance of your personal data and are dedicated to ensuring its confidentiality and security.

Information Collection and Use

We collect personal information that you voluntarily provide to us when registering on the website, making a purchase, subscribing to our newsletter, or contacting us for customer support. This may include your name, email address, phone number, shipping address, payment information, and any other details necessary to fulfill your requests.

Data Protection

GKP employs robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use encryption technologies and follow best practices to ensure your data is safe.

Use of Information

The information we collect is used to provide and improve our services, process transactions, send periodic emails, and enhance customer service. We may also use your information to personalize your experience and to send you promotional materials, which you can opt out of at any time.

Sharing of Information

We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or as necessary to provide our services. This may include sharing information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.

Cookies and Tracking Technologies

Our website uses cookies and similar tracking technologies to enhance your experience, analyze website traffic, and understand how you use our services. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.

Changes to This Policy

GKP reserves the right to update this Privacy Policy at any time. We will notify you of any significant changes by posting the new policy on our website. Your continued use of our services after such changes constitutes your acceptance of the new Privacy Policy.

Contact Us

If you have any questions about this Privacy Policy or our data practices, please <a href="contact">contact us</a>.
`
  });

  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        title: "Privacy Policy",
        content: `
At GKP, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services. We understand the importance of your personal data and are dedicated to ensuring its confidentiality and security.

Information Collection and Use

We collect personal information that you voluntarily provide to us when registering on the website, making a purchase, subscribing to our newsletter, or contacting us for customer support. This may include your name, email address, phone number, shipping address, payment information, and any other details necessary to fulfill your requests.

Data Protection

GKP employs robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use encryption technologies and follow best practices to ensure your data is safe.

Use of Information

The information we collect is used to provide and improve our services, process transactions, send periodic emails, and enhance customer service. We may also use your information to personalize your experience and to send you promotional materials, which you can opt out of at any time.

Sharing of Information

We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or as necessary to provide our services. This may include sharing information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.

Cookies and Tracking Technologies

Our website uses cookies and similar tracking technologies to enhance your experience, analyze website traffic, and understand how you use our services. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.

Changes to This Policy

GKP reserves the right to update this Privacy Policy at any time. We will notify you of any significant changes by posting the new policy on our website. Your continued use of our services after such changes constitutes your acceptance of the new Privacy Policy.

Contact Us

If you have any questions about this Privacy Policy or our data practices, please <a href="contact">contact us</a>.
`
      };

      try {
        const translated = await Promise.all(
          Object.entries(contentToTranslate).map(async ([key, text]) => {
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
        setTranslatedContent(contentToTranslate); // fallback
      }
    };

    translateContent();
  }, [language]);

  return (
    <>
      <section className="privacy-section">
        <div className="container">
          <h2 className="privacy-title">{translatedContent.title}</h2>
          <p
            className="privacy-content"
            dir={language === "ar" ? "rtl" : "ltr"}
            dangerouslySetInnerHTML={{ __html: translatedContent.content }}
          />
        </div>
      </section>

      <style jsx>{`
        .privacy-section {
          padding: 60px 20px;
          background-color: #f9f9f9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .privacy-title {
          font-family: "Manrope", sans-serif;
          font-weight: bolder;
          font-size: 3em;
          margin-bottom: 1em;
          text-align: center;
        }

        .privacy-content {
          font-family: 'Frank Ruhl Libre', "PT Serif", "Noto Serif", Georgia, Cambria, Times New Roman, Times, serif;
          font-size: 1.2rem;
          line-height: 2rem;
          font-weight: 400;
          text-align: justify;
          white-space: pre-line; /* preserve line breaks */
        }

        @media (max-width: 768px) {
          .privacy-title {
            font-size: 2em;
          }

          .privacy-content {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
