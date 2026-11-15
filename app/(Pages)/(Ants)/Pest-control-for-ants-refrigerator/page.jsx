import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
export const metadata = {
    title: "Expert Ant Pest Control for Refrigerators | Safe & Reliable Solutions",
    description:
      "Dealing with ants in your refrigerator? Our professional pest control services eliminate ants from refrigerators using safe, eco-friendly treatments. Keep your kitchen pest-free and hygienic. ",
  };
  
const chairContent = [
  "1.Clean the Refrigerator: Remove food and thoroughly clean the fridge to remove any ant-attracting particles. ",
  "2.Inspect Seals and Vents: Ants often enter through damaged seals or vents, so check these areas carefully. ",
  "3.Use Ant Baits: We place ant baits near the refrigerator to target and eliminate the ant colony.",
  "4.Seal Cracks and Gaps: Seal any cracks around the refrigerator where ants might enter. ",
  "5.Professional Treatment: Akkad Pest Control uses safe, food-grade treatments to prevent ants from returning to your refrigerator. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Refrigerator</h1>
            <p className="para my-2 fw-500">
            Ants can invade refrigerators in search of food, leading to contamination and hygiene concerns. Signs of an infestation include visible ants, dirt trails, and ants gathering around food items or seals. To effectively eliminate ants from refrigerators, professional pest control is crucial. Safe, eco-friendly treatments ensure that ants are removed without harming your appliances or food.       
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
            Steps to Control Ants in Refrigerator:
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
    <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Refrigerator" />
   

    </>
  );
};

export default CockroachesChair;
