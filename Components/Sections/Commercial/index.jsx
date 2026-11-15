import Link from "next/link";
import React from "react";

const locations = [
  { name: "Pest Control for Car Garages", url: "/commercial-pest-control/pest-control-for-car-garages" },
  { name: "Pest Control for Hospitals", url: "/commercial-pest-control/pest-control-for-hospitals" },
  { name: "Pest Control for Pharmacies", url: "/commercial-pest-control/pest-control-for-pharmacies" },
  { name: "Pest Control for Retail Stores", url: "/commercial-pest-control/pest-control-for-retail-stores" },
  { name: "Pest Control for schools", url: "/commercial-pest-control/pest-control-for-schools" },
  { name: "Pest Control for Restaurants", url: "/commercial-pest-control/pest-control-for-restaurants" },
  { name: "Pest Control for Dental Offices", url: "/commercial-pest-control/pest-control-for-dental-office" },
  { name: "Pest Control for Warehouses", url: "/commercial-pest-control/pest-control-for-warehouses" },
  { name: "Pest Control for Hair Salons", url: "/commercial-pest-control/pest-control-for-hair-salon" },
  { name: "Pest Control for Fitness Center ", url: "/commercial-pest-control/pest-control-for-fitness-center-gym" },



];

const Commercial = () => {
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
          Other Commercial Service 
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

export default Commercial;
