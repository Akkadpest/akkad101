import React from "react";
import ServicesFAQs from "../../ServicesFAQs";

const INDOOR_SERVICES = [
  {
    title: "Gel treatment",
    label: "kitchen cabinet",
    desc: "Apply Gel Treatment in key areas inside kitchen cabinets",
    img: "cockroaches_gel.webp",
    imgAlt: "pest man pasting gel treatment",
  },
  {
    title: "Gel treatment",
    label: "Kitchen Cupbord",
    desc: "Apply gel in wall cracks, Gel treatment will be applied inside electrical sockets, along skirting boards, and in cracks and crevices..",
    img: "ants_3.webp",
    imgAlt: "pest man pasting gel treatment",
  },
  {
    title: "Gel Treatment",
    label: "Kitchen Appliances",
    desc: "Targetting Kitchen appliances which be trap for ants tunnel and disturbing colonies.",
    img: "ants_2.webp",
    imgAlt: "kitchen cabenit open for treatment",
  },
  {
    title: "Ants Bait Station",
    label: "Bathroom",
    desc: "Placing Bait Station For ants for long term , Safe for Kids and Pets",
    img: "ants_5.webp",
    imgAlt: "pest control treatment for appliances",
  },
  {
    title: "Spray Treatment",
    label: "Bed Room",
    desc: "Placing Bait Station inside Rooms for heavy infestation , Safe for Kids and Pets",
    img: "ants_6.webp",
    imgAlt: "inspection under sink",
  },
  {
    title: "Spray Treatment",
    label: "Bathroom",
    desc: "Applying Spray inside bathroom contorlling Ants tunnel and missleading ants infestation ",
    img: "ants_4.webp",
    imgAlt: "pest control treatment for toilet ",
  },
  {
    title: "Bait Station",
    label: "Additional Services",
    desc: "Bait station for ants , Can Mentain Services Up one year, Safe for Kids and Pets.",
    img: "akkad_bait_station.webp",
    imgAlt: "bait station for cockroaches ",
  },
];

const Apartment = () => {
  return (
    <>
      <div className="p-4 bg-light rounded-top-10px overflow-auto flex-grow-1 row m-0">
        <div className="col-12 m-auto w-100">
          <div id="content">
            <div id="img_header">
              <img
                src="/images/web_popup/banner_apartment_ants.jpg"
                className="img_center rounded"
              />
            </div>
            <div id="main_title_pop">
              <h3 className="text-center mt-5">Ants Control Apartment</h3>
            </div>
            <div id="rating_pop">
              <p className="mt-4">
                4.6
                <span style={{ fontSize: "25px", color: "rgb(250, 187, 5" }}>
                  ⋆ ⋆ ⋆ ⋆ ⋆
                </span>
                (14218)
              </p>
            </div>
            <div className="text_green">
              <p>
              30+ years in business <span>Open</span> Serves Dubai
              </p>
            </div>
            <div id="links_pop">
              <hr className="mt-4" />
              <div className="info_pop">
                <p className="text-success fw-500 ">
                Open Now For Booking
                </p>
                <p className="text-muted ">Gel Treatment Spray Indoor , OutDoor</p>
                <p className="text-muted ">6 months Warranty </p>
              </div>
              <hr />
              <div className="apartment">
                <h4>Ants Control For Apartment</h4>
                <h4 className="pc_popup_heading bolder p-3">
                Indoor Services
                </h4>

                {INDOOR_SERVICES.map((item, index) => (
                  <div key={index}>
                    <div className="flex position-relative  mt-4 pt-4">
                     <div className="d-flex align-items-center align-center justify-content-between "> <h5 className="m-0">
                        {index + 1} - {item.title}
                      </h5>
                      <span>{item.label}</span></div>
                      <p className="h6">{item.desc}</p>
                      <img
                        src={`/images/web_popup/${item.img}`}
                        alt={item.imgAlt}
                        className="img_center rounded"
                      />
                    </div>
                    <hr />
                  </div>
                ))}
              </div>

              <div id="warranty" className="mt-5">
                <h4 className="text-center fw-800 ">
                  This Services Comes With
                </h4>
                <p className="fs-3 text-center pc_popup_heading p-2 ">
                  Six Months Warranty
                </p>
                <ul>
                  <li className="">
                    Approval Pest Control Technician from Dubai &amp; Abu Dhabi
                    municipality
                  </li>
                  <li className="">Approval Certificate Services</li>
                  <li className="">Approval pesticide Materials </li>
                </ul>
                <p className="text-center bolder">
                  Unlimited Call out if insects Come back
                </p>
                <div>
                  <img
                    src="/images/web_popup/warranty_man.webp"
                    className="img_center w-100 rounded"
                  />
                </div>
              </div>
              <hr />
              <div id="prevention" className="mt-5">
                <h5 className="hiw_h5">Befoe pest Control </h5>
                <ul>
                  <li className="fw-400">
                    Cover and protect items like food, cooking utensils,
                    toothbrushes, children's soft toys, and anything used by
                    people or pets.
                  </li>
                  <li className="fw-400">
                    Use an impermeable sheet to cover aquariums or bowls.
                  </li>
                  <li className="fw-400">
                    Ensure that all doors and windows are closed.
                  </li>
                  <li className="fw-400">
                    Take all children and pets out of the home while performing
                    pest control.
                  </li>
                </ul>
                <hr />
                <h5 className="hiw_h5">After pest Control </h5>
                <p className="fw-800 ">
                  Evacuate the area for 2-3 hours after pest control treatment.
                </p>
                <h6 className="fw-800 text-success ">Cleaning</h6>
                <ul>
                  <li className="fw-400">Clean your home thoroughly.</li>
                  <li className="fw-400">
                    Use a broom, vacuum cleaner, and mop to get rid of dead
                    pests, droppings, and leftover chemicals.
                  </li>
                  <li className="fw-400">
                    Open all windows to improve ventilation.
                  </li>
                  <li className="fw-400">
                    Wash items like children's toys and any items remained with
                    water.
                  </li>
                </ul>
                <h6 className="fw-800 text-success">Disposal</h6>
                <ul>
                  <li className="fw-400">
                    Properly dispose of any dead pests or debris.
                  </li>
                  <li className="fw-400">
                    Place them in a sealed bag or container.
                  </li>
                  <li className="fw-400">
                    Place the sealed bag or container in an outdoor trash bin.
                  </li>
                </ul>
                <div>
                  <ul>
                    <li className="fw-600 text-danger">
                      Do not touch the floor if it is wet with pesticide perform
                      proper cleaning first
                    </li>
                    <li className="fw-600 text-danger">
                      After completing bed bug services, open all windows.
                    </li>
                    <li className="fw-600 text-danger">
                      Change bed sheets for beds and sofas as needed
                    </li>
                    <li className="fw-600 text-danger">
                      Wipe the floor and any items that can be treated with
                      pesticide.
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <ServicesFAQs
                title="Frequently Asked Questions bed bugs"
                faqs="AuntsControlApartment"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apartment;
