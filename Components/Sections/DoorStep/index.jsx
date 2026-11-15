import React from "react";

const DoorStepItem = ({
  src,
  subtitle,
  title,
  icon,
  desc,
  isReverse = false,
  className='',
  titleClass='',
  subtitleClass=''
}) => {
  return (
    <div
      className="row mx-auto  mt-3"
      style={{ flexDirection: isReverse ? "row-reverse" : "row" }}
    >
      <div className="col-md-6 pb-3 remove-padding-hometwo">
        {src ? (
          <img src={`/images/${src}`} className="home-box-in-image" />
        ) : (
          ""
        )}
      </div>

      <div className="col-md-6 pb-3 remove-padding-hometwo-text">
        <div>
          <img
            src={`/images/${icon}`}
            style={{ maxWidth: 40, marginRight: 5 }}
          />{" "}
          <span className={`gray-text-1 ${subtitleClass} home2-mobi-treat-heading`}>
            {subtitle}
          </span>
        </div>
        <div className={` hometwo-inspection-text ${className}`}>
          <h5 className={`fw-500 mb-2 ${titleClass}`}>{title}</h5>
          <p className="mb-0" dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
      </div>
    </div>
  );
};

const DoorStep = () => {
  return (
    <>
      <section className="doorstep_location_section not-hide-on-mobi">
        <div className="container remove-padding-hometwo">
          <div className="text-center pb-2">
            <h5 className="akkad_heading_one home2-mobi-sol-heading fw-600 black ">
              Professional Pest Control Services in Dubai – Trusted & Guaranteed
            </h5>
          </div>

          <DoorStepItem
            src="home-pest-control.fw-1.webp"
            subtitle="Inspection, Treatment & Guarantee"
            title="Certified Pest Control in Dubai with Proven Results"
            icon="search-icon.webp"
            titleClass="inspection-title"
            desc={`Our Dubai Municipality-approved technicians conduct a detailed inspection to identify pest activity, entry points, and infestation levels. We then apply safe, odorless, and eco-friendly treatments to ensure long-term pest control for your home and family.`}
          />

          <DoorStepItem
            src="home-pest-control2.webp"
            subtitle="Home & Residential Pest Control in Dubai"
            title="Guaranteed Pest Control for Apartments, Villas & Homes"
            titleClass="eradicate-title"
            icon="note-pad-icon.webp"
            isReverse={true}
            className='hometwo-Eradicate-text'
            desc={`<p className="mb-0">
            We provide professional residential pest control services across Dubai, covering apartments, villas, and residential buildings. Our treatments effectively control cockroaches, ants, termites, rodents, bed bugs, flies, rats, and mice using approved methods.
            <br /><br />
            </p>
            <p className="mb-0">
            All services include a warranty with free follow-up visits if pests return during the covered period. We use gel and spray treatments for cockroaches, bait stations for rodents, and specialized bed bug treatments to ensure complete pest elimination.
            </p>
            <br />
            <ul>
              <li>Apartment pest control services</li>
              <li>Villa pest control services</li>
              <li>Home pest control with warranty</li>
              <li>Cockroach, ant & rodent control</li>
            </ul>`}
          />

          <DoorStepItem
            src="cockroacehs_bait_station.webp"
            subtitle="Commercial Pest Control Services in Dubai"
            title="Reliable Pest Control Solutions for Businesses & Offices"
            titleClass="commercial-title"
            subtitleClass="commercial-subtitle"
            icon="search-icon.webp"
            className='Commercial-hometwo-heading'
            desc={`<p className="mb-0">
            Akkad Pest Control delivers customized commercial pest control programs that comply with Dubai Municipality regulations. We help businesses maintain hygiene standards, prevent infestations, and protect staff, customers, and property.
            <br /><br />
            </p>
            We serve restaurants, hotels, offices, retail outlets, schools, hospitals, supermarkets, and shopping malls with scheduled treatments, monitoring, and detailed service reports.`}
          />

          <div className="comm-pest-grid">
            {[
              "Restaurants",
              "Hotels and Cafeteria",
              "Buildings",
              "Shopping Malls",
              "Accommodations",
              "Business Offices",
              "Supermarket",
              "Hospitals",
            ].map((service) => (
              <div key={service} className="comm-pest-grid-item">
                <button className="comm-pest-button">{service}</button>
              </div>
            ))}
          </div>

          <DoorStepItem
            subtitle="Common Pest Problems in Dubai Homes & Businesses"
            title="Most Common Pests Found in Dubai"
            icon="note-pad-icon.webp"
            isReverse={true}
            className='Commercial-hometwo-heading'
            titleClass="common-title"
            desc={`<p className="mb-0">
            Dubai’s climate creates ideal conditions for pest infestations year-round. Common indoor pests include cockroaches in kitchens and bathrooms, rodents around garbage areas, bed bugs in bedrooms and wardrobes, and ants feeding on food spills.
            <br /><br />
            </p>
            Outdoor areas may also experience mosquitoes, flies, bees, and wasp infestations that require immediate professional control.`}
          />

        </div>
      </section>
    </>
  );
};

export default DoorStep;
