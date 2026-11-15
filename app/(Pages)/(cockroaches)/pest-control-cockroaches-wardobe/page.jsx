import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Expert Cockroach Pest Control for Wardrobes | Safe & Efficient Removal",
    description:
      " Worried about cockroaches in your wardrobe? Our specialized pest control services eliminate cockroaches from wardrobes using safe, eco-friendly methods. Protect your clothes and home from infestations.",
  };
  
const chairContent = [
  "1.Empty the Wardrobe: Remove all clothing and items, and inspect for droppings or eggs. ",
  "2.Vacuum the Interior: Vacuum every nook and cranny of the wardrobe, including shelves, corners, and drawer interiors. ",
  "3.Apply Gel Bait: Our team uses cockroach gel bait to effectively attract and eliminate cockroaches hiding in the wardrobe. ",
  "4.Use a Non-Toxic Spray: If necessary, we can use a non-toxic spray in your wardrobe to kill any remaining pests. ",
  "5.Keep Wardrobe Clean: Regular cleaning and airing out the wardrobe help prevent future infestations. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Wardrobe</h1>
            <p className="para my-2 fw-500">
            Wardrobes provide ideal hiding spots for cockroaches, allowing them to infest your clothes and contaminate personal items. Signs of an infestation include droppings, strange odors, and damaged fabrics. To protect your clothing and prevent health risks, professional pest control is essential. Safe, targeted treatments can eliminate cockroaches from deep within your wardrobe, ensuring your belongings stay clean and pest-free.
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
              steps to control cockroaches in Wardrobe
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
      <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Wardobe" />
      <FourKinds
      headertitle="Products Used To Control Cockroaches "
      insects="cockroaches" />
    </>
  );
};

export default CockroachesChair;
