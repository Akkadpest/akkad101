export default function TermiteControl() {
  const steps = [
    {
      number: "01",
      title: "Detailed Termite Inspection",
      subtitle: "Full Property Assessment",
      points: [
        "Active termite zones, entry points & affected structures",
        "Advanced scanning technology behind walls & under floors",
        "Accurate detection inside wooden structures & ceilings",
      ],
      note: "Precise inspection ensures treatment is targeted exactly where termite colonies are active — no guesswork.",
    },
    {
      number: "02",
      title: "Doors, Frames & Windows Treatment",
      subtitle: "Common Termite Entry Points",
      points: [
        "Precision drilling in affected door & window frames",
        "Anti-termite chemical injected directly into tunnels",
        "Prevents further spread with minimal disruption",
      ],
      note: "Wooden door and window frames are primary termite highways — treating these first stops infestation spread immediately.",
    },
    {
      number: "03",
      title: "Drilling & Structural Injection",
      subtitle: "Floors, Walls & Structural Cavities",
      points: [
        "Drilling into floors & walls to access concealed colonies",
        "Specialized scanners detect wiring & plumbing before drilling",
        "Safe, accurate access to termite nesting areas",
      ],
      note: "Scanner technology ensures safe drilling around electrical and plumbing systems inside walls and floors.",
    },
    {
      number: "04",
      title: "Injection Chemical Treatment",
      subtitle: "Deep Colony Elimination",
      points: [
        "Potent anti-termite chemical via low-pressure injection system",
        "Deep penetration into concrete and soil layers",
        "Creates a long-lasting chemical barrier at the colony level",
      ],
      note: "Low-pressure injection pushes chemical deep into structural layers, reaching and eliminating hidden colonies.",
    },
    {
      number: "05",
      title: "Fire Wall System & Restoration",
      subtitle: "Sealing & Long-Term Protection",
      points: [
        "All drilled points sealed with Fire Wall cement system",
        "Restores treated areas to original condition",
        "Physical and chemical barrier lasting 10+ years",
      ],
      note: "The Fire Wall sealing system creates a permanent dual-layer barrier — protecting your property's structure for over a decade.",
    },
  ];

  const warrantyPoints = [
    "Warranty coverage available for up to 20 years depending on service plan",
    "Yearly inspections required to maintain warranty validity",
    "Re-treatment provided per service agreement if activity is detected",
    "Warranty re-visits provided free of charge when inspection schedules are followed",
  ];

  const whyPoints = [
    "Advanced scanning technology for accurate termite detection",
    "Deep chemical penetration for complete colony elimination",
    "Safe for families, properties & building structures",
    "Fire Wall sealing system for 10+ year structural protection",
    "Dubai Municipality approved anti-termite chemicals",
    "Warranty-backed service with scheduled follow-up inspections",
  ];

  return (
    <section className="py-5 bg-white border-top">
      <style>{`
        .tc-card {
          border-radius: 8px;
          border-left: 3px solid #6bb544;
          transition: box-shadow 0.2s;
        }
        .tc-card:hover {
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
              Termite Control Dubai —{" "}
              <span style={{ color: "#6bb544" }}>Anti-Termite Treatment for Villa & Apartment</span>
            </h2>
            <p className="fs-18" style={{ color: "#5a5a5a", lineHeight: "1.75", maxWidth: "700px" }}>
              Termites are among the most destructive pests in Dubai — capable of causing severe
              structural damage to villas, apartments, and commercial properties if left untreated.
              Our Dubai Municipality certified termite control team uses advanced detection technology
              and a proven 5-step treatment process to eliminate termite colonies and protect your
              property with warranties of up to 20 years.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              {["Municipality Approved", "Advanced Detection Technology", "Safe for Structures & Occupants", "Warranty Up to 20 Years"].map((badge) => (
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
            Our Termite Control Process in Dubai
          </h3>
          <p className="fs-15 text-muted mb-0">
            A 5-step anti-termite treatment — from detection through chemical injection to permanent Fire Wall sealing.
          </p>
        </div>

        <div className="row g-3 mb-5">
          {steps.map((s) => (
            <div className="col-md-6" key={s.number}>
              <div className="tc-card box_shadow bg_white h-100 p-3">
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

        {/* Warranty block */}
        <div className="row mb-5">
          <div className="col-12">
            <div
              className="p-4"
              style={{
                backgroundColor: "#f0f8eb",
                borderRadius: "8px",
                border: "1px solid #c5e5aa",
              }}
            >
              <h3 className="fw-700 fs-18 mb-3" style={{ color: "#1b1b1b" }}>
                Termite Treatment Warranty in Dubai — Up to 20 Years
              </h3>
              <div className="row g-2">
                {warrantyPoints.map((point) => (
                  <div className="col-md-6" key={point}>
                    <div className="d-flex align-items-start gap-2">
                      <span style={{ color: "#6bb544", fontWeight: 700, marginTop: "2px" }}>✔</span>
                      <span className="fs-14" style={{ color: "#3d7a1f" }}>{point}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why effective */}
        <div className="p-4 p-md-5" style={{ backgroundColor: "#1b1b1b", borderRadius: "8px" }}>
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h3 className="fw-700 mb-2" style={{ color: "#fff", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}>
                Why Our Termite Treatment Works in Dubai
              </h3>
              <p className="fs-14 mb-0" style={{ color: "#aaa" }}>
                Deep injection reaches hidden colonies. Fire Wall sealing locks them out permanently for 10+ years.
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