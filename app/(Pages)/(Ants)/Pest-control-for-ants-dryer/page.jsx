import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow"; 
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";

export const metadata = {
    title: "Expert Ant Pest Control for Dryers | Safe & Reliable Solutions",
    description:
      "Ants in your dryer? Our professional pest control services eliminate ants from dryers using safe, eco-friendly treatments. Keep your laundry area pest-free and clean. ",
  };
  
const chairContent = [
  "1.Clean the Dryer Lint Trap: Clean the lint trap to remove debris that might attract ants. ",
  "2.Inspect the Area Around the Dryer: Check for ant trails or signs of activity around the dryer. ",
  "3.Place Ant Bait Stations: We place ant bait stations near the dryer to eliminate the entire colony. ",
  "4.Seal Cracks: Ensure that there are no cracks or gaps where ants could enter the dryer. ",
  "5.Professional Treatment: Akkad Pest Control uses safe treatments to prevent ants from infesting your dryer. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Dryer</h1>
            <p className="para my-2 fw-500">
            Ants can infest dryers, attracted by warmth and moisture, causing contamination and hygiene concerns. Signs of infestation include visible ants, dirt trails, and ants gathering around seals or vents. Professional pest control is essential to remove ants from dryers and maintain a clean laundry area. Safe, eco-friendly treatments target ants without damaging your appliance, ensuring a pest-free environment.
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
            Steps to Control Ants in Dryer
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
  <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Dryer" />
  

    </>
  );
};

export default CockroachesChair;
