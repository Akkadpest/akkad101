export const metadata = {
  title: "Facts & Statistics | Akkad Pest Control",
  description:
    "Key facts and operational statistics of Akkad Pest Control. Built on compliance, systems, and scalable pest control operations in the UAE.",
  alternates: {
    canonical: "https://www.pestcontrol.ae/facts-and-stats",
  },
};

export default function FactsAndStatsPage() {
  return (
    <main className="container py-5">

      {/* HEADER */}
      <section className="text-center mb-5">
        <h1 className="fw-bold">Facts & Statistics</h1>
        <p className="text-muted fs-5">
          A transparent look at how Akkad Pest Control operates and scales
        </p>
      </section>

      {/* CORE STATS */}
      <section className="row g-4 text-center mb-5">

        <div className="col-md-3 col-6">
          <div className="p-4 border rounded h-100">
            <h2 className="fw-bold text-success">100%</h2>
            <p className="mb-0">Municipality-Approved Chemicals</p>
          </div>
        </div>

        <div className="col-md-3 col-6">
          <div className="p-4 border rounded h-100">
            <h2 className="fw-bold text-success">24–48 hrs</h2>
            <p className="mb-0">Average Response Time</p>
          </div>
        </div>

        <div className="col-md-3 col-6">
          <div className="p-4 border rounded h-100">
            <h2 className="fw-bold text-success">12 Months</h2>
            <p className="mb-0">Annual AMC Contract Model</p>
          </div>
        </div>

        <div className="col-md-3 col-6">
          <div className="p-4 border rounded h-100">
            <h2 className="fw-bold text-success">CRM</h2>
            <p className="mb-0">Centralized Job Management</p>
          </div>
        </div>

      </section>

      {/* OPERATIONAL FACTS */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Operational Facts</h2>
        <ul>
          <li>All services follow documented SOPs and treatment procedures</li>
          <li>Certified and trained pest control technicians only</li>
          <li>Digital service reports for every completed job</li>
          <li>Complaint and ticketing system for quality control</li>
          <li>Strict safety, environmental, and compliance standards</li>
        </ul>
      </section>

      {/* SERVICE COVERAGE */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Service Coverage</h2>
        <div className="row g-4">

          <div className="col-md-6">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-semibold">Residential</h5>
              <p className="mb-0">
                Apartments, studios, villas, labor accommodations, and
                residential compounds.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-semibold">Commercial</h5>
              <p className="mb-0">
                Offices, warehouses, retail shops, restaurants, hotels,
                factories, and corporate facilities.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Business Model Highlights</h2>
        <ul>
          <li>Subscription and AMC-based revenue model</li>
          <li>Monthly service cycles with scheduled follow-ups</li>
          <li>Recurring income focus rather than one-time jobs</li>
          <li>Scalable operations through franchise expansion</li>
          <li>Territory-based service allocation</li>
        </ul>
      </section>

      {/* SYSTEM & TECHNOLOGY */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Systems & Technology</h2>
        <ul>
          <li>CRM for bookings, AMC tracking, and customer history</li>
          <li>Call logging and inquiry tracking</li>
          <li>Technician job allocation and reporting</li>
          <li>Digital invoicing and payment records</li>
          <li>Performance monitoring and audits</li>
        </ul>
      </section>

      {/* FOOTER CTA */}
      <section className="text-center mt-5">
        <p className="fs-5">
          Akkad Pest Control is built on systems, compliance, and long-term
          partnerships — not shortcuts.
        </p>
        <a href="/franchise" className="btn btn-success btn-lg mt-3">
          Explore Franchise Opportunity
        </a>
      </section>

    </main>
  );
}
