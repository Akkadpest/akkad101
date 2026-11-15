import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Effective Cockroach Pest Control for Beds | Safe & Thorough Solutions",
    description:
      "Dealing with cockroaches in your bed? Our professional pest control services eliminate cockroaches from beds using safe, non-toxic treatments. Sleep peacefully in a pest-free environment with expert solutions. ",
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
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Bed</h1>
            <p className="para my-2 fw-500">
            Finding cockroaches in your bed can be unsettling and pose health risks. Signs of infestation include droppings, eggs, and unusual odors around your bed. To eliminate cockroaches and protect your sleeping environment, professional pest control is essential. Safe and targeted treatments ensure that the areas around your bed are thoroughly treated, creating a pest-free, hygienic space. Regular inspections can help prevent future infestations, allowing you to sleep peacefully.
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
              steps to control cockroaches in Bed
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
