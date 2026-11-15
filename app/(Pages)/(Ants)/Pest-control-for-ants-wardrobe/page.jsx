import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
export const metadata = {
    title: "Expert Ant Pest Control for Wardrobes | Protect Your Clothes",
    description:
      "Ants in your wardrobe? Our professional pest control services eliminate ants from wardrobes using safe, eco-friendly treatments. Keep your clothes and storage areas pest-free with expert solutions. ",
  };
  
const chairContent = [
  "1.Empty the Wardrobe: Remove all clothing and items and inspect the wardrobe for signs of ants. ",
  "2.Clean the Interior: Vacuum and wipe down the wardrobe to remove any ant trails or droppings. ",
  "3.Use Ant Baits: We place ant baits in the corners of the wardrobe to attract and eliminate ants.",
  "4.Seal Entry Points: Seal any gaps or cracks in the wardrobe to prevent ants from entering. ",
  "5.Professional Treatment: Akkad Pest Control can apply safe pesticides to keep ants away from your wardrobe. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Wardrobe</h1>
            <p className="para my-2 fw-500">
            Ants in wardrobes can damage clothes and create unsanitary conditions. Signs of infestation include visible ants, dirt trails, and fabric damage. To protect your clothes and eliminate ants from wardrobes, professional pest control is crucial. Safe, eco-friendly treatments target the ants, ensuring your wardrobe stays clean and pest-free. Regular inspections and proper clothing storage can help prevent future infestations.
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
            Steps to Control Ants in Wardrobe
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
       headertitle="Products Used To Control Ants "
       insects="antsproducts" />
      <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Wardobe" />
      

    </>
  );
};

export default CockroachesChair;
