import React from "react";
const WHY_AKKAD_DATA = [
  {
    title: "Warranty",
    mobileTitle: "6 Months Warranty ",
    img: "ico1.webp",
    imgSmall:"warrenty-2.png",
    desc: "Enjoy an exclusive 6-month warranty , Unlimited Call out we will not let you till we solve your problem",
  },
  {
    title: "Experience",
    mobileTitle: "Unlimited Call-out Support  ",
    img: "ico2.webp",
    imgSmall:"support-2.png",
    desc: "Akkad proudly boasts 23 years of UAE expertise, honored with 13 awards from Dubai Municipality's Pest Control Section.",
  },
  {
    title: "Support",
    mobileTitle: "25 Years Experience  ",
    img: "ico3.webp",
    imgSmall:"experience-2.png",
    desc: "Book within 180 days of starting services for a free change service. Just book via phone or our app, and our skilled team will come to you.",
  },
  {
    title: "Trust",
    mobileTitle: "Certified By Dubai Municipality ",
    img: "ico4.webp", 
    imgSmall:"approch-2.png",
    desc: "Dubai Municipality-endorsed Pest Control Services For Residential or Commercial Properties.",
  },
];

const WhyAkkad = () => {
  return (
    <section className="why_akkad">
      <div className="container near-you-container">
        <div className="row justify-content-center pb-4 why_akkad_row_1">
          <div className="col-md-10">
            <div className="text-center pb-3 ">
              <h3 className="xs-mt-2 akkad_white_text akkad_heading_one fw-700 black mt-5">
               Why Akkad Pest Control?
              </h3>
              <p className="mb-0 akkad_mobile_text">
               For more than 23 years, we are safeguarding what's most valuable to you. Our trusted local specialists insects control go above and beyond to ensure the well-being of you and your home, 365 days a year. When you choose us to address your concerns, it's not merely a commitment it's an assurance.
              </p>
            </div>
          </div>
        </div>
        <div className="row why_akkad_row">
          {WHY_AKKAD_DATA.map((item, index) => (
            <div key={index} className="col-md-3 col-xs-6 col-sm-6 mb-30 text-center ">
              <img src={`/images/${item.img}`} className="hide-garenty-in-mob"/>
              <img src={`/images/new-home/${item.imgSmall}`}
              className="cover w-50 show-garenty-in-mob" 
                alt={item.title}  />
              <h5 className="mb-1 hide-title-on-desktop">{item.title}</h5>
              <h5 className="mb-1 show-title-on-mobile">{item.mobileTitle}</h5>
              <p className="mb-0 near-you-card-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* CERTIFICATIONS SECTION */}
<div className="container my-5">
  <div className="row text-center mb-4">
    <div className="col-12">
      <h2 className="fw-bold">Certifications</h2>
    </div>
  </div>

  <div className="row text-center align-items-start">
    {/* BPCA */}
    <div className="col-md-4 col-12 mb-4">
      <img
        src="/images/pct.jpeg"
        alt="BPCA Certification"
        className="img-fluid mb-3"
        style={{ maxHeight: "155px" }}
      />
      <h6 className="fw-semibold">PCT</h6>
      <p className="small text-muted">
The best pest control companies in Dubai offer a perfect balance of quality service, safety, and affordability.   
   </p>
    </div>

    {/* NPMA */}
    <div className="col-md-4 col-12 mb-4">
      <img
        src="/images/npma.jpeg"
        alt="NPMA Certification"
        className="img-fluid mb-3"
        style={{ maxHeight: "155px" }}
      />
      <h6 className="fw-semibold">NPMA</h6>
      <p className="small text-muted">
        Certified for professional standards and excellence in pest management services In Dubai
      </p>
    </div>

    {/* Dubai Municipality */}
    <div className="col-md-4 col-12 mb-4">
      <img
        src="/images/dm.jpeg"
        alt="Dubai Municipality Certification"
        className="img-fluid mb-3"
        style={{ maxHeight: "155px" }}
      />
      <h6 className="fw-semibold">Dubai Municipality</h6>
      <p className="small text-muted">
        DM Class A Certificate for compliance with top safety standards 2025
      </p>
    </div>
  </div>

  <div className="row mt-4">
  <div className="col-12 text-center">
    <a
      href="https://wa.me/97143966211?text=Hello%20I%20want%20to%20know%20more%20about%20your%20pest%20control%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="btn px-4 py-2 rounded-pill fw-semibold"
      style={{ backgroundColor: "#6BBE45", color: "#fff" }}
    >
      Explore Our Pest Control Services
    </a>
  </div>
</div>
</div>
    </section>
  );
};

export default WhyAkkad;
