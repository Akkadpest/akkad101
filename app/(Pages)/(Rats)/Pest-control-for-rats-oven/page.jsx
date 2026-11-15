import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Effective Pest Control for Rats in Oven | Safe and Professional Solutions ",
    description:
      "Get rid of rats in your oven quickly and safely with our professional pest control services. We offer expert solutions to eliminate rodents from your kitchen, ensuring a clean and healthy home. Call now for a fast, reliable service! ",
  };
  
const chairContent = [
  "1.Clean the Oven Thoroughly: Remove any food debris and clean the oven to eliminate any contaminants.",
  "2.Inspect for Signs of Rats: Check the oven and surrounding area for signs of rat activity, such as droppings or gnaw marks. ",
  "3.Place Rat Traps: We place rat traps around the oven to catch any rodents hiding nearby. ",
  "4.Seal Entry Points: Ensure that any gaps or cracks near the oven are sealed to prevent rats from entering. ",
  "5.Professional Pest Control: Akkad Pest Control offers expert rat extermination services to eliminate rats and prevent future infestations. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Rats in Oven</h1>
            <p className="para my-2 fw-500">
            Rats in ovens can cause food contamination and create serious hygiene issues. Akkad Pest Control provides effective solutions to eliminate rats from ovens and ensure your kitchen remains clean.            </p>
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
            Steps to Control Rats in Oven                        </h2>
            
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
