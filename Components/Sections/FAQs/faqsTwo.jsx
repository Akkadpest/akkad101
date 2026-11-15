import React from "react";
import faqData from "./faqs.json";
const FAQTWo = (props) => {
  const { faqs, title = true } = props;

  return (
    <div className="container container-max-width">
      <div
        className="accordion accordion-flush faqs-bg p-5 rounded"
        id="accordionFlushExample"
      >
        <h2 className="faq-heading">{title}</h2>

        {faqData[faqs].map((item, index) => (
          <div className="accordion-item m-0" key={index}>
            <h2 className="accordion-header" id={`flush-heading${index}`}>
              <button
                className="faq-btns collapsed text-md-2"
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
              className="accordion-collapse collapse"
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
  );
};

export default FAQTWo;
