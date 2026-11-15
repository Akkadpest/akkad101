import React from "react";
import Link from "next/link";
import FAQs from "@/Components/Sections/FAQs";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";

export const metadata = {
    title: "Safe Cockroach Pest Control for Cabinets | Effective & Eco-Friendly Solutions",
    description:
      "Dealing with cockroaches in your cabinets? Our expert pest control services eliminate cockroaches from kitchen and storage cabinets using safe, eco-friendly treatments. Keep your home pest-free with reliable solutions.",
  };
  
const chairContent = [
  "1.Empty the Cabinet: Remove all items from the cabinet and check for signs of cockroach activity like droppings or egg cases. ",
  "2.Clean Thoroughly: Wipe down all surfaces inside the cabinet using a strong cleaning solution to remove any food residue. ",
  "3.Place Cockroach Baits: We will strategically place cockroach bait in the corners and underneath the cabinets to target hidden pests. ",
  "4.Seal Cracks and Openings: Seal any cracks or gaps in the walls or floor near the cabinets to prevent future infestations. ",
  "5.Professional Pest Control Treatment: Akkad Pest Control will apply specialized treatments inside cabinets to ensure long-term cockroach prevention. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Cabinet</h1>
            <p className="para my-2 fw-500">
            Cabinets, especially in kitchens, are prime hiding spots for cockroaches. Signs of an infestation include droppings, foul odors, and damage to stored food or packaging. To eliminate cockroaches from cabinets and prevent contamination, professional pest control is crucial. Safe and eco-friendly treatments target pests within cabinets, ensuring your storage spaces remain clean and pest-free. Regular inspections and proper hygiene practices can help avoid future infestations, keeping your home safe and sanitary.
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
              steps to control cockroaches in cabinet
            </h2>
            
              {chairContent.map((item, index) => (
                <div key={index}>
                    <p className="  ps-5">{item}</p>
                </div>
              ))}

           
          </div>
        </div>
        
        <BookNow />



     <FourKinds 
     headertitle="Products Used To Control Cockroaches "
     insects="cockroaches" />

      </div>
      <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Cabinet" />
     
    </>
  );
};

export default CockroachesChair;
