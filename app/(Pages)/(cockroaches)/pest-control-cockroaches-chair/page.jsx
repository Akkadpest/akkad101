import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import StepOne from "@/Components/Sections/blog/StepOne";
import StepTwo from "@/Components/Sections/blog/StepOne";

export const metadata = {
    title: "Effective Cockroach Pest Control for chairs | Safe & Reliable Solutions",
    description:
      "Found cockroaches in your chairs? Our expert pest control services eliminate cockroaches from cabinets using safe, eco-friendly treatments. Keep your kitchen and storage areas pest-free with our professional solutions. ",
  };
  
const chairContent = [
  "1.Empty the Chair: Remove all items from the cabinet and check for signs of cockroach activity like droppings or egg cases. ",
  "2.Clean Thoroughly: Wipe down all surfaces inside the cabinet using a strong cleaning solution to remove any food residue. ",
  "3.Place Cockroach Baits: We will strategically place cockroach bait in the corners and underneath the cabinets to target hidden pests. ",
  "4.Seal Cracks and Openings: Seal any cracks or gaps in the walls or floor near the cabinets to prevent future infestations. ",
  "5.Professional Pest Control Treatment: Akkad Pest Control will apply specialized treatments inside cabinets to ensure long-term cockroach prevention. "


];

const CockroachesChair = () => {
  return (
    <>


    <StepOne 
    
    title="this is my title " 
    p1="this muy description "
    pic1 ="chair.png"
    alt="cockroaches walikg om chair "
    
    
    />
    <StepTwo
    
    title="this is my title " 
    p1="this muy description "
    pic1 ="chair.png"
    alt="cockroaches walikg om chair "
    
    />
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Chair</h1>
            <p className="para my-2 fw-500">
            Chairs, whether they are made of wood, fabric, or leather, can be attractive hiding places for pests like cockroaches, bedbugs, termites, and mites. Infestations in chairs can be both damaging to the furniture and harmful to your health. In this guide, we’ll walk you through how to spot pests in chairs, what to do to remove them, and how pest control services can help you maintain a clean and pest-free home or office.

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
              Steps to control cockroaches in Chair
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
      <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Chair" />
    </>
  );
};

export default CockroachesChair;
