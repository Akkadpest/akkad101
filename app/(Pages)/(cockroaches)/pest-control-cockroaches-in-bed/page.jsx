import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Pest Control for Cockroaches in Bed | ",
    description:
      "Ensure your sofa is free from cockroaches with Akkad Pest Control's expert services. We provide thorough inspections and safe treatments to keep your living space clean and pest-free.",
  };
  
const sofaContent = [
  "1. Remove Bedding and Clean Thoroughly: Strip the bed of all bedding and wash everything in hot water to kill any eggs or nymphs.",
  "2. Inspect Bed Frame and Mattress: Look for cockroach droppings, eggs, or live cockroaches around the mattress seams and bed frame.",
  "3. Place Bait Traps Under Bed: We recommend placing cockroach bait traps under the bed to lure out hidden pests.",
  "4. Use Insecticide Safely: If necessary, Akkad Pest Control can apply insecticides in a safe manner, targeting areas where cockroaches are likely to be.",
  "5. Regular Bed Maintenance: Keep your bed clean and avoid eating in bed to prevent cockroaches from returning."
];

const Cockroachesbed = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Bed</h1>
            <p className="para my-2 fw-500">
            Finding cockroaches in your bed can be an alarming experience. Akkad Pest Control offers specialized cockroach extermination for beds, ensuring that these unwelcome guests are eliminated. Our team uses targeted techniques to treat the areas around your bed, ensuring your sleeping environment is safe and hygienic. With our services, you can rest easy knowing your bed is free from pests.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="/images/sofa2.png" alt="CockroachesSofa" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mt-5 mb-3">
              Steps to Control Cockroaches in Bed Frame
            </h2>
            {sofaContent.map((item, index) => (
              <div key={index}>
                <p className=" ps-5">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <BookNow />
      <FourKinds 
      headertitle="Products Used To Control Cockroaches "
      insects="cockroaches" />
      <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Bed" />
    </>
  );
};

export default Cockroachesbed;

