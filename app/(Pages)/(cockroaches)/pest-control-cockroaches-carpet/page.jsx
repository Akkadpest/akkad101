import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Effective Cockroach Pest Control for Carpets | Safe & Reliable Solutions",
    description:
      " Dealing with cockroaches in your carpet? Our expert pest control services safely eliminate cockroaches from carpets, ensuring your home stays clean and pest-free. Contact us for safe, eco-friendly treatments.",
  };
  
const chairContent = [
  "1.Vacuum the Carpet Regularly: Vacuum your carpet thoroughly, paying close attention to corners and edges where cockroaches might hide. ",
  "2.Use Cockroach Bait: We strategically place cockroach baits near areas where cockroaches are likely to enter. ",
  "3.Steam Clean the Carpet: Consider steam cleaning the carpet to kill cockroach eggs and nymphs. ",
  "4.Apply Insecticide Powder: Akkad Pest Control can apply safe insecticide powders to carpets that effectively eliminate cockroaches.",
  "5.Keep Carpet Clean: Regular cleaning and maintenance of your carpet can help prevent future infestations. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in carpet</h1>
            <p className="para my-2 fw-500">

            Cockroaches can hide in the fibers of carpets, contaminating your living space and posing health risks. Signs of infestation include droppings, an unusual odor, and visible insects on or near your carpet. To effectively eliminate cockroaches from carpets, professional pest control is necessary. Safe, eco-friendly treatments target these pests within the carpet, ensuring your home remains clean and healthy. Regular cleaning and inspections can help prevent future infestations.
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
              steps to control cockroaches in carpet
            </h2>
            
              {chairContent.map((item, index) => (
                <div key={index}>
                    <p className="  ps-5">{item}</p>
                </div>
              ))}

           
          
          </div>
        </div>
      </div>
      <BookNow/> 
      <FourKinds
      headertitle="Products Used To Control Cockroaches "
      insects="cockroaches" />
      <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Carpet" />
    </>
  );
};

export default CockroachesChair;
