import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Effective Cockroach Pest Control for Tables | Safe & Targeted Solutions",
    description:
      "Find cockroaches hiding in your table? Our professional pest control services target and eliminate cockroaches from tables using safe, eco-friendly methods. Keep your furniture clean and pest-free.",
  };
  
const chairContent = [
  "1.Clean the Table Thoroughly: Wipe down the table surfaces with a disinfectant, paying attention to joints and crevices. ",
  "2.Inspect the Area Around the Table: Cockroaches tend to hide under tables and in nearby areas, so check the surrounding space. ",
  "3.Use Bait Traps: Place cockroach bait traps under and around the table to lure any hidden pests. ",
  "4.Apply Targeted Insecticide: Akkad Pest Control applies safe insecticides near the base of tables to eliminate cockroaches without harming your home. ",
  "5.Maintain a Clean Dining Space: Regularly clean your dining area to avoid attracting cockroaches with food crumbs. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Table</h1>
            <p className="para my-2 fw-500">
            Cockroaches hiding in and around tables can contaminate your dining area, posing health risks to your family. Akkad Pest Control offers professional pest control solutions to remove cockroaches from tables, ensuring your home remains safe and clean. Our trained technicians will thoroughly inspect and treat your tables, eliminating pests quickly and effectively.
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
              steps to control cockroaches in Table
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
   <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Table" />
    </>
  );
};

export default CockroachesChair;
