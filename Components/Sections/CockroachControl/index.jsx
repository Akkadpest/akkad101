export default function CockroachControl() {
  const steps = [
    {
      number: "01",
      title: "Inspection & Identification",
      subtitle: "Kitchens, Bathrooms & Hidden Areas",
      points: [
        "Kitchen cabinets, drains & service ducts",
        "Electrical sockets, cracks & crevices",
        "Identifies species, nesting zones & infestation level",
      ],
      note: "Accurate inspection determines the right treatment combination for complete elimination.",
    },
    {
      number: "02",
      title: "Gel Bait Treatment",
      subtitle: "Primary Colony-Level Method",
      points: [
        "Applied inside kitchen cabinets & cupboards",
        "Electrical sockets, wall cracks & hidden voids",
        "Targets German & American cockroach species",
      ],
      note: "Cockroaches carry gel back to the colony — eliminating the nest from the inside out.",
    },
    {
      number: "03",
      title: "Spray Treatment",
      subtitle: "High-Risk & Heavily Infested Zones",
      points: [
        "Bathrooms, service ducts & infested pathways",
        "Immediate knockdown on contact",
        "Residual protection to prevent re-entry",
      ],
      note: "Fast-acting insecticide spray applied to high-traffic cockroach zones for immediate control.",
    },
    {
      number: "04",
      title: "Follow-Up & Prevention",
      subtitle: "Long-Term Cockroach-Free Protection",
      points: [
        "Post-treatment monitoring & guidance",
        "Seal recommendations for entry points",
        "Re-visit support within warranty period",
      ],
      note: "Ongoing prevention advice ensures your property stays cockroach-free after treatment.",
    },
  ];

  const whyPoints = [
    "Colony-level elimination using professional gel bait",
    "Safe, odorless treatments — no need to vacate",
    "Targets hidden nesting areas behind walls & appliances",
    "Effective for German cockroaches, American cockroaches & more",
    "Dubai Municipality approved insecticides — safe for kids & pets",
    "6-month warranty with unlimited free re-visits",
  ];

  return (
    <section className="py-5 bg-white border-top">
      <style>{`
        .cc-card {
          border-radius: 8px;
          border-left: 3px solid #6bb544;
          transition: box-shadow 0.2s;
        }
        .cc-card:hover {
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
              Cockroach Control Dubai —{" "}
              <span style={{ color: "#6bb544" }}>Villa, Apartment & Restaurant Treatment</span>
            </h2>
            <p className="fs-18" style={{ color: "#5a5a5a", lineHeight: "1.75", maxWidth: "700px" }}>
              Cockroaches spread bacteria, contaminate food, and thrive in Dubai's warm climate
              year-round. Our Dubai Municipality certified technicians use advanced gel bait and
              spray treatments to eliminate cockroach infestations at colony level — covering
              villas, apartments, restaurants, and commercial spaces across Dubai, Sharjah, and Ajman.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              {["Municipality Approved", "Gel & Spray Treatment", "Safe for Kids & Pets", "6 Months Warranty"].map((badge) => (
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
            Our Cockroach Control Process in Dubai
          </h3>
          <p className="fs-15 text-muted mb-0">
            A 4-step systematic treatment targeting cockroach colonies at the source — not just the surface.
          </p>
        </div>

        <div className="row g-3 mb-5">
          {steps.map((s) => (
            <div className="col-md-6" key={s.number}>
              <div className="cc-card box_shadow bg_white h-100 p-3">
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
                Why Our Cockroach Treatment Works in Dubai
              </h3>
              <p className="fs-14 mb-0" style={{ color: "#aaa" }}>
                Gel bait reaches the colony. Spray eliminates on contact. Together they deliver permanent results.
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