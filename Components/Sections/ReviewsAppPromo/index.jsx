import React from "react";

const ReviewsAppPromo = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-stretch rounded-4 overflow-hidden shadow-sm">

        {/* LEFT: GOOGLE REVIEWS */}
        <div className="col-md-5 col-12 bg-white p-4 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <img
              src="/images/google-reviews.png"
              alt="Google Reviews"
              className="img-fluid"
              style={{ maxWidth: "200px" }}
            />
          </div>

          <p className="fw-semibold mb-2">
            What do customers say about our services?
          </p>

          <div className="d-flex align-items-center mb-2">
            <span className="me-2 text-warning fs-5">★</span>
            <span className="fw-bold">4.6 / 5.0</span>
          </div>

          <p className="text-muted mb-0">
            14,278 reviews as of January 2026
          </p>
        </div>

        {/* RIGHT: APP PROMO (AKKAD GREEN) */}
        <div
          className="col-md-7 col-12 text-white p-4 d-flex align-items-center"
          style={{ backgroundColor: "#6BBE45" }}
        >
          <div className="row align-items-center w-100">

            {/* TEXT */}
            <div className="col-md-7 col-12 mb-3 mb-md-0">
              <p className="mb-1">Download the app and enjoy</p>
              <h2 className="fw-bold mb-1">20% off</h2>
              <p className="mb-3">on your first booking</p>

              {/* APP STORE BUTTONS */}
              <div className="d-flex gap-2">
                <a
                  href="https://apps.apple.com/us/app/akkad-pest-control/id6478436892"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  App Store
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=ae.pestcontrol.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light btn-sm fw-semibold"
                >
                  Play Store
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="col-md-5 col-12 text-center">
              <img
                src="/images/app1.png"
                alt="App Preview"
                className="img-fluid"
                style={{ maxHeight: "220px" }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* READ ALL REVIEWS BUTTON */}
      <div className="row mt-4">
        <div className="col-12 text-center">
          <a
            href="https://share.google/XHjy06lqgVOJQgHGZ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary px-4 py-2 fw-semibold"
          >
            Read all customer reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAppPromo;
