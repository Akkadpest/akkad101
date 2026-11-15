export default function MosquitoControl() {
  const steps = [
    {
      number: "01",
      title: "Site Inspection",
      subtitle: "Breeding Zone Identification",
      points: [
        "Gardens, water sources & drainage inspection",
        "Shaded areas, plant pots & stagnant water zones",
        "Identifies mosquito breeding hotspots before treatment",
      ],
      note: "Accurate site inspection ensures fogging and spray are applied where mosquito populations are highest.",
    },
    {
      number: "02",
      title: "Outdoor Fogging Treatment",
      subtitle: "Immediate Adult Mosquito Knockdown",
      points: [
        "Applied across gardens, plants & outdoor living areas",
        "Rapid reduction of adult mosquito populations",
        "Reaches deep into vegetation and shaded zones",
      ],
      note: "Fogging delivers fast, wide-area control — significantly reducing biting activity within hours of treatment.",
    },
    {
      number: "03",
      title: "Residual Spray Application",
      subtitle: "Long-Lasting Outdoor Protection",
      points: [
        "Applied to walls, plants & outdoor surfaces",
        "Residual effect continues working after treatment",
        "Prevents mosquito re-population between visits",
      ],
      note: "Residual spray creates a lasting protective layer on surfaces — keeping mosquito activity suppressed for weeks.",
    },
  ];

  const whyPoints = [
    "Reduces mosquito breeding and biting activity effectively",
    "Full outdoor coverage — gardens, pools, patios & perimeters",
    "Dubai Municipality approved, safe formulations for family areas",
    "Ideal for villas, apartments & commercial outdoor spaces",
    "Scheduled seasonal follow-up available for year-round protection",
    "Targets adult mosquitoes and breeding zones simultaneously",
  ];

  return (
    <section className="py-5 bg-white border-top">
      <style>{`
        .mc-card {
          border-radius: 8px;
          border-left: 3px solid #6bb544;
          transition: box-shadow 0.2s;
        }
        .mc-card:hover {
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
              Mosquito Control Dubai —{" "}
              <span style={{ color: "#6bb544" }}>Villa, Garden & Outdoor Treatment</span>
            </h2>
            <p className="fs-18" style={{ color: "#5a5a5a", lineHeight: "1.75", maxWidth: "700px" }}>
              Mosquitoes breed rapidly in Dubai's warm climate, posing serious health risks
              including dengue and other mosquito-borne diseases. Our Dubai Municipality certified
              technicians use professional fogging and residual spray treatments to eliminate
              mosquito populations and protect gardens, villas, and outdoor living spaces across
              Dubai, Sharjah, and Ajman.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              {["Municipality Approved", "Fogging & Residual Spray", "Safe for Family & Pets", "Outdoor Protection"].map((badge) => (
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

        {/* Process */}
        <div className="mb-3 mt-5">
          <h3 className="fw-700 fs-22" style={{ color: "#1b1b1b" }}>
            Our Mosquito Control Process in Dubai
          </h3>
          <p className="fs-15 text-muted mb-0">
            A 3-step outdoor treatment — inspection, fogging, and residual spray for immediate and lasting mosquito control.
          </p>
        </div>

        <div className="row g-3 mb-5">
          {steps.map((s) => (
            <div className="col-md-4" key={s.number}>
              <div className="mc-card box_shadow bg_white h-100 p-3">
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
                    STEP {s.number}
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
        <div className="p-4 p-md-5" style={{ backgroundColor: "#1b1b1b", borderRadius: "8px" }}>
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h3 className="fw-700 mb-2" style={{ color: "#fff", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}>
                Why Our Mosquito Treatment Works in Dubai
              </h3>
              <p className="fs-14 mb-0" style={{ color: "#aaa" }}>
                Fogging kills on contact. Residual spray keeps mosquitoes away for weeks. Combined, they deliver complete outdoor control.
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