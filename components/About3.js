"use client";

import { ShieldCheck, Star, Lightbulb, Users, Heart } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We uphold the highest ethical standards, fostering trust and transparency in every relationship.",
  },
  {
    icon: Star,
    title: "Excellence",
    text: "We are committed to delivering superior quality and exceeding expectations in all our projects.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace innovative technologies and creative approaches to drive efficiency and value.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "We believe in the power of teamwork, working closely with clients, partners, and stakeholders to achieve common goals.",
  },
  {
    icon: Heart,
    title: "Safety",
    text: "Ensuring the safety and well-being of our employees, partners, and the communities we serve is a core priority.",
  },
];

export default function ValuesPage() {
  return (
      <section
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "40px 20px", 
          textAlign: "left", // center text
        }}
      >
        <div
          style={{
            maxWidth: "900px",
          }}
        >

      <h1
        className="mynewpara mb-5"
        style={{ color: "#07ae60" }}
      >
        Our Core Values
      </h1>

      <div className="flex flex-col gap-8 ">
        {values.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              <Icon size={32} style={{ color: "#07ae60" }} />
              <div>
                <h2
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#07ae60" }}
                >
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
             </div>
          </section>
  );
}
