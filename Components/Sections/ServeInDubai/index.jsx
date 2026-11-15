import Link from "next/link";
import React from "react";
const serveInDuhai = [
  {
    text: "Downtown Dubai",
    url: "/pest-control-downtown-dubai/",
  },
  {
    text: "Dubai South",
    url: "/pest-control-in-dubai-south/",
  },
  {
    text: "Dubai Investment Park",
    url: "/pest-control-in-dubai-investment-park/",
  },
  {
    text: "Mira Oasis",
    url: "/pest-control-in-mira-oasis/",
  },
  {
    text: "Al Rigga",
    url: "/pest-control-in-al-rigga/",
  },
  {
    text: "Nad Al Sheba",
    url: "/pest-control-in-nad-al-sheba/",
  },
  {
    text: "Spring Dubai",
    url: "/pest-control-in-spring-dubai/",
  },
  {
    text: "Al Sufouh",
    url: "/pest-control-in-al-sufouh/",
  },
  {
    text: "Town Square",
    url: "/pest-control-in-town-square/",
  },
  {
    text: "Al Barsha",
    url: "/pest-control-in-al-barsha/",
  },
  {
    text: "Deira",
    url: "/pest-control-deira/",
  },
  {
    text: "JLT",
    url: "/pest-control-jlt/",
  },
];
const AreaWeServeInDuhai = () => {
  return (
    <div className="fluid-container">
      <div className="container ">
        <div className="d-flex areas-section justify-content-center align-item-center flex-wrap">
          <div className="row">
            {" "}
            <h2 className="fw-bold text-center">Areas We Serve in Dubai</h2>
            <h5 style={{fontSize:'18px'}} className="text-center  text-muted mt-2 mb-3">Whether you're in Downtown Dubai, Jumeirah, Dubai Marina, or other parts of the city, Akkad Pest Control has you covered. Our local experts are familiar with Dubai’s unique pest problems and can offer fast, reliable solutions no matter where you are.
            </h5>
          </div>
          <div className=" d-flex justify-content-center flex-wrap">
            {serveInDuhai.map((item, index) => (
              <Link
                key={index}
                class="btn areas-section-items  my-2  "
                href={item.url}
                role="button"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaWeServeInDuhai;
