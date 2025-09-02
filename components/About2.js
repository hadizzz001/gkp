"use client";

export default function Home() {
  return (
    <>
      <section
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "40px 20px",
          marginTop: "6em",
          textAlign: "center", // center text
        }}
      >
        <div
          style={{
            maxWidth: "900px",
          }}
        >
          <h1 className="mynewpara mb-5">GKP Development Consultancy</h1>
          <p className="mynewpara1" style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}>
            GKP Development Consultancy has entered into a strategic joint venture with ITC
            Interiors, bringing together regional construction and fit-out expertise with global
            interior contracting excellence. This partnership combines GKP's strong regional
            presence, multidisciplinary construction capabilities, and deep understanding of local
            regulations with ITC's global reach, robust procurement network, and proven FF&E/OS&E
            project delivery experience.{"\n\n"}
            Together, we offer several key advantages:{"\n"}
            • Integrated End-to-End Solutions: From design concept to final installation, clients
            will benefit from a seamless approach covering all aspects of interior and construction
            projects.{"\n"}
            - Global Quality, Local Expertise: While ITC's international standards are applied,
            GKP's intimate knowledge of local markets ensures that each project meets global
            benchmarks, all while being tailored to the region's needs.{"\n"}
            - Operational Efficiency: This collaboration enhances our ability to mobilize quickly,
            optimize supply chains, and implement cost-effective project management practices across
            Saudi Arabia and the GCC.{"\n"}
            - Shared Vision for Excellence: Both GKP and ITC are deeply committed to delivering
            innovative, high-quality results that transform spaces and bring client visions to life.{"\n\n"}
            This partnership lays the groundwork for impactful growth, especially within Saudi
            Arabia's rapidly evolving construction and development landscape. With GKP's regional
            leadership and ITC's international expertise, we are equipped to deliver exceptional,
            future-proof projects—driven by innovation, backed by experience, and committed to
            shaping a better built environment.
          </p>
        </div>
      </section>
    </>
  );
}
