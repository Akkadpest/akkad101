import React from "react";
import Link from "next/link";

const CONTACT_DETAILS = {
  duabi_resdidents: "0439666211",
  duabi_resdidents_ph: "+971043966211",
  whatsapp: "97143966211",
  mail: "info@pestcontrol.ae",
};

const LocationSection = ({ showAllSections = true }) => {
  const links = [
    { text: "Termite control", href: "termites-control-dubai" },
{ text: "Cockroach control", href: "cockroaches" },
{ text: "Rodent control", href: "rodent-control" },
{ text: "Ant control", href: "ants-control" },
{ text: "Mosquito control", href: "mosquito-control" },
{ text: "Fly control", href: "fly-control" },
{ text: "Fumigation services", href: "fumigation-services" },
{ text: "Pigeon control and netting", href: "birds" },
{ text: "Disinfection services", href: "location/pest-control-dubai/contact-us" },
{ text: "General pest control", href: "/" },
{ text: "Warehouse pest management", href: "commercial-pest-control/pest-control-for-warehouses" },
{ text: "Commercial pest control", href: "commercial-pest-control" },
{ text: "Residential pest control", href: "/" }

  ];

  const renderLinks = () => {
    return links.map((item, index) => (
      <div key={index} className="col-3 mang-comp-links">
        <Link href={`/${item.href}`}>{item.text}</Link>
      </div>
    ));
  };

  return (
    <section className="location_section">
      <div className="container px-home2-mobile">
        <div className="row justify-content-center mx-auto">
          <div className="col-md-6 pb-3 ">
            <h2 className="black fw-500 home-two-near-text  center-in-mobile homepage-h2-custom akkad_heading_one">
              Pest Control Company 
            </h2>
            <h2 className="black fw-500 mt-0 mb-1 center-in-mobile homepage-h2-custom akkad_heading_one">
              Near Your Home</h2>
            <p className="mb-0 text-muted text-align-center-in-mobile">
              Finding a pest control company nearby is essential for managing infestations in your home or workplace. 
              Whether you live in a villa, apartment, or operate a business, regular inspections and treatments can help prevent serious pest problems. 
              Akkad Pest Control provides professional support to ensure your space stays pest-free.
            </p>
         <p className="show-locat-desc-mobile">Easily Find a Pest Control Comapny Near You</p>,
            <div className="row mt-4 hide-on-mobile">
              <div className="col-md-12 pb-3">
                <p className="mb-0 text-muted">
                  <strong>Dubai Residents:</strong>{" "}
                  <a href={`tel:${CONTACT_DETAILS.duabi_resdidents_ph}`}>
                    {CONTACT_DETAILS.duabi_resdents}
                  </a>
                  <br />
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hi`}
                  >
                    +{CONTACT_DETAILS.whatsapp}
                  </a>{" "}
                  <br />
                  <strong>Mail:</strong>{" "}
                  <a href={`mailto:${CONTACT_DETAILS.mail}`}>
                    {CONTACT_DETAILS.mail}
                  </a>
                </p>
              </div>
            </div>
            <div className="row mt-4 hide-on-desktop-flex mx-auto">
              <div className="d-flex justify-content-between text-center gap-2">
  <a
    href={`tel:${CONTACT_DETAILS.duabi_resdidents_ph}`}
    className="btn flex-fill green-header-button-1"
  >
    <i className="fa fa-phone me-1" /> Call us
  </a>

  <a
    href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=Hi`}
    className="btn btn-success flex-fill green-header-button-1"
  >
    <i className="fa fa-whatsapp me-1" /> WhatsApp
  </a>

  <a
    href={`mailto:${CONTACT_DETAILS.mail}`}
    className="btn btn-success flex-fill green-header-button-1"
  >
    <i className="fa fa-envelope me-1" /> Email
  </a>
</div>

            </div>
          </div>
          <div className="col-md-6 pb-3 px-0 order-two-in-mobile">
            <p className="fs-4 text-muted text-capitalize fw-bold text-center mobile-view-text">
             GreenGuard: Smart Trap for Organic Rodent Control, Trusted by Customers
            </p>
            <video
              width="100%"
              autoPlay={true}
              muted={true}
              playsInline 
              // autoplay
              className="border border-success rounded rounded-3 mobile-view"
            >
              <source src="/videos/video_smart.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
             Organic Rodent Control By Akkad Pest Control 
            </video>
          </div>
        </div>
        {showAllSections && (
          <div className="row justify-content-center mx-auto mt-5 home2-mobi-magcomp-box">
            <div className="col-md-6 pb-3 px-0 order-one-in-mobile">
              <h2 className="akkad_heading_one fw-700 black text-left text-hide">
                Professional Pest Management Company
              </h2>
              <p className="mt-2 text-align-center-in-mobile-1">
                We provide comprehensive pest control services for all types of infestations across Dubai, covering homes, apartments, villas, offices, and commercial properties.
                 Our expert team ensures safe, effective, and municipality-approved treatments tailored to each environment.
              </p>
              <div className="mang-comp-bg">
              <div className="text-show">
              <h2 className=" capital-heading-2 black">Professional Pest</h2>
              <h2 className="capital-heading  black">Management Company</h2>
              <p className="show-on-mobile-hometwo mt-2 text-align-center-in-mobile ">
                We offer pest control for all types of infestations in Dubai
                Homes, Apartments, Villas, and Offices.
              </p>
              </div>
              <div className="row mang-comp-links-container">{renderLinks()}</div>
              </div>
            </div>
            <div className="col-md-6 pb-3 hide-on-mobi">
              <h2 className="akkad_heading_one fw-700 black text-center">
                We Are Here to Help You
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mt-1">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/location/pest-control-dubai/contact-us">Dubai</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Pest Control in Dubai
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        )}
      </div>

    </section>
    
  );
};

export default LocationSection;
