export default function BedBugControl() {
  const steps = [
    {
      step: "01",
      title: "Detailed Inspection",
      subtitle: "Bedroom Areas",
      points: ["Mattresses & bedding", "Bed frames, joints & headboards", "Bed sheets, corners & cracks"],
      note: "Identifies infestation levels, breeding points, and all hiding areas before treatment begins.",
    },
    {
      step: "02",
      title: "Mattress & Bed Spray Treatment",
      subtitle: "Full Bed Coverage",
      points: ["Mattress front, sides & underside", "Bed frames & furniture joints"],
      note: "Targets adult bed bugs and eggs hiding within fabrics, seams, and crevices.",
    },
    {
      step: "03",
      title: "Misting Treatment",
      subtitle: "Living Room",
      points: ["Sofas & upholstered furniture", "Curtains & surrounding areas"],
      note: "Eliminates bed bugs that have migrated from bedrooms to living areas.",
    },
    {
      step: "04",
      title: "Spray Treatment",
      subtitle: "Living Room & Bedroom",
      points: ["Sofa edges & fabric seams", "Bedroom corners, cracks & furniture surfaces"],
      note: "Specialized insecticides ensure full contact and residual control across all surfaces.",
    },
    {
      step: "05",
      title: "Deep Spray",
      subtitle: "Hidden Infestation Points",
      points: ["Beds & furniture bases", "Hard-to-reach infested zones"],
      note: "Ensures no surviving bed bugs remain in concealed areas after the initial treatment.",
    },
    {
      step: "06",
      title: "Puff Treatment",
      subtitle: "Electrical Sockets & Wall Cavities",
      points: ["All electrical sockets treated", "Wall voids & concealed spaces"],
      note: "Professional dust application kills eggs and insects hiding inside sockets and wall voids — providing long-term protection.",
    },
  ];

  const whyPoints = [
    "Covers all life stages — eggs, nymphs & adults",
    "Targets visible and hidden infestation points",
    "Uses Dubai Municipality approved & safe insecticides",
    "Designed for apartments, villas & partition rooms",
    "Prevents re-infestation with proper follow-up guidance",
  ];

  return (
    <section className="py-5 bg-white border-top">
      <style>{`
        .bbc-step-card {
          border-radius: 8px;
          border-left: 3px solid #6bb544;
          transition: box-shadow 0.2s;
        }
        .bbc-step-card:hover {
          box-shadow: rgba(107, 181, 68, 0.15) 0px 6px 24px !important;
        }
      `}</style>

      <div className="container">

        {/* Header */}
        <div className="row mb-4">
          <div className="col-lg-10">
            <span
              className="fw-700 fs-12 d-inline-block mb-2 px-2 py-1"
              style={{
                backgroundColor: "#6bb544",
                color: "#fff",
                borderRadius: "3px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Dubai Municipality Approved
            </span>
            <h2 className="fw-700 mb-3" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#1b1b1b" }}>
              Bed Bug Control Dubai —{" "}
              <span style={{ color: "#6bb544" }}>Villa & Apartment Specialists</span>
            </h2>
            <p className="fs-18" style={{ color: "#5a5a5a", lineHeight: "1.75", maxWidth: "700px" }}>
              Bed bugs are one of the most difficult pests to eliminate without professional
              intervention. Our Dubai Municipality certified technicians deliver a systematic,
              multi-step bed bug treatment that removes infestations completely and prevents
              recurrence in apartments, villas, and shared accommodations across Dubai.
            </p>

            {/* Trust badges */}
            <div className="d-flex flex-wrap gap-3 mt-3">
              {["Municipality Approved", "Indoor & Outdoor Treatment", "Safe for Family & Pets", "6 Months Warranty"].map((badge) => (
                <span
                  key={badge}
                  className="fw-600 fs-13"
                  style={{
                    backgroundColor: "#f0f8eb",
                    color: "#3d7a1f",
                    border: "1px solid #c5e5aa",
                    borderRadius: "4px",
                    padding: "4px 10px",
                  }}
                >
                  ✔ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Process heading */}
        <div className="mb-3 mt-5">
          <h3 className="fw-700 fs-22" style={{ color: "#1b1b1b" }}>
            Our Bed Bug Control Process in Dubai
          </h3>
          <p className="fs-15 text-muted mb-0">
            A 6-step professional treatment covering every hiding point — from mattresses to wall cavities.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="row g-3 mb-5">
          {steps.map((s) => (
            <div className="col-md-6" key={s.step}>
              <div className="bbc-step-card box_shadow bg_white h-100 p-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span
                    className="fw-700"
                    style={{
                      backgroundColor: "#6bb544",
                      color: "#fff",
                      borderRadius: "4px",
                      padding: "2px 8px",
                      fontSize: "12px",
                      letterSpacing: "1px",
                    }}
                  >
                    STEP {s.step}
                  </span>
                  <span className="fs-12 text-muted fw-600">{s.subtitle}</span>
                </div>
                <h4 className="fw-700 mb-2" style={{ fontSize: "15px", color: "#1b1b1b" }}>
                  {s.title}
                </h4>
                <ul className="mb-2 ps-3" style={{ color: "#666" }}>
                  {s.points.map((p) => (
                    <li key={p} className="fs-14">{p}</li>
                  ))}
                </ul>
                <p className="mb-0 fs-13" style={{ color: "#888", borderTop: "1px solid #f0f0f0", paddingTop: "10px" }}>
                  {s.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why effective */}
        <div
          className="p-4 p-md-5"
          style={{ backgroundColor: "#1b1b1b", borderRadius: "8px" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h3 className="fw-700 mb-2" style={{ color: "#fff", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}>
                Why Our Bed Bug Treatment Works in Dubai
              </h3>
              <p className="fs-14 mb-0" style={{ color: "#aaa" }}>
                A comprehensive approach that leaves no life stage untreated — from eggs to adults.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row g-2">
                {whyPoints.map((point) => (
                  <div className="col-12" key={point}>
                    <div
                      className="d-flex align-items-start gap-2 p-2"
                      style={{ borderRadius: "5px", backgroundColor: "#2a2a2a" }}
                    >
                      <span style={{ color: "#6bb544", fontWeight: 700, marginTop: "1px" }}>✔</span>
                      <span className="fs-14" style={{ color: "#ccc" }}>{point}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}