import React from "react";
import faqData from "./faqs.json";
const FAQs = (props) => {
  const { faqs, title, imageToShow = true } = props;
  return (
    <section className="akkad_faq">
      <div className="container">
        <div className="row align-items-center">
          {imageToShow ? (
            <div className="col-md-3 text-center mb-25 hide-on-mobile">
              <img src="/images/beapest.webp" className="img-fluid" alt="" />
            </div>
          ) : (
            ""
          )}

          <div className={`col-md-${imageToShow ? "9" : "12"}`}>
            <h2 className="akkad_heading_one fw-700 black mb-4 text-center">
              {title}
            </h2>
            <div className="accordion" id="accordionExample">
              {faqData[faqs].map((item, index) => (
                <div key={index} className="accordion-item">
                  <h3 className="accordion-header" id={`faq_question_${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse_${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse_${index}`}
                    >
                      {item.q}
                    </button>
                  </h3>
                  <div
                    id={`collapse_${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`faq_question_${index}`}
                    data-bs-parent="#accordionExample"
                    style={{}}
                  >
                    <div className="accordion-body">
                      <p dangerouslySetInnerHTML={{ __html: item.a }}></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
