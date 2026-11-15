import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Professional Ant Pest Control for Washing Machines | Safe & Effective Solutions",
    description:
      "Ants in your washing machine? Our expert pest control services eliminate ants from washing machines using safe, eco-friendly treatments. Keep your laundry area clean and pest-free. ",
  };
  
const chairContent = [
  "1.Clean the Machine: Run an empty cycle with detergent to clean the inside of the washing machine. ",
  "2.Inspect Surrounding Areas: Check the area around the washing machine for signs of ants or trails. ",
  "3.Place Ant Baits: We place ant baits near the washing machine to attract and eliminate the ants. ",
  "4.Seal Cracks and Gaps: Seal any cracks or gaps around the washing machine to prevent future entry.",
  "5.Professional Treatment: Akkad Pest Control applies safe insecticides to keep ants out of your laundry area. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Washing Machine</h1>
            <p className="para my-2 fw-500">
            Ants can invade washing machines, attracted by moisture and detergent residue, leading to contamination and damage. Signs of infestation include visible ants, dirt trails, and insects around seals or drainage areas. Professional pest control is crucial to eliminate ants from washing machines and maintain a clean laundry environment. Safe, eco-friendly treatments target ants without harming your appliance, ensuring a pest-free laundry room.
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
            Steps to Control Ants in Washing Machine
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
      headertitle="Products Used To Control Ants "
      insects="antsproducts" />
     <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Washing Machine" />

    </>
  );
};

export default CockroachesChair;
