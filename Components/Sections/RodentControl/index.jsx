export default function RodentControl() {
  const steps = [
    {
      number: "01",
      title: "Rat Glue Traps",
      subtitle: "Indoor — Kitchens & Storage Areas",
      points: [
        "Strong adhesive surface for effective capture",
        "Non-toxic — safe for indoor use",
        "Placed in kitchens, storage rooms & pantries",
      ],
      note: "Strategically placed where rodent activity is highest — along walls, behind appliances, and in dark corners.",
    },
    {
      number: "02",
      title: "Trap Installation",
      subtitle: "Indoor — High-Activity Pathways",
      points: [
        "Staircases, wall edges & hidden pathways",
        "Areas where rodents commonly travel",
        "Minimized visibility for maximum effectiveness",
      ],
      note: "Traps installed along rodent travel routes ensure maximum capture rates with minimal disruption.",
    },
    {
      number: "03",
      title: "Kitchen Cabinet Traps",
      subtitle: "Indoor — Food Source Zones",
      points: [
        "Inside kitchen cabinets & pantry cupboards",
        "Targets food-source areas with highest rodent activity",
        "Safe placement away from food contact surfaces",
      ],
      note: "Rodents are most active near food sources — targeted placement here delivers faster results.",
    },
    {
      number: "04",
      title: "Rodent Bait Stations",
      subtitle: "Outdoor — Perimeter & Entry Points",
      points: [
        "Installed around villa & building exterior",
        "Controls rodents at perimeter entry points",
        "Tamper-resistant stations safe for children & pets",
      ],
      note: "Outdoor bait stations prevent rodents from entering the premises by eliminating them at the source.",
    },
    {
      number: "05",
      title: "Smart Mouse Trap",
      subtitle: "Outdoor — Heavy Infestation Zones",
      points: [
        "Used for severe outdoor infestations",
        "Controlled, efficient rodent capture",
        "Safe for children & pets when correctly installed",
      ],
      note: "Smart traps provide high-volume capture for properties with persistent or heavy rodent activity.",
    },
    {
      number: "06",
      title: "Rat Trap XL",
      subtitle: "Outdoor — Severe Infestation Cases",
      points: [
        "Extra-large capacity for multiple captures",
        "Ideal for villas, gardens & service areas",
        "Deployed in the most heavily infested zones",
      ],
      note: "XL traps are reserved for severe infestations where standard methods need reinforcement.",
    },
  ];

  const whyPoints = [
    "Targets rodents at entry points, nesting areas & travel routes",
    "Combined indoor and outdoor control for full property coverage",
    "Non-toxic indoor options — safe for families and pets",
    "Effective for light to severe rodent infestations",
    "Dubai Municipality approved methods & materials",
    "Follow-up support and re-visit within warranty period",
  ];

  return (
    <section className="py-5 bg-white border-top">
      <style>{`
        .rc-card {
          border-radius: 8px;
          border-left: 3px solid #6bb544;
          transition: box-shadow 0.2s;
        }
        .rc-card:hover {
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
              Rodent Control Dubai —{" "}
              <span style={{ color: "#6bb544" }}>Rat & Mouse Control for Villas & Apartments</span>
            </h2>
            <p className="fs-18" style={{ color: "#5a5a5a", lineHeight: "1.75", maxWidth: "700px" }}>
              Rats and mice pose serious health risks and can cause significant damage to electrical
              wiring, furniture, and property structures. Our Dubai Municipality certified technicians
              use a combination of glue traps, bait stations, and smart traps to eliminate rodent
              infestations safely across Dubai, Sharjah, and Ajman — indoors and outdoors.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              {["Municipality Approved", "Indoor & Outdoor Solutions", "Safe for Kids & Pets", "6 Months Warranty"].map((badge) => (
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
            Our Rodent Control Process in Dubai
          </h3>
          <p className="fs-15 text-muted mb-0">
            A 6-step indoor and outdoor rodent elimination program — from kitchen traps to perimeter bait stations.
          </p>
        </div>

        <div className="row g-3 mb-5">
          {steps.map((s) => (
            <div className="col-md-6" key={s.number}>
              <div className="rc-card box_shadow bg_white h-100 p-3">
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
                Why Our Rodent Control Works in Dubai
              </h3>
              <p className="fs-14 mb-0" style={{ color: "#aaa" }}>
                Six proven methods combined — targeting every rodent entry point, travel route, and nesting area.
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