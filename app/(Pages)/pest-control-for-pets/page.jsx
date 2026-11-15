import GoogleReview from "@/Components/Sections/GoogleReview";
import AkkadPestControlServices from "@/Components/Sections/AkkadPestService";
import FAQone from "@/Components/Sections/FAQs/faqaOne";
import Offices from "@/Components/Sections/Offices";
import contactData from '../location/pest-control-dubai/contact-us/offices.json'
import Link from "next/link";
import React from "react";
const firstOffice = contactData.contact_page[0];

const choose_pets = [
  {
    heading: "Pet-Safe Solutions",
    desc: "Our products are carefully selected to be non-toxic to pets such as cats, dogs, birds, and other animals. We only use eco-friendly pest control methods and products that won’t harm your pets, ensuring they stay safe while your home becomes pest-free.",
  },
  {
    heading: "Customized Treatments",
    desc: "Every home is different, and so are the types of pests you may be dealing with. We provide customized treatment plans based on the pests in your home and your pet’s needs, ensuring minimal disruption to their daily routine while effectively removing pests.",
  },
  {
    heading: "Comprehensive Pest Control Services",
    desc: "Whether you’re dealing with ants, cockroaches, fleas, ticks, spiders, rodents, or other pests, Akkad Pest Control has you covered. We offer a full range of pest control services to handle infestations of any size while using pet-friendly products that get the job done.",
  },
  {
    heading: "Licensed and Experienced Technicians",
    desc: "Our team of licensed pest control experts has extensive training in safe pest management. We understand the importance of minimizing risks to your pets while ensuring that your home is thoroughly protected from pests.",
  },
  {
    heading: "Prevention & Ongoing Maintenance",
    desc: "Not only do we eliminate pests, but we also help you prevent them from coming back. Our pest prevention plans include safe and sustainable measures to protect your home and your pets long-term, offering peace of mind for the future.",
  },
];

const PestSafty = [
  {
    heading: "Initial Inspection",
    desc: "We start with a comprehensive inspection of your home to identify the type and extent of the pest problem. Our trained technicians will assess potential entry points, nesting areas, and pest activity, all while considering your pets' usual habitats and play areas.",
  },
  {
    heading: "Pet-Safe Product Selection",
    desc: "Based on the inspection, we select pest control products that are specifically designed to be safe for pets. Our products are non-toxic and eco-friendly, ensuring that they do not pose any harm to your pets while effectively targeting pests.",
  },
  {
    heading: "Targeted Treatment Application",
    desc: "We apply treatments in targeted areas to minimize exposure to your pets. For instance, when dealing with fleas or ticks, we focus on areas where these pests are most active, such as carpets and pet bedding, using pet-safe solutions that are gentle but effective.",
  },
  {
    heading: "Pet Exclusion and Safety Measures",
    desc: "To protect your pets during treatment, we advise keeping them away from the treated areas. We use techniques such as placing barriers or creating pet-free zones to ensure that your pets are not exposed to any chemicals or residues.",
  },
  {
    heading: "Post-Treatment Monitoring and Recommendations",
    desc: "After treatment, we provide guidelines on when it’s safe for your pets to return to the treated areas. We also monitor the effectiveness of the treatment and follow up to ensure that the pest problem is resolved.",
  },
  {
    heading: "Ongoing Prevention",
    desc: "To prevent future infestations, we offer advice on maintaining a pest-free environment and can schedule regular follow-up visits. We also provide pet-safe preventive measures, such as traps and barriers, to keep pests at bay without endangering your pets.",
  },
];

const pest_risk = [
  {
    heading: "Fleas and Ticks:",
    subheading: "Skin Irritations:",
    desc: "Fleas and ticks can cause severe itching, skin infections, and allergic reactions in pets.",
    subheading1: "Disease Transmission:",
    desc1:
      "Diseases like Lyme disease and Ehrlichiosis can be transmitted to humans through contact with infested pets.",
  },
  {
    heading: "Rodents:",
    subheading: "Health Risks: ",
    desc: " Rodents can carry diseases such as leptospirosis and hantavirus.",
    subheading1: "Transmission:",
    desc1:
      " These diseases can be spread to both pets and humans through contact with rodent droppings or urine.",
  },
  {
    desc: "With our pet-friendly pest control solutions, you can ensure that your home is free from these harmful pests. Our treatments protect your pets and reduce the risk of pest-related health issues, keeping your home safe for everyone.",
  },
];

