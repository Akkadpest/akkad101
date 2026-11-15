import React from "react";

const ServiceDetails = ({
  id,
  title,
  intro,
  sections,
  whatToExpect,
  dos,
  donts,
}) => {
  return (
    <section id={id} className="container my-5">
      <h2 className="fw-bold mb-3">{title}</h2>
      <p className="text-muted mb-4">{intro}</p>

      {sections.map((section, index) => (
        <div key={index} className="mb-5">
          <h4 className="fw-semibold mb-3">{section.title}</h4>
          <ol className="ps-3">
            {section.points.map((point, i) => (
              <li key={i} className="mb-2">{point}</li>
            ))}
          </ol>
        </div>
      ))}

      <div className="mb-5">
        <h4 className="fw-semibold mb-3">What to expect</h4>
        <ol className="ps-3">
          {whatToExpect.map((step, i) => (
            <li key={i} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>

      <div className="row">
        <div className="col-md-6 col-12 mb-4">
          <h5 className="fw-semibold">Do’s</h5>
          <ul className="ps-3">
            {dos.map((item, i) => (
              <li key={i} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>

        <div className="col-md-6 col-12">
          <h5 className="fw-semibold">Don’ts</h5>
          <ul className="ps-3">
            {donts.map((item, i) => (
              <li key={i} className="mb-2 text-danger">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
