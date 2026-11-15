import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Effective Rat Pest Control for Cabinets | Safe & Reliable Solutions",
    description:
      "Rats in your cabinet? Our expert pest control services eliminate rats from cabinets using safe, eco-friendly treatments. Keep your food and storage areas pest-free with our professional solutions. ",
  };
  
const chairContent = [
  "1.Empty the Cabinet: Remove all items from the cabinet and inspect for signs of rat activity such as droppings or gnaw marks.",
  "2.Clean the Cabinet Thoroughly: Use a disinfectant to clean the interior of the cabinet and remove any food residue.",
  "3.Set Rat Traps: We strategically place rat traps inside and around the cabinet to catch any rodents. ",
  "4.Seal Cracks and Gaps: Ensure that all cracks or gaps in the cabinet or nearby walls are sealed to prevent rats from entering.",
  "5.Professional Pest Control: Akkad Pest Control offers effective rat extermination services to keep your kitchen safe. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Rats in Cabinet</h1>
            <p className="para my-2 fw-500">
            Rats can infest cabinets, contaminating food and damaging stored items. Signs of infestation include droppings, gnaw marks, and foul odors inside cabinets. To effectively eliminate rats from cabinets and protect your home, professional pest control is essential. Safe, eco-friendly treatments target rats, ensuring your storage spaces remain clean and pest-free. Regular inspections and proper storage practices can help prevent future infestations.
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
            Steps to Control Rats in Cabinet
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
      <FAQs faqs="ratcontrolfaq" title="FAQ Pest Control for Ants in Bookshelf" />
 
    </>
  );
};

export default CockroachesChair;
