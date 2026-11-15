import React from "react";
const indoor_service = [
  {
    title: "Inspection",
    label: "Bed Room",
    desc: "Bed bug inspection includes thorough examination of bed frames, mattresses, and bed sheets for signs of infestation.",
    img: "bedbugs_2.webp",
    imgAlt: "cockroaches treatment inside apartment",
  },
  {
    title: "Spray Edgs Mattresses",
    label: "Bed Room",
    desc: "Front, sides and over the mattress spray",
    img: "bedbugs_1.webp",
    imgAlt: "man injection gel treatment inside electriacl socket",
  },
  {
    title: "Misting treatment",
    label: "Living Room",
    desc: "Controlling bedbugs in Sofa’s and Furniture fabrics in living Room , bed room , with specialized insecticides misting treatment.",
    img: "bedbugs_3.webp",
    imgAlt: "kitchen cabenit open for treatment",
  },
  {
    title: "Spray treatment",
    label: "Living Room",
    desc: "spray in Sofa’s edges and Furniture fabrics in living Room , bed room , with specialized insecticides misting treatment.",
    img: "bedbugs_4.webp",
    imgAlt: "pest control treatment for appliances",
  },
  {
    title: "Spray Treatment",
    label: "Bed Room",
    desc: "The spray will also be applied to other furniture inspected by the technician to ensure there are no remaining bugs on it.",
    img: "bedbugs_5.webp",
    imgAlt: "inspection under sink",
  },
  {
    title: "Puff Treatment",
    label: "Electrical Sockets",
    desc: "Electrical sockets can harbor bed bug eggs, which can be targeted and eliminated using a special treatment to kill the eggs inside",
    img: "socket_bedbugs.jpg",
    imgAlt: "inspection under sink",
  },
];
const BedBugsControlDubai = () => {
  return (
    <div className="container container-max-width py-4">
      <h1 className="text-center">Bed Bug Control in Dubai</h1>
      <div>
        <p className="mb-1">
          4.6<span className="dubai-review">⋆ ⋆ ⋆ ⋆ ⋆</span>(14218)
        </p>
        <p className=" text-secondary ">
          30+ years in business{" "}
          <strong className="dubai-review-text ">Open</strong> Serves Dubai
        </p>
      </div>
      <div className="top-bot-line">
        <p className="text-success mb-1 fw-normal fs-6 ">
          Open Now For Booking
        </p>
        <p className="text-secondary mb-0">
          Gel Treatment Spray Indoor, Outdoor
        </p>
        <p className="text-secondary">6 months Warranty</p>
      </div>
      <div className="text-center my-2">
        <strong className="fw-bold  fs-5 info_pop ">
          Pest Control For Bed Bugs
        </strong>
        <div className="mt-2">
          <p
            className="fw-bold  py-4  fs-5 info_pop "
            style={{ backgroundColor: "#f7f7f7" }}
          >
            Indoor Services
          </p>
        </div>
      </div>
      <div className="row ">
        {indoor_service.map((item, index) => (
          <div key={index}>
            <div className=" mt-4 pt-4">
              <div className="d-flex align-items-center  align-center justify-content-between b-0 apartment  ">
                <h5 className="m-0 fw-bold  fs-5 info_pop">
                  {index + 1} - {item.title}
                </h5>
                <span className="">{item.label}</span>
              </div>
              <p className="h6 text-secondary my-2">{item.desc}</p>
              <img
                src={`/images/web_popup/${item.img}`}
                alt={item.imgAlt}
                className="mw-100 rounded"
              />
            </div>
          </div>
        ))}
      </div>
      <section>
        <div className="row my-5">
          <h4 className="fw-bold text-center mt-3">This Service Comes With</h4>
          <div className="mt-2">
            <h2
              className=" text-center py-4  fs-3 info_pop "
              style={{ backgroundColor: "#f7f7f7" }}
            >
              Six Months Warranty
            </h2>
          </div>
          <ul className="my-3">
            <li className="text-muted ">
              Approval Pest Control Technician from Dubai & Abu Dhabi
              municipality
            </li>
            <li className="text-muted ">Approval Certificate Services</li>
            <li className="text-muted ">Approval pesticide Materials</li>
          </ul>
          <strong className="text-center my-3">
            Unlimited Call Out If Insects Come Back
          </strong>
        </div>
      </section>
      <section>
        <div className="my-3">
          <h5 className="text-muted">Before Pest Control</h5>
          <ul>
            <li>
              Cover and protect items like food, cooking utensils, toothbrushes,
              children's soft toys, and anything used by people or pets.
            </li>
            <li>Use an impermeable sheet to cover aquariums or bowls.</li>
            <li>Ensure that all doors and windows are closed.</li>
            <li>
              Take all children and pets out of the home while performing pest
              control.
            </li>
          </ul>
        </div>
        <div className="my-4">
          {" "}
          <h5 className="text-muted">After Pest Control</h5>
          <strong>
            Evacuate the area for 2-3 hours after pest control treatment.
          </strong>
          <div className="my-4">
            <h6>
              {" "}
              <strong className=" dubai-review-text ">Cleaning</strong>
            </h6>
            <ul>
              <li>Clean your home thoroughly.</li>
              <li>
                Use a broom, vacuum cleaner, and mop to get rid of dead pests,
                droppings, and leftover chemicals.
              </li>
              <li>Open all windows to improve ventilation.</li>
              <li>
                Wash items like children's toys and any items that remained with
                water.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h6>
              {" "}
              <strong className=" dubai-review-text ">Disposal</strong>
            </h6>
            <ul>
              <li>Properly dispose of any dead pests or debris.</li>
              <li>Place them in a sealed bag or container.</li>
              <li>
                Place the sealed bag or container in an outdoor trash bin.
              </li>
            </ul>
          </div>
          <ul className="text-danger fw-bold">
            <li>
              Do not touch the floor if it is wet with pesticide; perform proper
              cleaning first.
            </li>
            <li>After completing bed bug services, open all windows.</li>
            <li>Change bed sheets for beds and sofas as needed.</li>
            <li>Wipe surfaces thoroughly.</li>
          </ul>
        </div>
      </section>
      <div className="text-center mt-4">
        <h5>
          {" "}
          <strong>Book Your Appointment Now</strong>
        </h5>
        <p>Our Specialist Will Call You Back Shortly</p>
        <a className="fw-bold" href="tel:+97142710040">
          Call Now 043966211
        </a>
      </div>
      <div className=" d-flex mt-4 ">
        <a
          href="https://wa.me/+971504001344"
          className="fw-normal d-flex flex-row-reverse whatsapp-links mt-2 mb-5"
        >
          Chat with us on WhatsApp
          <img
            src="/images/whatsapp.png"
            style={{ width: "20px" }}
            className="me-2"
            alt="whatsapp icon"
          />
        </a>
      </div>
    </div>
  );
};

export default BedBugsControlDubai;
export const metadata = {
  title: "Bed Bug Control in Dubai | Expert Bed Bug Removal Services",
  description:
    "Looking for professional bed bug control in Dubai? Discover safe and effective solutions to eliminate bed bugs from your home or business, with expert pest control services.",
};