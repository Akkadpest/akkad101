import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Professional Pest Control for Rats in Bookshelf | Safe & Effective Removal",
    description:
      "Eliminate rats from your bookshelf with our expert pest control services. We provide safe, fast, and efficient solutions to remove rodents and prevent infestations in your home. Contact us today for a rodent-free environment!",
  };
  
const chairContent = [
  "1.Inspect the Area Around the Bookshelf: Check for droppings, gnaw marks, or other signs of rat activity near the bookshelf.",
  "2.Clean the Bookshelf: Remove books and clean the area thoroughly to ensure that the bookshelf is free of contaminants left by rodents.",
  "3.Place Rat Traps: We place traps around the bookshelf to catch any rodents hiding nearby.",
  "4.Seal Entry Points: Ensure that any cracks or gaps near the bookshelf are sealed to prevent rats from entering.",
  "5.Professional Extermination: Akkad Pest Control offers professional rat control services to eliminate rodents and prevent future infestations in your bookshelf and home."
];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Rats in Bookshelf</h1>
            <p className="para my-2 fw-500">
            Rats can hide in and around bookshelves, damaging books and posing health risks. Akkad Pest Control offers expert services to remove rats from bookshelves and ensure your home stays clean and safe.
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
            Steps to Control Rats in Bookshelf                        
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
      <FAQs faqs="ratcontrolfaq" title="FAQ " />
     
    </>
  );
};

export default CockroachesChair;
