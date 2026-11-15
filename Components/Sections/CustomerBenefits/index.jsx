export default function CustomerBenefits() {
  const benefits = [
    {
      number: "01",
      title: "Dubai Municipality Licensed & Certified",
      body: "Every pest control treatment is performed by Dubai Municipality certified A-Level technicians — fully compliant with UAE health, safety, and environmental regulations.",
    },
    {
      number: "02",
      title: "Same-Day Pest Control Service in Dubai",
      body: "Cockroaches, bed bugs, termites, rodents — we respond fast. Same-day and emergency pest control available across all areas of Dubai, Sharjah, and Ajman.",
    },
    {
      number: "03",
      title: "Safe & Eco-Friendly Pesticides",
      body: "We use only Dubai Municipality approved, organic pesticides that are safe for children, pets, and food areas — effective against pests without compromising your household's health.",
    },
    {
      number: "04",
      title: "Residential & Commercial Pest Control",
      body: "From studio apartments to large commercial warehouses, we provide tailored pest control solutions for every property type across Dubai, Sharjah, and Ajman.",
    },
    {
      number: "05",
      title: "Annual Pest Control Contracts in Dubai",
      body: "Protect your property year-round with an annual pest control contract. Includes scheduled inspections, preventive treatments, and priority response for any new infestations.",
    },
    {
      number: "06",
      title: "Flexible Scheduling — 7 Days a Week",
      body: "Book your pest control appointment in Dubai at a time that suits you. We operate 7 days a week including weekends and public holidays.",
    },
    {
      number: "07",
      title: "24/7 WhatsApp & Phone Support",
      body: "Our pest control help center is available 24 hours a day via WhatsApp and phone. Get advice, book a visit, or report a re-infestation any time.",
    },
    {
      number: "08",
      title: "Proactive Pest Prevention in Dubai",
      body: "Dubai's warm climate makes year-round pest prevention essential. Our regular inspection program detects early signs of infestation before they become costly problems.",
    },
  ];

  const guarantees = [
    {
      title: "6-Month Service Warranty",
      body: "Every eligible pest control treatment in Dubai comes with a 6-month warranty — your property stays protected long after the visit.",
    },
    {
      title: "Unlimited Free Re-Visits",
      body: "If pests return within the warranty period, we come back at no extra charge — as many times as needed.",
    },
    {
      title: "100% Satisfaction Guarantee",
      body: "We don't stop until the job is done to the highest professional standard. Your satisfaction is our commitment.",
    },
    {
      title: "Transparent Service & Documentation",
      body: "Every pest control visit in Dubai is fully documented — treatment records, pesticide details, and follow-up schedules provided on request.",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <style>{`
        .cb-benefit-card {
          border-radius: 8px;
          border-top: 3px solid #6bb544;
          transition: transform 0.2s;
        }
        .cb-benefit-card:hover {
          transform: translateY(-3px);
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
              Dubai Municipality Licensed
            </span>
            <h2 className="fw-700 mb-3" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#1b1b1b" }}>
              Why Choose Akkad{" "}
              <span style={{ color: "#6bb544" }}>Pest Control Dubai</span>
            </h2>
            <p className="fs-18" style={{ color: "#5a5a5a", maxWidth: "680px", lineHeight: "1.75" }}>
              Akkad Pest Control is a Dubai Municipality licensed company serving homes, villas,
              apartments, offices, restaurants, and warehouses across Dubai, Sharjah, and Ajman.
              Every treatment is carried out by certified A-Level technicians — backed by a
              6-month guarantee and unlimited free call-outs.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="row g-3 mb-5">
          {benefits.map((b) => (
            <div className="col-md-6 col-lg-3" key={b.number}>
              <div className="cb-benefit-card box_shadow bg_white h-100 p-3">
                <div
                  className="fw-700 mb-2"
                  style={{ color: "#6bb544", fontSize: "11px", letterSpacing: "2px" }}
                >
                  {b.number}
                </div>
                <h3 className="fw-700 mb-2" style={{ fontSize: "15px", color: "#1b1b1b" }}>
                  {b.title}
                </h3>
                <p className="mb-0 fs-14" style={{ color: "#5a5a5a", lineHeight: "1.65" }}>
                  {b.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div
          className="p-4 p-md-5"
          style={{ backgroundColor: "#1b1b1b", borderRadius: "8px" }}
        >
          <div className="row mb-4">
            <div className="col-12">
              <h2
                className="fw-700 mb-1"
                style={{ color: "#fff", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
              >
                Our Pest Control Guarantee in Dubai
              </h2>
              <p className="fs-14 mb-0" style={{ color: "#aaa" }}>
                Every service is backed by industry-leading guarantees — because your trust matters more than a one-time job.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {guarantees.map((g) => (
              <div className="col-md-6 col-lg-3" key={g.title}>
                <div style={{ borderTop: "2px solid #6bb544", paddingTop: "16px" }}>
                  <p className="fw-700 fs-15 mb-2" style={{ color: "#fff" }}>
                    {g.title}
                  </p>
                  <p className="fs-13 mb-0" style={{ color: "#999", lineHeight: "1.65" }}>
                    {g.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}