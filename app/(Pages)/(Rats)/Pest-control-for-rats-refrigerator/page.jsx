import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Expert Rat Pest Control for Refrigerators | Safe & Effective Solutions",
    description:
      "Rats in your refrigerator? Our professional pest control services remove rats from refrigerators using safe, eco-friendly treatments. Keep your kitchen clean and pest-free with our reliable solutions. ",
  };
  
const chairContent = [
  "1.Clean the Refrigerator Thoroughly: Remove all food and clean the refrigerator with a disinfectant to remove any droppings or urine. ",
  "2.Inspect for Entry Points: Check the seals, vents, and surrounding areas for signs of rat activity or entry points. ",
  "3.Place Rat Traps: We strategically place rat traps around the refrigerator to catch any rats hiding nearby. ",
  "4.Seal Cracks and Gaps: Ensure that any cracks or gaps around the refrigerator are sealed to prevent rats from entering. ",
  "5.Professional Rat Extermination: Akkad Pest Control provides expert rat removal services to keep your kitchen pest-free. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Rats in Refrigerator</h1>
            <p className="para my-2 fw-500">
            Rats can invade refrigerators, contaminating food and causing health hazards. Signs of infestation include gnaw marks on food packaging, droppings, and foul odors. Professional pest control is essential to eliminate rats from refrigerators and protect your kitchen. Safe, eco-friendly treatments effectively target rats, ensuring your refrigerator and food remain clean and safe. Regular cleaning and inspections can help prevent future infestations.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="/images/chair.png" alt="CockroachesChair" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mt-5 mb-3 ">
            Steps to Control Rats in Refrigerator
                        </h2>
            
              {chairContent.map((item, index) => (
                <div key={index}>
                    <p className="  ps-5">{item}</p>
                </div>
              ))}

           
          </div>
        </div>
        
      </div>
     <BookNow />
     <FourKinds
       headertitle="Products Used To Control Rats "

       insects="rats" />
      <FAQs faqs="ratcontrolfaq" title="FAQ" />
     
    </>
  );
};

export default CockroachesChair;
