import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Expert Rat Pest Control for Beds | Safe & Effective Solutions",
    description:
      "Rats in your bed? Our professional pest control services eliminate rats from beds using safe, eco-friendly methods. Ensure a safe, hygienic sleeping environment with reliable pest control solutions. ",
  };
  
const chairContent = [
  "1.Inspect the Bed for Signs of Rats: Check the mattress, bed frame, and surrounding area for droppings or gnaw marks. ",
  "2.Clean the Bedding: Remove all bedding and wash it in hot water to kill any germs or contaminants. ",
  "3.Use Rat Traps: We place traps around the bed to catch any rats that may be hiding in the area.",
  "4.Seal Cracks and Gaps: Ensure that all cracks in the walls or floor near the bed are sealed to prevent rats from entering.",
  "5.Professional Extermination: Akkad Pest Control provides expert rat removal services to ensure your bedroom remains rat-free. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Rats in Bed</h1>
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
            Steps to Control Rats in Bed
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
