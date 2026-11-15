export default function FliesControl() {
  const steps = [
    {
      number: "01",
      title: "Inspection & Breeding Source Identification",
      subtitle: "Waste Areas, Drains & Kitchens",
      points: [
        "Waste areas, garbage zones & outdoor bins",
        "Drains, kitchen surfaces & food prep areas",
        "Identifies fly species, breeding sources & hotspots",
      ],
      note: "Eliminating breeding sources is the most effective long-term fly control strategy — inspection makes it precise.",
    },
    {
      number: "02",
      title: "Spray & Residual Treatment",
      subtitle: "High-Activity & Resting Zones",
      points: [
        "Applied to walls, garbage areas & high-traffic zones",
        "Residual insecticide for lasting surface protection",
        "Targets both resting and breeding areas",
      ],
      note: "Residual treatment continues working after application — significantly reducing fly activity for weeks.",
    },
    {
      number: "03",
      title: "Hygiene & Prevention Guidance",
      subtitle: "Long-Term Fly Prevention",
      points: [
        "Waste management & sanitation recommendations",
        "Drain maintenance advice to eliminate breeding points",
        "Follow-up scheduling for high-risk commercial properties",
      ],
      note: "Professional prevention guidance reduces the conditions that attract flies — keeping your property fly-free longer.",
    },
  ];

  const whyPoints = [
    "Targets fly breeding sources, resting areas & entry points",
    "Indoor & outdoor coverage for full property protection",
    "Safe, odorless solutions for residential and commercial use",
    "Dubai Municipality approved insecticides",
    "Effective for homes, restaurants, warehouses & outdoor areas",
    "Professional follow-up support and prevention guidance included",
  ];

  return (
    <section className="py-5 bg-white border-top">
      <style>{`
        .fc-card {
          border-radius: 8px;
          border-left: 3px solid #6bb544;
          transition: box-shadow 0.2s;
        }
        .fc-card:hover {
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
              Flies Control Dubai —{" "}
              <span style={{ color: "#6bb544" }}>Villa, Restaurant & Commercial Treatment</span>
            </h2>
            <p className="fs-18" style={{ color: "#5a5a5a", lineHeight: "1.75", maxWidth: "700px" }}>
              Flies are a serious hygiene risk in Dubai kitchens, restaurants, garbage areas, and
              outdoor spaces — spreading bacteria and contaminating food surfaces. Our Dubai
              Municipality certified technicians eliminate fly breeding sources and reduce fly
              activity through targeted indoor and outdoor treatments across Dubai, Sharjah, and Ajman.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              {["Municipality Approved", "Indoor & Outdoor Treatment", "Safe & Odorless Solutions", "Effective Fly Reduction"].map((badge) => (
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
         Flies Control Process in Dubai
          </h3>
          <p className="fs-15 text-muted mb-0">
            A 3-step treatment targeting fly breeding sources, active zones, and long-term prevention.
          </p>
        </div>

        <div className="row g-3 mb-5">
          {steps.map((s) => (
            <div className="col-md-4" key={s.number}>
              <div className="fc-card box_shadow bg_white h-100 p-3">
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
                Why Our Flies Treatment Works in Dubai
              </h3>
              <p className="fs-14 mb-0" style={{ color: "#aaa" }}>
                Breeding source elimination plus residual surface protection — the only combination that delivers lasting results.
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