import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Professional Rat Pest Control for Wardrobes | Safe & Effective Solutions",
    description:
      "Rats in your wardrobe? Our expert pest control services remove rats from wardrobes using safe, eco-friendly methods. Protect your clothes and home with reliable pest control solutions. ",
  };
  
const chairContent = [
  "1.Empty the Wardrobe: Remove all clothing and personal items and inspect for signs of rat activity.",
  "2.Clean the Wardrobe Thoroughly: Vacuum and disinfect the wardrobe to remove any droppings or debris. ",
  "3.Set Rat Traps: We place rat traps in and around the wardrobe to catch any hidden rats. ",
  "4.Seal Entry Points: Ensure that any cracks or gaps near the wardrobe are sealed to prevent rats from returning. ",
  "5.Professional Treatment: Akkad Pest Control offers safe and effective rat control treatments to keep your wardrobe rat-free. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Rats in Wardrobe</h1>
            <p className="para my-2 fw-500">
            Rats can infest wardrobes, damaging clothing and personal items while posing health risks. Signs of infestation include droppings, gnaw marks, and unusual odors inside your wardrobe. Professional pest control is necessary to remove rats from wardrobes and protect your belongings. Safe, eco-friendly treatments target rats, ensuring your wardrobe stays clean and pest-free. Regular inspections and proper storage can help prevent future infestations.
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
            Steps to Control Rats in Wardrobe
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
