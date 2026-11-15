import React from "react";

const TabbyBanner = () => {
  return (
    <div className="container-fluid py-2" style={{ backgroundColor: "#f6fbf9" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">

            <div
              className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill"
              style={{
                backgroundColor: "#eafff5",
                fontSize: "14px",
                color: "#000"
              }}
            >
              <span
                className="px-2 py-1 rounded fw-bold"
                style={{
                  backgroundColor: "#3fd39c",
                  fontSize: "13px"
                }}
              >
                tabby
              </span>
             Pay by Tabby –  for pest control services
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbyBanner;