const PestControlForPets = () => {
  return (
    <div className="body-bg-color">
      <div className="container container-max-width ">
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <h1 className="fw-700 main_heading my-3">Pest Control for Pets</h1>
            <p className="text-secondary fw-normal text-justify pe-1">
              At Akkad Pest Control, we understand that your pets are part of
              the family, and their safety is your top priority. That’s why we
              offer specialized{" "}
              <strong>pest control services for homes with pets,</strong>{" "}
              ensuring that any treatment used is 100% safe for your furry
              friends while effectively eliminating pests. With years of
              experience in the pest control industry, we provide pet-friendly
              pest management solutions tailored to protect your home from
              unwanted intruders without compromising your pet’s health.
            </p>
          </div>
          <div className="col-lg-6 my-3">
            <img
              src="/images/new_page_images/dog.webp"
              alt="dog"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row px-2">
          <div className="col-lg-8 my-4  pets-safty-container">
            <h2 className="pets-safty text-center">
              How We Control Pests Safely for Pets
            </h2>
            {PestSafty.map((item, index) => (
              <div className="my-3" key={index}>
                <h2 className="pets-safty-content ">{item.heading}</h2>
                <p className="text-secondary fw-normal text-justify ">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <section >
        <Offices off={firstOffice} />

        </section>
        <section>
          <div className="row d-flex  justify-content-center">
            <div className="col-lg-10">
              <div className="pet-safe-control-container my-4 ">
                <h2 className="mb-4 pet-safe-control-heading mb-4 fw-bold text-center">
                  Why Choose Akkad Pest Control for Pet-Safe Pest Control?
                </h2>
                <div>
                  <div className="row d-flex px-4">
                    {choose_pets.map((item, index) => (
                      <div className="col-lg-4  col-md-6 col-sm-12 my-2">
                        <div className="pets-safe-card" key={index}>
                          <div>
                            <h3 className="fs-5  fw-bold pet-safe-control-heading">
                              {item.heading}
                            </h3>
                            <p className="pets-safe-text px-0 pt-0">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 my-4">
              <img
                src="/images/new_page_images/cat.webp"
                className="img-fluid"
                alt="cat"
              />
            </div>
            <div className="col-lg-6 my-3 col-md-6 col-sm-12 d-flex flex-column  align-items-center">
              <GoogleReview />
              <div className="col-md-6 pb-3 my-2">
                <h2 className="akkad_heading_one fw-700 black text-center">
                  We Are Here to Help you
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center mt-1">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/location/pest-control-dubai/contact-us">Dubai</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                    pest control For Pets
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row d-flex  justify-content-center">
            <div className="col-lg-10">
              <div className="pest-risk-container my-4 ">
                <h2 className="mb-4 pet-safe-control-heading mb-4 fw-bold text-center">
                  Protecting Your Home and Pets from Pest-Related Risks
                </h2>
                <div>
                  <div className="row d-flex px-4">
                    {pest_risk.map((item, index) => (
                      <div className="col-lg-4  col-md-6 col-sm-12 my-2">
                        <div className="pets-safe-card" key={index}>
                          <div>
                            <h3 className="fs-5  fw-bold pet-safe-control-heading">
                              {item.heading}
                            </h3>
                            <p className=" px-0 pt-0">
                              <strong>{item.subheading}</strong>
                              {item.desc}
                            </p>
                          </div>
                          <div>
                            <p className=" px-0 pt-0">
                              <strong>{item.subheading1}</strong>
                              {item.desc1}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row d-flex align-items-baseline mb-4">
            <div className="col-lg-7">
              <AkkadPestControlServices/>
            </div>
            <div className="col-lg-5">
              <FAQone  faqs="PestControlForPets" title="Frequently Asked Questions About Pet-Safe Pest Control"/>
            </div>
          </div>
        </section>
       
      </div>
    </div>
  );
};

export default PestControlForPets;
export const metadata = {
  title: "Pet-Friendly Pest Control Solutions | Safe for Your Furry Friends",
  description:
    "Discover effective pest control solutions designed specifically for homes with pets. Our eco-friendly methods ensure a pest-free environment while keeping your furry friends safe. Learn more about our pet-friendly services today!",
};