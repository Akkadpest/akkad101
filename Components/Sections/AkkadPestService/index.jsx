import Link from "next/link";
import React from "react";

const AkkadPestControlServices = ({largeSize}) => {
  const AkkadServices = [
    {
      text: "Rodent Control",
      url: "rodent-control-dubai/",
    },
    {
      text: "Ant Control",
      url: "/pest-control-service-in-dubai/",
    },
    {
      text: "Cockroach Control",
      url: "/cockroaches-in-dubai/",
    },
    {
      text: "Termite Control",
      url: "/termite-control-cost/",
    },
  ];
  return (
    <div>
      <div className=" mt-5 d-flex align-center justify-content-center">
        <div className= {`${largeSize ? "downtown-dubai-services-large":"downtown-dubai-services"}`}>
          <h2>Akkad Pest Control Service</h2>
          <p className="mb-0">Serving Downtown Dubai with Expertise and Care</p>
        </div>
      </div>
      <h2 className="downtown-dubai-services-heading mt-4">
        Our Pest Control Services
      </h2>
      <div className="d-flex align-center justify-content-center mb-4 flex-wrap">
        {AkkadServices.map((item, index) => (
          <Link
            href={item.url}
            className= {`${largeSize ? "downtomn-service-item-large  fs-4 d-block":"downtomn-service-item fs-4 d-block "}`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className=" mt-4 d-flex align-center justify-content-center">

        <div className={`${largeSize ? "py-2 downtown-dubai-services-large":"downtown-dubai-services"}`}>
      <p className="fs-6">Contact us:+97143966211 |
        <Link href="/" className="text-white py-2 downtown-service-link"> www.pestcontrol.ae</Link>
      </p>
         
        </div>
        </div>
    </div>
  );
};

export default AkkadPestControlServices;
