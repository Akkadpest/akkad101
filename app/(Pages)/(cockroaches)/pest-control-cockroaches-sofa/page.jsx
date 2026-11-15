import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Pest Control for Cockroaches in Sofas | Akkad Pest Control",
    description:
      "Ensure your sofa is free from cockroaches with Akkad Pest Control's expert services. We provide thorough inspections and safe treatments to keep your living space clean and pest-free.",
  };
  
const sofaContent = [
  "1. Remove Cushions and Clean: Take off the cushions and vacuum thoroughly, paying special attention to the seams and corners where cockroaches might hide.",
  "2. Inspect Sofa Frames: Look under the sofa, and check the frame for signs of cockroach activity, such as droppings or egg cases.",
  "3. Use Cockroach Bait or Traps: Place cockroach bait or sticky traps near the sofa legs to catch any lurking pests.",
  "4. Apply Professional-Grade Pesticides: If the infestation is severe, our team will apply safe, professional-grade pesticides specifically formulated to target cockroaches hiding in furniture.",
  "5. Maintain Regular Cleaning: Regular vacuuming and wiping of your sofa help prevent future infestations."
];

const CockroachesSofa = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Sofa</h1>
            <p className="para my-2 fw-500">
              Akkad Pest Control understands how unsettling it can be to discover cockroaches in your sofa. These pests not only damage your furniture but also pose serious health risks, spreading diseases and allergens. Our expert team at Akkad Pest Control specializes in eliminating cockroaches from sofas using safe, eco-friendly methods. We thoroughly inspect and treat your furniture, ensuring your home remains pest-free. Keep your living spaces clean and hygienic with our sofa-specific cockroach extermination services.
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
              Steps to Control Cockroaches in Sofa
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
    <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Sofa" />
    </>
  );
};

export default CockroachesSofa;

