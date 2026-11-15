import Link from "next/link";
import React from "react";

const locations = [
  { name: "Pest Control in Abu Shagara", url: "/sharjah/pest-control-in-abu-shagara" },
  { name: "Pest Control in Al Badie", url: "/sharjah/pest-control-in-al-badie" },
  { name: "Pest Control in Al Butina", url: "/sharjah/pest-control-in-al-butina" },
  { name: "Pest Control in Al Ettihad Street Sharjah", url: "/sharjah/pest-control-in-al-ettihad-street-sharjah" },
  { name: "Pest Control in Al Fayha", url: "/sharjah/pest-control-in-al-fayha" },
  { name: "Pest Control in Al Gharb", url: "/sharjah/pest-control-in-al-gharb" },
  { name: "Pest Control in Al Gulayaa", url: "/sharjah/pest-control-in-al-gulayaa" },
  { name: "Pest Control in Al Heerah", url: "/sharjah/pest-control-in-al-heerah" },
  { name: "Pest Control in Al Jada", url: "/sharjah/pest-control-in-al-jada" },
  { name: "Pest Control in Al Khan", url: "/sharjah/pest-control-in-al-khan" },
  { name: "Pest Control in Al Madam Sharjah", url: "/sharjah/pest-control-in-al-madam-sharjah" },
  { name: "Pest Control in Al Majaz", url: "/sharjah/pest-control-in-al-majaz" },
  { name: "Pest Control in Al Mamzar Sharjah", url: "/sharjah/pest-control-in-al-mamzar-sharjah" },
  { name: "Pest Control in Al Mujarrah", url: "/sharjah/pest-control-in-al-mujarrah" },
  { name: "Pest Control in Al Nabba", url: "/sharjah/pest-control-in-al-nabba" },
  { name: "Pest Control in Al Nahda", url: "/sharjah/pest-control-in-al-nahda" },
  { name: "Pest Control in Al Nasreya", url: "/sharjah/pest-control-in-al-nasreya" },
  { name: "Pest Control in Al Qasba", url: "/sharjah/pest-control-in-al-qasba" },
  { name: "Pest Control in Al Qasimia", url: "/sharjah/pest-control-in-al-qasimia" },
  { name: "Pest Control in Al Riqqa Sharjah", url: "/sharjah/pest-control-in-al-riqqa-sharjah" },
  { name: "Pest Control in Al Sajaa Sharjah", url: "/sharjah/pest-control-in-al-sajaa-sharjah" },
  { name: "Pest Control in Al Sharq", url: "/sharjah/pest-control-in-al-sharq" },
  { name: "Pest Control in Al Shuwaihean", url: "/sharjah/pest-control-in-al-shuwaihean" },
  { name: "Pest Control in Al Suyoh Sharjah", url: "/sharjah/pest-control-in-al-suyoh-sharjah" },
  { name: "Pest Control in Al Taawun", url: "/sharjah/pest-control-in-al-taawun" },
  { name: "Pest Control in Al Tai", url: "/sharjah/pest-control-in-al-tai" },
  { name: "Pest Control in Al Wahda", url: "/sharjah/pest-control-in-al-wahda" },
  { name: "Pest Control in Corniche Al Buhaira", url: "/sharjah/pest-control-in-cornich-al-buhaira" },
  { name: "Pest Control in Halwan Sharjah", url: "/sharjah/pest-control-in-halwan-sharjah" },
  { name: "Pest Control in Hamriyah Free Zone Sharjah", url: "/sharjah/pest-control-in-hamriyah-free-zone-sharjah" },
  { name: "Pest Control in Kalba Sharjah", url: "/sharjah/pest-control-in-kalba-sharjah" },
  { name: "Pest Control in Maryam Island", url: "/sharjah/pest-control-in-maryam-island" },
  { name: "Pest Control in Mughaidir Sharjah", url: "/sharjah/pest-control-in-mughaidir-sharjah" },
  { name: "Pest Control in Muwaileh Commercial", url: "/sharjah/pest-control-in-muwaileh-commercial" },
  { name: "Pest Control in Rolla Area", url: "/sharjah/pest-control-in-rolla-area" },
  { name: "Pest Control in Sharjah Industrial Area", url: "/sharjah/pest-control-in-sharjah-industrial-area" },
  { name: "Pest Control in Sharjah Waterfront City", url: "/sharjah/pest-control-in-sharjah-waterfront-city" },
  { name: "Pest Control in Sustainable City Sharjah", url: "/sharjah/pest-control-in-sustainable-city-sharjah" },
  { name: "Pest Control in Tilal City", url: "/sharjah/pest-control-in-tilal-city" },
  { name: "Pest Control in Um Altaraffa", url: "/sharjah/pest-control-in-um-altaraffa" },
  { name: "Pest Control in Wasit Sharjah", url: "/sharjah/pest-control-in-wasit-sharjah" },
];

const Sharjahserving = () => {
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
         Sharjah Serving Locations
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

export default Sharjahserving;
