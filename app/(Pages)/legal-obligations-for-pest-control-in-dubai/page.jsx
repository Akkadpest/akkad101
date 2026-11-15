import AkkadPestControlServices from "@/Components/Sections/AkkadPestService";
import FAQone from "@/Components/Sections/FAQs/faqaOne";
import Offices from "@/Components/Sections/Offices";
import React from "react";
import contactData from "../location/pest-control-dubai/contact-us/offices.json";
const Obligation = [
  {
    heading: "Landlord Responsibilities:",
    desc: "Landlords must maintain pest-free properties under Dubai Rental Law.",
  },
  {
    heading: "Tenant Responsibilities:",
    desc: "In some cases, lease agreements may specify that tenants handle pest control.",
  },
  {
    heading: "Municipality Regulations:",
    desc: "Dubai Municipality may issue fines for non-compliance with pest control regulations.",
  },
];
const Immediate_sign = [
  {
    heading: "🔊 Unusual Noises:",
    desc: "Scratching or rustling in walls or ceilings can indicate rodents or pests.",
  },
  {
    heading: "💩 Droppings or Nests:",
    desc: " Visible droppings or nests are clear signs of pest activity.",
  },
  {
    heading: "🔧 Property Damage:",
    desc: "Chewed wires, holes in walls, or damaged wood suggest an infestation.",
  },
  {
    heading: "💨 Unpleasant Odors",
    desc: " A musty or foul smell may signal pests such as rodents or insects.",
  },
];
const professional = [
  {
    heading: "🛠️ DIY Pest Control:",
    desc: "Suitable for minor issues but may not be effective for severe infestations.",
  },
  {
    heading: "🏢 Professional Pest Control:",
    desc: " Necessary for long-term solutions and handling serious infestations.",
  },
  {
    heading: "💸 Cost Consideration",
    desc: " While DIY methods are cheaper, professional services ensure thorough pest eradication.",
  },
];
const firstOffice = contactData.contact_page[0];


const LegalObligationsPestControlDubai = () => {
  return (
    <div className="body-bg-color">
      <div className="container container-max-width py-4">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1 className="fw-bold my-3 " style={{ fontSize: "40px" }}>
              Legal Obligations for Pest Control in Dubai
            </h1>
            {Obligation.map((item, index) => (
              <li key={index}>
                <span className="lh-normal my-3 text-secondary ">
                  <strong>{item.heading}</strong>
                  {item.desc}
                </span>
              </li>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <Offices off={firstOffice} />
          </div>
        </div>
        <section>
          <div className="row my-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className="fw-bold">
                Are landlords responsible for pest control in Dubai?
              </h2>
              <p className="lh-normal my-3 text-secondary ">
                Yes, landlords are typically responsible for pest control in
                rental properties. According to Dubai Rental Law, they must
                maintain the property in good condition, which includes
                preventing and addressing pest infestations. If tenants
                encounter pests, they should notify the landlord, who is
                expected to arrange pest control services. However, if the lease
                agreement specifies otherwise, tenants may be responsible for
                pest control.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inspected-container">
                <div>
                  <h2 style={{ color: "#333" }}>
                    How often should a house be inspected for pests?
                  </h2>
                  <p className=" fs-5 pb-0">
                    1.Houses should be inspected for pests every 3 to 6 months,
                    depending on the property's location and condition.
                  </p>
                  <p className=" fs-5 pb-0">
                    2.Regular inspections help prevent infestations and maintain
                    a healthy living environment.
                  </p>
                  <p className=" fs-5">
                    3.High-risk areas may require more frequent checks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row my-5">
            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className="sign-immediate">
                <div>
                  <h2 className="fs-3" style={{ color: "#333" }}>
                    🛑 Signs Your Home Needs Immediate Pest Control{" "}
                  </h2>
                  {Immediate_sign.map((item, index) => (
                    <div className="sign-text">
                      <p className="my-4">
                        <strong>{item.heading}</strong>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row mx-2">
            <div className="col-lg-5 col-md-12 col-md-12 mb-4">
              <img
                src="/images/new_page_images/Professional.png"
                className="img-fluid"
                alt="Professional"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-md-12">
              <div className="sign-immediate">
                <div>
                  <h2 className="fs-3" style={{ color: "#333" }}>
                    ⚖️ DIY vs. Professional Pest Control
                  </h2>{" "}
                  {professional.map((item, index) => (
                    <div className="sign-text" key={index}>
                      <p className="my-4 lh-md">
                        <strong>{item.heading}</strong>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                  <p className="text-center sign-text">
                    <strong>Contact Akkad Pest Control </strong>
                    for reliable and thorough pest eradication services.
                  </p>
                  <h4 className="sign-immediate-info my-3"><strong>Phone:</strong> +971 4-396-6211</h4>
                  <h4 className="sign-immediate-info my-3"><strong>Email:</strong> info@pestcontrol.ae</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row d-flex align-items-baseline mb-4">
            <div className="col-lg-7">
              <AkkadPestControlServices />
            </div>
            <div className="col-lg-5">
              <FAQone faqs="LegalObligations" title="FAQ" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegalObligationsPestControlDubai;
export const metadata = {
  title: "Legal Obligations for Pest Control in Dubai | Regulations and Compliance",
  description:
    "Learn about the legal obligations for pest control in Dubai, including safety regulations and compliance requirements for businesses and homeowners. Stay informed on local pest control laws.",
};