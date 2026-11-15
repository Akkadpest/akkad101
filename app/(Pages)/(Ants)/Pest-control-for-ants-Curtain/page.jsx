import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
export const metadata = {
    title: "Effective Ant Pest Control for Curtains | Safe & Professional Solutions",
    description:
      "Ants in your curtains? Our expert pest control services eliminate ants from curtains using safe, eco-friendly treatments. Keep your home pest-free and clean with reliable solutions. ",
  };
  
const chairContent = [
  "1.Remove Bedding and Clean Thoroughly: Strip the bed of all bedding and wash everything in hot water to kill any eggs or nymphs. ",
  "2.Inspect Bed Frame and Mattress: Look for cockroach droppings, eggs, or live cockroaches around the mattress seams and bed frame. ",
  "3.Place Bait Traps Under Bed: We recommend placing cockroach bait traps under the bed to lure out hidden pests. ",
  "4.Use Insecticide Safely: If necessary, Akkad Pest Control can apply insecticides in a safe manner, targeting areas where cockroaches are likely to be. ",
  "5.Regular Bed Maintenance: Keep your bed clean and avoid eating in bed to prevent cockroaches from returning. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Curtain</h1>
            <p className="para my-2 fw-500">
            Ants can infest curtains, attracted by dust, moisture, or nearby food sources, causing hygiene and comfort issues. Signs of infestation include visible ants, dirt trails, and ants gathering near curtain folds or rods. Professional pest control is essential to remove ants from curtains and maintain a clean living space. Safe, eco-friendly treatments target ants effectively, ensuring your home stays pest-free and hygienic. Regular cleaning and maintenance can help prevent future infestations.
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
           Steps to Control Ants in Curtain
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
     <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Curtain" />
    

    </>
  );
};

export default CockroachesChair;
