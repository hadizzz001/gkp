'use client';
import { FaChevronDown } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "../app/context/LanguageContext"; // import language context

const Footer = () => {
    const { language } = useLanguage(); // get current language
    const [translatedContent, setTranslatedContent] = useState({
        policies: "Policies",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        customerCare: "Customer Care",
        contactUs: "Contact us",
        category: "Category",
        services: "Services",
        projects: "Projects",
        allRightsReserved: "ALL RIGHTS RESERVED",
    });

    const [showPolicies, setShowPolicies] = useState(false);
    const [showCustomerCare, setShowCustomerCare] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    // Translation effect
    useEffect(() => {
        const translateContent = async () => {
            const contentToTranslate = {
                policies: "Policies",
                privacyPolicy: "Privacy Policy",
                termsOfService: "Terms of Service",
                customerCare: "Customer Care",
                contactUs: "Contact us",
                category: "Category",
                services: "Services",
                projects: "Projects",
                allRightsReserved: "ALL RIGHTS RESERVED",
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

    const mobileSections = [
        {
            label: translatedContent.policies,
            isOpen: showPolicies,
            setOpen: setShowPolicies,
            items: [
                { href: '/privacy', text: translatedContent.privacyPolicy },
                { href: '/term', text: translatedContent.termsOfService },
            ],
        },
        {
            label: translatedContent.customerCare,
            isOpen: showCustomerCare,
            setOpen: setShowCustomerCare,
            items: [
                { href: '/contact', text: translatedContent.contactUs },
            ],
        },
        {
            label: translatedContent.category,
            isOpen: showCategories,
            setOpen: setShowCategories,
            items: [
                { href: '/services', text: translatedContent.services },
                { href: '/projects', text: translatedContent.projects },
            ],
        },
    ];

    return (
        <footer className="bg-[#1e1e1e] text-[#dbdbdb] py-10 px-4">
            {/* PC FOOTER */}
            <div className="hidden md:block ">
                <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm border-b border-[#c5c5c5] pb-8 items-center mt-20">
                    {/* Policies */}
                    <div className="flex flex-col items-center">
                        <div className="text-left">
                            <p className="mb-3 myfp">{translatedContent.policies}</p>
                            <ul className="space-y-2">
                                <li><a href="/privacy" className="colorp">{translatedContent.privacyPolicy}</a></li>
                                <li><a href="/term" className="colorp">{translatedContent.termsOfService}</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Customer Care */}
                    <div className="flex flex-col items-center">
                        <div className="text-left">
                            <p className="myfp mb-3">{translatedContent.customerCare}</p>
                            <ul className="space-y-2">
                                <li><a href="/contact" className="colorp">{translatedContent.contactUs}</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="flex flex-col items-center">
                        <div className="text-left">
                            <p className="myfp mb-3">{translatedContent.category}</p>
                            <ul className="space-y-2">
                                <li><a href={"/services"} className="colorp">{translatedContent.services}</a></li>
                                <li><a href={"/projects"} className="colorp">{translatedContent.projects}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://wa.me/966556500026" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-black text-2xl">
                        <FaWhatsapp />
                    </a>
                    <a href="https://wa.me/971544415692" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-black text-2xl">
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:info@gkpdc.com" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-black text-2xl">
                        <Mail />
                    </a>
                </div>

                {/* Bottom Row */}
                <div className="text-center mt-20 mb-20">
                    <p className="myRights">© GKP {new Date().getFullYear()} {translatedContent.allRightsReserved}</p>
                </div>
            </div>

            {/* MOBILE FOOTER */}
            <div id='mymobfoot' className="block md:hidden text-sm space-y-6 mt-20 mb-20">
                {mobileSections.map(({ label, isOpen, setOpen, items }, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!isOpen)}>
                            <p className="myfp">{label}</p>
                            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                <FaChevronDown />
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <ul className="mt-2 space-y-2">
                                {items.map((item, i) => (
                                    <li key={i}>
                                        <a href={item.href} className="colorp">{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr id='myhrbar1' className="my-4" />
                    </div>
                ))}

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://wa.me/966556500026" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-black text-2xl">
                        <FaWhatsapp />
                    </a>
                    <a href="https://wa.me/971544415692" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-black text-2xl">
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:info@gkpdc.com" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-black text-2xl">
                        <Mail />
                    </a>
                </div>

                <div className="text-center mt-20 mb-20">
                    <p className="text-sm uppercase">GKP {new Date().getFullYear()} {translatedContent.allRightsReserved}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
