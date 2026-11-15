import React from "react";

const QuickBookingBanner = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center g-4">

        {/* LEFT CARD */}
        <div className="col-md-5 col-12">
          <div className="border rounded-4 p-4 h-100 bg-white">
            <div className="mb-3">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#6BBE45",
                  color: "#fff",
                  fontSize: "20px"
                }}
              >
                ⏱
              </div>
            </div>

            <h4 className="fw-bold mb-2">Quick Booking</h4>
            <p className="text-muted mb-0">
              Quick booking and scheduling. Book your appointment conveniently
              via our Website, Mobile App or through WhatsApp.
            </p>
          </div>
        </div>

        {/* RIGHT BANNER */}
        <div className="col-md-7 col-12">
          <div
            className="rounded-4 d-flex align-items-center justify-content-center text-white"
            style={{
              backgroundColor: "#6BBE45",
              minHeight: "200px"
            }}
          >
            <span className="fw-semibold">App Preview</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuickBookingBanner;
