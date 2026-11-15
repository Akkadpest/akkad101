import Link from "next/link";
import React from "react";

const locations = [
  { name: "Pest Control in Al Hikma Tower", url: "/commercial-pest-control/pest-contol-in-al-hikma-tower-dubai" },
  { name: "Pest Control in Almas Tower", url: "/commercial-pest-control/pest-contol-in-almas-tower-dubai" },
  { name: "Pest Control in Convention Tower", url: "/commercial-pest-control/pest-contol-in-convention-tower-dubai" },
  { name: "Pest Control in Index Tower", url: "/commercial-pest-control/pest-contol-in-index-tower-dubai" },
  { name: "Pest Control in Latifa Tower", url: "/commercial-pest-control/pest-contol-in-latifa-tower-dubai" },
  { name: "Pest Control in Park Place Tower", url: "/commercial-pest-control/pest-contol-in-park-place-tower-dubai" },
  { name: "Pest Control in Rolex Tower", url: "/commercial-pest-control/pest-contol-in-rolex-tower-dubai" },
  { name: "Pest Control in Aspect Tower", url: "/commercial-pest-control/pest-contol-in-aspect-tower-dubai" },
  { name: "Pest Control in DAMAC Business Tower", url: "/commercial-pest-control/pest-contol-in-damac-business-tower-dubai" },
  { name: "Pest Control in Fifty-One Tower", url: "/commercial-pest-control/pest-contol-in-fifty-one-tower-dubai" },
  { name: "Pest Control in Majestic Tower", url: "/commercial-pest-control/pest-contol-in-majestic-tower-dubai" },
  { name: "Pest Control in Oxford Tower", url: "/commercial-pest-control/pest-contol-in-oxford-tower-dubai" },
  { name: "Pest Control in Prism Tower", url: "/commercial-pest-control/pest-contol-in-prism-tower-dubai" },
  { name: "Pest Control in Regal Tower", url: "/commercial-pest-control/pest-contol-in-regal-tower-dubai" },
  { name: "Pest Control in Silver Tower", url: "/commercial-pest-control/pest-contol-in-silver-tower" },
  { name: "Pest Control in The Exchange Tower", url: "/commercial-pest-control/pest-contol-in-the-exchange-tower-dubai" },
  { name: "Pest Control in The Executive Tower", url: "/commercial-pest-control/pest-contol-in-the-executive-tower-dubai" },
  { name: "Pest Control in The One Tower", url: "/pest-contol-in-the-one-tower-dubai" },
  { name: "Pest Control in Vision Tower", url: "/commercial-pest-control/pest-contol-in-vision-tower-dubai" },
  { name: "Pest Control in Opal Tower", url: "/commercial-pest-control/pest-control-in-opal-tower-dubai" },
];

const SupplementaryService = () => {
  return (
    <div className="container">
      <p className="d-inline-flex gap-1">
        <button
          className="btn btn-success add-servers"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Commercial Service Locations
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body d-block">
          {locations.map((location, index) => (
            <Link href={location.url} key={index} className="me-2 link-hover">
              {location.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplementaryService;
