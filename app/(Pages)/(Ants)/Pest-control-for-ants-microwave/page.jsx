import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FAQs from "@/Components/Sections/FAQs";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
ReviewsSchema
export const metadata = {
    title: "Effective Ant Pest Control for Microwaves | Safe & Reliable Solutions",
    description:
      "Dealing with ants in your microwave? Our professional pest control services eliminate ants from microwaves using safe, eco-friendly treatments. Ensure a clean, pest-free kitchen. ",
  };
  
const chairContent = [
  "1.Clean the Microwave: Clean the microwave after every use to remove food particles that may attract ants. ",
  "2.Inspect for Entry Points: Check the seams and vents of the microwave for signs of ants.",
  "3.Use Ant Baits: We place ant baits around the microwave to eliminate hidden pests. ",
  "4.Seal Cracks and Gaps: Ensure that there are no gaps where ants can enter the microwave.",
  "5.Professional Treatment: Akkad Pest Control applies non-toxic, safe insecticides to prevent future infestations."


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Microwave</h1>
            <p className="para my-2 fw-500">
            Ants can infest microwaves, attracted by food spills and crumbs, creating hygiene concerns and contamination risks. Signs of infestation include visible ants, dirt trails, and ants near microwave vents or seals. To remove ants from microwaves and protect your kitchen, professional pest control is essential. Safe, eco-friendly treatments effectively target ants without harming your appliance, ensuring a clean and pest-free environment. 
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
            Steps to Control Ants in Microwave 
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
    <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Microwave" />
   

    </>
  );
};

export default CockroachesChair;
