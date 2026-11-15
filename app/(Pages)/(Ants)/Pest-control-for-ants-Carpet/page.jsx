import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
export const metadata = {
    title: "Expert Ant Pest Control for Carpets | Safe & Effective Solutions",
    description:
      "Dealing with ants in your carpet? Our professional pest control services eliminate ants from carpets using safe, eco-friendly treatments. Keep your home clean and pest-free with reliable solutions.",
  };
  
const chairContent = [
  "1.Vacuum the Carpet Thoroughly: Regular vacuuming helps remove ants and their food sources from the carpet. ",
  "2.Steam Clean the Carpet: Steam cleaning can help kill ants and eliminate any eggs hidden in the carpet fibers. ",
  "3.Place Ant Bait Stations: We place ant bait stations near the affected areas to target and eliminate ants. ",
  "4.Use Safe Insecticide: Akkad Pest Control applies safe insecticides to the carpet to prevent further infestations ",
  "5.Regular Maintenance: Regular cleaning and vacuuming help prevent ants from returning to your carpet."


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Carpet</h1>
            <p className="para my-2 fw-500">
            Ants can infest carpets, especially when food crumbs and spills are present, leading to hygiene concerns. Signs of infestation include visible ants, dirt trails, and small piles of debris in or around the carpet. Professional pest control is essential to remove ants from carpets and maintain a clean home environment. Safe, eco-friendly treatments effectively target ants, ensuring your carpets stay clean and pest-free. Regular vacuuming and cleaning can help prevent future infestations.
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
            Steps to Control Ants in Carpet 
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
<FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Carpet" />

     
    </>
  );
};

export default CockroachesChair;
