import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
export const metadata = {
    title: "Professional Ant Pest Control for Ovens | Safe & Effective Solutions",
    description:
      "Ants in your oven? Our expert pest control services eliminate ants from ovens using safe, eco-friendly treatments. Keep your kitchen pest-free and hygienic with our reliable solutions. ",
  };
  
const chairContent = [
  "1.Clean the Oven: Remove food debris and grease buildup that could attract ants. ",
  "2.Inspect for Ant Trails: Look around the oven for any signs of ants entering or leaving. ",
  "3.Place Bait Stations: We place ant bait stations near the oven to attract and kill ants. ",
  "4.Seal Entry Points: Ensure that cracks and gaps near the oven are sealed to prevent ants from entering. ",
  "5.Professional Treatment: Akkad Pest Control can apply safe insecticides to keep ants away from your kitchen appliances. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Oven</h1>
            <p className="para my-2 fw-500">
            Ants can infest ovens, attracted by food residue and warmth, leading to contamination and hygiene risks. Signs of infestation include visible ants, dirt trails, and ants near oven seals or crevices. Professional pest control is essential to remove ants from ovens and restore cleanliness to your kitchen. Safe, eco-friendly treatments target ants without harming your appliance, ensuring a pest-free environment. Regular cleaning and proper food storage can help prevent future infestations.
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
            Steps to Control Ants in Oven
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
     <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Oven" />

   

    </>
  );
};

export default CockroachesChair;
