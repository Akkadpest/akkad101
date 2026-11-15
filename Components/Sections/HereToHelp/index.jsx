import React from "react";

const EMAIL = "info@pestcontrol.ae";
const CONTACT = "0439666211";
const HereToHelp = () => {
  return (
    <section className="footer-above-banner">
      <div className="container text-start">
        <div className="row banner">
          <div className="col-md-5 text-white">
            <div className="banner-text-heading fw-700 mobile-text-center">
            We are here to help
            </div>
            <div className="banner-text-para fw-700 fs-14 mobile-text-center">
            Reach out to us through any of these channels
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-7 text-white">
                <div className="d-flex align-items-center mobile-margin-top-30">
                  <div className="ms-4">
                    <img
                      className="img-fluid max-width-70"
                      src="/images/contact-email-icon.webp"
                    />
                  </div>

                  <div className="ms-3">
                    <div className="fw-700">Email Support</div>
                    <div className="banner-icon-text fw-700 fs-22">
                      <a className="text-white" href={`mailto:${EMAIL}`}>
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 text-white">
                <div className="d-flex align-items-center mobile-margin-top-30">
                  <div className="ms-4">
                    <img
                      className="img-fluid max-width-70"
                      src="/images/contact-phone-icon.webp"
                    />
                  </div>

                  <div className="ms-3">
                    <div className="fw-700">Phone Support</div>
                    <div className="banner-icon-text fw-700 fs-14">
                      <a className="text-white" href={`tel:+971${CONTACT}`}>
                        {CONTACT}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HereToHelp;
