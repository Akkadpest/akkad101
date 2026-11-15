import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Expert Cockroach Pest Control for Curtains | Safe & Effective Solutions",
    description:
      " Found cockroaches in your curtains? Our specialized pest control services eliminate cockroaches from curtains using safe, non-toxic treatments. Keep your home clean and pest-free with expert solutions.",
  };
  
const chairContent = [
  "1.Remove and Wash Curtains: Take down your curtains and wash them in hot water to kill any eggs or pests. ",
  "2.Vacuum the Curtain Rods: Cockroaches often hide in curtain rods or along window frames, so make sure to vacuum these areas. ",
  "3.Place Gel Baits Near Windows: We place cockroach gel baits near windows and curtains to target hidden pests. ",
  "4.Use Safe Pesticides: Akkad Pest Control can apply non-toxic pesticides to prevent cockroaches from returning to your curtains. ",
  "5.Regular Maintenance: Keep your curtains and windows clean to avoid attracting cockroaches. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Curtain</h1>
            <p className="para my-2 fw-500">
            Cockroaches can hide in the folds of curtains, making your home unsanitary and uncomfortable. Common signs include droppings, strange odors, and visible insects around your window treatments. Professional pest control is essential to eliminate cockroaches from curtains and restore cleanliness to your home. Safe, eco-friendly treatments target the pests, ensuring your living space remains pest-free and hygienic. Regular inspections can help prevent future infestations.
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
              steps to control cockroaches curtain
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
      
      headertitle="Products Used To Control Cockroaches "
      insects="cockroaches" />
      <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Curtain" />
    </>
  );
};

export default CockroachesChair;
