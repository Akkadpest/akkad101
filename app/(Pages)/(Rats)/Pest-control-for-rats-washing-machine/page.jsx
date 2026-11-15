import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Expert Rat Pest Control for Washing Machines | Safe & Effective Solutions",
    description:
      "Rats in your washing machine? Our professional pest control services eliminate rats from washing machines using safe, eco-friendly treatments. Protect your home and appliances with reliable pest control solutions ",
  };
  
const chairContent = [
  "1.Inspect the Washing Machine for Signs of Rats: Look for droppings, gnaw marks, or nests around the machine.",
  "2.Clean the Washing Machine: Run a cleaning cycle to eliminate any contaminants left behind by the rats. ",
  "3.Use Rat Traps: We place traps around the washing machine to catch any rodents hiding nearby. ",
  "4.Seal Cracks and Gaps: Ensure that any cracks or gaps near the washing machine are sealed to prevent rats from entering. ",
  "5.Professional Rat Removal: Akkad Pest Control provides expert rat removal services to keep your laundry area pest-free. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Rats in Washing Machine</h1>
            <p className="para my-2 fw-500">
            Rats can invade washing machines, damaging hoses, wiring, and posing health risks. Signs of infestation include droppings, gnaw marks, and strange noises coming from the machine. Professional pest control is essential to remove rats from washing machines and ensure a safe, clean home environment. Safe, eco-friendly treatments target rats without harming your appliances. Regular maintenance and inspections can help prevent future infestations.            </p>
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
            Steps to Control Rats in Washing Machine
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
