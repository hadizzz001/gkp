"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { sendEmail } from "../api/sendEmail/sendEmail";
import { useLanguage } from "../context/LanguageContext"; // import language context
import { Mail, MessageSquare } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const { language } = useLanguage(); // current language
  const [inputs, setInputs] = useState({});
  const [value, setValue] = useState("");
  const [translatedContent, setTranslatedContent] = useState({
    getInTouch: "GET IN TOUCH",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone Number",
    message: "Message",
    send: "Send",
  });

  // Translation effect
  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        getInTouch: "GET IN TOUCH",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone Number",
        message: "Message",
        send: "Send",
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

  const handleChange = (e: any) => {
    if (e.target.name === "phone") {
      const numericValue = e.target.value.replace(/[^0-9]/g, "");
      setValue(numericValue);
    }
    const name = e.target.name;
    const val = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: val }));
  };

  return (
    <>
      <div className="mt-10">
        <div className="container-xl">
          <br />
<h4
  className="myTitle3"
  dir={language === "ar" ? "rtl" : "ltr"}
  style={{ textAlign: "center" }}
>
  {translatedContent.getInTouch}
</h4>

        </div>
      </div>

      <div className="container-xl mt-5">
        <div className="pl-5 pt-4 pr-5">
          <form
            className="myFormaBB"
            action={async (formData) => {
              await sendEmail(formData);
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <div className="col-sm-12">
                    <input
                      className="form-control"
                      name="firstname"
                      type="text"
                      placeholder={translatedContent.firstName}
                      onChange={handleChange}
                      required
                      style={{ border: "1px solid #444" }}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                </div>

                <div className="form-group row pt-2">
                  <div className="col-sm-12">
                    <input
                      className="form-control"
                      name="lastname"
                      type="text"
                      placeholder={translatedContent.lastName}
                      onChange={handleChange}
                      required
                      style={{ border: "1px solid #444" }}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                </div>

                <div className="form-group row pt-2">
                  <div className="col-sm-12">
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder={translatedContent.email}
                      onChange={handleChange}
                      required
                      style={{ border: "1px solid #444" }}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                </div>

                <div className="form-group row pt-2">
                  <div className="col-sm-12">
                    <input
                      className="form-control"
                      name="phone"
                      type="text"
                      placeholder={translatedContent.phone}
                      value={value}
                      onChange={handleChange}
                      required
                      style={{ border: "1px solid #444" }}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group row">
                  <div className="col-sm-12">
                    <textarea
                      className="form-control form-control-text-area"
                      name="message"
                      placeholder={translatedContent.message}
                      rows={9}
                      required
                      onChange={handleChange}
                      defaultValue={""}
                      style={{ border: "1px solid #444" }}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group row pt-2">
              <div className="col-md-5" />
              <div className="col-md-2">
                <button
                  type="submit"
                  className="klaviyo_submit_button"
                  style={{ padding: "1.5em" }}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {translatedContent.send}
                </button>
              </div>
              <div className="col-md-5" />
            </div>
            <br />
          </form>

          {/* Contact Icons with Text */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <div className="mynewpara1 d-flex flex-column gap-3 mt-4 mb-20">
    <a
      href="mailto:info@gkpdc.com"
      target="_blank"
      rel="noopener noreferrer"
      className="d-flex align-items-center"
      style={{ color: "#444", textDecoration: "none", gap: "8px" }}
    >
      <Mail size={28} strokeWidth={2} /> info@gkpdc.com
    </a>

 

    <a
      href="https://wa.me/966540230404"
      target="_blank"
      rel="noopener noreferrer"
      className="d-flex align-items-center"
      style={{ color: "#444", textDecoration: "none", gap: "8px" }}
    >
      <MessageSquare size={28} strokeWidth={2} /> Saudi Arabia: +966 54 0230404
    </a>

    <a
      href="https://wa.me/971507413282"
      target="_blank"
      rel="noopener noreferrer"
      className="d-flex align-items-center"
      style={{ color: "#444", textDecoration: "none", gap: "8px" }}
    >
      <MessageSquare size={28} strokeWidth={2} /> Dubai: +971 50 7413282
    </a>

    <a
      href="https://wa.me/971544415692"
      target="_blank"
      rel="noopener noreferrer"
      className="d-flex align-items-center"
      style={{ color: "#444", textDecoration: "none", gap: "8px" }}
    >
      <MessageSquare size={28} strokeWidth={2} /> Dubai: +971 54 4415692
    </a>
  </div>
</div>

        </div>
      </div>
    </>
  );
}
