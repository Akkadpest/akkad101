import React from "react";
import Link from "next/link";
import Image from "next/image";

const locations = [
  {
    name: "Dubai",
    image: "/images/dubai.jpg",
    slug: "/location/pest-control-dubai/contact-us",
  },
  {
    name: "Abu Dhabi",
    image: "/images/abu-dhabi.jpg",
    slug: "/professional-pest-control-services-in-abu-dhabi",
  },
  {
    name: "Sharjah",
    image: "/images/sharjah.jpg",
    slug: "/pest-control-sharjah",
  },
];

const ServiceLocations = () => {
  return (
    <section className="container my-5">
      {/* TITLE */}
      <div className="mb-4">
        <h2 className="fw-bold">Pest Control Service Locations</h2>
        <p className="text-muted mb-0">
          Professional pest control services available across major cities in the UAE.
        </p>
      </div>

      {/* LOCATIONS GRID */}
      <div className="row g-4">
        {locations.map((location, index) => (
          <div className="col-md-4 col-12" key={index}>
            <Link
              href={location.slug}
              className="text-decoration-none"
              aria-label={`Pest Control Services in ${location.name}`}
            >
              <div
                className="location-card position-relative overflow-hidden rounded-4 shadow-sm"
                style={{ height: "240px" }}
              >
                {/* IMAGE */}
                <Image
                  src={location.image}
                  alt={`Pest Control Services in ${location.name}`}
                  fill
                  priority={index === 0}
                  style={{ objectFit: "cover" }}
                />

                {/* OVERLAY */}
                <div
                  className="position-absolute bottom-0 start-0 w-100 px-3 py-2"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, rgba(0,0,0,0.75))",
                  }}
                >
                  <h5 className="text-white fw-semibold mb-1">
                    Pest Control in {location.name}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceLocations;
