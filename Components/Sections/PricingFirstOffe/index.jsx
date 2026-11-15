export default function PricingFirstOffer() {
  const akkadGreen = "#7BC043";

  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Pest Control Dubai Pricing</h2>
          <p className="text-muted fs-5">
We offer discounts across multiple ranges throughout the year.          </p>
        </div>

        <div className="accordion" id="pricingAccordion">

          {/* APARTMENT */}
          <div className="accordion-item mb-3 shadow-sm">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold text-white"
                style={{ backgroundColor: akkadGreen }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#apartmentPricing"
              >
                 Apartment Pest Control Pricing
              </button>
            </h2>
            <div
              id="apartmentPricing"
              className="accordion-collapse collapse"
              data-bs-parent="#pricingAccordion"
            >
              <div className="accordion-body p-0">
                <table className="table table-striped mb-0">
                  <tbody>
                    <tr><td>Studio / Common Areas</td><td className="text-end">189 AED</td></tr>
                    <tr><td>1BHK</td><td className="text-end">210 AED</td></tr>
                    <tr><td>2BHK</td><td className="text-end">262.5 AED</td></tr>
                    <tr><td>3BHK</td><td className="text-end">367.5 AED</td></tr>
                    <tr><td>4BHK</td><td className="text-end">420 AED</td></tr>
                    <tr><td>5BHK</td><td className="text-end">472.5 AED</td></tr>
                    <tr><td>6BHK</td><td className="text-end">525 AED</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* VILLA */}
          <div className="accordion-item mb-3 shadow-sm">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold text-white"
                style={{ backgroundColor: akkadGreen }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#villaPricing"
              >
                Villa / Townhouse Pest Control Pricing
              </button>
            </h2>
            <div
              id="villaPricing"
              className="accordion-collapse collapse"
              data-bs-parent="#pricingAccordion"
            >
              <div className="accordion-body p-0">
                <table className="table table-striped mb-0">
                  <tbody>
                    <tr><td>Common Areas</td><td className="text-end">210 AED</td></tr>
                    <tr><td>Common Areas + Outside</td><td className="text-end">367.5 AED</td></tr>
                    <tr><td>1BR</td><td className="text-end">315 AED</td></tr>
                    <tr><td>2BR</td><td className="text-end">472.5 AED</td></tr>
                    <tr><td>3BR</td><td className="text-end">525 AED</td></tr>
                    <tr><td>4BR</td><td className="text-end">577.5 AED</td></tr>
                    <tr><td>5BR</td><td className="text-end">630 AED</td></tr>
                    <tr><td>6BR</td><td className="text-end">735 AED</td></tr>
                    <tr><td>7BR</td><td className="text-end">840 AED</td></tr>
                    <tr><td>8BR</td><td className="text-end">935 AED</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* BED BUG */}
          <div className="accordion-item mb-3 shadow-sm">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold text-white"
                style={{ backgroundColor: akkadGreen }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bedBugPricing"
              >
                 Bed Bug Treatment – Apartment
              </button>
            </h2>
            <div
              id="bedBugPricing"
              className="accordion-collapse collapse"
              data-bs-parent="#pricingAccordion"
            >
              <div className="accordion-body p-0">
                <table className="table table-striped mb-0">
                  <tbody>
                    <tr><td>Studio</td><td className="text-end">210 AED</td></tr>
                    <tr><td>1BHK</td><td className="text-end">262.5 AED</td></tr>
                    <tr><td>2BHK (3–4 mattresses)</td><td className="text-end">315 AED</td></tr>
                    <tr><td>3BHK (5–6 mattresses)</td><td className="text-end">367.5 AED</td></tr>
                    <tr><td>4BHK</td><td className="text-end">420 AED</td></tr>
                    <tr><td>5BHK</td><td className="text-end">472.5 AED</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SPECIAL SERVICES */}
          <div className="accordion-item mb-3 shadow-sm">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold text-white"
                style={{ backgroundColor: akkadGreen }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#specialServices"
              >
                 Specialized Pest Control Services
              </button>
            </h2>
            <div
              id="specialServices"
              className="accordion-collapse collapse"
              data-bs-parent="#pricingAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Wasp nest / Beehive removal</span>
                    <strong>262.5 AED</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Outdoor fogging</span>
                    <strong>315 AED</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
