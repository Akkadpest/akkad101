import React from "react";
import faqData from "./faqs.json";
const FAQThree = (props) => {
    const { faqs, title = true } = props;
  return (
    <>
    <div className="row">
    <div className="col-lg-6">
      <div
        className="accordion faq-one-border bg-light"
        id="accordionPanelsStayOpenExample"
      >
        <h3 className="faq-heading">{title}</h3>
        {faqData[faqs].map((item, index) => (
          <div className="bg-light accordion-item m-0" key={index}>
          <h2 className="accordion-header bg-light" id={`flush-heading${index}`}>
            <button
              className="faq-three-btn collapsed text-md-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${index}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${index}`}
            >
              {item.q}
            </button>
          </h2>
          <div
            id={`flush-collapse${index}`}
            className="accordion-collapse collapse bg-light"
            aria-labelledby={`flush-heading${index}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body faq-btns-left-border">
              {item.a}
            </div>
          </div>
        </div>
        ))}
      </div>
      </div>
      </div>
      
    </>
  );
};

export default FAQThree;
