import React from "react";
import faqData from "./faqs.json";
const ServicesFAQs = ({ title, faqs }) => {
  return (
    <>
      <h3 className="mt-4 text-center">{title}</h3>
      <div id="accordion" className="mt-4">
        <div className="accordion">
          {faqData[faqs].map((item, index) => (
            <div key={index} className="accordion-item">
              <h5 className="accordion-header" id={`${faqs}_${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#panel_${faqs}_${index}`}
                  aria-expanded="false"
                  aria-controls={`panel_${faqs}_${index}`}
                >
                  {item.q}
                </button>
              </h5>
              <div
                id={`panel_${faqs}_${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`${faqs}_${index}`}
              >
                <div className="accordion-body">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesFAQs;
