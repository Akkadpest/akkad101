export default function AntsControl() {
  const treatments = [
    {
      number: "01",
      title: "Indoor Ant Control Treatment",
      subtitle: "Kitchen, Bathrooms & Living Areas",
      points: [
        "Gel treatment inside kitchen cabinets & cupboards",
        "Application inside electrical sockets, cracks & crevices",
        "Targeted treatment near kitchen appliances",
        "Safe, odorless solutions for indoor environments",
      ],
      note: "Targets ant colonies at entry and feeding points inside the property without disrupting daily life.",
    },
    {
      number: "02",
      title: "Outdoor Ant Control Treatment",
      subtitle: "Villa Exterior, Garden & Perimeter",
      points: [
        "Spray treatment around villa exterior walls",
        "Front yard, garden & outdoor perimeter treatment",
        "Granular application to eliminate ant nests",
        "Safe for plants and outdoor surfaces",
      ],
      note: "Creates a protective barrier around the property to prevent ants from entering from outside.",
    },
    {
      number: "03",
      title: "Ant Bait Station Installation",
      subtitle: "Long-Term Colony Elimination",
      points: [
        "Placement of ant bait stations in key infestation zones",
        "Long-term colony elimination from the source",
        "Safe for children and pets",
        "Effective for heavy and recurring infestations",
      ],
      note: "Worker ants carry bait back to the colony, eliminating the queen and the entire nest over time.",
    },
    {
      number: "04",
      title: "Targeted Spray Treatment",
      subtitle: "Active Trail & Pathway Control",
      points: [
        "Bathrooms, kitchens & infested pathways",
        "Eliminates active ant trails on contact",
        "Residual effect to prevent re-entry",
        "Applied to all ant tunnel access points",
      ],
      note: "Fast-acting spray treatment disrupts ant communication and eliminates active colonies on contact.",
    },
  ];

  const whyPoints = [
    "Eliminates ants at colony level — not just surface level",
    "Indoor & outdoor treatment for full property coverage",
    "Safe, Dubai Municipality approved formulations for kids and pets",
    "Long-lasting protection with professional bait stations",
    "Prevents re-infestation with structured follow-up support",
  ];

  return (
    <section className="py-5 bg-white border-top">
      <style>{`
        .ac-card {
          border-radius: 8px;
          border-left: 3px solid #6bb544;
          transition: box-shadow 0.2s;
        }
        .ac-card:hover {
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
              Ants Control Dubai —{" "}
              <span style={{ color: "#6bb544" }}>Villa & Apartment Treatment</span>
            </h2>
            <p className="fs-18" style={{ color: "#5a5a5a", lineHeight: "1.75", maxWidth: "700px" }}>
              Ant infestations spread quickly through kitchens, bathrooms, gardens, and outdoor spaces
              in Dubai homes and villas. Our Dubai Municipality certified technicians use targeted gel,
              bait, and spray treatments to eliminate ant colonies at the source and prevent
              re-infestation across Dubai, Sharjah, and Ajman.
            </p>

            {/* Trust badges */}
            <div className="d-flex flex-wrap gap-3 mt-3">
              {["Municipality Approved", "Indoor & Outdoor Treatment", "Safe for Kids & Pets", "Long-Term Control"].map((badge) => (
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
            Our Ant Control Process in Dubai
          </h3>
          <p className="fs-15 text-muted mb-0">
            A 4-stage indoor and outdoor treatment targeting ant colonies at the source — not just the surface.
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="row g-3 mb-5">
          {treatments.map((t) => (
            <div className="col-md-6" key={t.number}>
              <div className="ac-card box_shadow bg_white h-100 p-3">
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
                    {t.number}
                  </span>
                  <span className="fs-12 text-muted fw-600">{t.subtitle}</span>
                </div>
                <h4 className="fw-700 mb-2" style={{ fontSize: "15px", color: "#1b1b1b" }}>
                  {t.title}
                </h4>
                <ul className="mb-2 ps-3" style={{ color: "#666" }}>
                  {t.points.map((p) => (
                    <li key={p} className="fs-14">{p}</li>
                  ))}
                </ul>
                <p className="mb-0 fs-13" style={{ color: "#888", borderTop: "1px solid #f0f0f0", paddingTop: "10px" }}>
                  {t.note}
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
                Why Our Ant Control Treatment Works in Dubai
              </h3>
              <p className="fs-14 mb-0" style={{ color: "#aaa" }}>
                Colony-level elimination — not just surface spraying. Full indoor and outdoor coverage for lasting results.
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