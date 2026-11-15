import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Professional Rat Pest Control for Sofas | Safe & Effective Solutions",
    description:
      "Dealing with rats in your sofa? Our expert pest control services eliminate rats from sofas using safe, eco-friendly treatments. Protect your furniture and home with reliable pest control solutions. ",
  };
  
const chairContent = [
  "1.Inspect the Sofa Thoroughly: Look for signs of rat activity, such as droppings, gnaw marks, or nests. ",
  "2.Remove Sofa Cushions: Take off the cushions and vacuum thoroughly to remove any droppings or food particles.",
  "3.Use Rat Traps: We place rat traps around the sofa to catch any rats hiding in or near the furniture.",
  "4.Seal Entry Points: Check for any cracks or holes in the walls or floor near the sofa and seal them to prevent rats from entering. ",
  "5.Professional Extermination: Akkad Pest Control offers expert rat extermination services to eliminate rats from your home. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Rats in Sofa</h1>
            <p className="para my-2 fw-500">
            Rats can invade sofas, causing damage to furniture and posing serious health risks. Signs of rat infestation include droppings, gnaw marks, and strange sounds coming from inside the sofa. Professional pest control is essential to eliminate rats from sofas and protect your home. Safe, eco-friendly treatments effectively target rats, ensuring your furniture remains clean and pest-free. Regular inspections and proper cleaning can help prevent future infestations.
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
            Steps to Control Rats in Sofa            
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
